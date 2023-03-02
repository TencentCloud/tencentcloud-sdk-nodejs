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
 * 文件系统快照统计
 * @class
 */
class SnapshotStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 快照总个数
         * @type {number || null}
         */
        this.SnapshotNumber = null;

        /**
         * 快照总容量
         * @type {number || null}
         */
        this.SnapshotSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.SnapshotNumber = 'SnapshotNumber' in params ? params.SnapshotNumber : null;
        this.SnapshotSize = 'SnapshotSize' in params ? params.SnapshotSize : null;

    }
}

/**
 * DescribeCfsPGroups返回参数结构体
 * @class
 */
class DescribeCfsPGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组信息列表
         * @type {Array.<PGroupInfo> || null}
         */
        this.PGroupList = null;

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

        if (params.PGroupList) {
            this.PGroupList = new Array();
            for (let z in params.PGroupList) {
                let obj = new PGroupInfo();
                obj.deserialize(params.PGroupList[z]);
                this.PGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMountTargets返回参数结构体
 * @class
 */
class DescribeMountTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 挂载点详情
         * @type {Array.<MountInfo> || null}
         */
        this.MountTargets = null;

        /**
         * 挂载点数量
         * @type {number || null}
         */
        this.NumberOfMountTargets = null;

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

        if (params.MountTargets) {
            this.MountTargets = new Array();
            for (let z in params.MountTargets) {
                let obj = new MountInfo();
                obj.deserialize(params.MountTargets[z]);
                this.MountTargets.push(obj);
            }
        }
        this.NumberOfMountTargets = 'NumberOfMountTargets' in params ? params.NumberOfMountTargets : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSnapshotOperationLogs请求参数结构体
 * @class
 */
class DescribeSnapshotOperationLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统快照ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 文件系统客户端信息
 * @class
 */
class FileSystemClient extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统IP地址
         * @type {string || null}
         */
        this.CfsVip = null;

        /**
         * 客户端IP地址
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 文件系统所属VPCID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 可用区名称，例如ap-beijing-1，请参考 概览文档中的地域与可用区列表
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区中文名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 该文件系统被挂载到客户端上的路径信息
         * @type {string || null}
         */
        this.MountDirectory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CfsVip = 'CfsVip' in params ? params.CfsVip : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.MountDirectory = 'MountDirectory' in params ? params.MountDirectory : null;

    }
}

/**
 * DescribeCfsFileSystems返回参数结构体
 * @class
 */
class DescribeCfsFileSystemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统信息
         * @type {Array.<FileSystemInfo> || null}
         */
        this.FileSystems = null;

        /**
         * 文件系统总数
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

        if (params.FileSystems) {
            this.FileSystems = new Array();
            for (let z in params.FileSystems) {
                let obj = new FileSystemInfo();
                obj.deserialize(params.FileSystems[z]);
                this.FileSystems.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCfsFileSystem返回参数结构体
 * @class
 */
class CreateCfsFileSystemResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 用户自定义文件系统名称
         * @type {string || null}
         */
        this.CreationToken = null;

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 文件系统状态，可能出现状态包括：“creating”  创建中, “create_failed” 创建失败, “available” 可用, “unserviced” 不可用, “upgrading” 升级中， “deleting” 删除中。
         * @type {string || null}
         */
        this.LifeCycleState = null;

        /**
         * 文件系统已使用容量大小，单位为 Byte
         * @type {number || null}
         */
        this.SizeByte = null;

        /**
         * 可用区 ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 用户自定义文件系统名称
         * @type {string || null}
         */
        this.FsName = null;

        /**
         * 文件系统是否加密
         * @type {boolean || null}
         */
        this.Encrypted = null;

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
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.LifeCycleState = 'LifeCycleState' in params ? params.LifeCycleState : null;
        this.SizeByte = 'SizeByte' in params ? params.SizeByte : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.FsName = 'FsName' in params ? params.FsName : null;
        this.Encrypted = 'Encrypted' in params ? params.Encrypted : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文件系统基本信息
 * @class
 */
class FileSystemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 用户自定义名称
         * @type {string || null}
         */
        this.CreationToken = null;

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 文件系统状态
         * @type {string || null}
         */
        this.LifeCycleState = null;

        /**
         * 文件系统已使用容量
         * @type {number || null}
         */
        this.SizeByte = null;

        /**
         * 文件系统最大空间限制
         * @type {number || null}
         */
        this.SizeLimit = null;

        /**
         * 区域 ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 文件系统协议类型
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 文件系统存储类型
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * 文件系统绑定的预付费存储包
         * @type {string || null}
         */
        this.StorageResourcePkg = null;

        /**
         * 文件系统绑定的预付费带宽包（暂未支持）
         * @type {string || null}
         */
        this.BandwidthResourcePkg = null;

        /**
         * 文件系统绑定权限组信息
         * @type {PGroup || null}
         */
        this.PGroup = null;

        /**
         * 用户自定义名称
         * @type {string || null}
         */
        this.FsName = null;

        /**
         * 文件系统是否加密
         * @type {boolean || null}
         */
        this.Encrypted = null;

        /**
         * 加密所使用的密钥，可以为密钥的 ID 或者 ARN
         * @type {string || null}
         */
        this.KmsKeyId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 文件系统吞吐上限，吞吐上限是根据文件系统当前已使用存储量、绑定的存储资源包以及吞吐资源包一同确定
         * @type {number || null}
         */
        this.BandwidthLimit = null;

        /**
         * 文件系统总容量
         * @type {number || null}
         */
        this.Capacity = null;

        /**
         * 文件系统标签列表
         * @type {Array.<TagInfo> || null}
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
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.LifeCycleState = 'LifeCycleState' in params ? params.LifeCycleState : null;
        this.SizeByte = 'SizeByte' in params ? params.SizeByte : null;
        this.SizeLimit = 'SizeLimit' in params ? params.SizeLimit : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.StorageResourcePkg = 'StorageResourcePkg' in params ? params.StorageResourcePkg : null;
        this.BandwidthResourcePkg = 'BandwidthResourcePkg' in params ? params.BandwidthResourcePkg : null;

        if (params.PGroup) {
            let obj = new PGroup();
            obj.deserialize(params.PGroup)
            this.PGroup = obj;
        }
        this.FsName = 'FsName' in params ? params.FsName : null;
        this.Encrypted = 'Encrypted' in params ? params.Encrypted : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.BandwidthLimit = 'BandwidthLimit' in params ? params.BandwidthLimit : null;
        this.Capacity = 'Capacity' in params ? params.Capacity : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * BindAutoSnapshotPolicy请求参数结构体
 * @class
 */
class BindAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照策略ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * 文件系统列表
         * @type {string || null}
         */
        this.FileSystemIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.FileSystemIds = 'FileSystemIds' in params ? params.FileSystemIds : null;

    }
}

/**
 * CreateCfsPGroup请求参数结构体
 * @class
 */
class CreateCfsPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 权限组描述信息，1-255个字符
         * @type {string || null}
         */
        this.DescInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;

    }
}

/**
 * DescribeAutoSnapshotPolicies请求参数结构体
 * @class
 */
class DescribeAutoSnapshotPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照策略ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * 分页码
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 页面长
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 升序，降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
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
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * DescribeAvailableZoneInfo请求参数结构体
 * @class
 */
class DescribeAvailableZoneInfoRequest extends  AbstractModel {
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
 * DescribeMountTargets请求参数结构体
 * @class
 */
class DescribeMountTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * BindAutoSnapshotPolicy返回参数结构体
 * @class
 */
class BindAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照策略ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SignUpCfsService请求参数结构体
 * @class
 */
class SignUpCfsServiceRequest extends  AbstractModel {
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
 * SignUpCfsService返回参数结构体
 * @class
 */
class SignUpCfsServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该用户当前 CFS 服务的状态，creating 是开通中，created 是已开通
         * @type {string || null}
         */
        this.CfsServiceStatus = null;

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
        this.CfsServiceStatus = 'CfsServiceStatus' in params ? params.CfsServiceStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 快照策略信息
 * @class
 */
class AutoSnapshotPolicyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照策略ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * 快照策略ID
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 快照策略创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 关联的文件系统个数
         * @type {number || null}
         */
        this.FileSystemNums = null;

        /**
         * 快照定期备份在一星期哪一天
         * @type {string || null}
         */
        this.DayOfWeek = null;

        /**
         * 快照定期备份在一天的哪一小时
         * @type {string || null}
         */
        this.Hour = null;

        /**
         * 是否激活定期快照功能
         * @type {number || null}
         */
        this.IsActivated = null;

        /**
         * 下一次触发快照时间
         * @type {string || null}
         */
        this.NextActiveTime = null;

        /**
         * 快照策略状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 帐号ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 保留时间
         * @type {number || null}
         */
        this.AliveDays = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 文件系统信息
         * @type {Array.<FileSystemByPolicy> || null}
         */
        this.FileSystems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.FileSystemNums = 'FileSystemNums' in params ? params.FileSystemNums : null;
        this.DayOfWeek = 'DayOfWeek' in params ? params.DayOfWeek : null;
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.IsActivated = 'IsActivated' in params ? params.IsActivated : null;
        this.NextActiveTime = 'NextActiveTime' in params ? params.NextActiveTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AliveDays = 'AliveDays' in params ? params.AliveDays : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

        if (params.FileSystems) {
            this.FileSystems = new Array();
            for (let z in params.FileSystems) {
                let obj = new FileSystemByPolicy();
                obj.deserialize(params.FileSystems[z]);
                this.FileSystems.push(obj);
            }
        }

    }
}

/**
 * DescribeCfsRules请求参数结构体
 * @class
 */
class DescribeCfsRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;

    }
}

/**
 * DeleteCfsPGroup请求参数结构体
 * @class
 */
class DeleteCfsPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;

    }
}

/**
 * UpdateCfsPGroup返回参数结构体
 * @class
 */
class UpdateCfsPGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 权限组名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述信息
         * @type {string || null}
         */
        this.DescInfo = null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAutoSnapshotPolicy请求参数结构体
 * @class
 */
class DeleteAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照策略ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;

    }
}

/**
 * DeleteCfsFileSystem返回参数结构体
 * @class
 */
class DeleteCfsFileSystemResponse extends  AbstractModel {
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
 * UpdateCfsRule请求参数结构体
 * @class
 */
class UpdateCfsRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 规则 ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。
         * @type {string || null}
         */
        this.AuthClientIp = null;

        /**
         * 读写权限, 值为RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读
         * @type {string || null}
         */
        this.RWPermission = null;

        /**
         * 用户权限，值为all_squash、no_all_squash、root_squash、no_root_squash。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。不填默认为root_squash。
         * @type {string || null}
         */
        this.UserPermission = null;

        /**
         * 规则优先级，参数范围1-100。 其中 1 为最高，100为最低
         * @type {number || null}
         */
        this.Priority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * DeleteUserQuota请求参数结构体
 * @class
 */
class DeleteUserQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 指定配额类型，包括Uid、Gid
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * UID/GID信息
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * DescribeAvailableZoneInfo返回参数结构体
 * @class
 */
class DescribeAvailableZoneInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 各可用区的资源售卖情况以及支持的存储类型、存储协议等信息
         * @type {Array.<AvailableRegion> || null}
         */
        this.RegionZones = null;

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

        if (params.RegionZones) {
            this.RegionZones = new Array();
            for (let z in params.RegionZones) {
                let obj = new AvailableRegion();
                obj.deserialize(params.RegionZones[z]);
                this.RegionZones.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCfsSnapshot返回参数结构体
 * @class
 */
class DeleteCfsSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.SnapshotId = null;

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfsFileSystemClients返回参数结构体
 * @class
 */
class DescribeCfsFileSystemClientsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端列表
         * @type {Array.<FileSystemClient> || null}
         */
        this.ClientList = null;

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

        if (params.ClientList) {
            this.ClientList = new Array();
            for (let z in params.ClientList) {
                let obj = new FileSystemClient();
                obj.deserialize(params.ClientList[z]);
                this.ClientList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMountTarget返回参数结构体
 * @class
 */
class DeleteMountTargetResponse extends  AbstractModel {
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
 * CreateCfsSnapshot请求参数结构体
 * @class
 */
class CreateCfsSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统id
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 快照名称
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 快照标签
         * @type {Array.<TagInfo> || null}
         */
        this.ResourceTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * DeleteCfsRule请求参数结构体
 * @class
 */
class DeleteCfsRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 规则 ID
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribeCfsRules返回参数结构体
 * @class
 */
class DescribeCfsRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组规则列表
         * @type {Array.<PGroupRuleInfo> || null}
         */
        this.RuleList = null;

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

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new PGroupRuleInfo();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSnapshotOperationLogs返回参数结构体
 * @class
 */
class DescribeSnapshotOperationLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 操作日志
         * @type {Array.<SnapshotOperateLog> || null}
         */
        this.SnapshotOperates = null;

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

        if (params.SnapshotOperates) {
            this.SnapshotOperates = new Array();
            for (let z in params.SnapshotOperates) {
                let obj = new SnapshotOperateLog();
                obj.deserialize(params.SnapshotOperates[z]);
                this.SnapshotOperates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemPGroup返回参数结构体
 * @class
 */
class UpdateCfsFileSystemPGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCfsFileSystem请求参数结构体
 * @class
 */
class DeleteCfsFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统 ID。说明，进行删除文件系统操作前需要先调用 DeleteMountTarget 接口删除该文件系统的挂载点，否则会删除失败。
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * CreateCfsPGroup返回参数结构体
 * @class
 */
class CreateCfsPGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 权限组名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 权限组描述信息
         * @type {string || null}
         */
        this.DescInfo = null;

        /**
         * 已经与该权限组绑定的文件系统个数
         * @type {number || null}
         */
        this.BindCfsNum = null;

        /**
         * 权限组创建时间
         * @type {string || null}
         */
        this.CDate = null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;
        this.BindCfsNum = 'BindCfsNum' in params ? params.BindCfsNum : null;
        this.CDate = 'CDate' in params ? params.CDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfsServiceStatus请求参数结构体
 * @class
 */
class DescribeCfsServiceStatusRequest extends  AbstractModel {
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
 * DeleteUserQuota返回参数结构体
 * @class
 */
class DeleteUserQuotaResponse extends  AbstractModel {
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
 * 文件系统绑定权限组信息
 * @class
 */
class PGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 权限组名称
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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * SetUserQuota请求参数结构体
 * @class
 */
class SetUserQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 指定配额类型，包括Uid、Gid
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * UID/GID信息
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 容量硬限制，单位GiB
         * @type {number || null}
         */
        this.CapacityHardLimit = null;

        /**
         * 文件硬限制，单位个
         * @type {number || null}
         */
        this.FileHardLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.CapacityHardLimit = 'CapacityHardLimit' in params ? params.CapacityHardLimit : null;
        this.FileHardLimit = 'FileHardLimit' in params ? params.FileHardLimit : null;

    }
}

/**
 * CreateAutoSnapshotPolicy返回参数结构体
 * @class
 */
class CreateAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照策略ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 版本控制-类型数组
 * @class
 */
class AvailableType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议与售卖详情
         * @type {Array.<AvailableProtoStatus> || null}
         */
        this.Protocols = null;

        /**
         * 存储类型。返回值中 SD 为标准型存储、HP 为性能型存储
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 是否支持预付费。返回值中 true 为支持、false 为不支持
         * @type {boolean || null}
         */
        this.Prepayment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Protocols) {
            this.Protocols = new Array();
            for (let z in params.Protocols) {
                let obj = new AvailableProtoStatus();
                obj.deserialize(params.Protocols[z]);
                this.Protocols.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Prepayment = 'Prepayment' in params ? params.Prepayment : null;

    }
}

/**
 * UpdateCfsSnapshotAttribute请求参数结构体
 * @class
 */
class UpdateCfsSnapshotAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统快照ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 文件系统快照名称
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 文件系统快照保留天数
         * @type {number || null}
         */
        this.AliveDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.AliveDays = 'AliveDays' in params ? params.AliveDays : null;

    }
}

/**
 * 文件系统配额信息
 * @class
 */
class UserQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定配额类型，包括Uid、Gid
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * UID/GID信息
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 容量硬限制，单位GiB
         * @type {number || null}
         */
        this.CapacityHardLimit = null;

        /**
         * 文件硬限制，单位个
         * @type {number || null}
         */
        this.FileHardLimit = null;

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 容量使用，单位GiB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CapacityUsed = null;

        /**
         * 文件使用个数，单位个
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileUsed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.CapacityHardLimit = 'CapacityHardLimit' in params ? params.CapacityHardLimit : null;
        this.FileHardLimit = 'FileHardLimit' in params ? params.FileHardLimit : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.CapacityUsed = 'CapacityUsed' in params ? params.CapacityUsed : null;
        this.FileUsed = 'FileUsed' in params ? params.FileUsed : null;

    }
}

/**
 * DeleteMountTarget请求参数结构体
 * @class
 */
class DeleteMountTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 挂载点 ID
         * @type {string || null}
         */
        this.MountTargetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.MountTargetId = 'MountTargetId' in params ? params.MountTargetId : null;

    }
}

/**
 * CreateCfsRule请求参数结构体
 * @class
 */
class CreateCfsRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。
         * @type {string || null}
         */
        this.AuthClientIp = null;

        /**
         * 规则优先级，参数范围1-100。 其中 1 为最高，100为最低
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 读写权限, 值为 RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读
         * @type {string || null}
         */
        this.RWPermission = null;

        /**
         * 用户权限，值为 all_squash、no_all_squash、root_squash、no_root_squash。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。不填默认为root_squash。
         * @type {string || null}
         */
        this.UserPermission = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;

    }
}

/**
 * UpdateCfsFileSystemName请求参数结构体
 * @class
 */
class UpdateCfsFileSystemNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 用户自定义文件系统名称
         * @type {string || null}
         */
        this.FsName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FsName = 'FsName' in params ? params.FsName : null;

    }
}

/**
 * 快照操作日志
 * @class
 */
class SnapshotOperateLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作类型
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 操作时间
         * @type {string || null}
         */
        this.ActionTime = null;

        /**
         * 操作名称
         * @type {string || null}
         */
        this.ActionName = null;

        /**
         * 操作者
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 结果
         * @type {number || null}
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.ActionTime = 'ActionTime' in params ? params.ActionTime : null;
        this.ActionName = 'ActionName' in params ? params.ActionName : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Result = 'Result' in params ? params.Result : null;

    }
}

/**
 * DescribeUserQuota请求参数结构体
 * @class
 */
class DescribeUserQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 过滤条件。
<br><li>UserType - Array of String - 是否必填：否 -（过滤条件）按配额类型过滤。(Uid| Gid )
<br><li>UserId - Array of String - 是否必填：否 -（过滤条件）按UID/GID过滤。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * Offset 分页码
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit 页面大小
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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

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
 * UpdateCfsFileSystemName返回参数结构体
 * @class
 */
class UpdateCfsFileSystemNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义文件系统名称
         * @type {string || null}
         */
        this.CreationToken = null;

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 用户自定义文件系统名称
         * @type {string || null}
         */
        this.FsName = null;

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
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FsName = 'FsName' in params ? params.FsName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfsSnapshotOverview返回参数结构体
 * @class
 */
class DescribeCfsSnapshotOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计信息
         * @type {Array.<SnapshotStatistics> || null}
         */
        this.StatisticsList = null;

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

        if (params.StatisticsList) {
            this.StatisticsList = new Array();
            for (let z in params.StatisticsList) {
                let obj = new SnapshotStatistics();
                obj.deserialize(params.StatisticsList[z]);
                this.StatisticsList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCfsSnapshot请求参数结构体
 * @class
 */
class DeleteCfsSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统快照id
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 需要删除的文件文件系统快照ID 列表，快照ID，跟ID列表至少填一项
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;

    }
}

/**
 * DescribeCfsFileSystemClients请求参数结构体
 * @class
 */
class DescribeCfsFileSystemClientsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统 ID。
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * 版本控制-协议详情

 * @class
 */
class AvailableProtoStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 售卖状态。可选值有 sale_out 售罄、saling可售、no_saling不可销售
         * @type {string || null}
         */
        this.SaleStatus = null;

        /**
         * 协议类型。可选值有 NFS、CIFS
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
        this.SaleStatus = 'SaleStatus' in params ? params.SaleStatus : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * DescribeCfsFileSystems请求参数结构体
 * @class
 */
class DescribeCfsFileSystemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 私有网络（VPC） ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID
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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * 版本控制-区域数组
 * @class
 */
class AvailableRegion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域名称，如“ap-beijing”
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 区域名称，如“bj”
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 区域可用情况，当区域内至少有一个可用区处于可售状态时，取值为AVAILABLE，否则为UNAVAILABLE
         * @type {string || null}
         */
        this.RegionStatus = null;

        /**
         * 可用区数组
         * @type {Array.<AvailableZone> || null}
         */
        this.Zones = null;

        /**
         * 区域中文名称，如“广州”
         * @type {string || null}
         */
        this.RegionCnName = null;

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
        this.RegionStatus = 'RegionStatus' in params ? params.RegionStatus : null;

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new AvailableZone();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }
        this.RegionCnName = 'RegionCnName' in params ? params.RegionCnName : null;

    }
}

/**
 * CreateCfsFileSystem请求参数结构体
 * @class
 */
class CreateCfsFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区名称，例如ap-beijing-1，请参考 [概览](https://cloud.tencent.com/document/product/582/13225) 文档中的地域与可用区列表
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 网络类型，可选值为 VPC，BASIC，CCN；其中 VPC 为私有网络，BASIC 为基础网络, CCN 为云联网，Turbo系列当前必须选择云联网。目前基础网络已逐渐淘汰，不推荐使用。
         * @type {string || null}
         */
        this.NetInterface = null;

        /**
         * 权限组 ID，通用标准型和性能型必填，turbo系列请填写pgroupbasic
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 文件系统协议类型， 值为 NFS、CIFS、TURBO ; 若留空则默认为 NFS协议，turbo系列必须选择turbo，不支持NFS、CIFS
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 文件系统存储类型，默认值为 SD ；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * 私有网络（VPC） ID，若网络类型选择的是VPC，该字段为必填。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID，若网络类型选择的是VPC，该字段为必填。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 指定IP地址，仅VPC网络支持；若不填写、将在该子网下随机分配 IP，Turbo系列当前不支持指定
         * @type {string || null}
         */
        this.MountIP = null;

        /**
         * 用户自定义文件系统名称
         * @type {string || null}
         */
        this.FsName = null;

        /**
         * 文件系统标签
         * @type {Array.<TagInfo> || null}
         */
        this.ResourceTags = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。用于保证请求幂等性的字符串失效时间为2小时。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 云联网ID， 若网络类型选择的是CCN，该字段为必填
         * @type {string || null}
         */
        this.CcnId = null;

        /**
         * 云联网中CFS使用的网段， 若网络类型选择的是Ccn，该字段为必填，且不能和Ccn中已经绑定的网段冲突
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 文件系统容量，turbo系列必填，单位为GiB。 turbo标准型单位GB，起售40TiB，即40960 GiB；扩容步长20TiB，即20480 GiB。turbo性能型起售20TiB，即20480 GiB；扩容步长10TiB，10240 GiB。
         * @type {number || null}
         */
        this.Capacity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NetInterface = 'NetInterface' in params ? params.NetInterface : null;
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.MountIP = 'MountIP' in params ? params.MountIP : null;
        this.FsName = 'FsName' in params ? params.FsName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.CcnId = 'CcnId' in params ? params.CcnId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Capacity = 'Capacity' in params ? params.Capacity : null;

    }
}

/**
 * 版本控制-可用区数组
 * @class
 */
class AvailableZone extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区名称
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 可用区中文名称
         * @type {string || null}
         */
        this.ZoneCnName = null;

        /**
         * Type数组
         * @type {Array.<AvailableType> || null}
         */
        this.Types = null;

        /**
         * 可用区中英文名称
         * @type {string || null}
         */
        this.ZoneName = null;

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
        this.ZoneCnName = 'ZoneCnName' in params ? params.ZoneCnName : null;

        if (params.Types) {
            this.Types = new Array();
            for (let z in params.Types) {
                let obj = new AvailableType();
                obj.deserialize(params.Types[z]);
                this.Types.push(obj);
            }
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * 条件过滤
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 名称
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * UnbindAutoSnapshotPolicy请求参数结构体
 * @class
 */
class UnbindAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要解绑的文件系统ID列表，用"," 分割
         * @type {string || null}
         */
        this.FileSystemIds = null;

        /**
         * 解绑的快照ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemIds = 'FileSystemIds' in params ? params.FileSystemIds : null;
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;

    }
}

/**
 * UnbindAutoSnapshotPolicy返回参数结构体
 * @class
 */
class UnbindAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照策略ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfsServiceStatus返回参数结构体
 * @class
 */
class DescribeCfsServiceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该用户当前 CFS 服务的状态，none 为未开通，creating 为开通中，created 为已开通
         * @type {string || null}
         */
        this.CfsServiceStatus = null;

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
        this.CfsServiceStatus = 'CfsServiceStatus' in params ? params.CfsServiceStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 权限组规则列表
 * @class
 */
class PGroupRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 允许访问的客户端IP
         * @type {string || null}
         */
        this.AuthClientIp = null;

        /**
         * 读写权限, ro为只读，rw为读写
         * @type {string || null}
         */
        this.RWPermission = null;

        /**
         * 用户权限。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。
         * @type {string || null}
         */
        this.UserPermission = null;

        /**
         * 规则优先级，1-100。 其中 1 为最高，100为最低
         * @type {number || null}
         */
        this.Priority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * DescribeCfsSnapshots请求参数结构体
 * @class
 */
class DescribeCfsSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 快照ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 分页起始位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 页面长度
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 排序取值
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序 升序或者降序
         * @type {string || null}
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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
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
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * UpdateCfsFileSystemSizeLimit返回参数结构体
 * @class
 */
class UpdateCfsFileSystemSizeLimitResponse extends  AbstractModel {
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
 * UpdateAutoSnapshotPolicy请求参数结构体
 * @class
 */
class UpdateAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照策略ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

        /**
         * 快照策略名称
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 快照定期备份在一星期哪一天
         * @type {string || null}
         */
        this.DayOfWeek = null;

        /**
         * 快照定期备份在一天的哪一小时
         * @type {string || null}
         */
        this.Hour = null;

        /**
         * 快照保留日期
         * @type {number || null}
         */
        this.AliveDays = null;

        /**
         * 是否激活定期快照功能
         * @type {number || null}
         */
        this.IsActivated = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.DayOfWeek = 'DayOfWeek' in params ? params.DayOfWeek : null;
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.AliveDays = 'AliveDays' in params ? params.AliveDays : null;
        this.IsActivated = 'IsActivated' in params ? params.IsActivated : null;

    }
}

/**
 * UpdateCfsFileSystemSizeLimit请求参数结构体
 * @class
 */
class UpdateCfsFileSystemSizeLimitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统容量限制大小，输入范围0-1073741824, 单位为GB；其中输入值为0时，表示不限制文件系统容量。
         * @type {number || null}
         */
        this.FsLimit = null;

        /**
         * 文件系统ID，目前仅支持标准型文件系统。
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FsLimit = 'FsLimit' in params ? params.FsLimit : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * UpdateCfsRule返回参数结构体
 * @class
 */
class UpdateCfsRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 规则 ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 允许访问的客户端 IP 或者 IP 段
         * @type {string || null}
         */
        this.AuthClientIp = null;

        /**
         * 读写权限
         * @type {string || null}
         */
        this.RWPermission = null;

        /**
         * 用户权限
         * @type {string || null}
         */
        this.UserPermission = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.Priority = null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsPGroup请求参数结构体
 * @class
 */
class UpdateCfsPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 权限组描述信息，1-255个字符
         * @type {string || null}
         */
        this.DescInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;

    }
}

/**
 * UpdateAutoSnapshotPolicy返回参数结构体
 * @class
 */
class UpdateAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照策略ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 绑定快照策略的文件系统信息
 * @class
 */
class FileSystemByPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统名称
         * @type {string || null}
         */
        this.CreationToken = null;

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 文件系统大小
         * @type {number || null}
         */
        this.SizeByte = null;

        /**
         * 存储类型
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * 快照总大小
         * @type {number || null}
         */
        this.TotalSnapshotSize = null;

        /**
         * 文件系统创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 文件系统所在区ID
         * @type {number || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.SizeByte = 'SizeByte' in params ? params.SizeByte : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.TotalSnapshotSize = 'TotalSnapshotSize' in params ? params.TotalSnapshotSize : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * 快照信息
 * @class
 */
class SnapshotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建快照时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 快照名称
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 快照ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 快照状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 地域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 快照大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 保留时长天
         * @type {number || null}
         */
        this.AliveDay = null;

        /**
         * 快照进度
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * 帐号ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 快照删除时间
         * @type {string || null}
         */
        this.DeleteTime = null;

        /**
         * 文件系统名称
         * @type {string || null}
         */
        this.FsName = null;

        /**
         * 快照标签
         * @type {Array.<TagInfo> || null}
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
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.AliveDay = 'AliveDay' in params ? params.AliveDay : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;
        this.FsName = 'FsName' in params ? params.FsName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 挂载点信息
 * @class
 */
class MountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 挂载点 ID
         * @type {string || null}
         */
        this.MountTargetId = null;

        /**
         * 挂载点 IP
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * 挂载根目录
         * @type {string || null}
         */
        this.FSID = null;

        /**
         * 挂载点状态
         * @type {string || null}
         */
        this.LifeCycleState = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetworkInterface = null;

        /**
         * 私有网络 ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络名称
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 子网 Id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网名称
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * CFS Turbo使用的云联网ID
         * @type {string || null}
         */
        this.CcnID = null;

        /**
         * 云联网中CFS Turbo使用的网段
         * @type {string || null}
         */
        this.CidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.MountTargetId = 'MountTargetId' in params ? params.MountTargetId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.FSID = 'FSID' in params ? params.FSID : null;
        this.LifeCycleState = 'LifeCycleState' in params ? params.LifeCycleState : null;
        this.NetworkInterface = 'NetworkInterface' in params ? params.NetworkInterface : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CcnID = 'CcnID' in params ? params.CcnID : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;

    }
}

/**
 * CreateCfsSnapshot返回参数结构体
 * @class
 */
class CreateCfsSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统快照id
         * @type {string || null}
         */
        this.SnapshotId = null;

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemPGroup请求参数结构体
 * @class
 */
class UpdateCfsFileSystemPGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 文件系统 ID
         * @type {string || null}
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * DeleteAutoSnapshotPolicy返回参数结构体
 * @class
 */
class DeleteAutoSnapshotPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照策略ID
         * @type {string || null}
         */
        this.AutoSnapshotPolicyId = null;

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
        this.AutoSnapshotPolicyId = 'AutoSnapshotPolicyId' in params ? params.AutoSnapshotPolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCfsRule返回参数结构体
 * @class
 */
class DeleteCfsRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则 ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsSnapshotAttribute返回参数结构体
 * @class
 */
class UpdateCfsSnapshotAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统快照ID
         * @type {string || null}
         */
        this.SnapshotId = null;

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetUserQuota返回参数结构体
 * @class
 */
class SetUserQuotaResponse extends  AbstractModel {
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
 * Tag信息单元
 * @class
 */
class TagInfo extends  AbstractModel {
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
 * DescribeCfsPGroups请求参数结构体
 * @class
 */
class DescribeCfsPGroupsRequest extends  AbstractModel {
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
 * DeleteCfsPGroup返回参数结构体
 * @class
 */
class DeleteCfsPGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 用户 ID
         * @type {number || null}
         */
        this.AppId = null;

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
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserQuota返回参数结构体
 * @class
 */
class DescribeUserQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * UserQuota条目总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * UserQuota条目
         * @type {Array.<UserQuota> || null}
         */
        this.UserQuotaInfo = null;

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

        if (params.UserQuotaInfo) {
            this.UserQuotaInfo = new Array();
            for (let z in params.UserQuotaInfo) {
                let obj = new UserQuota();
                obj.deserialize(params.UserQuotaInfo[z]);
                this.UserQuotaInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 权限组数组
 * @class
 */
class PGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 权限组名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述信息
         * @type {string || null}
         */
        this.DescInfo = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CDate = null;

        /**
         * 关联文件系统个数
         * @type {number || null}
         */
        this.BindCfsNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;
        this.CDate = 'CDate' in params ? params.CDate : null;
        this.BindCfsNum = 'BindCfsNum' in params ? params.BindCfsNum : null;

    }
}

/**
 * CreateCfsRule返回参数结构体
 * @class
 */
class CreateCfsRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则 ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 客户端 IP
         * @type {string || null}
         */
        this.AuthClientIp = null;

        /**
         * 读写权限
         * @type {string || null}
         */
        this.RWPermission = null;

        /**
         * 用户权限
         * @type {string || null}
         */
        this.UserPermission = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.Priority = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfsSnapshots返回参数结构体
 * @class
 */
class DescribeCfsSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 快照信息描述
         * @type {Array.<SnapshotInfo> || null}
         */
        this.Snapshots = null;

        /**
         * 快照列表快照汇总
         * @type {number || null}
         */
        this.TotalSize = null;

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

        if (params.Snapshots) {
            this.Snapshots = new Array();
            for (let z in params.Snapshots) {
                let obj = new SnapshotInfo();
                obj.deserialize(params.Snapshots[z]);
                this.Snapshots.push(obj);
            }
        }
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAutoSnapshotPolicies返回参数结构体
 * @class
 */
class DescribeAutoSnapshotPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照策略总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 快照策略信息
         * @type {Array.<AutoSnapshotPolicyInfo> || null}
         */
        this.AutoSnapshotPolicies = null;

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

        if (params.AutoSnapshotPolicies) {
            this.AutoSnapshotPolicies = new Array();
            for (let z in params.AutoSnapshotPolicies) {
                let obj = new AutoSnapshotPolicyInfo();
                obj.deserialize(params.AutoSnapshotPolicies[z]);
                this.AutoSnapshotPolicies.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfsSnapshotOverview请求参数结构体
 * @class
 */
class DescribeCfsSnapshotOverviewRequest extends  AbstractModel {
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
 * CreateAutoSnapshotPolicy请求参数结构体
 * @class
 */
class CreateAutoSnapshotPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照重复日期，星期一到星期日
         * @type {string || null}
         */
        this.DayOfWeek = null;

        /**
         * 快照重复时间点
         * @type {string || null}
         */
        this.Hour = null;

        /**
         * 策略名称
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 快照保留时长
         * @type {number || null}
         */
        this.AliveDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DayOfWeek = 'DayOfWeek' in params ? params.DayOfWeek : null;
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.AliveDays = 'AliveDays' in params ? params.AliveDays : null;

    }
}

module.exports = {
    SnapshotStatistics: SnapshotStatistics,
    DescribeCfsPGroupsResponse: DescribeCfsPGroupsResponse,
    DescribeMountTargetsResponse: DescribeMountTargetsResponse,
    DescribeSnapshotOperationLogsRequest: DescribeSnapshotOperationLogsRequest,
    FileSystemClient: FileSystemClient,
    DescribeCfsFileSystemsResponse: DescribeCfsFileSystemsResponse,
    CreateCfsFileSystemResponse: CreateCfsFileSystemResponse,
    FileSystemInfo: FileSystemInfo,
    BindAutoSnapshotPolicyRequest: BindAutoSnapshotPolicyRequest,
    CreateCfsPGroupRequest: CreateCfsPGroupRequest,
    DescribeAutoSnapshotPoliciesRequest: DescribeAutoSnapshotPoliciesRequest,
    DescribeAvailableZoneInfoRequest: DescribeAvailableZoneInfoRequest,
    DescribeMountTargetsRequest: DescribeMountTargetsRequest,
    BindAutoSnapshotPolicyResponse: BindAutoSnapshotPolicyResponse,
    SignUpCfsServiceRequest: SignUpCfsServiceRequest,
    SignUpCfsServiceResponse: SignUpCfsServiceResponse,
    AutoSnapshotPolicyInfo: AutoSnapshotPolicyInfo,
    DescribeCfsRulesRequest: DescribeCfsRulesRequest,
    DeleteCfsPGroupRequest: DeleteCfsPGroupRequest,
    UpdateCfsPGroupResponse: UpdateCfsPGroupResponse,
    DeleteAutoSnapshotPolicyRequest: DeleteAutoSnapshotPolicyRequest,
    DeleteCfsFileSystemResponse: DeleteCfsFileSystemResponse,
    UpdateCfsRuleRequest: UpdateCfsRuleRequest,
    DeleteUserQuotaRequest: DeleteUserQuotaRequest,
    DescribeAvailableZoneInfoResponse: DescribeAvailableZoneInfoResponse,
    DeleteCfsSnapshotResponse: DeleteCfsSnapshotResponse,
    DescribeCfsFileSystemClientsResponse: DescribeCfsFileSystemClientsResponse,
    DeleteMountTargetResponse: DeleteMountTargetResponse,
    CreateCfsSnapshotRequest: CreateCfsSnapshotRequest,
    DeleteCfsRuleRequest: DeleteCfsRuleRequest,
    DescribeCfsRulesResponse: DescribeCfsRulesResponse,
    DescribeSnapshotOperationLogsResponse: DescribeSnapshotOperationLogsResponse,
    UpdateCfsFileSystemPGroupResponse: UpdateCfsFileSystemPGroupResponse,
    DeleteCfsFileSystemRequest: DeleteCfsFileSystemRequest,
    CreateCfsPGroupResponse: CreateCfsPGroupResponse,
    DescribeCfsServiceStatusRequest: DescribeCfsServiceStatusRequest,
    DeleteUserQuotaResponse: DeleteUserQuotaResponse,
    PGroup: PGroup,
    SetUserQuotaRequest: SetUserQuotaRequest,
    CreateAutoSnapshotPolicyResponse: CreateAutoSnapshotPolicyResponse,
    AvailableType: AvailableType,
    UpdateCfsSnapshotAttributeRequest: UpdateCfsSnapshotAttributeRequest,
    UserQuota: UserQuota,
    DeleteMountTargetRequest: DeleteMountTargetRequest,
    CreateCfsRuleRequest: CreateCfsRuleRequest,
    UpdateCfsFileSystemNameRequest: UpdateCfsFileSystemNameRequest,
    SnapshotOperateLog: SnapshotOperateLog,
    DescribeUserQuotaRequest: DescribeUserQuotaRequest,
    UpdateCfsFileSystemNameResponse: UpdateCfsFileSystemNameResponse,
    DescribeCfsSnapshotOverviewResponse: DescribeCfsSnapshotOverviewResponse,
    DeleteCfsSnapshotRequest: DeleteCfsSnapshotRequest,
    DescribeCfsFileSystemClientsRequest: DescribeCfsFileSystemClientsRequest,
    AvailableProtoStatus: AvailableProtoStatus,
    DescribeCfsFileSystemsRequest: DescribeCfsFileSystemsRequest,
    AvailableRegion: AvailableRegion,
    CreateCfsFileSystemRequest: CreateCfsFileSystemRequest,
    AvailableZone: AvailableZone,
    Filter: Filter,
    UnbindAutoSnapshotPolicyRequest: UnbindAutoSnapshotPolicyRequest,
    UnbindAutoSnapshotPolicyResponse: UnbindAutoSnapshotPolicyResponse,
    DescribeCfsServiceStatusResponse: DescribeCfsServiceStatusResponse,
    PGroupRuleInfo: PGroupRuleInfo,
    DescribeCfsSnapshotsRequest: DescribeCfsSnapshotsRequest,
    UpdateCfsFileSystemSizeLimitResponse: UpdateCfsFileSystemSizeLimitResponse,
    UpdateAutoSnapshotPolicyRequest: UpdateAutoSnapshotPolicyRequest,
    UpdateCfsFileSystemSizeLimitRequest: UpdateCfsFileSystemSizeLimitRequest,
    UpdateCfsRuleResponse: UpdateCfsRuleResponse,
    UpdateCfsPGroupRequest: UpdateCfsPGroupRequest,
    UpdateAutoSnapshotPolicyResponse: UpdateAutoSnapshotPolicyResponse,
    FileSystemByPolicy: FileSystemByPolicy,
    SnapshotInfo: SnapshotInfo,
    MountInfo: MountInfo,
    CreateCfsSnapshotResponse: CreateCfsSnapshotResponse,
    UpdateCfsFileSystemPGroupRequest: UpdateCfsFileSystemPGroupRequest,
    DeleteAutoSnapshotPolicyResponse: DeleteAutoSnapshotPolicyResponse,
    DeleteCfsRuleResponse: DeleteCfsRuleResponse,
    UpdateCfsSnapshotAttributeResponse: UpdateCfsSnapshotAttributeResponse,
    SetUserQuotaResponse: SetUserQuotaResponse,
    TagInfo: TagInfo,
    DescribeCfsPGroupsRequest: DescribeCfsPGroupsRequest,
    DeleteCfsPGroupResponse: DeleteCfsPGroupResponse,
    DescribeUserQuotaResponse: DescribeUserQuotaResponse,
    PGroupInfo: PGroupInfo,
    CreateCfsRuleResponse: CreateCfsRuleResponse,
    DescribeCfsSnapshotsResponse: DescribeCfsSnapshotsResponse,
    DescribeAutoSnapshotPoliciesResponse: DescribeAutoSnapshotPoliciesResponse,
    DescribeCfsSnapshotOverviewRequest: DescribeCfsSnapshotOverviewRequest,
    CreateAutoSnapshotPolicyRequest: CreateAutoSnapshotPolicyRequest,

}
