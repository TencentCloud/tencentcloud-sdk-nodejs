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
 * CreateFileSystem返回参数结构体
 * @class
 */
class CreateFileSystemResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统
         * @type {FileSystem || null}
         */
        this.FileSystem = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FileSystem) {
            let obj = new FileSystem();
            obj.deserialize(params.FileSystem)
            this.FileSystem = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 权限规则
 * @class
 */
class AccessRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限规则ID
         * @type {number || null}
         */
        this.AccessRuleId = null;

        /**
         * 权限规则地址（网段或IP）
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 权限规则访问模式（1：只读；2：读写）
         * @type {number || null}
         */
        this.AccessMode = null;

        /**
         * 优先级（取值范围1~100，值越小优先级越高）
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 创建时间
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
        this.AccessRuleId = 'AccessRuleId' in params ? params.AccessRuleId : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.AccessMode = 'AccessMode' in params ? params.AccessMode : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeFileSystem返回参数结构体
 * @class
 */
class DescribeFileSystemResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统
         * @type {FileSystem || null}
         */
        this.FileSystem = null;

        /**
         * 文件系统已使用容量（已弃用）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileSystemCapacityUsed = null;

        /**
         * 已使用容量（byte），包括标准和归档存储
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CapacityUsed = null;

        /**
         * 已使用归档存储容量（byte）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ArchiveCapacityUsed = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FileSystem) {
            let obj = new FileSystem();
            obj.deserialize(params.FileSystem)
            this.FileSystem = obj;
        }
        this.FileSystemCapacityUsed = 'FileSystemCapacityUsed' in params ? params.FileSystemCapacityUsed : null;
        this.CapacityUsed = 'CapacityUsed' in params ? params.CapacityUsed : null;
        this.ArchiveCapacityUsed = 'ArchiveCapacityUsed' in params ? params.ArchiveCapacityUsed : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 权限组
 * @class
 */
class AccessGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

        /**
         * 权限组名称
         * @type {string || null}
         */
        this.AccessGroupName = null;

        /**
         * 权限组描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
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
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;
        this.AccessGroupName = 'AccessGroupName' in params ? params.AccessGroupName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * ModifyFileSystem返回参数结构体
 * @class
 */
class ModifyFileSystemResponse extends  AbstractModel {
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
 * ModifyFileSystem请求参数结构体
 * @class
 */
class ModifyFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 文件系统名称
         * @type {string || null}
         */
        this.FileSystemName = null;

        /**
         * 文件系统描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 文件系统容量（byte），下限为1G，上限为1P，且必须是1G的整数倍
注意：修改的文件系统容量不能小于当前使用量
         * @type {number || null}
         */
        this.CapacityQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FileSystemName = 'FileSystemName' in params ? params.FileSystemName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CapacityQuota = 'CapacityQuota' in params ? params.CapacityQuota : null;

    }
}

/**
 * DescribeLifeCycleRules请求参数结构体
 * @class
 */
class DescribeLifeCycleRulesRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * ModifyAccessGroup请求参数结构体
 * @class
 */
class ModifyAccessGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

        /**
         * 权限组名称
         * @type {string || null}
         */
        this.AccessGroupName = null;

        /**
         * 权限组描述
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
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;
        this.AccessGroupName = 'AccessGroupName' in params ? params.AccessGroupName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeFileSystems返回参数结构体
 * @class
 */
class DescribeFileSystemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统列表
         * @type {Array.<FileSystem> || null}
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
                let obj = new FileSystem();
                obj.deserialize(params.FileSystems[z]);
                this.FileSystems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFileSystem请求参数结构体
 * @class
 */
class DescribeFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * CreateMountPoint请求参数结构体
 * @class
 */
class CreateMountPointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 挂载点名称
         * @type {string || null}
         */
        this.MountPointName = null;

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 权限组ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

        /**
         * VPC网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 挂载点状态（1：打开；2：关闭）
         * @type {number || null}
         */
        this.MountPointStatus = null;

        /**
         * VPC网络类型（1：CVM；2：黑石1.0；3：黑石2.0）
         * @type {number || null}
         */
        this.VpcType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointName = 'MountPointName' in params ? params.MountPointName : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.MountPointStatus = 'MountPointStatus' in params ? params.MountPointStatus : null;
        this.VpcType = 'VpcType' in params ? params.VpcType : null;

    }
}

/**
 * DeleteAccessGroup请求参数结构体
 * @class
 */
class DeleteAccessGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;

    }
}

/**
 * ModifyLifeCycleRules请求参数结构体
 * @class
 */
class ModifyLifeCycleRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 多个生命周期规则，上限为10
         * @type {Array.<LifeCycleRule> || null}
         */
        this.LifeCycleRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LifeCycleRules) {
            this.LifeCycleRules = new Array();
            for (let z in params.LifeCycleRules) {
                let obj = new LifeCycleRule();
                obj.deserialize(params.LifeCycleRules[z]);
                this.LifeCycleRules.push(obj);
            }
        }

    }
}

/**
 * CreateRestoreTasks返回参数结构体
 * @class
 */
class CreateRestoreTasksResponse extends  AbstractModel {
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
 * DeleteFileSystem请求参数结构体
 * @class
 */
class DeleteFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * DescribeMountPoints请求参数结构体
 * @class
 */
class DescribeMountPointsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统ID
注意：若根据AccessGroupId查看挂载点列表，则无需设置FileSystemId
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 权限组ID
注意：若根据FileSystemId查看挂载点列表，则无需设置AccessGroupId
         * @type {string || null}
         */
        this.AccessGroupId = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为所有
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
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeMountPoint请求参数结构体
 * @class
 */
class DescribeMountPointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 挂载点ID
         * @type {string || null}
         */
        this.MountPointId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointId = 'MountPointId' in params ? params.MountPointId : null;

    }
}

/**
 * DescribeAccessGroups请求参数结构体
 * @class
 */
class DescribeAccessGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，Name可选“AccessGroupId“和“AccessGroupName”，Values上限为10
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为所有
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
 * DeleteAccessGroup返回参数结构体
 * @class
 */
class DeleteAccessGroupResponse extends  AbstractModel {
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
 * ModifyLifeCycleRules返回参数结构体
 * @class
 */
class ModifyLifeCycleRulesResponse extends  AbstractModel {
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
 * DeleteMountPoint返回参数结构体
 * @class
 */
class DeleteMountPointResponse extends  AbstractModel {
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
 * CreateMountPoint返回参数结构体
 * @class
 */
class CreateMountPointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 挂载点
         * @type {MountPoint || null}
         */
        this.MountPoint = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MountPoint) {
            let obj = new MountPoint();
            obj.deserialize(params.MountPoint)
            this.MountPoint = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFileSystem请求参数结构体
 * @class
 */
class CreateFileSystemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统名称
         * @type {string || null}
         */
        this.FileSystemName = null;

        /**
         * 文件系统容量（byte），下限为1G，上限为1P，且必须是1G的整数倍
         * @type {number || null}
         */
        this.CapacityQuota = null;

        /**
         * 文件系统描述
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
        this.FileSystemName = 'FileSystemName' in params ? params.FileSystemName : null;
        this.CapacityQuota = 'CapacityQuota' in params ? params.CapacityQuota : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * ModifyResourceTags请求参数结构体
 * @class
 */
class ModifyResourceTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 多个资源标签，可以为空数组
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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

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
 * DescribeResourceTags返回参数结构体
 * @class
 */
class DescribeResourceTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessGroups返回参数结构体
 * @class
 */
class DescribeAccessGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组列表
         * @type {Array.<AccessGroup> || null}
         */
        this.AccessGroups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccessGroups) {
            this.AccessGroups = new Array();
            for (let z in params.AccessGroups) {
                let obj = new AccessGroup();
                obj.deserialize(params.AccessGroups[z]);
                this.AccessGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMountPoint请求参数结构体
 * @class
 */
class DeleteMountPointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 挂载点ID
         * @type {string || null}
         */
        this.MountPointId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointId = 'MountPointId' in params ? params.MountPointId : null;

    }
}

/**
 * DeleteFileSystem返回参数结构体
 * @class
 */
class DeleteFileSystemResponse extends  AbstractModel {
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
 * CreateLifeCycleRules请求参数结构体
 * @class
 */
class CreateLifeCycleRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 多个生命周期规则，上限为10
         * @type {Array.<LifeCycleRule> || null}
         */
        this.LifeCycleRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

        if (params.LifeCycleRules) {
            this.LifeCycleRules = new Array();
            for (let z in params.LifeCycleRules) {
                let obj = new LifeCycleRule();
                obj.deserialize(params.LifeCycleRules[z]);
                this.LifeCycleRules.push(obj);
            }
        }

    }
}

/**
 * 过滤条件
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤值
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
 * CreateAccessGroup返回参数结构体
 * @class
 */
class CreateAccessGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组
         * @type {AccessGroup || null}
         */
        this.AccessGroup = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccessGroup) {
            let obj = new AccessGroup();
            obj.deserialize(params.AccessGroup)
            this.AccessGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLifeCycleRules请求参数结构体
 * @class
 */
class DeleteLifeCycleRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 多个生命周期规则ID，上限为10
         * @type {Array.<number> || null}
         */
        this.LifeCycleRuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LifeCycleRuleIds = 'LifeCycleRuleIds' in params ? params.LifeCycleRuleIds : null;

    }
}

/**
 * 文件系统
 * @class
 */
class FileSystem extends  AbstractModel {
    constructor(){
        super();

        /**
         * appid
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 文件系统名称
         * @type {string || null}
         */
        this.FileSystemName = null;

        /**
         * 文件系统描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 文件系统块大小（byte）
         * @type {number || null}
         */
        this.BlockSize = null;

        /**
         * 文件系统容量（byte）
         * @type {number || null}
         */
        this.CapacityQuota = null;

        /**
         * 文件系统状态（1：创建中；2：创建成功；3：创建失败）
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.FileSystemName = 'FileSystemName' in params ? params.FileSystemName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BlockSize = 'BlockSize' in params ? params.BlockSize : null;
        this.CapacityQuota = 'CapacityQuota' in params ? params.CapacityQuota : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 回热任务
 * @class
 */
class RestoreTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回热任务ID
         * @type {number || null}
         */
        this.RestoreTaskId = null;

        /**
         * 回热任务文件路径
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 回热任务类型（1：标准；2：极速；3：批量）
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 指定恢复出的临时副本的有效时长（单位天）
         * @type {number || null}
         */
        this.Days = null;

        /**
         * 回热任务状态（1：绑定文件中；2：绑定文件完成；3：文件回热中；4：文件回热完成）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
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
        this.RestoreTaskId = 'RestoreTaskId' in params ? params.RestoreTaskId : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Days = 'Days' in params ? params.Days : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * ModifyMountPoint请求参数结构体
 * @class
 */
class ModifyMountPointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 挂载点ID
         * @type {string || null}
         */
        this.MountPointId = null;

        /**
         * 挂载点名称
         * @type {string || null}
         */
        this.MountPointName = null;

        /**
         * 挂载点状态
         * @type {number || null}
         */
        this.MountPointStatus = null;

        /**
         * 权限组ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointId = 'MountPointId' in params ? params.MountPointId : null;
        this.MountPointName = 'MountPointName' in params ? params.MountPointName : null;
        this.MountPointStatus = 'MountPointStatus' in params ? params.MountPointStatus : null;
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;

    }
}

/**
 * DeleteLifeCycleRules返回参数结构体
 * @class
 */
class DeleteLifeCycleRulesResponse extends  AbstractModel {
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
 * CreateRestoreTasks请求参数结构体
 * @class
 */
class CreateRestoreTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 多个回热任务，上限为10
         * @type {Array.<RestoreTask> || null}
         */
        this.RestoreTasks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

        if (params.RestoreTasks) {
            this.RestoreTasks = new Array();
            for (let z in params.RestoreTasks) {
                let obj = new RestoreTask();
                obj.deserialize(params.RestoreTasks[z]);
                this.RestoreTasks.push(obj);
            }
        }

    }
}

/**
 * 生命周期规则转换属性
 * @class
 */
class Transition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发时间（单位天）
         * @type {number || null}
         */
        this.Days = null;

        /**
         * 转换类型（1：归档；2：删除）
         * @type {number || null}
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
        this.Days = 'Days' in params ? params.Days : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeRestoreTasks返回参数结构体
 * @class
 */
class DescribeRestoreTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回热任务列表
         * @type {Array.<RestoreTask> || null}
         */
        this.RestoreTasks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RestoreTasks) {
            this.RestoreTasks = new Array();
            for (let z in params.RestoreTasks) {
                let obj = new RestoreTask();
                obj.deserialize(params.RestoreTasks[z]);
                this.RestoreTasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLifeCycleRules返回参数结构体
 * @class
 */
class DescribeLifeCycleRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期规则列表
         * @type {Array.<LifeCycleRule> || null}
         */
        this.LifeCycleRules = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LifeCycleRules) {
            this.LifeCycleRules = new Array();
            for (let z in params.LifeCycleRules) {
                let obj = new LifeCycleRule();
                obj.deserialize(params.LifeCycleRules[z]);
                this.LifeCycleRules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAccessRules返回参数结构体
 * @class
 */
class CreateAccessRulesResponse extends  AbstractModel {
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
 * DeleteAccessRules请求参数结构体
 * @class
 */
class DeleteAccessRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 多个权限规则ID，上限为10
         * @type {Array.<number> || null}
         */
        this.AccessRuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessRuleIds = 'AccessRuleIds' in params ? params.AccessRuleIds : null;

    }
}

/**
 * DeleteAccessRules返回参数结构体
 * @class
 */
class DeleteAccessRulesResponse extends  AbstractModel {
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
 * DescribeFileSystems请求参数结构体
 * @class
 */
class DescribeFileSystemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为所有
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeResourceTags请求参数结构体
 * @class
 */
class DescribeResourceTagsRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * ModifyResourceTags返回参数结构体
 * @class
 */
class ModifyResourceTagsResponse extends  AbstractModel {
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
 * 生命周期规则
 * @class
 */
class LifeCycleRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生命周期规则ID
         * @type {number || null}
         */
        this.LifeCycleRuleId = null;

        /**
         * 生命周期规则名称
         * @type {string || null}
         */
        this.LifeCycleRuleName = null;

        /**
         * 生命周期规则路径（目录或文件）
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 生命周期规则转换列表
         * @type {Array.<Transition> || null}
         */
        this.Transitions = null;

        /**
         * 生命周期规则状态（1：打开；2：关闭）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
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
        this.LifeCycleRuleId = 'LifeCycleRuleId' in params ? params.LifeCycleRuleId : null;
        this.LifeCycleRuleName = 'LifeCycleRuleName' in params ? params.LifeCycleRuleName : null;
        this.Path = 'Path' in params ? params.Path : null;

        if (params.Transitions) {
            this.Transitions = new Array();
            for (let z in params.Transitions) {
                let obj = new Transition();
                obj.deserialize(params.Transitions[z]);
                this.Transitions.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * CreateAccessRules请求参数结构体
 * @class
 */
class CreateAccessRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 多个权限规则，上限为10
         * @type {Array.<AccessRule> || null}
         */
        this.AccessRules = null;

        /**
         * 权限组ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccessRules) {
            this.AccessRules = new Array();
            for (let z in params.AccessRules) {
                let obj = new AccessRule();
                obj.deserialize(params.AccessRules[z]);
                this.AccessRules.push(obj);
            }
        }
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;

    }
}

/**
 * DescribeAccessRules返回参数结构体
 * @class
 */
class DescribeAccessRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限规则列表
         * @type {Array.<AccessRule> || null}
         */
        this.AccessRules = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccessRules) {
            this.AccessRules = new Array();
            for (let z in params.AccessRules) {
                let obj = new AccessRule();
                obj.deserialize(params.AccessRules[z]);
                this.AccessRules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 挂载点
 * @class
 */
class MountPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 挂载点ID
         * @type {string || null}
         */
        this.MountPointId = null;

        /**
         * 挂载点名称
         * @type {string || null}
         */
        this.MountPointName = null;

        /**
         * 文件系统ID
         * @type {string || null}
         */
        this.FileSystemId = null;

        /**
         * 权限组ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

        /**
         * VPC网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 挂载点状态（1：打开；2：关闭）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * VPC网络类型
         * @type {number || null}
         */
        this.VpcType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountPointId = 'MountPointId' in params ? params.MountPointId : null;
        this.MountPointName = 'MountPointName' in params ? params.MountPointName : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.VpcType = 'VpcType' in params ? params.VpcType : null;

    }
}

/**
 * DescribeMountPoints返回参数结构体
 * @class
 */
class DescribeMountPointsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 挂载点列表
         * @type {Array.<MountPoint> || null}
         */
        this.MountPoints = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MountPoints) {
            this.MountPoints = new Array();
            for (let z in params.MountPoints) {
                let obj = new MountPoint();
                obj.deserialize(params.MountPoints[z]);
                this.MountPoints.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRestoreTasks请求参数结构体
 * @class
 */
class DescribeRestoreTasksRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * DescribeAccessRules请求参数结构体
 * @class
 */
class DescribeAccessRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组ID
         * @type {string || null}
         */
        this.AccessGroupId = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为所有
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
        this.AccessGroupId = 'AccessGroupId' in params ? params.AccessGroupId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyAccessRules返回参数结构体
 * @class
 */
class ModifyAccessRulesResponse extends  AbstractModel {
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
 * CreateLifeCycleRules返回参数结构体
 * @class
 */
class CreateLifeCycleRulesResponse extends  AbstractModel {
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
 * ModifyAccessGroup返回参数结构体
 * @class
 */
class ModifyAccessGroupResponse extends  AbstractModel {
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
 * 资源标签。
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
 * ModifyMountPoint返回参数结构体
 * @class
 */
class ModifyMountPointResponse extends  AbstractModel {
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
 * ModifyAccessRules请求参数结构体
 * @class
 */
class ModifyAccessRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 多个权限规则，上限为10
         * @type {Array.<AccessRule> || null}
         */
        this.AccessRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccessRules) {
            this.AccessRules = new Array();
            for (let z in params.AccessRules) {
                let obj = new AccessRule();
                obj.deserialize(params.AccessRules[z]);
                this.AccessRules.push(obj);
            }
        }

    }
}

/**
 * CreateAccessGroup请求参数结构体
 * @class
 */
class CreateAccessGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限组名称
         * @type {string || null}
         */
        this.AccessGroupName = null;

        /**
         * 权限组描述
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
        this.AccessGroupName = 'AccessGroupName' in params ? params.AccessGroupName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeMountPoint返回参数结构体
 * @class
 */
class DescribeMountPointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 挂载点
         * @type {MountPoint || null}
         */
        this.MountPoint = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MountPoint) {
            let obj = new MountPoint();
            obj.deserialize(params.MountPoint)
            this.MountPoint = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateFileSystemResponse: CreateFileSystemResponse,
    AccessRule: AccessRule,
    DescribeFileSystemResponse: DescribeFileSystemResponse,
    AccessGroup: AccessGroup,
    ModifyFileSystemResponse: ModifyFileSystemResponse,
    ModifyFileSystemRequest: ModifyFileSystemRequest,
    DescribeLifeCycleRulesRequest: DescribeLifeCycleRulesRequest,
    ModifyAccessGroupRequest: ModifyAccessGroupRequest,
    DescribeFileSystemsResponse: DescribeFileSystemsResponse,
    DescribeFileSystemRequest: DescribeFileSystemRequest,
    CreateMountPointRequest: CreateMountPointRequest,
    DeleteAccessGroupRequest: DeleteAccessGroupRequest,
    ModifyLifeCycleRulesRequest: ModifyLifeCycleRulesRequest,
    CreateRestoreTasksResponse: CreateRestoreTasksResponse,
    DeleteFileSystemRequest: DeleteFileSystemRequest,
    DescribeMountPointsRequest: DescribeMountPointsRequest,
    DescribeMountPointRequest: DescribeMountPointRequest,
    DescribeAccessGroupsRequest: DescribeAccessGroupsRequest,
    DeleteAccessGroupResponse: DeleteAccessGroupResponse,
    ModifyLifeCycleRulesResponse: ModifyLifeCycleRulesResponse,
    DeleteMountPointResponse: DeleteMountPointResponse,
    CreateMountPointResponse: CreateMountPointResponse,
    CreateFileSystemRequest: CreateFileSystemRequest,
    ModifyResourceTagsRequest: ModifyResourceTagsRequest,
    DescribeResourceTagsResponse: DescribeResourceTagsResponse,
    DescribeAccessGroupsResponse: DescribeAccessGroupsResponse,
    DeleteMountPointRequest: DeleteMountPointRequest,
    DeleteFileSystemResponse: DeleteFileSystemResponse,
    CreateLifeCycleRulesRequest: CreateLifeCycleRulesRequest,
    Filter: Filter,
    CreateAccessGroupResponse: CreateAccessGroupResponse,
    DeleteLifeCycleRulesRequest: DeleteLifeCycleRulesRequest,
    FileSystem: FileSystem,
    RestoreTask: RestoreTask,
    ModifyMountPointRequest: ModifyMountPointRequest,
    DeleteLifeCycleRulesResponse: DeleteLifeCycleRulesResponse,
    CreateRestoreTasksRequest: CreateRestoreTasksRequest,
    Transition: Transition,
    DescribeRestoreTasksResponse: DescribeRestoreTasksResponse,
    DescribeLifeCycleRulesResponse: DescribeLifeCycleRulesResponse,
    CreateAccessRulesResponse: CreateAccessRulesResponse,
    DeleteAccessRulesRequest: DeleteAccessRulesRequest,
    DeleteAccessRulesResponse: DeleteAccessRulesResponse,
    DescribeFileSystemsRequest: DescribeFileSystemsRequest,
    DescribeResourceTagsRequest: DescribeResourceTagsRequest,
    ModifyResourceTagsResponse: ModifyResourceTagsResponse,
    LifeCycleRule: LifeCycleRule,
    CreateAccessRulesRequest: CreateAccessRulesRequest,
    DescribeAccessRulesResponse: DescribeAccessRulesResponse,
    MountPoint: MountPoint,
    DescribeMountPointsResponse: DescribeMountPointsResponse,
    DescribeRestoreTasksRequest: DescribeRestoreTasksRequest,
    DescribeAccessRulesRequest: DescribeAccessRulesRequest,
    ModifyAccessRulesResponse: ModifyAccessRulesResponse,
    CreateLifeCycleRulesResponse: CreateLifeCycleRulesResponse,
    ModifyAccessGroupResponse: ModifyAccessGroupResponse,
    Tag: Tag,
    ModifyMountPointResponse: ModifyMountPointResponse,
    ModifyAccessRulesRequest: ModifyAccessRulesRequest,
    CreateAccessGroupRequest: CreateAccessGroupRequest,
    DescribeMountPointResponse: DescribeMountPointResponse,

}
