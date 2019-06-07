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
 * ModifyResourceTags请求参数结构体
 * @class
 */
class ModifyResourceTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源的六段式描述
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 需要增加或修改的标签集合。如果Resource描述的资源未关联输入的标签键，则增加关联；若已关联，则将该资源关联的键对应的标签值修改为输入值。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键
         * @type {Array.<Tag> || null}
         */
        this.ReplaceTags = null;

        /**
         * 需要解关联的标签集合。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键
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
         * 资源六段式描述
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
         * 资源的六段式描述
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
         * 资源六段式描述
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

module.exports = {
    DescribeTagsResponse: DescribeTagsResponse,
    DeleteTagRequest: DeleteTagRequest,
    DeleteResourceTagResponse: DeleteResourceTagResponse,
    ModifyResourceTagsResponse: ModifyResourceTagsResponse,
    DescribeTagKeysResponse: DescribeTagKeysResponse,
    DescribeTagValuesRequest: DescribeTagValuesRequest,
    ModifyResourceTagsRequest: ModifyResourceTagsRequest,
    DescribeTagKeysRequest: DescribeTagKeysRequest,
    DescribeResourceTagsByResourceIdsRequest: DescribeResourceTagsByResourceIdsRequest,
    Tag: Tag,
    TagResource: TagResource,
    DescribeTagsRequest: DescribeTagsRequest,
    AddResourceTagRequest: AddResourceTagRequest,
    CreateTagRequest: CreateTagRequest,
    CreateTagResponse: CreateTagResponse,
    DescribeResourceTagsByResourceIdsResponse: DescribeResourceTagsByResourceIdsResponse,
    DeleteTagResponse: DeleteTagResponse,
    AddResourceTagResponse: AddResourceTagResponse,
    UpdateResourceTagValueRequest: UpdateResourceTagValueRequest,
    DescribeTagValuesResponse: DescribeTagValuesResponse,
    DeleteResourceTagRequest: DeleteResourceTagRequest,
    UpdateResourceTagValueResponse: UpdateResourceTagValueResponse,
    TagKeyObject: TagKeyObject,
    TagWithDelete: TagWithDelete,

}
