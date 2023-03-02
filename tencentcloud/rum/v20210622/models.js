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
 * CreateTawInstance请求参数结构体
 * @class
 */
class CreateTawInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 片区Id，(至少大于0)
         * @type {number || null}
         */
        this.AreaId = null;

        /**
         * 计费类型, (1=后付费)
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * 数据保存时间，(至少大于0)
         * @type {number || null}
         */
        this.DataRetentionDays = null;

        /**
         * 实例名称，(最大长度不超过255字节)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 实例描述，(最大长度不超过1024字节)
         * @type {string || null}
         */
        this.InstanceDesc = null;

        /**
         * 每天数据上报量
         * @type {string || null}
         */
        this.CountNum = null;

        /**
         * 数据存储时长计费
         * @type {string || null}
         */
        this.PeriodRetain = null;

        /**
         * 实例购买渠道("cdn" 等)
         * @type {string || null}
         */
        this.BuyingChannel = null;

        /**
         * 预付费资源包类型(仅预付费需要)
         * @type {number || null}
         */
        this.ResourcePackageType = null;

        /**
         * 预付费资源包数量(仅预付费需要)
         * @type {number || null}
         */
        this.ResourcePackageNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AreaId = 'AreaId' in params ? params.AreaId : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.DataRetentionDays = 'DataRetentionDays' in params ? params.DataRetentionDays : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceDesc = 'InstanceDesc' in params ? params.InstanceDesc : null;
        this.CountNum = 'CountNum' in params ? params.CountNum : null;
        this.PeriodRetain = 'PeriodRetain' in params ? params.PeriodRetain : null;
        this.BuyingChannel = 'BuyingChannel' in params ? params.BuyingChannel : null;
        this.ResourcePackageType = 'ResourcePackageType' in params ? params.ResourcePackageType : null;
        this.ResourcePackageNum = 'ResourcePackageNum' in params ? params.ResourcePackageNum : null;

    }
}

/**
 * DescribeDataFetchProject请求参数结构体
 * @class
 */
class DescribeDataFetchProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount：性能视图，day：14天数据，condition：条件列表，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 耗时计算方式
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * 来源
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

        /**
         * httpcode响应码
         * @type {string || null}
         */
        this.Status = null;

        /**
         * retcode
         * @type {string || null}
         */
        this.Ret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Ret = 'Ret' in params ? params.Ret : null;

    }
}

/**
 * DescribeData返回参数结构体
 * @class
 */
class DescribeDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回字符串
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
 * CreateTawInstance返回参数结构体
 * @class
 */
class CreateTawInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 预付费订单 id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProject请求参数结构体
 * @class
 */
class DeleteProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的项目 ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeProjectLimits返回参数结构体
 * @class
 */
class DescribeProjectLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 上报率数组列表
         * @type {Array.<ProjectLimit> || null}
         */
        this.ProjectLimitSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProjectLimitSet) {
            this.ProjectLimitSet = new Array();
            for (let z in params.ProjectLimitSet) {
                let obj = new ProjectLimit();
                obj.deserialize(params.ProjectLimitSet[z]);
                this.ProjectLimitSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTawInstances请求参数结构体
 * @class
 */
class DescribeTawInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费状态
         * @type {Array.<number> || null}
         */
        this.ChargeStatuses = null;

        /**
         * 计费类型
         * @type {Array.<number> || null}
         */
        this.ChargeTypes = null;

        /**
         * 分页Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 片区Id
         * @type {Array.<number> || null}
         */
        this.AreaIds = null;

        /**
         * 实例状态(1=创建中，2=运行中，3=异常，4=重启中，5=停止中，6=已停止，7=销毁中，8=已销毁), 该参数已废弃，请在Filters内注明
         * @type {Array.<number> || null}
         */
        this.InstanceStatuses = null;

        /**
         * 实例Id, 该参数已废弃，请在Filters内注明
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 过滤参数；demo模式传{"Name": "IsDemo", "Values":["1"]}
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 该参数已废弃，demo模式请在Filters内注明
         * @type {number || null}
         */
        this.IsDemo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChargeStatuses = 'ChargeStatuses' in params ? params.ChargeStatuses : null;
        this.ChargeTypes = 'ChargeTypes' in params ? params.ChargeTypes : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.AreaIds = 'AreaIds' in params ? params.AreaIds : null;
        this.InstanceStatuses = 'InstanceStatuses' in params ? params.InstanceStatuses : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.IsDemo = 'IsDemo' in params ? params.IsDemo : null;

    }
}

/**
 * DeleteOfflineLogConfig返回参数结构体
 * @class
 */
class DeleteOfflineLogConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口调用信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeProject返回参数结构体
 * @class
 */
class ResumeProjectResponse extends  AbstractModel {
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
 * DescribeRumLogList返回参数结构体
 * @class
 */
class DescribeRumLogListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回字符串
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
 * DescribeDataPvUrlInfo返回参数结构体
 * @class
 */
class DescribeDataPvUrlInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * StopProject返回参数结构体
 * @class
 */
class StopProjectResponse extends  AbstractModel {
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
 * DescribeDataFetchUrl返回参数结构体
 * @class
 */
class DescribeDataFetchUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * DescribeError请求参数结构体
 * @class
 */
class DescribeErrorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日期
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * StopInstance请求参数结构体
 * @class
 */
class StopInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要停止的实例id
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
 * ModifyInstance请求参数结构体
 * @class
 */
class ModifyInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要修改的实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 新的实例名称(长度最大不超过255)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 新的实例描述(长度最大不超过1024)
         * @type {string || null}
         */
        this.InstanceDesc = null;

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
        this.InstanceDesc = 'InstanceDesc' in params ? params.InstanceDesc : null;

    }
}

/**
 * DescribeLogList请求参数结构体
 * @class
 */
class DescribeLogListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序方式  desc  asc（必填）
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * searchlog  histogram（必填）
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 项目ID（必填）
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 开始时间（必填）
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 单次查询返回的原始日志条数，最大值为100（必填）
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 上下文，加载更多日志时使用，透传上次返回的 Context 值，获取后续的日志内容，总计最多可获取1万条原始日志。过期时间1小时
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）例："id:120001 AND type:\"log\""
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 结束时间（必填）
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
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeError返回参数结构体
 * @class
 */
class DescribeErrorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteWhitelist返回参数结构体
 * @class
 */
class DeleteWhitelistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息success
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLogExport请求参数结构体
 * @class
 */
class CreateLogExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 日志导出起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 日志导出结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 日志导出检索语句
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 日志导出数量, 最大值1000万
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 日志导出时间排序。desc，asc，默认为desc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 日志导出数据格式。json，csv，默认为json
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * DescribePvList返回参数结构体
 * @class
 */
class DescribePvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * pv列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RumPvInfo> || null}
         */
        this.ProjectPvSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProjectPvSet) {
            this.ProjectPvSet = new Array();
            for (let z in params.ProjectPvSet) {
                let obj = new RumPvInfo();
                obj.deserialize(params.ProjectPvSet[z]);
                this.ProjectPvSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RumUv 访问量
 * @class
 */
class RumUvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * uv访问量
         * @type {string || null}
         */
        this.Uv = null;

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
        this.Uv = 'Uv' in params ? params.Uv : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeOfflineLogs请求参数结构体
 * @class
 */
class DescribeOfflineLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目唯一上报 key
         * @type {string || null}
         */
        this.ProjectKey = null;

        /**
         * 离线日志文件 id 列表
         * @type {Array.<string> || null}
         */
        this.FileIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;
        this.FileIDs = 'FileIDs' in params ? params.FileIDs : null;

    }
}

/**
 * DescribeScores请求参数结构体
 * @class
 */
class DescribeScoresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 该参数已废弃
         * @type {number || null}
         */
        this.IsDemo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.IsDemo = 'IsDemo' in params ? params.IsDemo : null;

    }
}

/**
 * DescribeDataReportCount请求参数结构体
 * @class
 */
class DescribeDataReportCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 上报类型
         * @type {string || null}
         */
        this.ReportType = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;

    }
}

/**
 * DeleteOfflineLogRecord请求参数结构体
 * @class
 */
class DeleteOfflineLogRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目唯一上报 key
         * @type {string || null}
         */
        this.ProjectKey = null;

        /**
         * 离线日志文件 id
         * @type {string || null}
         */
        this.FileID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;
        this.FileID = 'FileID' in params ? params.FileID : null;

    }
}

/**
 * DescribeReleaseFiles请求参数结构体
 * @class
 */
class DescribeReleaseFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 id
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * 文件版本
         * @type {string || null}
         */
        this.FileVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.FileVersion = 'FileVersion' in params ? params.FileVersion : null;

    }
}

/**
 * CreateReleaseFile请求参数结构体
 * @class
 */
class CreateReleaseFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 id
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * 文件信息列表
         * @type {Array.<ReleaseFile> || null}
         */
        this.Files = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;

        if (params.Files) {
            this.Files = new Array();
            for (let z in params.Files) {
                let obj = new ReleaseFile();
                obj.deserialize(params.Files[z]);
                this.Files.push(obj);
            }
        }

    }
}

/**
 * DeleteOfflineLogRecord返回参数结构体
 * @class
 */
class DeleteOfflineLogRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口调用信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataCustomUrl请求参数结构体
 * @class
 */
class DescribeDataCustomUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * top：资源top视图，allcount：性能视图，day：14天数据，condition：条件列表，pagepv：性能视图，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 耗时计算方式
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * 自定义测速的key的值
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeUvList返回参数结构体
 * @class
 */
class DescribeUvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * uv列表
         * @type {Array.<RumUvInfo> || null}
         */
        this.ProjectUvSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProjectUvSet) {
            this.ProjectUvSet = new Array();
            for (let z in params.ProjectUvSet) {
                let obj = new RumUvInfo();
                obj.deserialize(params.ProjectUvSet[z]);
                this.ProjectUvSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标签
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签value
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
 * CreateProject请求参数结构体
 * @class
 */
class CreateProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的项目名(不为空且最长为 200)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 业务系统 ID
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 项目抽样率(大于等于 0)
         * @type {string || null}
         */
        this.Rate = null;

        /**
         * 是否开启聚类
         * @type {number || null}
         */
        this.EnableURLGroup = null;

        /**
         * 项目类型("web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn")
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 项目对应仓库地址(可选，最长为 256)
         * @type {string || null}
         */
        this.Repo = null;

        /**
         * 项目对应网页地址(可选，最长为 256)
         * @type {string || null}
         */
        this.URL = null;

        /**
         * 创建的项目描述(可选，最长为 1000)
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.EnableURLGroup = 'EnableURLGroup' in params ? params.EnableURLGroup : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Repo = 'Repo' in params ? params.Repo : null;
        this.URL = 'URL' in params ? params.URL : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * DescribeDataStaticUrl请求参数结构体
 * @class
 */
class DescribeDataStaticUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * pagepv：性能视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 耗时计算方式
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * 来源
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * ModifyInstance返回参数结构体
 * @class
 */
class ModifyInstanceResponse extends  AbstractModel {
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
 * DescribeOfflineLogRecords返回参数结构体
 * @class
 */
class DescribeOfflineLogRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口调用信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 记录 ID 数组
         * @type {Array.<string> || null}
         */
        this.RecordSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RecordSet = 'RecordSet' in params ? params.RecordSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteStarProject请求参数结构体
 * @class
 */
class DeleteStarProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID：taw-123
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeWhitelists请求参数结构体
 * @class
 */
class DescribeWhitelistsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例instance-ID
         * @type {string || null}
         */
        this.InstanceID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;

    }
}

/**
 * DescribeLogExports返回参数结构体
 * @class
 */
class DescribeLogExportsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志导出记录列表
         * @type {Array.<LogExport> || null}
         */
        this.LogExportSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LogExportSet) {
            this.LogExportSet = new Array();
            for (let z in params.LogExportSet) {
                let obj = new LogExport();
                obj.deserialize(params.LogExportSet[z]);
                this.LogExportSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUvList请求参数结构体
 * @class
 */
class DescribeUvListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 获取day：d，   min:m
         * @type {string || null}
         */
        this.Dimension = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;

    }
}

/**
 * DescribeTawAreas返回参数结构体
 * @class
 */
class DescribeTawAreasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 片区总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 片区列表
         * @type {Array.<RumAreaInfo> || null}
         */
        this.AreaSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AreaSet) {
            this.AreaSet = new Array();
            for (let z in params.AreaSet) {
                let obj = new RumAreaInfo();
                obj.deserialize(params.AreaSet[z]);
                this.AreaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeData请求参数结构体
 * @class
 */
class DescribeDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询字符串
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Query = 'Query' in params ? params.Query : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * StopProject请求参数结构体
 * @class
 */
class StopProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 id
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * CreateOfflineLogConfig返回参数结构体
 * @class
 */
class CreateOfflineLogConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口返回信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProjectLimit请求参数结构体
 * @class
 */
class ModifyProjectLimitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * 项目接口
         * @type {string || null}
         */
        this.ProjectInterface = null;

        /**
         * 上报比例   10代表10%
         * @type {number || null}
         */
        this.ReportRate = null;

        /**
         * 上报类型 1：比例  2：上报量
         * @type {number || null}
         */
        this.ReportType = null;

        /**
         * 主键ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.ProjectInterface = 'ProjectInterface' in params ? params.ProjectInterface : null;
        this.ReportRate = 'ReportRate' in params ? params.ReportRate : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DeleteInstance返回参数结构体
 * @class
 */
class DeleteInstanceResponse extends  AbstractModel {
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
 * DescribeDataPerformancePage请求参数结构体
 * @class
 */
class DescribeDataPerformancePageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * pagepv：性能视图，allcount：性能视图，falls：页面加载瀑布图，samp：首屏时间，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 耗时计算方式
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * 环境变量
         * @type {string || null}
         */
        this.Env = null;

        /**
         * 网络状态
         * @type {string || null}
         */
        this.NetStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.From = 'From' in params ? params.From : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;

    }
}

/**
 * DeleteReleaseFile请求参数结构体
 * @class
 */
class DeleteReleaseFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件 id
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * ResumeInstance请求参数结构体
 * @class
 */
class ResumeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要恢复的实例id
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
 * DescribeDataFetchUrl请求参数结构体
 * @class
 */
class DescribeDataFetchUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount：性能视图，day：14天数据，count40x：40X视图，count50x：50X视图，count5xand4x：40∑50视图，top：资源top视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 耗时计算方式
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * 来源
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

        /**
         * httpcode响应码
         * @type {string || null}
         */
        this.Status = null;

        /**
         * retcode
         * @type {string || null}
         */
        this.Ret = null;

        /**
         * 网络状态
         * @type {string || null}
         */
        this.NetStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Ret = 'Ret' in params ? params.Ret : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;

    }
}

/**
 * DescribeRumLogExport请求参数结构体
 * @class
 */
class DescribeRumLogExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出标识name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 开始时间（必填）
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 结束时间（必填）
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 项目ID（必填）
         * @type {number || null}
         */
        this.ID = null;

        /**
         * field条件
         * @type {Array.<string> || null}
         */
        this.Fields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Fields = 'Fields' in params ? params.Fields : null;

    }
}

/**
 * DescribeDataLogUrlStatistics返回参数结构体
 * @class
 */
class DescribeDataLogUrlStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * CreateProject返回参数结构体
 * @class
 */
class CreateProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 id
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 项目唯一key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopInstance返回参数结构体
 * @class
 */
class StopInstanceResponse extends  AbstractModel {
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
 * DescribeProjectLimits请求参数结构体
 * @class
 */
class DescribeProjectLimitsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;

    }
}

/**
 * CreateStarProject返回参数结构体
 * @class
 */
class CreateStarProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口返回信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProject返回参数结构体
 * @class
 */
class DeleteProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOfflineLogRecords请求参数结构体
 * @class
 */
class DescribeOfflineLogRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目唯一上报 key
         * @type {string || null}
         */
        this.ProjectKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;

    }
}

/**
 * DescribeDataPvUrlStatistics请求参数结构体
 * @class
 */
class DescribeDataPvUrlStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount：性能视图，day：14天数据，vp：性能，ckuv：uv，ckpv：pv，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * 发布文件列表(SOURCEMAP)
 * @class
 */
class ReleaseFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 文件唯一 key
         * @type {string || null}
         */
        this.FileKey = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件哈希值
         * @type {string || null}
         */
        this.FileHash = null;

        /**
         * 文件 id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.FileKey = 'FileKey' in params ? params.FileKey : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileHash = 'FileHash' in params ? params.FileHash : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * ModifyProjectLimit返回参数结构体
 * @class
 */
class ModifyProjectLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRumLogExports返回参数结构体
 * @class
 */
class DescribeRumLogExportsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回字符串
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
 * DescribeDataStaticProject请求参数结构体
 * @class
 */
class DescribeDataStaticProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount：性能视图，day：14天数据，condition：条件列表，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 耗时计算
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * 来源
         * @type {Array.<string> || null}
         */
        this.Url = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeRumStatsLogList请求参数结构体
 * @class
 */
class DescribeRumStatsLogListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间（必填）
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 单次查询返回的原始日志条数，最大值为100（必填）
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 结束时间（必填）
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 项目ID（必填）
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * ResumeProject请求参数结构体
 * @class
 */
class ResumeProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 id
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 项目接口限制类型
 * @class
 */
class ProjectLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口
         * @type {string || null}
         */
        this.ProjectInterface = null;

        /**
         * 上报率
         * @type {number || null}
         */
        this.ReportRate = null;

        /**
         * 上报类型 1：上报率  2：上报量限制
         * @type {number || null}
         */
        this.ReportType = null;

        /**
         * 主键ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectInterface = 'ProjectInterface' in params ? params.ProjectInterface : null;
        this.ReportRate = 'ReportRate' in params ? params.ReportRate : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;

    }
}

/**
 * DeleteLogExport请求参数结构体
 * @class
 */
class DeleteLogExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 日志导出ID
         * @type {string || null}
         */
        this.ExportID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.ExportID = 'ExportID' in params ? params.ExportID : null;

    }
}

/**
 * DescribeRumGroupLog返回参数结构体
 * @class
 */
class DescribeRumGroupLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回字符串
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
 * DescribeRumStatsLogList返回参数结构体
 * @class
 */
class DescribeRumStatsLogListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回字符串
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
 * CreateWhitelist请求参数结构体
 * @class
 */
class CreateWhitelistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID：taw-123
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * uin：业务方标识
         * @type {string || null}
         */
        this.WhitelistUin = null;

        /**
         * 业务方标识
         * @type {string || null}
         */
        this.Aid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.WhitelistUin = 'WhitelistUin' in params ? params.WhitelistUin : null;
        this.Aid = 'Aid' in params ? params.Aid : null;

    }
}

/**
 * DescribeDataPvUrlStatistics返回参数结构体
 * @class
 */
class DescribeDataPvUrlStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * DescribeDataLogUrlInfo请求参数结构体
 * @class
 */
class DescribeDataLogUrlInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 时间戳
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 时间戳
         * @type {number || null}
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
        this.ID = 'ID' in params ? params.ID : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeDataCustomUrl返回参数结构体
 * @class
 */
class DescribeDataCustomUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * Rum片区信息
 * @class
 */
class RumAreaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 片区Id
         * @type {number || null}
         */
        this.AreaId = null;

        /**
         * 片区状态(1=有效，2=无效)
         * @type {number || null}
         */
        this.AreaStatus = null;

        /**
         * 片区名称
         * @type {string || null}
         */
        this.AreaName = null;

        /**
         * 片区Key
         * @type {string || null}
         */
        this.AreaKey = null;

        /**
         * 地域码表 id
         * @type {string || null}
         */
        this.AreaRegionID = null;

        /**
         * 地域码表 code 如 ap-xxx（xxx 为地域词）
         * @type {string || null}
         */
        this.AreaRegionCode = null;

        /**
         * 地域缩写
         * @type {string || null}
         */
        this.AreaAbbr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AreaId = 'AreaId' in params ? params.AreaId : null;
        this.AreaStatus = 'AreaStatus' in params ? params.AreaStatus : null;
        this.AreaName = 'AreaName' in params ? params.AreaName : null;
        this.AreaKey = 'AreaKey' in params ? params.AreaKey : null;
        this.AreaRegionID = 'AreaRegionID' in params ? params.AreaRegionID : null;
        this.AreaRegionCode = 'AreaRegionCode' in params ? params.AreaRegionCode : null;
        this.AreaAbbr = 'AreaAbbr' in params ? params.AreaAbbr : null;

    }
}

/**
 * DescribeDataSetUrlStatistics请求参数结构体
 * @class
 */
class DescribeDataSetUrlStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount：性能视图，data：小程序，component：小程序相关，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 耗时计算
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

        /**
         * 获取package
         * @type {string || null}
         */
        this.PackageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;

    }
}

/**
 * DescribeDataPerformanceProject返回参数结构体
 * @class
 */
class DescribeDataPerformanceProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * DescribeDataFetchUrlInfo返回参数结构体
 * @class
 */
class DescribeDataFetchUrlInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * ResumeInstance返回参数结构体
 * @class
 */
class ResumeInstanceResponse extends  AbstractModel {
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
 * DescribeDataStaticProject返回参数结构体
 * @class
 */
class DescribeDataStaticProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * CreateStarProject请求参数结构体
 * @class
 */
class CreateStarProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID：taw-123
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeReleaseFileSign请求参数结构体
 * @class
 */
class DescribeReleaseFileSignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 超时时间，不填默认是 5 分钟
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
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

    }
}

/**
 * DeleteWhitelist请求参数结构体
 * @class
 */
class DeleteWhitelistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 名单ID
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeDataLogUrlInfo返回参数结构体
 * @class
 */
class DescribeDataLogUrlInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回字符串
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
 * rum 日志对象
 * @class
 */
class RumPvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * pv访问量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Pv = null;

        /**
         * 时间
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
        this.Pv = 'Pv' in params ? params.Pv : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DeleteReleaseFile返回参数结构体
 * @class
 */
class DeleteReleaseFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口请求返回字符串
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScores返回参数结构体
 * @class
 */
class DescribeScoresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数组
         * @type {Array.<ScoreInfo> || null}
         */
        this.ScoreSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ScoreSet) {
            this.ScoreSet = new Array();
            for (let z in params.ScoreSet) {
                let obj = new ScoreInfo();
                obj.deserialize(params.ScoreSet[z]);
                this.ScoreSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOfflineLogConfigs返回参数结构体
 * @class
 */
class DescribeOfflineLogConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口调用信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 用户唯一标示数组
         * @type {Array.<string> || null}
         */
        this.UniqueIDSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.UniqueIDSet = 'UniqueIDSet' in params ? params.UniqueIDSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLogExport返回参数结构体
 * @class
 */
class DeleteLogExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否成功，成功则为success；失败则直接返回Error，不返回该参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReleaseFileSign返回参数结构体
 * @class
 */
class DescribeReleaseFileSignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时密钥key
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 临时密钥 id
         * @type {string || null}
         */
        this.SecretID = null;

        /**
         * 临时密钥临时 token
         * @type {string || null}
         */
        this.SessionToken = null;

        /**
         * 开始时间戳
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 过期时间戳
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.SecretID = 'SecretID' in params ? params.SecretID : null;
        this.SessionToken = 'SessionToken' in params ? params.SessionToken : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOfflineLogs返回参数结构体
 * @class
 */
class DescribeOfflineLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口调用返回信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 日志列表
         * @type {Array.<string> || null}
         */
        this.LogSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.LogSet = 'LogSet' in params ? params.LogSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTawAreas请求参数结构体
 * @class
 */
class DescribeTawAreasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 片区Id
         * @type {Array.<number> || null}
         */
        this.AreaIds = null;

        /**
         * 片区Key
         * @type {Array.<string> || null}
         */
        this.AreaKeys = null;

        /**
         * 分页Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 片区状态(1=有效，2=无效)
         * @type {Array.<number> || null}
         */
        this.AreaStatuses = null;

        /**
         * 分页Offset
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
        this.AreaIds = 'AreaIds' in params ? params.AreaIds : null;
        this.AreaKeys = 'AreaKeys' in params ? params.AreaKeys : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.AreaStatuses = 'AreaStatuses' in params ? params.AreaStatuses : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

· 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
· 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或者多个过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 过滤键的名称。
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
 * DescribeDataLogUrlStatistics请求参数结构体
 * @class
 */
class DescribeDataLogUrlStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * analysis：异常分析，compare：异常列表对比，allcount：性能视图，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 环境区分
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DeleteStarProject返回参数结构体
 * @class
 */
class DeleteStarProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataPerformancePage返回参数结构体
 * @class
 */
class DescribeDataPerformancePageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * DeleteInstance请求参数结构体
 * @class
 */
class DeleteInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的实例id
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
 * 日志导出记录
 * @class
 */
class LogExport extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志导出路径
         * @type {string || null}
         */
        this.CosPath = null;

        /**
         * 日志导出数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 日志导出任务创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 日志导出任务ID
         * @type {string || null}
         */
        this.ExportID = null;

        /**
         * 日志导出文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 日志文件大小
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 日志导出格式
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 日志导出时间排序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 日志导出查询语句
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 日志导出起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 日志导出结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 日志下载状态。Queuing:导出正在排队中，Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）。
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
        this.CosPath = 'CosPath' in params ? params.CosPath : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExportID = 'ExportID' in params ? params.ExportID : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeDataStaticResource返回参数结构体
 * @class
 */
class DescribeDataStaticResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * DescribeDataEventUrl返回参数结构体
 * @class
 */
class DescribeDataEventUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * DescribeDataWebVitalsPage请求参数结构体
 * @class
 */
class DescribeDataWebVitalsPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 类型暂无
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 耗时计算
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeDataFetchUrlInfo请求参数结构体
 * @class
 */
class DescribeDataFetchUrlInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 耗时计算方式
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * 来源
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeLogList返回参数结构体
 * @class
 */
class DescribeLogListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回字符串
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
 * DescribeReleaseFiles返回参数结构体
 * @class
 */
class DescribeReleaseFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件信息列表
         * @type {Array.<ReleaseFile> || null}
         */
        this.Files = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Files) {
            this.Files = new Array();
            for (let z in params.Files) {
                let obj = new ReleaseFile();
                obj.deserialize(params.Files[z]);
                this.Files.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOfflineLogConfig请求参数结构体
 * @class
 */
class CreateOfflineLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目唯一上报 key
         * @type {string || null}
         */
        this.ProjectKey = null;

        /**
         * 需要监听的用户唯一标示(aid 或 uin)
         * @type {string || null}
         */
        this.UniqueID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;
        this.UniqueID = 'UniqueID' in params ? params.UniqueID : null;

    }
}

/**
 * DescribeDataStaticUrl返回参数结构体
 * @class
 */
class DescribeDataStaticUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * CreateWhitelist返回参数结构体
 * @class
 */
class CreateWhitelistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 白名单ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * project Score分数实体
 * @class
 */
class ScoreInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * duration
         * @type {string || null}
         */
        this.StaticDuration = null;

        /**
         * pv
         * @type {string || null}
         */
        this.PagePv = null;

        /**
         * 失败
         * @type {string || null}
         */
        this.ApiFail = null;

        /**
         * 请求
         * @type {string || null}
         */
        this.ApiNum = null;

        /**
         * fail
         * @type {string || null}
         */
        this.StaticFail = null;

        /**
         * 项目id
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * uv
         * @type {string || null}
         */
        this.PageUv = null;

        /**
         * 请求次数
         * @type {string || null}
         */
        this.ApiDuration = null;

        /**
         * 分数
         * @type {string || null}
         */
        this.Score = null;

        /**
         * error
         * @type {string || null}
         */
        this.PageError = null;

        /**
         * num
         * @type {string || null}
         */
        this.StaticNum = null;

        /**
         * num
         * @type {number || null}
         */
        this.RecordNum = null;

        /**
         * Duration
         * @type {string || null}
         */
        this.PageDuration = null;

        /**
         * 时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.StaticDuration = 'StaticDuration' in params ? params.StaticDuration : null;
        this.PagePv = 'PagePv' in params ? params.PagePv : null;
        this.ApiFail = 'ApiFail' in params ? params.ApiFail : null;
        this.ApiNum = 'ApiNum' in params ? params.ApiNum : null;
        this.StaticFail = 'StaticFail' in params ? params.StaticFail : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;
        this.PageUv = 'PageUv' in params ? params.PageUv : null;
        this.ApiDuration = 'ApiDuration' in params ? params.ApiDuration : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.PageError = 'PageError' in params ? params.PageError : null;
        this.StaticNum = 'StaticNum' in params ? params.StaticNum : null;
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        this.PageDuration = 'PageDuration' in params ? params.PageDuration : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeDataWebVitalsPage返回参数结构体
 * @class
 */
class DescribeDataWebVitalsPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * DescribeProjects请求参数结构体
 * @class
 */
class DescribeProjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页每页数目，整型
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页页码，整型
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤参数；demo模式传{"Name": "IsDemo", "Values":["1"]}
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 该参数已废弃，demo模式请在Filters内注明
         * @type {number || null}
         */
        this.IsDemo = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.IsDemo = 'IsDemo' in params ? params.IsDemo : null;

    }
}

/**
 * DescribeDataEventUrl请求参数结构体
 * @class
 */
class DescribeDataEventUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount：性能视图，day：14天数据，condition：条件列表，ckuv：获取uv趋势，ckpv：获取pv趋势，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 筛选条件
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeOfflineLogConfigs请求参数结构体
 * @class
 */
class DescribeOfflineLogConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目唯一上报 key
         * @type {string || null}
         */
        this.ProjectKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;

    }
}

/**
 * DescribeRumGroupLog请求参数结构体
 * @class
 */
class DescribeRumGroupLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序方式  desc  asc（必填）
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 开始时间（必填）
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 单次查询返回的原始日志条数，最大值为100（必填）
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页数，第几页
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 结束时间（必填）
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 项目ID（必填）
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 聚合字段
         * @type {string || null}
         */
        this.GroupField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.GroupField = 'GroupField' in params ? params.GroupField : null;

    }
}

/**
 * DeleteOfflineLogConfig请求参数结构体
 * @class
 */
class DeleteOfflineLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目唯一上报 key
         * @type {string || null}
         */
        this.ProjectKey = null;

        /**
         * 用户唯一标示(uin or aid)
         * @type {string || null}
         */
        this.UniqueID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectKey = 'ProjectKey' in params ? params.ProjectKey : null;
        this.UniqueID = 'UniqueID' in params ? params.UniqueID : null;

    }
}

/**
 * DescribeWhitelists返回参数结构体
 * @class
 */
class DescribeWhitelistsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单列表
         * @type {Array.<Whitelist> || null}
         */
        this.WhitelistSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WhitelistSet) {
            this.WhitelistSet = new Array();
            for (let z in params.WhitelistSet) {
                let obj = new Whitelist();
                obj.deserialize(params.WhitelistSet[z]);
                this.WhitelistSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 列表总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 项目列表
         * @type {Array.<RumProject> || null}
         */
        this.ProjectSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ProjectSet) {
            this.ProjectSet = new Array();
            for (let z in params.ProjectSet) {
                let obj = new RumProject();
                obj.deserialize(params.ProjectSet[z]);
                this.ProjectSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProject返回参数结构体
 * @class
 */
class ModifyProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 项目id
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLogExports请求参数结构体
 * @class
 */
class DescribeLogExportsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeDataReportCount返回参数结构体
 * @class
 */
class DescribeDataReportCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * DescribeDataPerformanceProject请求参数结构体
 * @class
 */
class DescribeDataPerformanceProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * allcount：性能视图，falls：页面加载瀑布图，samp：首屏时间，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，condition：条件列表，area：请求速度分布，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 耗时计算
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeRumLogExport返回参数结构体
 * @class
 */
class DescribeRumLogExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回字符串
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
 * DescribeRumLogExports请求参数结构体
 * @class
 */
class DescribeRumLogExportsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页面大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页数，第几页
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 项目ID（必填）
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * ModifyProject请求参数结构体
 * @class
 */
class ModifyProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 id
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 项目名(可选，不为空且最长为 200)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项目网页地址(可选，最长为 256)
         * @type {string || null}
         */
        this.URL = null;

        /**
         * 项目仓库地址(可选，最长为 256)
         * @type {string || null}
         */
        this.Repo = null;

        /**
         * 项目需要转移到的实例 id(可选)
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 项目采样率(可选)
         * @type {string || null}
         */
        this.Rate = null;

        /**
         * 是否开启聚类(可选)
         * @type {number || null}
         */
        this.EnableURLGroup = null;

        /**
         * 项目类型(可接受值为 "web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn")
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 项目描述(可选，最长为 1000)
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.URL = 'URL' in params ? params.URL : null;
        this.Repo = 'Repo' in params ? params.Repo : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.EnableURLGroup = 'EnableURLGroup' in params ? params.EnableURLGroup : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * DescribeRumLogList请求参数结构体
 * @class
 */
class DescribeRumLogListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序方式  desc  asc（必填）
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 开始时间（必填）格式为时间戳 毫秒
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 单次查询返回的原始日志条数，最大值为100（必填）
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页数，第几页
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 查询语句，参考控制台请求参数，语句长度最大为4096（必填）
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 结束时间（必填）格式为时间戳 毫秒
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 项目ID（必填）
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DescribeDataStaticResource请求参数结构体
 * @class
 */
class DescribeDataStaticResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * top：资源top视图，count40x：40X视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 耗时计算方式
         * @type {string || null}
         */
        this.CostType = null;

        /**
         * 来源
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.CostType = 'CostType' in params ? params.CostType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * DescribeTawInstances返回参数结构体
 * @class
 */
class DescribeTawInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例列表
         * @type {Array.<RumInstanceInfo> || null}
         */
        this.InstanceSet = null;

        /**
         * 实例总数
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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new RumInstanceInfo();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePvList请求参数结构体
 * @class
 */
class DescribePvListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 获取day：d，   获取min则不填
         * @type {string || null}
         */
        this.Dimension = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;

    }
}

/**
 * DescribeDataPvUrlInfo请求参数结构体
 * @class
 */
class DescribeDataPvUrlInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义2
         * @type {string || null}
         */
        this.ExtSecond = null;

        /**
         * 浏览器引擎
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 来源页面
         * @type {string || null}
         */
        this.From = null;

        /**
         * 日志等级
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionNum = null;

        /**
         * 平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 自定义3
         * @type {string || null}
         */
        this.ExtThird = null;

        /**
         * 自定义1
         * @type {string || null}
         */
        this.ExtFirst = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.Device = null;

        /**
         * 是否海外
         * @type {string || null}
         */
        this.IsAbroad = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 浏览器
         * @type {string || null}
         */
        this.Browser = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.ExtSecond = 'ExtSecond' in params ? params.ExtSecond : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.From = 'From' in params ? params.From : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.VersionNum = 'VersionNum' in params ? params.VersionNum : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ExtThird = 'ExtThird' in params ? params.ExtThird : null;
        this.ExtFirst = 'ExtFirst' in params ? params.ExtFirst : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.IsAbroad = 'IsAbroad' in params ? params.IsAbroad : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Browser = 'Browser' in params ? params.Browser : null;
        this.Env = 'Env' in params ? params.Env : null;

    }
}

/**
 * CreateReleaseFile返回参数结构体
 * @class
 */
class CreateReleaseFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用结果
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLogExport返回参数结构体
 * @class
 */
class CreateLogExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志导出ID
         * @type {string || null}
         */
        this.ExportID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportID = 'ExportID' in params ? params.ExportID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDataFetchProject返回参数结构体
 * @class
 */
class DescribeDataFetchProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * 白名单
 * @class
 */
class Whitelist extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 截止时间
         * @type {string || null}
         */
        this.Ttl = null;

        /**
         * 白名单自增ID
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 业务唯一标识
         * @type {string || null}
         */
        this.WhitelistUin = null;

        /**
         * 创建者ID
         * @type {string || null}
         */
        this.CreateUser = null;

        /**
         * aid标识
         * @type {string || null}
         */
        this.Aid = null;

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
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.WhitelistUin = 'WhitelistUin' in params ? params.WhitelistUin : null;
        this.CreateUser = 'CreateUser' in params ? params.CreateUser : null;
        this.Aid = 'Aid' in params ? params.Aid : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * Rum 项目信息
 * @class
 */
class RumProject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 创建者 id
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * 实例 id
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 项目类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 项目仓库地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Repo = null;

        /**
         * 项目网址地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.URL = null;

        /**
         * 项目采样频率
         * @type {string || null}
         */
        this.Rate = null;

        /**
         * 项目唯一key（长度 12 位）
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 是否开启url聚类
         * @type {number || null}
         */
        this.EnableURLGroup = null;

        /**
         * 实例名
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 项目 ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 实例 key
         * @type {string || null}
         */
        this.InstanceKey = null;

        /**
         * 项目描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 是否星标  1:是 0:否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsStar = null;

        /**
         * 项目状态(1 创建中，2 运行中，3 异常，4 重启中，5 停止中，6 已停止， 7 销毁中，8 已销毁)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Repo = 'Repo' in params ? params.Repo : null;
        this.URL = 'URL' in params ? params.URL : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.EnableURLGroup = 'EnableURLGroup' in params ? params.EnableURLGroup : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.InstanceKey = 'InstanceKey' in params ? params.InstanceKey : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.IsStar = 'IsStar' in params ? params.IsStar : null;
        this.ProjectStatus = 'ProjectStatus' in params ? params.ProjectStatus : null;

    }
}

/**
 * DescribeDataSetUrlStatistics返回参数结构体
 * @class
 */
class DescribeDataSetUrlStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回值
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
 * Rum实例信息
 * @class
 */
class RumInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例状态(1=创建中，2=运行中，3=异常，4=重启中，5=停止中，6=已停止，7=已删除)
         * @type {number || null}
         */
        this.InstanceStatus = null;

        /**
         * 片区Id
         * @type {number || null}
         */
        this.AreaId = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群Id
         * @type {number || null}
         */
        this.ClusterId = null;

        /**
         * 实例描述
         * @type {string || null}
         */
        this.InstanceDesc = null;

        /**
         * 计费状态(1=使用中，2=已过期，3=已销毁，4=分配中，5=分配失败)
         * @type {number || null}
         */
        this.ChargeStatus = null;

        /**
         * 计费类型(1=免费版，2=预付费，3=后付费)
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 数据保留时间(天)
         * @type {number || null}
         */
        this.DataRetentionDays = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.AreaId = 'AreaId' in params ? params.AreaId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceDesc = 'InstanceDesc' in params ? params.InstanceDesc : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.DataRetentionDays = 'DataRetentionDays' in params ? params.DataRetentionDays : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;

    }
}

module.exports = {
    CreateTawInstanceRequest: CreateTawInstanceRequest,
    DescribeDataFetchProjectRequest: DescribeDataFetchProjectRequest,
    DescribeDataResponse: DescribeDataResponse,
    CreateTawInstanceResponse: CreateTawInstanceResponse,
    DeleteProjectRequest: DeleteProjectRequest,
    DescribeProjectLimitsResponse: DescribeProjectLimitsResponse,
    DescribeTawInstancesRequest: DescribeTawInstancesRequest,
    DeleteOfflineLogConfigResponse: DeleteOfflineLogConfigResponse,
    ResumeProjectResponse: ResumeProjectResponse,
    DescribeRumLogListResponse: DescribeRumLogListResponse,
    DescribeDataPvUrlInfoResponse: DescribeDataPvUrlInfoResponse,
    StopProjectResponse: StopProjectResponse,
    DescribeDataFetchUrlResponse: DescribeDataFetchUrlResponse,
    DescribeErrorRequest: DescribeErrorRequest,
    StopInstanceRequest: StopInstanceRequest,
    ModifyInstanceRequest: ModifyInstanceRequest,
    DescribeLogListRequest: DescribeLogListRequest,
    DescribeErrorResponse: DescribeErrorResponse,
    DeleteWhitelistResponse: DeleteWhitelistResponse,
    CreateLogExportRequest: CreateLogExportRequest,
    DescribePvListResponse: DescribePvListResponse,
    RumUvInfo: RumUvInfo,
    DescribeOfflineLogsRequest: DescribeOfflineLogsRequest,
    DescribeScoresRequest: DescribeScoresRequest,
    DescribeDataReportCountRequest: DescribeDataReportCountRequest,
    DeleteOfflineLogRecordRequest: DeleteOfflineLogRecordRequest,
    DescribeReleaseFilesRequest: DescribeReleaseFilesRequest,
    CreateReleaseFileRequest: CreateReleaseFileRequest,
    DeleteOfflineLogRecordResponse: DeleteOfflineLogRecordResponse,
    DescribeDataCustomUrlRequest: DescribeDataCustomUrlRequest,
    DescribeUvListResponse: DescribeUvListResponse,
    Tag: Tag,
    CreateProjectRequest: CreateProjectRequest,
    DescribeDataStaticUrlRequest: DescribeDataStaticUrlRequest,
    ModifyInstanceResponse: ModifyInstanceResponse,
    DescribeOfflineLogRecordsResponse: DescribeOfflineLogRecordsResponse,
    DeleteStarProjectRequest: DeleteStarProjectRequest,
    DescribeWhitelistsRequest: DescribeWhitelistsRequest,
    DescribeLogExportsResponse: DescribeLogExportsResponse,
    DescribeUvListRequest: DescribeUvListRequest,
    DescribeTawAreasResponse: DescribeTawAreasResponse,
    DescribeDataRequest: DescribeDataRequest,
    StopProjectRequest: StopProjectRequest,
    CreateOfflineLogConfigResponse: CreateOfflineLogConfigResponse,
    ModifyProjectLimitRequest: ModifyProjectLimitRequest,
    DeleteInstanceResponse: DeleteInstanceResponse,
    DescribeDataPerformancePageRequest: DescribeDataPerformancePageRequest,
    DeleteReleaseFileRequest: DeleteReleaseFileRequest,
    ResumeInstanceRequest: ResumeInstanceRequest,
    DescribeDataFetchUrlRequest: DescribeDataFetchUrlRequest,
    DescribeRumLogExportRequest: DescribeRumLogExportRequest,
    DescribeDataLogUrlStatisticsResponse: DescribeDataLogUrlStatisticsResponse,
    CreateProjectResponse: CreateProjectResponse,
    StopInstanceResponse: StopInstanceResponse,
    DescribeProjectLimitsRequest: DescribeProjectLimitsRequest,
    CreateStarProjectResponse: CreateStarProjectResponse,
    DeleteProjectResponse: DeleteProjectResponse,
    DescribeOfflineLogRecordsRequest: DescribeOfflineLogRecordsRequest,
    DescribeDataPvUrlStatisticsRequest: DescribeDataPvUrlStatisticsRequest,
    ReleaseFile: ReleaseFile,
    ModifyProjectLimitResponse: ModifyProjectLimitResponse,
    DescribeRumLogExportsResponse: DescribeRumLogExportsResponse,
    DescribeDataStaticProjectRequest: DescribeDataStaticProjectRequest,
    DescribeRumStatsLogListRequest: DescribeRumStatsLogListRequest,
    ResumeProjectRequest: ResumeProjectRequest,
    ProjectLimit: ProjectLimit,
    DeleteLogExportRequest: DeleteLogExportRequest,
    DescribeRumGroupLogResponse: DescribeRumGroupLogResponse,
    DescribeRumStatsLogListResponse: DescribeRumStatsLogListResponse,
    CreateWhitelistRequest: CreateWhitelistRequest,
    DescribeDataPvUrlStatisticsResponse: DescribeDataPvUrlStatisticsResponse,
    DescribeDataLogUrlInfoRequest: DescribeDataLogUrlInfoRequest,
    DescribeDataCustomUrlResponse: DescribeDataCustomUrlResponse,
    RumAreaInfo: RumAreaInfo,
    DescribeDataSetUrlStatisticsRequest: DescribeDataSetUrlStatisticsRequest,
    DescribeDataPerformanceProjectResponse: DescribeDataPerformanceProjectResponse,
    DescribeDataFetchUrlInfoResponse: DescribeDataFetchUrlInfoResponse,
    ResumeInstanceResponse: ResumeInstanceResponse,
    DescribeDataStaticProjectResponse: DescribeDataStaticProjectResponse,
    CreateStarProjectRequest: CreateStarProjectRequest,
    DescribeReleaseFileSignRequest: DescribeReleaseFileSignRequest,
    DeleteWhitelistRequest: DeleteWhitelistRequest,
    DescribeDataLogUrlInfoResponse: DescribeDataLogUrlInfoResponse,
    RumPvInfo: RumPvInfo,
    DeleteReleaseFileResponse: DeleteReleaseFileResponse,
    DescribeScoresResponse: DescribeScoresResponse,
    DescribeOfflineLogConfigsResponse: DescribeOfflineLogConfigsResponse,
    DeleteLogExportResponse: DeleteLogExportResponse,
    DescribeReleaseFileSignResponse: DescribeReleaseFileSignResponse,
    DescribeOfflineLogsResponse: DescribeOfflineLogsResponse,
    DescribeTawAreasRequest: DescribeTawAreasRequest,
    Filter: Filter,
    DescribeDataLogUrlStatisticsRequest: DescribeDataLogUrlStatisticsRequest,
    DeleteStarProjectResponse: DeleteStarProjectResponse,
    DescribeDataPerformancePageResponse: DescribeDataPerformancePageResponse,
    DeleteInstanceRequest: DeleteInstanceRequest,
    LogExport: LogExport,
    DescribeDataStaticResourceResponse: DescribeDataStaticResourceResponse,
    DescribeDataEventUrlResponse: DescribeDataEventUrlResponse,
    DescribeDataWebVitalsPageRequest: DescribeDataWebVitalsPageRequest,
    DescribeDataFetchUrlInfoRequest: DescribeDataFetchUrlInfoRequest,
    DescribeLogListResponse: DescribeLogListResponse,
    DescribeReleaseFilesResponse: DescribeReleaseFilesResponse,
    CreateOfflineLogConfigRequest: CreateOfflineLogConfigRequest,
    DescribeDataStaticUrlResponse: DescribeDataStaticUrlResponse,
    CreateWhitelistResponse: CreateWhitelistResponse,
    ScoreInfo: ScoreInfo,
    DescribeDataWebVitalsPageResponse: DescribeDataWebVitalsPageResponse,
    DescribeProjectsRequest: DescribeProjectsRequest,
    DescribeDataEventUrlRequest: DescribeDataEventUrlRequest,
    DescribeOfflineLogConfigsRequest: DescribeOfflineLogConfigsRequest,
    DescribeRumGroupLogRequest: DescribeRumGroupLogRequest,
    DeleteOfflineLogConfigRequest: DeleteOfflineLogConfigRequest,
    DescribeWhitelistsResponse: DescribeWhitelistsResponse,
    DescribeProjectsResponse: DescribeProjectsResponse,
    ModifyProjectResponse: ModifyProjectResponse,
    DescribeLogExportsRequest: DescribeLogExportsRequest,
    DescribeDataReportCountResponse: DescribeDataReportCountResponse,
    DescribeDataPerformanceProjectRequest: DescribeDataPerformanceProjectRequest,
    DescribeRumLogExportResponse: DescribeRumLogExportResponse,
    DescribeRumLogExportsRequest: DescribeRumLogExportsRequest,
    ModifyProjectRequest: ModifyProjectRequest,
    DescribeRumLogListRequest: DescribeRumLogListRequest,
    DescribeDataStaticResourceRequest: DescribeDataStaticResourceRequest,
    DescribeTawInstancesResponse: DescribeTawInstancesResponse,
    DescribePvListRequest: DescribePvListRequest,
    DescribeDataPvUrlInfoRequest: DescribeDataPvUrlInfoRequest,
    CreateReleaseFileResponse: CreateReleaseFileResponse,
    CreateLogExportResponse: CreateLogExportResponse,
    DescribeDataFetchProjectResponse: DescribeDataFetchProjectResponse,
    Whitelist: Whitelist,
    RumProject: RumProject,
    DescribeDataSetUrlStatisticsResponse: DescribeDataSetUrlStatisticsResponse,
    RumInstanceInfo: RumInstanceInfo,

}
