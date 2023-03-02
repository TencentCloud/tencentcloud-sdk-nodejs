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
 * ModifyLibrary返回参数结构体
 * @class
 */
class ModifyLibraryResponse extends  AbstractModel {
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
 * DescribeLibraries返回参数结构体
 * @class
 */
class DescribeLibrariesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体库列表
         * @type {Array.<Library> || null}
         */
        this.List = null;

        /**
         * 总数
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new Library();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendSmsCode返回参数结构体
 * @class
 */
class SendSmsCodeResponse extends  AbstractModel {
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
 * 官方云盘实例信息
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 专属域名。如果实例无专属域名，则该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 生效时间
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * 过期时间。如果为按量计费或永久有效实例，该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 用户数量。如果为按量计费或不限制用户数量实例，该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UserLimit = null;

        /**
         * 存储容量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。如果为按量计费或不限制存储容量实例，该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageLimit = null;

        /**
         * 存储容量，单位为 GB。如果为按量计费或不限制存储容量实例，该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageLimitGB = null;

        /**
         * 是否过期隔离
         * @type {boolean || null}
         */
        this.Isolated = null;

        /**
         * 续费标识。0：手动续费；1：自动续费；2：到期不续。
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 超级管理员账号，如果未选择查询实例绑定的超级管理员账号或当前实例未绑定超级管理员账号，则该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SuperAdminAccount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.UserLimit = 'UserLimit' in params ? params.UserLimit : null;
        this.StorageLimit = 'StorageLimit' in params ? params.StorageLimit : null;
        this.StorageLimitGB = 'StorageLimitGB' in params ? params.StorageLimitGB : null;
        this.Isolated = 'Isolated' in params ? params.Isolated : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.SuperAdminAccount = 'SuperAdminAccount' in params ? params.SuperAdminAccount : null;

    }
}

/**
 * 流量资源包信息
 * @class
 */
class TrafficPackage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量资源包所抵扣的实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 专属域名。如果实例无专属域名，则该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 流量资源包来源类型，0 为付费购买，1 为赠送。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 总流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
         * @type {string || null}
         */
        this.Size = null;

        /**
         * 总流量，单位为 GB
         * @type {number || null}
         */
        this.SizeGB = null;

        /**
         * 剩余流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
         * @type {string || null}
         */
        this.Remain = null;

        /**
         * 已使用流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
         * @type {string || null}
         */
        this.Used = null;

        /**
         * 已使用百分比，由于数字类型精度限制，该字段为 String 类型。
         * @type {string || null}
         */
        this.UsedPercentage = null;

        /**
         * 生效时间，即流量资源包的订购时间
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * 过期时间，即所抵扣的实例的过期时间。如果流量资源包所抵扣的实例为按量计费或永久有效实例，该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.SizeGB = 'SizeGB' in params ? params.SizeGB : null;
        this.Remain = 'Remain' in params ? params.Remain : null;
        this.Used = 'Used' in params ? params.Used : null;
        this.UsedPercentage = 'UsedPercentage' in params ? params.UsedPercentage : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DeleteLibrary请求参数结构体
 * @class
 */
class DeleteLibraryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体库 ID
         * @type {string || null}
         */
        this.LibraryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;

    }
}

/**
 * DescribeTrafficPackages请求参数结构体
 * @class
 */
class DescribeTrafficPackagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个资源 ID 查询，每次请求的上限为 100 个。
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 页码，整型，配合 PageSize 使用，默认值为 1。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 对指定列进行排序
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 来源类型筛选
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
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeTrafficPackages返回参数结构体
 * @class
 */
class DescribeTrafficPackagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量包列表
         * @type {Array.<TrafficPackage> || null}
         */
        this.List = null;

        /**
         * 总数
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new TrafficPackage();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLibrarySecret请求参数结构体
 * @class
 */
class DescribeLibrarySecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体库 ID
         * @type {string || null}
         */
        this.LibraryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;

    }
}

/**
 * DescribeLibrarySecret返回参数结构体
 * @class
 */
class DescribeLibrarySecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的媒体库 ID
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 查询到的媒体库密钥
         * @type {string || null}
         */
        this.LibrarySecret = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.LibrarySecret = 'LibrarySecret' in params ? params.LibrarySecret : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendSmsCode请求参数结构体
 * @class
 */
class SendSmsCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码目的，当前支持换绑超级管理员账号， BindSuperAdmin；体验版企业升级，ChannelUpdateVerify等
         * @type {string || null}
         */
        this.Purpose = null;

        /**
         * 将作为超级管理员账号的手机号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 官方云盘实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 将作为超级管理员账号的手机号码的国家代码。默认为 +86。
         * @type {string || null}
         */
        this.CountryCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Purpose = 'Purpose' in params ? params.Purpose : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;

    }
}

/**
 * DescribeOfficialInstances请求参数结构体
 * @class
 */
class DescribeOfficialInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否查询实例绑定的超级管理员账号，默认值为 false。
         * @type {boolean || null}
         */
        this.SuperAdminAccount = null;

        /**
         * 按照一个或者多个实例 ID 查询，每次请求的上限为 100 个。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 页码，整型，配合 PageSize 使用，默认值为 1。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 对指定列进行排序
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 续费管理筛选类型
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 超级管理管理员账号是否绑定了手机号
         * @type {boolean || null}
         */
        this.BindPhone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuperAdminAccount = 'SuperAdminAccount' in params ? params.SuperAdminAccount : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.BindPhone = 'BindPhone' in params ? params.BindPhone : null;

    }
}

/**
 * DescribeLibraries请求参数结构体
 * @class
 */
class DescribeLibrariesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个媒体库 ID 查询，每次请求的上限为 100 个。
         * @type {Array.<string> || null}
         */
        this.LibraryIds = null;

        /**
         * 页码，整型，配合 PageSize 使用，默认值为 1。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryIds = 'LibraryIds' in params ? params.LibraryIds : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 媒体库配置项
 * @class
 */
class LibraryExtension extends  AbstractModel {
    constructor(){
        super();

        /**
         * true 为文件类型媒体库，可存储任何类型文件；false 为媒体类型媒体库，仅可存储照片和视频类型文件。默认为 false。在媒体库创建后不能修改。
         * @type {boolean || null}
         */
        this.IsFileLibrary = null;

        /**
         * true 为多租户空间媒体库，可创建多个租户空间；false 为单租户空间媒体库，不能创建租户空间，仅可使用默认的单一租户空间。默认为 false。在媒体库创建后不能修改。
         * @type {boolean || null}
         */
        this.IsMultiSpace = null;

        /**
         * 保存至 COS 对象存储的文件的存储类型，仅支持 STANDARD、STANDARD_IA、INTELLIGENT_TIERING、MAZ_STANDARD、MAZ_STANDARD_IA 和 MAZ_INTELLIGENT_TIERING，默认为 STANDARD，当使用多 AZ 存储桶时将自动使用 MAZ_ 开头的用于多 AZ 的存储类型，否则自动使用非 MAZ_ 开头的用于非多 AZ 的存储类型。当指定智能分层存储 INTELLIGENT_TIERING 或 MAZ_INTELLIGENT_TIERING 时，需要事先为存储桶开启智能分层存储，否则将返回失败。在媒体库创建后不能修改。
         * @type {string || null}
         */
        this.CosStorageClass = null;

        /**
         * 是否开启回收站功能。默认为 false。
         * @type {boolean || null}
         */
        this.UseRecycleBin = null;

        /**
         * 当开启回收站时，自动删除回收站项目的天数，不能超过 1095（3 年），指定为 0 则不自动删除，默认为 0。当未开启回收站时，该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRemoveRecycledDays = null;

        /**
         * 是否启用文件路径搜索功能。默认为 false。
         * @type {boolean || null}
         */
        this.EnableSearch = null;

        /**
         * 设置媒体库或租户空间配额且配额小于已使用存储量时，是否拒绝设置请求。默认为 false。
         * @type {boolean || null}
         */
        this.DenyOnQuotaLessThanUsage = null;

        /**
         * 是否开启历史版本。默认为 false。
         * @type {boolean || null}
         */
        this.EnableFileHistory = null;

        /**
         * 当开启历史版本时，指定单个文件保留的历史版本的数量上限，不能超过 999，指定为 0 则不限制，默认为 0。当未开启历史版本时，该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileHistoryCount = null;

        /**
         * 当开启历史版本时，指定历史版本保留的最长天数，不能超过 999，指定为 0 则不限制，默认为 0。当未开启历史版本时，该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileHistoryExpireDay = null;

        /**
         * 目录或文件名的最长长度，不能超过 255，默认为 255。修改该参数不会影响存量目录或文件名，即如果将该字段的值改小，已经存在的长度超过目标值的目录或文件名不会发生变化。
         * @type {number || null}
         */
        this.MaxDirFileNameLength = null;

        /**
         * 是否开启公有读，开启后读操作无需使用访问令牌，默认为 false。仅单租户空间媒体库支持该属性，否则该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsPublicRead = null;

        /**
         * 媒体类型媒体库是否开启多相簿，开启后可创建一级目录（即相簿）且媒体文件只能保存在各相簿中，否则不能创建相簿且媒体文件只能保存在根目录。默认为 false。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。在媒体库创建后不能修改。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsMultiAlbum = null;

        /**
         * 媒体类型媒体库是否允许上传照片，默认为 true。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AllowPhoto = null;

        /**
         * 当媒体类型媒体库允许上传照片时，指定允许的扩展名，默认为空数组，此时将根据文件扩展名对应的 MIME 类型自动判断。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AllowPhotoExtName = null;

        /**
         * 媒体类型媒体库是否允许上传视频，默认为 true。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AllowVideo = null;

        /**
         * 当媒体类型媒体库允许上传视频时，指定允许的扩展名，默认为空数组，此时将根据文件扩展名对应的 MIME 类型自动判断。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AllowVideoExtName = null;

        /**
         * 指定文件类型媒体库允许的文件扩展名，默认为空数组，此时允许上传所有类型文件。仅单租户空间文件类型媒体库支持该属性，否则该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AllowFileExtName = null;

        /**
         * 照片上传时是否进行敏感内容鉴定，默认为 false。仅单租户空间媒体库支持该属性，否则该属性为 null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.RecognizeSensitiveContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsFileLibrary = 'IsFileLibrary' in params ? params.IsFileLibrary : null;
        this.IsMultiSpace = 'IsMultiSpace' in params ? params.IsMultiSpace : null;
        this.CosStorageClass = 'CosStorageClass' in params ? params.CosStorageClass : null;
        this.UseRecycleBin = 'UseRecycleBin' in params ? params.UseRecycleBin : null;
        this.AutoRemoveRecycledDays = 'AutoRemoveRecycledDays' in params ? params.AutoRemoveRecycledDays : null;
        this.EnableSearch = 'EnableSearch' in params ? params.EnableSearch : null;
        this.DenyOnQuotaLessThanUsage = 'DenyOnQuotaLessThanUsage' in params ? params.DenyOnQuotaLessThanUsage : null;
        this.EnableFileHistory = 'EnableFileHistory' in params ? params.EnableFileHistory : null;
        this.FileHistoryCount = 'FileHistoryCount' in params ? params.FileHistoryCount : null;
        this.FileHistoryExpireDay = 'FileHistoryExpireDay' in params ? params.FileHistoryExpireDay : null;
        this.MaxDirFileNameLength = 'MaxDirFileNameLength' in params ? params.MaxDirFileNameLength : null;
        this.IsPublicRead = 'IsPublicRead' in params ? params.IsPublicRead : null;
        this.IsMultiAlbum = 'IsMultiAlbum' in params ? params.IsMultiAlbum : null;
        this.AllowPhoto = 'AllowPhoto' in params ? params.AllowPhoto : null;
        this.AllowPhotoExtName = 'AllowPhotoExtName' in params ? params.AllowPhotoExtName : null;
        this.AllowVideo = 'AllowVideo' in params ? params.AllowVideo : null;
        this.AllowVideoExtName = 'AllowVideoExtName' in params ? params.AllowVideoExtName : null;
        this.AllowFileExtName = 'AllowFileExtName' in params ? params.AllowFileExtName : null;
        this.RecognizeSensitiveContent = 'RecognizeSensitiveContent' in params ? params.RecognizeSensitiveContent : null;

    }
}

/**
 * VerifySmsCode返回参数结构体
 * @class
 */
class VerifySmsCodeResponse extends  AbstractModel {
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
 * ModifyLibrary请求参数结构体
 * @class
 */
class ModifyLibraryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体库 ID
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 媒体库名称，最多 50 个字符。如不传则不修改。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注，最多 250 个字符。如不传则不修改。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 媒体库配置项，部分参数在新建后不可更改，且仅修改传入的参数。如不传该参数则不修改任何配置项。
         * @type {LibraryExtension || null}
         */
        this.LibraryExtension = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.LibraryExtension) {
            let obj = new LibraryExtension();
            obj.deserialize(params.LibraryExtension)
            this.LibraryExtension = obj;
        }

    }
}

/**
 * DescribeOfficialOverview请求参数结构体
 * @class
 */
class DescribeOfficialOverviewRequest extends  AbstractModel {
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
 * DeleteLibrary返回参数结构体
 * @class
 */
class DeleteLibraryResponse extends  AbstractModel {
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
 * DescribeOfficialInstances返回参数结构体
 * @class
 */
class DescribeOfficialInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例列表
         * @type {Array.<Instance> || null}
         */
        this.List = null;

        /**
         * 总数
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new Instance();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifySmsCode请求参数结构体
 * @class
 */
class VerifySmsCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码目的，当前支持换绑超级管理员账号，BindSuperAdmin；体验版企业升级验证ChannelUpdateVerify，等
         * @type {string || null}
         */
        this.Purpose = null;

        /**
         * 将作为超级管理员账号的手机号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 短信验证码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 官方云盘实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 将作为超级管理员账号的手机号码的国家代码。默认为 +86。
         * @type {string || null}
         */
        this.CountryCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Purpose = 'Purpose' in params ? params.Purpose : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;

    }
}

/**
 * CreateLibrary返回参数结构体
 * @class
 */
class CreateLibraryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体库 ID
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PaaS 服务媒体库信息
 * @class
 */
class Library extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体库 ID
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 媒体库友好名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 媒体库绑定的 COS 存储桶
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * 媒体库绑定的 COS 存储桶所在的地域
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * 媒体库创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 媒体库配置项
         * @type {LibraryExtension || null}
         */
        this.LibraryExtension = null;

        /**
         * 媒体库用量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
         * @type {string || null}
         */
        this.Size = null;

        /**
         * 媒体库目录数，由于数字类型精度限制，该字段为 String 类型。
         * @type {string || null}
         */
        this.DirNum = null;

        /**
         * 媒体库文件数，由于数字类型精度限制，该字段为 String 类型。
         * @type {string || null}
         */
        this.FileNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.BucketRegion = 'BucketRegion' in params ? params.BucketRegion : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;

        if (params.LibraryExtension) {
            let obj = new LibraryExtension();
            obj.deserialize(params.LibraryExtension)
            this.LibraryExtension = obj;
        }
        this.Size = 'Size' in params ? params.Size : null;
        this.DirNum = 'DirNum' in params ? params.DirNum : null;
        this.FileNum = 'FileNum' in params ? params.FileNum : null;

    }
}

/**
 * CreateLibrary请求参数结构体
 * @class
 */
class CreateLibraryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体库名称，最多 50 个字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 存储桶全名，新建后不可更改
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * 存储桶所在地域，新建后不可更改
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * 媒体库配置项，部分参数新建后不可更改
         * @type {LibraryExtension || null}
         */
        this.LibraryExtension = null;

        /**
         * 备注，最多 250 个字符
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
        this.Name = 'Name' in params ? params.Name : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.BucketRegion = 'BucketRegion' in params ? params.BucketRegion : null;

        if (params.LibraryExtension) {
            let obj = new LibraryExtension();
            obj.deserialize(params.LibraryExtension)
            this.LibraryExtension = obj;
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeOfficialOverview返回参数结构体
 * @class
 */
class DescribeOfficialOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云盘实例数量
         * @type {number || null}
         */
        this.Quantity = null;

        /**
         * 已经使用的总存储量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
         * @type {string || null}
         */
        this.Storage = null;

        /**
         * 已经分配和使用的总用户数
         * @type {number || null}
         */
        this.UserCount = null;

        /**
         * 本月外网下行流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
         * @type {string || null}
         */
        this.InternetTraffic = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.UserCount = 'UserCount' in params ? params.UserCount : null;
        this.InternetTraffic = 'InternetTraffic' in params ? params.InternetTraffic : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    ModifyLibraryResponse: ModifyLibraryResponse,
    DescribeLibrariesResponse: DescribeLibrariesResponse,
    SendSmsCodeResponse: SendSmsCodeResponse,
    Instance: Instance,
    TrafficPackage: TrafficPackage,
    DeleteLibraryRequest: DeleteLibraryRequest,
    DescribeTrafficPackagesRequest: DescribeTrafficPackagesRequest,
    DescribeTrafficPackagesResponse: DescribeTrafficPackagesResponse,
    DescribeLibrarySecretRequest: DescribeLibrarySecretRequest,
    DescribeLibrarySecretResponse: DescribeLibrarySecretResponse,
    SendSmsCodeRequest: SendSmsCodeRequest,
    DescribeOfficialInstancesRequest: DescribeOfficialInstancesRequest,
    DescribeLibrariesRequest: DescribeLibrariesRequest,
    LibraryExtension: LibraryExtension,
    VerifySmsCodeResponse: VerifySmsCodeResponse,
    ModifyLibraryRequest: ModifyLibraryRequest,
    DescribeOfficialOverviewRequest: DescribeOfficialOverviewRequest,
    DeleteLibraryResponse: DeleteLibraryResponse,
    DescribeOfficialInstancesResponse: DescribeOfficialInstancesResponse,
    VerifySmsCodeRequest: VerifySmsCodeRequest,
    CreateLibraryResponse: CreateLibraryResponse,
    Library: Library,
    CreateLibraryRequest: CreateLibraryRequest,
    DescribeOfficialOverviewResponse: DescribeOfficialOverviewResponse,

}
