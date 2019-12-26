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
 * 描述预付费模式，即包年包月相关参数。包括购买时长和自动续费逻辑等。
 * @class
 */
class ChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
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
 * 本地磁盘规格
 * @class
 */
class LocalDiskType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地磁盘类型。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 本地磁盘属性。
         * @type {string || null}
         */
        this.PartitionType = null;

        /**
         * 本地磁盘最小值。
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 本地磁盘最大值。
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 购买时本地盘是否为必选。取值范围：<br><li>REQUIRED：表示必选<br><li>OPTIONAL：表示可选。
         * @type {string || null}
         */
        this.Required = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.PartitionType = 'PartitionType' in params ? params.PartitionType : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;
        this.Required = 'Required' in params ? params.Required : null;

    }
}

/**
 * AssociateInstancesKeyPairs返回参数结构体
 * @class
 */
class AssociateInstancesKeyPairsResponse extends  AbstractModel {
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
 * RenewInstances请求参数结构体
 * @class
 */
class RenewInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * 是否续费弹性数据盘。取值范围：<br><li>TRUE：表示续费包年包月实例同时续费其挂载的弹性数据盘<br><li>FALSE：表示续费包年包月实例同时不再续费其挂载的弹性数据盘<br><br>默认取值：TRUE。
         * @type {boolean || null}
         */
        this.RenewPortableDataDisk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.RenewPortableDataDisk = 'RenewPortableDataDisk' in params ? params.RenewPortableDataDisk : null;

    }
}

/**
 * DescribeImageQuota返回参数结构体
 * @class
 */
class DescribeImageQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户的镜像配额
         * @type {number || null}
         */
        this.ImageNumQuota = null;

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
        this.ImageNumQuota = 'ImageNumQuota' in params ? params.ImageNumQuota : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancesProject请求参数结构体
 * @class
 */
class ModifyInstancesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 项目ID。项目可以使用[AddProject](https://cloud.tencent.com/doc/api/403/4398)接口创建。后续使用[DescribeInstances](https://cloud.tencent.com/document/api/213/9388)接口查询实例时，项目ID可用于过滤结果。
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ResetInstancesType返回参数结构体
 * @class
 */
class ResetInstancesTypeResponse extends  AbstractModel {
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
 * cdh实例的资源信息
 * @class
 */
class HostResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * cdh实例总cpu核数
         * @type {number || null}
         */
        this.CpuTotal = null;

        /**
         * cdh实例可用cpu核数
         * @type {number || null}
         */
        this.CpuAvailable = null;

        /**
         * cdh实例总内存大小（单位为:GiB）
         * @type {number || null}
         */
        this.MemTotal = null;

        /**
         * cdh实例可用内存大小（单位为:GiB）
         * @type {number || null}
         */
        this.MemAvailable = null;

        /**
         * cdh实例总磁盘大小（单位为:GiB）
         * @type {number || null}
         */
        this.DiskTotal = null;

        /**
         * cdh实例可用磁盘大小（单位为:GiB）
         * @type {number || null}
         */
        this.DiskAvailable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CpuTotal = 'CpuTotal' in params ? params.CpuTotal : null;
        this.CpuAvailable = 'CpuAvailable' in params ? params.CpuAvailable : null;
        this.MemTotal = 'MemTotal' in params ? params.MemTotal : null;
        this.MemAvailable = 'MemAvailable' in params ? params.MemAvailable : null;
        this.DiskTotal = 'DiskTotal' in params ? params.DiskTotal : null;
        this.DiskAvailable = 'DiskAvailable' in params ? params.DiskAvailable : null;

    }
}

/**
 * DeleteDisasterRecoverGroups请求参数结构体
 * @class
 */
class DeleteDisasterRecoverGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分散置放群组ID列表，可通过[DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/api/213/17810)接口获取。
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;

    }
}

/**
 * DeleteKeyPairs返回参数结构体
 * @class
 */
class DeleteKeyPairsResponse extends  AbstractModel {
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
 * TerminateInstances返回参数结构体
 * @class
 */
class TerminateInstancesResponse extends  AbstractModel {
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
 * ModifyInstancesChargeType返回参数结构体
 * @class
 */
class ModifyInstancesChargeTypeResponse extends  AbstractModel {
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
 * CreateDisasterRecoverGroup返回参数结构体
 * @class
 */
class CreateDisasterRecoverGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分散置放群组ID列表。
         * @type {string || null}
         */
        this.DisasterRecoverGroupId = null;

        /**
         * 分散置放群组类型，取值范围：<br><li>HOST：物理机<br><li>SW：交换机<br><li>RACK：机架
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 分散置放群组名称，长度1-60个字符，支持中、英文。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 置放群组内可容纳的云服务器数量。
         * @type {number || null}
         */
        this.CvmQuotaTotal = null;

        /**
         * 置放群组内已有的云服务器数量。
         * @type {number || null}
         */
        this.CurrentNum = null;

        /**
         * 置放群组创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

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
        this.DisasterRecoverGroupId = 'DisasterRecoverGroupId' in params ? params.DisasterRecoverGroupId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CvmQuotaTotal = 'CvmQuotaTotal' in params ? params.CvmQuotaTotal : null;
        this.CurrentNum = 'CurrentNum' in params ? params.CurrentNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceResetInstancesInternetMaxBandwidth返回参数结构体
 * @class
 */
class InquiryPriceResetInstancesInternetMaxBandwidthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该参数表示带宽调整为对应大小之后的价格。
         * @type {Price || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyKeyPairAttribute请求参数结构体
 * @class
 */
class ModifyKeyPairAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对ID，密钥对ID形如：`skey-xxxxxxxx`。<br><br>可以通过以下方式获取可用的密钥 ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥 ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/9403) ，取返回信息中的 `KeyId` 获取密钥对 ID。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 修改后的密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * 修改后的密钥对描述信息。可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * AssociateSecurityGroups请求参数结构体
 * @class
 */
class AssociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要绑定的`安全组ID`，类似sg-efil73jd，只支持绑定单个安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 被绑定的`实例ID`，类似ins-lesecurk，支持指定多个实例。
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ResetInstancesType请求参数结构体
 * @class
 */
class ResetInstancesTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为1。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例机型。不同实例机型指定了不同的资源规格，具体取值可通过调用接口[`DescribeInstanceTypeConfigs`](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * InquiryPriceResetInstance请求参数结构体
 * @class
 */
class InquiryPriceResetInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 指定有效的[镜像](/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 实例系统盘配置信息。系统盘为云盘的实例可以通过该参数指定重装后的系统盘大小来实现对系统盘的扩容操作，若不指定则默认系统盘大小保持不变。系统盘大小只支持扩容不支持缩容；重装只支持修改系统盘的大小，不能修改系统盘的类型。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

    }
}

/**
 * RunInstances请求参数结构体
 * @class
 */
class RunInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目，所属宿主机（在专用宿主机上创建子机时指定）等属性。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，传入InstanceType获取当前机型支持的镜像列表，取返回信息中的`ImageId`字段。</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>CDHPAID：独享子机（基于专用宿主机创建，宿主机部分的资源不收费）<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * 实例机型。不同实例机型指定了不同的资源规格。
<br><li>对于付费模式为PREPAID或POSTPAID\_BY\_HOUR的实例创建，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则默认机型为S1.SMALL1。<br><li>对于付费模式为CDHPAID的实例创建，该参数以"CDH_"为前缀，根据CPU和内存配置生成，具体形式为：CDH_XCXG，例如对于创建CPU为1核，内存为1G大小的专用宿主机的实例，该参数应该为CDH_1C1G。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。若不指定该参数，则默认使用基础网络。若在此参数中指定了私有网络IP，表示每个实例的主网卡IP，而且InstanceCount参数必须与私有网络IP的个数一致。
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 购买实例数量。包年包月实例取值范围：[1，300]，按量计费实例取值范围：[1，100]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量，具体配额相关限制详见[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 实例显示名称。<br><li>不指定实例显示名称则默认显示‘未命名’。</li><li>购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server_{R:3}`，购买1台时，实例显示名称为`server_3`；购买2台时，实例显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。</li><li>购买多台实例，如果不指定模式串，则在实例显示名称添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server_`，购买2台时，实例显示名称分别为`server_1`，`server_2`。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 云服务器的主机名。<br><li>点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。<br><li>Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。<br><li>其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 定时任务。通过该参数可以为实例指定定时任务，目前仅支持定时销毁。
         * @type {ActionTimer || null}
         */
        this.ActionTimer = null;

        /**
         * 置放群组id，仅支持指定一个。
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云服务器实例。
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB。关于获取此参数的详细介绍，请参阅[Windows](https://cloud.tencent.com/document/product/213/17526)和[Linux](https://cloud.tencent.com/document/product/213/17525)启动时运行命令。
         * @type {string || null}
         */
        this.UserData = null;

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
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
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

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

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
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

        if (params.ActionTimer) {
            let obj = new ActionTimer();
            obj.deserialize(params.ActionTimer)
            this.ActionTimer = obj;
        }
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * DeleteImages请求参数结构体
 * @class
 */
class DeleteImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 准备删除的镜像Id列表
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;

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
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表。
         * @type {Array.<Instance> || null}
         */
        this.InstanceSet = null;

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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHosts返回参数结构体
 * @class
 */
class DescribeHostsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的cdh实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * cdh实例详细信息列表
         * @type {Array.<HostItem> || null}
         */
        this.HostSet = null;

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

        if (params.HostSet) {
            this.HostSet = new Array();
            for (let z in params.HostSet) {
                let obj = new HostItem();
                obj.deserialize(params.HostSet[z]);
                this.HostSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteKeyPairs请求参数结构体
 * @class
 */
class DeleteKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的密钥对ID。每次请求批量密钥对的上限为100。<br>可以通过以下方式获取可用的密钥ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的 `KeyId` 获取密钥对ID。
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
 * 描述了操作系统所在块设备即系统盘的信息
 * @class
 */
class SystemDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统盘类型。系统盘类型限制详见[实例规格](/document/product/213/2177)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><br>默认取值：CLOUD_BASIC。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID。暂时不支持该参数。
         * @type {string || null}
         */
        this.DiskId = null;

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
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * ResetInstance请求参数结构体
 * @class
 */
class ResetInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/9388) API返回值中的`InstanceId`获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/9418) ，取返回信息中的`ImageId`字段。</li>
<br>默认取值：默认使用当前镜像。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 实例系统盘配置信息。系统盘为云盘的实例可以通过该参数指定重装后的系统盘大小来实现对系统盘的扩容操作，若不指定则默认系统盘大小保持不变。系统盘大小只支持扩容不支持缩容；重装只支持修改系统盘的大小，不能修改系统盘的类型。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * 重装系统时，可以指定修改实例的HostName。
         * @type {string || null}
         */
        this.HostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.HostName = 'HostName' in params ? params.HostName : null;

    }
}

/**
 * 描述实例机型配置信息
 * @class
 */
class InstanceTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例机型。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例机型系列。
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * GPU核数，单位：核。
         * @type {number || null}
         */
        this.GPU = null;

        /**
         * CPU核数，单位：核。
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 内存容量，单位：`GB`。
         * @type {number || null}
         */
        this.Memory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.GPU = 'GPU' in params ? params.GPU : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;

    }
}

/**
 * AllocateHosts请求参数结构体
 * @class
 */
class AllocateHostsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 用于保证请求幂等性的字符串。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
         * @type {ChargePrepaid || null}
         */
        this.HostChargePrepaid = null;

        /**
         * 实例计费类型。目前仅支持：PREPAID（预付费，即包年包月模式）。
         * @type {string || null}
         */
        this.HostChargeType = null;

        /**
         * CDH实例机型，默认为：'HS1'。
         * @type {string || null}
         */
        this.HostType = null;

        /**
         * 购买CDH实例数量。
         * @type {number || null}
         */
        this.HostCount = null;

        /**
         * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例。
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

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
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.HostChargePrepaid) {
            let obj = new ChargePrepaid();
            obj.deserialize(params.HostChargePrepaid)
            this.HostChargePrepaid = obj;
        }
        this.HostChargeType = 'HostChargeType' in params ? params.HostChargeType : null;
        this.HostType = 'HostType' in params ? params.HostType : null;
        this.HostCount = 'HostCount' in params ? params.HostCount : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：<br><li>TRUE：表示保持镜像的登录设置<br><li>FALSE：表示不保持镜像的登录设置<br><br>默认取值：FALSE。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
 * DescribeRegions返回参数结构体
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 地域列表信息
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionSet = null;

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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PurchaseReservedInstancesOffering请求参数结构体
 * @class
 */
class PurchaseReservedInstancesOfferingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买预留实例计费数量
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 预留实例计费配置ID
         * @type {string || null}
         */
        this.ReservedInstancesOfferingId = null;

        /**
         * 试运行
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。<br>更多详细信息请参阅：如何保证幂等性
         * @type {string || null}
         */
        this.ClientToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.ReservedInstancesOfferingId = 'ReservedInstancesOfferingId' in params ? params.ReservedInstancesOfferingId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

    }
}

/**
 * RebootInstances请求参数结构体
 * @class
 */
class RebootInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 是否在正常重启失败后选择强制重启实例。取值范围：<br><li>TRUE：表示在正常重启失败后进行强制重启<br><li>FALSE：表示在正常重启失败后不进行强制重启<br><br>默认取值：FALSE。
         * @type {boolean || null}
         */
        this.ForceReboot = null;

        /**
         * 关机类型。取值范围：<br><li>SOFT：表示软关机<br><li>HARD：表示硬关机<br><li>SOFT_FIRST：表示优先软关机，失败再执行硬关机<br><br>默认取值：SOFT。
         * @type {string || null}
         */
        this.StopType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ForceReboot = 'ForceReboot' in params ? params.ForceReboot : null;
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * AssociateInstancesKeyPairs请求参数结构体
 * @class
 */
class AssociateInstancesKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID，每次请求批量实例的上限为100。<br>可以通过以下方式获取可用的实例ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询实例ID。<br><li>通过调用接口 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) ，取返回信息中的`InstanceId`获取实例ID。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 一个或多个待操作的密钥对ID，每次请求批量密钥对的上限为100。密钥对ID形如：`skey-3glfot13`。<br>可以通过以下方式获取可用的密钥ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的`KeyId`获取密钥对ID。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再绑定密钥。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机。<br><li>FALSE：表示在正常关机失败后不进行强制关机。<br>默认取值：FALSE。
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * ImportKeyPair返回参数结构体
 * @class
 */
class ImportKeyPairResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对ID。
         * @type {string || null}
         */
        this.KeyId = null;

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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesStatus返回参数结构体
 * @class
 */
class DescribeInstancesStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例状态数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * [实例状态](https://cloud.tencent.com/document/api/213/15738) 列表。
         * @type {Array.<InstanceStatus> || null}
         */
        this.InstanceStatusSet = null;

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

        if (params.InstanceStatusSet) {
            this.InstanceStatusSet = new Array();
            for (let z in params.InstanceStatusSet) {
                let obj = new InstanceStatus();
                obj.deserialize(params.InstanceStatusSet[z]);
                this.InstanceStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 可用区信息
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区名称，例如，ap-guangzhou-3
全网可用区名称如下：
<li> ap-chongqing-1 </li>
<li> ap-seoul-1 </li>
<li> ap-chengdu-1 </li>
<li> ap-chengdu-2 </li>
<li> ap-hongkong-1 </li>
<li> ap-hongkong-2 </li>
<li> ap-shenzhen-fsi-1 </li>
<li> ap-shenzhen-fsi-2 </li>
<li> ap-shenzhen-fsi-3 </li>
<li> ap-guangzhou-1（售罄）</li>
<li> ap-guangzhou-2（售罄）</li>
<li> ap-guangzhou-3 </li>
<li> ap-guangzhou-4 </li>
<li> ap-tokyo-1 </li>
<li> ap-singapore-1 </li>
<li> ap-shanghai-fsi-1 </li>
<li> ap-shanghai-fsi-2 </li>
<li> ap-shanghai-fsi-3 </li>
<li> ap-bangkok-1 </li>
<li> ap-shanghai-1（售罄） </li>
<li> ap-shanghai-2 </li>
<li> ap-shanghai-3 </li>
<li> ap-shanghai-4 </li>
<li> ap-mumbai-1 </li>
<li> ap-mumbai-2 </li>
<li> eu-moscow-1 </li>
<li> ap-beijing-1 </li>
<li> ap-beijing-2 </li>
<li> ap-beijing-3 </li>
<li> ap-beijing-4 </li>
<li> na-siliconvalley-1 </li>
<li> na-siliconvalley-2 </li>
<li> eu-frankfurt-1 </li>
<li> na-toronto-1 </li>
<li> na-ashburn-1 </li>
<li> na-ashburn-2 </li>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区描述，例如，广州三区
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 可用区ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 可用区状态，包含AVAILABLE和UNAVAILABLE。AVAILABLE代表可用，UNAVAILABLE代表不可用。
         * @type {string || null}
         */
        this.ZoneState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneState = 'ZoneState' in params ? params.ZoneState : null;

    }
}

/**
 * InquiryPriceModifyInstancesChargeType返回参数结构体
 * @class
 */
class InquiryPriceModifyInstancesChargeTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该参数表示对应配置实例转换计费模式的价格。
         * @type {Price || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKeyPairs返回参数结构体
 * @class
 */
class DescribeKeyPairsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的密钥对数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 密钥对详细信息列表。
         * @type {Array.<KeyPair> || null}
         */
        this.KeyPairSet = null;

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

        if (params.KeyPairSet) {
            this.KeyPairSet = new Array();
            for (let z in params.KeyPairSet) {
                let obj = new KeyPair();
                obj.deserialize(params.KeyPairSet[z]);
                this.KeyPairSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetInstancesPassword请求参数结构体
 * @class
 */
class ResetInstancesPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：
Linux实例密码必须8-30位，推荐使用12位以上密码，不能以“/”开头，至少包含以下字符中的三种不同字符，字符种类：<br><li>小写字母：[a-z]<br><li>大写字母：[A-Z]<br><li>数字：0-9<br><li>特殊字符： ()\`~!@#$%^&\*-+=\_|{}[]:;'<>,.?/:
Windows实例密码必须12~30位，不能以“/”开头且不包括用户名，至少包含以下字符中的三种不同字符<br><li>小写字母：[a-z]<br><li>大写字母：[A-Z]<br><li>数字： 0-9<br><li>特殊字符：()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/:<br><li>如果实例即包含`Linux`实例又包含`Windows`实例，则密码复杂度限制按照`Windows`实例的限制。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 待重置密码的实例操作系统用户名。不得超过64个字符。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * 描述了网络计费
 * @class
 */
class InternetChargeTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络计费模式。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 网络计费模式描述信息。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeImages返回参数结构体
 * @class
 */
class DescribeImagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个关于镜像详细信息的结构体，主要包括镜像的主要状态与属性。
         * @type {Array.<Image> || null}
         */
        this.ImageSet = null;

        /**
         * 符合要求的镜像数量。
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

        if (params.ImageSet) {
            this.ImageSet = new Array();
            for (let z in params.ImageSet) {
                let obj = new Image();
                obj.deserialize(params.ImageSet[z]);
                this.ImageSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancesVpcAttribute返回参数结构体
 * @class
 */
class ModifyInstancesVpcAttributeResponse extends  AbstractModel {
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
 * InquiryPriceResetInstancesType请求参数结构体
 * @class
 */
class InquiryPriceResetInstancesTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为1。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例机型。不同实例机型指定了不同的资源规格，具体取值可参见附表实例资源规格对照表，也可以调用查询实例资源规格列表接口获得最新的规格表。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DescribeInstancesOperationLimit请求参数结构体
 * @class
 */
class DescribeInstancesOperationLimitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个实例ID查询，可通过[DescribeInstances](https://cloud.tencent.com/document/api/213/9388)API返回值中的InstanceId获取。实例ID形如：ins-xxxxxxxx。（此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的id.N一节）。每次请求的实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例操作。
<li> INSTANCE_DEGRADE：实例降配操作</li>
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * ModifyInstancesChargeType请求参数结构体
 * @class
 */
class ModifyInstancesChargeTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

/**
 * DescribeInstanceVncUrl请求参数结构体
 * @class
 */
class DescribeInstanceVncUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。
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
 * ModifyImageSharePermission请求参数结构体
 * @class
 */
class ModifyImageSharePermissionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID，形如`img-gvbnzy6f`。镜像Id可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。 <br>镜像ID必须指定为状态为`NORMAL`的镜像。镜像状态请参考[镜像数据表](https://cloud.tencent.com/document/product/213/15753#Image)。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 接收分享镜像的账号Id列表，array型参数的格式可以参考[API简介](/document/api/213/568)。帐号ID不同于QQ号，查询用户帐号ID请查看[帐号信息](https://console.cloud.tencent.com/developer)中的帐号ID栏。
         * @type {Array.<string> || null}
         */
        this.AccountIds = null;

        /**
         * 操作，包括 `SHARE`，`CANCEL`。其中`SHARE`代表分享操作，`CANCEL`代表取消分享操作。
         * @type {string || null}
         */
        this.Permission = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.AccountIds = 'AccountIds' in params ? params.AccountIds : null;
        this.Permission = 'Permission' in params ? params.Permission : null;

    }
}

/**
 * DisassociateInstancesKeyPairs返回参数结构体
 * @class
 */
class DisassociateInstancesKeyPairsResponse extends  AbstractModel {
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
 * InquiryPriceResizeInstanceDisks请求参数结构体
 * @class
 */
class InquiryPriceResizeInstanceDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 待扩容的数据盘配置信息。只支持扩容非弹性数据盘（[`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性），且[数据盘类型](https://cloud.tencent.com/document/product/213/15753#DataDisk)为：`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`。数据盘容量单位：GB。最小扩容步长：10G。关于数据盘类型的选择请参考硬盘产品简介。可选数据盘类型受到实例类型`InstanceType`限制。另外允许扩容的最大容量也因数据盘类型的不同而有所差异。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * RunInstances返回参数结构体
 * @class
 */
class RunInstancesResponse extends  AbstractModel {
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
 * ResetInstancesInternetMaxBandwidth返回参数结构体
 * @class
 */
class ResetInstancesInternetMaxBandwidthResponse extends  AbstractModel {
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
 * ModifyInstancesAttribute返回参数结构体
 * @class
 */
class ModifyInstancesAttributeResponse extends  AbstractModel {
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
 * ModifyImageSharePermission返回参数结构体
 * @class
 */
class ModifyImageSharePermissionResponse extends  AbstractModel {
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
 * DescribeInstancesOperationLimit返回参数结构体
 * @class
 */
class DescribeInstancesOperationLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该参数表示调整配置操作（降配）限制次数查询。
         * @type {Array.<OperationCountLimit> || null}
         */
        this.InstanceOperationLimitSet = null;

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

        if (params.InstanceOperationLimitSet) {
            this.InstanceOperationLimitSet = new Array();
            for (let z in params.InstanceOperationLimitSet) {
                let obj = new OperationCountLimit();
                obj.deserialize(params.InstanceOperationLimitSet[z]);
                this.InstanceOperationLimitSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SyncImages返回参数结构体
 * @class
 */
class SyncImagesResponse extends  AbstractModel {
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
 * DescribeZoneInstanceConfigInfos返回参数结构体
 * @class
 */
class DescribeZoneInstanceConfigInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区机型配置列表。
         * @type {Array.<InstanceTypeQuotaItem> || null}
         */
        this.InstanceTypeQuotaSet = null;

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

        if (params.InstanceTypeQuotaSet) {
            this.InstanceTypeQuotaSet = new Array();
            for (let z in params.InstanceTypeQuotaSet) {
                let obj = new InstanceTypeQuotaItem();
                obj.deserialize(params.InstanceTypeQuotaSet[z]);
                this.InstanceTypeQuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancesAttribute请求参数结构体
 * @class
 */
class ModifyInstancesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例名称。可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 指定实例的安全组Id列表，子机将重新关联指定列表的安全组，原本关联的安全组会被解绑。
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;

    }
}

/**
 * RenewHosts请求参数结构体
 * @class
 */
class RenewHostsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的CDH实例ID。
         * @type {Array.<string> || null}
         */
        this.HostIds = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
         * @type {ChargePrepaid || null}
         */
        this.HostChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostIds = 'HostIds' in params ? params.HostIds : null;

        if (params.HostChargePrepaid) {
            let obj = new ChargePrepaid();
            obj.deserialize(params.HostChargePrepaid)
            this.HostChargePrepaid = obj;
        }

    }
}

/**
 * DescribeZones请求参数结构体
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
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
 * StartInstances请求参数结构体
 * @class
 */
class StartInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 标签键值对
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
 * DescribeInstanceInternetBandwidthConfigs返回参数结构体
 * @class
 */
class DescribeInstanceInternetBandwidthConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽配置信息列表。
         * @type {Array.<InternetBandwidthConfig> || null}
         */
        this.InternetBandwidthConfigSet = null;

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

        if (params.InternetBandwidthConfigSet) {
            this.InternetBandwidthConfigSet = new Array();
            for (let z in params.InternetBandwidthConfigSet) {
                let obj = new InternetBandwidthConfig();
                obj.deserialize(params.InternetBandwidthConfigSet[z]);
                this.InternetBandwidthConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机（仅CDH产品可用），母机ip等
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属的[可用区](/document/product/213/9452#zone)ID。该参数也可以通过调用  [DescribeZones](/document/api/213/9455) 的返回值中的Zone字段来获取。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例所属项目ID。该参数可以通过调用 [DescribeProject](/document/api/378/4400) 的返回值中的 projectId 字段来获取。不填为默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例所属的专用宿主机ID列表。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。
         * @type {Array.<string> || null}
         */
        this.HostIds = null;

        /**
         * 指定母机ip生产子机
         * @type {Array.<string> || null}
         */
        this.HostIps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.HostIds = 'HostIds' in params ? params.HostIds : null;
        this.HostIps = 'HostIps' in params ? params.HostIps : null;

    }
}

/**
 * DescribeDisasterRecoverGroups请求参数结构体
 * @class
 */
class DescribeDisasterRecoverGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分散置放群组ID列表。
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * 分散置放群组名称，支持模糊匹配。
         * @type {string || null}
         */
        this.Name = null;

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
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * SyncImages请求参数结构体
 * @class
 */
class SyncImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID列表 ，镜像ID可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。<br>镜像ID必须满足限制：<br><li>镜像ID对应的镜像状态必须为`NORMAL`。<br><li>镜像大小小于50GB。<br>镜像状态请参考[镜像数据表](/document/api/213/9452#image_state)。
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

        /**
         * 目的同步地域列表；必须满足限制：<br><li>不能为源地域，<br><li>必须是一个合法的Region。<br><li>暂不支持部分地域同步。<br>具体地域参数请参考[Region](https://cloud.tencent.com/document/product/213/6091)。
         * @type {Array.<string> || null}
         */
        this.DestinationRegions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;
        this.DestinationRegions = 'DestinationRegions' in params ? params.DestinationRegions : null;

    }
}

/**
 * DisassociateInstancesKeyPairs请求参数结构体
 * @class
 */
class DisassociateInstancesKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID，每次请求批量实例的上限为100。<br><br>可以通过以下方式获取可用的实例ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询实例ID。<br><li>通过调用接口 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) ，取返回信息中的 `InstanceId` 获取实例ID。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 密钥对ID列表，每次请求批量密钥对的上限为100。密钥对ID形如：`skey-11112222`。<br><br>可以通过以下方式获取可用的密钥ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的 `KeyId` 获取密钥对ID。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再解绑密钥。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机。<br><li>FALSE：表示在正常关机失败后不进行强制关机。<br><br>默认取值：FALSE。
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * DescribeImageQuota请求参数结构体
 * @class
 */
class DescribeImageQuotaRequest extends  AbstractModel {
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
 * DescribeInstanceFamilyConfigs返回参数结构体
 * @class
 */
class DescribeInstanceFamilyConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例机型组配置的列表信息
         * @type {Array.<InstanceFamilyConfig> || null}
         */
        this.InstanceFamilyConfigSet = null;

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

        if (params.InstanceFamilyConfigSet) {
            this.InstanceFamilyConfigSet = new Array();
            for (let z in params.InstanceFamilyConfigSet) {
                let obj = new InstanceFamilyConfig();
                obj.deserialize(params.InstanceFamilyConfigSet[z]);
                this.InstanceFamilyConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImage返回参数结构体
 * @class
 */
class CreateImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageId = null;

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
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopInstances返回参数结构体
 * @class
 */
class StopInstancesResponse extends  AbstractModel {
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
 * 竞价请求相关选项
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
        this.MarketType = 'MarketType' in params ? params.MarketType : null;

    }
}

/**
 * InquiryPriceResetInstancesInternetMaxBandwidth请求参数结构体
 * @class
 */
class InquiryPriceResetInstancesInternetMaxBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。当调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽时，只支持一个实例。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 公网出带宽配置。不同机型带宽上限范围不一致，具体限制详见带宽限制对账表。暂时只支持`InternetMaxBandwidthOut`参数。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 带宽生效的起始时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。起始时间不能早于当前时间。如果起始时间是今天则新设置的带宽立即生效。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 带宽生效的终止时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。新设置的带宽的有效期包含终止时间此日期。终止时间不能晚于包年包月实例的到期时间。实例的到期时间可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`ExpiredTime`获取。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ResetInstancesPassword返回参数结构体
 * @class
 */
class ResetInstancesPasswordResponse extends  AbstractModel {
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
 * InquiryPriceRunInstances请求参数结构体
 * @class
 */
class InquiryPriceRunInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * 实例机型。不同实例机型指定了不同的资源规格，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则默认机型为S1.SMALL1。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。若不指定该参数，则默认使用基础网络。若在此参数中指定了私有网络IP，那么InstanceCount参数只能为1。
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 购买实例数量。取值范围：[1，100]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量，具体配额相关限制详见[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 实例显示名称。<br><li>不指定实例显示名称则默认显示‘未命名’。</li><li>购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server_{R:3}`，购买1台时，实例显示名称为`server_3`；购买2台时，实例显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。</li><li>购买多台实例，如果不指定模式串，则在实例显示名称添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server_`，购买2台时，实例显示名称分别为`server_1`，`server_2`。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则默认不绑定安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。<br>更多详细信息请参阅：如何保证幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 云服务器的主机名。<br><li>点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。<br><li>Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。<br><li>其他类型（Linux 等）实例：字符长度为[2, 30]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云服务器实例。
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * 实例的市场相关选项，如竞价实例相关参数
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

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
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
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

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

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
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }

    }
}

/**
 * 一个关于镜像详细信息的结构体，主要包括镜像的主要状态与属性。
 * @class
 */
class Image extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像操作系统
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 镜像类型
         * @type {string || null}
         */
        this.ImageType = null;

        /**
         * 镜像创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像描述
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * 镜像大小
         * @type {number || null}
         */
        this.ImageSize = null;

        /**
         * 镜像架构
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * 镜像状态:
CREATING-创建中
NORMAL-正常
CREATEFAILED-创建失败
USING-使用中
SYNCING-同步中
IMPORTING-导入中
IMPORTFAILED-导入失败
         * @type {string || null}
         */
        this.ImageState = null;

        /**
         * 镜像来源平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 镜像创建者
         * @type {string || null}
         */
        this.ImageCreator = null;

        /**
         * 镜像来源
         * @type {string || null}
         */
        this.ImageSource = null;

        /**
         * 同步百分比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SyncPercent = null;

        /**
         * 镜像是否支持cloud-init
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsSupportCloudinit = null;

        /**
         * 镜像关联的快照信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Snapshot> || null}
         */
        this.SnapshotSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.ImageState = 'ImageState' in params ? params.ImageState : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ImageCreator = 'ImageCreator' in params ? params.ImageCreator : null;
        this.ImageSource = 'ImageSource' in params ? params.ImageSource : null;
        this.SyncPercent = 'SyncPercent' in params ? params.SyncPercent : null;
        this.IsSupportCloudinit = 'IsSupportCloudinit' in params ? params.IsSupportCloudinit : null;

        if (params.SnapshotSet) {
            this.SnapshotSet = new Array();
            for (let z in params.SnapshotSet) {
                let obj = new Snapshot();
                obj.deserialize(params.SnapshotSet[z]);
                this.SnapshotSet.push(obj);
            }
        }

    }
}

/**
 * DescribeDisasterRecoverGroupQuota返回参数结构体
 * @class
 */
class DescribeDisasterRecoverGroupQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可创建置放群组数量的上限。
         * @type {number || null}
         */
        this.GroupQuota = null;

        /**
         * 当前用户已经创建的置放群组数量。
         * @type {number || null}
         */
        this.CurrentNum = null;

        /**
         * 物理机类型容灾组内实例的配额数。
         * @type {number || null}
         */
        this.CvmInHostGroupQuota = null;

        /**
         * 交换机类型容灾组内实例的配额数。
         * @type {number || null}
         */
        this.CvmInSwGroupQuota = null;

        /**
         * 机架类型容灾组内实例的配额数。
         * @type {number || null}
         */
        this.CvmInRackGroupQuota = null;

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
        this.GroupQuota = 'GroupQuota' in params ? params.GroupQuota : null;
        this.CurrentNum = 'CurrentNum' in params ? params.CurrentNum : null;
        this.CvmInHostGroupQuota = 'CvmInHostGroupQuota' in params ? params.CvmInHostGroupQuota : null;
        this.CvmInSwGroupQuota = 'CvmInSwGroupQuota' in params ? params.CvmInSwGroupQuota : null;
        this.CvmInRackGroupQuota = 'CvmInRackGroupQuota' in params ? params.CvmInRackGroupQuota : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * CreateDisasterRecoverGroup请求参数结构体
 * @class
 */
class CreateDisasterRecoverGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分散置放群组名称，长度1-60个字符，支持中、英文。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分散置放群组类型，取值范围：<br><li>HOST：物理机<br><li>SW：交换机<br><li>RACK：机架
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。<br>更多详细信息请参阅：如何保证幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

    }
}

/**
 * DescribeReservedInstances返回参数结构体
 * @class
 */
class DescribeReservedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的预留实例计费数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合条件的预留实例计费列表。
         * @type {Array.<ReservedInstances> || null}
         */
        this.ReservedInstancesSet = null;

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

        if (params.ReservedInstancesSet) {
            this.ReservedInstancesSet = new Array();
            for (let z in params.ReservedInstancesSet) {
                let obj = new ReservedInstances();
                obj.deserialize(params.ReservedInstancesSet[z]);
                this.ReservedInstancesSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImportImageOs返回参数结构体
 * @class
 */
class DescribeImportImageOsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的导入镜像的操作系统类型。
         * @type {ImageOsList || null}
         */
        this.ImportImageOsListSupported = null;

        /**
         * 支持的导入镜像的操作系统版本。
         * @type {Array.<OsVersion> || null}
         */
        this.ImportImageOsVersionSet = null;

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

        if (params.ImportImageOsListSupported) {
            let obj = new ImageOsList();
            obj.deserialize(params.ImportImageOsListSupported)
            this.ImportImageOsListSupported = obj;
        }

        if (params.ImportImageOsVersionSet) {
            this.ImportImageOsVersionSet = new Array();
            for (let z in params.ImportImageOsVersionSet) {
                let obj = new OsVersion();
                obj.deserialize(params.ImportImageOsVersionSet[z]);
                this.ImportImageOsVersionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyKeyPairAttribute返回参数结构体
 * @class
 */
class ModifyKeyPairAttributeResponse extends  AbstractModel {
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
 * 描述了数据盘的信息
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[实例规格](/document/product/213/2177)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 数据盘类型。数据盘类型限制详见[实例规格](/document/product/213/2177)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><br>默认取值：LOCAL_BASIC。<br><br>该参数对`ResizeInstanceDisk`接口无效。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 数据盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID。暂时不支持该参数。
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 数据盘是否随子机销毁。取值范围：
<li>TRUE：子机销毁时，销毁数据盘，只支持按小时后付费云盘
<li>FALSE：子机销毁时，保留数据盘<br>
默认取值：TRUE<br>
该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * 数据盘快照ID。选择的数据盘快照大小需小于数据盘大小。
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
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

    }
}

/**
 * DescribeKeyPairs请求参数结构体
 * @class
 */
class DescribeKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对ID，密钥对ID形如：`skey-11112222`（此接口支持同时传入多个ID进行过滤。此参数的具体格式可参考 API [简介](https://cloud.tencent.com/document/api/213/15688)的 `id.N` 一节）。参数不支持同时指定 `KeyIds` 和 `Filters`。密钥对ID可以通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * 过滤条件。
<li> project-id - Integer - 是否必填：否 -（过滤条件）按照项目ID过滤。可以通过[项目列表](https://console.cloud.tencent.com/project)查询项目ID，或者调用接口 [DescribeProject](https://cloud.tencent.com/document/api/378/4400)，取返回信息中的projectId获取项目ID。</li>
<li> key-name - String - 是否必填：否 -（过滤条件）按照密钥对名称过滤。</li>参数不支持同时指定 `KeyIds` 和 `Filters`。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

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
 * 描述了单台实例操作次数限制
 * @class
 */
class OperationCountLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例操作。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 当前已使用次数，如果返回值为-1表示该操作无次数限制。
         * @type {number || null}
         */
        this.CurrentCount = null;

        /**
         * 操作次数最高额度，如果返回值为-1表示该操作无次数限制，如果返回值为0表示不支持调整配置。
         * @type {number || null}
         */
        this.LimitCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CurrentCount = 'CurrentCount' in params ? params.CurrentCount : null;
        this.LimitCount = 'LimitCount' in params ? params.LimitCount : null;

    }
}

/**
 * DeleteDisasterRecoverGroups返回参数结构体
 * @class
 */
class DeleteDisasterRecoverGroupsResponse extends  AbstractModel {
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
 * cdh实例详细信息
 * @class
 */
class HostItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * cdh实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * cdh实例id
         * @type {string || null}
         */
        this.HostId = null;

        /**
         * cdh实例类型
         * @type {string || null}
         */
        this.HostType = null;

        /**
         * cdh实例名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * cdh实例付费模式
         * @type {string || null}
         */
        this.HostChargeType = null;

        /**
         * cdh实例自动续费标记
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * cdh实例创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * cdh实例过期时间
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * cdh实例上已创建云子机的实例id列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * cdh实例状态
         * @type {string || null}
         */
        this.HostState = null;

        /**
         * cdh实例ip
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * cdh实例资源信息
         * @type {HostResource || null}
         */
        this.HostResource = null;

        /**
         * 专用宿主机所属的围笼ID。该字段仅对金融专区围笼内的专用宿主机有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CageId = null;

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
        this.HostId = 'HostId' in params ? params.HostId : null;
        this.HostType = 'HostType' in params ? params.HostType : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostChargeType = 'HostChargeType' in params ? params.HostChargeType : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.HostState = 'HostState' in params ? params.HostState : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;

        if (params.HostResource) {
            let obj = new HostResource();
            obj.deserialize(params.HostResource)
            this.HostResource = obj;
        }
        this.CageId = 'CageId' in params ? params.CageId : null;

    }
}

/**
 * 扩展数据
 * @class
 */
class Externals extends  AbstractModel {
    constructor(){
        super();

        /**
         * 释放地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ReleaseAddress = null;

        /**
         * 不支持的网络类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.UnsupportNetworks = null;

        /**
         * HDD本地存储属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StorageBlock || null}
         */
        this.StorageBlockAttr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReleaseAddress = 'ReleaseAddress' in params ? params.ReleaseAddress : null;
        this.UnsupportNetworks = 'UnsupportNetworks' in params ? params.UnsupportNetworks : null;

        if (params.StorageBlockAttr) {
            let obj = new StorageBlock();
            obj.deserialize(params.StorageBlockAttr)
            this.StorageBlockAttr = obj;
        }

    }
}

/**
 * InquiryPriceModifyInstancesChargeType请求参数结构体
 * @class
 */
class InquiryPriceModifyInstancesChargeTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

/**
 * CreateImage请求参数结构体
 * @class
 */
class CreateImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 需要制作镜像的实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 镜像描述
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * 是否执行强制关机以制作镜像。
取值范围：<br><li>TRUE：表示关机之后制作镜像<br><li>FALSE：表示开机状态制作镜像<br><br>默认取值：FALSE。<br><br>开机状态制作镜像，可能导致部分数据未备份，影响数据安全。
         * @type {string || null}
         */
        this.ForcePoweroff = null;

        /**
         * 创建Windows镜像时是否启用Sysprep
         * @type {string || null}
         */
        this.Sysprep = null;

        /**
         * 实例需要制作镜像的数据盘Id
         * @type {Array.<string> || null}
         */
        this.DataDiskIds = null;

        /**
         * 需要制作镜像的快照ID,必须包含一个系统盘快照
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

        /**
         * 检测请求的合法性，但不会对操作的资源产生任何影响
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
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.ForcePoweroff = 'ForcePoweroff' in params ? params.ForcePoweroff : null;
        this.Sysprep = 'Sysprep' in params ? params.Sysprep : null;
        this.DataDiskIds = 'DataDiskIds' in params ? params.DataDiskIds : null;
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * 描述实例的信息
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所在的位置。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 实例`ID`。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例机型。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例的CPU核数，单位：核。
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 实例内存容量，单位：`GB`。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例业务状态。取值范围：<br><li>NORMAL：表示正常状态的实例<br><li>EXPIRED：表示过期的实例<br><li>PROTECTIVELY_ISOLATED：表示被安全隔离的实例。
         * @type {string || null}
         */
        this.RestrictState = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例计费模式。取值范围：<br><li>`PREPAID`：表示预付费，即包年包月<br><li>`POSTPAID_BY_HOUR`：表示后付费，即按量计费<br><li>`CDHPAID`：`CDH`付费，即只对`CDH`计费，不对`CDH`上的实例计费。<br><li>`SPOTPAID`：表示竞价实例付费。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 实例系统盘信息。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 实例数据盘信息。只包含随实例购买的数据盘。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 实例主网卡的内网`IP`列表。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 实例主网卡的公网`IP`列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 实例带宽信息。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 实例所属虚拟私有网络信息。
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * 生产实例所使用的镜像`ID`。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 自动续费标识。取值范围：<br><li>`NOTIFY_AND_MANUAL_RENEW`：表示通知即将过期，但不自动续费<br><li>`NOTIFY_AND_AUTO_RENEW`：表示通知即将过期，而且自动续费<br><li>`DISABLE_NOTIFY_AND_MANUAL_RENEW`：表示不通知即将过期，也不自动续费。
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 到期时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * 操作系统名称。
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 实例登录设置。目前只返回实例所关联的密钥。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 实例状态。取值范围：<br><li>PENDING：表示创建中<br></li><li>LAUNCH_FAILED：表示创建失败<br></li><li>RUNNING：表示运行中<br></li><li>STOPPED：表示关机<br></li><li>STARTING：表示开机中<br></li><li>STOPPING：表示关机中<br></li><li>REBOOTING：表示重启中<br></li><li>SHUTDOWN：表示停止待销毁<br></li><li>TERMINATING：表示销毁中。<br></li>
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * 实例关联的标签列表。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 实例的关机计费模式。
取值范围：<br><li>KEEP_CHARGING：关机继续收费<br><li>STOP_CHARGING：关机停止收费<li>NOT_APPLICABLE：实例处于非关机状态或者不适用关机停止计费的条件<br>
         * @type {string || null}
         */
        this.StopChargingMode = null;

        /**
         * 实例全局唯一ID
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 实例的最新操作。例：StopInstances、ResetInstance。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * 实例的最新操作状态。取值范围：<br><li>SUCCESS：表示操作成功<br><li>OPERATING：表示操作执行中<br><li>FAILED：表示操作失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * 实例最新操作的唯一请求 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperationRequestId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.RestrictState = 'RestrictState' in params ? params.RestrictState : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

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
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.StopChargingMode = 'StopChargingMode' in params ? params.StopChargingMode : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.LatestOperationRequestId = 'LatestOperationRequestId' in params ? params.LatestOperationRequestId : null;

    }
}

/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent
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
 * CreateKeyPair返回参数结构体
 * @class
 */
class CreateKeyPairResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对信息。
         * @type {KeyPair || null}
         */
        this.KeyPair = null;

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

        if (params.KeyPair) {
            let obj = new KeyPair();
            obj.deserialize(params.KeyPair)
            this.KeyPair = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceVncUrl返回参数结构体
 * @class
 */
class DescribeInstanceVncUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的管理终端地址。
         * @type {string || null}
         */
        this.InstanceVncUrl = null;

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
        this.InstanceVncUrl = 'InstanceVncUrl' in params ? params.InstanceVncUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReservedInstancesOfferings请求参数结构体
 * @class
 */
class DescribeReservedInstancesOfferingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 试运行, 默认为 false。
         * @type {boolean || null}
         */
        this.DryRun = null;

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

        /**
         * 以最大有效期作为过滤参数。
计量单位: 秒
默认为 94608000。
         * @type {number || null}
         */
        this.MaxDuration = null;

        /**
         * 以最小有效期作为过滤参数。
计量单位: 秒
默认为 2592000。
         * @type {number || null}
         */
        this.MinDuration = null;

        /**
         * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照预留实例计费可购买的【<strong>可用区</strong>】进行过滤。形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>duration</strong></li>
<p style="padding-left: 30px;">按照预留实例计费【<strong>有效期</strong>】即预留实例计费购买时长进行过滤。形如：31536000。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">计量单位：秒</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：31536000 (1年) | 94608000（3年）</p>
<li><strong>instance-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>预留实例计费类型</strong>】进行过滤。形如：S3.MEDIUM4。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/11518">预留实例计费类型列表</a></p>
<li><strong>offering-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>付款类型</strong>】进行过滤。形如：All Upfront (预付全部费用)。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：All Upfront (预付全部费用)</p>
<li><strong>product-description</strong></li>
<p style="padding-left: 30px;">按照预留实例计费的【<strong>平台描述</strong>】（即操作系统）进行过滤。形如：linux。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：linux</p>
<li><strong>reserved-instances-offering-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>预留实例计费配置ID</strong>】进行过滤。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。
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
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.MaxDuration = 'MaxDuration' in params ? params.MaxDuration : null;
        this.MinDuration = 'MinDuration' in params ? params.MinDuration : null;

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
 * DescribeDisasterRecoverGroups返回参数结构体
 * @class
 */
class DescribeDisasterRecoverGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分散置放群组信息列表。
         * @type {Array.<DisasterRecoverGroup> || null}
         */
        this.DisasterRecoverGroupSet = null;

        /**
         * 用户置放群组总量。
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

        if (params.DisasterRecoverGroupSet) {
            this.DisasterRecoverGroupSet = new Array();
            for (let z in params.DisasterRecoverGroupSet) {
                let obj = new DisasterRecoverGroup();
                obj.deserialize(params.DisasterRecoverGroupSet[z]);
                this.DisasterRecoverGroupSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 是否开启[云安全](/document/product/296)服务。取值范围：<br><li>TRUE：表示开启云安全服务<br><li>FALSE：表示不开启云安全服务<br><br>默认取值：TRUE。
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
 * 定时任务
 * @class
 */
class ActionTimer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩展数据
         * @type {Externals || null}
         */
        this.Externals = null;

        /**
         * 定时器名称，目前仅支持销毁一个值：TerminateInstances。
         * @type {string || null}
         */
        this.TimerAction = null;

        /**
         * 执行时间，格式形如：2018-5-29 11:26:40,执行时间必须大于当前时间5分钟。
         * @type {string || null}
         */
        this.ActionTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Externals) {
            let obj = new Externals();
            obj.deserialize(params.Externals)
            this.Externals = obj;
        }
        this.TimerAction = 'TimerAction' in params ? params.TimerAction : null;
        this.ActionTime = 'ActionTime' in params ? params.ActionTime : null;

    }
}

/**
 * 创建资源实例时同时绑定的标签对说明
 * @class
 */
class TagSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签绑定的资源类型，当前支持类型："instance"和"host"
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 标签对列表
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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

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
 * ResetInstancesInternetMaxBandwidth请求参数结构体
 * @class
 */
class ResetInstancesInternetMaxBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388)接口返回值中的 `InstanceId` 获取。 每次请求批量实例的上限为100。当调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽时，只支持一个实例。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 公网出带宽配置。不同机型带宽上限范围不一致，具体限制详见带宽限制对账表。暂时只支持 `InternetMaxBandwidthOut` 参数。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 带宽生效的起始时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。起始时间不能早于当前时间。如果起始时间是今天则新设置的带宽立即生效。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 带宽生效的终止时间。格式： `YYYY-MM-DD` ，例如：`2016-10-30` 。新设置的带宽的有效期包含终止时间此日期。终止时间不能晚于包年包月实例的到期时间。实例的到期时间可通过 [`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388)接口返回值中的`ExpiredTime`获取。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 描述实例的机型族配置信息
形如：{'InstanceFamilyName': '标准型S1', 'InstanceFamily': 'S1'}、{'InstanceFamilyName': '网络优化型N1', 'InstanceFamily': 'N1'}、{'InstanceFamilyName': '高IO型I1', 'InstanceFamily': 'I1'}等。
 * @class
 */
class InstanceFamilyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型族名称的中文全称。
         * @type {string || null}
         */
        this.InstanceFamilyName = null;

        /**
         * 机型族名称的英文简称。
         * @type {string || null}
         */
        this.InstanceFamily = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceFamilyName = 'InstanceFamilyName' in params ? params.InstanceFamilyName : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;

    }
}

/**
 * AssociateSecurityGroups返回参数结构体
 * @class
 */
class AssociateSecurityGroupsResponse extends  AbstractModel {
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
 * ImportImage请求参数结构体
 * @class
 */
class ImportImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导入镜像的操作系统架构，`x86_64` 或 `i386`
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * 导入镜像的操作系统类型，通过`DescribeImportImageOs`获取
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 导入镜像的操作系统版本，通过`DescribeImportImageOs`获取
         * @type {string || null}
         */
        this.OsVersion = null;

        /**
         * 导入镜像存放的cos地址
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像描述
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * 只检查参数，不执行任务
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * 是否强制导入，参考[强制导入镜像](https://cloud.tencent.com/document/product/213/12849)
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.OsVersion = 'OsVersion' in params ? params.OsVersion : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.Force = 'Force' in params ? params.Force : null;

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
         * 竞价出价
         * @type {string || null}
         */
        this.MaxPrice = null;

        /**
         * 竞价请求类型，当前仅支持类型：one-time
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
 * DescribeImportImageOs请求参数结构体
 * @class
 */
class DescribeImportImageOsRequest extends  AbstractModel {
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
 * CreateKeyPair请求参数结构体
 * @class
 */
class CreateKeyPairRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * 密钥对创建后所属的项目ID。
可以通过以下方式获取项目ID：
<li>通过项目列表查询项目ID。
<li>通过调用接口DescribeProject，取返回信息中的`projectId `获取项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 描述实例的状态。状态类型详见[实例状态表](/document/api/213/9452#INSTANCE_STATE)
 * @class
 */
class InstanceStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例`ID`。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例状态。取值范围：<br><li>PENDING：表示创建中<br></li><li>LAUNCH_FAILED：表示创建失败<br></li><li>RUNNING：表示运行中<br></li><li>STOPPED：表示关机<br></li><li>STARTING：表示开机中<br></li><li>STOPPING：表示关机中<br></li><li>REBOOTING：表示重启中<br></li><li>SHUTDOWN：表示停止待销毁<br></li><li>TERMINATING：表示销毁中。<br></li>
         * @type {string || null}
         */
        this.InstanceState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;

    }
}

/**
 * InquiryPriceRenewInstances返回参数结构体
 * @class
 */
class InquiryPriceRenewInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该参数表示对应配置实例的价格。
         * @type {Price || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AllocateHosts返回参数结构体
 * @class
 */
class AllocateHostsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新创建云子机的实例id列表。
         * @type {Array.<string> || null}
         */
        this.HostIdSet = null;

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
        this.HostIdSet = 'HostIdSet' in params ? params.HostIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageSharePermission请求参数结构体
 * @class
 */
class DescribeImageSharePermissionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要共享的镜像Id
         * @type {string || null}
         */
        this.ImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

    }
}

/**
 * 容灾组信息
 * @class
 */
class DisasterRecoverGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分散置放群组id。
         * @type {string || null}
         */
        this.DisasterRecoverGroupId = null;

        /**
         * 分散置放群组名称，长度1-60个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分散置放群组类型，取值范围：<br><li>HOST：物理机<br><li>SW：交换机<br><li>RACK：机架
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 分散置放群组内最大容纳云服务器数量。
         * @type {number || null}
         */
        this.CvmQuotaTotal = null;

        /**
         * 分散置放群组内云服务器当前数量。
         * @type {number || null}
         */
        this.CurrentNum = null;

        /**
         * 分散置放群组内，云服务器id列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 分散置放群组创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisasterRecoverGroupId = 'DisasterRecoverGroupId' in params ? params.DisasterRecoverGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CvmQuotaTotal = 'CvmQuotaTotal' in params ? params.CvmQuotaTotal : null;
        this.CurrentNum = 'CurrentNum' in params ? params.CurrentNum : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * InquiryPriceResetInstance返回参数结构体
 * @class
 */
class InquiryPriceResetInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该参数表示重装成对应配置实例的价格。
         * @type {Price || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceTypeConfigs请求参数结构体
 * @class
 */
class DescribeInstanceTypeConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li> zone - String - 是否必填：否 -（过滤条件）按照[可用区](https://cloud.tencent.com/document/product/213/15753#ZoneInfo)过滤。</li>
<li> instance-family - String - 是否必填：否 -（过滤条件）按照实例机型系列过滤。实例机型系列形如：S1、I1、M1等。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为1。
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
 * DescribeImageSharePermission返回参数结构体
 * @class
 */
class DescribeImageSharePermissionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像共享信息
         * @type {Array.<SharePermission> || null}
         */
        this.SharePermissionSet = null;

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

        if (params.SharePermissionSet) {
            this.SharePermissionSet = new Array();
            for (let z in params.SharePermissionSet) {
                let obj = new SharePermission();
                obj.deserialize(params.SharePermissionSet[z]);
                this.SharePermissionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyHostsAttribute返回参数结构体
 * @class
 */
class ModifyHostsAttributeResponse extends  AbstractModel {
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
 * DescribeDisasterRecoverGroupQuota请求参数结构体
 * @class
 */
class DescribeDisasterRecoverGroupQuotaRequest extends  AbstractModel {
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
 * StartInstances返回参数结构体
 * @class
 */
class StartInstancesResponse extends  AbstractModel {
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
 * ModifyInstancesVpcAttribute请求参数结构体
 * @class
 */
class ModifyInstancesVpcAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作的实例ID数组。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 私有网络相关信息配置。通过该参数指定私有网络的ID，子网ID，私有网络ip等信息。当指定私有网络ID和子网ID（子网必须在实例所在的可用区）与指定实例所在私有网络不一致时，会将实例迁移至指定的私有网络的子网下。可通过`PrivateIpAddresses`指定私有网络子网IP，若需指定则所有已指定的实例均需要指定子网IP，此时`InstanceIds`与`PrivateIpAddresses`一一对应。不指定`PrivateIpAddresses`时随机分配私有网络子网IP。
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * 是否对运行中的实例选择强制关机。默认为TRUE。
         * @type {boolean || null}
         */
        this.ForceStop = null;

        /**
         * 是否保留主机名。默认为FALSE。
         * @type {boolean || null}
         */
        this.ReserveHostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;
        this.ReserveHostName = 'ReserveHostName' in params ? params.ReserveHostName : null;

    }
}

/**
 * DescribeReservedInstances请求参数结构体
 * @class
 */
class DescribeReservedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 试运行。默认为 false。
         * @type {boolean || null}
         */
        this.DryRun = null;

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

        /**
         * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照预留实例计费可购买的【<strong>可用区</strong>】进行过滤。形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>duration</strong></li>
<p style="padding-left: 30px;">按照预留实例计费【<strong>有效期</strong>】即预留实例计费购买时长进行过滤。形如：31536000。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">计量单位：秒</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：31536000 (1年) | 94608000（3年）</p>
<li><strong>instance-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>预留实例计费类型</strong>】进行过滤。形如：S3.MEDIUM4。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/11518">预留实例计费类型列表</a></p>
<li><strong>offering-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>付款类型</strong>】进行过滤。形如：All Upfront (预付全部费用)。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：All Upfront (预付全部费用)</p>
<li><strong>product-description</strong></li>
<p style="padding-left: 30px;">按照预留实例计费的【<strong>平台描述</strong>】（即操作系统）进行过滤。形如：linux。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：linux</p>
<li><strong>reserved-instances-id</strong></li>
<p style="padding-left: 30px;">按照已购买【<strong>预留实例计费ID</strong>】进行过滤。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>state</strong></li>
<p style="padding-left: 30px;">按照已购买【<strong>预留实例计费状态</strong>】进行过滤。形如：active。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：active (以创建) | pending (等待被创建) | retired (过期)</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。
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
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * DescribeInternetChargeTypeConfigs返回参数结构体
 * @class
 */
class DescribeInternetChargeTypeConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络计费类型配置。
         * @type {Array.<InternetChargeTypeConfig> || null}
         */
        this.InternetChargeTypeConfigSet = null;

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

        if (params.InternetChargeTypeConfigSet) {
            this.InternetChargeTypeConfigSet = new Array();
            for (let z in params.InternetChargeTypeConfigSet) {
                let obj = new InternetChargeTypeConfig();
                obj.deserialize(params.InternetChargeTypeConfigSet[z]);
                this.InternetChargeTypeConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZoneInstanceConfigInfos请求参数结构体
 * @class
 */
class DescribeZoneInstanceConfigInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。

<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>

<li> instance-family String - 是否必填：否 -（过滤条件）按照机型系列过滤。按照实例机型系列过滤。实例机型系列形如：S1、I1、M1等。</li>

<li> instance-type - String - 是否必填：否 - （过滤条件）按照机型过滤。按照实例机型过滤。不同实例机型指定了不同的资源规格，具体取值可通过调用接口 DescribeInstanceTypeConfigs 来获得最新的规格表或参见实例类型描述。若不指定该参数，则默认机型为S1.SMALL1。</li>

<li> instance-charge-type - String - 是否必填：否 -（过滤条件）按照实例计费模式过滤。 (PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费 | CDHPAID：表示CDH付费，即只对CDH计费，不对CDH上的实例计费。 )  </li>
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
 * DescribeZones返回参数结构体
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可用区列表信息。
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneSet = null;

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

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述了单项的价格信息
 * @class
 */
class ItemPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后续单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * 后续计价单元，可取值范围： <br><li>HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）：<br><li>GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChargeUnit = null;

        /**
         * 预支费用的原价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 预支费用的折扣价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiscountPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.ChargeUnit = 'ChargeUnit' in params ? params.ChargeUnit : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * 描述实例机型配额信息。
 * @class
 */
class InstanceTypeQuotaItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例机型。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例计费模式。取值范围： <br><li>PREPAID：表示预付费，即包年包月<br><li>POSTPAID_BY_HOUR：表示后付费，即按量计费<br><li>CDHPAID：表示[CDH](https://cloud.tencent.com/document/product/416)付费，即只对CDH计费，不对CDH上的实例计费。<br><li>`SPOTPAID`：表示竞价实例付费。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 网卡类型，例如：25代表25G网卡
         * @type {number || null}
         */
        this.NetworkCard = null;

        /**
         * 扩展属性。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Externals || null}
         */
        this.Externals = null;

        /**
         * 实例的CPU核数，单位：核。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例内存容量，单位：`GB`。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例机型系列。
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * 机型名称。
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 本地磁盘规格列表。当该参数返回为空值时，表示当前情况下无法创建本地盘。
         * @type {Array.<LocalDiskType> || null}
         */
        this.LocalDiskTypeList = null;

        /**
         * 实例是否售卖。取值范围： <br><li>SELL：表示实例可购买<br><li>SOLD_OUT：表示实例已售罄。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例的售卖价格。
         * @type {ItemPrice || null}
         */
        this.Price = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.NetworkCard = 'NetworkCard' in params ? params.NetworkCard : null;

        if (params.Externals) {
            let obj = new Externals();
            obj.deserialize(params.Externals)
            this.Externals = obj;
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;

        if (params.LocalDiskTypeList) {
            this.LocalDiskTypeList = new Array();
            for (let z in params.LocalDiskTypeList) {
                let obj = new LocalDiskType();
                obj.deserialize(params.LocalDiskTypeList[z]);
                this.LocalDiskTypeList.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Price) {
            let obj = new ItemPrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }

    }
}

/**
 * 支持的操作系统类型，根据windows和Linux分类。
 * @class
 */
class ImageOsList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的windows操作系统。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Windows = null;

        /**
         * 支持的linux操作系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Linux = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Windows = 'Windows' in params ? params.Windows : null;
        this.Linux = 'Linux' in params ? params.Linux : null;

    }
}

/**
 * InquiryPriceRunInstances返回参数结构体
 * @class
 */
class InquiryPriceRunInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该参数表示对应配置实例的价格。
         * @type {Price || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHosts请求参数结构体
 * @class
 */
class DescribeHostsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
<li> zone - String - 是否必填：否 - （过滤条件）按照可用区过滤。</li>
<li> project-id - Integer - 是否必填：否 - （过滤条件）按照项目ID过滤。可通过调用 DescribeProject 查询已创建的项目列表或登录控制台进行查看；也可以调用 AddProject 创建新的项目。</li>
<li> host-id - String - 是否必填：否 - （过滤条件）按照CDH ID过滤。CDH ID形如：host-11112222。</li>
<li> host-name - String - 是否必填：否 - （过滤条件）按照CDH实例名称过滤。</li>
<li> host-state - String - 是否必填：否 - （过滤条件）按照CDH实例状态进行过滤。（PENDING：创建中|LAUNCH_FAILURE：创建失败|RUNNING：运行中|EXPIRED：已过期）</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
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
 * ModifyInstancesRenewFlag返回参数结构体
 * @class
 */
class ModifyInstancesRenewFlagResponse extends  AbstractModel {
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
 * DescribeInstancesStatus请求参数结构体
 * @class
 */
class DescribeInstancesStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个实例ID查询。实例ID形如：`ins-11112222`。此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的`id.N`一节）。每次请求的实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * InquiryPriceResizeInstanceDisks返回参数结构体
 * @class
 */
class InquiryPriceResizeInstanceDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该参数表示磁盘扩容成对应配置的价格。
         * @type {Price || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateInstances请求参数结构体
 * @class
 */
class TerminateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 镜像分享信息结构
 * @class
 */
class SharePermission extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像分享时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 镜像分享的账户ID
         * @type {string || null}
         */
        this.AccountId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.AccountId = 'AccountId' in params ? params.AccountId : null;

    }
}

/**
 * 描述用户已购买预留实例计费信息
 * @class
 */
class ReservedInstances extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已购买的预留实例计费ID。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。
         * @type {string || null}
         */
        this.ReservedInstancesId = null;

        /**
         * 预留实例计费的类型。形如：S3.MEDIUM4。
返回项：<a href="https://cloud.tencent.com/document/product/213/11518">预留实例计费类型列表</a>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 预留实例计费可购买的可用区。形如：ap-guangzhou-1。
返回项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 预留实例计费开始时间。形如：1949-10-01 00:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 预留实例计费到期时间。形如：1949-10-01 00:00:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 预留实例计费【有效期】即预留实例计费购买时长。形如：31536000。
计量单位：秒。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 已购买的预留实例计费个数。形如：10。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 描述预留实例计费的平台描述（即操作系统）。形如：linux。
返回项： linux 。
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * 预留实例计费购买的状态。形如：active
返回项： active (以创建) | pending (等待被创建) | retired (过期)。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 可购买的预留实例计费类型的结算货币，使用ISO 4217标准货币代码。形如：USD。
返回项：USD（美元）。
         * @type {string || null}
         */
        this.CurrencyCode = null;

        /**
         * 预留实例计费的付款类型。形如：All Upfront。
返回项： All Upfront (预付全部费用)。
         * @type {string || null}
         */
        this.OfferingType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReservedInstancesId = 'ReservedInstancesId' in params ? params.ReservedInstancesId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.State = 'State' in params ? params.State : null;
        this.CurrencyCode = 'CurrencyCode' in params ? params.CurrencyCode : null;
        this.OfferingType = 'OfferingType' in params ? params.OfferingType : null;

    }
}

/**
 * DeleteImages返回参数结构体
 * @class
 */
class DeleteImagesResponse extends  AbstractModel {
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
 * ImportImage返回参数结构体
 * @class
 */
class ImportImageResponse extends  AbstractModel {
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
 * ModifyDisasterRecoverGroupAttribute请求参数结构体
 * @class
 */
class ModifyDisasterRecoverGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分散置放群组ID，可使用[DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/api/213/17810)接口获取。
         * @type {string || null}
         */
        this.DisasterRecoverGroupId = null;

        /**
         * 分散置放群组名称，长度1-60个字符，支持中、英文。
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
        this.DisasterRecoverGroupId = 'DisasterRecoverGroupId' in params ? params.DisasterRecoverGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * RebootInstances返回参数结构体
 * @class
 */
class RebootInstancesResponse extends  AbstractModel {
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
 * InquiryPriceResetInstancesType返回参数结构体
 * @class
 */
class InquiryPriceResetInstancesTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该参数表示调整成对应机型实例的价格。
         * @type {Price || null}
         */
        this.Price = null;

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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述可购买预留实例计费信息
 * @class
 */
class ReservedInstancesOffering extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预留实例计费可购买的可用区。形如：ap-guangzhou-1。
返回项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可购买的预留实例计费类型的结算货币，使用ISO 4217标准货币代码。
返回项：USD（美元）。
         * @type {string || null}
         */
        this.CurrencyCode = null;

        /**
         * 预留实例计费【有效期】即预留实例计费购买时长。形如：31536000。
计量单位：秒
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 预留实例计费的购买价格。形如：4000.0。
计量单位：与 currencyCode 一致，目前支持 USD（美元）
         * @type {number || null}
         */
        this.FixedPrice = null;

        /**
         * 预留实例计费的实例类型。形如：S3.MEDIUM4。
返回项：<a href="https://cloud.tencent.com/product/cvm/instances">预留实例计费类型列表</a>
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 预留实例计费的付款类型。形如：All Upfront。
返回项： All Upfront (预付全部费用)。
         * @type {string || null}
         */
        this.OfferingType = null;

        /**
         * 可购买的预留实例计费配置ID。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。
         * @type {string || null}
         */
        this.ReservedInstancesOfferingId = null;

        /**
         * 预留实例计费的平台描述（即操作系统）。形如：linux。
返回项： linux 。
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * 扣除预付费之后的使用价格 (按小时计费)。形如：0.0。
目前，因为只支持 All Upfront 付款类型，所以默认为 0元/小时。
计量单位：元/小时，货币单位与 currencyCode 一致，目前支持 USD（美元）
         * @type {number || null}
         */
        this.UsagePrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CurrencyCode = 'CurrencyCode' in params ? params.CurrencyCode : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.FixedPrice = 'FixedPrice' in params ? params.FixedPrice : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.OfferingType = 'OfferingType' in params ? params.OfferingType : null;
        this.ReservedInstancesOfferingId = 'ReservedInstancesOfferingId' in params ? params.ReservedInstancesOfferingId : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.UsagePrice = 'UsagePrice' in params ? params.UsagePrice : null;

    }
}

/**
 * 操作系统支持的类型。
 * @class
 */
class OsVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作系统类型
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 支持的操作系统版本
         * @type {Array.<string> || null}
         */
        this.OsVersions = null;

        /**
         * 支持的操作系统架构
         * @type {Array.<string> || null}
         */
        this.Architecture = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.OsVersions = 'OsVersions' in params ? params.OsVersions : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;

    }
}

/**
 * ModifyImageAttribute返回参数结构体
 * @class
 */
class ModifyImageAttributeResponse extends  AbstractModel {
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
 * InquiryPriceRenewInstances请求参数结构体
 * @class
 */
class InquiryPriceRenewInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * 试运行。
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * 是否续费弹性数据盘。取值范围：<br><li>TRUE：表示续费包年包月实例同时续费其挂载的弹性数据盘<br><li>FALSE：表示续费包年包月实例同时不再续费其挂载的弹性数据盘<br><br>默认取值：TRUE。
         * @type {boolean || null}
         */
        this.RenewPortableDataDisk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.RenewPortableDataDisk = 'RenewPortableDataDisk' in params ? params.RenewPortableDataDisk : null;

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
         * 按照一个或者多个实例ID查询。实例ID形如：`ins-xxxxxxxx`。（此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的`id.N`一节）。每次请求的实例的上限为100。参数不支持同时指定`InstanceIds`和`Filters`。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 过滤条件。
<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>
<li> project-id - Integer - 是否必填：否 -（过滤条件）按照项目ID过滤。可通过调用[DescribeProject](https://cloud.tencent.com/document/api/378/4400)查询已创建的项目列表或登录[控制台](https://console.cloud.tencent.com/cvm/index)进行查看；也可以调用[AddProject](https://cloud.tencent.com/document/api/378/4398)创建新的项目。</li>
<li> host-id - String - 是否必填：否 - （过滤条件）按照[CDH](https://cloud.tencent.com/document/product/416) ID过滤。[CDH](https://cloud.tencent.com/document/product/416) ID形如：host-xxxxxxxx。</li>
<li> vpc-id - String - 是否必填：否 - （过滤条件）按照VPC ID进行过滤。VPC ID形如：vpc-xxxxxxxx。</li>
<li> subnet-id - String - 是否必填：否 - （过滤条件）按照子网ID进行过滤。子网ID形如：subnet-xxxxxxxx。</li>
<li> instance-id - String - 是否必填：否 - （过滤条件）按照实例ID过滤。实例ID形如：ins-xxxxxxxx。</li>
<li> security-group-id - String - 是否必填：否 - （过滤条件）按照安全组ID过滤，安全组ID形如: sg-8jlk3f3r。</li>
<li> instance-name - String - 是否必填：否 - （过滤条件）按照实例名称过滤。</li>
<li> instance-charge-type - String - 是否必填：否 -（过滤条件）按照实例计费模式过滤。 (PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费 | CDHPAID：表示[CDH](https://cloud.tencent.com/document/product/416)付费，即只对[CDH](https://cloud.tencent.com/document/product/416)计费，不对[CDH](https://cloud.tencent.com/document/product/416)上的实例计费。 )  </li>
<li> private-ip-address - String - 是否必填：否 - （过滤条件）按照实例主网卡的内网IP过滤。</li>
<li> public-ip-address - String - 是否必填：否 - （过滤条件）按照实例主网卡的公网IP过滤，包含实例创建时自动分配的IP和实例创建后手动绑定的弹性IP。</li>
<li> tag-key - String - 是否必填：否 - （过滤条件）按照标签键进行过滤。</li>
<li> tag-value - String - 是否必填：否 - （过滤条件）按照标签值进行过滤。</li>
<li> tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。</li>
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
 * 地域信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域名称，例如，ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域描述，例如，华南地区(广州)
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域是否可用状态
         * @type {string || null}
         */
        this.RegionState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;

    }
}

/**
 * StopInstances请求参数结构体
 * @class
 */
class StopInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 是否在正常关闭失败后选择强制关闭实例。取值范围：<br><li>TRUE：表示在正常关闭失败后进行强制关闭<br><li>FALSE：表示在正常关闭失败后不进行强制关闭<br><br>默认取值：FALSE。
         * @type {boolean || null}
         */
        this.ForceStop = null;

        /**
         * 实例的关闭模式。取值范围：<br><li>SOFT_FIRST：表示在正常关闭失败后进行强制关闭<br><li>HARD：直接强制关闭<br><li>SOFT：仅软关机<br>默认取值：SOFT。
         * @type {string || null}
         */
        this.StopType = null;

        /**
         * 按量计费实例关机收费模式。
取值范围：<br><li>KEEP_CHARGING：关机继续收费<br><li>STOP_CHARGING：关机停止收费<br>默认取值：KEEP_CHARGING。
该参数只针对部分按量计费云硬盘实例生效，详情参考[按量计费实例关机不收费说明](https://cloud.tencent.com/document/product/213/19918)
         * @type {string || null}
         */
        this.StoppedMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;
        this.StopType = 'StopType' in params ? params.StopType : null;
        this.StoppedMode = 'StoppedMode' in params ? params.StoppedMode : null;

    }
}

/**
 * DescribeInternetChargeTypeConfigs请求参数结构体
 * @class
 */
class DescribeInternetChargeTypeConfigsRequest extends  AbstractModel {
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
 * DescribeImages请求参数结构体
 * @class
 */
class DescribeImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID列表 。镜像ID如：`img-gvbnzy6f`。array型参数的格式可以参考[API简介](https://cloud.tencent.com/document/api/213/15688)。镜像ID可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。
         * @type {Array.<string> || null}
         */
        this.ImageIds = null;

        /**
         * 过滤条件，每次请求的`Filters`的上限为0，`Filters.Values`的上限为5。参数不可以同时指定`ImageIds`和`Filters`。详细的过滤条件如下：
<li> image-id - String - 是否必填： 否 - （过滤条件）按照镜像ID进行过滤</li>
<li> image-type - String - 是否必填： 否 - （过滤条件）按照镜像类型进行过滤。取值范围：
    PRIVATE_IMAGE: 私有镜像 (本账户创建的镜像) 
    PUBLIC_IMAGE: 公共镜像 (腾讯云官方镜像)
   SHARED_IMAGE: 共享镜像(其他账户共享给本账户的镜像) 。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset详见[API简介](/document/api/213/568#.E8.BE.93.E5.85.A5.E5.8F.82.E6.95.B0.E4.B8.8E.E8.BF.94.E5.9B.9E.E5.8F.82.E6.95.B0.E9.87.8A.E4.B9.89)。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制，默认为20，最大值为100。关于Limit详见[API简介](/document/api/213/568#.E8.BE.93.E5.85.A5.E5.8F.82.E6.95.B0.E4.B8.8E.E8.BF.94.E5.9B.9E.E5.8F.82.E6.95.B0.E9.87.8A.E4.B9.89)。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 实例类型，如 `S1.SMALL1`
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
        this.ImageIds = 'ImageIds' in params ? params.ImageIds : null;

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
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * ModifyImageAttribute请求参数结构体
 * @class
 */
class ModifyImageAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID，形如`img-gvbnzy6f`。镜像ID可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 设置新的镜像名称；必须满足下列限制：<br> <li> 不得超过20个字符。<br> <li> 镜像名称不能与已有镜像重复。
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 设置新的镜像描述；必须满足下列限制：<br> <li> 不得超过60个字符。
         * @type {string || null}
         */
        this.ImageDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;

    }
}

/**
 * ResizeInstanceDisks返回参数结构体
 * @class
 */
class ResizeInstanceDisksResponse extends  AbstractModel {
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
 * ModifyInstancesRenewFlag请求参数结构体
 * @class
 */
class ModifyInstancesRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * DisassociateSecurityGroups请求参数结构体
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要解绑的`安全组ID`，类似sg-efil73jd，只支持解绑单个安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 被解绑的`实例ID`，类似ins-lesecurk，支持指定多个实例 。
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ModifyHostsAttribute请求参数结构体
 * @class
 */
class ModifyHostsAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的CDH实例ID。
         * @type {Array.<string> || null}
         */
        this.HostIds = null;

        /**
         * CDH实例显示名称。可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
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
        this.HostIds = 'HostIds' in params ? params.HostIds : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * ImportKeyPair请求参数结构体
 * @class
 */
class ImportKeyPairRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * 密钥对创建后所属的[项目](https://cloud.tencent.com/document/product/378/10861)ID。<br><br>可以通过以下方式获取项目ID：<br><li>通过[项目列表](https://console.cloud.tencent.com/project)查询项目ID。<br><li>通过调用接口 [DescribeProject](https://cloud.tencent.com/document/api/378/4400)，取返回信息中的 `projectId ` 获取项目ID。

如果是默认项目，直接填0就可以。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 密钥对的公钥内容，`OpenSSH RSA` 格式。
         * @type {string || null}
         */
        this.PublicKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;

    }
}

/**
 * 描述密钥对信息
 * @class
 */
class KeyPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对的`ID`，是密钥对的唯一标识。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 密钥对名称。
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * 密钥对所属的项目`ID`。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 密钥对描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 密钥对的纯文本公钥。
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * 密钥对的纯文本私钥。腾讯云不会保管私钥，请用户自行妥善保存。
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * 密钥关联的实例`ID`列表。
         * @type {Array.<string> || null}
         */
        this.AssociatedInstanceIds = null;

        /**
         * 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.AssociatedInstanceIds = 'AssociatedInstanceIds' in params ? params.AssociatedInstanceIds : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * DescribeReservedInstancesOfferings返回参数结构体
 * @class
 */
class DescribeReservedInstancesOfferingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的预留实例计费数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合条件的预留实例计费列表。
         * @type {Array.<ReservedInstancesOffering> || null}
         */
        this.ReservedInstancesOfferingsSet = null;

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

        if (params.ReservedInstancesOfferingsSet) {
            this.ReservedInstancesOfferingsSet = new Array();
            for (let z in params.ReservedInstancesOfferingsSet) {
                let obj = new ReservedInstancesOffering();
                obj.deserialize(params.ReservedInstancesOfferingsSet[z]);
                this.ReservedInstancesOfferingsSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewInstances返回参数结构体
 * @class
 */
class RenewInstancesResponse extends  AbstractModel {
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
 * 描述了 “云监控” 服务相关的信息
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启[云监控](/document/product/248)服务。取值范围：<br><li>TRUE：表示开启云监控服务<br><li>FALSE：表示不开启云监控服务<br><br>默认取值：TRUE。
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
 * ResetInstance返回参数结构体
 * @class
 */
class ResetInstanceResponse extends  AbstractModel {
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
> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=PREPAID
&Filters.1.Values.1=POSTPAID_BY_HOUR
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
 * 描述了VPC相关信息，包括子网，IP信息等
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

        /**
         * 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：<br><li>TRUE：表示用作公网网关<br><li>FALSE：表示不用作公网网关<br><br>默认取值：FALSE。
         * @type {boolean || null}
         */
        this.AsVpcGateway = null;

        /**
         * 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。当前仅批量创建多台实例时支持传入相同子网的多个 IP。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 为弹性网卡指定随机生成的 IPv6 地址数量。
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

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
        this.AsVpcGateway = 'AsVpcGateway' in params ? params.AsVpcGateway : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * 描述了按带宽计费的相关信息
 * @class
 */
class InternetBandwidthConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 实例带宽信息。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }

    }
}

/**
 * ModifyDisasterRecoverGroupAttribute返回参数结构体
 * @class
 */
class ModifyDisasterRecoverGroupAttributeResponse extends  AbstractModel {
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
 * DescribeInstanceTypeConfigs返回参数结构体
 * @class
 */
class DescribeInstanceTypeConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例机型配置列表。
         * @type {Array.<InstanceTypeConfig> || null}
         */
        this.InstanceTypeConfigSet = null;

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

        if (params.InstanceTypeConfigSet) {
            this.InstanceTypeConfigSet = new Array();
            for (let z in params.InstanceTypeConfigSet) {
                let obj = new InstanceTypeConfig();
                obj.deserialize(params.InstanceTypeConfigSet[z]);
                this.InstanceTypeConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResizeInstanceDisks请求参数结构体
 * @class
 */
class ResizeInstanceDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 待扩容的数据盘配置信息。只支持扩容非弹性数据盘（[`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性），且[数据盘类型](/document/api/213/9452#block_device)为：`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`。数据盘容量单位：GB。最小扩容步长：10G。关于数据盘类型的选择请参考硬盘产品简介。可选数据盘类型受到实例类型`InstanceType`限制。另外允许扩容的最大容量也因数据盘类型的不同而有所差异。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
         * @type {boolean || null}
         */
        this.ForceStop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;

    }
}

/**
 * DescribeInstanceFamilyConfigs请求参数结构体
 * @class
 */
class DescribeInstanceFamilyConfigsRequest extends  AbstractModel {
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
 * DescribeInstanceInternetBandwidthConfigs请求参数结构体
 * @class
 */
class DescribeInstanceInternetBandwidthConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
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
 * PurchaseReservedInstancesOffering返回参数结构体
 * @class
 */
class PurchaseReservedInstancesOfferingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已购买预留实例计费ID
         * @type {string || null}
         */
        this.ReservedInstanceId = null;

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
        this.ReservedInstanceId = 'ReservedInstanceId' in params ? params.ReservedInstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HDD的本地存储信息
 * @class
 */
class StorageBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * HDD本地存储类型，值为：LOCAL_PRO.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * HDD本地存储的最小容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * HDD本地存储的最大容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

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
         * 网络计费类型。取值范围：<br><li>BANDWIDTH_PREPAID：预付费按带宽结算<br><li>TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费<br><li>BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费<br><li>BANDWIDTH_PACKAGE：带宽包用户<br>默认取值：非带宽包用户默认与子机付费类型保持一致。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](https://cloud.tencent.com/document/product/213/12523)。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 是否分配公网IP。取值范围：<br><li>TRUE：表示分配公网IP<br><li>FALSE：表示不分配公网IP<br><br>当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。该参数仅在RunInstances接口中作为入参使用。
         * @type {boolean || null}
         */
        this.PublicIpAssigned = null;

        /**
         * 带宽包ID。可通过[`DescribeBandwidthPackages`](https://cloud.tencent.com/document/api/215/19209)接口返回值中的`BandwidthPackageId`获取。该参数仅在RunInstances接口中作为入参使用。
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

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
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

    }
}

/**
 * RenewHosts返回参数结构体
 * @class
 */
class RenewHostsResponse extends  AbstractModel {
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
 * DisassociateSecurityGroups返回参数结构体
 * @class
 */
class DisassociateSecurityGroupsResponse extends  AbstractModel {
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
 * 描述镜像关联的快照信息
 * @class
 */
class Snapshot extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照Id。
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 创建此快照的云硬盘类型。取值范围：
SYSTEM_DISK：系统盘
DATA_DISK：数据盘。
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * 创建此快照的云硬盘大小，单位GB。
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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * ModifyInstancesProject返回参数结构体
 * @class
 */
class ModifyInstancesProjectResponse extends  AbstractModel {
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
 * 描述了实例的计费模式
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
 * 价格
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述了实例价格。
         * @type {ItemPrice || null}
         */
        this.InstancePrice = null;

        /**
         * 描述了网络价格。
         * @type {ItemPrice || null}
         */
        this.BandwidthPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePrice) {
            let obj = new ItemPrice();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }

        if (params.BandwidthPrice) {
            let obj = new ItemPrice();
            obj.deserialize(params.BandwidthPrice)
            this.BandwidthPrice = obj;
        }

    }
}

module.exports = {
    ChargePrepaid: ChargePrepaid,
    LocalDiskType: LocalDiskType,
    AssociateInstancesKeyPairsResponse: AssociateInstancesKeyPairsResponse,
    RenewInstancesRequest: RenewInstancesRequest,
    DescribeImageQuotaResponse: DescribeImageQuotaResponse,
    ModifyInstancesProjectRequest: ModifyInstancesProjectRequest,
    ResetInstancesTypeResponse: ResetInstancesTypeResponse,
    HostResource: HostResource,
    DeleteDisasterRecoverGroupsRequest: DeleteDisasterRecoverGroupsRequest,
    DeleteKeyPairsResponse: DeleteKeyPairsResponse,
    TerminateInstancesResponse: TerminateInstancesResponse,
    ModifyInstancesChargeTypeResponse: ModifyInstancesChargeTypeResponse,
    CreateDisasterRecoverGroupResponse: CreateDisasterRecoverGroupResponse,
    InquiryPriceResetInstancesInternetMaxBandwidthResponse: InquiryPriceResetInstancesInternetMaxBandwidthResponse,
    ModifyKeyPairAttributeRequest: ModifyKeyPairAttributeRequest,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    ResetInstancesTypeRequest: ResetInstancesTypeRequest,
    InquiryPriceResetInstanceRequest: InquiryPriceResetInstanceRequest,
    RunInstancesRequest: RunInstancesRequest,
    DeleteImagesRequest: DeleteImagesRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeHostsResponse: DescribeHostsResponse,
    DeleteKeyPairsRequest: DeleteKeyPairsRequest,
    SystemDisk: SystemDisk,
    ResetInstanceRequest: ResetInstanceRequest,
    InstanceTypeConfig: InstanceTypeConfig,
    AllocateHostsRequest: AllocateHostsRequest,
    LoginSettings: LoginSettings,
    DescribeRegionsResponse: DescribeRegionsResponse,
    PurchaseReservedInstancesOfferingRequest: PurchaseReservedInstancesOfferingRequest,
    RebootInstancesRequest: RebootInstancesRequest,
    AssociateInstancesKeyPairsRequest: AssociateInstancesKeyPairsRequest,
    ImportKeyPairResponse: ImportKeyPairResponse,
    DescribeInstancesStatusResponse: DescribeInstancesStatusResponse,
    ZoneInfo: ZoneInfo,
    InquiryPriceModifyInstancesChargeTypeResponse: InquiryPriceModifyInstancesChargeTypeResponse,
    DescribeKeyPairsResponse: DescribeKeyPairsResponse,
    ResetInstancesPasswordRequest: ResetInstancesPasswordRequest,
    InternetChargeTypeConfig: InternetChargeTypeConfig,
    DescribeImagesResponse: DescribeImagesResponse,
    ModifyInstancesVpcAttributeResponse: ModifyInstancesVpcAttributeResponse,
    InquiryPriceResetInstancesTypeRequest: InquiryPriceResetInstancesTypeRequest,
    DescribeInstancesOperationLimitRequest: DescribeInstancesOperationLimitRequest,
    ModifyInstancesChargeTypeRequest: ModifyInstancesChargeTypeRequest,
    DescribeInstanceVncUrlRequest: DescribeInstanceVncUrlRequest,
    ModifyImageSharePermissionRequest: ModifyImageSharePermissionRequest,
    DisassociateInstancesKeyPairsResponse: DisassociateInstancesKeyPairsResponse,
    InquiryPriceResizeInstanceDisksRequest: InquiryPriceResizeInstanceDisksRequest,
    RunInstancesResponse: RunInstancesResponse,
    ResetInstancesInternetMaxBandwidthResponse: ResetInstancesInternetMaxBandwidthResponse,
    ModifyInstancesAttributeResponse: ModifyInstancesAttributeResponse,
    ModifyImageSharePermissionResponse: ModifyImageSharePermissionResponse,
    DescribeInstancesOperationLimitResponse: DescribeInstancesOperationLimitResponse,
    SyncImagesResponse: SyncImagesResponse,
    DescribeZoneInstanceConfigInfosResponse: DescribeZoneInstanceConfigInfosResponse,
    ModifyInstancesAttributeRequest: ModifyInstancesAttributeRequest,
    RenewHostsRequest: RenewHostsRequest,
    DescribeZonesRequest: DescribeZonesRequest,
    StartInstancesRequest: StartInstancesRequest,
    Tag: Tag,
    DescribeInstanceInternetBandwidthConfigsResponse: DescribeInstanceInternetBandwidthConfigsResponse,
    Placement: Placement,
    DescribeDisasterRecoverGroupsRequest: DescribeDisasterRecoverGroupsRequest,
    SyncImagesRequest: SyncImagesRequest,
    DisassociateInstancesKeyPairsRequest: DisassociateInstancesKeyPairsRequest,
    DescribeImageQuotaRequest: DescribeImageQuotaRequest,
    DescribeInstanceFamilyConfigsResponse: DescribeInstanceFamilyConfigsResponse,
    CreateImageResponse: CreateImageResponse,
    StopInstancesResponse: StopInstancesResponse,
    InstanceMarketOptionsRequest: InstanceMarketOptionsRequest,
    InquiryPriceResetInstancesInternetMaxBandwidthRequest: InquiryPriceResetInstancesInternetMaxBandwidthRequest,
    ResetInstancesPasswordResponse: ResetInstancesPasswordResponse,
    InquiryPriceRunInstancesRequest: InquiryPriceRunInstancesRequest,
    Image: Image,
    DescribeDisasterRecoverGroupQuotaResponse: DescribeDisasterRecoverGroupQuotaResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    CreateDisasterRecoverGroupRequest: CreateDisasterRecoverGroupRequest,
    DescribeReservedInstancesResponse: DescribeReservedInstancesResponse,
    DescribeImportImageOsResponse: DescribeImportImageOsResponse,
    ModifyKeyPairAttributeResponse: ModifyKeyPairAttributeResponse,
    DataDisk: DataDisk,
    DescribeKeyPairsRequest: DescribeKeyPairsRequest,
    OperationCountLimit: OperationCountLimit,
    DeleteDisasterRecoverGroupsResponse: DeleteDisasterRecoverGroupsResponse,
    HostItem: HostItem,
    Externals: Externals,
    InquiryPriceModifyInstancesChargeTypeRequest: InquiryPriceModifyInstancesChargeTypeRequest,
    CreateImageRequest: CreateImageRequest,
    Instance: Instance,
    EnhancedService: EnhancedService,
    CreateKeyPairResponse: CreateKeyPairResponse,
    DescribeInstanceVncUrlResponse: DescribeInstanceVncUrlResponse,
    DescribeReservedInstancesOfferingsRequest: DescribeReservedInstancesOfferingsRequest,
    DescribeDisasterRecoverGroupsResponse: DescribeDisasterRecoverGroupsResponse,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    ActionTimer: ActionTimer,
    TagSpecification: TagSpecification,
    ResetInstancesInternetMaxBandwidthRequest: ResetInstancesInternetMaxBandwidthRequest,
    InstanceFamilyConfig: InstanceFamilyConfig,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    ImportImageRequest: ImportImageRequest,
    SpotMarketOptions: SpotMarketOptions,
    DescribeImportImageOsRequest: DescribeImportImageOsRequest,
    CreateKeyPairRequest: CreateKeyPairRequest,
    InstanceStatus: InstanceStatus,
    InquiryPriceRenewInstancesResponse: InquiryPriceRenewInstancesResponse,
    AllocateHostsResponse: AllocateHostsResponse,
    DescribeImageSharePermissionRequest: DescribeImageSharePermissionRequest,
    DisasterRecoverGroup: DisasterRecoverGroup,
    InquiryPriceResetInstanceResponse: InquiryPriceResetInstanceResponse,
    DescribeInstanceTypeConfigsRequest: DescribeInstanceTypeConfigsRequest,
    DescribeImageSharePermissionResponse: DescribeImageSharePermissionResponse,
    ModifyHostsAttributeResponse: ModifyHostsAttributeResponse,
    DescribeDisasterRecoverGroupQuotaRequest: DescribeDisasterRecoverGroupQuotaRequest,
    StartInstancesResponse: StartInstancesResponse,
    ModifyInstancesVpcAttributeRequest: ModifyInstancesVpcAttributeRequest,
    DescribeReservedInstancesRequest: DescribeReservedInstancesRequest,
    DescribeInternetChargeTypeConfigsResponse: DescribeInternetChargeTypeConfigsResponse,
    DescribeZoneInstanceConfigInfosRequest: DescribeZoneInstanceConfigInfosRequest,
    DescribeZonesResponse: DescribeZonesResponse,
    ItemPrice: ItemPrice,
    InstanceTypeQuotaItem: InstanceTypeQuotaItem,
    ImageOsList: ImageOsList,
    InquiryPriceRunInstancesResponse: InquiryPriceRunInstancesResponse,
    DescribeHostsRequest: DescribeHostsRequest,
    ModifyInstancesRenewFlagResponse: ModifyInstancesRenewFlagResponse,
    DescribeInstancesStatusRequest: DescribeInstancesStatusRequest,
    InquiryPriceResizeInstanceDisksResponse: InquiryPriceResizeInstanceDisksResponse,
    TerminateInstancesRequest: TerminateInstancesRequest,
    SharePermission: SharePermission,
    ReservedInstances: ReservedInstances,
    DeleteImagesResponse: DeleteImagesResponse,
    ImportImageResponse: ImportImageResponse,
    ModifyDisasterRecoverGroupAttributeRequest: ModifyDisasterRecoverGroupAttributeRequest,
    RebootInstancesResponse: RebootInstancesResponse,
    InquiryPriceResetInstancesTypeResponse: InquiryPriceResetInstancesTypeResponse,
    ReservedInstancesOffering: ReservedInstancesOffering,
    OsVersion: OsVersion,
    ModifyImageAttributeResponse: ModifyImageAttributeResponse,
    InquiryPriceRenewInstancesRequest: InquiryPriceRenewInstancesRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    RegionInfo: RegionInfo,
    StopInstancesRequest: StopInstancesRequest,
    DescribeInternetChargeTypeConfigsRequest: DescribeInternetChargeTypeConfigsRequest,
    DescribeImagesRequest: DescribeImagesRequest,
    ModifyImageAttributeRequest: ModifyImageAttributeRequest,
    ResizeInstanceDisksResponse: ResizeInstanceDisksResponse,
    ModifyInstancesRenewFlagRequest: ModifyInstancesRenewFlagRequest,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    ModifyHostsAttributeRequest: ModifyHostsAttributeRequest,
    ImportKeyPairRequest: ImportKeyPairRequest,
    KeyPair: KeyPair,
    DescribeReservedInstancesOfferingsResponse: DescribeReservedInstancesOfferingsResponse,
    RenewInstancesResponse: RenewInstancesResponse,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    ResetInstanceResponse: ResetInstanceResponse,
    Filter: Filter,
    VirtualPrivateCloud: VirtualPrivateCloud,
    InternetBandwidthConfig: InternetBandwidthConfig,
    ModifyDisasterRecoverGroupAttributeResponse: ModifyDisasterRecoverGroupAttributeResponse,
    DescribeInstanceTypeConfigsResponse: DescribeInstanceTypeConfigsResponse,
    ResizeInstanceDisksRequest: ResizeInstanceDisksRequest,
    DescribeInstanceFamilyConfigsRequest: DescribeInstanceFamilyConfigsRequest,
    DescribeInstanceInternetBandwidthConfigsRequest: DescribeInstanceInternetBandwidthConfigsRequest,
    PurchaseReservedInstancesOfferingResponse: PurchaseReservedInstancesOfferingResponse,
    StorageBlock: StorageBlock,
    InternetAccessible: InternetAccessible,
    RenewHostsResponse: RenewHostsResponse,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    Snapshot: Snapshot,
    ModifyInstancesProjectResponse: ModifyInstancesProjectResponse,
    InstanceChargePrepaid: InstanceChargePrepaid,
    Price: Price,

}
