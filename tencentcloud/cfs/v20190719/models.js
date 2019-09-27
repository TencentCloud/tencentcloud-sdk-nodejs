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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
         * 文件系统状态
         * @type {string || null}
         */
        this.LifeCycleState = null;

        /**
         * 文件系统已使用容量大小
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
         * 文件系统绑定的预付费存储包（暂未支持）
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
         * 网络类型，值为 VPC，BASIC；其中 VPC 为私有网络，BASIC 为基础网络
         * @type {string || null}
         */
        this.NetInterface = null;

        /**
         * 权限组 ID
         * @type {string || null}
         */
        this.PGroupId = null;

        /**
         * 文件系统协议类型， 值为 NFS、CIFS; 若留空则默认为 NFS协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 文件系统存储类型，值为 SD ；其中 SD 为标准型存储
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * 私有网路（VPC） ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 指定IP地址，仅VPC网络支持；若不填写、将在该子网下随机分配 IP
         * @type {string || null}
         */
        this.MountIP = null;

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
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NetInterface = 'NetInterface' in params ? params.NetInterface : null;
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.MountIP = 'MountIP' in params ? params.MountIP : null;
        this.FsName = 'FsName' in params ? params.FsName : null;

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
 * SignUpCfsService返回参数结构体
 * @class
 */
class SignUpCfsServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该用户当前 CFS 服务的状态，none 是未开通，creating 是开通中，created 是已开通
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
         * 存储类型。可选值有 SD 标准型存储、HP性能型存储
         * @type {string || null}
         */
        this.Type = null;

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
         * 文件系统ID
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

module.exports = {
    DeleteCfsFileSystemRequest: DeleteCfsFileSystemRequest,
    DeleteCfsFileSystemResponse: DeleteCfsFileSystemResponse,
    UpdateCfsRuleRequest: UpdateCfsRuleRequest,
    DeleteMountTargetRequest: DeleteMountTargetRequest,
    CreateCfsRuleRequest: CreateCfsRuleRequest,
    PGroup: PGroup,
    DescribeAvailableZoneInfoResponse: DescribeAvailableZoneInfoResponse,
    UpdateCfsFileSystemNameResponse: UpdateCfsFileSystemNameResponse,
    UpdateCfsFileSystemNameRequest: UpdateCfsFileSystemNameRequest,
    DescribeCfsPGroupsResponse: DescribeCfsPGroupsResponse,
    UpdateCfsPGroupRequest: UpdateCfsPGroupRequest,
    DeleteMountTargetResponse: DeleteMountTargetResponse,
    DescribeMountTargetsResponse: DescribeMountTargetsResponse,
    DeleteCfsRuleResponse: DeleteCfsRuleResponse,
    DeleteCfsRuleRequest: DeleteCfsRuleRequest,
    MountInfo: MountInfo,
    UpdateCfsRuleResponse: UpdateCfsRuleResponse,
    DescribeCfsFileSystemsResponse: DescribeCfsFileSystemsResponse,
    CreateCfsFileSystemResponse: CreateCfsFileSystemResponse,
    FileSystemInfo: FileSystemInfo,
    DescribeCfsPGroupsRequest: DescribeCfsPGroupsRequest,
    AvailableZone: AvailableZone,
    CreateCfsPGroupRequest: CreateCfsPGroupRequest,
    DeleteCfsPGroupResponse: DeleteCfsPGroupResponse,
    UpdateCfsFileSystemSizeLimitResponse: UpdateCfsFileSystemSizeLimitResponse,
    DescribeAvailableZoneInfoRequest: DescribeAvailableZoneInfoRequest,
    AvailableRegion: AvailableRegion,
    CreateCfsFileSystemRequest: CreateCfsFileSystemRequest,
    DescribeMountTargetsRequest: DescribeMountTargetsRequest,
    CreateCfsPGroupResponse: CreateCfsPGroupResponse,
    SignUpCfsServiceRequest: SignUpCfsServiceRequest,
    DescribeCfsServiceStatusRequest: DescribeCfsServiceStatusRequest,
    PGroupInfo: PGroupInfo,
    SignUpCfsServiceResponse: SignUpCfsServiceResponse,
    UpdateCfsFileSystemPGroupRequest: UpdateCfsFileSystemPGroupRequest,
    DescribeCfsServiceStatusResponse: DescribeCfsServiceStatusResponse,
    CreateCfsRuleResponse: CreateCfsRuleResponse,
    AvailableProtoStatus: AvailableProtoStatus,
    DescribeCfsRulesRequest: DescribeCfsRulesRequest,
    PGroupRuleInfo: PGroupRuleInfo,
    DeleteCfsPGroupRequest: DeleteCfsPGroupRequest,
    AvailableType: AvailableType,
    UpdateCfsFileSystemSizeLimitRequest: UpdateCfsFileSystemSizeLimitRequest,
    DescribeCfsFileSystemsRequest: DescribeCfsFileSystemsRequest,
    UpdateCfsPGroupResponse: UpdateCfsPGroupResponse,
    DescribeCfsRulesResponse: DescribeCfsRulesResponse,
    UpdateCfsFileSystemPGroupResponse: UpdateCfsFileSystemPGroupResponse,

}
