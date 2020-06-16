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
 * DescribeMsApiList请求参数结构体
 * @class
 */
class DescribeMsApiListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务ID
         * @type {string || null}
         */
        this.MicroserviceId = null;

        /**
         * 搜索关键字
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 每页的数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 翻页偏移量
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
        this.MicroserviceId = 'MicroserviceId' in params ? params.MicroserviceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * TsfApiListResponse
 * @class
 */
class TsfApiListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * API 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MsApiArray> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new MsApiArray();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribeGroupInstances返回参数结构体
 * @class
 */
class DescribeGroupInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组机器信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageInstance || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageInstance();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMsApiList返回参数结构体
 * @class
 */
class DescribeMsApiListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 相应结果
         * @type {TsfApiListResponse || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfApiListResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDownloadInfo请求参数结构体
 * @class
 */
class DescribeDownloadInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 程序包ID
         * @type {string || null}
         */
        this.PkgId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;

    }
}

/**
 * ApiDetailResponse
 * @class
 */
class ApiDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 请求参数
         * @type {Array.<ApiRequestDescr> || null}
         */
        this.Request = null;

        /**
         * API 响应参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApiResponseDescr> || null}
         */
        this.Response = null;

        /**
         * API 复杂结构定义
         * @type {Array.<ApiDefinitionDescr> || null}
         */
        this.Definitions = null;

        /**
         * API 的 content type
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RequestContentType = null;

        /**
         * API  能否调试
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.CanRun = null;

        /**
         * API 状态 0:离线 1:在线，默认0
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Request) {
            this.Request = new Array();
            for (let z in params.Request) {
                let obj = new ApiRequestDescr();
                obj.deserialize(params.Request[z]);
                this.Request.push(obj);
            }
        }

        if (params.Response) {
            this.Response = new Array();
            for (let z in params.Response) {
                let obj = new ApiResponseDescr();
                obj.deserialize(params.Response[z]);
                this.Response.push(obj);
            }
        }

        if (params.Definitions) {
            this.Definitions = new Array();
            for (let z in params.Definitions) {
                let obj = new ApiDefinitionDescr();
                obj.deserialize(params.Definitions[z]);
                this.Definitions.push(obj);
            }
        }
        this.RequestContentType = 'RequestContentType' in params ? params.RequestContentType : null;
        this.CanRun = 'CanRun' in params ? params.CanRun : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 列表信息
 * @class
 */
class ImageTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 版本名称
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 版本ID
         * @type {string || null}
         */
        this.TagId = null;

        /**
         * 镜像ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 大小
         * @type {string || null}
         */
        this.Size = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 镜像制作者
         * @type {string || null}
         */
        this.Author = null;

        /**
         * CPU架构
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * Docker客户端版本
         * @type {string || null}
         */
        this.DockerVersion = null;

        /**
         * 操作系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Os = null;

        /**
         * push时间
         * @type {string || null}
         */
        this.PushTime = null;

        /**
         * 单位为字节
         * @type {number || null}
         */
        this.SizeByte = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.TagId = 'TagId' in params ? params.TagId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Author = 'Author' in params ? params.Author : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.DockerVersion = 'DockerVersion' in params ? params.DockerVersion : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.PushTime = 'PushTime' in params ? params.PushTime : null;
        this.SizeByte = 'SizeByte' in params ? params.SizeByte : null;

    }
}

/**
 * DescribePublicConfigSummary请求参数结构体
 * @class
 */
class DescribePublicConfigSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询关键字，模糊查询：配置项名称，不传入时查询全量
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条数，默认为20
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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeClusterInstances返回参数结构体
 * @class
 */
class DescribeClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群机器实例分页信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageInstance || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageInstance();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMicroservice请求参数结构体
 * @class
 */
class DescribeMicroserviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务ID
         * @type {string || null}
         */
        this.MicroserviceId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页个数
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
        this.MicroserviceId = 'MicroserviceId' in params ? params.MicroserviceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * cos临时帐号信息
 * @class
 */
class CosCredentials extends  AbstractModel {
    constructor(){
        super();

        /**
         * 会话Token
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * 临时应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TmpAppId = null;

        /**
         * 临时调用者身份ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时密钥
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 所在域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionToken = 'SessionToken' in params ? params.SessionToken : null;
        this.TmpAppId = 'TmpAppId' in params ? params.TmpAppId : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribeContainerGroups请求参数结构体
 * @class
 */
class DescribeContainerGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索字段，模糊搜索groupName字段
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 分组所属应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 排序字段，默认为 createTime字段，支持id， name， createTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式，默认为1：倒序排序，0：正序，1：倒序
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 偏移量，取值从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页个数，默认为20， 取值应为1~50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间 ID
         * @type {string || null}
         */
        this.NamespaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

    }
}

/**
 * ExpandGroup请求参数结构体
 * @class
 */
class ExpandGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 扩容的机器实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;

    }
}

/**
 * DeleteServerlessGroup请求参数结构体
 * @class
 */
class DeleteServerlessGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * groupId，分组唯一标识
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeImageTags请求参数结构体
 * @class
 */
class DescribeImageTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用Id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 偏移量，取值从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页个数，默认为20， 取值应为1~100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 不填和0:查询 1:不查询
         * @type {number || null}
         */
        this.QueryImageIdFlag = null;

        /**
         * 可用于搜索的 tag 名字
         * @type {string || null}
         */
        this.SearchWord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.QueryImageIdFlag = 'QueryImageIdFlag' in params ? params.QueryImageIdFlag : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * ModifyLaneRule返回参数结构体
 * @class
 */
class ModifyLaneRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSimpleClusters返回参数结构体
 * @class
 */
class DescribeSimpleClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TSF集群分页对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageCluster || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageCluster();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePodInstances返回参数结构体
 * @class
 */
class DescribePodInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的权限数据对象
         * @type {GroupPodResult || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new GroupPodResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 虚拟机部署组信息
 * @class
 */
class VmGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 部署组状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupStatus = null;

        /**
         * 程序包ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * 程序包名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 程序包版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageVersion = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 部署组机器数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 部署组运行中机器数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunInstanceCount = null;

        /**
         * 部署组启动参数信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartupParameters = null;

        /**
         * 部署组创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 部署组更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 部署组停止机器数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OffInstanceCount = null;

        /**
         * 部署组描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupDesc = null;

        /**
         * 微服务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MicroserviceType = null;

        /**
         * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * 部署组资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupResourceType = null;

        /**
         * 部署组更新时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupStatus = 'GroupStatus' in params ? params.GroupStatus : null;
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.RunInstanceCount = 'RunInstanceCount' in params ? params.RunInstanceCount : null;
        this.StartupParameters = 'StartupParameters' in params ? params.StartupParameters : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.OffInstanceCount = 'OffInstanceCount' in params ? params.OffInstanceCount : null;
        this.GroupDesc = 'GroupDesc' in params ? params.GroupDesc : null;
        this.MicroserviceType = 'MicroserviceType' in params ? params.MicroserviceType : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.GroupResourceType = 'GroupResourceType' in params ? params.GroupResourceType : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

    }
}

/**
 * RevocationConfig请求参数结构体
 * @class
 */
class RevocationConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项发布ID
         * @type {string || null}
         */
        this.ConfigReleaseId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigReleaseId = 'ConfigReleaseId' in params ? params.ConfigReleaseId : null;

    }
}

/**
 * 部署组实例列表
 * @class
 */
class GroupPod extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称(对应到kubernetes的pod名称)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 实例ID(对应到kubernetes的pod id)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PodId = null;

        /**
         * 实例状态，请参考后面的实例以及容器的状态定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例处于当前状态的原因，例如容器下载镜像失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 主机IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeIp = null;

        /**
         * 实例IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 实例中容器的重启次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RestartCount = null;

        /**
         * 实例中已就绪容器的个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReadyCount = null;

        /**
         * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 实例启动时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 服务实例状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceInstanceStatus = null;

        /**
         * 机器实例可使用状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceAvailableStatus = null;

        /**
         * 机器实例状态
注意：此字段可能返回 null，表示取不到有效值。
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
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.PodId = 'PodId' in params ? params.PodId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.NodeIp = 'NodeIp' in params ? params.NodeIp : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;
        this.ReadyCount = 'ReadyCount' in params ? params.ReadyCount : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.ServiceInstanceStatus = 'ServiceInstanceStatus' in params ? params.ServiceInstanceStatus : null;
        this.InstanceAvailableStatus = 'InstanceAvailableStatus' in params ? params.InstanceAvailableStatus : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;

    }
}

/**
 * ModifyUploadInfo请求参数结构体
 * @class
 */
class ModifyUploadInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 调用DescribeUploadInfo接口时返回的软件包ID
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * COS返回上传结果（默认为0：成功，其他值表示失败）
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 程序包MD5
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 程序包大小（单位字节）
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * DescribeUploadInfo返回参数结构体
 * @class
 */
class DescribeUploadInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS上传信息
         * @type {CosUploadInfo || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new CosUploadInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReleasedConfig请求参数结构体
 * @class
 */
class DescribeReleasedConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeApiVersions返回参数结构体
 * @class
 */
class DescribeApiVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API版本列表
         * @type {Array.<ApiVersionArray> || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new ApiVersionArray();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopGroup返回参数结构体
 * @class
 */
class StopGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskId || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TaskId();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopContainerGroup返回参数结构体
 * @class
 */
class StopContainerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 停止操作是否成功。
true：停止成功
flase：停止失败
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateGroup请求参数结构体
 * @class
 */
class CreateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组所属的应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 部署组所属命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 部署组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 部署组描述
         * @type {string || null}
         */
        this.GroupDesc = null;

        /**
         * 部署组资源类型
         * @type {string || null}
         */
        this.GroupResourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupDesc = 'GroupDesc' in params ? params.GroupDesc : null;
        this.GroupResourceType = 'GroupResourceType' in params ? params.GroupResourceType : null;

    }
}

/**
 * ModifyMicroservice请求参数结构体
 * @class
 */
class ModifyMicroserviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务 ID
         * @type {string || null}
         */
        this.MicroserviceId = null;

        /**
         * 微服务备注信息
         * @type {string || null}
         */
        this.MicroserviceDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MicroserviceId = 'MicroserviceId' in params ? params.MicroserviceId : null;
        this.MicroserviceDesc = 'MicroserviceDesc' in params ? params.MicroserviceDesc : null;

    }
}

/**
 * DescribeConfigReleases请求参数结构体
 * @class
 */
class DescribeConfigReleasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项名称，不传入时查询全量
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 部署组ID，不传入时查询全量
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 命名空间ID，不传入时查询全量
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 集群ID，不传入时查询全量
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 每页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 配置ID，不传入时查询全量
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 应用ID，不传入时查询全量
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * DeleteLane返回参数结构体
 * @class
 */
class DeleteLaneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true / false
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLane返回参数结构体
 * @class
 */
class ModifyLaneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作状态
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TSF配置项发布信息分页对象
 * @class
 */
class TsfPageConfigRelease extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 配置项发布信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConfigRelease> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new ConfigRelease();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * CreateContainGroup返回参数结构体
 * @class
 */
class CreateContainGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回创建成功的部署组ID，返回null表示失败
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeContainerGroupDetail返回参数结构体
 * @class
 */
class DescribeContainerGroupDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器部署组详情
         * @type {ContainerGroupDetail || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new ContainerGroupDetail();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 简单应用
 * @class
 */
class SimpleApplication extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * 应用微服务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MicroserviceType = null;

        /**
         * ApplicationDesc
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationDesc = null;

        /**
         * ProgLang
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProgLang = null;

        /**
         * ApplicationResourceType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationResourceType = null;

        /**
         * CreateTime
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * UpdateTime
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * ApigatewayServiceId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApigatewayServiceId = null;

        /**
         * ApplicationRuntimeType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationRuntimeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.MicroserviceType = 'MicroserviceType' in params ? params.MicroserviceType : null;
        this.ApplicationDesc = 'ApplicationDesc' in params ? params.ApplicationDesc : null;
        this.ProgLang = 'ProgLang' in params ? params.ProgLang : null;
        this.ApplicationResourceType = 'ApplicationResourceType' in params ? params.ApplicationResourceType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ApigatewayServiceId = 'ApigatewayServiceId' in params ? params.ApigatewayServiceId : null;
        this.ApplicationRuntimeType = 'ApplicationRuntimeType' in params ? params.ApplicationRuntimeType : null;

    }
}

/**
 * DescribePublicConfigSummary返回参数结构体
 * @class
 */
class DescribePublicConfigSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页的全局配置统计信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageConfig || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageConfig();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSimpleApplications返回参数结构体
 * @class
 */
class DescribeSimpleApplicationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 简单应用分页对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageSimpleApplication || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageSimpleApplication();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePublicConfigReleaseLogs请求参数结构体
 * @class
 */
class DescribePublicConfigReleaseLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间ID，不传入时查询全量
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条数，默认为20
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
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateServerlessGroup返回参数结构体
 * @class
 */
class CreateServerlessGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功的部署组ID，返回null表示失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLane请求参数结构体
 * @class
 */
class CreateLaneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 泳道名称
         * @type {string || null}
         */
        this.LaneName = null;

        /**
         * 泳道备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 泳道部署组信息
         * @type {Array.<LaneGroup> || null}
         */
        this.LaneGroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaneName = 'LaneName' in params ? params.LaneName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.LaneGroupList) {
            this.LaneGroupList = new Array();
            for (let z in params.LaneGroupList) {
                let obj = new LaneGroup();
                obj.deserialize(params.LaneGroupList[z]);
                this.LaneGroupList.push(obj);
            }
        }

    }
}

/**
 * DeleteApplication返回参数结构体
 * @class
 */
class DeleteApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除应用操作是否成功。
true：操作成功。
false：操作失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 机器实例
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 机器名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 机器内网地址IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 机器外网地址IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * 机器描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceDesc = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * VM的状态 虚机：虚机的状态 容器：Pod所在虚机的状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceStatus = null;

        /**
         * VM的可使用状态 虚机：虚机是否能够作为资源使用 容器：虚机是否能够作为资源部署POD
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceAvailableStatus = null;

        /**
         * 服务下的服务实例的状态 虚机：应用是否可用 + Agent状态 容器：Pod状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceInstanceStatus = null;

        /**
         * 标识此instance是否已添加在tsf中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CountInTsf = null;

        /**
         * 机器所属部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 机器所属应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 机器所属应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 机器实例在CVM的创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceCreatedTime = null;

        /**
         * 机器实例在CVM的过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceExpiredTime = null;

        /**
         * 机器实例在CVM的计费模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 机器实例总CPU信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceTotalCpu = null;

        /**
         * 机器实例总内存信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceTotalMem = null;

        /**
         * 机器实例使用的CPU信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceUsedCpu = null;

        /**
         * 机器实例使用的内存信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceUsedMem = null;

        /**
         * 机器实例Limit CPU信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceLimitCpu = null;

        /**
         * 机器实例Limit 内存信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceLimitMem = null;

        /**
         * 包版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstancePkgVersion = null;

        /**
         * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 机器实例业务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RestrictState = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 实例执行状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OperationState = null;

        /**
         * NamespaceId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * InstanceZoneId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceZoneId = null;

        /**
         * InstanceImportMode
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceImportMode = null;

        /**
         * ApplicationType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * ApplicationResourceType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationResourceType = null;

        /**
         * ServiceSidecarStatus
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceSidecarStatus = null;

        /**
         * GroupName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * NamespaceName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.InstanceDesc = 'InstanceDesc' in params ? params.InstanceDesc : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.InstanceAvailableStatus = 'InstanceAvailableStatus' in params ? params.InstanceAvailableStatus : null;
        this.ServiceInstanceStatus = 'ServiceInstanceStatus' in params ? params.ServiceInstanceStatus : null;
        this.CountInTsf = 'CountInTsf' in params ? params.CountInTsf : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.InstanceCreatedTime = 'InstanceCreatedTime' in params ? params.InstanceCreatedTime : null;
        this.InstanceExpiredTime = 'InstanceExpiredTime' in params ? params.InstanceExpiredTime : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.InstanceTotalCpu = 'InstanceTotalCpu' in params ? params.InstanceTotalCpu : null;
        this.InstanceTotalMem = 'InstanceTotalMem' in params ? params.InstanceTotalMem : null;
        this.InstanceUsedCpu = 'InstanceUsedCpu' in params ? params.InstanceUsedCpu : null;
        this.InstanceUsedMem = 'InstanceUsedMem' in params ? params.InstanceUsedMem : null;
        this.InstanceLimitCpu = 'InstanceLimitCpu' in params ? params.InstanceLimitCpu : null;
        this.InstanceLimitMem = 'InstanceLimitMem' in params ? params.InstanceLimitMem : null;
        this.InstancePkgVersion = 'InstancePkgVersion' in params ? params.InstancePkgVersion : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.RestrictState = 'RestrictState' in params ? params.RestrictState : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.OperationState = 'OperationState' in params ? params.OperationState : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.InstanceZoneId = 'InstanceZoneId' in params ? params.InstanceZoneId : null;
        this.InstanceImportMode = 'InstanceImportMode' in params ? params.InstanceImportMode : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.ApplicationResourceType = 'ApplicationResourceType' in params ? params.ApplicationResourceType : null;
        this.ServiceSidecarStatus = 'ServiceSidecarStatus' in params ? params.ServiceSidecarStatus : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

    }
}

/**
 * DeployServerlessGroup返回参数结构体
 * @class
 */
class DeployServerlessGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果true：成功；false：失败；
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigs返回参数结构体
 * @class
 */
class DescribeConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页后的配置项列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageConfig || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageConfig();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplicationAttribute返回参数结构体
 * @class
 */
class DescribeApplicationAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用列表其它字段返回参数
         * @type {ApplicationAttribute || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new ApplicationAttribute();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplications返回参数结构体
 * @class
 */
class DescribeApplicationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用分页列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageApplication || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageApplication();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyContainerReplicas请求参数结构体
 * @class
 */
class ModifyContainerReplicasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID，部署组唯一标识
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * ModifyLane请求参数结构体
 * @class
 */
class ModifyLaneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 泳道ID
         * @type {string || null}
         */
        this.LaneId = null;

        /**
         * 泳道名称
         * @type {string || null}
         */
        this.LaneName = null;

        /**
         * 备注
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
        this.LaneId = 'LaneId' in params ? params.LaneId : null;
        this.LaneName = 'LaneName' in params ? params.LaneName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeLanes请求参数结构体
 * @class
 */
class DescribeLanesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页展示的条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 翻页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 搜索关键字
         * @type {string || null}
         */
        this.SearchWord = null;

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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * DeleteMicroservice请求参数结构体
 * @class
 */
class DeleteMicroserviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务ID
         * @type {string || null}
         */
        this.MicroserviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MicroserviceId = 'MicroserviceId' in params ? params.MicroserviceId : null;

    }
}

/**
 * CreatePublicConfig请求参数结构体
 * @class
 */
class CreatePublicConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项名称
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 配置项版本
         * @type {string || null}
         */
        this.ConfigVersion = null;

        /**
         * 配置项值，总是接收yaml格式的内容
         * @type {string || null}
         */
        this.ConfigValue = null;

        /**
         * 配置项版本描述
         * @type {string || null}
         */
        this.ConfigVersionDesc = null;

        /**
         * 配置项类型
         * @type {string || null}
         */
        this.ConfigType = null;

        /**
         * Base64编码的配置项
         * @type {boolean || null}
         */
        this.EncodeWithBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ConfigVersion = 'ConfigVersion' in params ? params.ConfigVersion : null;
        this.ConfigValue = 'ConfigValue' in params ? params.ConfigValue : null;
        this.ConfigVersionDesc = 'ConfigVersionDesc' in params ? params.ConfigVersionDesc : null;
        this.ConfigType = 'ConfigType' in params ? params.ConfigType : null;
        this.EncodeWithBase64 = 'EncodeWithBase64' in params ? params.EncodeWithBase64 : null;

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
         * 集群移除机器是否成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApiVersions请求参数结构体
 * @class
 */
class DescribeApiVersionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务ID
         * @type {string || null}
         */
        this.MicroserviceId = null;

        /**
         * API 请求路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 请求方法
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MicroserviceId = 'MicroserviceId' in params ? params.MicroserviceId : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * ModifyContainerReplicas返回参数结构体
 * @class
 */
class ModifyContainerReplicasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果true：成功；false：失败；
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfig请求参数结构体
 * @class
 */
class DescribeConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项ID
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * 命名空间
 * @class
 */
class Namespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceCode = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 命名空间描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceDesc = null;

        /**
         * 默认命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsDefault = null;

        /**
         * 命名空间状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceStatus = null;

        /**
         * 删除标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DeleteFlag = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 集群数组，仅携带集群ID，集群名称，集群类型等基础信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Cluster> || null}
         */
        this.ClusterList = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceResourceType = null;

        /**
         * 命名空间类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceCode = 'NamespaceCode' in params ? params.NamespaceCode : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.NamespaceDesc = 'NamespaceDesc' in params ? params.NamespaceDesc : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.NamespaceStatus = 'NamespaceStatus' in params ? params.NamespaceStatus : null;
        this.DeleteFlag = 'DeleteFlag' in params ? params.DeleteFlag : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new Cluster();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceResourceType = 'NamespaceResourceType' in params ? params.NamespaceResourceType : null;
        this.NamespaceType = 'NamespaceType' in params ? params.NamespaceType : null;

    }
}

/**
 * Tsf分页集群对象
 * @class
 */
class TsfPageCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Cluster> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new Cluster();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribeGroup返回参数结构体
 * @class
 */
class DescribeGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚拟机部署组详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VmGroup || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new VmGroup();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGroups返回参数结构体
 * @class
 */
class DescribeGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚拟机部署组分页信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageVmGroup || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageVmGroup();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 环境变量
 * @class
 */
class Env extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境变量名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 服务端口
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeleteContainerGroup返回参数结构体
 * @class
 */
class DeleteContainerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除操作是否成功：
true：成功
false：失败
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSimpleGroups请求参数结构体
 * @class
 */
class DescribeSimpleGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID列表，不填写时查询全量
         * @type {Array.<string> || null}
         */
        this.GroupIdList = null;

        /**
         * 应用ID，不填写时查询全量
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 集群ID，不填写时查询全量
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间ID，不填写时查询全量
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 每页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 起始偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 部署组ID，不填写时查询全量
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 模糊查询，部署组名称，不填写时查询全量
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 部署组类型，精确过滤字段，M：service mesh, P：原生应用， M：网关应用
         * @type {string || null}
         */
        this.AppMicroServiceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIdList = 'GroupIdList' in params ? params.GroupIdList : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.AppMicroServiceType = 'AppMicroServiceType' in params ? params.AppMicroServiceType : null;

    }
}

/**
 * CreateNamespace返回参数结构体
 * @class
 */
class CreateNamespaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功时为命名空间ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteServerlessGroup返回参数结构体
 * @class
 */
class DeleteServerlessGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果true：成功；false：失败。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteImageTags返回参数结构体
 * @class
 */
class DeleteImageTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量删除操作是否成功。
true：成功。
false：失败。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyUploadInfo返回参数结构体
 * @class
 */
class ModifyUploadInfoResponse extends  AbstractModel {
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
 * DescribeImageTags返回参数结构体
 * @class
 */
class DescribeImageTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的权限数据对象
         * @type {ImageTagsResult || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new ImageTagsResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteGroup请求参数结构体
 * @class
 */
class DeleteGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * API 对象类型描述
 * @class
 */
class ApiDefinitionDescr extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对象名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 对象属性列表
         * @type {Array.<PropertyField> || null}
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
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new PropertyField();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }

    }
}

/**
 * 微服务实例的分页内容
 * @class
 */
class TsfPageMsInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务实例总数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 微服务实例列表内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MsInstance> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new MsInstance();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * Serverless部署组信息
 * @class
 */
class ServerlessGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 服务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 程序包ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 程序包名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * 集群id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 命名空间id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * vpc ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * vpc 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 程序包版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgVersion = null;

        /**
         * 所需实例内存大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Memory = null;

        /**
         * 要求最小实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceRequest = null;

        /**
         * 部署组启动参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartupParameters = null;

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 部署组实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ApplicationName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PkgVersion = 'PkgVersion' in params ? params.PkgVersion : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceRequest = 'InstanceRequest' in params ? params.InstanceRequest : null;
        this.StartupParameters = 'StartupParameters' in params ? params.StartupParameters : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;

    }
}

/**
 * DescribeApplication返回参数结构体
 * @class
 */
class DescribeApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApplicationForPage || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new ApplicationForPage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 泳道
 * @class
 */
class LaneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 泳道ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LaneId = null;

        /**
         * 泳道名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LaneName = null;

        /**
         * 泳道备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 泳道部署组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LaneGroup> || null}
         */
        this.LaneGroupList = null;

        /**
         * 是否入口应用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Entrance = null;

        /**
         * 泳道已经关联部署组的命名空间列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NamespaceIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaneId = 'LaneId' in params ? params.LaneId : null;
        this.LaneName = 'LaneName' in params ? params.LaneName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.LaneGroupList) {
            this.LaneGroupList = new Array();
            for (let z in params.LaneGroupList) {
                let obj = new LaneGroup();
                obj.deserialize(params.LaneGroupList[z]);
                this.LaneGroupList.push(obj);
            }
        }
        this.Entrance = 'Entrance' in params ? params.Entrance : null;
        this.NamespaceIdList = 'NamespaceIdList' in params ? params.NamespaceIdList : null;

    }
}

/**
 * DescribeConfigReleaseLogs返回参数结构体
 * @class
 */
class DescribeConfigReleaseLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页的配置项发布历史列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageConfigReleaseLog || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageConfigReleaseLog();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RevocationConfig返回参数结构体
 * @class
 */
class RevocationConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true：回滚成功；false：回滚失败
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSimpleGroups返回参数结构体
 * @class
 */
class DescribeSimpleGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 简单部署组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageSimpleGroup || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageSimpleGroup();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 *  容器部署组详情
 * @class
 */
class ContainerGroupDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 实例总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * 已启动实例总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CurrentNum = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 镜像server
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Server = null;

        /**
         * 镜像名，如/tsf/nginx
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reponame = null;

        /**
         * 镜像版本名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 负载均衡ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LbIp = null;

        /**
         * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * Service ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterIp = null;

        /**
         * NodePort端口，只有公网和NodePort访问方式才有值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NodePort = null;

        /**
         * 最大分配的 CPU 核数，对应 K8S limit
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CpuLimit = null;

        /**
         * 最大分配的内存 MiB 数，对应 K8S limit
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemLimit = null;

        /**
         * 0:公网 1:集群内访问 2：NodePort
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AccessType = null;

        /**
         * 更新方式：0:快速更新 1:滚动更新
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateType = null;

        /**
         * 更新间隔,单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateIvl = null;

        /**
         * 端口数组对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProtocolPort> || null}
         */
        this.ProtocolPorts = null;

        /**
         * 环境变量数组对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Env> || null}
         */
        this.Envs = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * pod错误信息描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 部署组状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 服务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MicroserviceType = null;

        /**
         * 初始分配的 CPU 核数，对应 K8S request
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CpuRequest = null;

        /**
         * 初始分配的内存 MiB 数，对应 K8S request
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemRequest = null;

        /**
         * 子网id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 部署组资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupResourceType = null;

        /**
         * 部署组实例个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 部署组更新时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.CurrentNum = 'CurrentNum' in params ? params.CurrentNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Server = 'Server' in params ? params.Server : null;
        this.Reponame = 'Reponame' in params ? params.Reponame : null;
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.LbIp = 'LbIp' in params ? params.LbIp : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.ClusterIp = 'ClusterIp' in params ? params.ClusterIp : null;
        this.NodePort = 'NodePort' in params ? params.NodePort : null;
        this.CpuLimit = 'CpuLimit' in params ? params.CpuLimit : null;
        this.MemLimit = 'MemLimit' in params ? params.MemLimit : null;
        this.AccessType = 'AccessType' in params ? params.AccessType : null;
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;
        this.UpdateIvl = 'UpdateIvl' in params ? params.UpdateIvl : null;

        if (params.ProtocolPorts) {
            this.ProtocolPorts = new Array();
            for (let z in params.ProtocolPorts) {
                let obj = new ProtocolPort();
                obj.deserialize(params.ProtocolPorts[z]);
                this.ProtocolPorts.push(obj);
            }
        }

        if (params.Envs) {
            this.Envs = new Array();
            for (let z in params.Envs) {
                let obj = new Env();
                obj.deserialize(params.Envs[z]);
                this.Envs.push(obj);
            }
        }
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MicroserviceType = 'MicroserviceType' in params ? params.MicroserviceType : null;
        this.CpuRequest = 'CpuRequest' in params ? params.CpuRequest : null;
        this.MemRequest = 'MemRequest' in params ? params.MemRequest : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.GroupResourceType = 'GroupResourceType' in params ? params.GroupResourceType : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

    }
}

/**
 * DeletePublicConfig请求参数结构体
 * @class
 */
class DeletePublicConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项ID
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * DeleteNamespace返回参数结构体
 * @class
 */
class DeleteNamespaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除命名空间是否成功。
true：删除成功。
false：删除失败。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMicroservice请求参数结构体
 * @class
 */
class CreateMicroserviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 微服务名称
         * @type {string || null}
         */
        this.MicroserviceName = null;

        /**
         * 微服务描述信息
         * @type {string || null}
         */
        this.MicroserviceDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.MicroserviceName = 'MicroserviceName' in params ? params.MicroserviceName : null;
        this.MicroserviceDesc = 'MicroserviceDesc' in params ? params.MicroserviceDesc : null;

    }
}

/**
 * DescribePkgs请求参数结构体
 * @class
 */
class DescribePkgsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID（只传入应用ID，返回该应用下所有软件包信息）
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 查询关键字（支持根据包ID，包名，包版本号搜索）
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 排序关键字（默认为"UploadTime"：上传时间）
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 升序：0/降序：1（默认降序）
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 查询起始偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量限制
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ReleaseConfig返回参数结构体
 * @class
 */
class ReleaseConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true：发布成功；false：发布失败
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 集群 ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 云主机 ID 列表
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;

    }
}

/**
 * ShrinkInstances请求参数结构体
 * @class
 */
class ShrinkInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 下线机器实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;

    }
}

/**
 * ShrinkInstances返回参数结构体
 * @class
 */
class ShrinkInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {TaskId || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TaskId();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteImageTags请求参数结构体
 * @class
 */
class DeleteImageTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像版本数组
         * @type {Array.<DeleteImageTag> || null}
         */
        this.ImageTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageTags) {
            this.ImageTags = new Array();
            for (let z in params.ImageTags) {
                let obj = new DeleteImageTag();
                obj.deserialize(params.ImageTags[z]);
                this.ImageTags.push(obj);
            }
        }

    }
}

/**
 * DescribeApplicationAttribute请求参数结构体
 * @class
 */
class DescribeApplicationAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * DescribePodInstances请求参数结构体
 * @class
 */
class DescribePodInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属groupId
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 偏移量，取值从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页个数，默认为20， 取值应为1~50
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * TSF简单部署组分页列表
 * @class
 */
class TsfPageSimpleGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 简单部署组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SimpleGroup> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new SimpleGroup();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribeConfigs请求参数结构体
 * @class
 */
class DescribeConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，不传入时查询全量
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 配置项ID，不传入时查询全量，高优先级
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 配置项ID列表，不传入时查询全量，低优先级
         * @type {Array.<string> || null}
         */
        this.ConfigIdList = null;

        /**
         * 配置项名称，精确查询，不传入时查询全量
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 配置项版本，精确查询，不传入时查询全量
         * @type {string || null}
         */
        this.ConfigVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ConfigIdList = 'ConfigIdList' in params ? params.ConfigIdList : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ConfigVersion = 'ConfigVersion' in params ? params.ConfigVersion : null;

    }
}

/**
 * 提供给前端，控制按钮是否显示
 * @class
 */
class OperationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 初始化按钮的控制信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OperationInfoDetail || null}
         */
        this.Init = null;

        /**
         * 添加实例按钮的控制信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OperationInfoDetail || null}
         */
        this.AddInstance = null;

        /**
         * 销毁机器的控制信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OperationInfoDetail || null}
         */
        this.Destroy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Init) {
            let obj = new OperationInfoDetail();
            obj.deserialize(params.Init)
            this.Init = obj;
        }

        if (params.AddInstance) {
            let obj = new OperationInfoDetail();
            obj.deserialize(params.AddInstance)
            this.AddInstance = obj;
        }

        if (params.Destroy) {
            let obj = new OperationInfoDetail();
            obj.deserialize(params.Destroy)
            this.Destroy = obj;
        }

    }
}

/**
 * AddClusterInstances请求参数结构体
 * @class
 */
class AddClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 云主机ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

        /**
         * 操作系统名称
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 操作系统镜像ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 重装系统密码设置
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 重装系统，关联密钥设置
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 安全组设置
         * @type {string || null}
         */
        this.SgId = null;

        /**
         * 云主机导入方式，虚拟机集群必填，容器集群不填写此字段，R：重装TSF系统镜像，M：手动安装agent
         * @type {string || null}
         */
        this.InstanceImportMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.SgId = 'SgId' in params ? params.SgId : null;
        this.InstanceImportMode = 'InstanceImportMode' in params ? params.InstanceImportMode : null;

    }
}

/**
 * DescribePublicConfig返回参数结构体
 * @class
 */
class DescribePublicConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全局配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Config || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new Config();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RollbackConfig请求参数结构体
 * @class
 */
class RollbackConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项发布历史ID
         * @type {string || null}
         */
        this.ConfigReleaseLogId = null;

        /**
         * 回滚描述
         * @type {string || null}
         */
        this.ReleaseDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigReleaseLogId = 'ConfigReleaseLogId' in params ? params.ConfigReleaseLogId : null;
        this.ReleaseDesc = 'ReleaseDesc' in params ? params.ReleaseDesc : null;

    }
}

/**
 * DeleteConfig返回参数结构体
 * @class
 */
class DeleteConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true：删除成功；false：删除失败
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Tsf命名空间分页对象
 * @class
 */
class TsfPageNamespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 命名空间列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Namespace> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new Namespace();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribeContainerGroups返回参数结构体
 * @class
 */
class DescribeContainerGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的权限数据对象
         * @type {ContainGroupResult || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new ContainGroupResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSimpleApplications请求参数结构体
 * @class
 */
class DescribeSimpleApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID列表
         * @type {Array.<string> || null}
         */
        this.ApplicationIdList = null;

        /**
         * 应用类型
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * 每页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 起始偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 微服务类型
         * @type {string || null}
         */
        this.MicroserviceType = null;

        /**
         * 资源类型数组
         * @type {Array.<string> || null}
         */
        this.ApplicationResourceTypeList = null;

        /**
         * 通过id和name进行关键词过滤
         * @type {string || null}
         */
        this.SearchWord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationIdList = 'ApplicationIdList' in params ? params.ApplicationIdList : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.MicroserviceType = 'MicroserviceType' in params ? params.MicroserviceType : null;
        this.ApplicationResourceTypeList = 'ApplicationResourceTypeList' in params ? params.ApplicationResourceTypeList : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * DescribeConfig返回参数结构体
 * @class
 */
class DescribeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Config || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new Config();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSimpleNamespaces请求参数结构体
 * @class
 */
class DescribeSimpleNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间ID列表，不传入时查询全量
         * @type {Array.<string> || null}
         */
        this.NamespaceIdList = null;

        /**
         * 集群ID，不传入时查询全量
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 每页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 起始偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 命名空间ID，不传入时查询全量
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 查询资源类型列表
         * @type {Array.<string> || null}
         */
        this.NamespaceResourceTypeList = null;

        /**
         * 通过id和name进行过滤
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 查询的命名空间类型列表
         * @type {Array.<string> || null}
         */
        this.NamespaceTypeList = null;

        /**
         * 通过命名空间名精确过滤
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 通过是否是默认命名空间过滤，不传表示拉取全部命名空间。0：默认，命名空间。1：非默认命名空间
         * @type {string || null}
         */
        this.IsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceIdList = 'NamespaceIdList' in params ? params.NamespaceIdList : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceResourceTypeList = 'NamespaceResourceTypeList' in params ? params.NamespaceResourceTypeList : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.NamespaceTypeList = 'NamespaceTypeList' in params ? params.NamespaceTypeList : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

    }
}

/**
 * 泳道规则
 * @class
 */
class LaneRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 泳道规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 泳道规则名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 优先级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 泳道规则标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LaneRuleTag> || null}
         */
        this.RuleTagList = null;

        /**
         * 泳道规则标签关系
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleTagRelationship = null;

        /**
         * 泳道ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LaneId = null;

        /**
         * 开启状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.RuleTagList) {
            this.RuleTagList = new Array();
            for (let z in params.RuleTagList) {
                let obj = new LaneRuleTag();
                obj.deserialize(params.RuleTagList[z]);
                this.RuleTagList.push(obj);
            }
        }
        this.RuleTagRelationship = 'RuleTagRelationship' in params ? params.RuleTagRelationship : null;
        this.LaneId = 'LaneId' in params ? params.LaneId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 微服务实例信息
 * @class
 */
class MsInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器实例ID信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 机器实例名称信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 服务运行的端口号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 机器实例内网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 机器实例外网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * 机器可用状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceAvailableStatus = null;

        /**
         * 服务运行状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceInstanceStatus = null;

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 机器TSF可用状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceStatus = null;

        /**
         * 健康检查URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HealthCheckUrl = null;

        /**
         * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 应用程序包版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationPackageVersion = null;

        /**
         * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.InstanceAvailableStatus = 'InstanceAvailableStatus' in params ? params.InstanceAvailableStatus : null;
        this.ServiceInstanceStatus = 'ServiceInstanceStatus' in params ? params.ServiceInstanceStatus : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.HealthCheckUrl = 'HealthCheckUrl' in params ? params.HealthCheckUrl : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ApplicationPackageVersion = 'ApplicationPackageVersion' in params ? params.ApplicationPackageVersion : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;

    }
}

/**
 * ExpandGroup返回参数结构体
 * @class
 */
class ExpandGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskId || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TaskId();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeServerlessGroups返回参数结构体
 * @class
 */
class DescribeServerlessGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据列表对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServerlessGroupPage || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new ServerlessGroupPage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePublicConfigs返回参数结构体
 * @class
 */
class DescribePublicConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页后的全局配置项列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageConfig || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageConfig();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLaneRule请求参数结构体
 * @class
 */
class ModifyLaneRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 泳道规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 泳道规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 泳道规则备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 泳道规则标签列表
         * @type {Array.<LaneRuleTag> || null}
         */
        this.RuleTagList = null;

        /**
         * 泳道规则标签关系
         * @type {string || null}
         */
        this.RuleTagRelationship = null;

        /**
         * 泳道ID
         * @type {string || null}
         */
        this.LaneId = null;

        /**
         * 开启状态
         * @type {boolean || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.RuleTagList) {
            this.RuleTagList = new Array();
            for (let z in params.RuleTagList) {
                let obj = new LaneRuleTag();
                obj.deserialize(params.RuleTagList[z]);
                this.RuleTagList.push(obj);
            }
        }
        this.RuleTagRelationship = 'RuleTagRelationship' in params ? params.RuleTagRelationship : null;
        this.LaneId = 'LaneId' in params ? params.LaneId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * AddInstances返回参数结构体
 * @class
 */
class AddInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加云主机是否成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApplication请求参数结构体
 * @class
 */
class DeleteApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * RevocationPublicConfig请求参数结构体
 * @class
 */
class RevocationPublicConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项发布ID
         * @type {string || null}
         */
        this.ConfigReleaseId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigReleaseId = 'ConfigReleaseId' in params ? params.ConfigReleaseId : null;

    }
}

/**
 * DescribeSimpleClusters请求参数结构体
 * @class
 */
class DescribeSimpleClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的集群ID列表，不填或不传入时查询所有内容
         * @type {Array.<string> || null}
         */
        this.ClusterIdList = null;

        /**
         * 需要查询的集群类型，不填或不传入时查询所有内容
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 查询偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页个数，默认为20， 取值应为1~50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 对id和name进行关键词过滤
         * @type {string || null}
         */
        this.SearchWord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIdList = 'ClusterIdList' in params ? params.ClusterIdList : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * StartContainerGroup请求参数结构体
 * @class
 */
class StartContainerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DeleteConfig请求参数结构体
 * @class
 */
class DeleteConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项ID
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * DescribePublicConfigReleaseLogs返回参数结构体
 * @class
 */
class DescribePublicConfigReleaseLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页后的公共配置项发布历史列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageConfigReleaseLog || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageConfigReleaseLog();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 虚拟机部署组列表简要字段
 * @class
 */
class VmGroupSimple extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * 部署组描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupDesc = null;

        /**
         * 部署组更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 部署组启动参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartupParameters = null;

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 部署组创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 应用微服务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MicroserviceType = null;

        /**
         * 部署组资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupResourceType = null;

        /**
         * 部署组更新时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.GroupDesc = 'GroupDesc' in params ? params.GroupDesc : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.StartupParameters = 'StartupParameters' in params ? params.StartupParameters : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.MicroserviceType = 'MicroserviceType' in params ? params.MicroserviceType : null;
        this.GroupResourceType = 'GroupResourceType' in params ? params.GroupResourceType : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

    }
}

/**
 * API 响应的参数结构描述
 * @class
 */
class ApiResponseDescr extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数描述
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 参数描述
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeployServerlessGroup请求参数结构体
 * @class
 */
class DeployServerlessGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 程序包ID
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 所需实例内存大小，取值为 1Gi 2Gi 4Gi 8Gi 16Gi，缺省为 1Gi，不传表示维持原态
         * @type {string || null}
         */
        this.Memory = null;

        /**
         * 要求最小实例数，取值范围 [1, 4]，缺省为 1，不传表示维持原态
         * @type {number || null}
         */
        this.InstanceRequest = null;

        /**
         * 部署组启动参数，不传表示维持原态
         * @type {string || null}
         */
        this.StartupParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceRequest = 'InstanceRequest' in params ? params.InstanceRequest : null;
        this.StartupParameters = 'StartupParameters' in params ? params.StartupParameters : null;

    }
}

/**
 * 配置项
 * @class
 */
class Config extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 配置项名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 配置项版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigVersion = null;

        /**
         * 配置项版本描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigVersionDesc = null;

        /**
         * 配置项值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigValue = null;

        /**
         * 配置项类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigType = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 删除标识，true：可以删除；false：不可删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DeleteFlag = null;

        /**
         * 最后更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastUpdateTime = null;

        /**
         * 配置项版本数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConfigVersionCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ConfigVersion = 'ConfigVersion' in params ? params.ConfigVersion : null;
        this.ConfigVersionDesc = 'ConfigVersionDesc' in params ? params.ConfigVersionDesc : null;
        this.ConfigValue = 'ConfigValue' in params ? params.ConfigValue : null;
        this.ConfigType = 'ConfigType' in params ? params.ConfigType : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.DeleteFlag = 'DeleteFlag' in params ? params.DeleteFlag : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.ConfigVersionCount = 'ConfigVersionCount' in params ? params.ConfigVersionCount : null;

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
         * 集群ID
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePublicConfig返回参数结构体
 * @class
 */
class DeletePublicConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true：删除成功；false：删除失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApiRequestDescr
 * @class
 */
class ApiRequestDescr extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 参数位置
         * @type {string || null}
         */
        this.In = null;

        /**
         * 参数描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 参数是否必须
         * @type {boolean || null}
         */
        this.Required = null;

        /**
         * 参数的默认值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DefaultValue = null;

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
        this.In = 'In' in params ? params.In : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Required = 'Required' in params ? params.Required : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;

    }
}

/**
 * CreateMicroservice返回参数结构体
 * @class
 */
class CreateMicroserviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增微服务是否成功。
true：操作成功。
false：操作失败。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * API版本数组
 * @class
 */
class ApiVersionArray extends  AbstractModel {
    constructor(){
        super();

        /**
         * App ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * App 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * App 包版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.PkgVersion = 'PkgVersion' in params ? params.PkgVersion : null;

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
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 分配给集群容器和服务IP的CIDR
         * @type {string || null}
         */
        this.ClusterCIDR = null;

        /**
         * 集群备注
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * 集群所属TSF地域
         * @type {string || null}
         */
        this.TsfRegionId = null;

        /**
         * 集群所属TSF可用区
         * @type {string || null}
         */
        this.TsfZoneId = null;

        /**
         * 私有网络子网ID
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
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ClusterCIDR = 'ClusterCIDR' in params ? params.ClusterCIDR : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.TsfRegionId = 'TsfRegionId' in params ? params.TsfRegionId : null;
        this.TsfZoneId = 'TsfZoneId' in params ? params.TsfZoneId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * StopGroup请求参数结构体
 * @class
 */
class StopGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 配置项发布日志
 * @class
 */
class ConfigReleaseLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项发布日志ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigReleaseLogId = null;

        /**
         * 配置项ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 配置项名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 配置项版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigVersion = null;

        /**
         * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleaseTime = null;

        /**
         * 发布描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleaseDesc = null;

        /**
         * 发布状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleaseStatus = null;

        /**
         * 上次发布的配置项ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastConfigId = null;

        /**
         * 上次发布的配置项名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastConfigName = null;

        /**
         * 上次发布的配置项版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastConfigVersion = null;

        /**
         * 回滚标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.RollbackFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigReleaseLogId = 'ConfigReleaseLogId' in params ? params.ConfigReleaseLogId : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ConfigVersion = 'ConfigVersion' in params ? params.ConfigVersion : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;
        this.ReleaseDesc = 'ReleaseDesc' in params ? params.ReleaseDesc : null;
        this.ReleaseStatus = 'ReleaseStatus' in params ? params.ReleaseStatus : null;
        this.LastConfigId = 'LastConfigId' in params ? params.LastConfigId : null;
        this.LastConfigName = 'LastConfigName' in params ? params.LastConfigName : null;
        this.LastConfigVersion = 'LastConfigVersion' in params ? params.LastConfigVersion : null;
        this.RollbackFlag = 'RollbackFlag' in params ? params.RollbackFlag : null;

    }
}

/**
 * ShrinkGroup返回参数结构体
 * @class
 */
class ShrinkGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskId || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TaskId();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * cos上传所需信息
 * @class
 */
class CosUploadInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 程序包ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 桶
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 目标地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 存储路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 鉴权信息
         * @type {CosCredentials || null}
         */
        this.Credentials = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Path = 'Path' in params ? params.Path : null;

        if (params.Credentials) {
            let obj = new CosCredentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }

    }
}

/**
 * 配置项发布信息
 * @class
 */
class ConfigRelease extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项发布ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigReleaseId = null;

        /**
         * 配置项ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 配置项名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 配置项版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigVersion = null;

        /**
         * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleaseTime = null;

        /**
         * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 发布描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleaseDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigReleaseId = 'ConfigReleaseId' in params ? params.ConfigReleaseId : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ConfigVersion = 'ConfigVersion' in params ? params.ConfigVersion : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ReleaseDesc = 'ReleaseDesc' in params ? params.ReleaseDesc : null;

    }
}

/**
 * DeleteContainerGroup请求参数结构体
 * @class
 */
class DeleteContainerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID，分组唯一标识
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeContainerGroupDetail请求参数结构体
 * @class
 */
class DescribeContainerGroupDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * ReleaseConfig请求参数结构体
 * @class
 */
class ReleaseConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 发布描述
         * @type {string || null}
         */
        this.ReleaseDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ReleaseDesc = 'ReleaseDesc' in params ? params.ReleaseDesc : null;

    }
}

/**
 * CreateConfig请求参数结构体
 * @class
 */
class CreateConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项名称
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 配置项版本
         * @type {string || null}
         */
        this.ConfigVersion = null;

        /**
         * 配置项值
         * @type {string || null}
         */
        this.ConfigValue = null;

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 配置项版本描述
         * @type {string || null}
         */
        this.ConfigVersionDesc = null;

        /**
         * 配置项值类型
         * @type {string || null}
         */
        this.ConfigType = null;

        /**
         * Base64编码的配置项
         * @type {boolean || null}
         */
        this.EncodeWithBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ConfigVersion = 'ConfigVersion' in params ? params.ConfigVersion : null;
        this.ConfigValue = 'ConfigValue' in params ? params.ConfigValue : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ConfigVersionDesc = 'ConfigVersionDesc' in params ? params.ConfigVersionDesc : null;
        this.ConfigType = 'ConfigType' in params ? params.ConfigType : null;
        this.EncodeWithBase64 = 'EncodeWithBase64' in params ? params.EncodeWithBase64 : null;

    }
}

/**
 * 微服务API数组
 * @class
 */
class MsApiArray extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 请求路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 请求方法
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 方法描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * API状态 0:离线 1:在线
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateNamespace请求参数结构体
 * @class
 */
class CreateNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间描述
         * @type {string || null}
         */
        this.NamespaceDesc = null;

        /**
         * 命名空间资源类型(默认值为DEF)
         * @type {string || null}
         */
        this.NamespaceResourceType = null;

        /**
         * 是否是全局命名空间(默认是DEF，表示普通命名空间；GLOBAL表示全局命名空间)
         * @type {string || null}
         */
        this.NamespaceType = null;

        /**
         * 命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceDesc = 'NamespaceDesc' in params ? params.NamespaceDesc : null;
        this.NamespaceResourceType = 'NamespaceResourceType' in params ? params.NamespaceResourceType : null;
        this.NamespaceType = 'NamespaceType' in params ? params.NamespaceType : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

    }
}

/**
 * DescribeApiDetail请求参数结构体
 * @class
 */
class DescribeApiDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务id
         * @type {string || null}
         */
        this.MicroserviceId = null;

        /**
         * 请求路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 请求方法
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 包版本
         * @type {string || null}
         */
        this.PkgVersion = null;

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MicroserviceId = 'MicroserviceId' in params ? params.MicroserviceId : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.PkgVersion = 'PkgVersion' in params ? params.PkgVersion : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * DescribeUploadInfo请求参数结构体
 * @class
 */
class DescribeUploadInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 程序包名
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * 程序包版本
         * @type {string || null}
         */
        this.PkgVersion = null;

        /**
         * 程序包类型
         * @type {string || null}
         */
        this.PkgType = null;

        /**
         * 程序包介绍
         * @type {string || null}
         */
        this.PkgDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.PkgVersion = 'PkgVersion' in params ? params.PkgVersion : null;
        this.PkgType = 'PkgType' in params ? params.PkgType : null;
        this.PkgDesc = 'PkgDesc' in params ? params.PkgDesc : null;

    }
}

/**
 * DescribeClusterInstances请求参数结构体
 * @class
 */
class DescribeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 搜索字段
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页个数
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * StopContainerGroup请求参数结构体
 * @class
 */
class StopContainerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 属性字段
 * @class
 */
class PropertyField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 属性类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 属性描述
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 应用分页信息
 * @class
 */
class TsfPageApplication extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用总数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 应用信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApplicationForPage> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new ApplicationForPage();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribeGroup请求参数结构体
 * @class
 */
class DescribeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 镜像版本列表
 * @class
 */
class ImageTagsResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 仓库名,含命名空间,如tsf/ngin
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 镜像服务器地址
         * @type {string || null}
         */
        this.Server = null;

        /**
         * 列表信息
         * @type {Array.<ImageTag> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Server = 'Server' in params ? params.Server : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new ImageTag();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * CreateLane返回参数结构体
 * @class
 */
class CreateLaneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 泳道ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeServerlessGroup请求参数结构体
 * @class
 */
class DescribeServerlessGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 列表中部署组分页信息
 * @class
 */
class TsfPageVmGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚拟机部署组总数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 虚拟机部署组列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VmGroupSimple> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new VmGroupSimple();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * 添加实例到集群的结果
 * @class
 */
class AddInstanceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加集群失败的节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

        /**
         * 添加集群成功的节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SuccInstanceIds = null;

        /**
         * 添加集群超时的节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TimeoutInstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.SuccInstanceIds = 'SuccInstanceIds' in params ? params.SuccInstanceIds : null;
        this.TimeoutInstanceIds = 'TimeoutInstanceIds' in params ? params.TimeoutInstanceIds : null;

    }
}

/**
 * DescribePkgs返回参数结构体
 * @class
 */
class DescribePkgsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询程序包信息列表
         * @type {PkgList || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new PkgList();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSimpleNamespaces返回参数结构体
 * @class
 */
class DescribeSimpleNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间分页列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageNamespace || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageNamespace();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 应用列表其它字段
 * @class
 */
class ApplicationAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总实例个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 运行实例个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunInstanceCount = null;

        /**
         * 应用下部署组个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.RunInstanceCount = 'RunInstanceCount' in params ? params.RunInstanceCount : null;
        this.GroupCount = 'GroupCount' in params ? params.GroupCount : null;

    }
}

/**
 * 需要删除的镜像版本
 * @class
 */
class DeleteImageTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名，如/tsf/nginx
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 版本号:如V1
         * @type {string || null}
         */
        this.TagName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.TagName = 'TagName' in params ? params.TagName : null;

    }
}

/**
 * DeletePkgs返回参数结构体
 * @class
 */
class DeletePkgsResponse extends  AbstractModel {
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
 * DescribeConfigReleases返回参数结构体
 * @class
 */
class DescribeConfigReleasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页的配置发布信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageConfigRelease || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageConfigRelease();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群
 * @class
 */
class Cluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群所属私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集群状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * 集群CIDR
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterCIDR = null;

        /**
         * 集群总CPU，单位: 核
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterTotalCpu = null;

        /**
         * 集群总内存，单位: G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterTotalMem = null;

        /**
         * 集群已使用CPU，单位: 核
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterUsedCpu = null;

        /**
         * 集群已使用内存，单位: G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterUsedMem = null;

        /**
         * 集群机器实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 集群可用的机器实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunInstanceCount = null;

        /**
         * 集群正常状态的机器实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NormalInstanceCount = null;

        /**
         * 删除标记：true：可以删除；false：不可删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DeleteFlag = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 集群所属TSF地域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TsfRegionId = null;

        /**
         * 集群所属TSF地域名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TsfRegionName = null;

        /**
         * 集群所属TSF可用区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TsfZoneId = null;

        /**
         * 集群所属TSF可用区名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TsfZoneName = null;

        /**
         * 集群不可删除的原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeleteFlagReason = null;

        /**
         * 集群最大CPU限制，单位：核
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterLimitCpu = null;

        /**
         * 集群最大内存限制，单位：G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterLimitMem = null;

        /**
         * 集群可用的服务实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunServiceInstanceCount = null;

        /**
         * 集群所属子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 返回给前端的控制信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OperationInfo || null}
         */
        this.OperationInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.ClusterCIDR = 'ClusterCIDR' in params ? params.ClusterCIDR : null;
        this.ClusterTotalCpu = 'ClusterTotalCpu' in params ? params.ClusterTotalCpu : null;
        this.ClusterTotalMem = 'ClusterTotalMem' in params ? params.ClusterTotalMem : null;
        this.ClusterUsedCpu = 'ClusterUsedCpu' in params ? params.ClusterUsedCpu : null;
        this.ClusterUsedMem = 'ClusterUsedMem' in params ? params.ClusterUsedMem : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.RunInstanceCount = 'RunInstanceCount' in params ? params.RunInstanceCount : null;
        this.NormalInstanceCount = 'NormalInstanceCount' in params ? params.NormalInstanceCount : null;
        this.DeleteFlag = 'DeleteFlag' in params ? params.DeleteFlag : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TsfRegionId = 'TsfRegionId' in params ? params.TsfRegionId : null;
        this.TsfRegionName = 'TsfRegionName' in params ? params.TsfRegionName : null;
        this.TsfZoneId = 'TsfZoneId' in params ? params.TsfZoneId : null;
        this.TsfZoneName = 'TsfZoneName' in params ? params.TsfZoneName : null;
        this.DeleteFlagReason = 'DeleteFlagReason' in params ? params.DeleteFlagReason : null;
        this.ClusterLimitCpu = 'ClusterLimitCpu' in params ? params.ClusterLimitCpu : null;
        this.ClusterLimitMem = 'ClusterLimitMem' in params ? params.ClusterLimitMem : null;
        this.RunServiceInstanceCount = 'RunServiceInstanceCount' in params ? params.RunServiceInstanceCount : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.OperationInfo) {
            let obj = new OperationInfo();
            obj.deserialize(params.OperationInfo)
            this.OperationInfo = obj;
        }

    }
}

/**
 * ModifyMicroservice返回参数结构体
 * @class
 */
class ModifyMicroserviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改微服务详情是否成功。
true：操作成功。
false：操作失败。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMicroservices返回参数结构体
 * @class
 */
class DescribeMicroservicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务分页列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageMicroservice || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageMicroservice();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDownloadInfo返回参数结构体
 * @class
 */
class DescribeDownloadInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS鉴权信息
         * @type {CosDownloadInfo || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new CosDownloadInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 部署组实例列表
 * @class
 */
class GroupPodResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupPod> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new GroupPod();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribeApplication请求参数结构体
 * @class
 */
class DescribeApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * 微服务
 * @class
 */
class Microservice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MicroserviceId = null;

        /**
         * 微服务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MicroserviceName = null;

        /**
         * 微服务描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MicroserviceDesc = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 微服务的运行实例数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunInstanceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MicroserviceId = 'MicroserviceId' in params ? params.MicroserviceId : null;
        this.MicroserviceName = 'MicroserviceName' in params ? params.MicroserviceName : null;
        this.MicroserviceDesc = 'MicroserviceDesc' in params ? params.MicroserviceDesc : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.RunInstanceCount = 'RunInstanceCount' in params ? params.RunInstanceCount : null;

    }
}

/**
 * TSF配置项发布日志分页对象
 * @class
 */
class TsfPageConfigReleaseLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 配置项发布日志数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConfigReleaseLog> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new ConfigReleaseLog();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribePublicConfig请求参数结构体
 * @class
 */
class DescribePublicConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的配置项ID
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * 分页的应用描述信息字段
 * @class
 */
class ApplicationForPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 应用描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationDesc = null;

        /**
         * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * 微服务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MicroserviceType = null;

        /**
         * 编程语言
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProgLang = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 应用资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationResourceType = null;

        /**
         * 应用runtime类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationRuntimeType = null;

        /**
         * Apigateway的serviceId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApigatewayServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.ApplicationDesc = 'ApplicationDesc' in params ? params.ApplicationDesc : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.MicroserviceType = 'MicroserviceType' in params ? params.MicroserviceType : null;
        this.ProgLang = 'ProgLang' in params ? params.ProgLang : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ApplicationResourceType = 'ApplicationResourceType' in params ? params.ApplicationResourceType : null;
        this.ApplicationRuntimeType = 'ApplicationRuntimeType' in params ? params.ApplicationRuntimeType : null;
        this.ApigatewayServiceId = 'ApigatewayServiceId' in params ? params.ApigatewayServiceId : null;

    }
}

/**
 * StartGroup返回参数结构体
 * @class
 */
class StartGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskId || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TaskId();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeployContainerGroup返回参数结构体
 * @class
 */
class DeployContainerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署容器应用是否成功。
true：成功。
false：失败。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePublicConfig返回参数结构体
 * @class
 */
class CreatePublicConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true：创建成功；false：创建失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMicroservice返回参数结构体
 * @class
 */
class DeleteMicroserviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除微服务是否成功。
true：操作成功。
false：操作失败。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLanes返回参数结构体
 * @class
 */
class DescribeLanesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 泳道列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LaneInfos || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new LaneInfos();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 部署组列表（应用下钻）
 * @class
 */
class ContainGroupResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ContainGroup> || null}
         */
        this.Content = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new ContainGroup();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * 	端口对象
 * @class
 */
class ProtocolPort extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCP UDP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 服务端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 容器端口
         * @type {number || null}
         */
        this.TargetPort = null;

        /**
         * 主机端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NodePort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.TargetPort = 'TargetPort' in params ? params.TargetPort : null;
        this.NodePort = 'NodePort' in params ? params.NodePort : null;

    }
}

/**
 * 泳道规则分页查询
 * @class
 */
class LaneRules extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 泳道规则列表
         * @type {Array.<LaneRule> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new LaneRule();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribeReleasedConfig返回参数结构体
 * @class
 */
class DescribeReleasedConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已发布的配置内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMicroservices请求参数结构体
 * @class
 */
class DescribeMicroservicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 搜索字段
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页个数
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
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ShrinkGroup请求参数结构体
 * @class
 */
class ShrinkGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * TSF分页简单应用对象
 * @class
 */
class TsfPageSimpleApplication extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 简单应用列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SimpleApplication> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new SimpleApplication();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * CreateConfig返回参数结构体
 * @class
 */
class CreateConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true：创建成功；false：创建失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddClusterInstances返回参数结构体
 * @class
 */
class AddClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加云主机的返回列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AddInstanceResult || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new AddInstanceResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 包信息
 * @class
 */
class PkgInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 程序包ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 程序包名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgName = null;

        /**
         * 程序包类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgType = null;

        /**
         * 程序包版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgVersion = null;

        /**
         * 程序包描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgDesc = null;

        /**
         * 上传时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UploadTime = null;

        /**
         * 程序包MD5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 程序包状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PkgPubStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgName = 'PkgName' in params ? params.PkgName : null;
        this.PkgType = 'PkgType' in params ? params.PkgType : null;
        this.PkgVersion = 'PkgVersion' in params ? params.PkgVersion : null;
        this.PkgDesc = 'PkgDesc' in params ? params.PkgDesc : null;
        this.UploadTime = 'UploadTime' in params ? params.UploadTime : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.PkgPubStatus = 'PkgPubStatus' in params ? params.PkgPubStatus : null;

    }
}

/**
 * RevocationPublicConfig返回参数结构体
 * @class
 */
class RevocationPublicConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true：撤销成功；false：撤销失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLaneRule返回参数结构体
 * @class
 */
class CreateLaneRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 泳道规则Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigReleaseLogs请求参数结构体
 * @class
 */
class DescribeConfigReleaseLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID，不传入时查询全量
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条数，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 命名空间ID，不传入时查询全量
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 集群ID，不传入时查询全量
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 应用ID，不传入时查询全量
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * DescribeApiDetail返回参数结构体
 * @class
 */
class DescribeApiDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 详情
         * @type {ApiDetailResponse || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new ApiDetailResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGroups请求参数结构体
 * @class
 */
class DescribeGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索字段
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页个数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 部署组资源类型列表
         * @type {Array.<string> || null}
         */
        this.GroupResourceTypeList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupResourceTypeList = 'GroupResourceTypeList' in params ? params.GroupResourceTypeList : null;

    }
}

/**
 * ModifyContainerGroup请求参数结构体
 * @class
 */
class ModifyContainerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 0:公网 1:集群内访问 2：NodePort
         * @type {number || null}
         */
        this.AccessType = null;

        /**
         * ProtocolPorts数组
         * @type {Array.<ProtocolPort> || null}
         */
        this.ProtocolPorts = null;

        /**
         * 更新方式：0:快速更新 1:滚动更新
         * @type {number || null}
         */
        this.UpdateType = null;

        /**
         * 更新间隔,单位秒
         * @type {number || null}
         */
        this.UpdateIvl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.AccessType = 'AccessType' in params ? params.AccessType : null;

        if (params.ProtocolPorts) {
            this.ProtocolPorts = new Array();
            for (let z in params.ProtocolPorts) {
                let obj = new ProtocolPort();
                obj.deserialize(params.ProtocolPorts[z]);
                this.ProtocolPorts.push(obj);
            }
        }
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;
        this.UpdateIvl = 'UpdateIvl' in params ? params.UpdateIvl : null;

    }
}

/**
 * 微服务列表信息
 * @class
 */
class TsfPageMicroservice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务总数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 微服务列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Microservice> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new Microservice();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribePublicConfigs请求参数结构体
 * @class
 */
class DescribePublicConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项ID，不传入时查询全量，高优先级
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条数，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 配置项ID列表，不传入时查询全量，低优先级
         * @type {Array.<string> || null}
         */
        this.ConfigIdList = null;

        /**
         * 配置项名称，精确查询，不传入时查询全量
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 配置项版本，精确查询，不传入时查询全量
         * @type {string || null}
         */
        this.ConfigVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ConfigIdList = 'ConfigIdList' in params ? params.ConfigIdList : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ConfigVersion = 'ConfigVersion' in params ? params.ConfigVersion : null;

    }
}

/**
 * AddInstances请求参数结构体
 * @class
 */
class AddInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 云主机ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

        /**
         * 操作系统名称
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 操作系统镜像ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 重装系统密码设置
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 重装系统，关联密钥设置
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 安全组设置
         * @type {string || null}
         */
        this.SgId = null;

        /**
         * 云主机导入方式，虚拟机集群必填，容器集群不填写此字段，R：重装TSF系统镜像，M：手动安装agent
         * @type {string || null}
         */
        this.InstanceImportMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.SgId = 'SgId' in params ? params.SgId : null;
        this.InstanceImportMode = 'InstanceImportMode' in params ? params.InstanceImportMode : null;

    }
}

/**
 * StartGroup请求参数结构体
 * @class
 */
class StartGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 泳道规则标签
 * @class
 */
class LaneRuleTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagId = null;

        /**
         * 标签名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 标签操作符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagOperator = null;

        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * 泳道规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LaneRuleId = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagId = 'TagId' in params ? params.TagId : null;
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.TagOperator = 'TagOperator' in params ? params.TagOperator : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.LaneRuleId = 'LaneRuleId' in params ? params.LaneRuleId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * RollbackConfig返回参数结构体
 * @class
 */
class RollbackConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true：回滚成功；false：回滚失败
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplications请求参数结构体
 * @class
 */
class DescribeApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索字段
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页个数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 应用类型
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * 应用的微服务类型
         * @type {string || null}
         */
        this.MicroserviceType = null;

        /**
         * 应用资源类型数组
         * @type {Array.<string> || null}
         */
        this.ApplicationResourceTypeList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.MicroserviceType = 'MicroserviceType' in params ? params.MicroserviceType : null;
        this.ApplicationResourceTypeList = 'ApplicationResourceTypeList' in params ? params.ApplicationResourceTypeList : null;

    }
}

/**
 * 提供给前端控制按钮显示逻辑的字段
 * @class
 */
class OperationInfoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 不显示的原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisabledReason = null;

        /**
         * 该按钮是否可点击
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 是否显示该按钮
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Supported = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisabledReason = 'DisabledReason' in params ? params.DisabledReason : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Supported = 'Supported' in params ? params.Supported : null;

    }
}

/**
 * StartContainerGroup返回参数结构体
 * @class
 */
class StartContainerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启动操作是否成功。
true：启动成功
false：启动失败
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApplication请求参数结构体
 * @class
 */
class CreateApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 应用类型，V：虚拟机应用；C：容器应用；S：serverless应用
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * 应用微服务类型，M：service mesh应用；N：普通应用；G：网关应用
         * @type {string || null}
         */
        this.MicroserviceType = null;

        /**
         * 应用描述
         * @type {string || null}
         */
        this.ApplicationDesc = null;

        /**
         * 应用日志配置项，废弃参数
         * @type {string || null}
         */
        this.ApplicationLogConfig = null;

        /**
         * 应用资源类型，废弃参数
         * @type {string || null}
         */
        this.ApplicationResourceType = null;

        /**
         * 应用runtime类型
         * @type {string || null}
         */
        this.ApplicationRuntimeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.MicroserviceType = 'MicroserviceType' in params ? params.MicroserviceType : null;
        this.ApplicationDesc = 'ApplicationDesc' in params ? params.ApplicationDesc : null;
        this.ApplicationLogConfig = 'ApplicationLogConfig' in params ? params.ApplicationLogConfig : null;
        this.ApplicationResourceType = 'ApplicationResourceType' in params ? params.ApplicationResourceType : null;
        this.ApplicationRuntimeType = 'ApplicationRuntimeType' in params ? params.ApplicationRuntimeType : null;

    }
}

/**
 * DescribePublicConfigReleases请求参数结构体
 * @class
 */
class DescribePublicConfigReleasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项名称，不传入时查询全量
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 命名空间ID，不传入时查询全量
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 每页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 配置项ID，不传入时查询全量
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

    }
}

/**
 * 部署组
 * @class
 */
class SimpleGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 启动参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartupParameters = null;

        /**
         * 部署组资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupResourceType = null;

        /**
         * 应用微服务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppMicroServiceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.StartupParameters = 'StartupParameters' in params ? params.StartupParameters : null;
        this.GroupResourceType = 'GroupResourceType' in params ? params.GroupResourceType : null;
        this.AppMicroServiceType = 'AppMicroServiceType' in params ? params.AppMicroServiceType : null;

    }
}

/**
 * DeleteNamespace请求参数结构体
 * @class
 */
class DeleteNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 集群ID
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
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeLaneRules请求参数结构体
 * @class
 */
class DescribeLaneRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页展示的条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 翻页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 搜索关键词
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 泳道规则ID（用于精确搜索）
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DeployGroup请求参数结构体
 * @class
 */
class DeployGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 程序包ID
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 部署组启动参数
         * @type {string || null}
         */
        this.StartupParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.StartupParameters = 'StartupParameters' in params ? params.StartupParameters : null;

    }
}

/**
 * 泳道分页查询
 * @class
 */
class LaneInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 泳道信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LaneInfo> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new LaneInfo();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * CreateServerlessGroup请求参数结构体
 * @class
 */
class CreateServerlessGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组所属应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 分组名称字段，长度1~60，字母或下划线开头，可包含字母数字下划线
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 分组所属名字空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 分组所属集群ID
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeMicroservice返回参数结构体
 * @class
 */
class DescribeMicroserviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务详情实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageMsInstance || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageMsInstance();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteGroup返回参数结构体
 * @class
 */
class DeleteGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除部署组操作是否成功。
true：操作成功。
false：操作失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLaneRule请求参数结构体
 * @class
 */
class CreateLaneRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 泳道规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 泳道规则备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 泳道规则标签列表
         * @type {Array.<LaneRuleTag> || null}
         */
        this.RuleTagList = null;

        /**
         * 泳道规则标签关系
         * @type {string || null}
         */
        this.RuleTagRelationship = null;

        /**
         * 泳道Id
         * @type {string || null}
         */
        this.LaneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.RuleTagList) {
            this.RuleTagList = new Array();
            for (let z in params.RuleTagList) {
                let obj = new LaneRuleTag();
                obj.deserialize(params.RuleTagList[z]);
                this.RuleTagList.push(obj);
            }
        }
        this.RuleTagRelationship = 'RuleTagRelationship' in params ? params.RuleTagRelationship : null;
        this.LaneId = 'LaneId' in params ? params.LaneId : null;

    }
}

/**
 * DescribeServerlessGroups请求参数结构体
 * @class
 */
class DescribeServerlessGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索字段，模糊搜索groupName字段
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 分组所属应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 排序字段，默认为 createTime字段，支持id， name， createTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式，默认为1：倒序排序，0：正序，1：倒序
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * 偏移量，取值从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页个数，默认为20， 取值应为1~50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分组所属名字空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 分组所属集群ID
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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DeployContainerGroup请求参数结构体
 * @class
 */
class DeployContainerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID，分组唯一标识
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 镜像server
         * @type {string || null}
         */
        this.Server = null;

        /**
         * 镜像版本名称,如v1
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * 旧版镜像名，如/tsf/nginx
         * @type {string || null}
         */
        this.Reponame = null;

        /**
         * 业务容器最大的 CPU 核数，对应 K8S 的 limit；不填时默认为 request 的 2 倍
         * @type {string || null}
         */
        this.CpuLimit = null;

        /**
         * 业务容器最大的内存 MiB 数，对应 K8S 的 limit；不填时默认为 request 的 2 倍
         * @type {string || null}
         */
        this.MemLimit = null;

        /**
         * jvm参数
         * @type {string || null}
         */
        this.JvmOpts = null;

        /**
         * 业务容器分配的 CPU 核数，对应 K8S 的 request
         * @type {string || null}
         */
        this.CpuRequest = null;

        /**
         * 业务容器分配的内存 MiB 数，对应 K8S 的 request
         * @type {string || null}
         */
        this.MemRequest = null;

        /**
         * 是否不立即启动
         * @type {boolean || null}
         */
        this.DoNotStart = null;

        /**
         * （优先使用）新版镜像名，如/tsf/nginx
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 更新方式：0:快速更新 1:滚动更新
         * @type {number || null}
         */
        this.UpdateType = null;

        /**
         * 滚动更新必填，更新间隔
         * @type {number || null}
         */
        this.UpdateIvl = null;

        /**
         * agent 容器分配的 CPU 核数，对应 K8S 的 request
         * @type {string || null}
         */
        this.AgentCpuRequest = null;

        /**
         * agent 容器最大的 CPU 核数，对应 K8S 的 limit
         * @type {string || null}
         */
        this.AgentCpuLimit = null;

        /**
         * agent 容器分配的内存 MiB 数，对应 K8S 的 request
         * @type {string || null}
         */
        this.AgentMemRequest = null;

        /**
         * agent 容器最大的内存 MiB 数，对应 K8S 的 limit
         * @type {string || null}
         */
        this.AgentMemLimit = null;

        /**
         * istioproxy 容器分配的 CPU 核数，对应 K8S 的 request
         * @type {string || null}
         */
        this.IstioCpuRequest = null;

        /**
         * istioproxy 容器最大的 CPU 核数，对应 K8S 的 limit
         * @type {string || null}
         */
        this.IstioCpuLimit = null;

        /**
         * istioproxy 容器分配的内存 MiB 数，对应 K8S 的 request
         * @type {string || null}
         */
        this.IstioMemRequest = null;

        /**
         * istioproxy 容器最大的内存 MiB 数，对应 K8S 的 limit
         * @type {string || null}
         */
        this.IstioMemLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Server = 'Server' in params ? params.Server : null;
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.Reponame = 'Reponame' in params ? params.Reponame : null;
        this.CpuLimit = 'CpuLimit' in params ? params.CpuLimit : null;
        this.MemLimit = 'MemLimit' in params ? params.MemLimit : null;
        this.JvmOpts = 'JvmOpts' in params ? params.JvmOpts : null;
        this.CpuRequest = 'CpuRequest' in params ? params.CpuRequest : null;
        this.MemRequest = 'MemRequest' in params ? params.MemRequest : null;
        this.DoNotStart = 'DoNotStart' in params ? params.DoNotStart : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;
        this.UpdateIvl = 'UpdateIvl' in params ? params.UpdateIvl : null;
        this.AgentCpuRequest = 'AgentCpuRequest' in params ? params.AgentCpuRequest : null;
        this.AgentCpuLimit = 'AgentCpuLimit' in params ? params.AgentCpuLimit : null;
        this.AgentMemRequest = 'AgentMemRequest' in params ? params.AgentMemRequest : null;
        this.AgentMemLimit = 'AgentMemLimit' in params ? params.AgentMemLimit : null;
        this.IstioCpuRequest = 'IstioCpuRequest' in params ? params.IstioCpuRequest : null;
        this.IstioCpuLimit = 'IstioCpuLimit' in params ? params.IstioCpuLimit : null;
        this.IstioMemRequest = 'IstioMemRequest' in params ? params.IstioMemRequest : null;
        this.IstioMemLimit = 'IstioMemLimit' in params ? params.IstioMemLimit : null;

    }
}

/**
 * Cos下载所需信息
 * @class
 */
class CosDownloadInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 桶名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 鉴权信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosCredentials || null}
         */
        this.Credentials = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Path = 'Path' in params ? params.Path : null;

        if (params.Credentials) {
            let obj = new CosCredentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }

    }
}

/**
 * DeletePkgs请求参数结构体
 * @class
 */
class DeletePkgsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 需要删除的程序包ID列表
         * @type {Array.<string> || null}
         */
        this.PkgIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.PkgIds = 'PkgIds' in params ? params.PkgIds : null;

    }
}

/**
 * TSF机器实例分页对象
 * @class
 */
class TsfPageInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器实例总数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 机器实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Instance> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new Instance();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * ServerlessGroup 翻页对象
 * @class
 */
class ServerlessGroupPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServerlessGroup> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new ServerlessGroup();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribeConfigSummary返回参数结构体
 * @class
 */
class DescribeConfigSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项分页对象
         * @type {TsfPageConfig || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageConfig();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateContainGroup请求参数结构体
 * @class
 */
class CreateContainGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组所属应用ID
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 分组所属命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 分组名称字段，长度1~60，字母或下划线开头，可包含字母数字下划线
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * 0:公网 1:集群内访问 2：NodePort
         * @type {number || null}
         */
        this.AccessType = null;

        /**
         * 数组对象，见下方定义
         * @type {Array.<ProtocolPort> || null}
         */
        this.ProtocolPorts = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 最大分配 CPU 核数，对应 K8S limit
         * @type {string || null}
         */
        this.CpuLimit = null;

        /**
         * 最大分配内存 MiB 数，对应 K8S limit
         * @type {string || null}
         */
        this.MemLimit = null;

        /**
         * 分组备注字段，长度应不大于200字符
         * @type {string || null}
         */
        this.GroupComment = null;

        /**
         * 更新方式：0:快速更新 1:滚动更新
         * @type {number || null}
         */
        this.UpdateType = null;

        /**
         * 滚动更新必填，更新间隔
         * @type {number || null}
         */
        this.UpdateIvl = null;

        /**
         * 初始分配的 CPU 核数，对应 K8S request
         * @type {string || null}
         */
        this.CpuRequest = null;

        /**
         * 初始分配的内存 MiB 数，对应 K8S request
         * @type {string || null}
         */
        this.MemRequest = null;

        /**
         * 部署组资源类型
         * @type {string || null}
         */
        this.GroupResourceType = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * agent 容器分配的 CPU 核数，对应 K8S 的 request
         * @type {string || null}
         */
        this.AgentCpuRequest = null;

        /**
         * agent 容器最大的 CPU 核数，对应 K8S 的 limit
         * @type {string || null}
         */
        this.AgentCpuLimit = null;

        /**
         * agent 容器分配的内存 MiB 数，对应 K8S 的 request
         * @type {string || null}
         */
        this.AgentMemRequest = null;

        /**
         * agent 容器最大的内存 MiB 数，对应 K8S 的 limit
         * @type {string || null}
         */
        this.AgentMemLimit = null;

        /**
         * istioproxy 容器分配的 CPU 核数，对应 K8S 的 request
         * @type {string || null}
         */
        this.IstioCpuRequest = null;

        /**
         * istioproxy 容器最大的 CPU 核数，对应 K8S 的 limit
         * @type {string || null}
         */
        this.IstioCpuLimit = null;

        /**
         * istioproxy 容器分配的内存 MiB 数，对应 K8S 的 request
         * @type {string || null}
         */
        this.IstioMemRequest = null;

        /**
         * istioproxy 容器最大的内存 MiB 数，对应 K8S 的 limit
         * @type {string || null}
         */
        this.IstioMemLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.AccessType = 'AccessType' in params ? params.AccessType : null;

        if (params.ProtocolPorts) {
            this.ProtocolPorts = new Array();
            for (let z in params.ProtocolPorts) {
                let obj = new ProtocolPort();
                obj.deserialize(params.ProtocolPorts[z]);
                this.ProtocolPorts.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.CpuLimit = 'CpuLimit' in params ? params.CpuLimit : null;
        this.MemLimit = 'MemLimit' in params ? params.MemLimit : null;
        this.GroupComment = 'GroupComment' in params ? params.GroupComment : null;
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;
        this.UpdateIvl = 'UpdateIvl' in params ? params.UpdateIvl : null;
        this.CpuRequest = 'CpuRequest' in params ? params.CpuRequest : null;
        this.MemRequest = 'MemRequest' in params ? params.MemRequest : null;
        this.GroupResourceType = 'GroupResourceType' in params ? params.GroupResourceType : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AgentCpuRequest = 'AgentCpuRequest' in params ? params.AgentCpuRequest : null;
        this.AgentCpuLimit = 'AgentCpuLimit' in params ? params.AgentCpuLimit : null;
        this.AgentMemRequest = 'AgentMemRequest' in params ? params.AgentMemRequest : null;
        this.AgentMemLimit = 'AgentMemLimit' in params ? params.AgentMemLimit : null;
        this.IstioCpuRequest = 'IstioCpuRequest' in params ? params.IstioCpuRequest : null;
        this.IstioCpuLimit = 'IstioCpuLimit' in params ? params.IstioCpuLimit : null;
        this.IstioMemRequest = 'IstioMemRequest' in params ? params.IstioMemRequest : null;
        this.IstioMemLimit = 'IstioMemLimit' in params ? params.IstioMemLimit : null;

    }
}

/**
 * 部署组列表（应用下钻界面的）
 * @class
 */
class ContainGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 镜像server
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Server = null;

        /**
         * 镜像名，如/tsf/nginx
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 镜像版本名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 初始分配的 CPU 核数，对应 K8S request
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CpuRequest = null;

        /**
         * 最大分配的 CPU 核数，对应 K8S limit
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CpuLimit = null;

        /**
         * 初始分配的内存 MiB 数，对应 K8S request
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemRequest = null;

        /**
         * 最大分配的内存 MiB 数，对应 K8S limit
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Server = 'Server' in params ? params.Server : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.CpuRequest = 'CpuRequest' in params ? params.CpuRequest : null;
        this.CpuLimit = 'CpuLimit' in params ? params.CpuLimit : null;
        this.MemRequest = 'MemRequest' in params ? params.MemRequest : null;
        this.MemLimit = 'MemLimit' in params ? params.MemLimit : null;

    }
}

/**
 * DescribePublicConfigReleases返回参数结构体
 * @class
 */
class DescribePublicConfigReleasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公共配置发布信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageConfigRelease || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TsfPageConfigRelease();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLaneRules返回参数结构体
 * @class
 */
class DescribeLaneRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 泳道规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LaneRules || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new LaneRules();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 包列表
 * @class
 */
class PkgList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 程序包总量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 程序包信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PkgInfo> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new PkgInfo();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * CreateApplication返回参数结构体
 * @class
 */
class CreateApplicationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigSummary请求参数结构体
 * @class
 */
class DescribeConfigSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID，不传入时查询全量
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 查询关键字，模糊查询：应用名称，配置项名称，不传入时查询全量
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条数，默认为20
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteLane请求参数结构体
 * @class
 */
class DeleteLaneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 泳道Idl
         * @type {string || null}
         */
        this.LaneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaneId = 'LaneId' in params ? params.LaneId : null;

    }
}

/**
 * DeployGroup返回参数结构体
 * @class
 */
class DeployGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskId || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new TaskId();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyContainerGroup返回参数结构体
 * @class
 */
class ModifyContainerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新部署组是否成功。
true：成功。
false：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleasePublicConfig返回参数结构体
 * @class
 */
class ReleasePublicConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true：发布成功；false：发布失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleasePublicConfig请求参数结构体
 * @class
 */
class ReleasePublicConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置ID
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 发布描述
         * @type {string || null}
         */
        this.ReleaseDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ReleaseDesc = 'ReleaseDesc' in params ? params.ReleaseDesc : null;

    }
}

/**
 * DescribeServerlessGroup返回参数结构体
 * @class
 */
class DescribeServerlessGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServerlessGroup || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new ServerlessGroup();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 泳道部署组
 * @class
 */
class LaneGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 是否入口应用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Entrance = null;

        /**
         * 泳道部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LaneGroupId = null;

        /**
         * 泳道ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LaneId = null;

        /**
         * 部署组名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 应用名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Entrance = 'Entrance' in params ? params.Entrance : null;
        this.LaneGroupId = 'LaneGroupId' in params ? params.LaneGroupId : null;
        this.LaneId = 'LaneId' in params ? params.LaneId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * 任务id
 * @class
 */
class TaskId extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
 * TsfPage<Config>
 * @class
 */
class TsfPageConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * TsfPageConfig
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 配置项列表
         * @type {Array.<Config> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new Config();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribeGroupInstances请求参数结构体
 * @class
 */
class DescribeGroupInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 搜索字段
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 排序字段
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页个数
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateGroup返回参数结构体
 * @class
 */
class CreateGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * groupId， null表示创建失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeMsApiListRequest: DescribeMsApiListRequest,
    TsfApiListResponse: TsfApiListResponse,
    DescribeGroupInstancesResponse: DescribeGroupInstancesResponse,
    DescribeMsApiListResponse: DescribeMsApiListResponse,
    DescribeDownloadInfoRequest: DescribeDownloadInfoRequest,
    ApiDetailResponse: ApiDetailResponse,
    ImageTag: ImageTag,
    DescribePublicConfigSummaryRequest: DescribePublicConfigSummaryRequest,
    DescribeClusterInstancesResponse: DescribeClusterInstancesResponse,
    DescribeMicroserviceRequest: DescribeMicroserviceRequest,
    CosCredentials: CosCredentials,
    DescribeContainerGroupsRequest: DescribeContainerGroupsRequest,
    ExpandGroupRequest: ExpandGroupRequest,
    DeleteServerlessGroupRequest: DeleteServerlessGroupRequest,
    DescribeImageTagsRequest: DescribeImageTagsRequest,
    ModifyLaneRuleResponse: ModifyLaneRuleResponse,
    DescribeSimpleClustersResponse: DescribeSimpleClustersResponse,
    DescribePodInstancesResponse: DescribePodInstancesResponse,
    VmGroup: VmGroup,
    RevocationConfigRequest: RevocationConfigRequest,
    GroupPod: GroupPod,
    ModifyUploadInfoRequest: ModifyUploadInfoRequest,
    DescribeUploadInfoResponse: DescribeUploadInfoResponse,
    DescribeReleasedConfigRequest: DescribeReleasedConfigRequest,
    DescribeApiVersionsResponse: DescribeApiVersionsResponse,
    StopGroupResponse: StopGroupResponse,
    StopContainerGroupResponse: StopContainerGroupResponse,
    CreateGroupRequest: CreateGroupRequest,
    ModifyMicroserviceRequest: ModifyMicroserviceRequest,
    DescribeConfigReleasesRequest: DescribeConfigReleasesRequest,
    DeleteLaneResponse: DeleteLaneResponse,
    ModifyLaneResponse: ModifyLaneResponse,
    TsfPageConfigRelease: TsfPageConfigRelease,
    CreateContainGroupResponse: CreateContainGroupResponse,
    DescribeContainerGroupDetailResponse: DescribeContainerGroupDetailResponse,
    SimpleApplication: SimpleApplication,
    DescribePublicConfigSummaryResponse: DescribePublicConfigSummaryResponse,
    DescribeSimpleApplicationsResponse: DescribeSimpleApplicationsResponse,
    DescribePublicConfigReleaseLogsRequest: DescribePublicConfigReleaseLogsRequest,
    CreateServerlessGroupResponse: CreateServerlessGroupResponse,
    CreateLaneRequest: CreateLaneRequest,
    DeleteApplicationResponse: DeleteApplicationResponse,
    Instance: Instance,
    DeployServerlessGroupResponse: DeployServerlessGroupResponse,
    DescribeConfigsResponse: DescribeConfigsResponse,
    DescribeApplicationAttributeResponse: DescribeApplicationAttributeResponse,
    DescribeApplicationsResponse: DescribeApplicationsResponse,
    ModifyContainerReplicasRequest: ModifyContainerReplicasRequest,
    ModifyLaneRequest: ModifyLaneRequest,
    DescribeLanesRequest: DescribeLanesRequest,
    DeleteMicroserviceRequest: DeleteMicroserviceRequest,
    CreatePublicConfigRequest: CreatePublicConfigRequest,
    RemoveInstancesResponse: RemoveInstancesResponse,
    DescribeApiVersionsRequest: DescribeApiVersionsRequest,
    ModifyContainerReplicasResponse: ModifyContainerReplicasResponse,
    DescribeConfigRequest: DescribeConfigRequest,
    Namespace: Namespace,
    TsfPageCluster: TsfPageCluster,
    DescribeGroupResponse: DescribeGroupResponse,
    DescribeGroupsResponse: DescribeGroupsResponse,
    Env: Env,
    DeleteContainerGroupResponse: DeleteContainerGroupResponse,
    DescribeSimpleGroupsRequest: DescribeSimpleGroupsRequest,
    CreateNamespaceResponse: CreateNamespaceResponse,
    DeleteServerlessGroupResponse: DeleteServerlessGroupResponse,
    DeleteImageTagsResponse: DeleteImageTagsResponse,
    ModifyUploadInfoResponse: ModifyUploadInfoResponse,
    DescribeImageTagsResponse: DescribeImageTagsResponse,
    DeleteGroupRequest: DeleteGroupRequest,
    ApiDefinitionDescr: ApiDefinitionDescr,
    TsfPageMsInstance: TsfPageMsInstance,
    ServerlessGroup: ServerlessGroup,
    DescribeApplicationResponse: DescribeApplicationResponse,
    LaneInfo: LaneInfo,
    DescribeConfigReleaseLogsResponse: DescribeConfigReleaseLogsResponse,
    RevocationConfigResponse: RevocationConfigResponse,
    DescribeSimpleGroupsResponse: DescribeSimpleGroupsResponse,
    ContainerGroupDetail: ContainerGroupDetail,
    DeletePublicConfigRequest: DeletePublicConfigRequest,
    DeleteNamespaceResponse: DeleteNamespaceResponse,
    CreateMicroserviceRequest: CreateMicroserviceRequest,
    DescribePkgsRequest: DescribePkgsRequest,
    ReleaseConfigResponse: ReleaseConfigResponse,
    RemoveInstancesRequest: RemoveInstancesRequest,
    ShrinkInstancesRequest: ShrinkInstancesRequest,
    ShrinkInstancesResponse: ShrinkInstancesResponse,
    DeleteImageTagsRequest: DeleteImageTagsRequest,
    DescribeApplicationAttributeRequest: DescribeApplicationAttributeRequest,
    DescribePodInstancesRequest: DescribePodInstancesRequest,
    TsfPageSimpleGroup: TsfPageSimpleGroup,
    DescribeConfigsRequest: DescribeConfigsRequest,
    OperationInfo: OperationInfo,
    AddClusterInstancesRequest: AddClusterInstancesRequest,
    DescribePublicConfigResponse: DescribePublicConfigResponse,
    RollbackConfigRequest: RollbackConfigRequest,
    DeleteConfigResponse: DeleteConfigResponse,
    TsfPageNamespace: TsfPageNamespace,
    DescribeContainerGroupsResponse: DescribeContainerGroupsResponse,
    DescribeSimpleApplicationsRequest: DescribeSimpleApplicationsRequest,
    DescribeConfigResponse: DescribeConfigResponse,
    DescribeSimpleNamespacesRequest: DescribeSimpleNamespacesRequest,
    LaneRule: LaneRule,
    MsInstance: MsInstance,
    ExpandGroupResponse: ExpandGroupResponse,
    DescribeServerlessGroupsResponse: DescribeServerlessGroupsResponse,
    DescribePublicConfigsResponse: DescribePublicConfigsResponse,
    ModifyLaneRuleRequest: ModifyLaneRuleRequest,
    AddInstancesResponse: AddInstancesResponse,
    DeleteApplicationRequest: DeleteApplicationRequest,
    RevocationPublicConfigRequest: RevocationPublicConfigRequest,
    DescribeSimpleClustersRequest: DescribeSimpleClustersRequest,
    StartContainerGroupRequest: StartContainerGroupRequest,
    DeleteConfigRequest: DeleteConfigRequest,
    DescribePublicConfigReleaseLogsResponse: DescribePublicConfigReleaseLogsResponse,
    VmGroupSimple: VmGroupSimple,
    ApiResponseDescr: ApiResponseDescr,
    DeployServerlessGroupRequest: DeployServerlessGroupRequest,
    Config: Config,
    CreateClusterResponse: CreateClusterResponse,
    DeletePublicConfigResponse: DeletePublicConfigResponse,
    ApiRequestDescr: ApiRequestDescr,
    CreateMicroserviceResponse: CreateMicroserviceResponse,
    ApiVersionArray: ApiVersionArray,
    CreateClusterRequest: CreateClusterRequest,
    StopGroupRequest: StopGroupRequest,
    ConfigReleaseLog: ConfigReleaseLog,
    ShrinkGroupResponse: ShrinkGroupResponse,
    CosUploadInfo: CosUploadInfo,
    ConfigRelease: ConfigRelease,
    DeleteContainerGroupRequest: DeleteContainerGroupRequest,
    DescribeContainerGroupDetailRequest: DescribeContainerGroupDetailRequest,
    ReleaseConfigRequest: ReleaseConfigRequest,
    CreateConfigRequest: CreateConfigRequest,
    MsApiArray: MsApiArray,
    CreateNamespaceRequest: CreateNamespaceRequest,
    DescribeApiDetailRequest: DescribeApiDetailRequest,
    DescribeUploadInfoRequest: DescribeUploadInfoRequest,
    DescribeClusterInstancesRequest: DescribeClusterInstancesRequest,
    StopContainerGroupRequest: StopContainerGroupRequest,
    PropertyField: PropertyField,
    TsfPageApplication: TsfPageApplication,
    DescribeGroupRequest: DescribeGroupRequest,
    ImageTagsResult: ImageTagsResult,
    CreateLaneResponse: CreateLaneResponse,
    DescribeServerlessGroupRequest: DescribeServerlessGroupRequest,
    TsfPageVmGroup: TsfPageVmGroup,
    AddInstanceResult: AddInstanceResult,
    DescribePkgsResponse: DescribePkgsResponse,
    DescribeSimpleNamespacesResponse: DescribeSimpleNamespacesResponse,
    ApplicationAttribute: ApplicationAttribute,
    DeleteImageTag: DeleteImageTag,
    DeletePkgsResponse: DeletePkgsResponse,
    DescribeConfigReleasesResponse: DescribeConfigReleasesResponse,
    Cluster: Cluster,
    ModifyMicroserviceResponse: ModifyMicroserviceResponse,
    DescribeMicroservicesResponse: DescribeMicroservicesResponse,
    DescribeDownloadInfoResponse: DescribeDownloadInfoResponse,
    GroupPodResult: GroupPodResult,
    DescribeApplicationRequest: DescribeApplicationRequest,
    Microservice: Microservice,
    TsfPageConfigReleaseLog: TsfPageConfigReleaseLog,
    DescribePublicConfigRequest: DescribePublicConfigRequest,
    ApplicationForPage: ApplicationForPage,
    StartGroupResponse: StartGroupResponse,
    DeployContainerGroupResponse: DeployContainerGroupResponse,
    CreatePublicConfigResponse: CreatePublicConfigResponse,
    DeleteMicroserviceResponse: DeleteMicroserviceResponse,
    DescribeLanesResponse: DescribeLanesResponse,
    ContainGroupResult: ContainGroupResult,
    ProtocolPort: ProtocolPort,
    LaneRules: LaneRules,
    DescribeReleasedConfigResponse: DescribeReleasedConfigResponse,
    DescribeMicroservicesRequest: DescribeMicroservicesRequest,
    ShrinkGroupRequest: ShrinkGroupRequest,
    TsfPageSimpleApplication: TsfPageSimpleApplication,
    CreateConfigResponse: CreateConfigResponse,
    AddClusterInstancesResponse: AddClusterInstancesResponse,
    PkgInfo: PkgInfo,
    RevocationPublicConfigResponse: RevocationPublicConfigResponse,
    CreateLaneRuleResponse: CreateLaneRuleResponse,
    DescribeConfigReleaseLogsRequest: DescribeConfigReleaseLogsRequest,
    DescribeApiDetailResponse: DescribeApiDetailResponse,
    DescribeGroupsRequest: DescribeGroupsRequest,
    ModifyContainerGroupRequest: ModifyContainerGroupRequest,
    TsfPageMicroservice: TsfPageMicroservice,
    DescribePublicConfigsRequest: DescribePublicConfigsRequest,
    AddInstancesRequest: AddInstancesRequest,
    StartGroupRequest: StartGroupRequest,
    LaneRuleTag: LaneRuleTag,
    RollbackConfigResponse: RollbackConfigResponse,
    DescribeApplicationsRequest: DescribeApplicationsRequest,
    OperationInfoDetail: OperationInfoDetail,
    StartContainerGroupResponse: StartContainerGroupResponse,
    CreateApplicationRequest: CreateApplicationRequest,
    DescribePublicConfigReleasesRequest: DescribePublicConfigReleasesRequest,
    SimpleGroup: SimpleGroup,
    DeleteNamespaceRequest: DeleteNamespaceRequest,
    DescribeLaneRulesRequest: DescribeLaneRulesRequest,
    DeployGroupRequest: DeployGroupRequest,
    LaneInfos: LaneInfos,
    CreateServerlessGroupRequest: CreateServerlessGroupRequest,
    DescribeMicroserviceResponse: DescribeMicroserviceResponse,
    DeleteGroupResponse: DeleteGroupResponse,
    CreateLaneRuleRequest: CreateLaneRuleRequest,
    DescribeServerlessGroupsRequest: DescribeServerlessGroupsRequest,
    DeployContainerGroupRequest: DeployContainerGroupRequest,
    CosDownloadInfo: CosDownloadInfo,
    DeletePkgsRequest: DeletePkgsRequest,
    TsfPageInstance: TsfPageInstance,
    ServerlessGroupPage: ServerlessGroupPage,
    DescribeConfigSummaryResponse: DescribeConfigSummaryResponse,
    CreateContainGroupRequest: CreateContainGroupRequest,
    ContainGroup: ContainGroup,
    DescribePublicConfigReleasesResponse: DescribePublicConfigReleasesResponse,
    DescribeLaneRulesResponse: DescribeLaneRulesResponse,
    PkgList: PkgList,
    CreateApplicationResponse: CreateApplicationResponse,
    DescribeConfigSummaryRequest: DescribeConfigSummaryRequest,
    DeleteLaneRequest: DeleteLaneRequest,
    DeployGroupResponse: DeployGroupResponse,
    ModifyContainerGroupResponse: ModifyContainerGroupResponse,
    ReleasePublicConfigResponse: ReleasePublicConfigResponse,
    ReleasePublicConfigRequest: ReleasePublicConfigRequest,
    DescribeServerlessGroupResponse: DescribeServerlessGroupResponse,
    LaneGroup: LaneGroup,
    TaskId: TaskId,
    TsfPageConfig: TsfPageConfig,
    DescribeGroupInstancesRequest: DescribeGroupInstancesRequest,
    CreateGroupResponse: CreateGroupResponse,

}
