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
 * DescribeStackVersions返回参数结构体
 * @class
 */
class DescribeStackVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的版本数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 版本详细信息列表
         * @type {Array.<VersionInfo> || null}
         */
        this.Versions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Versions) {
            this.Versions = new Array();
            for (let z in params.Versions) {
                let obj = new VersionInfo();
                obj.deserialize(params.Versions[z]);
                this.Versions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStackEvents返回参数结构体
 * @class
 */
class DescribeStackEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的事件数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 事件详细信息列表
         * @type {Array.<EventInfo> || null}
         */
        this.Events = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new EventInfo();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateStack返回参数结构体
 * @class
 */
class UpdateStackResponse extends  AbstractModel {
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
 * DescribeStacks请求参数结构体
 * @class
 */
class DescribeStacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照⼀个或者多个资源栈ID查询
         * @type {Array.<string> || null}
         */
        this.StackIds = null;

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
        this.StackIds = 'StackIds' in params ? params.StackIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateStackVersion返回参数结构体
 * @class
 */
class CreateStackVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新创建的版本ID
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateStack请求参数结构体
 * @class
 */
class UpdateStackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待更新的资源栈ID
         * @type {string || null}
         */
        this.StackId = null;

        /**
         * 资源栈名称，不得超过60个字符
         * @type {string || null}
         */
        this.StackName = null;

        /**
         * 资源栈描述，不得超过200个字符
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
        this.StackId = 'StackId' in params ? params.StackId : null;
        this.StackName = 'StackName' in params ? params.StackName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeStackEvent请求参数结构体
 * @class
 */
class DescribeStackEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件ID
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * PlanStack返回参数结构体
 * @class
 */
class PlanStackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行的事件ID
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源栈信息
 * @class
 */
class StackInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源栈ID
         * @type {string || null}
         */
        this.StackId = null;

        /**
         * 资源栈名称
         * @type {string || null}
         */
        this.StackName = null;

        /**
         * 资源栈描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 所处地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 资源栈状态
         * @type {string || null}
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
        this.StackId = 'StackId' in params ? params.StackId : null;
        this.StackName = 'StackName' in params ? params.StackName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * PlanStack请求参数结构体
 * @class
 */
class PlanStackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源栈ID
         * @type {string || null}
         */
        this.StackId = null;

        /**
         * 待执行plan事件的版本ID
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StackId = 'StackId' in params ? params.StackId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * ApplyStack返回参数结构体
 * @class
 */
class ApplyStackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行的事件ID
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyStack请求参数结构体
 * @class
 */
class DestroyStackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源栈ID
         * @type {string || null}
         */
        this.StackId = null;

        /**
         * 待执行destroy事件的版本ID
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StackId = 'StackId' in params ? params.StackId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * CreateStackVersion请求参数结构体
 * @class
 */
class CreateStackVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待增加版本的资源栈ID
         * @type {string || null}
         */
        this.StackId = null;

        /**
         * 模板 URL，⽬前仅限 COS URL, ⽂件为zip压缩格式
         * @type {string || null}
         */
        this.TemplateUrl = null;

        /**
         * 版本名称，不得超过60个字符
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 版本描述，不得超过200个字符
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
        this.StackId = 'StackId' in params ? params.StackId : null;
        this.TemplateUrl = 'TemplateUrl' in params ? params.TemplateUrl : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeleteStackVersion返回参数结构体
 * @class
 */
class DeleteStackVersionResponse extends  AbstractModel {
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
 * 查询过滤条件
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 条件名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 匹配的值，可以有多个
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
 * DescribeStackVersions请求参数结构体
 * @class
 */
class DescribeStackVersionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照⼀个或者多个版本ID查询
         * @type {Array.<string> || null}
         */
        this.VersionIds = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * <li>**Name**</li>
按照【**版本名称**】进行过滤
类型：string

<li>**Status**</li>
按照【**版本状态**】过滤，形如`VERSION_EDITING`，`PLAN_IN_PROGRESS`等
类型：string

<li>**StackId**</li>
按照版本所属的【**资源栈ID**】进行过滤，形如`stk-xxxxxx`
类型：string
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
        this.VersionIds = 'VersionIds' in params ? params.VersionIds : null;
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
 * DescribeStackEvents请求参数结构体
 * @class
 */
class DescribeStackEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照⼀个或者多个事件ID查询
         * @type {Array.<string> || null}
         */
        this.EventIds = null;

        /**
         * <li>**VersionId**</li>
按照【**版本ID**】过滤，VersionId形如 `ver-kg8hn58h`
类型：string

<li>**StackId**</li>
按照【**资源栈ID**】过滤，StackId形如 `stk-hz5vn3te`
类型：string

<li>**Type**</li>
按照【**事件类型**】过滤，Type 形如 plan, apply, destroy
类型：string

<li>**Status**</li>
按照【**事件状态**】过滤，Status形如 queueing, running, success, failed
类型：string
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节
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
        this.EventIds = 'EventIds' in params ? params.EventIds : null;

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
 * DescribeStackEvent返回参数结构体
 * @class
 */
class DescribeStackEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件ID
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 版本ID
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 资源栈ID
         * @type {string || null}
         */
        this.StackId = null;

        /**
         * 事件类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 事件状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 状态信息
         * @type {string || null}
         */
        this.EventMessage = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 控制台输出文本
         * @type {string || null}
         */
        this.ConsoleLog = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.StackId = 'StackId' in params ? params.StackId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EventMessage = 'EventMessage' in params ? params.EventMessage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ConsoleLog = 'ConsoleLog' in params ? params.ConsoleLog : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyStack请求参数结构体
 * @class
 */
class ApplyStackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源栈ID
         * @type {string || null}
         */
        this.StackId = null;

        /**
         * 待执行apply事件的版本ID
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StackId = 'StackId' in params ? params.StackId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * DeleteStackVersion请求参数结构体
 * @class
 */
class DeleteStackVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的版本ID
         * @type {string || null}
         */
        this.VersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;

    }
}

/**
 * DestroyStack返回参数结构体
 * @class
 */
class DestroyStackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件ID
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteStack请求参数结构体
 * @class
 */
class DeleteStackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的资源栈ID
         * @type {string || null}
         */
        this.StackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StackId = 'StackId' in params ? params.StackId : null;

    }
}

/**
 * 事件详情
 * @class
 */
class EventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件ID
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 版本ID
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 资源栈ID
         * @type {string || null}
         */
        this.StackId = null;

        /**
         * 事件类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 版本状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 状态信息
         * @type {string || null}
         */
        this.Message = null;

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
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.StackId = 'StackId' in params ? params.StackId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * UpdateStackVersion返回参数结构体
 * @class
 */
class UpdateStackVersionResponse extends  AbstractModel {
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
 * DeleteStack返回参数结构体
 * @class
 */
class DeleteStackResponse extends  AbstractModel {
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
 * CreateStack请求参数结构体
 * @class
 */
class CreateStackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源栈名称，不得超过60个字符
         * @type {string || null}
         */
        this.StackName = null;

        /**
         * 资源栈所在地域
         * @type {string || null}
         */
        this.StackRegion = null;

        /**
         * HCL模板URL，⽬前仅限 COS URL, ⽂件为zip压缩格式
         * @type {string || null}
         */
        this.TemplateUrl = null;

        /**
         * 资源栈描述，不得超过200个字符
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
        this.StackName = 'StackName' in params ? params.StackName : null;
        this.StackRegion = 'StackRegion' in params ? params.StackRegion : null;
        this.TemplateUrl = 'TemplateUrl' in params ? params.TemplateUrl : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeStacks返回参数结构体
 * @class
 */
class DescribeStacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的资源栈数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 资源栈详细信息列表
         * @type {Array.<StackInfo> || null}
         */
        this.Stacks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Stacks) {
            this.Stacks = new Array();
            for (let z in params.Stacks) {
                let obj = new StackInfo();
                obj.deserialize(params.Stacks[z]);
                this.Stacks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateStack返回参数结构体
 * @class
 */
class CreateStackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建得到的资源栈ID
         * @type {string || null}
         */
        this.StackId = null;

        /**
         * 资源栈版本ID
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StackId = 'StackId' in params ? params.StackId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 版本信息
 * @class
 */
class VersionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本ID
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 版本名称
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 版本描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 资源栈ID
         * @type {string || null}
         */
        this.StackId = null;

        /**
         * 版本状态
         * @type {string || null}
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
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.StackId = 'StackId' in params ? params.StackId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * UpdateStackVersion请求参数结构体
 * @class
 */
class UpdateStackVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待更新的版本ID
         * @type {string || null}
         */
        this.VersionId = null;

        /**
         * 模板 URL，⽬前仅限 COS URL, ⽂件为zip压缩格式
         * @type {string || null}
         */
        this.TemplateUrl = null;

        /**
         * 版本名称，不得超过60个字符
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 版本描述，不得超过200个字符
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
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.TemplateUrl = 'TemplateUrl' in params ? params.TemplateUrl : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

module.exports = {
    DescribeStackVersionsResponse: DescribeStackVersionsResponse,
    DescribeStackEventsResponse: DescribeStackEventsResponse,
    UpdateStackResponse: UpdateStackResponse,
    DescribeStacksRequest: DescribeStacksRequest,
    CreateStackVersionResponse: CreateStackVersionResponse,
    UpdateStackRequest: UpdateStackRequest,
    DescribeStackEventRequest: DescribeStackEventRequest,
    PlanStackResponse: PlanStackResponse,
    StackInfo: StackInfo,
    PlanStackRequest: PlanStackRequest,
    ApplyStackResponse: ApplyStackResponse,
    DestroyStackRequest: DestroyStackRequest,
    CreateStackVersionRequest: CreateStackVersionRequest,
    DeleteStackVersionResponse: DeleteStackVersionResponse,
    Filter: Filter,
    DescribeStackVersionsRequest: DescribeStackVersionsRequest,
    DescribeStackEventsRequest: DescribeStackEventsRequest,
    DescribeStackEventResponse: DescribeStackEventResponse,
    ApplyStackRequest: ApplyStackRequest,
    DeleteStackVersionRequest: DeleteStackVersionRequest,
    DestroyStackResponse: DestroyStackResponse,
    DeleteStackRequest: DeleteStackRequest,
    EventInfo: EventInfo,
    UpdateStackVersionResponse: UpdateStackVersionResponse,
    DeleteStackResponse: DeleteStackResponse,
    CreateStackRequest: CreateStackRequest,
    DescribeStacksResponse: DescribeStacksResponse,
    CreateStackResponse: CreateStackResponse,
    VersionInfo: VersionInfo,
    UpdateStackVersionRequest: UpdateStackVersionRequest,

}
