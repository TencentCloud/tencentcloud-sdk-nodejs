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
 * UnTagResources返回参数结构体
 * @class
 */
class UnTagResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 失败资源信息。
解绑标签成功时，返回的FailedResources为空。
解绑标签失败或部分失败时，返回的FailedResources会显示失败资源的详细信息。
         * @type {Array.<FailedResource> || null}
         */
        this.FailedResources = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FailedResources) {
            this.FailedResources = new Array();
            for (let z in params.FailedResources) {
                let obj = new FailedResource();
                obj.deserialize(params.FailedResources[z]);
                this.FailedResources.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表示一个标签键值对以及是否允许删除
 * @class
 */
class TagWithDelete extends  AbstractModel {
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

        /**
         * 是否可以删除
         * @type {number || null}
         */
        this.CanDelete = null;

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
        this.CanDelete = 'CanDelete' in params ? params.CanDelete : null;

    }
}

/**
 * DetachResourcesTag请求参数结构体
 * @class
 */
class DetachResourcesTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源所属业务名称（资源六段式中的第三段）
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 资源ID数组，资源个数最多为50
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 需要解绑的标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填
         * @type {string || null}
         */
        this.ResourcePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;

    }
}

/**
 * GetTagValues返回参数结构体
 * @class
 */
class GetTagValuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取的下一页的Token值
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * 标签列表。
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
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;

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
 * AttachResourcesTag返回参数结构体
 * @class
 */
class AttachResourcesTagResponse extends  AbstractModel {
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
 * AddProject返回参数结构体
 * @class
 */
class AddProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 是否为新项目
         * @type {number || null}
         */
        this.IsNew = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.IsNew = 'IsNew' in params ? params.IsNew : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetResources请求参数结构体
 * @class
 */
class GetResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源六段式列表。腾讯云使用资源六段式描述一个资源。
例如：ResourceList.1 = qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}。
如果传入了此参数会返回所有匹配的资源列表，指定的MaxResults会失效。
N取值范围：0~9
         * @type {Array.<string> || null}
         */
        this.ResourceList = null;

        /**
         * 标签键和标签值。
指定多个标签，会查询同时绑定了该多个标签的资源。
N取值范围：0~5。
每个TagFilters中的TagValue最多支持10个
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * 从上一页的响应中获取的下一页的Token值。
如果是第一次请求，设置为空。
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * 每一页返回的数据最大条数，最大200。
缺省值：50。
         * @type {number || null}
         */
        this.MaxResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceList = 'ResourceList' in params ? params.ResourceList : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

    }
}

/**
 * DeleteTag请求参数结构体
 * @class
 */
class DeleteTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 需要删除的标签值
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
 * DeleteResourceTag返回参数结构体
 * @class
 */
class DeleteResourceTagResponse extends  AbstractModel {
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
 * DescribeResourceTagsByTagKeys请求参数结构体
 * @class
 */
class DescribeResourceTagsByTagKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务类型
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 资源前缀
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * 资源地域
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 资源唯一标识
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 资源标签键
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 每页大小，默认为 400
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
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
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeTags请求参数结构体
 * @class
 */
class DescribeTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值,与标签键同时存在或同时不存在，不存在时表示查询该用户所有标签
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小，默认为 15
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 标签键数组,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签,当与TagKey同时传递时只取本值
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 是否展现项目标签
         * @type {number || null}
         */
        this.ShowProject = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.ShowProject = 'ShowProject' in params ? params.ShowProject : null;

    }
}

/**
 * DescribeProjects请求参数结构体
 * @class
 */
class DescribeProjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传1拉取所有项目（包括隐藏项目），传0拉取显示项目
         * @type {number || null}
         */
        this.AllList = null;

        /**
         * 分页条数，固定值1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量。
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
        this.AllList = 'AllList' in params ? params.AllList : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeTagValues请求参数结构体
 * @class
 */
class DescribeTagValuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键列表
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小，默认为 15
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
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * UpdateProject请求参数结构体
 * @class
 */
class UpdateProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 禁用项目，1，禁用，0，启用
         * @type {number || null}
         */
        this.Disable = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.Disable = 'Disable' in params ? params.Disable : null;
        this.Info = 'Info' in params ? params.Info : null;

    }
}

/**
 * DescribeResourcesByTagsUnion请求参数结构体
 * @class
 */
class DescribeResourcesByTagsUnionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签过滤数组
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * 创建标签者uin
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小，默认为 15
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源前缀
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * 资源唯一标记
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源所在地域
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 业务类型
         * @type {string || null}
         */
        this.ServiceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

    }
}

/**
 * DeleteTags返回参数结构体
 * @class
 */
class DeleteTagsResponse extends  AbstractModel {
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
 * ModifyResourcesTagValue返回参数结构体
 * @class
 */
class ModifyResourcesTagValueResponse extends  AbstractModel {
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
 * DescribeTags返回参数结构体
 * @class
 */
class DescribeTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据位移偏量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签列表
         * @type {Array.<TagWithDelete> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDelete();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTags请求参数结构体
 * @class
 */
class DeleteTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签列表。
N取值范围：0~9
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
 * DescribeTagKeys请求参数结构体
 * @class
 */
class DescribeTagKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小，默认为 15
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 是否展现项目
         * @type {number || null}
         */
        this.ShowProject = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ShowProject = 'ShowProject' in params ? params.ShowProject : null;

    }
}

/**
 * DescribeProjects返回参数结构体
 * @class
 */
class DescribeProjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 项目列表
         * @type {Array.<Project> || null}
         */
        this.Projects = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Projects) {
            this.Projects = new Array();
            for (let z in params.Projects) {
                let obj = new Project();
                obj.deserialize(params.Projects[z]);
                this.Projects.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnTagResources请求参数结构体
 * @class
 */
class UnTagResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源六段式列表。腾讯云使用资源六段式描述一个资源。可参考[访问管理](https://cloud.tencent.com/document/product/598/67350)-概览-接口列表-资源六段式信息
例如：ResourceList.1 = qcs::${ServiceType}:${Region}:uin/${Account}:${ResourcePrefix}/${ResourceId}。
N取值范围：0~9
         * @type {Array.<string> || null}
         */
        this.ResourceList = null;

        /**
         * 标签键。
取值范围：0~9
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceList = 'ResourceList' in params ? params.ResourceList : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;

    }
}

/**
 * DescribeTagsSeq返回参数结构体
 * @class
 */
class DescribeTagsSeqResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据位移偏量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签列表
         * @type {Array.<TagWithDelete> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDelete();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 需要增加或修改的标签集合。如果Resource描述的资源未关联输入的标签键，则增加关联；若已关联，则将该资源关联的键对应的标签值修改为输入值。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键。可以不传该参数，但不能是空数组。
         * @type {Array.<Tag> || null}
         */
        this.ReplaceTags = null;

        /**
         * 需要解关联的标签集合。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键。可以不传该参数，但不能是空数组。
         * @type {Array.<TagKeyObject> || null}
         */
        this.DeleteTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.ReplaceTags) {
            this.ReplaceTags = new Array();
            for (let z in params.ReplaceTags) {
                let obj = new Tag();
                obj.deserialize(params.ReplaceTags[z]);
                this.ReplaceTags.push(obj);
            }
        }

        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new TagKeyObject();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
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
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据位移偏量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源标签
         * @type {Array.<TagResource> || null}
         */
        this.Rows = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new TagResource();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceTagsByResourceIds请求参数结构体
 * @class
 */
class DescribeResourceTagsByResourceIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务类型
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 资源前缀
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * 资源ID数组，大小不超过50
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 资源所在地域
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小，默认为 15
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
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeResourcesByTagsUnion返回参数结构体
 * @class
 */
class DescribeResourcesByTagsUnionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据位移偏量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源标签
         * @type {Array.<ResourceTag> || null}
         */
        this.Rows = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new ResourceTag();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceTagsByResourceIds返回参数结构体
 * @class
 */
class DescribeResourceTagsByResourceIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据位移偏量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签列表
         * @type {Array.<TagResource> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagResource();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTags返回参数结构体
 * @class
 */
class GetTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取的下一页的Token值
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * 标签列表。
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
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;

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
 * ModifyResourcesTagValue请求参数结构体
 * @class
 */
class ModifyResourcesTagValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源所属业务名称（资源六段式中的第三段）
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 资源ID数组，资源个数最多为50
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

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

        /**
         * 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填
         * @type {string || null}
         */
        this.ResourcePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;

    }
}

/**
 * 标签键值对以及资源ID
 * @class
 */
class TagResource extends  AbstractModel {
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

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 标签键MD5值
         * @type {string || null}
         */
        this.TagKeyMd5 = null;

        /**
         * 标签值MD5值
         * @type {string || null}
         */
        this.TagValueMd5 = null;

        /**
         * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceType = null;

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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.TagKeyMd5 = 'TagKeyMd5' in params ? params.TagKeyMd5 : null;
        this.TagValueMd5 = 'TagValueMd5' in params ? params.TagValueMd5 : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

    }
}

/**
 * AddProject请求参数结构体
 * @class
 */
class AddProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 项目描述
         * @type {string || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.Info = 'Info' in params ? params.Info : null;

    }
}

/**
 * AddResourceTag返回参数结构体
 * @class
 */
class AddResourceTagResponse extends  AbstractModel {
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
 * DescribeResourcesByTags返回参数结构体
 * @class
 */
class DescribeResourcesByTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据位移偏量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源标签
         * @type {Array.<ResourceTag> || null}
         */
        this.Rows = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new ResourceTag();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddResourceTag请求参数结构体
 * @class
 */
class AddResourceTagRequest extends  AbstractModel {
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

        /**
         * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
         * @type {string || null}
         */
        this.Resource = null;

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
        this.Resource = 'Resource' in params ? params.Resource : null;

    }
}

/**
 * DescribeTagValuesSeq返回参数结构体
 * @class
 */
class DescribeTagValuesSeqResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据位移偏量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签列表
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * CreateTag请求参数结构体
 * @class
 */
class CreateTagRequest extends  AbstractModel {
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
 * DescribeResourceTagsByTagKeys返回参数结构体
 * @class
 */
class DescribeResourceTagsByTagKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据位移偏量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源标签
         * @type {Array.<ResourceIdTag> || null}
         */
        this.Rows = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new ResourceIdTag();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTagsSeq请求参数结构体
 * @class
 */
class DescribeTagsSeqRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值,与标签键同时存在或同时不存在，不存在时表示查询该用户所有标签
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小，默认为 15
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 标签键数组,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签,当与TagKey同时传递时只取本值
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 是否展现项目标签
         * @type {number || null}
         */
        this.ShowProject = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.ShowProject = 'ShowProject' in params ? params.ShowProject : null;

    }
}

/**
 * DescribeTagValues返回参数结构体
 * @class
 */
class DescribeTagValuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据位移偏量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签列表
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * 资源标签键值
 * @class
 */
class ResourceIdTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 标签键值对
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagKeyValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

        if (params.TagKeyValues) {
            this.TagKeyValues = new Array();
            for (let z in params.TagKeyValues) {
                let obj = new Tag();
                obj.deserialize(params.TagKeyValues[z]);
                this.TagKeyValues.push(obj);
            }
        }

    }
}

/**
 * tag过滤数组多个是与的关系
 * @class
 */
class TagFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值数组 多个值的话是或的关系
         * @type {Array.<string> || null}
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
 * 项目信息
 * @class
 */
class Project extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 创建人uin
         * @type {number || null}
         */
        this.CreatorUin = null;

        /**
         * 项目描述
         * @type {string || null}
         */
        this.ProjectInfo = null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.ProjectInfo = 'ProjectInfo' in params ? params.ProjectInfo : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 表示一个标签键值对
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
 * AttachResourcesTag请求参数结构体
 * @class
 */
class AttachResourcesTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源所属业务名称（资源六段式中的第三段）
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 资源ID数组，资源个数最多为50
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

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

        /**
         * 资源所在地域，不区分地域的资源不需要传入该字段，区分地域的资源必填
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 资源前缀（资源六段式中最后一段"/"前面的部分），cos存储桶不需要传入该字段，其他云资源必填
         * @type {string || null}
         */
        this.ResourcePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;

    }
}

/**
 * CreateTag返回参数结构体
 * @class
 */
class CreateTagResponse extends  AbstractModel {
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
 * 失败资源信息。
绑定或解绑资源标签时失败返回
 * @class
 */
class FailedResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 失败的资源六段式
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 错误信息
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * 资源及关联的标签(键和值)。
 * @class
 */
class ResourceTagMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源六段式。腾讯云使用资源六段式描述一个资源。
例如：ResourceList.1 = qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 资源关联的标签列表
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
        this.Resource = 'Resource' in params ? params.Resource : null;

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
 * GetTagKeys请求参数结构体
 * @class
 */
class GetTagKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 从上一页的响应中获取的下一页的Token值。
如果是第一次请求，设置为空。
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * 每一页返回的数据最大条数，最大1000。
缺省值：50。
         * @type {number || null}
         */
        this.MaxResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

    }
}

/**
 * DetachResourcesTag返回参数结构体
 * @class
 */
class DetachResourcesTagResponse extends  AbstractModel {
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
 * GetResources返回参数结构体
 * @class
 */
class GetResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取的下一页的Token值
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * 资源及关联的标签(键和值)列表
         * @type {Array.<ResourceTagMapping> || null}
         */
        this.ResourceTagMappingList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;

        if (params.ResourceTagMappingList) {
            this.ResourceTagMappingList = new Array();
            for (let z in params.ResourceTagMappingList) {
                let obj = new ResourceTagMapping();
                obj.deserialize(params.ResourceTagMappingList[z]);
                this.ResourceTagMappingList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceTagsByResourceIdsSeq返回参数结构体
 * @class
 */
class DescribeResourceTagsByResourceIdsSeqResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据位移偏量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签列表
         * @type {Array.<TagResource> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagResource();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTag返回参数结构体
 * @class
 */
class DeleteTagResponse extends  AbstractModel {
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
 * DescribeTagKeys返回参数结构体
 * @class
 */
class DescribeTagKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据位移偏量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签列表
         * @type {Array.<string> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTagValuesSeq请求参数结构体
 * @class
 */
class DescribeTagValuesSeqRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键列表
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小，默认为 15
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
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * UpdateResourceTagValue请求参数结构体
 * @class
 */
class UpdateResourceTagValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源关联的标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 修改后的标签值
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
         * @type {string || null}
         */
        this.Resource = null;

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
        this.Resource = 'Resource' in params ? params.Resource : null;

    }
}

/**
 * GetTagKeys返回参数结构体
 * @class
 */
class GetTagKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取的下一页的Token值
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * 标签键信息。
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
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TagResources返回参数结构体
 * @class
 */
class TagResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 失败资源信息。
创建并绑定标签成功时，返回的FailedResources为空。
创建并绑定标签失败或部分失败时，返回的FailedResources会显示失败资源的详细信息。
         * @type {Array.<FailedResource> || null}
         */
        this.FailedResources = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FailedResources) {
            this.FailedResources = new Array();
            for (let z in params.FailedResources) {
                let obj = new FailedResource();
                obj.deserialize(params.FailedResources[z]);
                this.FailedResources.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTags请求参数结构体
 * @class
 */
class CreateTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签列表。
N取值范围：0~9
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
 * CreateTags返回参数结构体
 * @class
 */
class CreateTagsResponse extends  AbstractModel {
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
 * GetTags请求参数结构体
 * @class
 */
class GetTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 从上一页的响应中获取的下一页的Token值。
如果是第一次请求，设置为空。
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * 每一页返回的数据最大条数，最大1000。
缺省值：50。
         * @type {number || null}
         */
        this.MaxResults = null;

        /**
         * 标签键。
返回所有标签键列表对应的标签。
最大长度：20
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;

    }
}

/**
 * DescribeResourcesByTags请求参数结构体
 * @class
 */
class DescribeResourcesByTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签过滤数组
         * @type {Array.<TagFilter> || null}
         */
        this.TagFilters = null;

        /**
         * 创建标签者uin
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小，默认为 15
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源前缀
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * 资源唯一标记
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源所在地域
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 业务类型
         * @type {string || null}
         */
        this.ServiceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

    }
}

/**
 * TagResources请求参数结构体
 * @class
 */
class TagResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源六段式列表。腾讯云使用资源六段式描述一个资源。可参考[访问管理](https://cloud.tencent.com/document/product/598/67350)-概览-接口列表-资源六段式信息
例如：ResourceList.1 = qcs::${ServiceType}:${Region}:uin/${Account}:${ResourcePrefix}/${ResourceId}。
N取值范围：0~9
         * @type {Array.<string> || null}
         */
        this.ResourceList = null;

        /**
         * 标签键和标签值。
如果指定多个标签，则会为指定资源同时创建并绑定该多个标签。
同一个资源上的同一个标签键只能对应一个标签值。如果您尝试添加已有标签键，则对应的标签值会更新为新值。
如果标签不存在会为您自动创建标签。
N取值范围：0~9
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
        this.ResourceList = 'ResourceList' in params ? params.ResourceList : null;

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
 * DeleteResourceTag请求参数结构体
 * @class
 */
class DeleteResourceTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
         * @type {string || null}
         */
        this.Resource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.Resource = 'Resource' in params ? params.Resource : null;

    }
}

/**
 * UpdateResourceTagValue返回参数结构体
 * @class
 */
class UpdateResourceTagValueResponse extends  AbstractModel {
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
 * 标签键对象
 * @class
 */
class TagKeyObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

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
         * 创建者uin
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 资源所在地域
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 业务类型
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 资源前缀
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * 资源唯一标识。只输入ResourceId进行查询可能会查询较慢，或者无法匹配到结果，建议在输入ResourceId的同时也输入ServiceType、ResourcePrefix和ResourceRegion（不区分地域的资源可忽略该参数）
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小，默认为 15
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 是否是cos的资源（0或者1），输入的ResourceId为cos资源时必填
         * @type {number || null}
         */
        this.CosResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CosResourceId = 'CosResourceId' in params ? params.CosResourceId : null;

    }
}

/**
 * UpdateProject返回参数结构体
 * @class
 */
class UpdateProjectResponse extends  AbstractModel {
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
 * DescribeResourceTagsByResourceIdsSeq请求参数结构体
 * @class
 */
class DescribeResourceTagsByResourceIdsSeqRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务类型
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 资源前缀
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * 资源唯一标记
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 资源所在地域
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小，默认为 15
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
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * GetTagValues请求参数结构体
 * @class
 */
class GetTagValuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键。
返回所有标签键列表对应的标签值。
最大长度：20
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 从上一页的响应中获取的下一页的Token值。
如果是第一次请求，设置为空。
         * @type {string || null}
         */
        this.PaginationToken = null;

        /**
         * 每一页返回的数据最大条数，最大1000。
缺省值：50。
         * @type {number || null}
         */
        this.MaxResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.PaginationToken = 'PaginationToken' in params ? params.PaginationToken : null;
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;

    }
}

/**
 * 资源标签
 * @class
 */
class ResourceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源所在地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceRegion = null;

        /**
         * 业务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 资源前缀
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourcePrefix = null;

        /**
         * 资源唯一标记
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

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

module.exports = {
    UnTagResourcesResponse: UnTagResourcesResponse,
    TagWithDelete: TagWithDelete,
    DetachResourcesTagRequest: DetachResourcesTagRequest,
    GetTagValuesResponse: GetTagValuesResponse,
    AttachResourcesTagResponse: AttachResourcesTagResponse,
    AddProjectResponse: AddProjectResponse,
    GetResourcesRequest: GetResourcesRequest,
    DeleteTagRequest: DeleteTagRequest,
    DeleteResourceTagResponse: DeleteResourceTagResponse,
    DescribeResourceTagsByTagKeysRequest: DescribeResourceTagsByTagKeysRequest,
    ModifyResourceTagsResponse: ModifyResourceTagsResponse,
    DescribeTagsRequest: DescribeTagsRequest,
    DescribeProjectsRequest: DescribeProjectsRequest,
    DescribeTagValuesRequest: DescribeTagValuesRequest,
    UpdateProjectRequest: UpdateProjectRequest,
    DescribeResourcesByTagsUnionRequest: DescribeResourcesByTagsUnionRequest,
    DeleteTagsResponse: DeleteTagsResponse,
    ModifyResourcesTagValueResponse: ModifyResourcesTagValueResponse,
    DescribeTagsResponse: DescribeTagsResponse,
    DeleteTagsRequest: DeleteTagsRequest,
    DescribeTagKeysRequest: DescribeTagKeysRequest,
    DescribeProjectsResponse: DescribeProjectsResponse,
    UnTagResourcesRequest: UnTagResourcesRequest,
    DescribeTagsSeqResponse: DescribeTagsSeqResponse,
    ModifyResourceTagsRequest: ModifyResourceTagsRequest,
    DescribeResourceTagsResponse: DescribeResourceTagsResponse,
    DescribeResourceTagsByResourceIdsRequest: DescribeResourceTagsByResourceIdsRequest,
    DescribeResourcesByTagsUnionResponse: DescribeResourcesByTagsUnionResponse,
    DescribeResourceTagsByResourceIdsResponse: DescribeResourceTagsByResourceIdsResponse,
    GetTagsResponse: GetTagsResponse,
    ModifyResourcesTagValueRequest: ModifyResourcesTagValueRequest,
    TagResource: TagResource,
    AddProjectRequest: AddProjectRequest,
    AddResourceTagResponse: AddResourceTagResponse,
    DescribeResourcesByTagsResponse: DescribeResourcesByTagsResponse,
    AddResourceTagRequest: AddResourceTagRequest,
    DescribeTagValuesSeqResponse: DescribeTagValuesSeqResponse,
    CreateTagRequest: CreateTagRequest,
    DescribeResourceTagsByTagKeysResponse: DescribeResourceTagsByTagKeysResponse,
    DescribeTagsSeqRequest: DescribeTagsSeqRequest,
    DescribeTagValuesResponse: DescribeTagValuesResponse,
    ResourceIdTag: ResourceIdTag,
    TagFilter: TagFilter,
    Project: Project,
    Tag: Tag,
    AttachResourcesTagRequest: AttachResourcesTagRequest,
    CreateTagResponse: CreateTagResponse,
    FailedResource: FailedResource,
    ResourceTagMapping: ResourceTagMapping,
    GetTagKeysRequest: GetTagKeysRequest,
    DetachResourcesTagResponse: DetachResourcesTagResponse,
    GetResourcesResponse: GetResourcesResponse,
    DescribeResourceTagsByResourceIdsSeqResponse: DescribeResourceTagsByResourceIdsSeqResponse,
    DeleteTagResponse: DeleteTagResponse,
    DescribeTagKeysResponse: DescribeTagKeysResponse,
    DescribeTagValuesSeqRequest: DescribeTagValuesSeqRequest,
    UpdateResourceTagValueRequest: UpdateResourceTagValueRequest,
    GetTagKeysResponse: GetTagKeysResponse,
    TagResourcesResponse: TagResourcesResponse,
    CreateTagsRequest: CreateTagsRequest,
    CreateTagsResponse: CreateTagsResponse,
    GetTagsRequest: GetTagsRequest,
    DescribeResourcesByTagsRequest: DescribeResourcesByTagsRequest,
    TagResourcesRequest: TagResourcesRequest,
    DeleteResourceTagRequest: DeleteResourceTagRequest,
    UpdateResourceTagValueResponse: UpdateResourceTagValueResponse,
    TagKeyObject: TagKeyObject,
    DescribeResourceTagsRequest: DescribeResourceTagsRequest,
    UpdateProjectResponse: UpdateProjectResponse,
    DescribeResourceTagsByResourceIdsSeqRequest: DescribeResourceTagsByResourceIdsSeqRequest,
    GetTagValuesRequest: GetTagValuesRequest,
    ResourceTag: ResourceTag,

}
