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
 * DescribeProbeNodes返回参数结构体
 * @class
 */
class DescribeProbeNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeDefine> || null}
         */
        this.NodeSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new NodeDefine();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeProbeMetricData返回参数结构体
 * @class
 */
class DescribeProbeMetricDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标 JSON 序列化后的字符串
         * @type {string || null}
         */
        this.MetricSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricSet = 'MetricSet' in params ? params.MetricSet : null;
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
 * DeleteProbeTask请求参数结构体
 * @class
 */
class DeleteProbeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {Array.<string> || null}
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
 * DescribeDetailedSingleProbeData返回参数结构体
 * @class
 */
class DescribeDetailedSingleProbeDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单次详情数据
         * @type {Array.<DetailedSingleDataDefine> || null}
         */
        this.DataSet = null;

        /**
         * 符合条件的数据总数
         * @type {number || null}
         */
        this.TotalNumber = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DataSet) {
            this.DataSet = new Array();
            for (let z in params.DataSet) {
                let obj = new DetailedSingleDataDefine();
                obj.deserialize(params.DataSet[z]);
                this.DataSet.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 拨测任务
 * @class
 */
class ProbeTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 任务 ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 拨测节点列表
         * @type {Array.<string> || null}
         */
        this.Nodes = null;

        /**
         * 拨测间隔
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 拨测参数
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * 任务状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 目标地址
         * @type {string || null}
         */
        this.TargetAddress = null;

        /**
         * 付费模式
<li>1 = 试用版本</li>
<li> 2 = 付费版本 </li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 订单状态
<li>1 = 正常</li>
<li> 2 = 欠费 </li>
         * @type {number || null}
         */
        this.OrderState = null;

        /**
         * 任务分类
<li>1 = PC</li>
<li> 2 = Mobile </li>
         * @type {number || null}
         */
        this.TaskCategory = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 定时任务cron表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cron = null;

        /**
         * 定时任务启动状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CronState = null;

        /**
         * 任务当前绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KeyValuePair> || null}
         */
        this.TagInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TargetAddress = 'TargetAddress' in params ? params.TargetAddress : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.OrderState = 'OrderState' in params ? params.OrderState : null;
        this.TaskCategory = 'TaskCategory' in params ? params.TaskCategory : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.Cron = 'Cron' in params ? params.Cron : null;
        this.CronState = 'CronState' in params ? params.CronState : null;

        if (params.TagInfoList) {
            this.TagInfoList = new Array();
            for (let z in params.TagInfoList) {
                let obj = new KeyValuePair();
                obj.deserialize(params.TagInfoList[z]);
                this.TagInfoList.push(obj);
            }
        }

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

/**
 * 保存string类型字段
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义字段编号
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义字段名称/说明
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段值
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
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * 健值对
 * @class
 */
class KeyValuePair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 值
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
 * DescribeDetailedSingleProbeData请求参数结构体
 * @class
 */
class DescribeDetailedSingleProbeDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间戳（毫秒级）
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间戳（毫秒级）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 任务类型
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 待排序字段
         * @type {string || null}
         */
        this.SortField = null;

        /**
         * true表示升序
         * @type {boolean || null}
         */
        this.Ascending = null;

        /**
         * 选中字段
         * @type {Array.<string> || null}
         */
        this.SelectedFields = null;

        /**
         * 起始取数位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 取数数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 任务ID
         * @type {Array.<string> || null}
         */
        this.TaskID = null;

        /**
         * 拨测点运营商
         * @type {Array.<string> || null}
         */
        this.Operators = null;

        /**
         * 拨测点地区
         * @type {Array.<string> || null}
         */
        this.Districts = null;

        /**
         * 错误类型
         * @type {Array.<string> || null}
         */
        this.ErrorTypes = null;

        /**
         * 城市
         * @type {Array.<string> || null}
         */
        this.City = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.SortField = 'SortField' in params ? params.SortField : null;
        this.Ascending = 'Ascending' in params ? params.Ascending : null;
        this.SelectedFields = 'SelectedFields' in params ? params.SelectedFields : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.Operators = 'Operators' in params ? params.Operators : null;
        this.Districts = 'Districts' in params ? params.Districts : null;
        this.ErrorTypes = 'ErrorTypes' in params ? params.ErrorTypes : null;
        this.City = 'City' in params ? params.City : null;

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
 * 资源的标签，通过标签对资源进行划分用于支持细粒度的鉴权、分账等场景
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * value
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
 * UpdateProbeTaskConfigurationList返回参数结构体
 * @class
 */
class UpdateProbeTaskConfigurationListResponse extends  AbstractModel {
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
 * ResumeProbeTask返回参数结构体
 * @class
 */
class ResumeProbeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务总量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 任务执行详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskResult> || null}
         */
        this.Results = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new TaskResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ResumeProbeTask请求参数结构体
 * @class
 */
class ResumeProbeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {Array.<string> || null}
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
 * 探测节点
 * @class
 */
class NodeDefine extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 节点代码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 节点类型
<li> 1 = IDC </li>
<li> 2 = LastMile </li>
<li> 3 = Mobile </li>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 网络服务商
         * @type {string || null}
         */
        this.NetService = null;

        /**
         * 区域
         * @type {string || null}
         */
        this.District = null;

        /**
         * 城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * IP 类型
<li> 1 = IPv4 </li>
<li> 2 = IPv6 </li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IPType = null;

        /**
         * 区域
<li> 1 = 中国大陆 </li>
<li> 2 = 港澳台 </li>
<li> 3 = 国外 </li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Location = null;

        /**
         * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CodeType = null;

        /**
         * 节点状态：1-运行,2-下线
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NodeDefineStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.NetService = 'NetService' in params ? params.NetService : null;
        this.District = 'District' in params ? params.District : null;
        this.City = 'City' in params ? params.City : null;
        this.IPType = 'IPType' in params ? params.IPType : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;
        this.NodeDefineStatus = 'NodeDefineStatus' in params ? params.NodeDefineStatus : null;

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
 * 任务执行结果
 * @class
 */
class TaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Success = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Success = 'Success' in params ? params.Success : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

    }
}

/**
 * SuspendProbeTask返回参数结构体
 * @class
 */
class SuspendProbeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务总量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 任务执行结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskResult> || null}
         */
        this.Results = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new TaskResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeProbeTasks返回参数结构体
 * @class
 */
class DescribeProbeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProbeTask> || null}
         */
        this.TaskSet = null;

        /**
         * 任务总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new ProbeTask();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
 * SuspendProbeTask请求参数结构体
 * @class
 */
class SuspendProbeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {Array.<string> || null}
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
 * DescribeProbeMetricData请求参数结构体
 * @class
 */
class DescribeProbeMetricDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分析任务类型
         * @type {string || null}
         */
        this.AnalyzeTaskType = null;

        /**
         * 指标类型，counter 或者 gauge
         * @type {string || null}
         */
        this.MetricType = null;

        /**
         * 指标详细字段
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 过滤条件
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * 聚合时间, 1m、1d、100d 等等
         * @type {string || null}
         */
        this.GroupBy = null;

        /**
         * 过滤条件数组
         * @type {Array.<string> || null}
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
        this.AnalyzeTaskType = 'AnalyzeTaskType' in params ? params.AnalyzeTaskType : null;
        this.MetricType = 'MetricType' in params ? params.MetricType : null;
        this.Field = 'Field' in params ? params.Field : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;
        this.Filters = 'Filters' in params ? params.Filters : null;

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
 * UpdateProbeTaskConfigurationList请求参数结构体
 * @class
 */
class UpdateProbeTaskConfigurationListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 拨测节点
         * @type {Array.<string> || null}
         */
        this.Nodes = null;

        /**
         * 拨测间隔
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 拨测参数
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * 定时任务cron表达式
         * @type {string || null}
         */
        this.Cron = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.Cron = 'Cron' in params ? params.Cron : null;

    }
}

/**
 * CreateProbeTasks请求参数结构体
 * @class
 */
class CreateProbeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量任务名-地址
         * @type {Array.<ProbeTaskBasicConfiguration> || null}
         */
        this.BatchTasks = null;

        /**
         * 任务类型
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 拨测节点
         * @type {Array.<string> || null}
         */
        this.Nodes = null;

        /**
         * 拨测间隔
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 拨测参数
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * 任务分类
<li>1 = PC</li>
<li> 2 = Mobile </li>
         * @type {number || null}
         */
        this.TaskCategory = null;

        /**
         * 定时任务cron表达式
         * @type {string || null}
         */
        this.Cron = null;

        /**
         * 资源标签值
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * 测试类型，包含定时测试与即时测试
         * @type {number || null}
         */
        this.ProbeType = null;

        /**
         * 插件类型
         * @type {string || null}
         */
        this.PluginSource = null;

        /**
         * 客户度ID
         * @type {string || null}
         */
        this.ClientNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BatchTasks) {
            this.BatchTasks = new Array();
            for (let z in params.BatchTasks) {
                let obj = new ProbeTaskBasicConfiguration();
                obj.deserialize(params.BatchTasks[z]);
                this.BatchTasks.push(obj);
            }
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.TaskCategory = 'TaskCategory' in params ? params.TaskCategory : null;
        this.Cron = 'Cron' in params ? params.Cron : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }
        this.ProbeType = 'ProbeType' in params ? params.ProbeType : null;
        this.PluginSource = 'PluginSource' in params ? params.PluginSource : null;
        this.ClientNum = 'ClientNum' in params ? params.ClientNum : null;

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
 * 单条详细拨测数据
 * @class
 */
class DetailedSingleDataDefine extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测时间戳
         * @type {number || null}
         */
        this.ProbeTime = null;

        /**
         * 储存所有string类型字段
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 储存所有float类型字段
         * @type {Array.<Field> || null}
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
        this.ProbeTime = 'ProbeTime' in params ? params.ProbeTime : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Fields) {
            this.Fields = new Array();
            for (let z in params.Fields) {
                let obj = new Field();
                obj.deserialize(params.Fields[z]);
                this.Fields.push(obj);
            }
        }

    }
}

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
 * 储存float类型字段
 * @class
 */
class Field extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义字段编号
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 自定义字段名称/说明
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段值
         * @type {number || null}
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
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * type ProbeTaskBasicConfiguration struct {
	TaskID        TaskID `json:"TaskId" gorm:"column:task_id"`
	Name          string `json:"Name" binding:"required" gorm:"column:name"`
	TargetAddress string `json:"TargetAddress" binding:"required" gorm:"column:target_address"`
}
 * @class
 */
class ProbeTaskBasicConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 拨测目标地址
         * @type {string || null}
         */
        this.TargetAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TargetAddress = 'TargetAddress' in params ? params.TargetAddress : null;

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
 * DescribeProbeTasks请求参数结构体
 * @class
 */
class DescribeProbeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID  列表
         * @type {Array.<string> || null}
         */
        this.TaskIDs = null;

        /**
         * 任务名
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 拨测目标
         * @type {string || null}
         */
        this.TargetAddress = null;

        /**
         * 任务状态列表
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 付费模式
<li>1 = 试用版本</li>
<li> 2 = 付费版本 </li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 订单状态
<li>1 = 正常</li>
<li> 2 = 欠费 </li>
         * @type {number || null}
         */
        this.OrderState = null;

        /**
         * 拨测类型
         * @type {Array.<number> || null}
         */
        this.TaskType = null;

        /**
         * 节点类型
         * @type {Array.<number> || null}
         */
        this.TaskCategory = null;

        /**
         * 排序的列
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 是否正序
         * @type {boolean || null}
         */
        this.Ascend = null;

        /**
         * 资源标签值
         * @type {Array.<KeyValuePair> || null}
         */
        this.TagFilters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIDs = 'TaskIDs' in params ? params.TaskIDs : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TargetAddress = 'TargetAddress' in params ? params.TargetAddress : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.OrderState = 'OrderState' in params ? params.OrderState : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskCategory = 'TaskCategory' in params ? params.TaskCategory : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Ascend = 'Ascend' in params ? params.Ascend : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new KeyValuePair();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

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
 * DeleteProbeTask返回参数结构体
 * @class
 */
class DeleteProbeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务总量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 任务执行结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskResult> || null}
         */
        this.Results = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new TaskResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProbeTasks返回参数结构体
 * @class
 */
class CreateProbeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID列表
         * @type {Array.<string> || null}
         */
        this.TaskIDs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIDs = 'TaskIDs' in params ? params.TaskIDs : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProbeNodes请求参数结构体
 * @class
 */
class DescribeProbeNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点类型
<li> 1 = IDC </li>
<li> 2 = LastMile </li>
<li> 3 = Mobile </li>
         * @type {number || null}
         */
        this.NodeType = null;

        /**
         * 节点区域
<li> 1 = 中国大陆 </li>
<li> 2 = 港澳台 </li>
<li> 3 = 海外 </li>
         * @type {number || null}
         */
        this.Location = null;

        /**
         * 是否IPv6
         * @type {boolean || null}
         */
        this.IsIPv6 = null;

        /**
         * 名字模糊搜索
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 付费模式
<li>1 = 试用版本</li>
<li> 2 = 付费版本 </li>
         * @type {number || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.IsIPv6 = 'IsIPv6' in params ? params.IsIPv6 : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

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

module.exports = {
    ModifyAgentGroupRequest: ModifyAgentGroupRequest,
    AlarmInfo: AlarmInfo,
    CreateTaskExResponse: CreateTaskExResponse,
    DescribeProbeNodesResponse: DescribeProbeNodesResponse,
    RunTaskRequest: RunTaskRequest,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    DescribeProbeMetricDataResponse: DescribeProbeMetricDataResponse,
    DeleteTasksResponse: DeleteTasksResponse,
    CatTaskDetail: CatTaskDetail,
    BindAlarmPolicyRequest: BindAlarmPolicyRequest,
    DeleteProbeTaskRequest: DeleteProbeTaskRequest,
    ResultSummary: ResultSummary,
    DescribeDetailedSingleProbeDataResponse: DescribeDetailedSingleProbeDataResponse,
    DescribeAlarmsByTaskRequest: DescribeAlarmsByTaskRequest,
    DescribeAlarmsRequest: DescribeAlarmsRequest,
    DescribeUserLimitResponse: DescribeUserLimitResponse,
    CreateTaskExRequest: CreateTaskExRequest,
    PauseTaskRequest: PauseTaskRequest,
    GetResultSummaryRequest: GetResultSummaryRequest,
    ProbeTask: ProbeTask,
    DataPoint: DataPoint,
    DescribeAlarmTopicResponse: DescribeAlarmTopicResponse,
    DescribeUserLimitRequest: DescribeUserLimitRequest,
    Label: Label,
    DescribeAgentsRequest: DescribeAgentsRequest,
    KeyValuePair: KeyValuePair,
    CatReturnDetail: CatReturnDetail,
    IspDetail: IspDetail,
    GetReturnCodeInfoRequest: GetReturnCodeInfoRequest,
    DescribeAgentsResponse: DescribeAgentsResponse,
    CreateAgentGroupResponse: CreateAgentGroupResponse,
    DescribeDetailedSingleProbeDataRequest: DescribeDetailedSingleProbeDataRequest,
    DeleteAgentGroupResponse: DeleteAgentGroupResponse,
    AgentGroup: AgentGroup,
    Tag: Tag,
    GetReturnCodeHistoryRequest: GetReturnCodeHistoryRequest,
    ProvinceDetail: ProvinceDetail,
    GetRealAvailRatioResponse: GetRealAvailRatioResponse,
    UpdateProbeTaskConfigurationListResponse: UpdateProbeTaskConfigurationListResponse,
    CreateAgentGroupRequest: CreateAgentGroupRequest,
    ResumeProbeTaskResponse: ResumeProbeTaskResponse,
    ModifyTaskExResponse: ModifyTaskExResponse,
    DescribeAlarmsByTaskResponse: DescribeAlarmsByTaskResponse,
    ModifyTaskExRequest: ModifyTaskExRequest,
    ResumeProbeTaskRequest: ResumeProbeTaskRequest,
    DescribeTasksByTypeRequest: DescribeTasksByTypeRequest,
    NodeDefine: NodeDefine,
    GetReturnCodeHistoryResponse: GetReturnCodeHistoryResponse,
    GetAvailRatioHistoryRequest: GetAvailRatioHistoryRequest,
    GetTaskTotalNumberResponse: GetTaskTotalNumberResponse,
    DimensionsDetail: DimensionsDetail,
    GetDailyAvailRatioRequest: GetDailyAvailRatioRequest,
    CatReturnSummary: CatReturnSummary,
    TaskResult: TaskResult,
    SuspendProbeTaskResponse: SuspendProbeTaskResponse,
    GetRespTimeTrendExResponse: GetRespTimeTrendExResponse,
    DataPointMetric: DataPointMetric,
    DescribeCatLogsRequest: DescribeCatLogsRequest,
    GetAvailRatioHistoryResponse: GetAvailRatioHistoryResponse,
    DescribeProbeTasksResponse: DescribeProbeTasksResponse,
    DescribeAlarmsResponse: DescribeAlarmsResponse,
    DescribeTasksByTypeResponse: DescribeTasksByTypeResponse,
    DescribeAlarmTopicRequest: DescribeAlarmTopicRequest,
    DescribeAgentGroupsResponse: DescribeAgentGroupsResponse,
    SuspendProbeTaskRequest: SuspendProbeTaskRequest,
    DescribeProbeMetricDataRequest: DescribeProbeMetricDataRequest,
    GetRespTimeTrendExRequest: GetRespTimeTrendExRequest,
    UpdateProbeTaskConfigurationListRequest: UpdateProbeTaskConfigurationListRequest,
    CreateProbeTasksRequest: CreateProbeTasksRequest,
    CatLog: CatLog,
    DescribeAgentGroupsRequest: DescribeAgentGroupsRequest,
    TaskAlarm: TaskAlarm,
    DescribeCatLogsResponse: DescribeCatLogsResponse,
    DetailedSingleDataDefine: DetailedSingleDataDefine,
    GetReturnCodeInfoResponse: GetReturnCodeInfoResponse,
    BindAlarmPolicyResponse: BindAlarmPolicyResponse,
    RunTaskResponse: RunTaskResponse,
    Field: Field,
    ProbeTaskBasicConfiguration: ProbeTaskBasicConfiguration,
    VerifyResultRequest: VerifyResultRequest,
    GetTaskTotalNumberRequest: GetTaskTotalNumberRequest,
    ModifyAgentGroupResponse: ModifyAgentGroupResponse,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    GetResultSummaryResponse: GetResultSummaryResponse,
    VerifyResultResponse: VerifyResultResponse,
    AlarmTopic: AlarmTopic,
    DeleteTasksRequest: DeleteTasksRequest,
    DescribeProbeTasksRequest: DescribeProbeTasksRequest,
    PauseTaskResponse: PauseTaskResponse,
    GetDailyAvailRatioResponse: GetDailyAvailRatioResponse,
    DeleteAgentGroupRequest: DeleteAgentGroupRequest,
    GetRealAvailRatioRequest: GetRealAvailRatioRequest,
    DeleteProbeTaskResponse: DeleteProbeTaskResponse,
    CreateProbeTasksResponse: CreateProbeTasksResponse,
    DescribeProbeNodesRequest: DescribeProbeNodesRequest,
    CatAgent: CatAgent,

}
