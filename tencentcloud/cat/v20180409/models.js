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
 * GetReturnCodeInfo返回参数结构体
 * @class
 */
class GetReturnCodeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测失败详情列表
         * @type {Array.<CatReturnDetail> || null}
         */
        this.Details = null;

        /**
         * 拨测失败汇总列表
         * @type {Array.<CatReturnSummary> || null}
         */
        this.Summary = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 截至时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new CatReturnDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

        if (params.Summary) {
            this.Summary = new Array();
            for (let z in params.Summary) {
                let obj = new CatReturnSummary();
                obj.deserialize(params.Summary[z]);
                this.Summary.push(obj);
            }
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAgentGroup请求参数结构体
 * @class
 */
class ModifyAgentGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测分组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 拨测分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 是否为默认分组。取值可为0，1。取 1 时表示设置为默认分组
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * Province, Isp 需要成对地进行选择。参数对的取值范围。参见：DescribeAgents 的返回结果。
         * @type {Array.<CatAgent> || null}
         */
        this.Agents = null;

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
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new CatAgent();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }

    }
}

/**
 * BindAlarmPolicy返回参数结构体
 * @class
 */
class BindAlarmPolicyResponse extends  AbstractModel {
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
 * 拨测告警信息
 * @class
 */
class AlarmInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警对象的名称
         * @type {string || null}
         */
        this.ObjName = null;

        /**
         * 告警发生的时间
         * @type {string || null}
         */
        this.FirstOccurTime = null;

        /**
         * 告警结束的时间
         * @type {string || null}
         */
        this.LastOccurTime = null;

        /**
         * 告警状态。1 表示已恢复，0 表示未恢复，2表示数据不足
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 告警的内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 拨测任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 特征项名字
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 特征项数值
         * @type {string || null}
         */
        this.MetricValue = null;

        /**
         * 告警对象的ID
         * @type {string || null}
         */
        this.ObjId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ObjName = 'ObjName' in params ? params.ObjName : null;
        this.FirstOccurTime = 'FirstOccurTime' in params ? params.FirstOccurTime : null;
        this.LastOccurTime = 'LastOccurTime' in params ? params.LastOccurTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.MetricValue = 'MetricValue' in params ? params.MetricValue : null;
        this.ObjId = 'ObjId' in params ? params.ObjId : null;

    }
}

/**
 * GetDailyAvailRatio请求参数结构体
 * @class
 */
class GetDailyAvailRatioRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务Id
         * @type {number || null}
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
 * ModifyTaskEx返回参数结构体
 * @class
 */
class ModifyTaskExResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务ID。验证通过后，创建任务时使用，传递给CreateTask 接口。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgents请求参数结构体
 * @class
 */
class DescribeAgentsRequest extends  AbstractModel {
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
 * 拨测失败返回情况汇总
 * @class
 */
class CatReturnSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测失败个数
         * @type {number || null}
         */
        this.ResultCount = null;

        /**
         * 拨测失败返回码
         * @type {number || null}
         */
        this.ResultCode = null;

        /**
         * 拨测失败原因描述
         * @type {string || null}
         */
        this.ErrorReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultCount = 'ResultCount' in params ? params.ResultCount : null;
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;
        this.ErrorReason = 'ErrorReason' in params ? params.ErrorReason : null;

    }
}

/**
 * 拨测失败详情
 * @class
 */
class CatReturnDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商名称
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * 省份全拼
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 省份中文名称
         * @type {string || null}
         */
        this.ProvinceName = null;

        /**
         * Map键值
         * @type {string || null}
         */
        this.MapKey = null;

        /**
         * 拨测目标的IP
         * @type {string || null}
         */
        this.ServerIp = null;

        /**
         * 拨测失败个数
         * @type {number || null}
         */
        this.ResultCount = null;

        /**
         * 拨测失败返回码
         * @type {number || null}
         */
        this.ResultCode = null;

        /**
         * 拨测失败原因描述
         * @type {string || null}
         */
        this.ErrorReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IspName = 'IspName' in params ? params.IspName : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;
        this.MapKey = 'MapKey' in params ? params.MapKey : null;
        this.ServerIp = 'ServerIp' in params ? params.ServerIp : null;
        this.ResultCount = 'ResultCount' in params ? params.ResultCount : null;
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;
        this.ErrorReason = 'ErrorReason' in params ? params.ErrorReason : null;

    }
}

/**
 * RunTask请求参数结构体
 * @class
 */
class RunTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {number || null}
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
 * 拨测点维度信息
 * @class
 */
class DimensionsDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商列表
         * @type {Array.<string> || null}
         */
        this.Isp = null;

        /**
         * 省份列表
         * @type {Array.<string> || null}
         */
        this.Province = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Province = 'Province' in params ? params.Province : null;

    }
}

/**
 * GetRespTimeTrendEx返回参数结构体
 * @class
 */
class GetRespTimeTrendExResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据点集合，时延等走势数据
         * @type {Array.<DataPointMetric> || null}
         */
        this.DataPoints = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DataPoints) {
            this.DataPoints = new Array();
            for (let z in params.DataPoints) {
                let obj = new DataPointMetric();
                obj.deserialize(params.DataPoints[z]);
                this.DataPoints.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAgentGroup返回参数结构体
 * @class
 */
class ModifyAgentGroupResponse extends  AbstractModel {
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
 * DescribeTaskDetail返回参数结构体
 * @class
 */
class DescribeTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务列表
         * @type {Array.<CatTaskDetail> || null}
         */
        this.Tasks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new CatTaskDetail();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运营商可用率
 * @class
 */
class IspDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商名称
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * 可用率
         * @type {number || null}
         */
        this.AvailRatio = null;

        /**
         * 平均耗时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AvgTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IspName = 'IspName' in params ? params.IspName : null;
        this.AvailRatio = 'AvailRatio' in params ? params.AvailRatio : null;
        this.AvgTime = 'AvgTime' in params ? params.AvgTime : null;

    }
}

/**
 * 包含MetricName的DataPoint数据
 * @class
 */
class DataPointMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据项
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 数据点的时间和值
         * @type {Array.<DataPoint> || null}
         */
        this.Points = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Points) {
            this.Points = new Array();
            for (let z in params.Points) {
                let obj = new DataPoint();
                obj.deserialize(params.Points[z]);
                this.Points.push(obj);
            }
        }

    }
}

/**
 * GetReturnCodeInfo请求参数结构体
 * @class
 */
class GetReturnCodeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 正整数。验证成功的拨测任务id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 开始时间点。格式如：2017-05-09 10:20:00，最多拉群两天的数据
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间点。格式如：2017-05-09 10:25:00，最多拉群两天的数据
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 省份名称的全拼
         * @type {string || null}
         */
        this.Province = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Province = 'Province' in params ? params.Province : null;

    }
}

/**
 * DescribeCatLogs请求参数结构体
 * @class
 */
class DescribeCatLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务Id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 从第Offset 条开始查询。缺省值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 本批次查询Limit 条记录。缺省值为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 格式如：2017-05-09 00:00:00  缺省为当天0点，最多拉取1天的数据
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 格式如：2017-05-10 00:00:00  缺省为当前时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 按时间升序或降序。默认降序。可选值： Desc, Asc
         * @type {string || null}
         */
        this.SortType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SortType = 'SortType' in params ? params.SortType : null;

    }
}

/**
 * DescribeAgents返回参数结构体
 * @class
 */
class DescribeAgentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本用户可选的拨测点列表
         * @type {Array.<CatAgent> || null}
         */
        this.Agents = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new CatAgent();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetAvailRatioHistory返回参数结构体
 * @class
 */
class GetAvailRatioHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 整体平均可用率
         * @type {number || null}
         */
        this.AvgAvailRatio = null;

        /**
         * 各省份最低可用率
         * @type {number || null}
         */
        this.LowestAvailRatio = null;

        /**
         * 可用率最低的省份
         * @type {string || null}
         */
        this.LowestProvince = null;

        /**
         * 可用率最低的运营商
         * @type {string || null}
         */
        this.LowestIsp = null;

        /**
         * 分省份的可用率数据
         * @type {Array.<ProvinceDetail> || null}
         */
        this.ProvinceData = null;

        /**
         * 国内平均耗时，单位毫秒
         * @type {number || null}
         */
        this.AvgTime = null;

        /**
         * 国外平均可用率
         * @type {number || null}
         */
        this.AvgAvailRatio2 = null;

        /**
         * 国外平均耗时，单位毫秒
         * @type {number || null}
         */
        this.AvgTime2 = null;

        /**
         * 国外最低可用率
         * @type {number || null}
         */
        this.LowestAvailRatio2 = null;

        /**
         * 国外可用率最低的区域
         * @type {string || null}
         */
        this.LowestProvince2 = null;

        /**
         * 国外可用率最低的运营商
         * @type {string || null}
         */
        this.LowestIsp2 = null;

        /**
         * 国外分区域的可用率数据
         * @type {Array.<ProvinceDetail> || null}
         */
        this.ProvinceData2 = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AvgAvailRatio = 'AvgAvailRatio' in params ? params.AvgAvailRatio : null;
        this.LowestAvailRatio = 'LowestAvailRatio' in params ? params.LowestAvailRatio : null;
        this.LowestProvince = 'LowestProvince' in params ? params.LowestProvince : null;
        this.LowestIsp = 'LowestIsp' in params ? params.LowestIsp : null;

        if (params.ProvinceData) {
            this.ProvinceData = new Array();
            for (let z in params.ProvinceData) {
                let obj = new ProvinceDetail();
                obj.deserialize(params.ProvinceData[z]);
                this.ProvinceData.push(obj);
            }
        }
        this.AvgTime = 'AvgTime' in params ? params.AvgTime : null;
        this.AvgAvailRatio2 = 'AvgAvailRatio2' in params ? params.AvgAvailRatio2 : null;
        this.AvgTime2 = 'AvgTime2' in params ? params.AvgTime2 : null;
        this.LowestAvailRatio2 = 'LowestAvailRatio2' in params ? params.LowestAvailRatio2 : null;
        this.LowestProvince2 = 'LowestProvince2' in params ? params.LowestProvince2 : null;
        this.LowestIsp2 = 'LowestIsp2' in params ? params.LowestIsp2 : null;

        if (params.ProvinceData2) {
            this.ProvinceData2 = new Array();
            for (let z in params.ProvinceData2) {
                let obj = new ProvinceDetail();
                obj.deserialize(params.ProvinceData2[z]);
                this.ProvinceData2.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAgentGroup返回参数结构体
 * @class
 */
class CreateAgentGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测分组Id
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTasks返回参数结构体
 * @class
 */
class DeleteTasksResponse extends  AbstractModel {
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
 * DescribeAlarms返回参数结构体
 * @class
 */
class DescribeAlarmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 本批告警信息列表
         * @type {Array.<AlarmInfo> || null}
         */
        this.AlarmInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AlarmInfos) {
            this.AlarmInfos = new Array();
            for (let z in params.AlarmInfos) {
                let obj = new AlarmInfo();
                obj.deserialize(params.AlarmInfos[z]);
                this.AlarmInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRealAvailRatio请求参数结构体
 * @class
 */
class GetRealAvailRatioRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务Id
         * @type {number || null}
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
 * DeleteAgentGroup返回参数结构体
 * @class
 */
class DeleteAgentGroupResponse extends  AbstractModel {
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
 * 拨测分组
 * @class
 */
class AgentGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测分组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 拨测分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 是否默认拨测分组。1表示是，0表示否
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * 使用本拨测分组的任务数
         * @type {number || null}
         */
        this.TaskNum = null;

        /**
         * 拨测结点列表
         * @type {Array.<CatAgent> || null}
         */
        this.GroupDetail = null;

        /**
         * 最大拨测分组数
         * @type {number || null}
         */
        this.MaxGroupNum = null;

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
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.TaskNum = 'TaskNum' in params ? params.TaskNum : null;

        if (params.GroupDetail) {
            this.GroupDetail = new Array();
            for (let z in params.GroupDetail) {
                let obj = new CatAgent();
                obj.deserialize(params.GroupDetail[z]);
                this.GroupDetail.push(obj);
            }
        }
        this.MaxGroupNum = 'MaxGroupNum' in params ? params.MaxGroupNum : null;

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
         * 拨测任务id 数组
         * @type {Array.<number> || null}
         */
        this.TaskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

    }
}

/**
 * DescribeTasksByType返回参数结构体
 * @class
 */
class DescribeTasksByTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的总任务数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务列表
         * @type {Array.<TaskAlarm> || null}
         */
        this.Tasks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskAlarm();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetResultSummary返回参数结构体
 * @class
 */
class GetResultSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实时统计数据
         * @type {Array.<ResultSummary> || null}
         */
        this.RealData = null;

        /**
         * 按天的统计数据
         * @type {Array.<ResultSummary> || null}
         */
        this.DayData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RealData) {
            this.RealData = new Array();
            for (let z in params.RealData) {
                let obj = new ResultSummary();
                obj.deserialize(params.RealData[z]);
                this.RealData.push(obj);
            }
        }

        if (params.DayData) {
            this.DayData = new Array();
            for (let z in params.DayData) {
                let obj = new ResultSummary();
                obj.deserialize(params.DayData[z]);
                this.DayData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetReturnCodeHistory请求参数结构体
 * @class
 */
class GetReturnCodeHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 正整数。验证成功的拨测任务id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 开始时间点。格式如：2017-05-09 10:20:00。注意，BeginTime 和 EndTime 需要在同一天
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间点。格式如：2017-05-09 10:25:00。注意，BeginTime 和 EndTime 需要在同一天
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 省份名称的全拼
         * @type {string || null}
         */
        this.Province = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Province = 'Province' in params ? params.Province : null;

    }
}

/**
 * BindAlarmPolicy请求参数结构体
 * @class
 */
class BindAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务Id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 告警策略组Id
         * @type {number || null}
         */
        this.PolicyGroupId = null;

        /**
         * 是否绑定操作。非0 为绑定， 0 为 解绑。缺省表示 绑定。
         * @type {number || null}
         */
        this.IfBind = null;

        /**
         * 告警主题Id
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.PolicyGroupId = 'PolicyGroupId' in params ? params.PolicyGroupId : null;
        this.IfBind = 'IfBind' in params ? params.IfBind : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribeAgentGroups返回参数结构体
 * @class
 */
class DescribeAgentGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户所属的系统默认拨测分组
         * @type {AgentGroup || null}
         */
        this.SysDefaultGroup = null;

        /**
         * 用户创建的拨测分组列表
         * @type {Array.<AgentGroup> || null}
         */
        this.CustomGroups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SysDefaultGroup) {
            let obj = new AgentGroup();
            obj.deserialize(params.SysDefaultGroup)
            this.SysDefaultGroup = obj;
        }

        if (params.CustomGroups) {
            this.CustomGroups = new Array();
            for (let z in params.CustomGroups) {
                let obj = new AgentGroup();
                obj.deserialize(params.CustomGroups[z]);
                this.CustomGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 省份可用率
 * @class
 */
class ProvinceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用率
         * @type {number || null}
         */
        this.AvgAvailRatio = null;

        /**
         * 省份名称
         * @type {string || null}
         */
        this.ProvinceName = null;

        /**
         * 省份英文名称
         * @type {string || null}
         */
        this.Mapkey = null;

        /**
         * 统计时间点
         * @type {string || null}
         */
        this.TimeStamp = null;

        /**
         * 分运营商可用率
         * @type {Array.<IspDetail> || null}
         */
        this.IspDetail = null;

        /**
         * 平均耗时，单位毫秒
         * @type {number || null}
         */
        this.AvgTime = null;

        /**
         * 省份
         * @type {string || null}
         */
        this.Province = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AvgAvailRatio = 'AvgAvailRatio' in params ? params.AvgAvailRatio : null;
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;
        this.Mapkey = 'Mapkey' in params ? params.Mapkey : null;
        this.TimeStamp = 'TimeStamp' in params ? params.TimeStamp : null;

        if (params.IspDetail) {
            this.IspDetail = new Array();
            for (let z in params.IspDetail) {
                let obj = new IspDetail();
                obj.deserialize(params.IspDetail[z]);
                this.IspDetail.push(obj);
            }
        }
        this.AvgTime = 'AvgTime' in params ? params.AvgTime : null;
        this.Province = 'Province' in params ? params.Province : null;

    }
}

/**
 * 告警主题
 * @class
 */
class AlarmTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题的ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 主题的名称
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * 实时统计数据
 * @class
 */
class ResultSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计时间
         * @type {string || null}
         */
        this.LogTime = null;

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 实时可用率
         * @type {number || null}
         */
        this.AvailRatio = null;

        /**
         * 实时响应时间
         * @type {number || null}
         */
        this.ReponseTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.AvailRatio = 'AvailRatio' in params ? params.AvailRatio : null;
        this.ReponseTime = 'ReponseTime' in params ? params.ReponseTime : null;

    }
}

/**
 * PauseTask请求参数结构体
 * @class
 */
class PauseTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务id
         * @type {number || null}
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
 * GetResultSummary请求参数结构体
 * @class
 */
class GetResultSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id列表
         * @type {Array.<number> || null}
         */
        this.TaskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

    }
}

/**
 * DescribeAlarms请求参数结构体
 * @class
 */
class DescribeAlarmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 从第Offset 条开始查询。缺省值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 本批次查询Limit 条记录。缺省值为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 0 全部, 1 已恢复, 2 未恢复  默认为0。其他值，视为0 查全部状态。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 格式如：2017-05-09 00:00:00  缺省为7天前0点
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 格式如：2017-05-10 00:00:00  缺省为明天0点
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 告警任务名
         * @type {string || null}
         */
        this.ObjName = null;

        /**
         * 排序字段，可为Time, ObjName, Duration, Status, Content 之一。缺省为Time。
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 升序或降序。可为Desc, Asc之一。缺省为Desc。
         * @type {string || null}
         */
        this.SortType = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ObjName = 'ObjName' in params ? params.ObjName : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.SortType = 'SortType' in params ? params.SortType : null;

    }
}

/**
 * DescribeUserLimit返回参数结构体
 * @class
 */
class DescribeUserLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户可建立的最大任务数
         * @type {number || null}
         */
        this.MaxTaskNum = null;

        /**
         * 用户可用的最大拨测结点数
         * @type {number || null}
         */
        this.MaxAgentNum = null;

        /**
         * 用户可建立的最大拨测分组数
         * @type {number || null}
         */
        this.MaxGroupNum = null;

        /**
         * 用户可用的最小拨测间隔
         * @type {number || null}
         */
        this.MinPeriod = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxTaskNum = 'MaxTaskNum' in params ? params.MaxTaskNum : null;
        this.MaxAgentNum = 'MaxAgentNum' in params ? params.MaxAgentNum : null;
        this.MaxGroupNum = 'MaxGroupNum' in params ? params.MaxGroupNum : null;
        this.MinPeriod = 'MinPeriod' in params ? params.MinPeriod : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRespTimeTrendEx请求参数结构体
 * @class
 */
class GetRespTimeTrendExRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证成功的拨测任务id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 统计数据的发生日期。格式如：2017-05-09
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 数据的采集周期，单位分钟。取值可为 1, 5, 15, 30
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 可为 Isp, Province
         * @type {DimensionsDetail || null}
         */
        this.Dimensions = null;

        /**
         * 可为  totalTime, parseTime, connectTime, sendTime, waitTime, receiveTime, availRatio。缺省值为 totalTime
         * @type {string || null}
         */
        this.MetricName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Period = 'Period' in params ? params.Period : null;

        if (params.Dimensions) {
            let obj = new DimensionsDetail();
            obj.deserialize(params.Dimensions)
            this.Dimensions = obj;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * DeleteTasks请求参数结构体
 * @class
 */
class DeleteTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务id
         * @type {Array.<number> || null}
         */
        this.TaskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

    }
}

/**
 * DescribeAlarmsByTask请求参数结构体
 * @class
 */
class DescribeAlarmsByTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务Id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 从第Offset 条开始查询。缺省值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 本批次查询Limit 条记录。缺省值为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 0 全部, 1 已恢复, 2 未恢复  默认为0。其他值，视为0 查全部状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 格式如：2017-05-09 00:00:00  缺省为7天前0点
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 格式如：2017-05-10 00:00:00  缺省为明天0点
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 排序字段，可为Time, ObjName, Duration, Status, Content 之一。缺省为Time
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 升序或降序。可为Desc, Asc之一。缺省为Desc
         * @type {string || null}
         */
        this.SortType = null;

        /**
         * 告警对象的名称
         * @type {string || null}
         */
        this.ObjName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.SortType = 'SortType' in params ? params.SortType : null;
        this.ObjName = 'ObjName' in params ? params.ObjName : null;

    }
}

/**
 * PauseTask返回参数结构体
 * @class
 */
class PauseTaskResponse extends  AbstractModel {
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
 * CreateAgentGroup请求参数结构体
 * @class
 */
class CreateAgentGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测分组名称，不超过32个字符
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 是否为默认分组，取值可为 0 或 1。取 1 时表示设置为默认分组
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * Province, Isp 需要成对地进行选择。参数对的取值范围。参见：DescribeAgents 的返回结果。
         * @type {Array.<CatAgent> || null}
         */
        this.Agents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new CatAgent();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }

    }
}

/**
 * 拨测记录
 * @class
 */
class CatLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测时间点
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 拨测类型
         * @type {string || null}
         */
        this.CatTypeName = null;

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 拨测点所在城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 拨测点所在运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 被拨测Server的IP
         * @type {string || null}
         */
        this.ServerIp = null;

        /**
         * 被拨测Server的域名
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 执行耗时，单位毫秒
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * 成功失败(1 失败，0 成功）
         * @type {number || null}
         */
        this.ResultType = null;

        /**
         * 失败错误码
         * @type {number || null}
         */
        this.ResultCode = null;

        /**
         * 请求包大小
         * @type {number || null}
         */
        this.ReqPkgSize = null;

        /**
         * 回应包大小
         * @type {number || null}
         */
        this.RspPkgSize = null;

        /**
         * 拨测请求
         * @type {string || null}
         */
        this.ReqMsg = null;

        /**
         * 拨测回应
         * @type {string || null}
         */
        this.RespMsg = null;

        /**
         * 客户端IP
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 拨测点所在城市名称
         * @type {string || null}
         */
        this.CityName = null;

        /**
         * 拨测点所在运营商名称
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * 解析耗时，单位毫秒
         * @type {number || null}
         */
        this.ParseTime = null;

        /**
         * 连接耗时，单位毫秒
         * @type {number || null}
         */
        this.ConnectTime = null;

        /**
         * 数据发送耗时，单位毫秒
         * @type {number || null}
         */
        this.SendTime = null;

        /**
         * 等待耗时，单位毫秒
         * @type {number || null}
         */
        this.WaitTime = null;

        /**
         * 接收耗时，单位毫秒
         * @type {number || null}
         */
        this.ReceiveTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.CatTypeName = 'CatTypeName' in params ? params.CatTypeName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.City = 'City' in params ? params.City : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.ServerIp = 'ServerIp' in params ? params.ServerIp : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.ResultType = 'ResultType' in params ? params.ResultType : null;
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;
        this.ReqPkgSize = 'ReqPkgSize' in params ? params.ReqPkgSize : null;
        this.RspPkgSize = 'RspPkgSize' in params ? params.RspPkgSize : null;
        this.ReqMsg = 'ReqMsg' in params ? params.ReqMsg : null;
        this.RespMsg = 'RespMsg' in params ? params.RespMsg : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.CityName = 'CityName' in params ? params.CityName : null;
        this.IspName = 'IspName' in params ? params.IspName : null;
        this.ParseTime = 'ParseTime' in params ? params.ParseTime : null;
        this.ConnectTime = 'ConnectTime' in params ? params.ConnectTime : null;
        this.SendTime = 'SendTime' in params ? params.SendTime : null;
        this.WaitTime = 'WaitTime' in params ? params.WaitTime : null;
        this.ReceiveTime = 'ReceiveTime' in params ? params.ReceiveTime : null;

    }
}

/**
 * GetDailyAvailRatio返回参数结构体
 * @class
 */
class GetDailyAvailRatioResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 整体平均可用率
         * @type {number || null}
         */
        this.AvgAvailRatio = null;

        /**
         * 各省份最低可用率
         * @type {number || null}
         */
        this.LowestAvailRatio = null;

        /**
         * 可用率最低的省份
         * @type {string || null}
         */
        this.LowestProvince = null;

        /**
         * 分省份的可用率数据
         * @type {Array.<ProvinceDetail> || null}
         */
        this.ProvinceData = null;

        /**
         * 国内平均耗时，单位毫秒
         * @type {number || null}
         */
        this.AvgTime = null;

        /**
         * 国外平均可用率
         * @type {number || null}
         */
        this.AvgAvailRatio2 = null;

        /**
         * 国外平均耗时，单位毫秒
         * @type {number || null}
         */
        this.AvgTime2 = null;

        /**
         * 国外最低可用率
         * @type {number || null}
         */
        this.LowestAvailRatio2 = null;

        /**
         * 国外可用率最低的区域
         * @type {string || null}
         */
        this.LowestProvince2 = null;

        /**
         * 国外分区域的可用率数据
         * @type {Array.<ProvinceDetail> || null}
         */
        this.ProvinceData2 = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AvgAvailRatio = 'AvgAvailRatio' in params ? params.AvgAvailRatio : null;
        this.LowestAvailRatio = 'LowestAvailRatio' in params ? params.LowestAvailRatio : null;
        this.LowestProvince = 'LowestProvince' in params ? params.LowestProvince : null;

        if (params.ProvinceData) {
            this.ProvinceData = new Array();
            for (let z in params.ProvinceData) {
                let obj = new ProvinceDetail();
                obj.deserialize(params.ProvinceData[z]);
                this.ProvinceData.push(obj);
            }
        }
        this.AvgTime = 'AvgTime' in params ? params.AvgTime : null;
        this.AvgAvailRatio2 = 'AvgAvailRatio2' in params ? params.AvgAvailRatio2 : null;
        this.AvgTime2 = 'AvgTime2' in params ? params.AvgTime2 : null;
        this.LowestAvailRatio2 = 'LowestAvailRatio2' in params ? params.LowestAvailRatio2 : null;
        this.LowestProvince2 = 'LowestProvince2' in params ? params.LowestProvince2 : null;

        if (params.ProvinceData2) {
            this.ProvinceData2 = new Array();
            for (let z in params.ProvinceData2) {
                let obj = new ProvinceDetail();
                obj.deserialize(params.ProvinceData2[z]);
                this.ProvinceData2.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAgentGroup请求参数结构体
 * @class
 */
class DeleteAgentGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测分组id
         * @type {number || null}
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
 * GetAvailRatioHistory请求参数结构体
 * @class
 */
class GetAvailRatioHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务Id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 具体时间点
         * @type {string || null}
         */
        this.TimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TimeStamp = 'TimeStamp' in params ? params.TimeStamp : null;

    }
}

/**
 * DescribeAgentGroups请求参数结构体
 * @class
 */
class DescribeAgentGroupsRequest extends  AbstractModel {
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
 * DescribeAlarmsByTask返回参数结构体
 * @class
 */
class DescribeAlarmsByTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警信息列表
         * @type {Array.<AlarmInfo> || null}
         */
        this.AlarmInfos = null;

        /**
         * 故障率
         * @type {number || null}
         */
        this.FaultRatio = null;

        /**
         * 故障总时长
         * @type {string || null}
         */
        this.FaultTimeSpec = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AlarmInfos) {
            this.AlarmInfos = new Array();
            for (let z in params.AlarmInfos) {
                let obj = new AlarmInfo();
                obj.deserialize(params.AlarmInfos[z]);
                this.AlarmInfos.push(obj);
            }
        }
        this.FaultRatio = 'FaultRatio' in params ? params.FaultRatio : null;
        this.FaultTimeSpec = 'FaultTimeSpec' in params ? params.FaultTimeSpec : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskEx请求参数结构体
 * @class
 */
class ModifyTaskExRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * http, https, ping, tcp, ftp, smtp, udp, dns 之一
         * @type {string || null}
         */
        this.CatTypeName = null;

        /**
         * 拨测的URL，例如：www.qq.com (URL域名解析需要能解析出具体的IP)
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 拨测周期。取值可为1,5,15,30之一, 单位：分钟。精度不能低于用户等级规定的最小精度
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 拨测任务名称不能超过32个字符。同一个用户创建的任务名不可重复
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 验证成功的拨测任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 拨测分组ID，体现本拨测任务要采用哪些运营商作为拨测源。一般可直接填写本用户的默认拨测分组。参见：DescribeAgentGroupList 接口，本参数使用返回结果里的GroupId的值。注意，Type为0时，AgentGroupId为必填
         * @type {number || null}
         */
        this.AgentGroupId = null;

        /**
         * 指定域名(如需要)
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 拨测目标的端口号
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 是否为Header请求（非0 发起Header 请求。为0，且PostData非空，发起POST请求。为0，PostData为空，发起GET请求）
         * @type {number || null}
         */
        this.IsHeader = null;

        /**
         * URL中含有"https"时有用。缺省为SSLv23。需要为 TLSv1_2, TLSv1_1, TLSv1, SSLv2, SSLv23, SSLv3 之一
         * @type {string || null}
         */
        this.SslVer = null;

        /**
         * POST 请求数据，空字符串表示非POST请求
         * @type {string || null}
         */
        this.PostData = null;

        /**
         * 用户Agent信息
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * 要在结果中进行匹配的字符串
         * @type {string || null}
         */
        this.CheckStr = null;

        /**
         * 1 表示通过检查结果是否包含CheckStr 进行校验
         * @type {number || null}
         */
        this.CheckType = null;

        /**
         * 需要设置的Cookie信息
         * @type {string || null}
         */
        this.Cookie = null;

        /**
         * 登录服务器的账号。如果为空字符串，表示不用校验用户密码。只做简单连接服务器的拨测
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 登录服务器的密码
         * @type {string || null}
         */
        this.PassWord = null;

        /**
         * 缺省为0，0 表示请求为字符串类型, 1表示为二进制类型
         * @type {number || null}
         */
        this.ReqDataType = null;

        /**
         * 发起TCP, UDP请求的协议请求数据
         * @type {string || null}
         */
        this.ReqData = null;

        /**
         * 缺省为0。0 表示请求为字符串类型。1表示为二进制类型
         * @type {string || null}
         */
        this.RespDataType = null;

        /**
         * 预期的UDP请求的回应数据。字符串型，只需要返回的结果里包含本字符串算校验通过。二进制型，则需要严格等于才算通过
         * @type {string || null}
         */
        this.RespData = null;

        /**
         * 目的DNS服务器，可以为空字符串
         * @type {string || null}
         */
        this.DnsSvr = null;

        /**
         * 需要检验是否在DNS IP列表的IP。可以为空字符串，表示不校验
         * @type {string || null}
         */
        this.DnsCheckIp = null;

        /**
         * 需要为下列值之一。缺省为A。A, MX, NS, CNAME, TXT, ANY
         * @type {string || null}
         */
        this.DnsQueryType = null;

        /**
         * 是否使用安全链接SSL， 0 不使用，1 使用
         * @type {number || null}
         */
        this.UseSecConn = null;

        /**
         * FTP登录验证方式，  0 不验证  1 匿名登录  2 需要身份验证
         * @type {number || null}
         */
        this.NeedAuth = null;

        /**
         * Type=0 默认 （站点监控） Type=2 可用率监控
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 跟随跳转次数，取值范围0-5，不传则表示不跟随
         * @type {number || null}
         */
        this.RedirectFollowNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CatTypeName = 'CatTypeName' in params ? params.CatTypeName : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.AgentGroupId = 'AgentGroupId' in params ? params.AgentGroupId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.IsHeader = 'IsHeader' in params ? params.IsHeader : null;
        this.SslVer = 'SslVer' in params ? params.SslVer : null;
        this.PostData = 'PostData' in params ? params.PostData : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.CheckStr = 'CheckStr' in params ? params.CheckStr : null;
        this.CheckType = 'CheckType' in params ? params.CheckType : null;
        this.Cookie = 'Cookie' in params ? params.Cookie : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PassWord = 'PassWord' in params ? params.PassWord : null;
        this.ReqDataType = 'ReqDataType' in params ? params.ReqDataType : null;
        this.ReqData = 'ReqData' in params ? params.ReqData : null;
        this.RespDataType = 'RespDataType' in params ? params.RespDataType : null;
        this.RespData = 'RespData' in params ? params.RespData : null;
        this.DnsSvr = 'DnsSvr' in params ? params.DnsSvr : null;
        this.DnsCheckIp = 'DnsCheckIp' in params ? params.DnsCheckIp : null;
        this.DnsQueryType = 'DnsQueryType' in params ? params.DnsQueryType : null;
        this.UseSecConn = 'UseSecConn' in params ? params.UseSecConn : null;
        this.NeedAuth = 'NeedAuth' in params ? params.NeedAuth : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RedirectFollowNum = 'RedirectFollowNum' in params ? params.RedirectFollowNum : null;

    }
}

/**
 * DescribeAlarmTopic请求参数结构体
 * @class
 */
class DescribeAlarmTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 如果不存在拨测相关的主题，是否自动创建一个。取值可为0, 1，默认为0
         * @type {number || null}
         */
        this.NeedAdd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NeedAdd = 'NeedAdd' in params ? params.NeedAdd : null;

    }
}

/**
 * CreateTaskEx请求参数结构体
 * @class
 */
class CreateTaskExRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * http, https, ping, tcp, ftp, smtp, udp, dns 之一
         * @type {string || null}
         */
        this.CatTypeName = null;

        /**
         * 拨测的URL， 例如：www.qq.com (URL域名解析需要能解析出具体的IP)
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 拨测周期。取值可为1,5,15,30之一, 单位：分钟。精度不能低于用户等级规定的最小精度
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 拨测任务名称不能超过32个字符。同一个用户创建的任务名不可重复
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 拨测分组ID，体现本拨测任务要采用哪些运营商作为拨测源。一般可直接填写本用户的默认拨测分组。参见：DescribeAgentGroups 接口，本参数使用返回结果里的GroupId的值。注意： Type为0时，AgentGroupId为必填
         * @type {number || null}
         */
        this.AgentGroupId = null;

        /**
         * 指定域名(如需要)
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 是否为Header请求（非0 发起Header 请求。为0，且PostData 非空，发起POST请求。为0，PostData 为空，发起GET请求）
         * @type {number || null}
         */
        this.IsHeader = null;

        /**
         * URL中含有"https"时有用。缺省为SSLv23。需要为 TLSv1_2, TLSv1_1, TLSv1, SSLv2, SSLv23, SSLv3 之一
         * @type {string || null}
         */
        this.SslVer = null;

        /**
         * POST请求数据。空字符串表示非POST请求
         * @type {string || null}
         */
        this.PostData = null;

        /**
         * 用户Agent信息
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * 要在结果中进行匹配的字符串
         * @type {string || null}
         */
        this.CheckStr = null;

        /**
         * 1 表示通过检查结果是否包含CheckStr 进行校验
         * @type {number || null}
         */
        this.CheckType = null;

        /**
         * 需要设置的Cookie信息
         * @type {string || null}
         */
        this.Cookie = null;

        /**
         * 任务ID，用于验证且修改任务时传入原任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 登录服务器的账号。如果为空字符串，表示不用校验用户密码。只做简单连接服务器的拨测
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 登录服务器的密码
         * @type {string || null}
         */
        this.PassWord = null;

        /**
         * 缺省为0。0 表示请求为字符串类型。1表示为二进制类型
         * @type {number || null}
         */
        this.ReqDataType = null;

        /**
         * 发起TCP, UDP请求的协议请求数据
         * @type {string || null}
         */
        this.ReqData = null;

        /**
         * 缺省为0。0 表示响应为字符串类型。1表示为二进制类型
         * @type {number || null}
         */
        this.RespDataType = null;

        /**
         * 预期的UDP请求的回应数据。字符串型，只需要返回的结果里包含本字符串算校验通过。二进制型，则需要严格等于才算通过
         * @type {string || null}
         */
        this.RespData = null;

        /**
         * 目的DNS服务器  可以为空字符串
         * @type {string || null}
         */
        this.DnsSvr = null;

        /**
         * 需要检验是否在DNS IP列表的IP。可以为空字符串，表示不校验
         * @type {string || null}
         */
        this.DnsCheckIp = null;

        /**
         * 需要为下列值之一。缺省为A。A, MX, NS, CNAME, TXT, ANY
         * @type {string || null}
         */
        this.DnsQueryType = null;

        /**
         * 是否使用安全链接SSL， 0 不使用，1 使用
         * @type {number || null}
         */
        this.UseSecConn = null;

        /**
         * FTP登录验证方式， 0 不验证 ， 1 匿名登录， 2 需要身份验证
         * @type {number || null}
         */
        this.NeedAuth = null;

        /**
         * 拨测目标的端口号
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Type=0 默认 （站点监控）Type=2 可用率监控
         * @type {number || null}
         */
        this.Type = null;

        /**
         * IsVerify=0 非验证任务 IsVerify=1 验证任务，不传则默认为0
         * @type {number || null}
         */
        this.IsVerify = null;

        /**
         * 跟随跳转次数，取值范围0-5，不传则表示不跟随
         * @type {number || null}
         */
        this.RedirectFollowNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CatTypeName = 'CatTypeName' in params ? params.CatTypeName : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.AgentGroupId = 'AgentGroupId' in params ? params.AgentGroupId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.IsHeader = 'IsHeader' in params ? params.IsHeader : null;
        this.SslVer = 'SslVer' in params ? params.SslVer : null;
        this.PostData = 'PostData' in params ? params.PostData : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.CheckStr = 'CheckStr' in params ? params.CheckStr : null;
        this.CheckType = 'CheckType' in params ? params.CheckType : null;
        this.Cookie = 'Cookie' in params ? params.Cookie : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PassWord = 'PassWord' in params ? params.PassWord : null;
        this.ReqDataType = 'ReqDataType' in params ? params.ReqDataType : null;
        this.ReqData = 'ReqData' in params ? params.ReqData : null;
        this.RespDataType = 'RespDataType' in params ? params.RespDataType : null;
        this.RespData = 'RespData' in params ? params.RespData : null;
        this.DnsSvr = 'DnsSvr' in params ? params.DnsSvr : null;
        this.DnsCheckIp = 'DnsCheckIp' in params ? params.DnsCheckIp : null;
        this.DnsQueryType = 'DnsQueryType' in params ? params.DnsQueryType : null;
        this.UseSecConn = 'UseSecConn' in params ? params.UseSecConn : null;
        this.NeedAuth = 'NeedAuth' in params ? params.NeedAuth : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.IsVerify = 'IsVerify' in params ? params.IsVerify : null;
        this.RedirectFollowNum = 'RedirectFollowNum' in params ? params.RedirectFollowNum : null;

    }
}

/**
 * GetTaskTotalNumber请求参数结构体
 * @class
 */
class GetTaskTotalNumberRequest extends  AbstractModel {
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
 * 可用性监控任务状态及告警信息
 * @class
 */
class TaskAlarm extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务周期，单位为分钟。目前支持1，5，15，30几种取值
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 拨测类型。http, https, ping, tcp, udp, smtp, pop3, dns 之一
         * @type {string || null}
         */
        this.CatTypeName = null;

        /**
         * 任务状态。1表示暂停，2表示运行中，0为初始态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 拨测任务的URL
         * @type {string || null}
         */
        this.CgiUrl = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 告警状态。1 故障，0 正常
         * @type {number || null}
         */
        this.AlarmStatus = null;

        /**
         * 告警状态描述，统计信息
         * @type {string || null}
         */
        this.StatusInfo = null;

        /**
         * 任务更新时间
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.CatTypeName = 'CatTypeName' in params ? params.CatTypeName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CgiUrl = 'CgiUrl' in params ? params.CgiUrl : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.StatusInfo = 'StatusInfo' in params ? params.StatusInfo : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeTasksByType请求参数结构体
 * @class
 */
class DescribeTasksByTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 从第Offset 条开始查询。缺省值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 本批次查询Limit 条记录。缺省值为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 拨测任务类型。0 站点监控，2 可用性监控。缺省值为2
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * VerifyResult请求参数结构体
 * @class
 */
class VerifyResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的拨测任务的结果id
         * @type {number || null}
         */
        this.ResultId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultId = 'ResultId' in params ? params.ResultId : null;

    }
}

/**
 * VerifyResult返回参数结构体
 * @class
 */
class VerifyResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误的原因
         * @type {string || null}
         */
        this.ErrorReason = null;

        /**
         * 错误号
         * @type {number || null}
         */
        this.ResultCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorReason = 'ErrorReason' in params ? params.ErrorReason : null;
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务信息和告警策略组
 * @class
 */
class CatTaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务周期，单位为分钟。目前支持1，5，15，30几种取值
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 拨测类型。http, https, ping, tcp 之一
         * @type {string || null}
         */
        this.CatTypeName = null;

        /**
         * 拨测任务的URL
         * @type {string || null}
         */
        this.CgiUrl = null;

        /**
         * 拨测分组ID
         * @type {number || null}
         */
        this.AgentGroupId = null;

        /**
         * 告警策略组ID
         * @type {number || null}
         */
        this.PolicyGroupId = null;

        /**
         * 任务状态。1表示暂停，2表示运行中，0为初始态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 任务类型。0 站点监控，2 可用性监控
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 绑定的统一告警主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 告警状态。0 未启用，1, 启用
         * @type {number || null}
         */
        this.AlarmStatus = null;

        /**
         * 指定的域名
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 拨测目标的端口号
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 要在结果中进行匹配的字符串
         * @type {string || null}
         */
        this.CheckStr = null;

        /**
         * 1 表示通过检查结果是否包含CheckStr 进行校验
         * @type {number || null}
         */
        this.CheckType = null;

        /**
         * 用户Agent信息
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * 设置的Cookie信息
         * @type {string || null}
         */
        this.Cookie = null;

        /**
         * POST 请求数据。空字符串表示非POST请求
         * @type {string || null}
         */
        this.PostData = null;

        /**
         * SSL协议版本
         * @type {string || null}
         */
        this.SslVer = null;

        /**
         * 是否为Header请求。非0 Header 请求
         * @type {number || null}
         */
        this.IsHeader = null;

        /**
         * 目的DNS服务器
         * @type {string || null}
         */
        this.DnsSvr = null;

        /**
         * 需要检验是否在DNS IP列表的IP
         * @type {string || null}
         */
        this.DnsCheckIp = null;

        /**
         * DNS查询类型
         * @type {string || null}
         */
        this.DnsQueryType = null;

        /**
         * 登录服务器的账号
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 登录服务器的密码
         * @type {string || null}
         */
        this.PassWord = null;

        /**
         * 是否使用安全链接SSL， 0 不使用，1 使用
         * @type {number || null}
         */
        this.UseSecConn = null;

        /**
         * FTP登录验证方式  0 不验证  1 匿名登录  2 需要身份验证
         * @type {number || null}
         */
        this.NeedAuth = null;

        /**
         * 请求数据类型。0 表示请求为字符串类型。1表示为二进制类型
         * @type {number || null}
         */
        this.ReqDataType = null;

        /**
         * 发起TCP, UDP请求的协议请求数据
         * @type {string || null}
         */
        this.ReqData = null;

        /**
         * 响应数据类型。0 表示响应为字符串类型。1表示为二进制类型
         * @type {number || null}
         */
        this.RespDataType = null;

        /**
         * 预期的UDP请求的回应数据
         * @type {string || null}
         */
        this.RespData = null;

        /**
         * 跟随跳转次数
         * @type {number || null}
         */
        this.RedirectFollowNum = null;

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
        this.Period = 'Period' in params ? params.Period : null;
        this.CatTypeName = 'CatTypeName' in params ? params.CatTypeName : null;
        this.CgiUrl = 'CgiUrl' in params ? params.CgiUrl : null;
        this.AgentGroupId = 'AgentGroupId' in params ? params.AgentGroupId : null;
        this.PolicyGroupId = 'PolicyGroupId' in params ? params.PolicyGroupId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.CheckStr = 'CheckStr' in params ? params.CheckStr : null;
        this.CheckType = 'CheckType' in params ? params.CheckType : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Cookie = 'Cookie' in params ? params.Cookie : null;
        this.PostData = 'PostData' in params ? params.PostData : null;
        this.SslVer = 'SslVer' in params ? params.SslVer : null;
        this.IsHeader = 'IsHeader' in params ? params.IsHeader : null;
        this.DnsSvr = 'DnsSvr' in params ? params.DnsSvr : null;
        this.DnsCheckIp = 'DnsCheckIp' in params ? params.DnsCheckIp : null;
        this.DnsQueryType = 'DnsQueryType' in params ? params.DnsQueryType : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PassWord = 'PassWord' in params ? params.PassWord : null;
        this.UseSecConn = 'UseSecConn' in params ? params.UseSecConn : null;
        this.NeedAuth = 'NeedAuth' in params ? params.NeedAuth : null;
        this.ReqDataType = 'ReqDataType' in params ? params.ReqDataType : null;
        this.ReqData = 'ReqData' in params ? params.ReqData : null;
        this.RespDataType = 'RespDataType' in params ? params.RespDataType : null;
        this.RespData = 'RespData' in params ? params.RespData : null;
        this.RedirectFollowNum = 'RedirectFollowNum' in params ? params.RedirectFollowNum : null;

    }
}

/**
 * GetReturnCodeHistory返回参数结构体
 * @class
 */
class GetReturnCodeHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测失败详情列表
         * @type {Array.<CatReturnDetail> || null}
         */
        this.Details = null;

        /**
         * 拨测失败汇总列表
         * @type {Array.<CatReturnSummary> || null}
         */
        this.Summary = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 截至时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new CatReturnDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

        if (params.Summary) {
            this.Summary = new Array();
            for (let z in params.Summary) {
                let obj = new CatReturnSummary();
                obj.deserialize(params.Summary[z]);
                this.Summary.push(obj);
            }
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 时延等数据，数据点
 * @class
 */
class DataPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据点的时间
         * @type {string || null}
         */
        this.LogTime = null;

        /**
         * 数据值
         * @type {number || null}
         */
        this.MetricValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.MetricValue = 'MetricValue' in params ? params.MetricValue : null;

    }
}

/**
 * DescribeAlarmTopic返回参数结构体
 * @class
 */
class DescribeAlarmTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 主题列表
         * @type {Array.<AlarmTopic> || null}
         */
        this.Topics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new AlarmTopic();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRealAvailRatio返回参数结构体
 * @class
 */
class GetRealAvailRatioResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国内平均可用率
         * @type {number || null}
         */
        this.AvgAvailRatio = null;

        /**
         * 各省份最低可用率
         * @type {number || null}
         */
        this.LowestAvailRatio = null;

        /**
         * 可用率最低的省份
         * @type {string || null}
         */
        this.LowestProvince = null;

        /**
         * 可用率最低的运营商
         * @type {string || null}
         */
        this.LowestIsp = null;

        /**
         * 分省份的可用率数据
         * @type {Array.<ProvinceDetail> || null}
         */
        this.ProvinceData = null;

        /**
         * 国内平均耗时，单位毫秒
         * @type {number || null}
         */
        this.AvgTime = null;

        /**
         * 国外平均可用率
         * @type {number || null}
         */
        this.AvgAvailRatio2 = null;

        /**
         * 国外平均耗时，单位毫秒
         * @type {number || null}
         */
        this.AvgTime2 = null;

        /**
         * 国外最低可用率
         * @type {number || null}
         */
        this.LowestAvailRatio2 = null;

        /**
         * 国外可用率最低的区域
         * @type {string || null}
         */
        this.LowestProvince2 = null;

        /**
         * 国外可用率最低的运营商
         * @type {string || null}
         */
        this.LowestIsp2 = null;

        /**
         * 国外分区域的可用率数据
         * @type {Array.<ProvinceDetail> || null}
         */
        this.ProvinceData2 = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AvgAvailRatio = 'AvgAvailRatio' in params ? params.AvgAvailRatio : null;
        this.LowestAvailRatio = 'LowestAvailRatio' in params ? params.LowestAvailRatio : null;
        this.LowestProvince = 'LowestProvince' in params ? params.LowestProvince : null;
        this.LowestIsp = 'LowestIsp' in params ? params.LowestIsp : null;

        if (params.ProvinceData) {
            this.ProvinceData = new Array();
            for (let z in params.ProvinceData) {
                let obj = new ProvinceDetail();
                obj.deserialize(params.ProvinceData[z]);
                this.ProvinceData.push(obj);
            }
        }
        this.AvgTime = 'AvgTime' in params ? params.AvgTime : null;
        this.AvgAvailRatio2 = 'AvgAvailRatio2' in params ? params.AvgAvailRatio2 : null;
        this.AvgTime2 = 'AvgTime2' in params ? params.AvgTime2 : null;
        this.LowestAvailRatio2 = 'LowestAvailRatio2' in params ? params.LowestAvailRatio2 : null;
        this.LowestProvince2 = 'LowestProvince2' in params ? params.LowestProvince2 : null;
        this.LowestIsp2 = 'LowestIsp2' in params ? params.LowestIsp2 : null;

        if (params.ProvinceData2) {
            this.ProvinceData2 = new Array();
            for (let z in params.ProvinceData2) {
                let obj = new ProvinceDetail();
                obj.deserialize(params.ProvinceData2[z]);
                this.ProvinceData2.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RunTask返回参数结构体
 * @class
 */
class RunTaskResponse extends  AbstractModel {
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
 * 拨测Agent 所在省份、运营商
 * @class
 */
class CatAgent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测结点所在的省份（拼音缩写）
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 拨测结点所在的运营商（英文缩写）
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 拨测结点所在的省份（中文名称）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProvinceName = null;

        /**
         * 拨测结点所在的运营商（中文名称）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IspName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Province = 'Province' in params ? params.Province : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;
        this.IspName = 'IspName' in params ? params.IspName : null;

    }
}

/**
 * DescribeCatLogs返回参数结构体
 * @class
 */
class DescribeCatLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 拨测记录列表
         * @type {Array.<CatLog> || null}
         */
        this.CatLogs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.CatLogs) {
            this.CatLogs = new Array();
            for (let z in params.CatLogs) {
                let obj = new CatLog();
                obj.deserialize(params.CatLogs[z]);
                this.CatLogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTaskTotalNumber返回参数结构体
 * @class
 */
class GetTaskTotalNumberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务总数
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTaskEx返回参数结构体
 * @class
 */
class CreateTaskExResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测结果查询ID。接下来可以使用查询拨测是否能够成功，验证能否通过。
         * @type {number || null}
         */
        this.ResultId = null;

        /**
         * 拨测任务ID。验证通过后，创建任务时使用，传递给CreateTask 接口。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultId = 'ResultId' in params ? params.ResultId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserLimit请求参数结构体
 * @class
 */
class DescribeUserLimitRequest extends  AbstractModel {
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

module.exports = {
    GetReturnCodeInfoResponse: GetReturnCodeInfoResponse,
    ModifyAgentGroupRequest: ModifyAgentGroupRequest,
    BindAlarmPolicyResponse: BindAlarmPolicyResponse,
    AlarmInfo: AlarmInfo,
    GetDailyAvailRatioRequest: GetDailyAvailRatioRequest,
    ModifyTaskExResponse: ModifyTaskExResponse,
    DescribeAgentsRequest: DescribeAgentsRequest,
    CatReturnSummary: CatReturnSummary,
    CatReturnDetail: CatReturnDetail,
    RunTaskRequest: RunTaskRequest,
    DimensionsDetail: DimensionsDetail,
    GetRespTimeTrendExResponse: GetRespTimeTrendExResponse,
    ModifyAgentGroupResponse: ModifyAgentGroupResponse,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    IspDetail: IspDetail,
    DataPointMetric: DataPointMetric,
    GetReturnCodeInfoRequest: GetReturnCodeInfoRequest,
    DescribeCatLogsRequest: DescribeCatLogsRequest,
    DescribeAgentsResponse: DescribeAgentsResponse,
    GetAvailRatioHistoryResponse: GetAvailRatioHistoryResponse,
    CreateAgentGroupResponse: CreateAgentGroupResponse,
    DeleteTasksResponse: DeleteTasksResponse,
    DescribeAlarmsResponse: DescribeAlarmsResponse,
    GetRealAvailRatioRequest: GetRealAvailRatioRequest,
    DeleteAgentGroupResponse: DeleteAgentGroupResponse,
    AgentGroup: AgentGroup,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    DescribeTasksByTypeResponse: DescribeTasksByTypeResponse,
    GetResultSummaryResponse: GetResultSummaryResponse,
    GetReturnCodeHistoryRequest: GetReturnCodeHistoryRequest,
    BindAlarmPolicyRequest: BindAlarmPolicyRequest,
    DescribeAgentGroupsResponse: DescribeAgentGroupsResponse,
    ProvinceDetail: ProvinceDetail,
    AlarmTopic: AlarmTopic,
    ResultSummary: ResultSummary,
    PauseTaskRequest: PauseTaskRequest,
    GetResultSummaryRequest: GetResultSummaryRequest,
    DescribeAlarmsRequest: DescribeAlarmsRequest,
    DescribeUserLimitResponse: DescribeUserLimitResponse,
    GetRespTimeTrendExRequest: GetRespTimeTrendExRequest,
    DeleteTasksRequest: DeleteTasksRequest,
    DescribeAlarmsByTaskRequest: DescribeAlarmsByTaskRequest,
    PauseTaskResponse: PauseTaskResponse,
    CreateAgentGroupRequest: CreateAgentGroupRequest,
    CatLog: CatLog,
    GetDailyAvailRatioResponse: GetDailyAvailRatioResponse,
    DeleteAgentGroupRequest: DeleteAgentGroupRequest,
    GetAvailRatioHistoryRequest: GetAvailRatioHistoryRequest,
    DescribeAgentGroupsRequest: DescribeAgentGroupsRequest,
    DescribeAlarmsByTaskResponse: DescribeAlarmsByTaskResponse,
    ModifyTaskExRequest: ModifyTaskExRequest,
    DescribeAlarmTopicRequest: DescribeAlarmTopicRequest,
    CreateTaskExRequest: CreateTaskExRequest,
    GetTaskTotalNumberRequest: GetTaskTotalNumberRequest,
    TaskAlarm: TaskAlarm,
    DescribeTasksByTypeRequest: DescribeTasksByTypeRequest,
    VerifyResultRequest: VerifyResultRequest,
    VerifyResultResponse: VerifyResultResponse,
    CatTaskDetail: CatTaskDetail,
    GetReturnCodeHistoryResponse: GetReturnCodeHistoryResponse,
    DataPoint: DataPoint,
    DescribeAlarmTopicResponse: DescribeAlarmTopicResponse,
    GetRealAvailRatioResponse: GetRealAvailRatioResponse,
    RunTaskResponse: RunTaskResponse,
    CatAgent: CatAgent,
    DescribeCatLogsResponse: DescribeCatLogsResponse,
    GetTaskTotalNumberResponse: GetTaskTotalNumberResponse,
    CreateTaskExResponse: CreateTaskExResponse,
    DescribeUserLimitRequest: DescribeUserLimitRequest,

}
