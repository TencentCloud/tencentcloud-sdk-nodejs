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
 * ModifyPathRewrite请求参数结构体
 * @class
 */
class ModifyPathRewriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路径重写规则ID
         * @type {string || null}
         */
        this.PathRewriteId = null;

        /**
         * 正则表达式
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * 替换的内容
         * @type {string || null}
         */
        this.Replacement = null;

        /**
         * 是否屏蔽映射后路径，Y: 是 N: 否
         * @type {string || null}
         */
        this.Blocked = null;

        /**
         * 规则顺序，越小优先级越高
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
        this.PathRewriteId = 'PathRewriteId' in params ? params.PathRewriteId : null;
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.Replacement = 'Replacement' in params ? params.Replacement : null;
        this.Blocked = 'Blocked' in params ? params.Blocked : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 分页的 ContainerEvent
 * @class
 */
class TsfPageContainerEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * events 数组
         * @type {Array.<ContainerEvent> || null}
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
                let obj = new ContainerEvent();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * ApiDetailResponse描述
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

        /**
         * API 描述
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
        this.Description = 'Description' in params ? params.Description : null;

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
 * DeletePathRewrites返回参数结构体
 * @class
 */
class DeletePathRewritesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true/false
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
 * 路径重写翻页对象
 * @class
 */
class PathRewritePage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 路径重写规则列表
         * @type {Array.<PathRewrite> || null}
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
                let obj = new PathRewrite();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribeUnitApiUseDetail请求参数结构体
 * @class
 */
class DescribeUnitApiUseDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关部署组ID
         * @type {string || null}
         */
        this.GatewayDeployGroupId = null;

        /**
         * 网关分组Api ID
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * 查询的日期,格式：yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询的日期,格式：yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 网关实例ID
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

        /**
         * 网关分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 翻页查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 翻页查询每页记录数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 监控统计数据粒度
         * @type {number || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayDeployGroupId = 'GatewayDeployGroupId' in params ? params.GatewayDeployGroupId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Period = 'Period' in params ? params.Period : null;

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
 * StopContainerGroup返回参数结构体
 * @class
 */
class StopContainerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 停止操作是否成功。
true：停止成功
false：停止失败
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
 * DeletePathRewrites请求参数结构体
 * @class
 */
class DeletePathRewritesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路径重写规则IDs
         * @type {Array.<string> || null}
         */
        this.PathRewriteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PathRewriteIds = 'PathRewriteIds' in params ? params.PathRewriteIds : null;

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
 * ContinueRunFailedTaskBatch请求参数结构体
 * @class
 */
class ContinueRunFailedTaskBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID。
         * @type {string || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

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
 * DeleteRepository返回参数结构体
 * @class
 */
class DeleteRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除仓库是否成功
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
 * 分位数据模型
 * @class
 */
class QuantileEntity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最大值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MaxValue = null;

        /**
         * 最小值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MinValue = null;

        /**
         * 五分位值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FifthPositionValue = null;

        /**
         * 九分位值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NinthPositionValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxValue = 'MaxValue' in params ? params.MaxValue : null;
        this.MinValue = 'MinValue' in params ? params.MinValue : null;
        this.FifthPositionValue = 'FifthPositionValue' in params ? params.FifthPositionValue : null;
        this.NinthPositionValue = 'NinthPositionValue' in params ? params.NinthPositionValue : null;

    }
}

/**
 * UpdateRepository请求参数结构体
 * @class
 */
class UpdateRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库ID
         * @type {string || null}
         */
        this.RepositoryId = null;

        /**
         * 仓库描述
         * @type {string || null}
         */
        this.RepositoryDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepositoryId = 'RepositoryId' in params ? params.RepositoryId : null;
        this.RepositoryDesc = 'RepositoryDesc' in params ? params.RepositoryDesc : null;

    }
}

/**
 * DescribePathRewrite返回参数结构体
 * @class
 */
class DescribePathRewriteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路径重写规则对象
         * @type {PathRewrite || null}
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
            let obj = new PathRewrite();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
 * CreateGatewayApi返回参数结构体
 * @class
 */
class CreateGatewayApiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * DescribeGroupBindedGateways返回参数结构体
 * @class
 */
class DescribeGroupBindedGatewaysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 翻页结构体
         * @type {TsfPageGatewayDeployGroup || null}
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
            let obj = new TsfPageGatewayDeployGroup();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindApiGroup请求参数结构体
 * @class
 */
class UnbindApiGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组网关id列表
         * @type {Array.<GatewayGroupIds> || null}
         */
        this.GroupGatewayList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GroupGatewayList) {
            this.GroupGatewayList = new Array();
            for (let z in params.GroupGatewayList) {
                let obj = new GatewayGroupIds();
                obj.deserialize(params.GroupGatewayList[z]);
                this.GroupGatewayList.push(obj);
            }
        }

    }
}

/**
 * 任务定义
 * @class
 */
class TaskRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务类型
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 执行类型
         * @type {string || null}
         */
        this.ExecuteType = null;

        /**
         * 任务内容，长度限制65535字节
         * @type {string || null}
         */
        this.TaskContent = null;

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 超时时间
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * 重试次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RetryCount = null;

        /**
         * 重试间隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RetryInterval = null;

        /**
         * 触发规则
         * @type {TaskRule || null}
         */
        this.TaskRule = null;

        /**
         * 是否启用任务,ENABLED/DISABLED
         * @type {string || null}
         */
        this.TaskState = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 判断任务成功的操作符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SuccessOperator = null;

        /**
         * 判断任务成功的阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessRatio = null;

        /**
         * 分片数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * 高级设置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdvanceSettings || null}
         */
        this.AdvanceSettings = null;

        /**
         * 分片参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ShardArgument> || null}
         */
        this.ShardArguments = null;

        /**
         * 所属工作流ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BelongFlowIds = null;

        /**
         * 任务历史ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskLogId = null;

        /**
         * 触发类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TriggerType = null;

        /**
         * 任务参数，长度限制10000个字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskArgument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ExecuteType = 'ExecuteType' in params ? params.ExecuteType : null;
        this.TaskContent = 'TaskContent' in params ? params.TaskContent : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.RetryCount = 'RetryCount' in params ? params.RetryCount : null;
        this.RetryInterval = 'RetryInterval' in params ? params.RetryInterval : null;

        if (params.TaskRule) {
            let obj = new TaskRule();
            obj.deserialize(params.TaskRule)
            this.TaskRule = obj;
        }
        this.TaskState = 'TaskState' in params ? params.TaskState : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SuccessOperator = 'SuccessOperator' in params ? params.SuccessOperator : null;
        this.SuccessRatio = 'SuccessRatio' in params ? params.SuccessRatio : null;
        this.ShardCount = 'ShardCount' in params ? params.ShardCount : null;

        if (params.AdvanceSettings) {
            let obj = new AdvanceSettings();
            obj.deserialize(params.AdvanceSettings)
            this.AdvanceSettings = obj;
        }

        if (params.ShardArguments) {
            this.ShardArguments = new Array();
            for (let z in params.ShardArguments) {
                let obj = new ShardArgument();
                obj.deserialize(params.ShardArguments[z]);
                this.ShardArguments.push(obj);
            }
        }
        this.BelongFlowIds = 'BelongFlowIds' in params ? params.BelongFlowIds : null;
        this.TaskLogId = 'TaskLogId' in params ? params.TaskLogId : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.TaskArgument = 'TaskArgument' in params ? params.TaskArgument : null;

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
 * RedoTaskBatch请求参数结构体
 * @class
 */
class RedoTaskBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

    }
}

/**
 * DescribeTaskLastStatus请求参数结构体
 * @class
 */
class DescribeTaskLastStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
 * CreateApiRateLimitRule请求参数结构体
 * @class
 */
class CreateApiRateLimitRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Api Id
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * qps值
         * @type {number || null}
         */
        this.MaxQps = null;

        /**
         * 开启/禁用，enabled/disabled, 不传默认开启
         * @type {string || null}
         */
        this.UsableStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.MaxQps = 'MaxQps' in params ? params.MaxQps : null;
        this.UsableStatus = 'UsableStatus' in params ? params.UsableStatus : null;

    }
}

/**
 * 翻页查询的任务记录返回
 * @class
 */
class TaskRecordPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务记录列表
         * @type {Array.<TaskRecord> || null}
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
                let obj = new TaskRecord();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

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
 * ChangeApiUsableStatus请求参数结构体
 * @class
 */
class ChangeApiUsableStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API ID
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * 切换状态，enabled/disabled
         * @type {string || null}
         */
        this.UsableStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.UsableStatus = 'UsableStatus' in params ? params.UsableStatus : null;

    }
}

/**
 * DescribeApiRateLimitRules请求参数结构体
 * @class
 */
class DescribeApiRateLimitRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Api ID
         * @type {string || null}
         */
        this.ApiId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiId = 'ApiId' in params ? params.ApiId : null;

    }
}

/**
 * DescribeApiGroups返回参数结构体
 * @class
 */
class DescribeApiGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 翻页结构体
         * @type {TsfPageApiGroupInfo || null}
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
            let obj = new TsfPageApiGroupInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeUnitRule返回参数结构体
 * @class
 */
class DescribeUnitRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元化规则对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UnitRule || null}
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
            let obj = new UnitRule();
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
 * DescribeRepositories请求参数结构体
 * @class
 */
class DescribeRepositoriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询关键字（按照仓库名称搜索）
         * @type {string || null}
         */
        this.SearchWord = null;

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

        /**
         * 仓库类型（默认仓库：default，私有仓库：private）
         * @type {string || null}
         */
        this.RepositoryType = null;

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
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;

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
 * CreateGatewayApi请求参数结构体
 * @class
 */
class CreateGatewayApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Api信息
         * @type {Array.<ApiInfo> || null}
         */
        this.ApiList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.ApiList) {
            this.ApiList = new Array();
            for (let z in params.ApiList) {
                let obj = new ApiInfo();
                obj.deserialize(params.ApiList[z]);
                this.ApiList.push(obj);
            }
        }

    }
}

/**
 * DescribeCreateGatewayApiStatus返回参数结构体
 * @class
 */
class DescribeCreateGatewayApiStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否已完成导入任务
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
 * DescribeGroupGateways请求参数结构体
 * @class
 */
class DescribeGroupGatewaysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关部署组ID
         * @type {string || null}
         */
        this.GatewayDeployGroupId = null;

        /**
         * 翻页查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 翻页查询每页记录数
         * @type {number || null}
         */
        this.Limit = null;

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
        this.GatewayDeployGroupId = 'GatewayDeployGroupId' in params ? params.GatewayDeployGroupId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * UpdateApiRateLimitRule返回参数结构体
 * @class
 */
class UpdateApiRateLimitRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * DescribeGatewayAllGroupApis返回参数结构体
 * @class
 */
class DescribeGatewayAllGroupApisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关分组和API列表信息
         * @type {GatewayVo || null}
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
            let obj = new GatewayVo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 服务状态，passing 在线，critical 离线
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceStatus = null;

        /**
         * 注册时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RegistrationTime = null;

        /**
         * 上次心跳时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastHeartbeatTime = null;

        /**
         * 实例注册id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistrationId = null;

        /**
         * 屏蔽状态，hidden 为屏蔽，unhidden 为未屏蔽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HiddenStatus = null;

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
        this.ServiceStatus = 'ServiceStatus' in params ? params.ServiceStatus : null;
        this.RegistrationTime = 'RegistrationTime' in params ? params.RegistrationTime : null;
        this.LastHeartbeatTime = 'LastHeartbeatTime' in params ? params.LastHeartbeatTime : null;
        this.RegistrationId = 'RegistrationId' in params ? params.RegistrationId : null;
        this.HiddenStatus = 'HiddenStatus' in params ? params.HiddenStatus : null;

    }
}

/**
 * 微服务网关插件绑定对象
 * @class
 */
class GatewayPluginBoundParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 插件id
         * @type {string || null}
         */
        this.PluginId = null;

        /**
         * 插件绑定到的对象类型:group/api
         * @type {string || null}
         */
        this.ScopeType = null;

        /**
         * 插件绑定到的对象主键值，例如分组的ID/API的ID
         * @type {string || null}
         */
        this.ScopeValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PluginId = 'PluginId' in params ? params.PluginId : null;
        this.ScopeType = 'ScopeType' in params ? params.ScopeType : null;
        this.ScopeValue = 'ScopeValue' in params ? params.ScopeValue : null;

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
 * 镜像仓库
 * @class
 */
class ImageRepository extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名,含命名空间,如tsf/nginx
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reponame = null;

        /**
         * 仓库类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Repotype = null;

        /**
         * 镜像版本数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TagCount = null;

        /**
         * 是否公共,1:公有,0:私有
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsPublic = null;

        /**
         * 是否被用户收藏。true：是，false：否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUserFavor = null;

        /**
         * 是否是腾讯云官方仓库。 是否是腾讯云官方仓库。true：是，false：否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsQcloudOfficial = null;

        /**
         * 被所有用户收藏次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FavorCount = null;

        /**
         * 拉取次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PullCount = null;

        /**
         * 描述内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Reponame = 'Reponame' in params ? params.Reponame : null;
        this.Repotype = 'Repotype' in params ? params.Repotype : null;
        this.TagCount = 'TagCount' in params ? params.TagCount : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;
        this.IsUserFavor = 'IsUserFavor' in params ? params.IsUserFavor : null;
        this.IsQcloudOfficial = 'IsQcloudOfficial' in params ? params.IsQcloudOfficial : null;
        this.FavorCount = 'FavorCount' in params ? params.FavorCount : null;
        this.PullCount = 'PullCount' in params ? params.PullCount : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
 * DescribeRepository返回参数结构体
 * @class
 */
class DescribeRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的仓库信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RepositoryInfo || null}
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
            let obj = new RepositoryInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
         * NamespaceId Ns ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * InstanceZoneId 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceZoneId = null;

        /**
         * InstanceImportMode 导入模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceImportMode = null;

        /**
         * ApplicationType应用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * ApplicationResourceType 资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationResourceType = null;

        /**
         * sidecar状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceSidecarStatus = null;

        /**
         * 部署组名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * NS名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 健康检查原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * agent版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentVersion = null;

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
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.AgentVersion = 'AgentVersion' in params ? params.AgentVersion : null;

    }
}

/**
 * UpdateHealthCheckSettings请求参数结构体
 * @class
 */
class UpdateHealthCheckSettingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 是否能使健康检查
         * @type {boolean || null}
         */
        this.EnableHealthCheck = null;

        /**
         * 健康检查配置
         * @type {HealthCheckSettings || null}
         */
        this.HealthCheckSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.EnableHealthCheck = 'EnableHealthCheck' in params ? params.EnableHealthCheck : null;

        if (params.HealthCheckSettings) {
            let obj = new HealthCheckSettings();
            obj.deserialize(params.HealthCheckSettings)
            this.HealthCheckSettings = obj;
        }

    }
}

/**
 * EnableUnitRule请求参数结构体
 * @class
 */
class EnableUnitRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

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

        /**
         * 是否开启高可用
         * @type {string || null}
         */
        this.IsHaEnable = null;

        /**
         * 需要绑定的数据集ID
         * @type {string || null}
         */
        this.ProgramId = null;

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
        this.IsHaEnable = 'IsHaEnable' in params ? params.IsHaEnable : null;
        this.ProgramId = 'ProgramId' in params ? params.ProgramId : null;

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
 * DescribeGroupBindedGateways请求参数结构体
 * @class
 */
class DescribeGroupBindedGatewaysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 翻页查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 翻页查询每页记录数
         * @type {number || null}
         */
        this.Limit = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * DescribeRepository请求参数结构体
 * @class
 */
class DescribeRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库ID
         * @type {string || null}
         */
        this.RepositoryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepositoryId = 'RepositoryId' in params ? params.RepositoryId : null;

    }
}

/**
 * RedoTask请求参数结构体
 * @class
 */
class RedoTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
 * DeleteApiGroup返回参数结构体
 * @class
 */
class DeleteApiGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功失败
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
 * 仓库信息
 * @class
 */
class RepositoryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库ID
         * @type {string || null}
         */
        this.RepositoryId = null;

        /**
         * 仓库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * 仓库类型（默认仓库：default，私有仓库：private）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepositoryType = null;

        /**
         * 仓库描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepositoryDesc = null;

        /**
         * 仓库是否正在被使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUsed = null;

        /**
         * 仓库创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 仓库桶名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * 仓库桶所在地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * 仓库目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Directory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepositoryId = 'RepositoryId' in params ? params.RepositoryId : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;
        this.RepositoryDesc = 'RepositoryDesc' in params ? params.RepositoryDesc : null;
        this.IsUsed = 'IsUsed' in params ? params.IsUsed : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.BucketRegion = 'BucketRegion' in params ? params.BucketRegion : null;
        this.Directory = 'Directory' in params ? params.Directory : null;

    }
}

/**
 * DraftApiGroup请求参数结构体
 * @class
 */
class DraftApiGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Api 分组ID
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
 * UpdateApiTimeouts返回参数结构体
 * @class
 */
class UpdateApiTimeoutsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * 微服务网关单元化规则
 * @class
 */
class UnitRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 网关实体ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

        /**
         * 规则描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 使用状态：enabled/disabled
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 规则项列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UnitRuleItem> || null}
         */
        this.UnitRuleItemList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.UnitRuleItemList) {
            this.UnitRuleItemList = new Array();
            for (let z in params.UnitRuleItemList) {
                let obj = new UnitRuleItem();
                obj.deserialize(params.UnitRuleItemList[z]);
                this.UnitRuleItemList.push(obj);
            }
        }

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
 * 任务最近一次执行状态
 * @class
 */
class TaskLastExecuteStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 运行状态，RUNNING/SUCCESS/FAIL/HALF/TERMINATED
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 批次历史ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchLogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.State = 'State' in params ? params.State : null;
        this.BatchLogId = 'BatchLogId' in params ? params.BatchLogId : null;

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
 * TSF基本资源信息概览
 * @class
 */
class OverviewBasicResourceUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ApplicationCount = null;

        /**
         * 命名空间总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NamespaceCount = null;

        /**
         * 部署组个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupCount = null;

        /**
         * 程序包存储空间用量，单位字节
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PackageSpaceUsed = null;

        /**
         * 已注册实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConsulInstanceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationCount = 'ApplicationCount' in params ? params.ApplicationCount : null;
        this.NamespaceCount = 'NamespaceCount' in params ? params.NamespaceCount : null;
        this.GroupCount = 'GroupCount' in params ? params.GroupCount : null;
        this.PackageSpaceUsed = 'PackageSpaceUsed' in params ? params.PackageSpaceUsed : null;
        this.ConsulInstanceCount = 'ConsulInstanceCount' in params ? params.ConsulInstanceCount : null;

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
 * DescribeCreateGatewayApiStatus请求参数结构体
 * @class
 */
class DescribeCreateGatewayApiStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求方法
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.MicroserviceId = 'MicroserviceId' in params ? params.MicroserviceId : null;

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

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 部署组备注
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
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * UpdateRepository返回参数结构体
 * @class
 */
class UpdateRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新仓库是否成功
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
 * ModifyTask请求参数结构体
 * @class
 */
class ModifyTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务类型
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务内容
         * @type {string || null}
         */
        this.TaskContent = null;

        /**
         * 任务执行类型
         * @type {string || null}
         */
        this.ExecuteType = null;

        /**
         * 触发规则
         * @type {TaskRule || null}
         */
        this.TaskRule = null;

        /**
         * 超时时间，单位 ms
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 分片数量
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * 分片参数
         * @type {Array.<ShardArgument> || null}
         */
        this.ShardArguments = null;

        /**
         * 高级设置
         * @type {AdvanceSettings || null}
         */
        this.AdvanceSettings = null;

        /**
         * 判断任务成功的操作符 GT/GTE
         * @type {string || null}
         */
        this.SuccessOperator = null;

        /**
         * 判断任务成功率的阈值
         * @type {number || null}
         */
        this.SuccessRatio = null;

        /**
         * 重试次数
         * @type {number || null}
         */
        this.RetryCount = null;

        /**
         * 重试间隔
         * @type {number || null}
         */
        this.RetryInterval = null;

        /**
         * 任务参数，长度限制10000个字符
         * @type {string || null}
         */
        this.TaskArgument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskContent = 'TaskContent' in params ? params.TaskContent : null;
        this.ExecuteType = 'ExecuteType' in params ? params.ExecuteType : null;

        if (params.TaskRule) {
            let obj = new TaskRule();
            obj.deserialize(params.TaskRule)
            this.TaskRule = obj;
        }
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ShardCount = 'ShardCount' in params ? params.ShardCount : null;

        if (params.ShardArguments) {
            this.ShardArguments = new Array();
            for (let z in params.ShardArguments) {
                let obj = new ShardArgument();
                obj.deserialize(params.ShardArguments[z]);
                this.ShardArguments.push(obj);
            }
        }

        if (params.AdvanceSettings) {
            let obj = new AdvanceSettings();
            obj.deserialize(params.AdvanceSettings)
            this.AdvanceSettings = obj;
        }
        this.SuccessOperator = 'SuccessOperator' in params ? params.SuccessOperator : null;
        this.SuccessRatio = 'SuccessRatio' in params ? params.SuccessRatio : null;
        this.RetryCount = 'RetryCount' in params ? params.RetryCount : null;
        this.RetryInterval = 'RetryInterval' in params ? params.RetryInterval : null;
        this.TaskArgument = 'TaskArgument' in params ? params.TaskArgument : null;

    }
}

/**
 * DeleteUnitNamespaces返回参数结构体
 * @class
 */
class DeleteUnitNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * DisableTask请求参数结构体
 * @class
 */
class DisableTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
 * DescribeBasicResourceUsage返回参数结构体
 * @class
 */
class DescribeBasicResourceUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TSF基本资源信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OverviewBasicResourceUsage || null}
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
            let obj = new OverviewBasicResourceUsage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述程序包关联信息
 * @class
 */
class PkgBind extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 部署组id
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

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
         * 镜像server
         * @type {string || null}
         */
        this.Server = null;

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

        /**
         * kubernetes滚动更新策略的MaxSurge参数
         * @type {string || null}
         */
        this.MaxSurge = null;

        /**
         * kubernetes滚动更新策略的MaxUnavailable参数
         * @type {string || null}
         */
        this.MaxUnavailable = null;

        /**
         * 健康检查配置信息，若不指定该参数，则默认不设置健康检查。
         * @type {HealthCheckSettings || null}
         */
        this.HealthCheckSettings = null;

        /**
         * 部署组应用运行的环境变量。若不指定该参数，则默认不设置额外的环境变量。
         * @type {Array.<Env> || null}
         */
        this.Envs = null;

        /**
         * 容器部署组的网络设置。
         * @type {ServiceSetting || null}
         */
        this.ServiceSetting = null;

        /**
         * 是否部署 agent 容器。若不指定该参数，则默认不部署 agent 容器。
         * @type {boolean || null}
         */
        this.DeployAgent = null;

        /**
         * 节点调度策略。若不指定改参数，则默认不使用节点调度策略。
         * @type {SchedulingStrategy || null}
         */
        this.SchedulingStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.Server = 'Server' in params ? params.Server : null;
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
        this.MaxSurge = 'MaxSurge' in params ? params.MaxSurge : null;
        this.MaxUnavailable = 'MaxUnavailable' in params ? params.MaxUnavailable : null;

        if (params.HealthCheckSettings) {
            let obj = new HealthCheckSettings();
            obj.deserialize(params.HealthCheckSettings)
            this.HealthCheckSettings = obj;
        }

        if (params.Envs) {
            this.Envs = new Array();
            for (let z in params.Envs) {
                let obj = new Env();
                obj.deserialize(params.Envs[z]);
                this.Envs.push(obj);
            }
        }

        if (params.ServiceSetting) {
            let obj = new ServiceSetting();
            obj.deserialize(params.ServiceSetting)
            this.ServiceSetting = obj;
        }
        this.DeployAgent = 'DeployAgent' in params ? params.DeployAgent : null;

        if (params.SchedulingStrategy) {
            let obj = new SchedulingStrategy();
            obj.deserialize(params.SchedulingStrategy)
            this.SchedulingStrategy = obj;
        }

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

        /**
         * 部署组备注
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Alias = 'Alias' in params ? params.Alias : null;

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
 * UpdateUnitRule请求参数结构体
 * @class
 */
class UpdateUnitRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则项列表
         * @type {Array.<UnitRuleItem> || null}
         */
        this.UnitRuleItemList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.UnitRuleItemList) {
            this.UnitRuleItemList = new Array();
            for (let z in params.UnitRuleItemList) {
                let obj = new UnitRuleItem();
                obj.deserialize(params.UnitRuleItemList[z]);
                this.UnitRuleItemList.push(obj);
            }
        }

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
 * ReleaseApiGroup返回参数结构体
 * @class
 */
class ReleaseApiGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功/失败
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
 * UpdateApiRateLimitRules请求参数结构体
 * @class
 */
class UpdateApiRateLimitRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API ID 列表
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

        /**
         * 开启/禁用，enabled/disabled
         * @type {string || null}
         */
        this.UsableStatus = null;

        /**
         * QPS值。开启限流规则时，必填
         * @type {number || null}
         */
        this.MaxQps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;
        this.UsableStatus = 'UsableStatus' in params ? params.UsableStatus : null;
        this.MaxQps = 'MaxQps' in params ? params.MaxQps : null;

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
 * EnableTask请求参数结构体
 * @class
 */
class EnableTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启用任务
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
 * DisableTask返回参数结构体
 * @class
 */
class DisableTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功 or 失败
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

        /**
         * 可选，根据部署组ID进行过滤
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

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
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;

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
 * DescribeRepositories返回参数结构体
 * @class
 */
class DescribeRepositoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询仓库信息列表
         * @type {RepositoryList || null}
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
            let obj = new RepositoryList();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 监控概览对象
 * @class
 */
class MonitorOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 近24小时调用数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InvocationCountOfDay = null;

        /**
         * 总调用数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InvocationCount = null;

        /**
         * 近24小时调用错误数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorCountOfDay = null;

        /**
         * 总调用错误数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorCount = null;

        /**
         * 近24小时调用成功率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SuccessRatioOfDay = null;

        /**
         * 总调用成功率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SuccessRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvocationCountOfDay = 'InvocationCountOfDay' in params ? params.InvocationCountOfDay : null;
        this.InvocationCount = 'InvocationCount' in params ? params.InvocationCount : null;
        this.ErrorCountOfDay = 'ErrorCountOfDay' in params ? params.ErrorCountOfDay : null;
        this.ErrorCount = 'ErrorCount' in params ? params.ErrorCount : null;
        this.SuccessRatioOfDay = 'SuccessRatioOfDay' in params ? params.SuccessRatioOfDay : null;
        this.SuccessRatio = 'SuccessRatio' in params ? params.SuccessRatio : null;

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

        /**
         * 部署组备注
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupDesc = 'GroupDesc' in params ? params.GroupDesc : null;
        this.GroupResourceType = 'GroupResourceType' in params ? params.GroupResourceType : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * StopTaskBatch返回参数结构体
 * @class
 */
class StopTaskBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功 or 失败
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
 * 服务端口
 * @class
 */
class Ports extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务端口
         * @type {number || null}
         */
        this.TargetPort = null;

        /**
         * 端口协议
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
        this.TargetPort = 'TargetPort' in params ? params.TargetPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * DescribeGroupGateways返回参数结构体
 * @class
 */
class DescribeGroupGatewaysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API分组信息
         * @type {TsfPageApiGroupInfo || null}
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
            let obj = new TsfPageApiGroupInfo();
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
 * CreateAllGatewayApiAsync返回参数结构体
 * @class
 */
class CreateAllGatewayApiAsyncResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * DeleteTask返回参数结构体
 * @class
 */
class DeleteTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除成功or失败
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
 * DescribeContainerEvents请求参数结构体
 * @class
 */
class DescribeContainerEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * event 的资源类型, group 或者 instance
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * event 的资源 id
         * @type {string || null}
         */
        this.ResourceId = null;

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
         * 当类型是 instance 时需要
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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DisableUnitRule请求参数结构体
 * @class
 */
class DisableUnitRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

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

        /**
         * 是否开启高可用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsHaEnable = null;

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
        this.IsHaEnable = 'IsHaEnable' in params ? params.IsHaEnable : null;

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
         * 环境变量值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * k8s ValueFrom
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ValueFrom || null}
         */
        this.ValueFrom = null;

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

        if (params.ValueFrom) {
            let obj = new ValueFrom();
            obj.deserialize(params.ValueFrom)
            this.ValueFrom = obj;
        }

    }
}

/**
 * k8s env 的 ResourceFieldRef
 * @class
 */
class ResourceFieldRef extends  AbstractModel {
    constructor(){
        super();

        /**
         * k8s 的 Resource
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Resource = 'Resource' in params ? params.Resource : null;

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
 * DisableUnitRoute返回参数结构体
 * @class
 */
class DisableUnitRouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果，成功失败
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
 * ExecuteTask请求参数结构体
 * @class
 */
class ExecuteTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
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
 * DescribeFlowLastBatchState请求参数结构体
 * @class
 */
class DescribeFlowLastBatchStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

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
 * TerminateTaskFlowBatch返回参数结构体
 * @class
 */
class TerminateTaskFlowBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否停止成功
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
 * k8s env 的 ValueFrom
 * @class
 */
class ValueFrom extends  AbstractModel {
    constructor(){
        super();

        /**
         * k8s env 的 FieldRef
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldRef || null}
         */
        this.FieldRef = null;

        /**
         * k8s env 的 ResourceFieldRef
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResourceFieldRef || null}
         */
        this.ResourceFieldRef = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FieldRef) {
            let obj = new FieldRef();
            obj.deserialize(params.FieldRef)
            this.FieldRef = obj;
        }

        if (params.ResourceFieldRef) {
            let obj = new ResourceFieldRef();
            obj.deserialize(params.ResourceFieldRef)
            this.ResourceFieldRef = obj;
        }

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
 * DescribeApiRateLimitRules返回参数结构体
 * @class
 */
class DescribeApiRateLimitRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限流结果
         * @type {Array.<ApiRateLimitRule> || null}
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
                let obj = new ApiRateLimitRule();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 镜像定制类型
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * 镜像特征ID列表
         * @type {Array.<string> || null}
         */
        this.FeatureIdList = null;

        /**
         * 实例额外需要设置参数信息
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * 安全组 ID 列表
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

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
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;
        this.FeatureIdList = 'FeatureIdList' in params ? params.FeatureIdList : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeGroupUseDetail返回参数结构体
 * @class
 */
class DescribeGroupUseDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日使用统计对象
         * @type {GroupDailyUseStatistics || null}
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
            let obj = new GroupDailyUseStatistics();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
 * UpdateApiTimeouts请求参数结构体
 * @class
 */
class UpdateApiTimeoutsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API ID 列表
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

        /**
         * 开启/禁用，enabled/disabled
         * @type {string || null}
         */
        this.UsableStatus = null;

        /**
         * 超时时间，单位毫秒，开启API超时时，必填
         * @type {number || null}
         */
        this.Timeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;
        this.UsableStatus = 'UsableStatus' in params ? params.UsableStatus : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

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
 * ExecuteTaskFlow返回参数结构体
 * @class
 */
class ExecuteTaskFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流批次ID
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
 * DescribeUnitNamespaces返回参数结构体
 * @class
 */
class DescribeUnitNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元化命名空间对象列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageUnitNamespace || null}
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
            let obj = new TsfPageUnitNamespace();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ContinueRunFailedTaskBatch返回参数结构体
 * @class
 */
class ContinueRunFailedTaskBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功或失败
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
 * DescribeImageRepository请求参数结构体
 * @class
 */
class DescribeImageRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名，搜索关键字,不带命名空间的
         * @type {string || null}
         */
        this.SearchWord = null;

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
 * 单元化规则翻页对象

 * @class
 */
class TsfPageUnitRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 记录实体列表
         * @type {Array.<UnitRule> || null}
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
                let obj = new UnitRule();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * DescribeApiGroup请求参数结构体
 * @class
 */
class DescribeApiGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 分组ID
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
 * RedoTaskExecute返回参数结构体
 * @class
 */
class RedoTaskExecuteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功失败
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
 * DescribeGroupsWithPlugin请求参数结构体
 * @class
 */
class DescribeGroupsWithPluginRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 插件ID
         * @type {string || null}
         */
        this.PluginId = null;

        /**
         * 绑定/未绑定: true / false
         * @type {boolean || null}
         */
        this.Bound = null;

        /**
         * 翻页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页记录数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索关键字
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 网关实体ID
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PluginId = 'PluginId' in params ? params.PluginId : null;
        this.Bound = 'Bound' in params ? params.Bound : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;

    }
}

/**
 * 镜像仓库列表
 * @class
 */
class ImageRepositoryResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 镜像服务器地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Server = null;

        /**
         * 列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageRepository> || null}
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
        this.Server = 'Server' in params ? params.Server : null;

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new ImageRepository();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * ModifyTask返回参数结构体
 * @class
 */
class ModifyTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新是否成功
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
 * DeleteUnitNamespaces请求参数结构体
 * @class
 */
class DeleteUnitNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实体ID
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

        /**
         * 单元化命名空间ID数组
         * @type {Array.<string> || null}
         */
        this.UnitNamespaceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;
        this.UnitNamespaceList = 'UnitNamespaceList' in params ? params.UnitNamespaceList : null;

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
 * 微服务网关单元化规则项
 * @class
 */
class UnitRuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 逻辑关系：AND/OR
         * @type {string || null}
         */
        this.Relationship = null;

        /**
         * 目的地命名空间ID
         * @type {string || null}
         */
        this.DestNamespaceId = null;

        /**
         * 目的地命名空间名称
         * @type {string || null}
         */
        this.DestNamespaceName = null;

        /**
         * 规则项名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则项ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 单元化规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UnitRuleId = null;

        /**
         * 规则顺序，越小优先级越高：默认为0
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 规则描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UnitRuleTag> || null}
         */
        this.UnitRuleTagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Relationship = 'Relationship' in params ? params.Relationship : null;
        this.DestNamespaceId = 'DestNamespaceId' in params ? params.DestNamespaceId : null;
        this.DestNamespaceName = 'DestNamespaceName' in params ? params.DestNamespaceName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.UnitRuleId = 'UnitRuleId' in params ? params.UnitRuleId : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.UnitRuleTagList) {
            this.UnitRuleTagList = new Array();
            for (let z in params.UnitRuleTagList) {
                let obj = new UnitRuleTag();
                obj.deserialize(params.UnitRuleTagList[z]);
                this.UnitRuleTagList.push(obj);
            }
        }

    }
}

/**
 * BindPlugin请求参数结构体
 * @class
 */
class BindPluginRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组/API绑定插件列表
         * @type {Array.<GatewayPluginBoundParam> || null}
         */
        this.PluginInstanceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PluginInstanceList) {
            this.PluginInstanceList = new Array();
            for (let z in params.PluginInstanceList) {
                let obj = new GatewayPluginBoundParam();
                obj.deserialize(params.PluginInstanceList[z]);
                this.PluginInstanceList.push(obj);
            }
        }

    }
}

/**
 * 健康检查配置信息，若不指定该参数，则默认不设置健康检查。
 * @class
 */
class HealthCheckSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健康检查方法。HTTP：通过 HTTP 接口检查；CMD：通过执行命令检查；TCP：通过建立 TCP 连接检查。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 容器延时启动健康检查的时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * 每次健康检查响应的最大超时时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeoutSeconds = null;

        /**
         * 进行健康检查的时间间隔。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PeriodSeconds = null;

        /**
         * 表示后端容器从失败到成功的连续健康检查成功次数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessThreshold = null;

        /**
         * 表示后端容器从成功到失败的连续健康检查成功次数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailureThreshold = null;

        /**
         * HTTP 健康检查方法使用的检查协议。支持HTTP、HTTPS。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Scheme = null;

        /**
         * 健康检查端口，范围 1~65535 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * HTTP 健康检查接口的请求路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 执行命令检查方式，执行的命令。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Command = null;

        /**
         * TSF_DEFAULT：tsf 默认就绪探针。K8S_NATIVE：k8s 原生探针。不填默认为 k8s 原生探针。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;
        this.TimeoutSeconds = 'TimeoutSeconds' in params ? params.TimeoutSeconds : null;
        this.PeriodSeconds = 'PeriodSeconds' in params ? params.PeriodSeconds : null;
        this.SuccessThreshold = 'SuccessThreshold' in params ? params.SuccessThreshold : null;
        this.FailureThreshold = 'FailureThreshold' in params ? params.FailureThreshold : null;
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * api分组已绑定的网关部署组
 * @class
 */
class GatewayDeployGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployGroupId = null;

        /**
         * 网关部署组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployGroupName = null;

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
         * 应用分类：V：虚拟机应用，C：容器应用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationType = null;

        /**
         * 部署组应用状态,取值: Running、Waiting、Paused、Updating、RollingBack、Abnormal、Unknown
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupStatus = null;

        /**
         * 集群类型，C ：容器，V：虚拟机
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
        this.DeployGroupId = 'DeployGroupId' in params ? params.DeployGroupId : null;
        this.DeployGroupName = 'DeployGroupName' in params ? params.DeployGroupName : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.GroupStatus = 'GroupStatus' in params ? params.GroupStatus : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

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

        /**
         * 程序包仓库id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepositoryId = null;

        /**
         * 程序包仓库类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepositoryType = null;

        /**
         * 程序包仓库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepositoryName = null;

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
        this.RepositoryId = 'RepositoryId' in params ? params.RepositoryId : null;
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;

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

        /**
         * 集群版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterVersion = null;

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
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;

    }
}

/**
 * DescribeGroupUseDetail请求参数结构体
 * @class
 */
class DescribeGroupUseDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关部署组ID
         * @type {string || null}
         */
        this.GatewayDeployGroupId = null;

        /**
         * 网关分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 查询的日期,格式：yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询的日期,格式：yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指定top的条数,默认为10
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayDeployGroupId = 'GatewayDeployGroupId' in params ? params.GatewayDeployGroupId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Count = 'Count' in params ? params.Count : null;

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

        /**
         * 微服务的离线实例数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CriticalInstanceCount = null;

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
        this.CriticalInstanceCount = 'CriticalInstanceCount' in params ? params.CriticalInstanceCount : null;

    }
}

/**
 * UpdateUnitRule返回参数结构体
 * @class
 */
class UpdateUnitRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * 健康检查参数
 * @class
 */
class HealthCheckSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存活健康检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HealthCheckSetting || null}
         */
        this.LivenessProbe = null;

        /**
         * 就绪健康检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HealthCheckSetting || null}
         */
        this.ReadinessProbe = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LivenessProbe) {
            let obj = new HealthCheckSetting();
            obj.deserialize(params.LivenessProbe)
            this.LivenessProbe = obj;
        }

        if (params.ReadinessProbe) {
            let obj = new HealthCheckSetting();
            obj.deserialize(params.ReadinessProbe)
            this.ReadinessProbe = obj;
        }

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
 * DescribePathRewrites请求参数结构体
 * @class
 */
class DescribePathRewritesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关部署组ID
         * @type {string || null}
         */
        this.GatewayGroupId = null;

        /**
         * 根据正则表达式或替换的内容模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 每页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 起始偏移量
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
        this.GatewayGroupId = 'GatewayGroupId' in params ? params.GatewayGroupId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 仓库列表
 * @class
 */
class RepositoryList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库总量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 仓库信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RepositoryInfo> || null}
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
                let obj = new RepositoryInfo();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

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
 * CreateTask返回参数结构体
 * @class
 */
class CreateTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
 * UpdateApiGroup返回参数结构体
 * @class
 */
class UpdateApiGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果，true: 成功, false: 失败
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
 * DescribeGroupsWithPlugin返回参数结构体
 * @class
 */
class DescribeGroupsWithPluginResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API分组信息列表
         * @type {TsfPageApiGroupInfo || null}
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
            let obj = new TsfPageApiGroupInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 微服务网关插件实例对象
 * @class
 */
class GatewayPlugin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关插件id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 插件名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 插件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 插件描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 发布状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 网关分组简单信息
 * @class
 */
class GatewayApiGroupVo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组ID
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
         * 分组下API个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupApiCount = null;

        /**
         * 分组API列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GatewayGroupApiVo> || null}
         */
        this.GroupApis = null;

        /**
         * 网关实例的类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayInstanceType = null;

        /**
         * 网关实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

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
        this.GroupApiCount = 'GroupApiCount' in params ? params.GroupApiCount : null;

        if (params.GroupApis) {
            this.GroupApis = new Array();
            for (let z in params.GroupApis) {
                let obj = new GatewayGroupApiVo();
                obj.deserialize(params.GroupApis[z]);
                this.GroupApis.push(obj);
            }
        }
        this.GatewayInstanceType = 'GatewayInstanceType' in params ? params.GatewayInstanceType : null;
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;

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

        /**
         * 需要绑定的数据集ID
         * @type {string || null}
         */
        this.ProgramId = null;

        /**
         * 服务配置信息列表
         * @type {Array.<ServiceConfig> || null}
         */
        this.ServiceConfigList = null;

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
        this.ProgramId = 'ProgramId' in params ? params.ProgramId : null;

        if (params.ServiceConfigList) {
            this.ServiceConfigList = new Array();
            for (let z in params.ServiceConfigList) {
                let obj = new ServiceConfig();
                obj.deserialize(params.ServiceConfigList[z]);
                this.ServiceConfigList.push(obj);
            }
        }

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

        /**
         * 部署应用描述信息
         * @type {string || null}
         */
        this.DeployDesc = null;

        /**
         * 是否允许强制启动
         * @type {boolean || null}
         */
        this.ForceStart = null;

        /**
         * 是否开启健康检查
         * @type {boolean || null}
         */
        this.EnableHealthCheck = null;

        /**
         * 开启健康检查时，配置健康检查
         * @type {HealthCheckSettings || null}
         */
        this.HealthCheckSettings = null;

        /**
         * 部署方式，0表示快速更新，1表示滚动更新
         * @type {number || null}
         */
        this.UpdateType = null;

        /**
         * 是否启用beta批次
         * @type {boolean || null}
         */
        this.DeployBetaEnable = null;

        /**
         * 滚动发布每个批次参与的实例比率
         * @type {Array.<number> || null}
         */
        this.DeployBatch = null;

        /**
         * 滚动发布的执行方式
         * @type {string || null}
         */
        this.DeployExeMode = null;

        /**
         * 滚动发布每个批次的时间间隔
         * @type {number || null}
         */
        this.DeployWaitTime = null;

        /**
         * 启动脚本 base64编码
         * @type {string || null}
         */
        this.StartScript = null;

        /**
         * 停止脚本 base64编码
         * @type {string || null}
         */
        this.StopScript = null;

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
        this.DeployDesc = 'DeployDesc' in params ? params.DeployDesc : null;
        this.ForceStart = 'ForceStart' in params ? params.ForceStart : null;
        this.EnableHealthCheck = 'EnableHealthCheck' in params ? params.EnableHealthCheck : null;

        if (params.HealthCheckSettings) {
            let obj = new HealthCheckSettings();
            obj.deserialize(params.HealthCheckSettings)
            this.HealthCheckSettings = obj;
        }
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;
        this.DeployBetaEnable = 'DeployBetaEnable' in params ? params.DeployBetaEnable : null;
        this.DeployBatch = 'DeployBatch' in params ? params.DeployBatch : null;
        this.DeployExeMode = 'DeployExeMode' in params ? params.DeployExeMode : null;
        this.DeployWaitTime = 'DeployWaitTime' in params ? params.DeployWaitTime : null;
        this.StartScript = 'StartScript' in params ? params.StartScript : null;
        this.StopScript = 'StopScript' in params ? params.StopScript : null;

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
 * CreateTaskFlow请求参数结构体
 * @class
 */
class CreateTaskFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流名称
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 触发方式
         * @type {TaskRule || null}
         */
        this.TriggerRule = null;

        /**
         * 工作流任务节点列表
         * @type {Array.<TaskFlowEdge> || null}
         */
        this.FlowEdges = null;

        /**
         * 工作流执行超时时间
         * @type {number || null}
         */
        this.TimeOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowName = 'FlowName' in params ? params.FlowName : null;

        if (params.TriggerRule) {
            let obj = new TaskRule();
            obj.deserialize(params.TriggerRule)
            this.TriggerRule = obj;
        }

        if (params.FlowEdges) {
            this.FlowEdges = new Array();
            for (let z in params.FlowEdges) {
                let obj = new TaskFlowEdge();
                obj.deserialize(params.FlowEdges[z]);
                this.FlowEdges.push(obj);
            }
        }
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;

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
 * GatewayPlugin 翻页对象
 * @class
 */
class TsfPageGatewayPlugin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 记录实体列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GatewayPlugin> || null}
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
                let obj = new GatewayPlugin();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * API 日统计数据点
 * @class
 */
class ApiUseStatisticsEntity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 次数
         * @type {string || null}
         */
        this.Count = null;

        /**
         * 比率
         * @type {string || null}
         */
        this.Ratio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;

    }
}

/**
 * UnbindApiGroup返回参数结构体
 * @class
 */
class UnbindApiGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果，成功失败
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
 * DescribePathRewrite请求参数结构体
 * @class
 */
class DescribePathRewriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路径重写规则ID
         * @type {string || null}
         */
        this.PathRewriteId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PathRewriteId = 'PathRewriteId' in params ? params.PathRewriteId : null;

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
 * 网关部署组ID和网关API分组ID元组
 * @class
 */
class GatewayGroupIds extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关部署组ID
         * @type {string || null}
         */
        this.GatewayDeployGroupId = null;

        /**
         * 分组id
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
        this.GatewayDeployGroupId = 'GatewayDeployGroupId' in params ? params.GatewayDeployGroupId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

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
 * BindApiGroup返回参数结构体
 * @class
 */
class BindApiGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果，成功失败
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
 * 监控统计数据点Map集合（单元化网关使用）
 * @class
 */
class MetricDataPointMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总调用次数监控数据点集合
         * @type {Array.<MetricDataPoint> || null}
         */
        this.SumReqAmount = null;

        /**
         * 平均错误率监控数据点集合
         * @type {Array.<MetricDataPoint> || null}
         */
        this.AvgFailureRate = null;

        /**
         * 平均响应时间监控数据点集合
         * @type {Array.<MetricDataPoint> || null}
         */
        this.AvgTimeCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SumReqAmount) {
            this.SumReqAmount = new Array();
            for (let z in params.SumReqAmount) {
                let obj = new MetricDataPoint();
                obj.deserialize(params.SumReqAmount[z]);
                this.SumReqAmount.push(obj);
            }
        }

        if (params.AvgFailureRate) {
            this.AvgFailureRate = new Array();
            for (let z in params.AvgFailureRate) {
                let obj = new MetricDataPoint();
                obj.deserialize(params.AvgFailureRate[z]);
                this.AvgFailureRate.push(obj);
            }
        }

        if (params.AvgTimeCost) {
            this.AvgTimeCost = new Array();
            for (let z in params.AvgTimeCost) {
                let obj = new MetricDataPoint();
                obj.deserialize(params.AvgTimeCost[z]);
                this.AvgTimeCost.push(obj);
            }
        }

    }
}

/**
 * ModifyPathRewrite返回参数结构体
 * @class
 */
class ModifyPathRewriteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true/false
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
 * EnableUnitRule返回参数结构体
 * @class
 */
class EnableUnitRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * DescribeEnabledUnitRule返回参数结构体
 * @class
 */
class DescribeEnabledUnitRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元化规则对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UnitRule || null}
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
            let obj = new UnitRule();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateApiGroup请求参数结构体
 * @class
 */
class UpdateApiGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Api 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Api 分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Api 分组描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 鉴权类型
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * 分组上下文
         * @type {string || null}
         */
        this.GroupContext = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.GroupContext = 'GroupContext' in params ? params.GroupContext : null;

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
 * EnableUnitRoute返回参数结构体
 * @class
 */
class EnableUnitRouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果，成功失败
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
 * DisableUnitRule返回参数结构体
 * @class
 */
class DisableUnitRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * GatewayDeployGroup 翻页对象
 * @class
 */
class TsfPageGatewayDeployGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 记录实体列表
         * @type {Array.<GatewayDeployGroup> || null}
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
                let obj = new GatewayDeployGroup();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

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
 * ExecuteTaskFlow请求参数结构体
 * @class
 */
class ExecuteTaskFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * TerminateTaskFlowBatch请求参数结构体
 * @class
 */
class TerminateTaskFlowBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流批次 ID
         * @type {string || null}
         */
        this.FlowBatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowBatchId = 'FlowBatchId' in params ? params.FlowBatchId : null;

    }
}

/**
 * CreateUnitRule返回参数结构体
 * @class
 */
class CreateUnitRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * DescribeTaskRecords返回参数结构体
 * @class
 */
class DescribeTaskRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务记录列表
         * @type {TaskRecordPage || null}
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
            let obj = new TaskRecordPage();
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

        /**
         * 部署应用描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployDesc = null;

        /**
         * 滚动发布的更新方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateType = null;

        /**
         * 发布是否启用beta批次
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DeployBetaEnable = null;

        /**
         * 滚动发布的批次比例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.DeployBatch = null;

        /**
         * 滚动发布的批次执行方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployExeMode = null;

        /**
         * 滚动发布的每个批次的等待时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DeployWaitTime = null;

        /**
         * 是否开启了健康检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableHealthCheck = null;

        /**
         * 健康检查配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HealthCheckSettings || null}
         */
        this.HealthCheckSettings = null;

        /**
         * 程序包类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * 启动脚本 base64编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartScript = null;

        /**
         * 停止脚本 base64编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StopScript = null;

        /**
         * 部署组备注
注意：此字段可能返回 null，表示取不到有效值。
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
        this.DeployDesc = 'DeployDesc' in params ? params.DeployDesc : null;
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;
        this.DeployBetaEnable = 'DeployBetaEnable' in params ? params.DeployBetaEnable : null;
        this.DeployBatch = 'DeployBatch' in params ? params.DeployBatch : null;
        this.DeployExeMode = 'DeployExeMode' in params ? params.DeployExeMode : null;
        this.DeployWaitTime = 'DeployWaitTime' in params ? params.DeployWaitTime : null;
        this.EnableHealthCheck = 'EnableHealthCheck' in params ? params.EnableHealthCheck : null;

        if (params.HealthCheckSettings) {
            let obj = new HealthCheckSettings();
            obj.deserialize(params.HealthCheckSettings)
            this.HealthCheckSettings = obj;
        }
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.StartScript = 'StartScript' in params ? params.StartScript : null;
        this.StopScript = 'StopScript' in params ? params.StopScript : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * DescribeApiUseDetail返回参数结构体
 * @class
 */
class DescribeApiUseDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日使用统计对象
         * @type {GroupApiUseStatistics || null}
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
            let obj = new GroupApiUseStatistics();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器网络设置。
 * @class
 */
class ServiceSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0:公网, 1:集群内访问, 2：NodePort, 3: VPC 内网访问
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AccessType = null;

        /**
         * 容器端口映射
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProtocolPort> || null}
         */
        this.ProtocolPorts = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
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
        this.AccessType = 'AccessType' in params ? params.AccessType : null;

        if (params.ProtocolPorts) {
            this.ProtocolPorts = new Array();
            for (let z in params.ProtocolPorts) {
                let obj = new ProtocolPort();
                obj.deserialize(params.ProtocolPorts[z]);
                this.ProtocolPorts.push(obj);
            }
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

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

        /**
         * 程序包仓库类型
         * @type {string || null}
         */
        this.RepositoryType = null;

        /**
         * 程序包仓库id
         * @type {string || null}
         */
        this.RepositoryId = null;

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
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;
        this.RepositoryId = 'RepositoryId' in params ? params.RepositoryId : null;

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

        /**
         * 应用备注名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationRemarkName = null;

        /**
         * 服务配置信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServiceConfig> || null}
         */
        this.ServiceConfigList = null;

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
        this.ApplicationRemarkName = 'ApplicationRemarkName' in params ? params.ApplicationRemarkName : null;

        if (params.ServiceConfigList) {
            this.ServiceConfigList = new Array();
            for (let z in params.ServiceConfigList) {
                let obj = new ServiceConfig();
                obj.deserialize(params.ServiceConfigList[z]);
                this.ServiceConfigList.push(obj);
            }
        }

    }
}

/**
 * DescribeUnitRule请求参数结构体
 * @class
 */
class DescribeUnitRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元化规则ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * UpdateGatewayApi返回参数结构体
 * @class
 */
class UpdateGatewayApiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果，成功失败
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
 * 返回容器的事件，比如 k8s deployment 或者 pod 的 events
 * @class
 */
class ContainerEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第一次出现的时间，以 ms 为单位的时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstTimestamp = null;

        /**
         * 最后一次出现的时间，以 ms 为单位的时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastTimestamp = null;

        /**
         * 级别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 详细描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 出现次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstTimestamp = 'FirstTimestamp' in params ? params.FirstTimestamp : null;
        this.LastTimestamp = 'LastTimestamp' in params ? params.LastTimestamp : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Count = 'Count' in params ? params.Count : null;

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
 * 分片参数
 * @class
 */
class ShardArgument extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片参数 KEY，整形, 范围 [1,1000]
         * @type {number || null}
         */
        this.ShardKey = null;

        /**
         * 分片参数 VALUE
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShardValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardKey = 'ShardKey' in params ? params.ShardKey : null;
        this.ShardValue = 'ShardValue' in params ? params.ShardValue : null;

    }
}

/**
 * 监控统计数据点
 * @class
 */
class MetricDataPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据点键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 数据点值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 数据点标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tag = null;

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
        this.Tag = 'Tag' in params ? params.Tag : null;

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
 * DescribeGatewayMonitorOverview返回参数结构体
 * @class
 */
class DescribeGatewayMonitorOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控概览对象
         * @type {MonitorOverview || null}
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
            let obj = new MonitorOverview();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateAllGatewayApiAsync请求参数结构体
 * @class
 */
class CreateAllGatewayApiAsyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API分组ID
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.MicroserviceId = 'MicroserviceId' in params ? params.MicroserviceId : null;

    }
}

/**
 * 路径重写
 * @class
 */
class PathRewrite extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路径重写规则ID
         * @type {string || null}
         */
        this.PathRewriteId = null;

        /**
         * 网关部署组ID
         * @type {string || null}
         */
        this.GatewayGroupId = null;

        /**
         * 正则表达式
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * 替换的内容
         * @type {string || null}
         */
        this.Replacement = null;

        /**
         * 是否屏蔽映射后路径，Y: 是 N: 否
         * @type {string || null}
         */
        this.Blocked = null;

        /**
         * 规则顺序，越小优先级越高
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
        this.PathRewriteId = 'PathRewriteId' in params ? params.PathRewriteId : null;
        this.GatewayGroupId = 'GatewayGroupId' in params ? params.GatewayGroupId : null;
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.Replacement = 'Replacement' in params ? params.Replacement : null;
        this.Blocked = 'Blocked' in params ? params.Blocked : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * EnableTaskFlow返回参数结构体
 * @class
 */
class EnableTaskFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true成功，false: 失败
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
 * DeleteUnitRule返回参数结构体
 * @class
 */
class DeleteUnitRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * DisableTaskFlow返回参数结构体
 * @class
 */
class DisableTaskFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true成功，false: 失败
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
 * DescribeGatewayMonitorOverview请求参数结构体
 * @class
 */
class DescribeGatewayMonitorOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关部署组ID
         * @type {string || null}
         */
        this.GatewayDeployGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayDeployGroupId = 'GatewayDeployGroupId' in params ? params.GatewayDeployGroupId : null;

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
 * BindPlugin返回参数结构体
 * @class
 */
class BindPluginResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果，成功失败
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
 * RedoTaskFlowBatch请求参数结构体
 * @class
 */
class RedoTaskFlowBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流批次 ID
         * @type {string || null}
         */
        this.FlowBatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowBatchId = 'FlowBatchId' in params ? params.FlowBatchId : null;

    }
}

/**
 * 单元化命名空间翻页对象

 * @class
 */
class TsfPageUnitNamespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 记录实体列表
         * @type {Array.<UnitNamespace> || null}
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
                let obj = new UnitNamespace();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * StopTaskExecute请求参数结构体
 * @class
 */
class StopTaskExecuteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行ID
         * @type {string || null}
         */
        this.ExecuteId = null;

        /**
         * 任务批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 任务ID
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
        this.ExecuteId = 'ExecuteId' in params ? params.ExecuteId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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

        /**
         * 程序包仓库类型
         * @type {string || null}
         */
        this.RepositoryType = null;

        /**
         * 程序包仓库id
         * @type {string || null}
         */
        this.RepositoryId = null;

        /**
         * 程序包类型数组支持（fatjar jar war tar.gz zip）
         * @type {Array.<string> || null}
         */
        this.PackageTypeList = null;

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
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;
        this.RepositoryId = 'RepositoryId' in params ? params.RepositoryId : null;
        this.PackageTypeList = 'PackageTypeList' in params ? params.PackageTypeList : null;

    }
}

/**
 * tsf 容器集群节点调度策略
 * @class
 */
class SchedulingStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * NONE：不使用调度策略；CROSS_AZ：跨可用区部署
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 网关部署组、分组、API列表数据
 * @class
 */
class GatewayVo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关部署组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayDeployGroupId = null;

        /**
         * 网关部署组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayDeployGroupName = null;

        /**
         * API 分组个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupNum = null;

        /**
         * API 分组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GatewayApiGroupVo> || null}
         */
        this.Groups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayDeployGroupId = 'GatewayDeployGroupId' in params ? params.GatewayDeployGroupId : null;
        this.GatewayDeployGroupName = 'GatewayDeployGroupName' in params ? params.GatewayDeployGroupName : null;
        this.GroupNum = 'GroupNum' in params ? params.GroupNum : null;

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new GatewayApiGroupVo();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
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
 * CreateTask请求参数结构体
 * @class
 */
class CreateTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名称，任务长度64字符
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务内容，长度限制65536个字节
         * @type {string || null}
         */
        this.TaskContent = null;

        /**
         * 执行类型，unicast/broadcast
         * @type {string || null}
         */
        this.ExecuteType = null;

        /**
         * 任务类型,java
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务超时时间， 时间单位 ms
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * 部署组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 触发规则
         * @type {TaskRule || null}
         */
        this.TaskRule = null;

        /**
         * 重试次数，0 <= RetryCount<= 10
         * @type {number || null}
         */
        this.RetryCount = null;

        /**
         * 重试间隔， 0 <= RetryInterval <= 600000， 时间单位 ms
         * @type {number || null}
         */
        this.RetryInterval = null;

        /**
         * 分片数量
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * 分片参数
         * @type {Array.<ShardArgument> || null}
         */
        this.ShardArguments = null;

        /**
         * 判断任务成功的操作符
         * @type {string || null}
         */
        this.SuccessOperator = null;

        /**
         * 判断任务成功率的阈值，如100
         * @type {string || null}
         */
        this.SuccessRatio = null;

        /**
         * 高级设置
         * @type {AdvanceSettings || null}
         */
        this.AdvanceSettings = null;

        /**
         * 任务参数，长度限制10000个字符
         * @type {string || null}
         */
        this.TaskArgument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskContent = 'TaskContent' in params ? params.TaskContent : null;
        this.ExecuteType = 'ExecuteType' in params ? params.ExecuteType : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.TaskRule) {
            let obj = new TaskRule();
            obj.deserialize(params.TaskRule)
            this.TaskRule = obj;
        }
        this.RetryCount = 'RetryCount' in params ? params.RetryCount : null;
        this.RetryInterval = 'RetryInterval' in params ? params.RetryInterval : null;
        this.ShardCount = 'ShardCount' in params ? params.ShardCount : null;

        if (params.ShardArguments) {
            this.ShardArguments = new Array();
            for (let z in params.ShardArguments) {
                let obj = new ShardArgument();
                obj.deserialize(params.ShardArguments[z]);
                this.ShardArguments.push(obj);
            }
        }
        this.SuccessOperator = 'SuccessOperator' in params ? params.SuccessOperator : null;
        this.SuccessRatio = 'SuccessRatio' in params ? params.SuccessRatio : null;

        if (params.AdvanceSettings) {
            let obj = new AdvanceSettings();
            obj.deserialize(params.AdvanceSettings)
            this.AdvanceSettings = obj;
        }
        this.TaskArgument = 'TaskArgument' in params ? params.TaskArgument : null;

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
 * DescribeUsableUnitNamespaces返回参数结构体
 * @class
 */
class DescribeUsableUnitNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元化命名空间对象列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageUnitNamespace || null}
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
            let obj = new TsfPageUnitNamespace();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeContainerEvents返回参数结构体
 * @class
 */
class DescribeContainerEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * events 分页列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfPageContainerEvent || null}
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
            let obj = new TsfPageContainerEvent();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskRecords请求参数结构体
 * @class
 */
class DescribeTaskRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 翻页偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 翻页查询单页数量。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 模糊查询关键字，支持任务ID和任务名称。
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 任务启用状态。enabled/disabled
         * @type {string || null}
         */
        this.TaskState = null;

        /**
         * 分组ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 任务类型。
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务触发类型，UNICAST、BROADCAST。
         * @type {string || null}
         */
        this.ExecuteType = null;

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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.TaskState = 'TaskState' in params ? params.TaskState : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ExecuteType = 'ExecuteType' in params ? params.ExecuteType : null;

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
 * DescribeUnitNamespaces请求参数结构体
 * @class
 */
class DescribeUnitNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实体ID
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

        /**
         * 根据命名空间名或ID模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 翻页查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 翻页查询每页记录数
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
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteTask请求参数结构体
 * @class
 */
class DeleteTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
 * CreateUnitRule请求参数结构体
 * @class
 */
class CreateUnitRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实体ID
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则项列表
         * @type {Array.<UnitRuleItem> || null}
         */
        this.UnitRuleItemList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.UnitRuleItemList) {
            this.UnitRuleItemList = new Array();
            for (let z in params.UnitRuleItemList) {
                let obj = new UnitRuleItem();
                obj.deserialize(params.UnitRuleItemList[z]);
                this.UnitRuleItemList.push(obj);
            }
        }

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

        /**
         * 部署应用描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployDesc = null;

        /**
         * 部署组备注
注意：此字段可能返回 null，表示取不到有效值。
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
        this.DeployDesc = 'DeployDesc' in params ? params.DeployDesc : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

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
 * DescribePluginInstances请求参数结构体
 * @class
 */
class DescribePluginInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组或者API的ID
         * @type {string || null}
         */
        this.ScopeValue = null;

        /**
         * 绑定: true; 未绑定: false
         * @type {boolean || null}
         */
        this.Bound = null;

        /**
         * 翻页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页展示的条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 插件类型
         * @type {string || null}
         */
        this.Type = null;

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
        this.ScopeValue = 'ScopeValue' in params ? params.ScopeValue : null;
        this.Bound = 'Bound' in params ? params.Bound : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

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

        /**
         * 程序包仓库类型
         * @type {string || null}
         */
        this.RepositoryType = null;

        /**
         * 程序包仓库id
         * @type {string || null}
         */
        this.RepositoryId = null;

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
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;
        this.RepositoryId = 'RepositoryId' in params ? params.RepositoryId : null;

    }
}

/**
 * 工作流最近批次的状态
 * @class
 */
class TaskFlowLastBatchState extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowBatchId = null;

        /**
         * 批次历史ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowBatchLogId = null;

        /**
         * 状态,WAITING/SUCCESS/FAILED/RUNNING/TERMINATING
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowBatchId = 'FlowBatchId' in params ? params.FlowBatchId : null;
        this.FlowBatchLogId = 'FlowBatchLogId' in params ? params.FlowBatchLogId : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * DescribeUnitRules返回参数结构体
 * @class
 */
class DescribeUnitRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TsfPageUnitRule> || null}
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
                let obj = new TsfPageUnitRule();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateGatewayApi请求参数结构体
 * @class
 */
class UpdateGatewayApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API ID
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * API 路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Api 请求方法
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 请求映射
         * @type {string || null}
         */
        this.PathMapping = null;

        /**
         * api所在服务host
         * @type {string || null}
         */
        this.Host = null;

        /**
         * api描述信息
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
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.PathMapping = 'PathMapping' in params ? params.PathMapping : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 路径重写创建对象
 * @class
 */
class PathRewriteCreateObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关部署组ID
         * @type {string || null}
         */
        this.GatewayGroupId = null;

        /**
         * 正则表达式
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * 替换的内容
         * @type {string || null}
         */
        this.Replacement = null;

        /**
         * 是否屏蔽映射后路径，Y: 是 N: 否
         * @type {string || null}
         */
        this.Blocked = null;

        /**
         * 规则顺序，越小优先级越高
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
        this.GatewayGroupId = 'GatewayGroupId' in params ? params.GatewayGroupId : null;
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.Replacement = 'Replacement' in params ? params.Replacement : null;
        this.Blocked = 'Blocked' in params ? params.Blocked : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeApiGroups请求参数结构体
 * @class
 */
class DescribeApiGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索关键字
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

        /**
         * 分组类型。 ms： 微服务分组； external:外部Api分组
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * 鉴权类型。 secret： 秘钥鉴权； none:无鉴权
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * 发布状态, drafted: 未发布。 released: 发布
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 排序字段："created_time"或"group_context"
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型：0(ASC)或1(DESC)
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 网关实体ID
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

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
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;

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
 * DeleteUnitRule请求参数结构体
 * @class
 */
class DeleteUnitRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

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
 * CreateTaskFlow返回参数结构体
 * @class
 */
class CreateTaskFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID
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

        /**
         * 状态过滤，online、offline、single_online
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * IdList
         * @type {Array.<string> || null}
         */
        this.MicroserviceIdList = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.MicroserviceIdList = 'MicroserviceIdList' in params ? params.MicroserviceIdList : null;

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
 * DescribeTaskLastStatus返回参数结构体
 * @class
 */
class DescribeTaskLastStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务上一次执行状态
         * @type {TaskLastExecuteStatus || null}
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
            let obj = new TaskLastExecuteStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 网关API简单信息
 * @class
 */
class GatewayGroupApiVo extends  AbstractModel {
    constructor(){
        super();

        /**
         * API ID
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * API 请求路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API 微服务名称
         * @type {string || null}
         */
        this.MicroserviceName = null;

        /**
         * API 请求方法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 命名空间名称
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
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.MicroserviceName = 'MicroserviceName' in params ? params.MicroserviceName : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

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

        /**
         * IdList
         * @type {Array.<string> || null}
         */
        this.ApplicationIdList = null;

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
        this.ApplicationIdList = 'ApplicationIdList' in params ? params.ApplicationIdList : null;

    }
}

/**
 * DescribeTaskDetail请求参数结构体
 * @class
 */
class DescribeTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务历史ID
         * @type {string || null}
         */
        this.TaskLogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskLogId = 'TaskLogId' in params ? params.TaskLogId : null;

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
 * 微服务网关单元化规则标签
 * @class
 */
class UnitRuleTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签类型 : U(用户标签)
         * @type {string || null}
         */
        this.TagType = null;

        /**
         * 标签名
         * @type {string || null}
         */
        this.TagField = null;

        /**
         * 操作符:IN/NOT_IN/EQUAL/NOT_EQUAL/REGEX
         * @type {string || null}
         */
        this.TagOperator = null;

        /**
         * 标签值
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * 单元化规则项ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UnitRuleItemId = null;

        /**
         * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagType = 'TagType' in params ? params.TagType : null;
        this.TagField = 'TagField' in params ? params.TagField : null;
        this.TagOperator = 'TagOperator' in params ? params.TagOperator : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.UnitRuleItemId = 'UnitRuleItemId' in params ? params.UnitRuleItemId : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribePluginInstances返回参数结构体
 * @class
 */
class DescribePluginInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 插件信息列表
         * @type {TsfPageGatewayPlugin || null}
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
            let obj = new TsfPageGatewayPlugin();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRepository返回参数结构体
 * @class
 */
class CreateRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建仓库是否成功
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
 * 单元化API使用详情统计对象列表
 * @class
 */
class GroupUnitApiDailyUseStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 该API在该命名空间下的总调用次数
         * @type {string || null}
         */
        this.SumReqAmount = null;

        /**
         * 该API在该命名空间下的平均错误率
         * @type {string || null}
         */
        this.AvgFailureRate = null;

        /**
         * 该API在该命名空间下的平均响应时间
         * @type {string || null}
         */
        this.AvgTimeCost = null;

        /**
         * 监控数据曲线点位图Map集合
         * @type {MetricDataPointMap || null}
         */
        this.MetricDataPointMap = null;

        /**
         * 状态码分布详情
         * @type {Array.<ApiUseStatisticsEntity> || null}
         */
        this.TopStatusCode = null;

        /**
         * 耗时分布详情
         * @type {Array.<ApiUseStatisticsEntity> || null}
         */
        this.TopTimeCost = null;

        /**
         * 分位值对象
         * @type {QuantileEntity || null}
         */
        this.Quantile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.SumReqAmount = 'SumReqAmount' in params ? params.SumReqAmount : null;
        this.AvgFailureRate = 'AvgFailureRate' in params ? params.AvgFailureRate : null;
        this.AvgTimeCost = 'AvgTimeCost' in params ? params.AvgTimeCost : null;

        if (params.MetricDataPointMap) {
            let obj = new MetricDataPointMap();
            obj.deserialize(params.MetricDataPointMap)
            this.MetricDataPointMap = obj;
        }

        if (params.TopStatusCode) {
            this.TopStatusCode = new Array();
            for (let z in params.TopStatusCode) {
                let obj = new ApiUseStatisticsEntity();
                obj.deserialize(params.TopStatusCode[z]);
                this.TopStatusCode.push(obj);
            }
        }

        if (params.TopTimeCost) {
            this.TopTimeCost = new Array();
            for (let z in params.TopTimeCost) {
                let obj = new ApiUseStatisticsEntity();
                obj.deserialize(params.TopTimeCost[z]);
                this.TopTimeCost.push(obj);
            }
        }

        if (params.Quantile) {
            let obj = new QuantileEntity();
            obj.deserialize(params.Quantile)
            this.Quantile = obj;
        }

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

        /**
         * 程序包仓库类型
         * @type {string || null}
         */
        this.RepositoryType = null;

        /**
         * 程序包仓库id
         * @type {string || null}
         */
        this.RepositoryId = null;

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
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;
        this.RepositoryId = 'RepositoryId' in params ? params.RepositoryId : null;

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
 * 容器导入实例高级设置
 * @class
 */
class InstanceAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据盘挂载点, 默认不挂载数据盘. 已格式化的 ext3，ext4，xfs 文件系统的数据盘将直接挂载，其他文件系统或未格式化的数据盘将自动格式化为ext4 并挂载，请注意备份数据! 无数据盘或有多块数据盘的云主机此设置不生效。
注意，注意，多盘场景请使用下方的DataDisks数据结构，设置对应的云盘类型、云盘大小、挂载路径、是否格式化等信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MountTarget = null;

        /**
         * dockerd --graph 指定值, 默认为 /var/lib/docker
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DockerGraphPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MountTarget = 'MountTarget' in params ? params.MountTarget : null;
        this.DockerGraphPath = 'DockerGraphPath' in params ? params.DockerGraphPath : null;

    }
}

/**
 * API监控明细数据
 * @class
 */
class GroupApiUseStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总调用数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApiUseStatisticsEntity> || null}
         */
        this.TopStatusCode = null;

        /**
         * 平均错误率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApiUseStatisticsEntity> || null}
         */
        this.TopTimeCost = null;

        /**
         * 分位值对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QuantileEntity || null}
         */
        this.Quantile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopStatusCode) {
            this.TopStatusCode = new Array();
            for (let z in params.TopStatusCode) {
                let obj = new ApiUseStatisticsEntity();
                obj.deserialize(params.TopStatusCode[z]);
                this.TopStatusCode.push(obj);
            }
        }

        if (params.TopTimeCost) {
            this.TopTimeCost = new Array();
            for (let z in params.TopTimeCost) {
                let obj = new ApiUseStatisticsEntity();
                obj.deserialize(params.TopTimeCost[z]);
                this.TopTimeCost.push(obj);
            }
        }

        if (params.Quantile) {
            let obj = new QuantileEntity();
            obj.deserialize(params.Quantile)
            this.Quantile = obj;
        }

    }
}

/**
 * ChangeApiUsableStatus返回参数结构体
 * @class
 */
class ChangeApiUsableStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 信息
         * @type {ApiDetailInfo || null}
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
            let obj = new ApiDetailInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableTask返回参数结构体
 * @class
 */
class EnableTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功or失败
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
 * UpdateApiRateLimitRules返回参数结构体
 * @class
 */
class UpdateApiRateLimitRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * 查询网关API监控明细数据（单元化网关使用详情）
 * @class
 */
class GroupUnitApiUseStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 查询网关API监控明细对象集合
         * @type {Array.<GroupUnitApiDailyUseStatistics> || null}
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
                let obj = new GroupUnitApiDailyUseStatistics();
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

        /**
         * 程序包仓库ID
         * @type {string || null}
         */
        this.RepositoryId = null;

        /**
         * 程序包仓库类型
         * @type {string || null}
         */
        this.RepositoryType = null;

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
        this.RepositoryId = 'RepositoryId' in params ? params.RepositoryId : null;
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;

    }
}

/**
 * DeleteApiGroup请求参数结构体
 * @class
 */
class DeleteApiGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 分组ID
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
 * ReleaseApiGroup请求参数结构体
 * @class
 */
class ReleaseApiGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Api 分组ID
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
 * DescribeTaskDetail返回参数结构体
 * @class
 */
class DescribeTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务详情
         * @type {TaskRecord || null}
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
            let obj = new TaskRecord();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 任务规则
 * @class
 */
class TaskRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发规则类型, Cron/Repeat
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * Cron类型规则，cron表达式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Expression = null;

        /**
         * 时间间隔， 单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RepeatInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.Expression = 'Expression' in params ? params.Expression : null;
        this.RepeatInterval = 'RepeatInterval' in params ? params.RepeatInterval : null;

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

        /**
         * 程序包关联关系
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PkgBind> || null}
         */
        this.PkgBindInfo = null;

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

        if (params.PkgBindInfo) {
            this.PkgBindInfo = new Array();
            for (let z in params.PkgBindInfo) {
                let obj = new PkgBind();
                obj.deserialize(params.PkgBindInfo[z]);
                this.PkgBindInfo.push(obj);
            }
        }

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

        /**
         * 节点实例id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeInstanceId = null;

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
        this.NodeInstanceId = 'NodeInstanceId' in params ? params.NodeInstanceId : null;

    }
}

/**
 * EnableTaskFlow请求参数结构体
 * @class
 */
class EnableTaskFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

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
 * 微服务网关API信息
 * @class
 */
class ApiInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间Id，若为外部API,为固定值："namespace-external"
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 服务Id，若为外部API,为固定值："ms-external"
         * @type {string || null}
         */
        this.MicroserviceId = null;

        /**
         * API path
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Api 请求
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 请求映射
         * @type {string || null}
         */
        this.PathMapping = null;

        /**
         * api所在服务host,限定外部Api填写。格式: `http://127.0.0.1:8080`
         * @type {string || null}
         */
        this.Host = null;

        /**
         * api描述信息
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
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.MicroserviceId = 'MicroserviceId' in params ? params.MicroserviceId : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.PathMapping = 'PathMapping' in params ? params.PathMapping : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;

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
 * CreateRepository请求参数结构体
 * @class
 */
class CreateRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * 仓库类型（默认仓库：default，私有仓库：private）
         * @type {string || null}
         */
        this.RepositoryType = null;

        /**
         * 仓库所在桶名称
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * 仓库所在桶地域
         * @type {string || null}
         */
        this.BucketRegion = null;

        /**
         * 目录
         * @type {string || null}
         */
        this.Directory = null;

        /**
         * 仓库描述
         * @type {string || null}
         */
        this.RepositoryDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.RepositoryType = 'RepositoryType' in params ? params.RepositoryType : null;
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.BucketRegion = 'BucketRegion' in params ? params.BucketRegion : null;
        this.Directory = 'Directory' in params ? params.Directory : null;
        this.RepositoryDesc = 'RepositoryDesc' in params ? params.RepositoryDesc : null;

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
 * 分组日使用统计对象
 * @class
 */
class GroupDailyUseStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总调用数
         * @type {Array.<GroupUseStatisticsEntity> || null}
         */
        this.TopReqAmount = null;

        /**
         * 平均错误率
         * @type {Array.<GroupUseStatisticsEntity> || null}
         */
        this.TopFailureRate = null;

        /**
         * 平均响应耗时
         * @type {Array.<GroupUseStatisticsEntity> || null}
         */
        this.TopAvgTimeCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopReqAmount) {
            this.TopReqAmount = new Array();
            for (let z in params.TopReqAmount) {
                let obj = new GroupUseStatisticsEntity();
                obj.deserialize(params.TopReqAmount[z]);
                this.TopReqAmount.push(obj);
            }
        }

        if (params.TopFailureRate) {
            this.TopFailureRate = new Array();
            for (let z in params.TopFailureRate) {
                let obj = new GroupUseStatisticsEntity();
                obj.deserialize(params.TopFailureRate[z]);
                this.TopFailureRate.push(obj);
            }
        }

        if (params.TopAvgTimeCost) {
            this.TopAvgTimeCost = new Array();
            for (let z in params.TopAvgTimeCost) {
                let obj = new GroupUseStatisticsEntity();
                obj.deserialize(params.TopAvgTimeCost[z]);
                this.TopAvgTimeCost.push(obj);
            }
        }

    }
}

/**
 * DescribeEnabledUnitRule请求参数结构体
 * @class
 */
class DescribeEnabledUnitRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实体ID
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;

    }
}

/**
 * DescribeApiGroup返回参数结构体
 * @class
 */
class DescribeApiGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API分组信息
         * @type {ApiGroupInfo || null}
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
            let obj = new ApiGroupInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateApiRateLimitRule请求参数结构体
 * @class
 */
class UpdateApiRateLimitRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限流规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 开启/禁用，enabled/disabled
         * @type {string || null}
         */
        this.UsableStatus = null;

        /**
         * qps值，开启限流规则时，必填
         * @type {number || null}
         */
        this.MaxQps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.UsableStatus = 'UsableStatus' in params ? params.UsableStatus : null;
        this.MaxQps = 'MaxQps' in params ? params.MaxQps : null;

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
 * CreateApiGroup返回参数结构体
 * @class
 */
class CreateApiGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API分组ID
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
 * 服务配置
 * @class
 */
class ServiceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 端口信息列表
         * @type {Array.<Ports> || null}
         */
        this.Ports = null;

        /**
         * 健康检查配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HealthCheckConfig || null}
         */
        this.HealthCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Ports) {
            this.Ports = new Array();
            for (let z in params.Ports) {
                let obj = new Ports();
                obj.deserialize(params.Ports[z]);
                this.Ports.push(obj);
            }
        }

        if (params.HealthCheck) {
            let obj = new HealthCheckConfig();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }

    }
}

/**
 * RedoTaskExecute请求参数结构体
 * @class
 */
class RedoTaskExecuteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 任务执行ID
         * @type {string || null}
         */
        this.ExecuteId = null;

        /**
         * 任务ID
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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.ExecuteId = 'ExecuteId' in params ? params.ExecuteId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
 * DisableUnitRoute请求参数结构体
 * @class
 */
class DisableUnitRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实体ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeUnitRules请求参数结构体
 * @class
 */
class DescribeUnitRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实体ID
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

        /**
         * 根据规则名或备注内容模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 启用状态, disabled: 未发布， enabled: 发布
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 翻页查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 翻页查询每页记录数
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
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeGatewayAllGroupApis请求参数结构体
 * @class
 */
class DescribeGatewayAllGroupApisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关部署组ID
         * @type {string || null}
         */
        this.GatewayDeployGroupId = null;

        /**
         * 搜索关键字，支持分组名称或API Path
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
        this.GatewayDeployGroupId = 'GatewayDeployGroupId' in params ? params.GatewayDeployGroupId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

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

        /**
         * kubernetes滚动更新策略的MaxSurge参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MaxSurge = null;

        /**
         * kubernetes滚动更新策略的MaxUnavailable参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MaxUnavailable = null;

        /**
         * 部署组健康检查设置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HealthCheckSettings || null}
         */
        this.HealthCheckSettings = null;

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
        this.MaxSurge = 'MaxSurge' in params ? params.MaxSurge : null;
        this.MaxUnavailable = 'MaxUnavailable' in params ? params.MaxUnavailable : null;

        if (params.HealthCheckSettings) {
            let obj = new HealthCheckSettings();
            obj.deserialize(params.HealthCheckSettings)
            this.HealthCheckSettings = obj;
        }

    }
}

/**
 * BindApiGroup请求参数结构体
 * @class
 */
class BindApiGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组绑定网关列表
         * @type {Array.<GatewayGroupIds> || null}
         */
        this.GroupGatewayList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GroupGatewayList) {
            this.GroupGatewayList = new Array();
            for (let z in params.GroupGatewayList) {
                let obj = new GatewayGroupIds();
                obj.deserialize(params.GroupGatewayList[z]);
                this.GroupGatewayList.push(obj);
            }
        }

    }
}

/**
 * StopTaskBatch请求参数结构体
 * @class
 */
class StopTaskBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 参数ID
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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
 * API 明细
 * @class
 */
class ApiDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * API ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiId = null;

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
         * 服务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MicroserviceId = null;

        /**
         * 服务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MicroserviceName = null;

        /**
         * API 请求路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Api 映射路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PathMapping = null;

        /**
         * 请求方法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 所属分组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 是否禁用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsableStatus = null;

        /**
         * 发布状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleaseStatus = null;

        /**
         * 开启限流
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RateLimitStatus = null;

        /**
         * 是否开启mock
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MockStatus = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleasedTime = null;

        /**
         * 所属分组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * API 超时，单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * Api所在服务host
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * API类型。 ms ： 微服务API； external :外部服务Api
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * Api描述信息
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
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.MicroserviceId = 'MicroserviceId' in params ? params.MicroserviceId : null;
        this.MicroserviceName = 'MicroserviceName' in params ? params.MicroserviceName : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.PathMapping = 'PathMapping' in params ? params.PathMapping : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.UsableStatus = 'UsableStatus' in params ? params.UsableStatus : null;
        this.ReleaseStatus = 'ReleaseStatus' in params ? params.ReleaseStatus : null;
        this.RateLimitStatus = 'RateLimitStatus' in params ? params.RateLimitStatus : null;
        this.MockStatus = 'MockStatus' in params ? params.MockStatus : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.ReleasedTime = 'ReleasedTime' in params ? params.ReleasedTime : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeUnitApiUseDetail返回参数结构体
 * @class
 */
class DescribeUnitApiUseDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元化使用统计对象
         * @type {GroupUnitApiUseStatistics || null}
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
            let obj = new GroupUnitApiUseStatistics();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUsableUnitNamespaces请求参数结构体
 * @class
 */
class DescribeUsableUnitNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 根据命名空间名或ID模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 翻页查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 翻页查询每页记录数
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
 * DisableTaskFlow请求参数结构体
 * @class
 */
class DisableTaskFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

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

        /**
         * 过滤字段
         * @type {Array.<string> || null}
         */
        this.PodNameList = null;

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
        this.PodNameList = 'PodNameList' in params ? params.PodNameList : null;

    }
}

/**
 * RedoTask返回参数结构体
 * @class
 */
class RedoTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功or失败
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
 * EnableUnitRoute请求参数结构体
 * @class
 */
class EnableUnitRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关实体ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

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
 * ExecuteTask返回参数结构体
 * @class
 */
class ExecuteTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功/失败
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
 * CreateApiRateLimitRule返回参数结构体
 * @class
 */
class CreateApiRateLimitRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功
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
 * DescribeApiUseDetail请求参数结构体
 * @class
 */
class DescribeApiUseDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关部署组ID
         * @type {string || null}
         */
        this.GatewayDeployGroupId = null;

        /**
         * 网关分组Api ID
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * 查询的日期,格式：yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询的日期,格式：yyyy-MM-dd HH:mm:ss
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
        this.GatewayDeployGroupId = 'GatewayDeployGroupId' in params ? params.GatewayDeployGroupId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 容器 env 的 FieldRef
 * @class
 */
class FieldRef extends  AbstractModel {
    constructor(){
        super();

        /**
         * k8s 的 FieldPath
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FieldPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FieldPath = 'FieldPath' in params ? params.FieldPath : null;

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

        /**
         * 集群版本
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * 集群中每个Node上最大的Pod数量。取值范围4～256。不为2的幂值时会向上取最接近的2的幂值。
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * 集群最大的service数量。取值范围32～32768，不为2的幂值时会向上取最接近的2的幂值。
         * @type {number || null}
         */
        this.MaxClusterServiceNum = null;

        /**
         * 需要绑定的数据集ID
         * @type {string || null}
         */
        this.ProgramId = null;

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
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.MaxNodePodNum = 'MaxNodePodNum' in params ? params.MaxNodePodNum : null;
        this.MaxClusterServiceNum = 'MaxClusterServiceNum' in params ? params.MaxClusterServiceNum : null;
        this.ProgramId = 'ProgramId' in params ? params.ProgramId : null;

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

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

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
 * 高级选项设置
 * @class
 */
class AdvanceSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子任务单机并发数限制，默认值为2
         * @type {number || null}
         */
        this.SubTaskConcurrency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubTaskConcurrency = 'SubTaskConcurrency' in params ? params.SubTaskConcurrency : null;

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
 * UpdateHealthCheckSettings返回参数结构体
 * @class
 */
class UpdateHealthCheckSettingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新健康检查配置操作是否成功。
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
 * 微服务网关API限流规则
 * @class
 */
class ApiRateLimitRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * rule Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * API ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * 限流名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 最大限流qps
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxQps = null;

        /**
         * 生效/禁用, enabled/disabled
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsableStatus = null;

        /**
         * 规则内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleContent = null;

        /**
         * Tsf Rule ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TsfRuleId = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.MaxQps = 'MaxQps' in params ? params.MaxQps : null;
        this.UsableStatus = 'UsableStatus' in params ? params.UsableStatus : null;
        this.RuleContent = 'RuleContent' in params ? params.RuleContent : null;
        this.TsfRuleId = 'TsfRuleId' in params ? params.TsfRuleId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

    }
}

/**
 * API分组日使用统计对象数据点
 * @class
 */
class GroupUseStatisticsEntity extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiPath = null;

        /**
         * 服务名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 统计值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * API ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiPath = 'ApiPath' in params ? params.ApiPath : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;

    }
}

/**
 * DescribePathRewrites返回参数结构体
 * @class
 */
class DescribePathRewritesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路径重写翻页对象
         * @type {PathRewritePage || null}
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
            let obj = new PathRewritePage();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 失败的节点的失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailedReasons = null;

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
        this.FailedReasons = 'FailedReasons' in params ? params.FailedReasons : null;

    }
}

/**
 * DescribeFlowLastBatchState返回参数结构体
 * @class
 */
class DescribeFlowLastBatchStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流批次最新状态
         * @type {TaskFlowLastBatchState || null}
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
            let obj = new TaskFlowLastBatchState();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopTaskExecute返回参数结构体
 * @class
 */
class StopTaskExecuteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功 or 失败
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
         * 部署组类型，精确过滤字段，M：service mesh, P：原生应用， G：网关应用
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
 * API分组信息
 * @class
 */
class ApiGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Api Group Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Api Group 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 分组上下文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupContext = null;

        /**
         * 鉴权类型。 secret： 密钥鉴权； none:无鉴权
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * 发布状态, drafted: 未发布。 released: 发布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 分组创建时间 如:2019-06-20 15:51:28
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 分组更新时间 如:2019-06-20 15:51:28
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * api分组已绑定的网关部署组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GatewayDeployGroup> || null}
         */
        this.BindedGatewayDeployGroups = null;

        /**
         * api 个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ApiCount = null;

        /**
         * 访问group的ACL类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AclMode = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 分组类型。 ms： 微服务分组； external:外部Api分组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * 网关实例的类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayInstanceType = null;

        /**
         * 网关实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

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
        this.GroupContext = 'GroupContext' in params ? params.GroupContext : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

        if (params.BindedGatewayDeployGroups) {
            this.BindedGatewayDeployGroups = new Array();
            for (let z in params.BindedGatewayDeployGroups) {
                let obj = new GatewayDeployGroup();
                obj.deserialize(params.BindedGatewayDeployGroups[z]);
                this.BindedGatewayDeployGroups.push(obj);
            }
        }
        this.ApiCount = 'ApiCount' in params ? params.ApiCount : null;
        this.AclMode = 'AclMode' in params ? params.AclMode : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.GatewayInstanceType = 'GatewayInstanceType' in params ? params.GatewayInstanceType : null;
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;

    }
}

/**
 * 微服务网关单元化命名空间
 * @class
 */
class UnitNamespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间Name
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 单元化命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Id = 'Id' in params ? params.Id : null;

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
 * CreateApiGroup请求参数结构体
 * @class
 */
class CreateApiGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组名称, 不能包含中文
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 分组上下文
         * @type {string || null}
         */
        this.GroupContext = null;

        /**
         * 鉴权类型。secret： 密钥鉴权； none:无鉴权
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 分组类型,默认ms。 ms： 微服务分组； external:外部Api分组
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * 网关实体ID
         * @type {string || null}
         */
        this.GatewayInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupContext = 'GroupContext' in params ? params.GroupContext : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.GatewayInstanceId = 'GatewayInstanceId' in params ? params.GatewayInstanceId : null;

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
 * DescribeBasicResourceUsage请求参数结构体
 * @class
 */
class DescribeBasicResourceUsageRequest extends  AbstractModel {
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
 * 健康检查配置
 * @class
 */
class HealthCheckConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健康检查路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;

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

        /**
         * 部署组状态过滤字段
         * @type {string || null}
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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupResourceTypeList = 'GroupResourceTypeList' in params ? params.GroupResourceTypeList : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * CreatePathRewrites请求参数结构体
 * @class
 */
class CreatePathRewritesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路径重写列表
         * @type {PathRewriteCreateObject || null}
         */
        this.PathRewrites = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PathRewrites) {
            let obj = new PathRewriteCreateObject();
            obj.deserialize(params.PathRewrites)
            this.PathRewrites = obj;
        }

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
 * RedoTaskBatch返回参数结构体
 * @class
 */
class RedoTaskBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
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
 * DescribeImageRepository返回参数结构体
 * @class
 */
class DescribeImageRepositoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的权限数据对象
         * @type {ImageRepositoryResult || null}
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
            let obj = new ImageRepositoryResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreatePathRewrites返回参数结构体
 * @class
 */
class CreatePathRewritesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true/false
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
 * DeleteRepository请求参数结构体
 * @class
 */
class DeleteRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库ID
         * @type {string || null}
         */
        this.RepositoryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepositoryId = 'RepositoryId' in params ? params.RepositoryId : null;

    }
}

/**
 * DraftApiGroup返回参数结构体
 * @class
 */
class DraftApiGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true: 成功, false: 失败
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
 * ApiGroupInfo翻页结构体
 * @class
 */
class TsfPageApiGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * API分组信息
         * @type {Array.<ApiGroupInfo> || null}
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
                let obj = new ApiGroupInfo();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

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
 * 工作流图中的边
 * @class
 */
class TaskFlowEdge extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点 ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * 子节点 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChildNodeId = null;

        /**
         * 是否核心任务,Y/N
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CoreNode = null;

        /**
         * 边类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EdgeType = null;

        /**
         * 任务节点类型
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * X轴坐标位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PositionX = null;

        /**
         * Y轴坐标位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PositionY = null;

        /**
         * 图 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GraphId = null;

        /**
         * 工作流 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务历史ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskLogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.ChildNodeId = 'ChildNodeId' in params ? params.ChildNodeId : null;
        this.CoreNode = 'CoreNode' in params ? params.CoreNode : null;
        this.EdgeType = 'EdgeType' in params ? params.EdgeType : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.PositionX = 'PositionX' in params ? params.PositionX : null;
        this.PositionY = 'PositionY' in params ? params.PositionY : null;
        this.GraphId = 'GraphId' in params ? params.GraphId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskLogId = 'TaskLogId' in params ? params.TaskLogId : null;

    }
}

/**
 * RedoTaskFlowBatch返回参数结构体
 * @class
 */
class RedoTaskFlowBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流批次历史 ID
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
    DescribePublicConfigSummaryRequest: DescribePublicConfigSummaryRequest,
    ModifyPathRewriteRequest: ModifyPathRewriteRequest,
    TsfPageContainerEvent: TsfPageContainerEvent,
    ApiDetailResponse: ApiDetailResponse,
    CosCredentials: CosCredentials,
    DeletePathRewritesResponse: DeletePathRewritesResponse,
    PathRewritePage: PathRewritePage,
    DescribeUnitApiUseDetailRequest: DescribeUnitApiUseDetailRequest,
    DescribeApiVersionsResponse: DescribeApiVersionsResponse,
    StopContainerGroupResponse: StopContainerGroupResponse,
    DeletePathRewritesRequest: DeletePathRewritesRequest,
    DeleteLaneResponse: DeleteLaneResponse,
    SimpleApplication: SimpleApplication,
    ContinueRunFailedTaskBatchRequest: ContinueRunFailedTaskBatchRequest,
    DescribeSimpleClustersResponse: DescribeSimpleClustersResponse,
    DeleteRepositoryResponse: DeleteRepositoryResponse,
    DeleteApplicationResponse: DeleteApplicationResponse,
    QuantileEntity: QuantileEntity,
    UpdateRepositoryRequest: UpdateRepositoryRequest,
    DescribePathRewriteResponse: DescribePathRewriteResponse,
    DescribeConfigsResponse: DescribeConfigsResponse,
    ModifyContainerReplicasRequest: ModifyContainerReplicasRequest,
    CreateGatewayApiResponse: CreateGatewayApiResponse,
    DescribeApiVersionsRequest: DescribeApiVersionsRequest,
    TsfPageConfigReleaseLog: TsfPageConfigReleaseLog,
    DescribeGroupBindedGatewaysResponse: DescribeGroupBindedGatewaysResponse,
    UnbindApiGroupRequest: UnbindApiGroupRequest,
    TaskRecord: TaskRecord,
    CreateNamespaceResponse: CreateNamespaceResponse,
    RedoTaskBatchRequest: RedoTaskBatchRequest,
    DescribeTaskLastStatusRequest: DescribeTaskLastStatusRequest,
    ModifyUploadInfoResponse: ModifyUploadInfoResponse,
    TsfPageConfig: TsfPageConfig,
    CreateApiRateLimitRuleRequest: CreateApiRateLimitRuleRequest,
    TaskRecordPage: TaskRecordPage,
    DeleteServerlessGroupRequest: DeleteServerlessGroupRequest,
    ChangeApiUsableStatusRequest: ChangeApiUsableStatusRequest,
    DescribeApiRateLimitRulesRequest: DescribeApiRateLimitRulesRequest,
    DescribeApiGroupsResponse: DescribeApiGroupsResponse,
    DeletePublicConfigRequest: DeletePublicConfigRequest,
    DeleteNamespaceResponse: DeleteNamespaceResponse,
    CreateMicroserviceRequest: CreateMicroserviceRequest,
    ReleaseConfigResponse: ReleaseConfigResponse,
    DescribeUnitRuleResponse: DescribeUnitRuleResponse,
    DeleteImageTagsRequest: DeleteImageTagsRequest,
    DescribeRepositoriesRequest: DescribeRepositoriesRequest,
    RollbackConfigRequest: RollbackConfigRequest,
    CreateGatewayApiRequest: CreateGatewayApiRequest,
    DescribeCreateGatewayApiStatusResponse: DescribeCreateGatewayApiStatusResponse,
    DeleteConfigResponse: DeleteConfigResponse,
    DescribeGroupGatewaysRequest: DescribeGroupGatewaysRequest,
    UpdateApiRateLimitRuleResponse: UpdateApiRateLimitRuleResponse,
    DescribeGatewayAllGroupApisResponse: DescribeGatewayAllGroupApisResponse,
    LaneRule: LaneRule,
    MsInstance: MsInstance,
    GatewayPluginBoundParam: GatewayPluginBoundParam,
    DescribeServerlessGroupsResponse: DescribeServerlessGroupsResponse,
    ImageRepository: ImageRepository,
    AddInstancesResponse: AddInstancesResponse,
    StartContainerGroupRequest: StartContainerGroupRequest,
    DescribeRepositoryResponse: DescribeRepositoryResponse,
    Instance: Instance,
    UpdateHealthCheckSettingsRequest: UpdateHealthCheckSettingsRequest,
    EnableUnitRuleRequest: EnableUnitRuleRequest,
    CreateClusterResponse: CreateClusterResponse,
    CreateMicroserviceResponse: CreateMicroserviceResponse,
    StopGroupRequest: StopGroupRequest,
    ShrinkGroupResponse: ShrinkGroupResponse,
    CosUploadInfo: CosUploadInfo,
    DescribeLanesResponse: DescribeLanesResponse,
    CreateNamespaceRequest: CreateNamespaceRequest,
    DescribeClusterInstancesRequest: DescribeClusterInstancesRequest,
    DescribeGroupBindedGatewaysRequest: DescribeGroupBindedGatewaysRequest,
    DescribeRepositoryRequest: DescribeRepositoryRequest,
    RedoTaskRequest: RedoTaskRequest,
    DeleteApiGroupResponse: DeleteApiGroupResponse,
    ImageTagsResult: ImageTagsResult,
    RepositoryInfo: RepositoryInfo,
    DraftApiGroupRequest: DraftApiGroupRequest,
    CreateLaneResponse: CreateLaneResponse,
    UpdateApiTimeoutsResponse: UpdateApiTimeoutsResponse,
    UnitRule: UnitRule,
    DescribePkgsResponse: DescribePkgsResponse,
    DescribeSimpleNamespacesResponse: DescribeSimpleNamespacesResponse,
    DeleteImageTag: DeleteImageTag,
    DescribeMicroservicesResponse: DescribeMicroservicesResponse,
    TaskLastExecuteStatus: TaskLastExecuteStatus,
    DescribePublicConfigRequest: DescribePublicConfigRequest,
    OverviewBasicResourceUsage: OverviewBasicResourceUsage,
    CreatePublicConfigResponse: CreatePublicConfigResponse,
    LaneRules: LaneRules,
    TsfPageVmGroup: TsfPageVmGroup,
    CreateConfigResponse: CreateConfigResponse,
    DescribeCreateGatewayApiStatusRequest: DescribeCreateGatewayApiStatusRequest,
    DescribeConfigReleaseLogsRequest: DescribeConfigReleaseLogsRequest,
    ModifyContainerGroupRequest: ModifyContainerGroupRequest,
    UpdateRepositoryResponse: UpdateRepositoryResponse,
    RollbackConfigResponse: RollbackConfigResponse,
    RevocationConfigRequest: RevocationConfigRequest,
    StartContainerGroupResponse: StartContainerGroupResponse,
    ModifyTaskRequest: ModifyTaskRequest,
    DeleteUnitNamespacesResponse: DeleteUnitNamespacesResponse,
    DisableTaskRequest: DisableTaskRequest,
    DescribeBasicResourceUsageResponse: DescribeBasicResourceUsageResponse,
    PkgBind: PkgBind,
    RemoveInstancesRequest: RemoveInstancesRequest,
    TsfPageInstance: TsfPageInstance,
    DeleteGroupResponse: DeleteGroupResponse,
    DescribeSimpleApplicationsResponse: DescribeSimpleApplicationsResponse,
    DeployContainerGroupRequest: DeployContainerGroupRequest,
    DescribeSimpleApplicationsRequest: DescribeSimpleApplicationsRequest,
    ContainGroup: ContainGroup,
    ContainGroupResult: ContainGroupResult,
    UpdateUnitRuleRequest: UpdateUnitRuleRequest,
    ReleasePublicConfigResponse: ReleasePublicConfigResponse,
    ReleaseApiGroupResponse: ReleaseApiGroupResponse,
    UpdateApiRateLimitRulesRequest: UpdateApiRateLimitRulesRequest,
    DescribeGroupInstancesRequest: DescribeGroupInstancesRequest,
    DescribeMsApiListRequest: DescribeMsApiListRequest,
    DescribeUploadInfoResponse: DescribeUploadInfoResponse,
    DescribeMsApiListResponse: DescribeMsApiListResponse,
    EnableTaskRequest: EnableTaskRequest,
    RevocationPublicConfigResponse: RevocationPublicConfigResponse,
    DisableTaskResponse: DisableTaskResponse,
    DescribeMicroserviceRequest: DescribeMicroserviceRequest,
    DescribePodInstancesResponse: DescribePodInstancesResponse,
    DescribeRepositoriesResponse: DescribeRepositoriesResponse,
    MonitorOverview: MonitorOverview,
    CreateGroupRequest: CreateGroupRequest,
    StopTaskBatchResponse: StopTaskBatchResponse,
    CreateContainGroupResponse: CreateContainGroupResponse,
    DescribeContainerGroupDetailResponse: DescribeContainerGroupDetailResponse,
    Ports: Ports,
    DescribeGroupGatewaysResponse: DescribeGroupGatewaysResponse,
    RevocationConfigResponse: RevocationConfigResponse,
    DeployServerlessGroupResponse: DeployServerlessGroupResponse,
    CreateAllGatewayApiAsyncResponse: CreateAllGatewayApiAsyncResponse,
    DeleteTaskResponse: DeleteTaskResponse,
    TsfPageMsInstance: TsfPageMsInstance,
    DeleteMicroserviceRequest: DeleteMicroserviceRequest,
    RemoveInstancesResponse: RemoveInstancesResponse,
    DescribeContainerEventsRequest: DescribeContainerEventsRequest,
    DisableUnitRuleRequest: DisableUnitRuleRequest,
    Namespace: Namespace,
    DescribeGroupResponse: DescribeGroupResponse,
    Env: Env,
    ResourceFieldRef: ResourceFieldRef,
    DeleteContainerGroupResponse: DeleteContainerGroupResponse,
    DeleteServerlessGroupResponse: DeleteServerlessGroupResponse,
    DeleteImageTagsResponse: DeleteImageTagsResponse,
    CreateLaneRuleRequest: CreateLaneRuleRequest,
    DisableUnitRouteResponse: DisableUnitRouteResponse,
    ExecuteTaskRequest: ExecuteTaskRequest,
    DescribeApplicationResponse: DescribeApplicationResponse,
    LaneInfo: LaneInfo,
    DescribeConfigReleaseLogsResponse: DescribeConfigReleaseLogsResponse,
    DeletePublicConfigResponse: DeletePublicConfigResponse,
    DescribeSimpleGroupsResponse: DescribeSimpleGroupsResponse,
    DescribeFlowLastBatchStateRequest: DescribeFlowLastBatchStateRequest,
    TsfPageCluster: TsfPageCluster,
    TerminateTaskFlowBatchResponse: TerminateTaskFlowBatchResponse,
    ShrinkInstancesRequest: ShrinkInstancesRequest,
    ValueFrom: ValueFrom,
    ShrinkInstancesResponse: ShrinkInstancesResponse,
    DescribeApiRateLimitRulesResponse: DescribeApiRateLimitRulesResponse,
    AddClusterInstancesRequest: AddClusterInstancesRequest,
    DescribeGroupUseDetailResponse: DescribeGroupUseDetailResponse,
    TsfPageNamespace: TsfPageNamespace,
    UpdateApiTimeoutsRequest: UpdateApiTimeoutsRequest,
    DescribeSimpleNamespacesRequest: DescribeSimpleNamespacesRequest,
    ExecuteTaskFlowResponse: ExecuteTaskFlowResponse,
    ExpandGroupResponse: ExpandGroupResponse,
    DescribePublicConfigsResponse: DescribePublicConfigsResponse,
    DescribeUnitNamespacesResponse: DescribeUnitNamespacesResponse,
    ContinueRunFailedTaskBatchResponse: ContinueRunFailedTaskBatchResponse,
    DescribeSimpleClustersRequest: DescribeSimpleClustersRequest,
    DeployServerlessGroupRequest: DeployServerlessGroupRequest,
    ApiDefinitionDescr: ApiDefinitionDescr,
    DescribeLaneRulesResponse: DescribeLaneRulesResponse,
    DescribeImageRepositoryRequest: DescribeImageRepositoryRequest,
    TsfPageUnitRule: TsfPageUnitRule,
    DescribeApiGroupRequest: DescribeApiGroupRequest,
    RedoTaskExecuteResponse: RedoTaskExecuteResponse,
    DescribeContainerGroupDetailRequest: DescribeContainerGroupDetailRequest,
    DescribeGroupsWithPluginRequest: DescribeGroupsWithPluginRequest,
    ImageRepositoryResult: ImageRepositoryResult,
    ModifyTaskResponse: ModifyTaskResponse,
    DeleteUnitNamespacesRequest: DeleteUnitNamespacesRequest,
    DescribeGroupRequest: DescribeGroupRequest,
    UnitRuleItem: UnitRuleItem,
    BindPluginRequest: BindPluginRequest,
    HealthCheckSetting: HealthCheckSetting,
    GatewayDeployGroup: GatewayDeployGroup,
    PkgList: PkgList,
    Cluster: Cluster,
    DescribeGroupUseDetailRequest: DescribeGroupUseDetailRequest,
    Microservice: Microservice,
    UpdateUnitRuleResponse: UpdateUnitRuleResponse,
    HealthCheckSettings: HealthCheckSettings,
    StartGroupResponse: StartGroupResponse,
    DescribePathRewritesRequest: DescribePathRewritesRequest,
    ShrinkGroupRequest: ShrinkGroupRequest,
    RepositoryList: RepositoryList,
    CreateLaneRuleResponse: CreateLaneRuleResponse,
    CreateTaskResponse: CreateTaskResponse,
    DescribeContainerGroupsResponse: DescribeContainerGroupsResponse,
    UpdateApiGroupResponse: UpdateApiGroupResponse,
    DescribeGroupsWithPluginResponse: DescribeGroupsWithPluginResponse,
    AddInstancesRequest: AddInstancesRequest,
    GatewayPlugin: GatewayPlugin,
    GatewayApiGroupVo: GatewayApiGroupVo,
    CreateApplicationRequest: CreateApplicationRequest,
    DeployGroupRequest: DeployGroupRequest,
    LaneInfos: LaneInfos,
    CreateTaskFlowRequest: CreateTaskFlowRequest,
    ModifyContainerReplicasResponse: ModifyContainerReplicasResponse,
    TsfPageGatewayPlugin: TsfPageGatewayPlugin,
    ApiUseStatisticsEntity: ApiUseStatisticsEntity,
    UnbindApiGroupResponse: UnbindApiGroupResponse,
    DescribePathRewriteRequest: DescribePathRewriteRequest,
    CreateApplicationResponse: CreateApplicationResponse,
    GatewayGroupIds: GatewayGroupIds,
    DeployGroupResponse: DeployGroupResponse,
    DescribeServerlessGroupResponse: DescribeServerlessGroupResponse,
    BindApiGroupResponse: BindApiGroupResponse,
    MetricDataPointMap: MetricDataPointMap,
    ModifyPathRewriteResponse: ModifyPathRewriteResponse,
    EnableUnitRuleResponse: EnableUnitRuleResponse,
    DescribeEnabledUnitRuleResponse: DescribeEnabledUnitRuleResponse,
    UpdateApiGroupRequest: UpdateApiGroupRequest,
    TsfApiListResponse: TsfApiListResponse,
    EnableUnitRouteResponse: EnableUnitRouteResponse,
    DisableUnitRuleResponse: DisableUnitRuleResponse,
    TsfPageGatewayDeployGroup: TsfPageGatewayDeployGroup,
    ImageTag: ImageTag,
    ExecuteTaskFlowRequest: ExecuteTaskFlowRequest,
    TerminateTaskFlowBatchRequest: TerminateTaskFlowBatchRequest,
    CreateUnitRuleResponse: CreateUnitRuleResponse,
    DescribeTaskRecordsResponse: DescribeTaskRecordsResponse,
    VmGroup: VmGroup,
    DescribeApiUseDetailResponse: DescribeApiUseDetailResponse,
    ServiceSetting: ServiceSetting,
    ModifyUploadInfoRequest: ModifyUploadInfoRequest,
    ApplicationForPage: ApplicationForPage,
    DescribeUnitRuleRequest: DescribeUnitRuleRequest,
    UpdateGatewayApiResponse: UpdateGatewayApiResponse,
    ContainerEvent: ContainerEvent,
    ModifyLaneResponse: ModifyLaneResponse,
    DescribePublicConfigSummaryResponse: DescribePublicConfigSummaryResponse,
    DescribePublicConfigReleaseLogsRequest: DescribePublicConfigReleaseLogsRequest,
    CreateServerlessGroupResponse: CreateServerlessGroupResponse,
    ShardArgument: ShardArgument,
    MetricDataPoint: MetricDataPoint,
    DescribeApplicationAttributeResponse: DescribeApplicationAttributeResponse,
    ModifyLaneRequest: ModifyLaneRequest,
    DescribeLanesRequest: DescribeLanesRequest,
    DescribeGatewayMonitorOverviewResponse: DescribeGatewayMonitorOverviewResponse,
    CreatePublicConfigRequest: CreatePublicConfigRequest,
    CreateAllGatewayApiAsyncRequest: CreateAllGatewayApiAsyncRequest,
    PathRewrite: PathRewrite,
    EnableTaskFlowResponse: EnableTaskFlowResponse,
    DeleteUnitRuleResponse: DeleteUnitRuleResponse,
    TsfPageConfigRelease: TsfPageConfigRelease,
    DisableTaskFlowResponse: DisableTaskFlowResponse,
    DescribeGatewayMonitorOverviewRequest: DescribeGatewayMonitorOverviewRequest,
    DescribeImageTagsResponse: DescribeImageTagsResponse,
    BindPluginResponse: BindPluginResponse,
    RedoTaskFlowBatchRequest: RedoTaskFlowBatchRequest,
    TsfPageUnitNamespace: TsfPageUnitNamespace,
    StopTaskExecuteRequest: StopTaskExecuteRequest,
    DescribePkgsRequest: DescribePkgsRequest,
    SchedulingStrategy: SchedulingStrategy,
    GatewayVo: GatewayVo,
    DescribeApplicationAttributeRequest: DescribeApplicationAttributeRequest,
    CreateTaskRequest: CreateTaskRequest,
    OperationInfo: OperationInfo,
    DescribePublicConfigResponse: DescribePublicConfigResponse,
    DescribeUsableUnitNamespacesResponse: DescribeUsableUnitNamespacesResponse,
    DescribeConfigResponse: DescribeConfigResponse,
    SimpleGroup: SimpleGroup,
    DescribeContainerEventsResponse: DescribeContainerEventsResponse,
    DescribeTaskRecordsRequest: DescribeTaskRecordsRequest,
    ModifyContainerGroupResponse: ModifyContainerGroupResponse,
    DeleteApplicationRequest: DeleteApplicationRequest,
    DescribeUnitNamespacesRequest: DescribeUnitNamespacesRequest,
    DeleteTaskRequest: DeleteTaskRequest,
    CreateUnitRuleRequest: CreateUnitRuleRequest,
    VmGroupSimple: VmGroupSimple,
    ApiResponseDescr: ApiResponseDescr,
    DescribePluginInstancesRequest: DescribePluginInstancesRequest,
    ApiRequestDescr: ApiRequestDescr,
    ApiVersionArray: ApiVersionArray,
    ConfigReleaseLog: ConfigReleaseLog,
    CreateConfigRequest: CreateConfigRequest,
    DescribeUploadInfoRequest: DescribeUploadInfoRequest,
    TaskFlowLastBatchState: TaskFlowLastBatchState,
    DescribeUnitRulesResponse: DescribeUnitRulesResponse,
    UpdateGatewayApiRequest: UpdateGatewayApiRequest,
    PathRewriteCreateObject: PathRewriteCreateObject,
    DescribeApiGroupsRequest: DescribeApiGroupsRequest,
    DescribeServerlessGroupRequest: DescribeServerlessGroupRequest,
    DeleteUnitRuleRequest: DeleteUnitRuleRequest,
    ApplicationAttribute: ApplicationAttribute,
    DeletePkgsResponse: DeletePkgsResponse,
    DescribeGroupsResponse: DescribeGroupsResponse,
    ModifyLaneRuleRequest: ModifyLaneRuleRequest,
    CreateTaskFlowResponse: CreateTaskFlowResponse,
    DescribeMicroservicesRequest: DescribeMicroservicesRequest,
    AddClusterInstancesResponse: AddClusterInstancesResponse,
    DescribeTaskLastStatusResponse: DescribeTaskLastStatusResponse,
    DescribePublicConfigsRequest: DescribePublicConfigsRequest,
    GatewayGroupApiVo: GatewayGroupApiVo,
    DescribeApplicationsRequest: DescribeApplicationsRequest,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    DescribePublicConfigReleasesRequest: DescribePublicConfigReleasesRequest,
    DescribeLaneRulesRequest: DescribeLaneRulesRequest,
    CreateServerlessGroupRequest: CreateServerlessGroupRequest,
    UnitRuleTag: UnitRuleTag,
    DescribePluginInstancesResponse: DescribePluginInstancesResponse,
    CreateRepositoryResponse: CreateRepositoryResponse,
    GroupUnitApiDailyUseStatistics: GroupUnitApiDailyUseStatistics,
    DescribeServerlessGroupsRequest: DescribeServerlessGroupsRequest,
    CosDownloadInfo: CosDownloadInfo,
    DeletePkgsRequest: DeletePkgsRequest,
    ServerlessGroupPage: ServerlessGroupPage,
    InstanceAdvancedSettings: InstanceAdvancedSettings,
    GroupApiUseStatistics: GroupApiUseStatistics,
    ChangeApiUsableStatusResponse: ChangeApiUsableStatusResponse,
    EnableTaskResponse: EnableTaskResponse,
    UpdateApiRateLimitRulesResponse: UpdateApiRateLimitRulesResponse,
    GroupUnitApiUseStatistics: GroupUnitApiUseStatistics,
    DescribeGroupInstancesResponse: DescribeGroupInstancesResponse,
    DescribeDownloadInfoRequest: DescribeDownloadInfoRequest,
    DeleteApiGroupRequest: DeleteApiGroupRequest,
    ReleaseApiGroupRequest: ReleaseApiGroupRequest,
    StartGroupRequest: StartGroupRequest,
    DescribeClusterInstancesResponse: DescribeClusterInstancesResponse,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    ExpandGroupRequest: ExpandGroupRequest,
    RevocationPublicConfigRequest: RevocationPublicConfigRequest,
    ModifyLaneRuleResponse: ModifyLaneRuleResponse,
    TsfPageSimpleGroup: TsfPageSimpleGroup,
    TaskRule: TaskRule,
    PkgInfo: PkgInfo,
    GroupPod: GroupPod,
    EnableTaskFlowRequest: EnableTaskFlowRequest,
    DescribeReleasedConfigRequest: DescribeReleasedConfigRequest,
    ApiInfo: ApiInfo,
    StopGroupResponse: StopGroupResponse,
    CreateRepositoryRequest: CreateRepositoryRequest,
    ModifyMicroserviceRequest: ModifyMicroserviceRequest,
    DescribeConfigReleasesRequest: DescribeConfigReleasesRequest,
    GroupDailyUseStatistics: GroupDailyUseStatistics,
    DescribeEnabledUnitRuleRequest: DescribeEnabledUnitRuleRequest,
    DescribeApiGroupResponse: DescribeApiGroupResponse,
    UpdateApiRateLimitRuleRequest: UpdateApiRateLimitRuleRequest,
    CreateLaneRequest: CreateLaneRequest,
    CreateApiGroupResponse: CreateApiGroupResponse,
    ServiceConfig: ServiceConfig,
    RedoTaskExecuteRequest: RedoTaskExecuteRequest,
    DescribeApplicationsResponse: DescribeApplicationsResponse,
    DescribeConfigRequest: DescribeConfigRequest,
    DisableUnitRouteRequest: DisableUnitRouteRequest,
    DescribeUnitRulesRequest: DescribeUnitRulesRequest,
    DescribeGatewayAllGroupApisRequest: DescribeGatewayAllGroupApisRequest,
    DeleteGroupRequest: DeleteGroupRequest,
    ContainerGroupDetail: ContainerGroupDetail,
    BindApiGroupRequest: BindApiGroupRequest,
    StopTaskBatchRequest: StopTaskBatchRequest,
    ServerlessGroup: ServerlessGroup,
    ApiDetailInfo: ApiDetailInfo,
    DescribeUnitApiUseDetailResponse: DescribeUnitApiUseDetailResponse,
    DescribeUsableUnitNamespacesRequest: DescribeUsableUnitNamespacesRequest,
    DescribeContainerGroupsRequest: DescribeContainerGroupsRequest,
    DisableTaskFlowRequest: DisableTaskFlowRequest,
    DescribePodInstancesRequest: DescribePodInstancesRequest,
    RedoTaskResponse: RedoTaskResponse,
    DescribeConfigsRequest: DescribeConfigsRequest,
    EnableUnitRouteRequest: EnableUnitRouteRequest,
    TsfPageApplication: TsfPageApplication,
    DeleteConfigRequest: DeleteConfigRequest,
    DescribePublicConfigReleaseLogsResponse: DescribePublicConfigReleaseLogsResponse,
    ExecuteTaskResponse: ExecuteTaskResponse,
    CreateApiRateLimitRuleResponse: CreateApiRateLimitRuleResponse,
    Config: Config,
    ProtocolPort: ProtocolPort,
    DescribeApiUseDetailRequest: DescribeApiUseDetailRequest,
    FieldRef: FieldRef,
    CreateClusterRequest: CreateClusterRequest,
    TsfPageMicroservice: TsfPageMicroservice,
    ConfigRelease: ConfigRelease,
    DeleteContainerGroupRequest: DeleteContainerGroupRequest,
    AdvanceSettings: AdvanceSettings,
    ReleaseConfigRequest: ReleaseConfigRequest,
    MsApiArray: MsApiArray,
    DescribeApiDetailRequest: DescribeApiDetailRequest,
    StopContainerGroupRequest: StopContainerGroupRequest,
    UpdateHealthCheckSettingsResponse: UpdateHealthCheckSettingsResponse,
    ApiRateLimitRule: ApiRateLimitRule,
    GroupUseStatisticsEntity: GroupUseStatisticsEntity,
    DescribePathRewritesResponse: DescribePathRewritesResponse,
    AddInstanceResult: AddInstanceResult,
    DescribeFlowLastBatchStateResponse: DescribeFlowLastBatchStateResponse,
    StopTaskExecuteResponse: StopTaskExecuteResponse,
    DescribeSimpleGroupsRequest: DescribeSimpleGroupsRequest,
    DescribeConfigReleasesResponse: DescribeConfigReleasesResponse,
    ApiGroupInfo: ApiGroupInfo,
    UnitNamespace: UnitNamespace,
    ModifyMicroserviceResponse: ModifyMicroserviceResponse,
    CreateApiGroupRequest: CreateApiGroupRequest,
    DescribeDownloadInfoResponse: DescribeDownloadInfoResponse,
    GroupPodResult: GroupPodResult,
    DescribeApplicationRequest: DescribeApplicationRequest,
    DeployContainerGroupResponse: DeployContainerGroupResponse,
    DescribeBasicResourceUsageRequest: DescribeBasicResourceUsageRequest,
    DeleteMicroserviceResponse: DeleteMicroserviceResponse,
    DescribeReleasedConfigResponse: DescribeReleasedConfigResponse,
    HealthCheckConfig: HealthCheckConfig,
    TsfPageSimpleApplication: TsfPageSimpleApplication,
    PropertyField: PropertyField,
    DescribeApiDetailResponse: DescribeApiDetailResponse,
    DescribeGroupsRequest: DescribeGroupsRequest,
    LaneRuleTag: LaneRuleTag,
    OperationInfoDetail: OperationInfoDetail,
    CreatePathRewritesRequest: CreatePathRewritesRequest,
    DeleteNamespaceRequest: DeleteNamespaceRequest,
    RedoTaskBatchResponse: RedoTaskBatchResponse,
    DescribeMicroserviceResponse: DescribeMicroserviceResponse,
    DescribeImageRepositoryResponse: DescribeImageRepositoryResponse,
    TaskId: TaskId,
    DescribeImageTagsRequest: DescribeImageTagsRequest,
    DescribeConfigSummaryResponse: DescribeConfigSummaryResponse,
    CreateContainGroupRequest: CreateContainGroupRequest,
    DescribePublicConfigReleasesResponse: DescribePublicConfigReleasesResponse,
    CreatePathRewritesResponse: CreatePathRewritesResponse,
    DeleteRepositoryRequest: DeleteRepositoryRequest,
    DraftApiGroupResponse: DraftApiGroupResponse,
    DescribeConfigSummaryRequest: DescribeConfigSummaryRequest,
    DeleteLaneRequest: DeleteLaneRequest,
    TsfPageApiGroupInfo: TsfPageApiGroupInfo,
    ReleasePublicConfigRequest: ReleasePublicConfigRequest,
    TaskFlowEdge: TaskFlowEdge,
    RedoTaskFlowBatchResponse: RedoTaskFlowBatchResponse,
    LaneGroup: LaneGroup,
    CreateGroupResponse: CreateGroupResponse,

}
