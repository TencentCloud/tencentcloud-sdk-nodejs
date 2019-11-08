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
 * DescribeUserCmdTasks返回参数结构体
 * @class
 */
class DescribeUserCmdTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 脚本任务信息数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 脚本任务信息列表
         * @type {Array.<UserCmdTask> || null}
         */
        this.UserCmdTasks = null;

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

        if (params.UserCmdTasks) {
            this.UserCmdTasks = new Array();
            for (let z in params.UserCmdTasks) {
                let obj = new UserCmdTask();
                obj.deserialize(params.UserCmdTasks[z]);
                this.UserCmdTasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RunUserCmd请求参数结构体
 * @class
 */
class RunUserCmdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

        /**
         * 执行脚本机器的用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 执行脚本机器的用户名的密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 执行脚本的服务器实例
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 执行脚本的参数，必须经过base64编码
         * @type {string || null}
         */
        this.CmdParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmdId = 'CmdId' in params ? params.CmdId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.CmdParam = 'CmdParam' in params ? params.CmdParam : null;

    }
}

/**
 * CreatePsaRegulation请求参数结构体
 * @class
 */
class CreatePsaRegulationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则别名
         * @type {string || null}
         */
        this.PsaName = null;

        /**
         * 关联的故障类型ID列表
         * @type {Array.<number> || null}
         */
        this.TaskTypeIds = null;

        /**
         * 维修实例上限，默认为5
         * @type {number || null}
         */
        this.RepairLimit = null;

        /**
         * 规则备注
         * @type {string || null}
         */
        this.PsaDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PsaName = 'PsaName' in params ? params.PsaName : null;
        this.TaskTypeIds = 'TaskTypeIds' in params ? params.TaskTypeIds : null;
        this.RepairLimit = 'RepairLimit' in params ? params.RepairLimit : null;
        this.PsaDescription = 'PsaDescription' in params ? params.PsaDescription : null;

    }
}

/**
 * DescribeDeviceInventory返回参数结构体
 * @class
 */
class DescribeDeviceInventoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 库存设备数量
         * @type {number || null}
         */
        this.DeviceCount = null;

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
        this.DeviceCount = 'DeviceCount' in params ? params.DeviceCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOsInfo返回参数结构体
 * @class
 */
class DescribeOsInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作系统信息列表
         * @type {Array.<OsInfo> || null}
         */
        this.OsInfoSet = null;

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

        if (params.OsInfoSet) {
            this.OsInfoSet = new Array();
            for (let z in params.OsInfoSet) {
                let obj = new OsInfo();
                obj.deserialize(params.OsInfoSet[z]);
                this.OsInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOsInfo请求参数结构体
 * @class
 */
class DescribeOsInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备类型代号。 可以从DescribeDeviceClass查询设备类型列表
         * @type {string || null}
         */
        this.DeviceClassCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceClassCode = 'DeviceClassCode' in params ? params.DeviceClassCode : null;

    }
}

/**
 * DescribeTaskOperationLog返回参数结构体
 * @class
 */
class DescribeTaskOperationLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作日志
         * @type {Array.<TaskOperationLog> || null}
         */
        this.TaskOperationLogSet = null;

        /**
         * 日志条数
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

        if (params.TaskOperationLogSet) {
            this.TaskOperationLogSet = new Array();
            for (let z in params.TaskOperationLogSet) {
                let obj = new TaskOperationLog();
                obj.deserialize(params.TaskOperationLogSet[z]);
                this.TaskOperationLogSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCustomImage请求参数结构体
 * @class
 */
class CreateCustomImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于制作镜像的物理机ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 镜像别名
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像描述
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;

    }
}

/**
 * DescribeCustomImages请求参数结构体
 * @class
 */
class DescribeCustomImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，仅支持CreateTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式 0:递增(默认) 1:递减
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 按ImageId查找指定镜像信息，ImageId字段存在时其他字段失效
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 模糊查询过滤，可以查询镜像ID或镜像名
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * <ul>
镜像状态过滤列表，有效取值为：
<li>1：制作中</li>
<li>2：制作失败</li>
<li>3：正常</li>
<li>4：删除中</li>
</ul>
         * @type {Array.<number> || null}
         */
        this.ImageStatus = null;

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
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.ImageStatus = 'ImageStatus' in params ? params.ImageStatus : null;

    }
}

/**
 * DescribeUserCmdTaskInfo返回参数结构体
 * @class
 */
class DescribeUserCmdTaskInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 自定义脚本任务详细信息列表
         * @type {Array.<UserCmdTaskInfo> || null}
         */
        this.UserCmdTaskInfoSet = null;

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

        if (params.UserCmdTaskInfoSet) {
            this.UserCmdTaskInfoSet = new Array();
            for (let z in params.UserCmdTaskInfoSet) {
                let obj = new UserCmdTaskInfo();
                obj.deserialize(params.UserCmdTaskInfoSet[z]);
                this.UserCmdTaskInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDevices返回参数结构体
 * @class
 */
class DescribeDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 物理机信息列表
         * @type {Array.<DeviceInfo> || null}
         */
        this.DeviceInfoSet = null;

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

        if (params.DeviceInfoSet) {
            this.DeviceInfoSet = new Array();
            for (let z in params.DeviceInfoSet) {
                let obj = new DeviceInfo();
                obj.deserialize(params.DeviceInfoSet[z]);
                this.DeviceInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLanIp请求参数结构体
 * @class
 */
class ModifyLanIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理机ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 指定新VPC
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 指定新子网
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 指定新内网IP
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 是否需要重启机器，取值 1(需要) 0(不需要)，默认取值0
         * @type {number || null}
         */
        this.RebootDevice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.RebootDevice = 'RebootDevice' in params ? params.RebootDevice : null;

    }
}

/**
 * 物理机设备类型
 * @class
 */
class DeviceClass extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型ID
         * @type {string || null}
         */
        this.DeviceClassCode = null;

        /**
         * CPU描述
         * @type {string || null}
         */
        this.CpuDescription = null;

        /**
         * 内存描述
         * @type {string || null}
         */
        this.MemDescription = null;

        /**
         * 硬盘描述
         * @type {string || null}
         */
        this.DiskDescription = null;

        /**
         * 是否支持RAID. 0:不支持; 1:支持
         * @type {number || null}
         */
        this.HaveRaidCard = null;

        /**
         * 网卡描述
         * @type {string || null}
         */
        this.NicDescription = null;

        /**
         * GPU描述
         * @type {string || null}
         */
        this.GpuDescription = null;

        /**
         * 单价折扣
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 用户刊例价格
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * 实际价格
         * @type {number || null}
         */
        this.RealPrice = null;

        /**
         * 官网刊例价格
         * @type {number || null}
         */
        this.NormalPrice = null;

        /**
         * 设备使用场景类型
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 机型系列
         * @type {number || null}
         */
        this.Series = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceClassCode = 'DeviceClassCode' in params ? params.DeviceClassCode : null;
        this.CpuDescription = 'CpuDescription' in params ? params.CpuDescription : null;
        this.MemDescription = 'MemDescription' in params ? params.MemDescription : null;
        this.DiskDescription = 'DiskDescription' in params ? params.DiskDescription : null;
        this.HaveRaidCard = 'HaveRaidCard' in params ? params.HaveRaidCard : null;
        this.NicDescription = 'NicDescription' in params ? params.NicDescription : null;
        this.GpuDescription = 'GpuDescription' in params ? params.GpuDescription : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.RealPrice = 'RealPrice' in params ? params.RealPrice : null;
        this.NormalPrice = 'NormalPrice' in params ? params.NormalPrice : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Series = 'Series' in params ? params.Series : null;

    }
}

/**
 * DescribeRepairTaskConstant请求参数结构体
 * @class
 */
class DescribeRepairTaskConstantRequest extends  AbstractModel {
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
 * DeletePsaRegulation请求参数结构体
 * @class
 */
class DeletePsaRegulationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预授权规则ID
         * @type {string || null}
         */
        this.PsaId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PsaId = 'PsaId' in params ? params.PsaId : null;

    }
}

/**
 * DescribeCustomImageProcess请求参数结构体
 * @class
 */
class DescribeCustomImageProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID
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
 * cpu信息
 * @class
 */
class CpuInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPU的ID
         * @type {number || null}
         */
        this.CpuId = null;

        /**
         * CPU型号描述
         * @type {string || null}
         */
        this.CpuDescription = null;

        /**
         * 机型序列
         * @type {number || null}
         */
        this.Series = null;

        /**
         * 支持的RAID方式，0：有RAID卡，1：没有RAID卡
         * @type {Array.<number> || null}
         */
        this.ContainRaidCard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CpuId = 'CpuId' in params ? params.CpuId : null;
        this.CpuDescription = 'CpuDescription' in params ? params.CpuDescription : null;
        this.Series = 'Series' in params ? params.Series : null;
        this.ContainRaidCard = 'ContainRaidCard' in params ? params.ContainRaidCard : null;

    }
}

/**
 * 自定义镜像信息
 * @class
 */
class CustomImage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像别名
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像状态码
         * @type {number || null}
         */
        this.ImageStatus = null;

        /**
         * 镜像OS名
         * @type {string || null}
         */
        this.OsClass = null;

        /**
         * 镜像OS版本
         * @type {string || null}
         */
        this.OsVersion = null;

        /**
         * OS是64还是32位
         * @type {number || null}
         */
        this.OsBit = null;

        /**
         * 镜像大小(M)
         * @type {number || null}
         */
        this.ImageSize = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 分区信息
         * @type {Array.<PartitionInfo> || null}
         */
        this.PartitionInfoSet = null;

        /**
         * 适用机型
         * @type {string || null}
         */
        this.DeviceClassCode = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * 原始镜像id
         * @type {number || null}
         */
        this.OsTypeId = null;

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
        this.ImageStatus = 'ImageStatus' in params ? params.ImageStatus : null;
        this.OsClass = 'OsClass' in params ? params.OsClass : null;
        this.OsVersion = 'OsVersion' in params ? params.OsVersion : null;
        this.OsBit = 'OsBit' in params ? params.OsBit : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.PartitionInfoSet) {
            this.PartitionInfoSet = new Array();
            for (let z in params.PartitionInfoSet) {
                let obj = new PartitionInfo();
                obj.deserialize(params.PartitionInfoSet[z]);
                this.PartitionInfoSet.push(obj);
            }
        }
        this.DeviceClassCode = 'DeviceClassCode' in params ? params.DeviceClassCode : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.OsTypeId = 'OsTypeId' in params ? params.OsTypeId : null;

    }
}

/**
 * ModifyDeviceAutoRenewFlag请求参数结构体
 * @class
 */
class ModifyDeviceAutoRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动续费标志位。0: 不自动续费; 1: 自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 需要修改的设备ID列表
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
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * StartDevices返回参数结构体
 * @class
 */
class StartDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindPsaTag请求参数结构体
 * @class
 */
class BindPsaTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预授权规则ID
         * @type {string || null}
         */
        this.PsaId = null;

        /**
         * 需要绑定的标签key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 需要绑定的标签value
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
        this.PsaId = 'PsaId' in params ? params.PsaId : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

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
         * 地域信息
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionInfoSet = null;

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

        if (params.RegionInfoSet) {
            this.RegionInfoSet = new Array();
            for (let z in params.RegionInfoSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionInfoSet[z]);
                this.RegionInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 物理机分区格式
 * @class
 */
class DevicePartition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统盘大小
         * @type {number || null}
         */
        this.SystemDiskSize = null;

        /**
         * 数据盘大小
         * @type {number || null}
         */
        this.DataDiskSize = null;

        /**
         * 是否兼容Uefi
         * @type {boolean || null}
         */
        this.SysIsUefiType = null;

        /**
         * root分区大小
         * @type {number || null}
         */
        this.SysRootSpace = null;

        /**
         * Swaporuefi分区大小
         * @type {number || null}
         */
        this.SysSwaporuefiSpace = null;

        /**
         * Usrlocal分区大小
         * @type {number || null}
         */
        this.SysUsrlocalSpace = null;

        /**
         * data分区大小
         * @type {number || null}
         */
        this.SysDataSpace = null;

        /**
         * 硬盘大小详情
         * @type {Array.<DeviceDiskSizeInfo> || null}
         */
        this.DeviceDiskSizeInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;
        this.DataDiskSize = 'DataDiskSize' in params ? params.DataDiskSize : null;
        this.SysIsUefiType = 'SysIsUefiType' in params ? params.SysIsUefiType : null;
        this.SysRootSpace = 'SysRootSpace' in params ? params.SysRootSpace : null;
        this.SysSwaporuefiSpace = 'SysSwaporuefiSpace' in params ? params.SysSwaporuefiSpace : null;
        this.SysUsrlocalSpace = 'SysUsrlocalSpace' in params ? params.SysUsrlocalSpace : null;
        this.SysDataSpace = 'SysDataSpace' in params ? params.SysDataSpace : null;

        if (params.DeviceDiskSizeInfoSet) {
            this.DeviceDiskSizeInfoSet = new Array();
            for (let z in params.DeviceDiskSizeInfoSet) {
                let obj = new DeviceDiskSizeInfo();
                obj.deserialize(params.DeviceDiskSizeInfoSet[z]);
                this.DeviceDiskSizeInfoSet.push(obj);
            }
        }

    }
}

/**
 * OfflineDevices返回参数结构体
 * @class
 */
class OfflineDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPsaRegulation请求参数结构体
 * @class
 */
class ModifyPsaRegulationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预授权规则ID
         * @type {string || null}
         */
        this.PsaId = null;

        /**
         * 预授权规则别名
         * @type {string || null}
         */
        this.PsaName = null;

        /**
         * 维修中的实例上限
         * @type {number || null}
         */
        this.RepairLimit = null;

        /**
         * 预授权规则备注
         * @type {string || null}
         */
        this.PsaDescription = null;

        /**
         * 预授权规则关联故障类型ID列表
         * @type {Array.<number> || null}
         */
        this.TaskTypeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PsaId = 'PsaId' in params ? params.PsaId : null;
        this.PsaName = 'PsaName' in params ? params.PsaName : null;
        this.RepairLimit = 'RepairLimit' in params ? params.RepairLimit : null;
        this.PsaDescription = 'PsaDescription' in params ? params.PsaDescription : null;
        this.TaskTypeIds = 'TaskTypeIds' in params ? params.TaskTypeIds : null;

    }
}

/**
 * RecoverDevices请求参数结构体
 * @class
 */
class RecoverDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要恢复的物理机ID列表
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
 * DescribeDeviceClassPartition请求参数结构体
 * @class
 */
class DescribeDeviceClassPartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备类型代号。代号通过接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)查询。标准机型需要传入此参数。虽是可选参数，但DeviceClassCode和InstanceId参数，必须要填写一个。
         * @type {string || null}
         */
        this.DeviceClassCode = null;

        /**
         * 需要查询自定义机型RAID信息时，传入自定义机型实例ID。InstanceId存在时DeviceClassCode失效。 虽是可选参数，但DeviceClassCode和InstanceId参数，必须要填写一个。
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
        this.DeviceClassCode = 'DeviceClassCode' in params ? params.DeviceClassCode : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

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
         * 可用区ID
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区整型ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 可用区描述
         * @type {string || null}
         */
        this.ZoneDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneDescription = 'ZoneDescription' in params ? params.ZoneDescription : null;

    }
}

/**
 * CreateSpotDevice返回参数结构体
 * @class
 */
class CreateSpotDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的服务器ID
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 任务ID
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
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BuyDevices请求参数结构体
 * @class
 */
class BuyDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区ID。通过接口[查询地域以及可用区(DescribeRegions)](https://cloud.tencent.com/document/api/386/33564)获取可用区信息
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 部署服务器的操作系统ID。通过接口[查询操作系统信息(DescribeOsInfo)](https://cloud.tencent.com/document/product/386/32902)获取操作系统信息
         * @type {number || null}
         */
        this.OsTypeId = null;

        /**
         * RAID类型ID。通过接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/api/386/32910)获取RAID信息
         * @type {number || null}
         */
        this.RaidId = null;

        /**
         * 购买数量
         * @type {number || null}
         */
        this.GoodsCount = null;

        /**
         * 购买至私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 购买至子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 购买的机型ID。通过接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)获取机型信息
         * @type {string || null}
         */
        this.DeviceClassCode = null;

        /**
         * 购买时长单位，取值：M(月) D(天)
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 购买时长
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 是否安装安全Agent，取值：1(安装) 0(不安装)，默认取值0
         * @type {number || null}
         */
        this.NeedSecurityAgent = null;

        /**
         * 是否安装监控Agent，取值：1(安装) 0(不安装)，默认取值0
         * @type {number || null}
         */
        this.NeedMonitorAgent = null;

        /**
         * 是否安装EMR Agent，取值：1(安装) 0(不安装)，默认取值0
         * @type {number || null}
         */
        this.NeedEMRAgent = null;

        /**
         * 是否安装EMR软件包，取值：1(安装) 0(不安装)，默认取值0
         * @type {number || null}
         */
        this.NeedEMRSoftware = null;

        /**
         * 是否分配弹性公网IP，取值：1(分配) 0(不分配)，默认取值0
         * @type {number || null}
         */
        this.ApplyEip = null;

        /**
         * 弹性公网IP计费模式，取值：Flow(按流量计费) Bandwidth(按带宽计费)，默认取值Flow
         * @type {string || null}
         */
        this.EipPayMode = null;

        /**
         * 弹性公网IP带宽限制，单位Mb
         * @type {number || null}
         */
        this.EipBandwidth = null;

        /**
         * 数据盘是否格式化，取值：1(格式化) 0(不格式化)，默认取值为1
         * @type {number || null}
         */
        this.IsZoning = null;

        /**
         * 物理机计费模式，取值：1(预付费) 2(后付费)，默认取值为1
         * @type {number || null}
         */
        this.CpmPayMode = null;

        /**
         * 自定义镜像ID，取值生效时用自定义镜像部署物理机
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 设置Linux root或Windows Administrator的密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 自动续费标志位，取值：1(自动续费) 0(不自动续费)，默认取值0
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 系统盘根分区大小，单位为G，默认取值10G。通过接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/api/386/32910)获取根分区信息
         * @type {number || null}
         */
        this.SysRootSpace = null;

        /**
         * 系统盘swap分区或/boot/efi分区的大小，单位为G。若是uefi启动的机器，分区为/boot/efi，且此值是默认是2G。 普通机器为swap分区，可以不指定此分区。 机型是否是uefi启动，参见接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)
         * @type {number || null}
         */
        this.SysSwaporuefiSpace = null;

        /**
         * /usr/local分区大小，单位为G
         * @type {number || null}
         */
        this.SysUsrlocalSpace = null;

        /**
         * /data分区大小，单位为G。如果系统盘还有剩余大小，会分配给/data分区。（特殊情况：如果剩余空间不足10G，并且没有指定/data分区，则剩余空间会分配给Root分区）
         * @type {number || null}
         */
        this.SysDataSpace = null;

        /**
         * 是否开启超线程，取值：1(开启) 0(关闭)，默认取值1
         * @type {number || null}
         */
        this.HyperThreading = null;

        /**
         * 指定的内网IP列表，不指定时自动分配
         * @type {Array.<string> || null}
         */
        this.LanIps = null;

        /**
         * 设备名称列表
         * @type {Array.<string> || null}
         */
        this.Aliases = null;

        /**
         * CPU型号ID，自定义机型需要传入，取值：
<br/><li>1: E5-2620v3 (6核) * 2</li><li>2: E5-2680v4 (14核) * 2</li><li>3: E5-2670v3 (12核) * 2</li><li>4: E5-2620v4 (8核) * 2</li><li>5: 4110 (8核) * 2</li><li>6: 6133 (20核) * 2</li><br/>
         * @type {number || null}
         */
        this.CpuId = null;

        /**
         * 是否有RAID卡，取值：1(有) 0(无)，自定义机型需要传入
         * @type {number || null}
         */
        this.ContainRaidCard = null;

        /**
         * 内存大小，单位为G，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 系统盘ID，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值
         * @type {number || null}
         */
        this.SystemDiskTypeId = null;

        /**
         * 系统盘数量，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值
         * @type {number || null}
         */
        this.SystemDiskCount = null;

        /**
         * 数据盘ID，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值
         * @type {number || null}
         */
        this.DataDiskTypeId = null;

        /**
         * 数据盘数量，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值
         * @type {number || null}
         */
        this.DataDiskCount = null;

        /**
         * 绑定的标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 指定数据盘的文件系统格式，当前支持 EXT4和XFS选项， 默认为EXT4。 参数适用于数据盘和Linux， 且在IsZoning为1时生效
         * @type {string || null}
         */
        this.FileSystem = null;

        /**
         * 此参数是为了防止重复发货。如果两次调用传入相同的BuySession，只会发货一次。 不要以设备别名作为BuySession，这样只会第一次购买成功。参数长度为128位，合法字符为大小字母，数字，下划线，横线。
         * @type {string || null}
         */
        this.BuySession = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.OsTypeId = 'OsTypeId' in params ? params.OsTypeId : null;
        this.RaidId = 'RaidId' in params ? params.RaidId : null;
        this.GoodsCount = 'GoodsCount' in params ? params.GoodsCount : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DeviceClassCode = 'DeviceClassCode' in params ? params.DeviceClassCode : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.NeedSecurityAgent = 'NeedSecurityAgent' in params ? params.NeedSecurityAgent : null;
        this.NeedMonitorAgent = 'NeedMonitorAgent' in params ? params.NeedMonitorAgent : null;
        this.NeedEMRAgent = 'NeedEMRAgent' in params ? params.NeedEMRAgent : null;
        this.NeedEMRSoftware = 'NeedEMRSoftware' in params ? params.NeedEMRSoftware : null;
        this.ApplyEip = 'ApplyEip' in params ? params.ApplyEip : null;
        this.EipPayMode = 'EipPayMode' in params ? params.EipPayMode : null;
        this.EipBandwidth = 'EipBandwidth' in params ? params.EipBandwidth : null;
        this.IsZoning = 'IsZoning' in params ? params.IsZoning : null;
        this.CpmPayMode = 'CpmPayMode' in params ? params.CpmPayMode : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.SysRootSpace = 'SysRootSpace' in params ? params.SysRootSpace : null;
        this.SysSwaporuefiSpace = 'SysSwaporuefiSpace' in params ? params.SysSwaporuefiSpace : null;
        this.SysUsrlocalSpace = 'SysUsrlocalSpace' in params ? params.SysUsrlocalSpace : null;
        this.SysDataSpace = 'SysDataSpace' in params ? params.SysDataSpace : null;
        this.HyperThreading = 'HyperThreading' in params ? params.HyperThreading : null;
        this.LanIps = 'LanIps' in params ? params.LanIps : null;
        this.Aliases = 'Aliases' in params ? params.Aliases : null;
        this.CpuId = 'CpuId' in params ? params.CpuId : null;
        this.ContainRaidCard = 'ContainRaidCard' in params ? params.ContainRaidCard : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.SystemDiskTypeId = 'SystemDiskTypeId' in params ? params.SystemDiskTypeId : null;
        this.SystemDiskCount = 'SystemDiskCount' in params ? params.SystemDiskCount : null;
        this.DataDiskTypeId = 'DataDiskTypeId' in params ? params.DataDiskTypeId : null;
        this.DataDiskCount = 'DataDiskCount' in params ? params.DataDiskCount : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.FileSystem = 'FileSystem' in params ? params.FileSystem : null;
        this.BuySession = 'BuySession' in params ? params.BuySession : null;

    }
}

/**
 * DescribeHardwareSpecification请求参数结构体
 * @class
 */
class DescribeHardwareSpecificationRequest extends  AbstractModel {
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
 * 标签键与值
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
         * 标签键对应的值
         * @type {Array.<string> || null}
         */
        this.TagValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValues = 'TagValues' in params ? params.TagValues : null;

    }
}

/**
 * CreateCustomImage返回参数结构体
 * @class
 */
class CreateCustomImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 托管设备带外信息
 * @class
 */
class HostedDeviceOutBandInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理机ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 带外IP
         * @type {string || null}
         */
        this.OutBandIp = null;

        /**
         * VPN的IP
         * @type {string || null}
         */
        this.VpnIp = null;

        /**
         * VPN的端口
         * @type {number || null}
         */
        this.VpnPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OutBandIp = 'OutBandIp' in params ? params.OutBandIp : null;
        this.VpnIp = 'VpnIp' in params ? params.VpnIp : null;
        this.VpnPort = 'VpnPort' in params ? params.VpnPort : null;

    }
}

/**
 * ReturnDevices请求参数结构体
 * @class
 */
class ReturnDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要退还的物理机ID列表
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
 * ModifyDeviceAliases返回参数结构体
 * @class
 */
class ModifyDeviceAliasesResponse extends  AbstractModel {
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
 * 一条预授权规则
 * @class
 */
class PsaRegulation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.PsaId = null;

        /**
         * 规则别名
         * @type {string || null}
         */
        this.PsaName = null;

        /**
         * 关联标签数量
         * @type {number || null}
         */
        this.TagCount = null;

        /**
         * 关联实例数量
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 故障实例数量
         * @type {number || null}
         */
        this.RepairCount = null;

        /**
         * 故障实例上限
         * @type {number || null}
         */
        this.RepairLimit = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 规则备注
         * @type {string || null}
         */
        this.PsaDescription = null;

        /**
         * 关联标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 关联故障类型id
         * @type {Array.<number> || null}
         */
        this.TaskTypeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PsaId = 'PsaId' in params ? params.PsaId : null;
        this.PsaName = 'PsaName' in params ? params.PsaName : null;
        this.TagCount = 'TagCount' in params ? params.TagCount : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.RepairCount = 'RepairCount' in params ? params.RepairCount : null;
        this.RepairLimit = 'RepairLimit' in params ? params.RepairLimit : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PsaDescription = 'PsaDescription' in params ? params.PsaDescription : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.TaskTypeIds = 'TaskTypeIds' in params ? params.TaskTypeIds : null;

    }
}

/**
 * DescribeDevicePartition返回参数结构体
 * @class
 */
class DescribeDevicePartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理机分区格式
         * @type {DevicePartition || null}
         */
        this.DevicePartition = null;

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

        if (params.DevicePartition) {
            let obj = new DevicePartition();
            obj.deserialize(params.DevicePartition)
            this.DevicePartition = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHostedDeviceOutBandInfo请求参数结构体
 * @class
 */
class DescribeHostedDeviceOutBandInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 托管设备的唯一ID数组,数组个数不超过20
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 可用区ID
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * RebootDevices返回参数结构体
 * @class
 */
class RebootDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetDevicePassword请求参数结构体
 * @class
 */
class ResetDevicePasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要重置密码的服务器ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 新密码
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * 各实例对应的异步任务执行结果
 * @class
 */
class SubtaskStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例ID对应任务的状态，取值如下：<br>
1：成功<br>
2：失败<br>
3：部分成功，部分失败<br>
4：未完成<br>
5：部分成功，部分未完成<br>
6：部分未完成，部分失败<br>
7：部分未完成，部分失败，部分成功
         * @type {number || null}
         */
        this.TaskStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

    }
}

/**
 * DescribeDeviceInventory请求参数结构体
 * @class
 */
class DescribeDeviceInventoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 设备型号
         * @type {string || null}
         */
        this.DeviceClassCode = null;

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
         * CpuId，自定义机型时需传入
         * @type {number || null}
         */
        this.CpuId = null;

        /**
         * 硬盘类型，自定义机型时需传入
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 单块硬盘大小，自定义机型时需传入
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 硬盘数量，自定义机型时需传入
         * @type {number || null}
         */
        this.DiskNum = null;

        /**
         * 内存总大小，自定义机型时需传入
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * 是否支持raid，自定义机型时需传入
         * @type {number || null}
         */
        this.HaveRaidCard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DeviceClassCode = 'DeviceClassCode' in params ? params.DeviceClassCode : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.CpuId = 'CpuId' in params ? params.CpuId : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskNum = 'DiskNum' in params ? params.DiskNum : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.HaveRaidCard = 'HaveRaidCard' in params ? params.HaveRaidCard : null;

    }
}

/**
 * DescribeCustomImages返回参数结构体
 * @class
 */
class DescribeCustomImagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回镜像数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 镜像信息列表
         * @type {Array.<CustomImage> || null}
         */
        this.CustomImageSet = null;

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

        if (params.CustomImageSet) {
            this.CustomImageSet = new Array();
            for (let z in params.CustomImageSet) {
                let obj = new CustomImage();
                obj.deserialize(params.CustomImageSet[z]);
                this.CustomImageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备ID与别名
 * @class
 */
class DeviceAlias extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 设备别名
         * @type {string || null}
         */
        this.Alias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * DeleteCustomImages请求参数结构体
 * @class
 */
class DeleteCustomImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 准备删除的镜像ID列表
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
 * 描述设备分区信息
 * @class
 */
class PartitionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分区大小
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * DescribeDevicePosition请求参数结构体
 * @class
 */
class DescribeDevicePositionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制
         * @type {number || null}
         */
        this.Limit = null;

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
         * 实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例别名
         * @type {string || null}
         */
        this.Alias = null;

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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * 自定义脚本任务详细信息
 * @class
 */
class UserCmdTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动编号，可忽略
         * @type {number || null}
         */
        this.AutoId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务开始时间
         * @type {string || null}
         */
        this.RunBeginTime = null;

        /**
         * 任务结束时间
         * @type {string || null}
         */
        this.RunEndTime = null;

        /**
         * 任务状态ID，取值为 -1：进行中；0：成功；>0：失败错误码
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 设备别名
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 设备ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 私有网络名
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 私有网络整型ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络Cidr
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 子网名
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网Cidr
         * @type {string || null}
         */
        this.SubnetCidrBlock = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 脚本内容，base64编码后的值
         * @type {string || null}
         */
        this.CmdContent = null;

        /**
         * 脚本参数，base64编码后的值
         * @type {string || null}
         */
        this.CmdParam = null;

        /**
         * 脚本执行结果，base64编码后的值
         * @type {string || null}
         */
        this.CmdResult = null;

        /**
         * 用户AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 用户执行脚本结束退出的返回值，没有返回值为-1
         * @type {number || null}
         */
        this.LastShellExit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoId = 'AutoId' in params ? params.AutoId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RunBeginTime = 'RunBeginTime' in params ? params.RunBeginTime : null;
        this.RunEndTime = 'RunEndTime' in params ? params.RunEndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetCidrBlock = 'SubnetCidrBlock' in params ? params.SubnetCidrBlock : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.CmdContent = 'CmdContent' in params ? params.CmdContent : null;
        this.CmdParam = 'CmdParam' in params ? params.CmdParam : null;
        this.CmdResult = 'CmdResult' in params ? params.CmdResult : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.LastShellExit = 'LastShellExit' in params ? params.LastShellExit : null;

    }
}

/**
 * ShutdownDevices返回参数结构体
 * @class
 */
class ShutdownDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 故障id对应故障名列表
 * @class
 */
class TaskType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 故障类ID
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * 故障类中文名
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 故障类型父类
         * @type {string || null}
         */
        this.TaskSubType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.TaskSubType = 'TaskSubType' in params ? params.TaskSubType : null;

    }
}

/**
 * DeleteUserCmds请求参数结构体
 * @class
 */
class DeleteUserCmdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的脚本ID
         * @type {Array.<string> || null}
         */
        this.CmdIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmdIds = 'CmdIds' in params ? params.CmdIds : null;

    }
}

/**
 * 硬盘大小的描述
 * @class
 */
class DeviceDiskSizeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 硬盘名称
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * 硬盘大小（单位GiB）
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
        this.DiskName = 'DiskName' in params ? params.DiskName : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * AttachCamRole请求参数结构体
 * @class
 */
class AttachCamRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 角色名称。
         * @type {string || null}
         */
        this.RoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

    }
}

/**
 * DescribeDeviceClass返回参数结构体
 * @class
 */
class DescribeDeviceClassResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理机设备类型列表
         * @type {Array.<DeviceClass> || null}
         */
        this.DeviceClassSet = null;

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

        if (params.DeviceClassSet) {
            this.DeviceClassSet = new Array();
            for (let z in params.DeviceClassSet) {
                let obj = new DeviceClass();
                obj.deserialize(params.DeviceClassSet[z]);
                this.DeviceClassSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceHardwareInfo返回参数结构体
 * @class
 */
class DescribeDeviceHardwareInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备硬件配置信息
         * @type {Array.<DeviceHardwareInfo> || null}
         */
        this.DeviceHardwareInfoSet = null;

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

        if (params.DeviceHardwareInfoSet) {
            this.DeviceHardwareInfoSet = new Array();
            for (let z in params.DeviceHardwareInfoSet) {
                let obj = new DeviceHardwareInfo();
                obj.deserialize(params.DeviceHardwareInfoSet[z]);
                this.DeviceHardwareInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyUserCmd请求参数结构体
 * @class
 */
class ModifyUserCmdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

        /**
         * 待修改的脚本名称
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 脚本适用的操作系统类型
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 待修改的脚本内容，必须经过base64编码
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmdId = 'CmdId' in params ? params.CmdId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeDevicePriceInfo返回参数结构体
 * @class
 */
class DescribeDevicePriceInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器价格信息列表
         * @type {Array.<DevicePriceInfo> || null}
         */
        this.DevicePriceInfoSet = null;

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

        if (params.DevicePriceInfoSet) {
            this.DevicePriceInfoSet = new Array();
            for (let z in params.DevicePriceInfoSet) {
                let obj = new DevicePriceInfo();
                obj.deserialize(params.DevicePriceInfoSet[z]);
                this.DevicePriceInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RunUserCmd返回参数结构体
 * @class
 */
class RunUserCmdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行成功的任务信息列表
         * @type {Array.<SuccessTaskInfo> || null}
         */
        this.SuccessTaskInfoSet = null;

        /**
         * 运行失败的任务信息列表
         * @type {Array.<FailedTaskInfo> || null}
         */
        this.FailedTaskInfoSet = null;

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

        if (params.SuccessTaskInfoSet) {
            this.SuccessTaskInfoSet = new Array();
            for (let z in params.SuccessTaskInfoSet) {
                let obj = new SuccessTaskInfo();
                obj.deserialize(params.SuccessTaskInfoSet[z]);
                this.SuccessTaskInfoSet.push(obj);
            }
        }

        if (params.FailedTaskInfoSet) {
            this.FailedTaskInfoSet = new Array();
            for (let z in params.FailedTaskInfoSet) {
                let obj = new FailedTaskInfo();
                obj.deserialize(params.FailedTaskInfoSet[z]);
                this.FailedTaskInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserCmds请求参数结构体
 * @class
 */
class DescribeUserCmdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，支持： OsType,CreateTime,ModifyTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式，取值: 1倒序，0顺序；默认倒序
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 关键字搜索，可搜索ID或别名，支持模糊搜索
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 查询的脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

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
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.CmdId = 'CmdId' in params ? params.CmdId : null;

    }
}

/**
 * DescribeTaskInfo请求参数结构体
 * @class
 */
class DescribeTaskInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数据条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 时间过滤下限
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 时间过滤上限
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 任务状态ID过滤
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * 排序字段，目前支持：CreateTime，AuthTime，EndTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式 0:递增(默认) 1:递减
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 任务ID过滤
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 实例ID过滤
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例别名过滤
         * @type {Array.<string> || null}
         */
        this.Aliases = null;

        /**
         * 故障类型ID过滤
         * @type {Array.<number> || null}
         */
        this.TaskTypeIds = null;

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
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Aliases = 'Aliases' in params ? params.Aliases : null;
        this.TaskTypeIds = 'TaskTypeIds' in params ? params.TaskTypeIds : null;

    }
}

/**
 * RepairTaskControl返回参数结构体
 * @class
 */
class RepairTaskControlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出参TaskId是黑石异步任务ID，不同于入参TaskId字段。
此字段可作为DescriptionOperationResult查询异步任务状态接口的入参，查询异步任务执行结果。
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
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

        /**
         * 地域整型ID，目前黑石可用地域包括：8-北京，4-上海，1-广州， 19-重庆
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
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * DescribePsaRegulations请求参数结构体
 * @class
 */
class DescribePsaRegulationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 规则ID过滤，支持模糊查询
         * @type {Array.<string> || null}
         */
        this.PsaIds = null;

        /**
         * 规则别名过滤，支持模糊查询
         * @type {Array.<string> || null}
         */
        this.PsaNames = null;

        /**
         * 标签过滤
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 排序字段，取值支持：CreateTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式 0:递增(默认) 1:递减
         * @type {number || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.PsaIds = 'PsaIds' in params ? params.PsaIds : null;
        this.PsaNames = 'PsaNames' in params ? params.PsaNames : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * UnbindPsaTag返回参数结构体
 * @class
 */
class UnbindPsaTagResponse extends  AbstractModel {
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
 * DescribeDevicePriceInfo请求参数结构体
 * @class
 */
class DescribeDevicePriceInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的实例列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 购买时长单位，当前只支持取值为m
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 购买时长
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;

    }
}

/**
 * DescribeDevicePartition请求参数结构体
 * @class
 */
class DescribeDevicePartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理机ID
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
 * 维护平台维修任务信息
 * @class
 */
class TaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 主机id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主机别名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 故障类型id
         * @type {number || null}
         */
        this.TaskTypeId = null;

        /**
         * 任务状态id
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 授权时间
         * @type {string || null}
         */
        this.AuthTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务详情
         * @type {string || null}
         */
        this.TaskDetail = null;

        /**
         * 设备状态
         * @type {number || null}
         */
        this.DeviceStatus = null;

        /**
         * 设备操作状态
         * @type {number || null}
         */
        this.OperateStatus = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 所属网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 所在子网
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网名
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * VPC名
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * VpcCidrBlock
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * SubnetCidrBlock
         * @type {string || null}
         */
        this.SubnetCidrBlock = null;

        /**
         * 公网ip
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 管理IP
         * @type {string || null}
         */
        this.MgtIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.TaskTypeId = 'TaskTypeId' in params ? params.TaskTypeId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AuthTime = 'AuthTime' in params ? params.AuthTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskDetail = 'TaskDetail' in params ? params.TaskDetail : null;
        this.DeviceStatus = 'DeviceStatus' in params ? params.DeviceStatus : null;
        this.OperateStatus = 'OperateStatus' in params ? params.OperateStatus : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.SubnetCidrBlock = 'SubnetCidrBlock' in params ? params.SubnetCidrBlock : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.MgtIp = 'MgtIp' in params ? params.MgtIp : null;

    }
}

/**
 * ModifyPsaRegulation返回参数结构体
 * @class
 */
class ModifyPsaRegulationResponse extends  AbstractModel {
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
 * 自定义脚本任务信息
 * @class
 */
class UserCmdTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务状态ID，取值: -1(进行中) 0(结束)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 脚本名称
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

        /**
         * 运行实例数量
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 运行成功数量
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 运行失败数量
         * @type {number || null}
         */
        this.FailureCount = null;

        /**
         * 执行开始时间
         * @type {string || null}
         */
        this.RunBeginTime = null;

        /**
         * 执行结束时间
         * @type {string || null}
         */
        this.RunEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.CmdId = 'CmdId' in params ? params.CmdId : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailureCount = 'FailureCount' in params ? params.FailureCount : null;
        this.RunBeginTime = 'RunBeginTime' in params ? params.RunBeginTime : null;
        this.RunEndTime = 'RunEndTime' in params ? params.RunEndTime : null;

    }
}

/**
 * 维修任务操作日志
 * @class
 */
class TaskOperationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作步骤
         * @type {string || null}
         */
        this.TaskStep = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 操作描述
         * @type {string || null}
         */
        this.OperationDetail = null;

        /**
         * 操作时间
         * @type {string || null}
         */
        this.OperationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskStep = 'TaskStep' in params ? params.TaskStep : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.OperationDetail = 'OperationDetail' in params ? params.OperationDetail : null;
        this.OperationTime = 'OperationTime' in params ? params.OperationTime : null;

    }
}

/**
 * 运行失败的自定义脚本信息
 * @class
 */
class FailedTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行脚本的设备ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 失败原因
         * @type {string || null}
         */
        this.ErrorMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

    }
}

/**
 * DescribeDevicePosition返回参数结构体
 * @class
 */
class DescribeDevicePositionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 设备所在机架信息
         * @type {Array.<DevicePositionInfo> || null}
         */
        this.DevicePositionInfoSet = null;

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

        if (params.DevicePositionInfoSet) {
            this.DevicePositionInfoSet = new Array();
            for (let z in params.DevicePositionInfoSet) {
                let obj = new DevicePositionInfo();
                obj.deserialize(params.DevicePositionInfoSet[z]);
                this.DevicePositionInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteUserCmds返回参数结构体
 * @class
 */
class DeleteUserCmdsResponse extends  AbstractModel {
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
 * ModifyDeviceAliases请求参数结构体
 * @class
 */
class ModifyDeviceAliasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要改名的设备与别名列表
         * @type {Array.<DeviceAlias> || null}
         */
        this.DeviceAliases = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeviceAliases) {
            this.DeviceAliases = new Array();
            for (let z in params.DeviceAliases) {
                let obj = new DeviceAlias();
                obj.deserialize(params.DeviceAliases[z]);
                this.DeviceAliases.push(obj);
            }
        }

    }
}

/**
 * ModifyPayModePre2Post返回参数结构体
 * @class
 */
class ModifyPayModePre2PostResponse extends  AbstractModel {
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
 * 成功运行的自定义脚本信息
 * @class
 */
class SuccessTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运行脚本的设备ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 黑石异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 黑石自定义脚本运行任务ID
         * @type {string || null}
         */
        this.CmdTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.CmdTaskId = 'CmdTaskId' in params ? params.CmdTaskId : null;

    }
}

/**
 * SetOutBandVpnAuthPassword请求参数结构体
 * @class
 */
class SetOutBandVpnAuthPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置的Vpn认证密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 操作字段，取值为：Create（创建）或Update（修改）
         * @type {string || null}
         */
        this.Operate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.Operate = 'Operate' in params ? params.Operate : null;

    }
}

/**
 * OfflineDevices请求参数结构体
 * @class
 */
class OfflineDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要退还的物理机ID列表
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
 * 设备硬件配置信息
 * @class
 */
class DeviceHardwareInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否自定义机型
         * @type {number || null}
         */
        this.IsElastic = null;

        /**
         * 机型计费模式，1 为预付费，2 为后付费
         * @type {number || null}
         */
        this.CpmPayMode = null;

        /**
         * 自定义机型，CPU 型号 ID（非自定义机型返回0）
         * @type {number || null}
         */
        this.CpuId = null;

        /**
         * 自定义机型，内存大小, 单位 GB（非自定义机型返回0）
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * 是否有 RAID 卡，0：没有 RAID 卡； 1：有 RAID 卡
         * @type {number || null}
         */
        this.ContainRaidCard = null;

        /**
         * 自定义机型系统盘类型ID（若没有则返回0）
         * @type {number || null}
         */
        this.SystemDiskTypeId = null;

        /**
         * 自定义机型系统盘数量（若没有则返回0）
         * @type {number || null}
         */
        this.SystemDiskCount = null;

        /**
         * 自定义机型数据盘类型 ID（若没有则返回0）
         * @type {number || null}
         */
        this.DataDiskTypeId = null;

        /**
         * 自定义机型数据盘数量（若没有则返回0）
         * @type {number || null}
         */
        this.DataDiskCount = null;

        /**
         * CPU 型号描述
         * @type {string || null}
         */
        this.CpuDescription = null;

        /**
         * 内存描述
         * @type {string || null}
         */
        this.MemDescription = null;

        /**
         * 磁盘描述
         * @type {string || null}
         */
        this.DiskDescription = null;

        /**
         * 网卡描述
         * @type {string || null}
         */
        this.NicDescription = null;

        /**
         * 是否支持 RAID 的描述
         * @type {string || null}
         */
        this.RaidDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IsElastic = 'IsElastic' in params ? params.IsElastic : null;
        this.CpmPayMode = 'CpmPayMode' in params ? params.CpmPayMode : null;
        this.CpuId = 'CpuId' in params ? params.CpuId : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.ContainRaidCard = 'ContainRaidCard' in params ? params.ContainRaidCard : null;
        this.SystemDiskTypeId = 'SystemDiskTypeId' in params ? params.SystemDiskTypeId : null;
        this.SystemDiskCount = 'SystemDiskCount' in params ? params.SystemDiskCount : null;
        this.DataDiskTypeId = 'DataDiskTypeId' in params ? params.DataDiskTypeId : null;
        this.DataDiskCount = 'DataDiskCount' in params ? params.DataDiskCount : null;
        this.CpuDescription = 'CpuDescription' in params ? params.CpuDescription : null;
        this.MemDescription = 'MemDescription' in params ? params.MemDescription : null;
        this.DiskDescription = 'DiskDescription' in params ? params.DiskDescription : null;
        this.NicDescription = 'NicDescription' in params ? params.NicDescription : null;
        this.RaidDescription = 'RaidDescription' in params ? params.RaidDescription : null;

    }
}

/**
 * 自定义机型磁盘的描述
 * @class
 */
class DiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 磁盘ID
         * @type {number || null}
         */
        this.DiskTypeId = null;

        /**
         * 磁盘的容量，单位为G
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 磁盘信息描述
         * @type {string || null}
         */
        this.DiskDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskTypeId = 'DiskTypeId' in params ? params.DiskTypeId : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.DiskDescription = 'DiskDescription' in params ? params.DiskDescription : null;

    }
}

/**
 * SetOutBandVpnAuthPassword返回参数结构体
 * @class
 */
class SetOutBandVpnAuthPasswordResponse extends  AbstractModel {
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
 * DescribeTaskInfo返回参数结构体
 * @class
 */
class DescribeTaskInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回任务总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务信息列表
         * @type {Array.<TaskInfo> || null}
         */
        this.TaskInfoSet = null;

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

        if (params.TaskInfoSet) {
            this.TaskInfoSet = new Array();
            for (let z in params.TaskInfoSet) {
                let obj = new TaskInfo();
                obj.deserialize(params.TaskInfoSet[z]);
                this.TaskInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserCmdTaskInfo请求参数结构体
 * @class
 */
class DescribeUserCmdTaskInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，支持： RunBeginTime,RunEndTime,Status
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式，取值: 1倒序，0顺序；默认倒序
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 关键字搜索，可搜索ID或别名，支持模糊搜索
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * CreateUserCmd返回参数结构体
 * @class
 */
class CreateUserCmdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

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
        this.CmdId = 'CmdId' in params ? params.CmdId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyUserCmd返回参数结构体
 * @class
 */
class ModifyUserCmdResponse extends  AbstractModel {
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
 * ModifyPayModePre2Post请求参数结构体
 * @class
 */
class ModifyPayModePre2PostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改的设备ID列表
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
 * 设备操作日志
 * @class
 */
class DeviceOperationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志的ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 设备ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 日志对应的操作任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 操作任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 操作任务中文名称
         * @type {string || null}
         */
        this.TaskDescription = null;

        /**
         * 操作开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 操作结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 操作状态，0: 正在执行中；1：任务成功； 2: 任务失败。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 操作者
         * @type {string || null}
         */
        this.OpUin = null;

        /**
         * 操作描述
         * @type {string || null}
         */
        this.LogDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskDescription = 'TaskDescription' in params ? params.TaskDescription : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OpUin = 'OpUin' in params ? params.OpUin : null;
        this.LogDescription = 'LogDescription' in params ? params.LogDescription : null;

    }
}

/**
 * DescribeRepairTaskConstant返回参数结构体
 * @class
 */
class DescribeRepairTaskConstantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 故障类型ID与对应中文名列表
         * @type {Array.<TaskType> || null}
         */
        this.TaskTypeSet = null;

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

        if (params.TaskTypeSet) {
            this.TaskTypeSet = new Array();
            for (let z in params.TaskTypeSet) {
                let obj = new TaskType();
                obj.deserialize(params.TaskTypeSet[z]);
                this.TaskTypeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BuyDevices返回参数结构体
 * @class
 */
class BuyDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买的物理机实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLanIp返回参数结构体
 * @class
 */
class ModifyLanIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePsaRegulations返回参数结构体
 * @class
 */
class DescribePsaRegulationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回规则数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回规则列表
         * @type {Array.<PsaRegulation> || null}
         */
        this.PsaRegulations = null;

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

        if (params.PsaRegulations) {
            this.PsaRegulations = new Array();
            for (let z in params.PsaRegulations) {
                let obj = new PsaRegulation();
                obj.deserialize(params.PsaRegulations[z]);
                this.PsaRegulations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartDevices请求参数结构体
 * @class
 */
class StartDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要开机的设备ID列表
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
 * DescribeUserCmds返回参数结构体
 * @class
 */
class DescribeUserCmdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 脚本信息列表
         * @type {Array.<UserCmd> || null}
         */
        this.UserCmds = null;

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

        if (params.UserCmds) {
            this.UserCmds = new Array();
            for (let z in params.UserCmds) {
                let obj = new UserCmd();
                obj.deserialize(params.UserCmds[z]);
                this.UserCmds.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDeviceAutoRenewFlag返回参数结构体
 * @class
 */
class ModifyDeviceAutoRenewFlagResponse extends  AbstractModel {
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
 * DescribeOperationResult返回参数结构体
 * @class
 */
class DescribeOperationResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的整体状态，取值如下：<br>
1：成功<br>
2：失败<br>
3：部分成功，部分失败<br>
4：未完成<br>
5：部分成功，部分未完成<br>
6：部分未完成，部分失败<br>
7：部分未完成，部分失败，部分成功
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 各实例对应任务的状态ID
         * @type {Array.<SubtaskStatus> || null}
         */
        this.SubtaskStatusSet = null;

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
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

        if (params.SubtaskStatusSet) {
            this.SubtaskStatusSet = new Array();
            for (let z in params.SubtaskStatusSet) {
                let obj = new SubtaskStatus();
                obj.deserialize(params.SubtaskStatusSet[z]);
                this.SubtaskStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceClass请求参数结构体
 * @class
 */
class DescribeDeviceClassRequest extends  AbstractModel {
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
 * ModifyCustomImageAttribute请求参数结构体
 * @class
 */
class ModifyCustomImageAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 设置新的镜像名
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 设置新的镜像描述
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
 * DeletePsaRegulation返回参数结构体
 * @class
 */
class DeletePsaRegulationResponse extends  AbstractModel {
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
 * RAID和设备分区结构
 * @class
 */
class DeviceClassPartitionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * RAID类型ID
         * @type {number || null}
         */
        this.RaidId = null;

        /**
         * RAID名称
         * @type {string || null}
         */
        this.Raid = null;

        /**
         * RAID名称（前台展示用）
         * @type {string || null}
         */
        this.RaidDisplay = null;

        /**
         * 系统盘总大小（单位GiB）
         * @type {number || null}
         */
        this.SystemDiskSize = null;

        /**
         * 系统盘/分区默认大小（单位GiB）
         * @type {number || null}
         */
        this.SysRootSpace = null;

        /**
         * 系统盘swap分区默认大小（单位GiB）
         * @type {number || null}
         */
        this.SysSwaporuefiSpace = null;

        /**
         * 系统盘/usr/local分区默认大小（单位GiB）
         * @type {number || null}
         */
        this.SysUsrlocalSpace = null;

        /**
         * 系统盘/data分区默认大小（单位GiB）
         * @type {number || null}
         */
        this.SysDataSpace = null;

        /**
         * 设备是否是uefi启动方式。0:legacy启动; 1:uefi启动
         * @type {number || null}
         */
        this.SysIsUefiType = null;

        /**
         * 数据盘总大小
         * @type {number || null}
         */
        this.DataDiskSize = null;

        /**
         * 硬盘列表
         * @type {Array.<DeviceDiskSizeInfo> || null}
         */
        this.DeviceDiskSizeInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RaidId = 'RaidId' in params ? params.RaidId : null;
        this.Raid = 'Raid' in params ? params.Raid : null;
        this.RaidDisplay = 'RaidDisplay' in params ? params.RaidDisplay : null;
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;
        this.SysRootSpace = 'SysRootSpace' in params ? params.SysRootSpace : null;
        this.SysSwaporuefiSpace = 'SysSwaporuefiSpace' in params ? params.SysSwaporuefiSpace : null;
        this.SysUsrlocalSpace = 'SysUsrlocalSpace' in params ? params.SysUsrlocalSpace : null;
        this.SysDataSpace = 'SysDataSpace' in params ? params.SysDataSpace : null;
        this.SysIsUefiType = 'SysIsUefiType' in params ? params.SysIsUefiType : null;
        this.DataDiskSize = 'DataDiskSize' in params ? params.DataDiskSize : null;

        if (params.DeviceDiskSizeInfoSet) {
            this.DeviceDiskSizeInfoSet = new Array();
            for (let z in params.DeviceDiskSizeInfoSet) {
                let obj = new DeviceDiskSizeInfo();
                obj.deserialize(params.DeviceDiskSizeInfoSet[z]);
                this.DeviceDiskSizeInfoSet.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskOperationLog请求参数结构体
 * @class
 */
class DescribeTaskOperationLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维修任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 排序字段，目前支持：OperationTime
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式 0:递增(默认) 1:递减
         * @type {number || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeDeviceOperationLog请求参数结构体
 * @class
 */
class DescribeDeviceOperationLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 查询开始日期
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束日期
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeOperationResult请求参数结构体
 * @class
 */
class DescribeOperationResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * AttachCamRole返回参数结构体
 * @class
 */
class AttachCamRoleResponse extends  AbstractModel {
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
 * RecoverDevices返回参数结构体
 * @class
 */
class RecoverDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetachCamRole返回参数结构体
 * @class
 */
class DetachCamRoleResponse extends  AbstractModel {
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
 * ShutdownDevices请求参数结构体
 * @class
 */
class ShutdownDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要关闭的设备ID列表
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
 * UnbindPsaTag请求参数结构体
 * @class
 */
class UnbindPsaTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预授权规则ID
         * @type {string || null}
         */
        this.PsaId = null;

        /**
         * 需要解绑的标签key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 需要解绑的标签value
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
        this.PsaId = 'PsaId' in params ? params.PsaId : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * ModifyCustomImageAttribute返回参数结构体
 * @class
 */
class ModifyCustomImageAttributeResponse extends  AbstractModel {
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
 * 地域信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域整型ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域描述
         * @type {string || null}
         */
        this.RegionDescription = null;

        /**
         * 该地域下的可用区信息
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionDescription = 'RegionDescription' in params ? params.RegionDescription : null;

        if (params.ZoneInfoSet) {
            this.ZoneInfoSet = new Array();
            for (let z in params.ZoneInfoSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneInfoSet[z]);
                this.ZoneInfoSet.push(obj);
            }
        }

    }
}

/**
 * 脚本信息
 * @class
 */
class UserCmd extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义脚本名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 脚本自增ID
         * @type {number || null}
         */
        this.AutoId = null;

        /**
         * 脚本ID
         * @type {string || null}
         */
        this.CmdId = null;

        /**
         * 脚本内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 命令适用的操作系统类型
         * @type {string || null}
         */
        this.OsType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AutoId = 'AutoId' in params ? params.AutoId : null;
        this.CmdId = 'CmdId' in params ? params.CmdId : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.OsType = 'OsType' in params ? params.OsType : null;

    }
}

/**
 * 镜像制作进度列表
 * @class
 */
class CustomImageProcess extends  AbstractModel {
    constructor(){
        super();

        /**
         * 步骤
         * @type {string || null}
         */
        this.StepName = null;

        /**
         * 此步骤开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 0: 已完成 1: 当前进行 2: 未开始
         * @type {number || null}
         */
        this.StepType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StepName = 'StepName' in params ? params.StepName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.StepType = 'StepType' in params ? params.StepType : null;

    }
}

/**
 * CreateSpotDevice请求参数结构体
 * @class
 */
class CreateSpotDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区名称。如ap-guangzhou-bls-1, 通过DescribeRegions获取
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 计算单元类型, 如v3.c2.medium，更详细的ComputeType参考[竞价实例产品文档](https://cloud.tencent.com/document/product/386/30256)
         * @type {string || null}
         */
        this.ComputeType = null;

        /**
         * 操作系统类型ID
         * @type {number || null}
         */
        this.OsTypeId = null;

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
         * 购买的计算单元个数
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 出价策略。可取值为SpotWithPriceLimit和SpotAsPriceGo。SpotWithPriceLimit，用户设置价格上限，需要传SpotPriceLimit参数， 如果市场价高于用户的指定价格，则购买不成功;  SpotAsPriceGo 是随市场价的策略。
         * @type {string || null}
         */
        this.SpotStrategy = null;

        /**
         * 用户设置的价格。当为SpotWithPriceLimit竞价策略时有效
         * @type {number || null}
         */
        this.SpotPriceLimit = null;

        /**
         * 设置竞价实例密码。可选参数，没有指定会生成随机密码
         * @type {string || null}
         */
        this.Passwd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ComputeType = 'ComputeType' in params ? params.ComputeType : null;
        this.OsTypeId = 'OsTypeId' in params ? params.OsTypeId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.SpotStrategy = 'SpotStrategy' in params ? params.SpotStrategy : null;
        this.SpotPriceLimit = 'SpotPriceLimit' in params ? params.SpotPriceLimit : null;
        this.Passwd = 'Passwd' in params ? params.Passwd : null;

    }
}

/**
 * 操作系统类型
 * @class
 */
class OsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作系统ID
         * @type {number || null}
         */
        this.OsTypeId = null;

        /**
         * 操作系统名称
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 操作系统名称描述
         * @type {string || null}
         */
        this.OsDescription = null;

        /**
         * 操作系统英文名称
         * @type {string || null}
         */
        this.OsEnglishDescription = null;

        /**
         * 操作系统的分类，如CentOs Debian
         * @type {string || null}
         */
        this.OsClass = null;

        /**
         * 标识镜像分类。public:公共镜像; private: 专属镜像
         * @type {string || null}
         */
        this.ImageTag = null;

        /**
         * 操作系统，ext4文件下所支持的最大的磁盘大小。单位为T
         * @type {number || null}
         */
        this.MaxPartitionSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OsTypeId = 'OsTypeId' in params ? params.OsTypeId : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.OsDescription = 'OsDescription' in params ? params.OsDescription : null;
        this.OsEnglishDescription = 'OsEnglishDescription' in params ? params.OsEnglishDescription : null;
        this.OsClass = 'OsClass' in params ? params.OsClass : null;
        this.ImageTag = 'ImageTag' in params ? params.ImageTag : null;
        this.MaxPartitionSize = 'MaxPartitionSize' in params ? params.MaxPartitionSize : null;

    }
}

/**
 * CreateUserCmd请求参数结构体
 * @class
 */
class CreateUserCmdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义脚本的名称
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 命令适用的操作系统类型，取值linux或xserver
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 脚本内容，必须经过base64编码
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * ReturnDevices返回参数结构体
 * @class
 */
class ReturnDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindPsaTag返回参数结构体
 * @class
 */
class BindPsaTagResponse extends  AbstractModel {
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
 * DescribeHostedDeviceOutBandInfo返回参数结构体
 * @class
 */
class DescribeHostedDeviceOutBandInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 托管设备带外信息
         * @type {Array.<HostedDeviceOutBandInfo> || null}
         */
        this.HostedDeviceOutBandInfoSet = null;

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

        if (params.HostedDeviceOutBandInfoSet) {
            this.HostedDeviceOutBandInfoSet = new Array();
            for (let z in params.HostedDeviceOutBandInfoSet) {
                let obj = new HostedDeviceOutBandInfo();
                obj.deserialize(params.HostedDeviceOutBandInfoSet[z]);
                this.HostedDeviceOutBandInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务器价格信息
 * @class
 */
class DevicePriceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理机ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 设备型号
         * @type {string || null}
         */
        this.DeviceClassCode = null;

        /**
         * 是否是弹性机型，1：是，0：否
         * @type {number || null}
         */
        this.IsElastic = null;

        /**
         * 付费模式ID, 1:预付费; 2:后付费; 3:预付费转后付费中
         * @type {number || null}
         */
        this.CpmPayMode = null;

        /**
         * Cpu信息描述
         * @type {string || null}
         */
        this.CpuDescription = null;

        /**
         * 内存信息描述
         * @type {string || null}
         */
        this.MemDescription = null;

        /**
         * 硬盘信息描述
         * @type {string || null}
         */
        this.DiskDescription = null;

        /**
         * 网卡信息描述
         * @type {string || null}
         */
        this.NicDescription = null;

        /**
         * Gpu信息描述
         * @type {string || null}
         */
        this.GpuDescription = null;

        /**
         * Raid信息描述
         * @type {string || null}
         */
        this.RaidDescription = null;

        /**
         * 客户的单价
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 刊例单价
         * @type {number || null}
         */
        this.NormalPrice = null;

        /**
         * 原价
         * @type {number || null}
         */
        this.TotalCost = null;

        /**
         * 折扣价
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * 计费时长
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 计费时长单位, m:按月计费; d:按天计费
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 商品数量
         * @type {number || null}
         */
        this.GoodsCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DeviceClassCode = 'DeviceClassCode' in params ? params.DeviceClassCode : null;
        this.IsElastic = 'IsElastic' in params ? params.IsElastic : null;
        this.CpmPayMode = 'CpmPayMode' in params ? params.CpmPayMode : null;
        this.CpuDescription = 'CpuDescription' in params ? params.CpuDescription : null;
        this.MemDescription = 'MemDescription' in params ? params.MemDescription : null;
        this.DiskDescription = 'DiskDescription' in params ? params.DiskDescription : null;
        this.NicDescription = 'NicDescription' in params ? params.NicDescription : null;
        this.GpuDescription = 'GpuDescription' in params ? params.GpuDescription : null;
        this.RaidDescription = 'RaidDescription' in params ? params.RaidDescription : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.NormalPrice = 'NormalPrice' in params ? params.NormalPrice : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.GoodsCount = 'GoodsCount' in params ? params.GoodsCount : null;

    }
}

/**
 * RebootDevices请求参数结构体
 * @class
 */
class RebootDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要重启的设备ID列表
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
 * DeleteCustomImages返回参数结构体
 * @class
 */
class DeleteCustomImagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDevices请求参数结构体
 * @class
 */
class DescribeDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 机型ID，通过接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)查询
         * @type {string || null}
         */
        this.DeviceClassCode = null;

        /**
         * 设备ID数组
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 外网IP数组
         * @type {Array.<string> || null}
         */
        this.WanIps = null;

        /**
         * 内网IP数组
         * @type {Array.<string> || null}
         */
        this.LanIps = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 模糊IP查询
         * @type {string || null}
         */
        this.VagueIp = null;

        /**
         * 设备到期时间查询的起始时间
         * @type {string || null}
         */
        this.DeadlineStartTime = null;

        /**
         * 设备到期时间查询的结束时间
         * @type {string || null}
         */
        this.DeadlineEndTime = null;

        /**
         * 自动续费标志 0:不自动续费，1:自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 私有网络唯一ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网唯一ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 设备类型，取值有: compute(计算型), standard(标准型), storage(存储型) 等
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 竞价实例机器的过滤。如果未指定此参数，则不做过滤。0: 查询非竞价实例的机器; 1: 查询竞价实例的机器。
         * @type {number || null}
         */
        this.IsLuckyDevice = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式，取值：0:增序(默认)，1:降序
         * @type {number || null}
         */
        this.Order = null;

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
        this.DeviceClassCode = 'DeviceClassCode' in params ? params.DeviceClassCode : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.WanIps = 'WanIps' in params ? params.WanIps : null;
        this.LanIps = 'LanIps' in params ? params.LanIps : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.VagueIp = 'VagueIp' in params ? params.VagueIp : null;
        this.DeadlineStartTime = 'DeadlineStartTime' in params ? params.DeadlineStartTime : null;
        this.DeadlineEndTime = 'DeadlineEndTime' in params ? params.DeadlineEndTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.IsLuckyDevice = 'IsLuckyDevice' in params ? params.IsLuckyDevice : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeHardwareSpecification返回参数结构体
 * @class
 */
class DescribeHardwareSpecificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPU型号列表
         * @type {Array.<CpuInfo> || null}
         */
        this.CpuInfoSet = null;

        /**
         * 内存的取值，单位为G
         * @type {Array.<number> || null}
         */
        this.MemSet = null;

        /**
         * 硬盘型号列表
         * @type {Array.<DiskInfo> || null}
         */
        this.DiskInfoSet = null;

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

        if (params.CpuInfoSet) {
            this.CpuInfoSet = new Array();
            for (let z in params.CpuInfoSet) {
                let obj = new CpuInfo();
                obj.deserialize(params.CpuInfoSet[z]);
                this.CpuInfoSet.push(obj);
            }
        }
        this.MemSet = 'MemSet' in params ? params.MemSet : null;

        if (params.DiskInfoSet) {
            this.DiskInfoSet = new Array();
            for (let z in params.DiskInfoSet) {
                let obj = new DiskInfo();
                obj.deserialize(params.DiskInfoSet[z]);
                this.DiskInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePsaRegulation返回参数结构体
 * @class
 */
class CreatePsaRegulationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的预授权规则ID
         * @type {string || null}
         */
        this.PsaId = null;

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
        this.PsaId = 'PsaId' in params ? params.PsaId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomImageProcess返回参数结构体
 * @class
 */
class DescribeCustomImageProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像制作进度
         * @type {Array.<CustomImageProcess> || null}
         */
        this.CustomImageProcessSet = null;

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

        if (params.CustomImageProcessSet) {
            this.CustomImageProcessSet = new Array();
            for (let z in params.CustomImageProcessSet) {
                let obj = new CustomImageProcess();
                obj.deserialize(params.CustomImageProcessSet[z]);
                this.CustomImageProcessSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceHardwareInfo请求参数结构体
 * @class
 */
class DescribeDeviceHardwareInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备 ID 列表
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
 * DescribeDeviceOperationLog返回参数结构体
 * @class
 */
class DescribeDeviceOperationLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作日志列表
         * @type {Array.<DeviceOperationLog> || null}
         */
        this.DeviceOperationLogSet = null;

        /**
         * 返回数目
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

        if (params.DeviceOperationLogSet) {
            this.DeviceOperationLogSet = new Array();
            for (let z in params.DeviceOperationLogSet) {
                let obj = new DeviceOperationLog();
                obj.deserialize(params.DeviceOperationLogSet[z]);
                this.DeviceOperationLogSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RepairTaskControl请求参数结构体
 * @class
 */
class RepairTaskControlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维修任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 操作
         * @type {string || null}
         */
        this.Operate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Operate = 'Operate' in params ? params.Operate : null;

    }
}

/**
 * 物理机机架信息
 * @class
 */
class DevicePositionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 所在可用区
         * @type {string || null}
         */
        this.Zone = null;

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
         * 业务IP
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 实例别名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 机架名称
         * @type {string || null}
         */
        this.RckName = null;

        /**
         * 机位
         * @type {number || null}
         */
        this.PosCode = null;

        /**
         * 交换机名称
         * @type {string || null}
         */
        this.SwitchName = null;

        /**
         * 设备交付时间
         * @type {string || null}
         */
        this.DeliverTime = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.Deadline = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.RckName = 'RckName' in params ? params.RckName : null;
        this.PosCode = 'PosCode' in params ? params.PosCode : null;
        this.SwitchName = 'SwitchName' in params ? params.SwitchName : null;
        this.DeliverTime = 'DeliverTime' in params ? params.DeliverTime : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;

    }
}

/**
 * 物理机信息
 * @class
 */
class DeviceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备唯一ID
         * @type {string || null}
         */
        this.InstanceId = null;

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
         * 设备状态ID，取值：<li>1：申领设备中</li><li>2：初始化中</li><li>4：运营中</li><li>7：隔离中</li><li>8：已隔离</li><li>10：解隔离中</li><li>16：故障中</li>
         * @type {number || null}
         */
        this.DeviceStatus = null;

        /**
         * 设备操作状态ID，取值：
<li>1：运行中</li><li>2：正在关机</li><li>3：已关机</li><li>5：正在开机</li><li>7：重启中</li><li>9：重装中</li><li>12：绑定EIP</li><li>13：解绑EIP</li><li>14：绑定LB</li><li>15：解绑LB</li><li>19：更换IP中</li><li>20：制作镜像中</li><li>21：制作镜像失败</li>
         * @type {number || null}
         */
        this.OperateStatus = null;

        /**
         * 操作系统ID，参考接口[查询操作系统信息(DescribeOsInfo)](https://cloud.tencent.com/document/product/386/32902)
         * @type {number || null}
         */
        this.OsTypeId = null;

        /**
         * RAID类型ID，参考接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/product/386/32910)
         * @type {number || null}
         */
        this.RaidId = null;

        /**
         * 设备别名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 外网IP
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 设备交付时间
         * @type {string || null}
         */
        this.DeliverTime = null;

        /**
         * 设备到期时间
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * 自动续费标识。0: 不自动续费; 1:自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 设备类型
         * @type {string || null}
         */
        this.DeviceClassCode = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 计费模式。1: 预付费; 2: 后付费; 3:预付费转后付费中
         * @type {number || null}
         */
        this.CpmPayMode = null;

        /**
         * 带外IP
         * @type {string || null}
         */
        this.DhcpIp = null;

        /**
         * 所在私有网络别名
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 所在子网别名
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 所在私有网络CIDR
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 所在子网CIDR
         * @type {string || null}
         */
        this.SubnetCidrBlock = null;

        /**
         * 标识是否是竞价实例。0: 普通设备; 1: 竞价实例设备
         * @type {number || null}
         */
        this.IsLuckyDevice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DeviceStatus = 'DeviceStatus' in params ? params.DeviceStatus : null;
        this.OperateStatus = 'OperateStatus' in params ? params.OperateStatus : null;
        this.OsTypeId = 'OsTypeId' in params ? params.OsTypeId : null;
        this.RaidId = 'RaidId' in params ? params.RaidId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.DeliverTime = 'DeliverTime' in params ? params.DeliverTime : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.DeviceClassCode = 'DeviceClassCode' in params ? params.DeviceClassCode : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.CpmPayMode = 'CpmPayMode' in params ? params.CpmPayMode : null;
        this.DhcpIp = 'DhcpIp' in params ? params.DhcpIp : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.SubnetCidrBlock = 'SubnetCidrBlock' in params ? params.SubnetCidrBlock : null;
        this.IsLuckyDevice = 'IsLuckyDevice' in params ? params.IsLuckyDevice : null;

    }
}

/**
 * ResetDevicePassword返回参数结构体
 * @class
 */
class ResetDevicePasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石异步任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserCmdTasks请求参数结构体
 * @class
 */
class DescribeUserCmdTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，支持： RunBeginTime,RunEndTime,InstanceCount,SuccessCount,FailureCount
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式，取值: 1倒序，0顺序；默认倒序
         * @type {number || null}
         */
        this.Order = null;

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
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DetachCamRole请求参数结构体
 * @class
 */
class DetachCamRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器ID
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
 * DescribeDeviceClassPartition返回参数结构体
 * @class
 */
class DescribeDeviceClassPartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的RAID格式列表
         * @type {Array.<DeviceClassPartitionInfo> || null}
         */
        this.DeviceClassPartitionInfoSet = null;

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

        if (params.DeviceClassPartitionInfoSet) {
            this.DeviceClassPartitionInfoSet = new Array();
            for (let z in params.DeviceClassPartitionInfoSet) {
                let obj = new DeviceClassPartitionInfo();
                obj.deserialize(params.DeviceClassPartitionInfoSet[z]);
                this.DeviceClassPartitionInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeUserCmdTasksResponse: DescribeUserCmdTasksResponse,
    RunUserCmdRequest: RunUserCmdRequest,
    CreatePsaRegulationRequest: CreatePsaRegulationRequest,
    DescribeDeviceInventoryResponse: DescribeDeviceInventoryResponse,
    DescribeOsInfoResponse: DescribeOsInfoResponse,
    DescribeOsInfoRequest: DescribeOsInfoRequest,
    DescribeTaskOperationLogResponse: DescribeTaskOperationLogResponse,
    CreateCustomImageRequest: CreateCustomImageRequest,
    DescribeCustomImagesRequest: DescribeCustomImagesRequest,
    DescribeUserCmdTaskInfoResponse: DescribeUserCmdTaskInfoResponse,
    DescribeDevicesResponse: DescribeDevicesResponse,
    ModifyLanIpRequest: ModifyLanIpRequest,
    DeviceClass: DeviceClass,
    DescribeRepairTaskConstantRequest: DescribeRepairTaskConstantRequest,
    DeletePsaRegulationRequest: DeletePsaRegulationRequest,
    DescribeCustomImageProcessRequest: DescribeCustomImageProcessRequest,
    CpuInfo: CpuInfo,
    CustomImage: CustomImage,
    ModifyDeviceAutoRenewFlagRequest: ModifyDeviceAutoRenewFlagRequest,
    StartDevicesResponse: StartDevicesResponse,
    BindPsaTagRequest: BindPsaTagRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DevicePartition: DevicePartition,
    OfflineDevicesResponse: OfflineDevicesResponse,
    ModifyPsaRegulationRequest: ModifyPsaRegulationRequest,
    RecoverDevicesRequest: RecoverDevicesRequest,
    DescribeDeviceClassPartitionRequest: DescribeDeviceClassPartitionRequest,
    ZoneInfo: ZoneInfo,
    CreateSpotDeviceResponse: CreateSpotDeviceResponse,
    BuyDevicesRequest: BuyDevicesRequest,
    DescribeHardwareSpecificationRequest: DescribeHardwareSpecificationRequest,
    Tag: Tag,
    CreateCustomImageResponse: CreateCustomImageResponse,
    HostedDeviceOutBandInfo: HostedDeviceOutBandInfo,
    ReturnDevicesRequest: ReturnDevicesRequest,
    ModifyDeviceAliasesResponse: ModifyDeviceAliasesResponse,
    PsaRegulation: PsaRegulation,
    DescribeDevicePartitionResponse: DescribeDevicePartitionResponse,
    DescribeHostedDeviceOutBandInfoRequest: DescribeHostedDeviceOutBandInfoRequest,
    RebootDevicesResponse: RebootDevicesResponse,
    ResetDevicePasswordRequest: ResetDevicePasswordRequest,
    SubtaskStatus: SubtaskStatus,
    DescribeDeviceInventoryRequest: DescribeDeviceInventoryRequest,
    DescribeCustomImagesResponse: DescribeCustomImagesResponse,
    DeviceAlias: DeviceAlias,
    DeleteCustomImagesRequest: DeleteCustomImagesRequest,
    PartitionInfo: PartitionInfo,
    DescribeDevicePositionRequest: DescribeDevicePositionRequest,
    UserCmdTaskInfo: UserCmdTaskInfo,
    ShutdownDevicesResponse: ShutdownDevicesResponse,
    TaskType: TaskType,
    DeleteUserCmdsRequest: DeleteUserCmdsRequest,
    DeviceDiskSizeInfo: DeviceDiskSizeInfo,
    AttachCamRoleRequest: AttachCamRoleRequest,
    DescribeDeviceClassResponse: DescribeDeviceClassResponse,
    DescribeDeviceHardwareInfoResponse: DescribeDeviceHardwareInfoResponse,
    ModifyUserCmdRequest: ModifyUserCmdRequest,
    DescribeDevicePriceInfoResponse: DescribeDevicePriceInfoResponse,
    RunUserCmdResponse: RunUserCmdResponse,
    DescribeUserCmdsRequest: DescribeUserCmdsRequest,
    DescribeTaskInfoRequest: DescribeTaskInfoRequest,
    RepairTaskControlResponse: RepairTaskControlResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribePsaRegulationsRequest: DescribePsaRegulationsRequest,
    UnbindPsaTagResponse: UnbindPsaTagResponse,
    DescribeDevicePriceInfoRequest: DescribeDevicePriceInfoRequest,
    DescribeDevicePartitionRequest: DescribeDevicePartitionRequest,
    TaskInfo: TaskInfo,
    ModifyPsaRegulationResponse: ModifyPsaRegulationResponse,
    UserCmdTask: UserCmdTask,
    TaskOperationLog: TaskOperationLog,
    FailedTaskInfo: FailedTaskInfo,
    DescribeDevicePositionResponse: DescribeDevicePositionResponse,
    DeleteUserCmdsResponse: DeleteUserCmdsResponse,
    ModifyDeviceAliasesRequest: ModifyDeviceAliasesRequest,
    ModifyPayModePre2PostResponse: ModifyPayModePre2PostResponse,
    SuccessTaskInfo: SuccessTaskInfo,
    SetOutBandVpnAuthPasswordRequest: SetOutBandVpnAuthPasswordRequest,
    OfflineDevicesRequest: OfflineDevicesRequest,
    DeviceHardwareInfo: DeviceHardwareInfo,
    DiskInfo: DiskInfo,
    SetOutBandVpnAuthPasswordResponse: SetOutBandVpnAuthPasswordResponse,
    DescribeTaskInfoResponse: DescribeTaskInfoResponse,
    DescribeUserCmdTaskInfoRequest: DescribeUserCmdTaskInfoRequest,
    CreateUserCmdResponse: CreateUserCmdResponse,
    ModifyUserCmdResponse: ModifyUserCmdResponse,
    ModifyPayModePre2PostRequest: ModifyPayModePre2PostRequest,
    DeviceOperationLog: DeviceOperationLog,
    DescribeRepairTaskConstantResponse: DescribeRepairTaskConstantResponse,
    BuyDevicesResponse: BuyDevicesResponse,
    ModifyLanIpResponse: ModifyLanIpResponse,
    DescribePsaRegulationsResponse: DescribePsaRegulationsResponse,
    StartDevicesRequest: StartDevicesRequest,
    DescribeUserCmdsResponse: DescribeUserCmdsResponse,
    ModifyDeviceAutoRenewFlagResponse: ModifyDeviceAutoRenewFlagResponse,
    DescribeOperationResultResponse: DescribeOperationResultResponse,
    DescribeDeviceClassRequest: DescribeDeviceClassRequest,
    ModifyCustomImageAttributeRequest: ModifyCustomImageAttributeRequest,
    DeletePsaRegulationResponse: DeletePsaRegulationResponse,
    DeviceClassPartitionInfo: DeviceClassPartitionInfo,
    DescribeTaskOperationLogRequest: DescribeTaskOperationLogRequest,
    DescribeDeviceOperationLogRequest: DescribeDeviceOperationLogRequest,
    DescribeOperationResultRequest: DescribeOperationResultRequest,
    AttachCamRoleResponse: AttachCamRoleResponse,
    RecoverDevicesResponse: RecoverDevicesResponse,
    DetachCamRoleResponse: DetachCamRoleResponse,
    ShutdownDevicesRequest: ShutdownDevicesRequest,
    UnbindPsaTagRequest: UnbindPsaTagRequest,
    ModifyCustomImageAttributeResponse: ModifyCustomImageAttributeResponse,
    RegionInfo: RegionInfo,
    UserCmd: UserCmd,
    CustomImageProcess: CustomImageProcess,
    CreateSpotDeviceRequest: CreateSpotDeviceRequest,
    OsInfo: OsInfo,
    CreateUserCmdRequest: CreateUserCmdRequest,
    ReturnDevicesResponse: ReturnDevicesResponse,
    BindPsaTagResponse: BindPsaTagResponse,
    DescribeHostedDeviceOutBandInfoResponse: DescribeHostedDeviceOutBandInfoResponse,
    DevicePriceInfo: DevicePriceInfo,
    RebootDevicesRequest: RebootDevicesRequest,
    DeleteCustomImagesResponse: DeleteCustomImagesResponse,
    DescribeDevicesRequest: DescribeDevicesRequest,
    DescribeHardwareSpecificationResponse: DescribeHardwareSpecificationResponse,
    CreatePsaRegulationResponse: CreatePsaRegulationResponse,
    DescribeCustomImageProcessResponse: DescribeCustomImageProcessResponse,
    DescribeDeviceHardwareInfoRequest: DescribeDeviceHardwareInfoRequest,
    DescribeDeviceOperationLogResponse: DescribeDeviceOperationLogResponse,
    RepairTaskControlRequest: RepairTaskControlRequest,
    DevicePositionInfo: DevicePositionInfo,
    DeviceInfo: DeviceInfo,
    ResetDevicePasswordResponse: ResetDevicePasswordResponse,
    DescribeUserCmdTasksRequest: DescribeUserCmdTasksRequest,
    DetachCamRoleRequest: DetachCamRoleRequest,
    DescribeDeviceClassPartitionResponse: DescribeDeviceClassPartitionResponse,

}
