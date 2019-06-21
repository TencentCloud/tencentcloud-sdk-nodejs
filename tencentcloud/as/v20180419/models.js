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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 经过 Base64 编码后的自定义数据，最大长度不超过16KB。如果要清空UserData，则指定其为空字符串
         * @type {string || null}
         */
        this.UserData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.InstanceTypesCheckPolicy = 'InstanceTypesCheckPolicy' in params ? params.InstanceTypesCheckPolicy : null;
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;
        this.UserData = 'UserData' in params ? params.UserData : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.AutoScalingGroupName = 'AutoScalingGroupName' in params ? params.AutoScalingGroupName : null;
        this.DefaultCooldown = 'DefaultCooldown' in params ? params.DefaultCooldown : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.TerminationPolicies = 'TerminationPolicies' in params ? params.TerminationPolicies : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.RetryPolicy = 'RetryPolicy' in params ? params.RetryPolicy : null;
        this.ZonesCheckPolicy = 'ZonesCheckPolicy' in params ? params.ZonesCheckPolicy : null;

    }
}

/**
 * 弹性伸缩事件通知
 * @class
 */
class AutoScalingNotification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID。
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 用户组ID列表。
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

        /**
         * 通知事件列表。
         * @type {Array.<string> || null}
         */
        this.NotificationTypes = null;

        /**
         * 事件通知ID。
         * @type {string || null}
         */
        this.AutoScalingNotificationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;
        this.NotificationTypes = 'NotificationTypes' in params ? params.NotificationTypes : null;
        this.AutoScalingNotificationId = 'AutoScalingNotificationId' in params ? params.AutoScalingNotificationId : null;

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
        this.ScheduledActionId = 'ScheduledActionId' in params ? params.ScheduledActionId : null;
        this.ScheduledActionName = 'ScheduledActionName' in params ? params.ScheduledActionName : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Recurrence = 'Recurrence' in params ? params.Recurrence : null;

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
         * 按照一个或者多个伸缩组ID查询。伸缩组ID形如：`asg-nkdwoui0`。每次请求的上限为100。参数不支持同时指定`AutoScalingGroupIds`和`Filters`。
         * @type {Array.<string> || null}
         */
        this.AutoScalingGroupIds = null;

        /**
         * 过滤条件。
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
<li> auto-scaling-group-name - String - 是否必填：否 -（过滤条件）按照伸缩组名称过滤。</li>
<li> launch-configuration-id - String - 是否必填：否 -（过滤条件）按照启动配置ID过滤。</li>
<li> tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。</li>
<li> tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。</li>
<li> tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2</li>
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
        this.AutoScalingGroupIds = 'AutoScalingGroupIds' in params ? params.AutoScalingGroupIds : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.MaxNumberOfLaunchConfigurations = 'MaxNumberOfLaunchConfigurations' in params ? params.MaxNumberOfLaunchConfigurations : null;
        this.NumberOfLaunchConfigurations = 'NumberOfLaunchConfigurations' in params ? params.NumberOfLaunchConfigurations : null;
        this.MaxNumberOfAutoScalingGroups = 'MaxNumberOfAutoScalingGroups' in params ? params.MaxNumberOfAutoScalingGroups : null;
        this.NumberOfAutoScalingGroups = 'NumberOfAutoScalingGroups' in params ? params.NumberOfAutoScalingGroups : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePaiInstance返回参数结构体
 * @class
 */
class CreatePaiInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当通过本接口来创建实例时会返回该参数，表示一个或多个实例`ID`。返回实例`ID`列表并不代表实例创建成功，可根据 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口查询返回的InstancesSet中对应实例的`ID`的状态来判断创建是否完成；如果实例状态由“准备中”变为“正在运行”，则为创建成功。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

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
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLifecycleHook返回参数结构体
 * @class
 */
class CreateLifecycleHookResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期挂钩ID
         * @type {string || null}
         */
        this.LifecycleHookId = null;

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
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePaiInstance请求参数结构体
 * @class
 */
class CreatePaiInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * PAI实例的域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 公网带宽相关信息设置。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 启动脚本的base64编码字符串。
         * @type {string || null}
         */
        this.InitScript = null;

        /**
         * 可用区列表。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * VpcId。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网列表。
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 实例显示名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例机型列表。
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * 实例登录设置。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 实例计费类型。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InitScript = 'InitScript' in params ? params.InitScript : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘大小，单位：GB。默认值为 50
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
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
        this.MaxPrice = 'MaxPrice' in params ? params.MaxPrice : null;
        this.SpotInstanceType = 'SpotInstanceType' in params ? params.SpotInstanceType : null;

    }
}

/**
 * DescribeScalingPolicies请求参数结构体
 * @class
 */
class DescribeScalingPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个告警策略ID查询。告警策略ID形如：asp-i9vkg894。每次请求的实例的上限为100。参数不支持同时指定`AutoScalingPolicyIds`和`Filters`。
         * @type {Array.<string> || null}
         */
        this.AutoScalingPolicyIds = null;

        /**
         * 过滤条件。
<li> auto-scaling-policy-id - String - 是否必填：否 -（过滤条件）按照告警策略ID过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
<li> scaling-policy-name - String - 是否必填：否 -（过滤条件）按照告警策略名称过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AutoScalingPolicyIds`和`Filters`。
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
        this.AutoScalingPolicyIds = 'AutoScalingPolicyIds' in params ? params.AutoScalingPolicyIds : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExecuteScalingPolicy返回参数结构体
 * @class
 */
class ExecuteScalingPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩活动ID
         * @type {string || null}
         */
        this.ActivityId = null;

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
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetInstancesProtection返回参数结构体
 * @class
 */
class SetInstancesProtectionResponse extends  AbstractModel {
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
 * CompleteLifecycleAction请求参数结构体
 * @class
 */
class CompleteLifecycleActionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期挂钩ID
         * @type {string || null}
         */
        this.LifecycleHookId = null;

        /**
         * 生命周期动作的结果，取值范围为“CONTINUE”或“ABANDON”
         * @type {string || null}
         */
        this.LifecycleActionResult = null;

        /**
         * 实例ID，“InstanceId”和“LifecycleActionToken”必须填充其中一个
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * “InstanceId”和“LifecycleActionToken”必须填充其中一个
         * @type {string || null}
         */
        this.LifecycleActionToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;
        this.LifecycleActionResult = 'LifecycleActionResult' in params ? params.LifecycleActionResult : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LifecycleActionToken = 'LifecycleActionToken' in params ? params.LifecycleActionToken : null;

    }
}

/**
 * CreateScalingPolicy返回参数结构体
 * @class
 */
class CreateScalingPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警触发策略ID。
         * @type {string || null}
         */
        this.AutoScalingPolicyId = null;

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
        this.AutoScalingPolicyId = 'AutoScalingPolicyId' in params ? params.AutoScalingPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNotificationConfiguration返回参数结构体
 * @class
 */
class CreateNotificationConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通知ID。
         * @type {string || null}
         */
        this.AutoScalingNotificationId = null;

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
        this.AutoScalingNotificationId = 'AutoScalingNotificationId' in params ? params.AutoScalingNotificationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.LaunchConfigurationSet) {
            this.LaunchConfigurationSet = new Array();
            for (let z in params.LaunchConfigurationSet) {
                let obj = new LaunchConfiguration();
                obj.deserialize(params.LaunchConfigurationSet[z]);
                this.LaunchConfigurationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteScalingPolicy返回参数结构体
 * @class
 */
class DeleteScalingPolicyResponse extends  AbstractModel {
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
 * 资源类型及标签键值对
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

        /**
         * 标签绑定的资源类型，当前支持类型："auto-scaling-group
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

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
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveInstances返回参数结构体
 * @class
 */
class RemoveInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩活动ID
         * @type {string || null}
         */
        this.ActivityId = null;

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
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyScalingPolicy返回参数结构体
 * @class
 */
class ModifyScalingPolicyResponse extends  AbstractModel {
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
 * SetInstancesProtection请求参数结构体
 * @class
 */
class SetInstancesProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID。
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 实例ID。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例是否需要移出保护。
         * @type {boolean || null}
         */
        this.ProtectedFromScaleIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProtectedFromScaleIn = 'ProtectedFromScaleIn' in params ? params.ProtectedFromScaleIn : null;

    }
}

/**
 * DeleteNotificationConfiguration返回参数结构体
 * @class
 */
class DeleteNotificationConfigurationResponse extends  AbstractModel {
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
 * DetachInstances返回参数结构体
 * @class
 */
class DetachInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩活动ID
         * @type {string || null}
         */
        this.ActivityId = null;

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
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 标签列表。通过指定该参数，可以为扩容的实例绑定标签。最多支持指定10个标签。
         * @type {Array.<InstanceTag> || null}
         */
        this.InstanceTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
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

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.InstanceTypesCheckPolicy = 'InstanceTypesCheckPolicy' in params ? params.InstanceTypesCheckPolicy : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTag();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
            }
        }

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
         * 伸缩组当前状态。取值范围：<br><li>NORMAL：正常<br><li>CVM_ABNORMAL：启动配置异常<br><li>LB_ABNORMAL：负载均衡器异常<br><li>VPC_ABNORMAL：VPC网络异常<br><li>INSUFFICIENT_BALANCE：余额不足<br>
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
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 最小实例数
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

        /**
         * 伸缩组是否处于伸缩活动中，`IN_ACTIVITY`表示处于伸缩活动中，`NOT_IN_ACTIVITY`表示不处于伸缩活动中。
         * @type {string || null}
         */
        this.InActivityStatus = null;

        /**
         * 伸缩组标签列表
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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.AutoScalingGroupName = 'AutoScalingGroupName' in params ? params.AutoScalingGroupName : null;
        this.AutoScalingGroupStatus = 'AutoScalingGroupStatus' in params ? params.AutoScalingGroupStatus : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.DefaultCooldown = 'DefaultCooldown' in params ? params.DefaultCooldown : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.EnabledStatus = 'EnabledStatus' in params ? params.EnabledStatus : null;

        if (params.ForwardLoadBalancerSet) {
            this.ForwardLoadBalancerSet = new Array();
            for (let z in params.ForwardLoadBalancerSet) {
                let obj = new ForwardLoadBalancer();
                obj.deserialize(params.ForwardLoadBalancerSet[z]);
                this.ForwardLoadBalancerSet.push(obj);
            }
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.InServiceInstanceCount = 'InServiceInstanceCount' in params ? params.InServiceInstanceCount : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;
        this.LoadBalancerIdSet = 'LoadBalancerIdSet' in params ? params.LoadBalancerIdSet : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SubnetIdSet = 'SubnetIdSet' in params ? params.SubnetIdSet : null;
        this.TerminationPolicySet = 'TerminationPolicySet' in params ? params.TerminationPolicySet : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ZoneSet = 'ZoneSet' in params ? params.ZoneSet : null;
        this.RetryPolicy = 'RetryPolicy' in params ? params.RetryPolicy : null;
        this.InActivityStatus = 'InActivityStatus' in params ? params.InActivityStatus : null;

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
 * AttachInstances返回参数结构体
 * @class
 */
class AttachInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩活动ID
         * @type {string || null}
         */
        this.ActivityId = null;

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
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLifecycleHook返回参数结构体
 * @class
 */
class DeleteLifecycleHookResponse extends  AbstractModel {
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
 * PreviewPaiDomainName返回参数结构体
 * @class
 */
class PreviewPaiDomainNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用的PAI域名
         * @type {string || null}
         */
        this.DomainName = null;

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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * UpgradeLifecycleHook请求参数结构体
 * @class
 */
class UpgradeLifecycleHookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期挂钩ID
         * @type {string || null}
         */
        this.LifecycleHookId = null;

        /**
         * 生命周期挂钩名称
         * @type {string || null}
         */
        this.LifecycleHookName = null;

        /**
         * 进行生命周期挂钩的场景，取值范围包括“INSTANCE_LAUNCHING”和“INSTANCE_TERMINATING”
         * @type {string || null}
         */
        this.LifecycleTransition = null;

        /**
         * 定义伸缩组在生命周期挂钩超时的情况下应采取的操作，取值范围是“CONTINUE”或“ABANDON”，默认值为“CONTINUE”
         * @type {string || null}
         */
        this.DefaultResult = null;

        /**
         * 生命周期挂钩超时之前可以经过的最长时间（以秒为单位），范围从30到3600秒，默认值为300秒
         * @type {number || null}
         */
        this.HeartbeatTimeout = null;

        /**
         * 弹性伸缩向通知目标发送的附加信息，默认值为''
         * @type {string || null}
         */
        this.NotificationMetadata = null;

        /**
         * 通知目标
         * @type {NotificationTarget || null}
         */
        this.NotificationTarget = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;
        this.LifecycleHookName = 'LifecycleHookName' in params ? params.LifecycleHookName : null;
        this.LifecycleTransition = 'LifecycleTransition' in params ? params.LifecycleTransition : null;
        this.DefaultResult = 'DefaultResult' in params ? params.DefaultResult : null;
        this.HeartbeatTimeout = 'HeartbeatTimeout' in params ? params.HeartbeatTimeout : null;
        this.NotificationMetadata = 'NotificationMetadata' in params ? params.NotificationMetadata : null;

        if (params.NotificationTarget) {
            let obj = new NotificationTarget();
            obj.deserialize(params.NotificationTarget)
            this.NotificationTarget = obj;
        }

    }
}

/**
 * 告警触发策略。
 * @class
 */
class ScalingPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID。
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 告警触发策略ID。
         * @type {string || null}
         */
        this.AutoScalingPolicyId = null;

        /**
         * 告警触发策略名称。
         * @type {string || null}
         */
        this.ScalingPolicyName = null;

        /**
         * 告警触发后，期望实例数修改方式。取值 ：<br><li>CHANGE_IN_CAPACITY：增加或减少若干期望实例数</li><li>EXACT_CAPACITY：调整至指定期望实例数</li> <li>PERCENT_CHANGE_IN_CAPACITY：按百分比调整期望实例数</li>
         * @type {string || null}
         */
        this.AdjustmentType = null;

        /**
         * 告警触发后，期望实例数的调整值。
         * @type {number || null}
         */
        this.AdjustmentValue = null;

        /**
         * 冷却时间。
         * @type {number || null}
         */
        this.Cooldown = null;

        /**
         * 告警监控指标。
         * @type {MetricAlarm || null}
         */
        this.MetricAlarm = null;

        /**
         * 通知组ID，即为用户组ID集合。
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.AutoScalingPolicyId = 'AutoScalingPolicyId' in params ? params.AutoScalingPolicyId : null;
        this.ScalingPolicyName = 'ScalingPolicyName' in params ? params.ScalingPolicyName : null;
        this.AdjustmentType = 'AdjustmentType' in params ? params.AdjustmentType : null;
        this.AdjustmentValue = 'AdjustmentValue' in params ? params.AdjustmentValue : null;
        this.Cooldown = 'Cooldown' in params ? params.Cooldown : null;

        if (params.MetricAlarm) {
            let obj = new MetricAlarm();
            obj.deserialize(params.MetricAlarm)
            this.MetricAlarm = obj;
        }
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;

    }
}

/**
 * ModifyLoadBalancers返回参数结构体
 * @class
 */
class ModifyLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩活动ID
         * @type {string || null}
         */
        this.ActivityId = null;

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
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePaiInstances请求参数结构体
 * @class
 */
class DescribePaiInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 依据PAI实例的实例ID进行查询。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 过滤条件。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

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
 * CreateNotificationConfiguration请求参数结构体
 * @class
 */
class CreateNotificationConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID。
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 通知类型，即为需要订阅的通知类型集合，取值范围如下：
<li>SCALE_OUT_SUCCESSFUL：扩容成功</li>
<li>SCALE_OUT_FAILED：扩容失败</li>
<li>SCALE_IN_SUCCESSFUL：缩容成功</li>
<li>SCALE_IN_FAILED：缩容失败</li>
<li>REPLACE_UNHEALTHY_INSTANCE_SUCCESSFUL：替换不健康子机成功</li>
<li>REPLACE_UNHEALTHY_INSTANCE_FAILED：替换不健康子机失败</li>
         * @type {Array.<string> || null}
         */
        this.NotificationTypes = null;

        /**
         * 通知组ID，即为用户组ID集合，用户组ID可以通过[DescribeUserGroup](https://cloud.tencent.com/document/api/378/4404)查询。
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.NotificationTypes = 'NotificationTypes' in params ? params.NotificationTypes : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ScheduledActionSet) {
            this.ScheduledActionSet = new Array();
            for (let z in params.ScheduledActionSet) {
                let obj = new ScheduledAction();
                obj.deserialize(params.ScheduledActionSet[z]);
                this.ScheduledActionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLifecycleHook请求参数结构体
 * @class
 */
class DeleteLifecycleHookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期挂钩ID
         * @type {string || null}
         */
        this.LifecycleHookId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;

    }
}

/**
 * ModifyLoadBalancers请求参数结构体
 * @class
 */
class ModifyLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 传统负载均衡器ID列表，目前长度上限为5，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 应用型负载均衡器列表，目前长度上限为5，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个
         * @type {Array.<ForwardLoadBalancer> || null}
         */
        this.ForwardLoadBalancers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

        if (params.ForwardLoadBalancers) {
            this.ForwardLoadBalancers = new Array();
            for (let z in params.ForwardLoadBalancers) {
                let obj = new ForwardLoadBalancer();
                obj.deserialize(params.ForwardLoadBalancers[z]);
                this.ForwardLoadBalancers.push(obj);
            }
        }

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
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;

    }
}

/**
 * ModifyScalingPolicy请求参数结构体
 * @class
 */
class ModifyScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略ID。
         * @type {string || null}
         */
        this.AutoScalingPolicyId = null;

        /**
         * 告警策略名称。
         * @type {string || null}
         */
        this.ScalingPolicyName = null;

        /**
         * 告警触发后，期望实例数修改方式。取值 ：<br><li>CHANGE_IN_CAPACITY：增加或减少若干期望实例数</li><li>EXACT_CAPACITY：调整至指定期望实例数</li> <li>PERCENT_CHANGE_IN_CAPACITY：按百分比调整期望实例数</li>
         * @type {string || null}
         */
        this.AdjustmentType = null;

        /**
         * 告警触发后，期望实例数的调整值。取值：<br><li>当 AdjustmentType 为 CHANGE_IN_CAPACITY 时，AdjustmentValue 为正数表示告警触发后增加实例，为负数表示告警触发后减少实例 </li> <li> 当 AdjustmentType 为 EXACT_CAPACITY 时，AdjustmentValue 的值即为告警触发后新的期望实例数，需要大于或等于0 </li> <li> 当 AdjustmentType 为 PERCENT_CHANGE_IN_CAPACITY 时，AdjusmentValue 为正数表示告警触发后按百分比增加实例，为负数表示告警触发后按百分比减少实例，单位是：%。
         * @type {number || null}
         */
        this.AdjustmentValue = null;

        /**
         * 冷却时间，单位为秒。
         * @type {number || null}
         */
        this.Cooldown = null;

        /**
         * 告警监控指标。
         * @type {MetricAlarm || null}
         */
        this.MetricAlarm = null;

        /**
         * 通知组ID，即为用户组ID集合，用户组ID可以通过[DescribeUserGroup](https://cloud.tencent.com/document/api/378/4404)查询。
如果需要清空通知用户组，需要在列表中传入特定字符串 "NULL"。
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingPolicyId = 'AutoScalingPolicyId' in params ? params.AutoScalingPolicyId : null;
        this.ScalingPolicyName = 'ScalingPolicyName' in params ? params.ScalingPolicyName : null;
        this.AdjustmentType = 'AdjustmentType' in params ? params.AdjustmentType : null;
        this.AdjustmentValue = 'AdjustmentValue' in params ? params.AdjustmentValue : null;
        this.Cooldown = 'Cooldown' in params ? params.Cooldown : null;

        if (params.MetricAlarm) {
            let obj = new MetricAlarm();
            obj.deserialize(params.MetricAlarm)
            this.MetricAlarm = obj;
        }
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
        this.MarketType = 'MarketType' in params ? params.MarketType : null;

    }
}

/**
 * UpgradeLifecycleHook返回参数结构体
 * @class
 */
class UpgradeLifecycleHookResponse extends  AbstractModel {
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
 * 实例标签。通过指定该参数，可以为扩容的实例绑定标签。
 * @class
 */
class InstanceTag extends  AbstractModel {
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
 * PAI实例
 * @class
 */
class PaiInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例域名
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

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
         * 传统负载均衡器ID列表，目前长度上限为5，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 应用型负载均衡器列表，目前长度上限为5，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个
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

        /**
         * 标签描述列表。通过指定该参数可以支持绑定标签到伸缩组。同时绑定标签到相应的资源实例，
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
        this.AutoScalingGroupName = 'AutoScalingGroupName' in params ? params.AutoScalingGroupName : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.DefaultCooldown = 'DefaultCooldown' in params ? params.DefaultCooldown : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.ForwardLoadBalancers) {
            this.ForwardLoadBalancers = new Array();
            for (let z in params.ForwardLoadBalancers) {
                let obj = new ForwardLoadBalancer();
                obj.deserialize(params.ForwardLoadBalancers[z]);
                this.ForwardLoadBalancers.push(obj);
            }
        }
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.TerminationPolicies = 'TerminationPolicies' in params ? params.TerminationPolicies : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.RetryPolicy = 'RetryPolicy' in params ? params.RetryPolicy : null;
        this.ZonesCheckPolicy = 'ZonesCheckPolicy' in params ? params.ZonesCheckPolicy : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeLaunchConfiguration请求参数结构体
 * @class
 */
class UpgradeLaunchConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启动配置ID。
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-8toqc6s3`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 实例机型列表，不同实例机型指定了不同的资源规格，最多支持5种实例机型。
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * 启动配置显示名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘，最多支持指定11块数据盘。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

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
         * 实例类型校验策略，取值包括 ALL 和 ANY，默认取值为ANY。
<br><li> ALL，所有实例类型（InstanceType）都可用则通过校验，否则校验报错。
<br><li> ANY，存在任何一个实例类型（InstanceType）可用则通过校验，否则校验报错。

实例类型不可用的常见原因包括该实例类型售罄、对应云盘售罄等。
如果 InstanceTypes 中一款机型不存在或者已下线，则无论 InstanceTypesCheckPolicy 采用何种取值，都会校验报错。
         * @type {string || null}
         */
        this.InstanceTypesCheckPolicy = null;

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
         * 实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/378/4400) 的返回值中的`projectId`字段来获取。不填为默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的`SecurityGroupId`字段来获取。若不指定该参数，则默认不绑定安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 经过 Base64 编码后的自定义数据，最大长度不超过16KB。
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * 标签列表。通过指定该参数，可以为扩容的实例绑定标签。最多支持指定10个标签。
         * @type {Array.<InstanceTag> || null}
         */
        this.InstanceTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.InstanceTypesCheckPolicy = 'InstanceTypesCheckPolicy' in params ? params.InstanceTypesCheckPolicy : null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }
        this.UserData = 'UserData' in params ? params.UserData : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTag();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
            }
        }

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ActivitySet) {
            this.ActivitySet = new Array();
            for (let z in params.ActivitySet) {
                let obj = new Activity();
                obj.deserialize(params.ActivitySet[z]);
                this.ActivitySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNotificationConfiguration请求参数结构体
 * @class
 */
class ModifyNotificationConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的通知ID。
         * @type {string || null}
         */
        this.AutoScalingNotificationId = null;

        /**
         * 通知类型，即为需要订阅的通知类型集合，取值范围如下：
<li>SCALE_OUT_SUCCESSFUL：扩容成功</li>
<li>SCALE_OUT_FAILED：扩容失败</li>
<li>SCALE_IN_SUCCESSFUL：缩容成功</li>
<li>SCALE_IN_FAILED：缩容失败</li>
<li>REPLACE_UNHEALTHY_INSTANCE_SUCCESSFUL：替换不健康子机成功</li>
<li>REPLACE_UNHEALTHY_INSTANCE_FAILED：替换不健康子机失败</li>
         * @type {Array.<string> || null}
         */
        this.NotificationTypes = null;

        /**
         * 通知组ID，即为用户组ID集合，用户组ID可以通过[DescribeUserGroup](https://cloud.tencent.com/document/api/378/4404)查询。
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingNotificationId = 'AutoScalingNotificationId' in params ? params.AutoScalingNotificationId : null;
        this.NotificationTypes = 'NotificationTypes' in params ? params.NotificationTypes : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[CVM实例配置](https://cloud.tencent.com/document/product/213/2177)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 数据盘快照 ID，类似 `snap-l8psqwnt`。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

    }
}

/**
 * PreviewPaiDomainName请求参数结构体
 * @class
 */
class PreviewPaiDomainNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名类型
         * @type {string || null}
         */
        this.DomainNameType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainNameType = 'DomainNameType' in params ? params.DomainNameType : null;

    }
}

/**
 * DeleteScalingPolicy请求参数结构体
 * @class
 */
class DeleteScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的告警策略ID。
         * @type {string || null}
         */
        this.AutoScalingPolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingPolicyId = 'AutoScalingPolicyId' in params ? params.AutoScalingPolicyId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Password = 'Password' in params ? params.Password : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.KeepImageLogin = 'KeepImageLogin' in params ? params.KeepImageLogin : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

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

        /**
         * 版本号
         * @type {number || null}
         */
        this.VersionNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;
        this.LifeCycleState = 'LifeCycleState' in params ? params.LifeCycleState : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.ProtectedFromScaleIn = 'ProtectedFromScaleIn' in params ? params.ProtectedFromScaleIn : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CreationType = 'CreationType' in params ? params.CreationType : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.VersionNumber = 'VersionNumber' in params ? params.VersionNumber : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.ScheduledActionName = 'ScheduledActionName' in params ? params.ScheduledActionName : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Recurrence = 'Recurrence' in params ? params.Recurrence : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.ScheduledActionIds = 'ScheduledActionIds' in params ? params.ScheduledActionIds : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

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
        this.ScheduledActionId = 'ScheduledActionId' in params ? params.ScheduledActionId : null;

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
<li> activity-type - String - 是否必填：否 -（过滤条件）按照伸缩活动类型过滤。（SCALE_OUT：扩容活动|SCALE_IN：缩容活动|ATTACH_INSTANCES：添加实例|REMOVE_INSTANCES：销毁实例|DETACH_INSTANCES：移出实例|TERMINATE_INSTANCES_UNEXPECTEDLY：实例在CVM控制台被销毁|REPLACE_UNHEALTHY_INSTANCE：替换不健康实例|UPDATE_LOAD_BALANCERS：更新负载均衡器）</li>
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

        /**
         * 伸缩活动最早的开始时间，如果指定了ActivityIds，此参数将被忽略。取值为`UTC`时间，按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ssZ`。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 伸缩活动最晚的结束时间，如果指定了ActivityIds，此参数将被忽略。取值为`UTC`时间，按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ssZ`。
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityIds = 'ActivityIds' in params ? params.ActivityIds : null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;

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
        this.ScheduledActionId = 'ScheduledActionId' in params ? params.ScheduledActionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLifecycleHook请求参数结构体
 * @class
 */
class CreateLifecycleHookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 生命周期挂钩名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超128个字节。
         * @type {string || null}
         */
        this.LifecycleHookName = null;

        /**
         * 进行生命周期挂钩的场景，取值范围包括“INSTANCE_LAUNCHING”和“INSTANCE_TERMINATING”
         * @type {string || null}
         */
        this.LifecycleTransition = null;

        /**
         * 定义伸缩组在生命周期挂钩超时的情况下应采取的操作，取值范围是“CONTINUE”或“ABANDON”，默认值为“CONTINUE”
         * @type {string || null}
         */
        this.DefaultResult = null;

        /**
         * 生命周期挂钩超时之前可以经过的最长时间（以秒为单位），范围从30到3600秒，默认值为300秒
         * @type {number || null}
         */
        this.HeartbeatTimeout = null;

        /**
         * 弹性伸缩向通知目标发送的附加信息，默认值为''。最大长度不能超过1024个字节。
         * @type {string || null}
         */
        this.NotificationMetadata = null;

        /**
         * 通知目标
         * @type {NotificationTarget || null}
         */
        this.NotificationTarget = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.LifecycleHookName = 'LifecycleHookName' in params ? params.LifecycleHookName : null;
        this.LifecycleTransition = 'LifecycleTransition' in params ? params.LifecycleTransition : null;
        this.DefaultResult = 'DefaultResult' in params ? params.DefaultResult : null;
        this.HeartbeatTimeout = 'HeartbeatTimeout' in params ? params.HeartbeatTimeout : null;
        this.NotificationMetadata = 'NotificationMetadata' in params ? params.NotificationMetadata : null;

        if (params.NotificationTarget) {
            let obj = new NotificationTarget();
            obj.deserialize(params.NotificationTarget)
            this.NotificationTarget = obj;
        }

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
        this.ScheduledActionId = 'ScheduledActionId' in params ? params.ScheduledActionId : null;
        this.ScheduledActionName = 'ScheduledActionName' in params ? params.ScheduledActionName : null;
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Recurrence = 'Recurrence' in params ? params.Recurrence : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * CompleteLifecycleAction返回参数结构体
 * @class
 */
class CompleteLifecycleActionResponse extends  AbstractModel {
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
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/9388)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：
```
Filters.0.Name=zone
&Filters.0.Values.1=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.1=PREPAID
&Filters.1.Values.2=POSTPAID_BY_HOUR
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeLifecycleHooks请求参数结构体
 * @class
 */
class DescribeLifecycleHooksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个生命周期挂钩ID查询。生命周期挂钩ID形如：`ash-8azjzxcl`。每次请求的上限为100。参数不支持同时指定`LifecycleHookIds`和`Filters`。
         * @type {Array.<string> || null}
         */
        this.LifecycleHookIds = null;

        /**
         * 过滤条件。
<li> lifecycle-hook-id - String - 是否必填：否 -（过滤条件）按照生命周期挂钩ID过滤。</li>
<li> lifecycle-hook-name - String - 是否必填：否 -（过滤条件）按照生命周期挂钩名称过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
过滤条件。
<li> lifecycle-hook-id - String - 是否必填：否 -（过滤条件）按照生命周期挂钩ID过滤。</li>
<li> lifecycle-hook-name - String - 是否必填：否 -（过滤条件）按照生命周期挂钩名称过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`LifecycleHookIds `和`Filters`。
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
        this.LifecycleHookIds = 'LifecycleHookIds' in params ? params.LifecycleHookIds : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * 实例机型列表。
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * 标签列表。
         * @type {Array.<InstanceTag> || null}
         */
        this.InstanceTags = null;

        /**
         * 版本号。
         * @type {number || null}
         */
        this.VersionNumber = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.LaunchConfigurationName = 'LaunchConfigurationName' in params ? params.LaunchConfigurationName : null;
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.AutoScalingGroupAbstractSet) {
            this.AutoScalingGroupAbstractSet = new Array();
            for (let z in params.AutoScalingGroupAbstractSet) {
                let obj = new AutoScalingGroupAbstract();
                obj.deserialize(params.AutoScalingGroupAbstractSet[z]);
                this.AutoScalingGroupAbstractSet.push(obj);
            }
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.LaunchConfigurationStatus = 'LaunchConfigurationStatus' in params ? params.LaunchConfigurationStatus : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTag();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
            }
        }
        this.VersionNumber = 'VersionNumber' in params ? params.VersionNumber : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

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
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * ModifyNotificationConfiguration返回参数结构体
 * @class
 */
class ModifyNotificationConfigurationResponse extends  AbstractModel {
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLifecycleHooks返回参数结构体
 * @class
 */
class DescribeLifecycleHooksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期挂钩数组
         * @type {Array.<LifecycleHook> || null}
         */
        this.LifecycleHookSet = null;

        /**
         * 总体数量
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

        if (params.LifecycleHookSet) {
            this.LifecycleHookSet = new Array();
            for (let z in params.LifecycleHookSet) {
                let obj = new LifecycleHook();
                obj.deserialize(params.LifecycleHookSet[z]);
                this.LifecycleHookSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateScalingPolicy请求参数结构体
 * @class
 */
class CreateScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID。
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 告警触发策略名称。
         * @type {string || null}
         */
        this.ScalingPolicyName = null;

        /**
         * 告警触发后，期望实例数修改方式。取值 ：<br><li>CHANGE_IN_CAPACITY：增加或减少若干期望实例数</li><li>EXACT_CAPACITY：调整至指定期望实例数</li> <li>PERCENT_CHANGE_IN_CAPACITY：按百分比调整期望实例数</li>
         * @type {string || null}
         */
        this.AdjustmentType = null;

        /**
         * 告警触发后，期望实例数的调整值。取值：<br><li>当 AdjustmentType 为 CHANGE_IN_CAPACITY 时，AdjustmentValue 为正数表示告警触发后增加实例，为负数表示告警触发后减少实例 </li> <li> 当 AdjustmentType 为 EXACT_CAPACITY 时，AdjustmentValue 的值即为告警触发后新的期望实例数，需要大于或等于0 </li> <li> 当 AdjustmentType 为 PERCENT_CHANGE_IN_CAPACITY 时，AdjusmentValue 为正数表示告警触发后按百分比增加实例，为负数表示告警触发后按百分比减少实例，单位是：%。
         * @type {number || null}
         */
        this.AdjustmentValue = null;

        /**
         * 告警监控指标。
         * @type {MetricAlarm || null}
         */
        this.MetricAlarm = null;

        /**
         * 冷却时间，单位为秒。默认冷却时间300秒。
         * @type {number || null}
         */
        this.Cooldown = null;

        /**
         * 通知组ID，即为用户组ID集合，用户组ID可以通过[DescribeUserGroup](https://cloud.tencent.com/document/api/378/4404)查询。
         * @type {Array.<string> || null}
         */
        this.NotificationUserGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.ScalingPolicyName = 'ScalingPolicyName' in params ? params.ScalingPolicyName : null;
        this.AdjustmentType = 'AdjustmentType' in params ? params.AdjustmentType : null;
        this.AdjustmentValue = 'AdjustmentValue' in params ? params.AdjustmentValue : null;

        if (params.MetricAlarm) {
            let obj = new MetricAlarm();
            obj.deserialize(params.MetricAlarm)
            this.MetricAlarm = obj;
        }
        this.Cooldown = 'Cooldown' in params ? params.Cooldown : null;
        this.NotificationUserGroupIds = 'NotificationUserGroupIds' in params ? params.NotificationUserGroupIds : null;

    }
}

/**
 * DeleteNotificationConfiguration请求参数结构体
 * @class
 */
class DeleteNotificationConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的通知ID。
         * @type {string || null}
         */
        this.AutoScalingNotificationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingNotificationId = 'AutoScalingNotificationId' in params ? params.AutoScalingNotificationId : null;

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
        this.LaunchConfigurationIds = 'LaunchConfigurationIds' in params ? params.LaunchConfigurationIds : null;

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
 * 通知目标
 * @class
 */
class NotificationTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标类型，取值范围包括`CMQ_QUEUE`、`CMQ_TOPIC`。
<li> CMQ_QUEUE，指腾讯云消息队列-队列模型。</li>
<li> CMQ_TOPIC，指腾讯云消息队列-主题模型。</li>
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * 队列名称，如果`TargetType`取值为`CMQ_QUEUE`，则本字段必填。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 主题名称，如果`TargetType`取值为`CMQ_TOPIC`，则本字段必填。
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
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.AutoScalingGroupName = 'AutoScalingGroupName' in params ? params.AutoScalingGroupName : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;

    }
}

/**
 * 弹性伸缩告警指标
 * @class
 */
class MetricAlarm extends  AbstractModel {
    constructor(){
        super();

        /**
         * 比较运算符，可选值：<br><li>GREATER_THAN：大于</li><li>GREATER_THAN_OR_EQUAL_TO：大于或等于</li><li>LESS_THAN：小于</li><li> LESS_THAN_OR_EQUAL_TO：小于或等于</li><li> EQUAL_TO：等于</li> <li>NOT_EQUAL_TO：不等于</li>
         * @type {string || null}
         */
        this.ComparisonOperator = null;

        /**
         * 指标名称，可选字段如下：<br><li>CPU_UTILIZATION：CPU利用率</li><li>MEM_UTILIZATION：内存利用率</li><li>LAN_TRAFFIC_OUT：内网出带宽</li><li>LAN_TRAFFIC_IN：内网入带宽</li><li>WAN_TRAFFIC_OUT：外网出带宽</li><li>WAN_TRAFFIC_IN：外网入带宽</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 告警阈值：<br><li>CPU_UTILIZATION：[1, 100]，单位：%</li><li>MEM_UTILIZATION：[1, 100]，单位：%</li><li>LAN_TRAFFIC_OUT：>0，单位：Mbps </li><li>LAN_TRAFFIC_IN：>0，单位：Mbps</li><li>WAN_TRAFFIC_OUT：>0，单位：Mbps</li><li>WAN_TRAFFIC_IN：>0，单位：Mbps</li>
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 时间周期，单位：秒，取值枚举值为60、300。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 重复次数。取值范围 [1, 10]
         * @type {number || null}
         */
        this.ContinuousTime = null;

        /**
         * 统计类型，可选字段如下：<br><li>AVERAGE：平均值</li><li>MAXIMUM：最大值<li>MINIMUM：最小值</li><br> 默认取值：AVERAGE
         * @type {string || null}
         */
        this.Statistic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComparisonOperator = 'ComparisonOperator' in params ? params.ComparisonOperator : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ContinuousTime = 'ContinuousTime' in params ? params.ContinuousTime : null;
        this.Statistic = 'Statistic' in params ? params.Statistic : null;

    }
}

/**
 * DescribeNotificationConfigurations请求参数结构体
 * @class
 */
class DescribeNotificationConfigurationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个通知ID查询。实例ID形如：asn-2sestqbr。每次请求的实例的上限为100。参数不支持同时指定`AutoScalingNotificationIds`和`Filters`。
         * @type {Array.<string> || null}
         */
        this.AutoScalingNotificationIds = null;

        /**
         * 过滤条件。
<li> auto-scaling-notification-id - String - 是否必填：否 -（过滤条件）按照通知ID过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AutoScalingNotificationIds`和`Filters`。
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
        this.AutoScalingNotificationIds = 'AutoScalingNotificationIds' in params ? params.AutoScalingNotificationIds : null;

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
 * 生命周期挂钩
 * @class
 */
class LifecycleHook extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期挂钩ID
         * @type {string || null}
         */
        this.LifecycleHookId = null;

        /**
         * 生命周期挂钩名称
         * @type {string || null}
         */
        this.LifecycleHookName = null;

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 生命周期挂钩默认结果
         * @type {string || null}
         */
        this.DefaultResult = null;

        /**
         * 生命周期挂钩等待超时时间
         * @type {number || null}
         */
        this.HeartbeatTimeout = null;

        /**
         * 生命周期挂钩适用场景
         * @type {string || null}
         */
        this.LifecycleTransition = null;

        /**
         * 通知目标的附加信息
         * @type {string || null}
         */
        this.NotificationMetadata = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 通知目标
         * @type {NotificationTarget || null}
         */
        this.NotificationTarget = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifecycleHookId = 'LifecycleHookId' in params ? params.LifecycleHookId : null;
        this.LifecycleHookName = 'LifecycleHookName' in params ? params.LifecycleHookName : null;
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.DefaultResult = 'DefaultResult' in params ? params.DefaultResult : null;
        this.HeartbeatTimeout = 'HeartbeatTimeout' in params ? params.HeartbeatTimeout : null;
        this.LifecycleTransition = 'LifecycleTransition' in params ? params.LifecycleTransition : null;
        this.NotificationMetadata = 'NotificationMetadata' in params ? params.NotificationMetadata : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.NotificationTarget) {
            let obj = new NotificationTarget();
            obj.deserialize(params.NotificationTarget)
            this.NotificationTarget = obj;
        }

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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.TargetAttributes) {
            this.TargetAttributes = new Array();
            for (let z in params.TargetAttributes) {
                let obj = new TargetAttribute();
                obj.deserialize(params.TargetAttributes[z]);
                this.TargetAttributes.push(obj);
            }
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeScalingPolicies返回参数结构体
 * @class
 */
class DescribeScalingPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性伸缩告警触发策略详细信息列表。
         * @type {Array.<ScalingPolicy> || null}
         */
        this.ScalingPolicySet = null;

        /**
         * 符合条件的通知数量。
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

        if (params.ScalingPolicySet) {
            this.ScalingPolicySet = new Array();
            for (let z in params.ScalingPolicySet) {
                let obj = new ScalingPolicy();
                obj.deserialize(params.ScalingPolicySet[z]);
                this.ScalingPolicySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.ActivityType = 'ActivityType' in params ? params.ActivityType : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.StatusMessage = 'StatusMessage' in params ? params.StatusMessage : null;
        this.Cause = 'Cause' in params ? params.Cause : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.ActivityRelatedInstanceSet) {
            this.ActivityRelatedInstanceSet = new Array();
            for (let z in params.ActivityRelatedInstanceSet) {
                let obj = new ActivtyRelatedInstance();
                obj.deserialize(params.ActivityRelatedInstanceSet[z]);
                this.ActivityRelatedInstanceSet.push(obj);
            }
        }
        this.StatusMessageSimplified = 'StatusMessageSimplified' in params ? params.StatusMessageSimplified : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * DescribeNotificationConfigurations返回参数结构体
 * @class
 */
class DescribeNotificationConfigurationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的通知数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 弹性伸缩事件通知详细信息列表。
         * @type {Array.<AutoScalingNotification> || null}
         */
        this.AutoScalingNotificationSet = null;

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

        if (params.AutoScalingNotificationSet) {
            this.AutoScalingNotificationSet = new Array();
            for (let z in params.AutoScalingNotificationSet) {
                let obj = new AutoScalingNotification();
                obj.deserialize(params.AutoScalingNotificationSet[z]);
                this.AutoScalingNotificationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
<li>INIT：初始化中
<li>RUNNING：实例操作中
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](https://cloud.tencent.com/document/product/213/509)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 是否分配公网IP。取值范围：<br><li>TRUE：表示分配公网IP<br><li>FALSE：表示不分配公网IP<br><br>当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.PublicIpAssigned = 'PublicIpAssigned' in params ? params.PublicIpAssigned : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeLaunchConfiguration返回参数结构体
 * @class
 */
class UpgradeLaunchConfigurationResponse extends  AbstractModel {
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
 * 描述了了实例的计费模式
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
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
 * DescribePaiInstances返回参数结构体
 * @class
 */
class DescribePaiInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的PAI实例数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * PAI实例详细信息
         * @type {Array.<PaiInstance> || null}
         */
        this.PaiInstanceSet = null;

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

        if (params.PaiInstanceSet) {
            this.PaiInstanceSet = new Array();
            for (let z in params.PaiInstanceSet) {
                let obj = new PaiInstance();
                obj.deserialize(params.PaiInstanceSet[z]);
                this.PaiInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExecuteScalingPolicy请求参数结构体
 * @class
 */
class ExecuteScalingPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警伸缩策略ID
         * @type {string || null}
         */
        this.AutoScalingPolicyId = null;

        /**
         * 是否检查伸缩组活动处于冷却时间内，默认值为false
         * @type {boolean || null}
         */
        this.HonorCooldown = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingPolicyId = 'AutoScalingPolicyId' in params ? params.AutoScalingPolicyId : null;
        this.HonorCooldown = 'HonorCooldown' in params ? params.HonorCooldown : null;

    }
}

module.exports = {
    DisableAutoScalingGroupResponse: DisableAutoScalingGroupResponse,
    ModifyLaunchConfigurationAttributesRequest: ModifyLaunchConfigurationAttributesRequest,
    DisableAutoScalingGroupRequest: DisableAutoScalingGroupRequest,
    ModifyAutoScalingGroupRequest: ModifyAutoScalingGroupRequest,
    AutoScalingNotification: AutoScalingNotification,
    ModifyScheduledActionRequest: ModifyScheduledActionRequest,
    DescribeAutoScalingGroupsRequest: DescribeAutoScalingGroupsRequest,
    CreateAutoScalingGroupResponse: CreateAutoScalingGroupResponse,
    DescribeAccountLimitsResponse: DescribeAccountLimitsResponse,
    CreatePaiInstanceResponse: CreatePaiInstanceResponse,
    CreateLaunchConfigurationResponse: CreateLaunchConfigurationResponse,
    CreateLifecycleHookResponse: CreateLifecycleHookResponse,
    DescribeAutoScalingGroupsResponse: DescribeAutoScalingGroupsResponse,
    CreatePaiInstanceRequest: CreatePaiInstanceRequest,
    SystemDisk: SystemDisk,
    SpotMarketOptions: SpotMarketOptions,
    DescribeScalingPoliciesRequest: DescribeScalingPoliciesRequest,
    ModifyScheduledActionResponse: ModifyScheduledActionResponse,
    ExecuteScalingPolicyResponse: ExecuteScalingPolicyResponse,
    ModifyLaunchConfigurationAttributesResponse: ModifyLaunchConfigurationAttributesResponse,
    SetInstancesProtectionResponse: SetInstancesProtectionResponse,
    CompleteLifecycleActionRequest: CompleteLifecycleActionRequest,
    CreateScalingPolicyResponse: CreateScalingPolicyResponse,
    CreateNotificationConfigurationResponse: CreateNotificationConfigurationResponse,
    DescribeLaunchConfigurationsResponse: DescribeLaunchConfigurationsResponse,
    DeleteScalingPolicyResponse: DeleteScalingPolicyResponse,
    Tag: Tag,
    DescribeAutoScalingInstancesRequest: DescribeAutoScalingInstancesRequest,
    LimitedLoginSettings: LimitedLoginSettings,
    ModifyAutoScalingGroupResponse: ModifyAutoScalingGroupResponse,
    RemoveInstancesResponse: RemoveInstancesResponse,
    ModifyScalingPolicyResponse: ModifyScalingPolicyResponse,
    SetInstancesProtectionRequest: SetInstancesProtectionRequest,
    DeleteNotificationConfigurationResponse: DeleteNotificationConfigurationResponse,
    DetachInstancesResponse: DetachInstancesResponse,
    CreateLaunchConfigurationRequest: CreateLaunchConfigurationRequest,
    AutoScalingGroup: AutoScalingGroup,
    AttachInstancesResponse: AttachInstancesResponse,
    DeleteLifecycleHookResponse: DeleteLifecycleHookResponse,
    PreviewPaiDomainNameResponse: PreviewPaiDomainNameResponse,
    DescribeAccountLimitsRequest: DescribeAccountLimitsRequest,
    UpgradeLifecycleHookRequest: UpgradeLifecycleHookRequest,
    ScalingPolicy: ScalingPolicy,
    ModifyLoadBalancersResponse: ModifyLoadBalancersResponse,
    DescribePaiInstancesRequest: DescribePaiInstancesRequest,
    CreateNotificationConfigurationRequest: CreateNotificationConfigurationRequest,
    DescribeScheduledActionsResponse: DescribeScheduledActionsResponse,
    DeleteLifecycleHookRequest: DeleteLifecycleHookRequest,
    ModifyLoadBalancersRequest: ModifyLoadBalancersRequest,
    DeleteLaunchConfigurationRequest: DeleteLaunchConfigurationRequest,
    ModifyScalingPolicyRequest: ModifyScalingPolicyRequest,
    InstanceMarketOptionsRequest: InstanceMarketOptionsRequest,
    UpgradeLifecycleHookResponse: UpgradeLifecycleHookResponse,
    InstanceTag: InstanceTag,
    PaiInstance: PaiInstance,
    CreateAutoScalingGroupRequest: CreateAutoScalingGroupRequest,
    DeleteScheduledActionResponse: DeleteScheduledActionResponse,
    UpgradeLaunchConfigurationRequest: UpgradeLaunchConfigurationRequest,
    DescribeAutoScalingActivitiesResponse: DescribeAutoScalingActivitiesResponse,
    ModifyNotificationConfigurationRequest: ModifyNotificationConfigurationRequest,
    DataDisk: DataDisk,
    PreviewPaiDomainNameRequest: PreviewPaiDomainNameRequest,
    DeleteScalingPolicyRequest: DeleteScalingPolicyRequest,
    LoginSettings: LoginSettings,
    DetachInstancesRequest: DetachInstancesRequest,
    Instance: Instance,
    CreateScheduledActionRequest: CreateScheduledActionRequest,
    EnhancedService: EnhancedService,
    DeleteLaunchConfigurationResponse: DeleteLaunchConfigurationResponse,
    DescribeScheduledActionsRequest: DescribeScheduledActionsRequest,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    DeleteScheduledActionRequest: DeleteScheduledActionRequest,
    DescribeAutoScalingActivitiesRequest: DescribeAutoScalingActivitiesRequest,
    ModifyDesiredCapacityRequest: ModifyDesiredCapacityRequest,
    CreateScheduledActionResponse: CreateScheduledActionResponse,
    CreateLifecycleHookRequest: CreateLifecycleHookRequest,
    ScheduledAction: ScheduledAction,
    CompleteLifecycleActionResponse: CompleteLifecycleActionResponse,
    Filter: Filter,
    DescribeLifecycleHooksRequest: DescribeLifecycleHooksRequest,
    LaunchConfiguration: LaunchConfiguration,
    TargetAttribute: TargetAttribute,
    ModifyNotificationConfigurationResponse: ModifyNotificationConfigurationResponse,
    DescribeAutoScalingInstancesResponse: DescribeAutoScalingInstancesResponse,
    DescribeLifecycleHooksResponse: DescribeLifecycleHooksResponse,
    CreateScalingPolicyRequest: CreateScalingPolicyRequest,
    DeleteNotificationConfigurationRequest: DeleteNotificationConfigurationRequest,
    DescribeLaunchConfigurationsRequest: DescribeLaunchConfigurationsRequest,
    NotificationTarget: NotificationTarget,
    DeleteAutoScalingGroupResponse: DeleteAutoScalingGroupResponse,
    AutoScalingGroupAbstract: AutoScalingGroupAbstract,
    EnableAutoScalingGroupRequest: EnableAutoScalingGroupRequest,
    MetricAlarm: MetricAlarm,
    DescribeNotificationConfigurationsRequest: DescribeNotificationConfigurationsRequest,
    LifecycleHook: LifecycleHook,
    ForwardLoadBalancer: ForwardLoadBalancer,
    DeleteAutoScalingGroupRequest: DeleteAutoScalingGroupRequest,
    RemoveInstancesRequest: RemoveInstancesRequest,
    AttachInstancesRequest: AttachInstancesRequest,
    DescribeScalingPoliciesResponse: DescribeScalingPoliciesResponse,
    Activity: Activity,
    ModifyDesiredCapacityResponse: ModifyDesiredCapacityResponse,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    DescribeNotificationConfigurationsResponse: DescribeNotificationConfigurationsResponse,
    ActivtyRelatedInstance: ActivtyRelatedInstance,
    InternetAccessible: InternetAccessible,
    EnableAutoScalingGroupResponse: EnableAutoScalingGroupResponse,
    UpgradeLaunchConfigurationResponse: UpgradeLaunchConfigurationResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    DescribePaiInstancesResponse: DescribePaiInstancesResponse,
    ExecuteScalingPolicyRequest: ExecuteScalingPolicyRequest,

}
