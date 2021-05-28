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
 * DescribeData返回参数结构体
 * @class
 */
class DescribeDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配概况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ReportOverviewData || null}
         */
        this.OverviewData = null;

        /**
         * 匹配请求次数趋势数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ReportTrendData || null}
         */
        this.TrendData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OverviewData) {
            let obj = new ReportOverviewData();
            obj.deserialize(params.OverviewData)
            this.OverviewData = obj;
        }

        if (params.TrendData) {
            let obj = new ReportTrendData();
            obj.deserialize(params.TrendData)
            this.TrendData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMatchCodes请求参数结构体
 * @class
 */
class DescribeMatchCodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，页码
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索的字符串
         * @type {string || null}
         */
        this.MatchCode = null;

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
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

    }
}

/**
 * DeleteRule返回参数结构体
 * @class
 */
class DeleteRuleResponse extends  AbstractModel {
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
 * ModifyMatch请求参数结构体
 * @class
 */
class ModifyMatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配名称，[a-zA-Z0-9-\.]* 长度128
         * @type {string || null}
         */
        this.MatchName = null;

        /**
         * 规则code
         * @type {string || null}
         */
        this.RuleCode = null;

        /**
         * 超时时间，1-600秒
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 是否为匹配结果请求服务器资源，0表示否，1表示请求GSE资源
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * 匹配code
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * 匹配描述，最长1024
         * @type {string || null}
         */
        this.MatchDesc = null;

        /**
         * 只支持 http 和 https 协议
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * 游戏服务器队列地域
         * @type {string || null}
         */
        this.ServerRegion = null;

        /**
         * 游戏服务器队列
         * @type {string || null}
         */
        this.ServerQueue = null;

        /**
         * 自定义推送数据
         * @type {string || null}
         */
        this.CustomPushData = null;

        /**
         * 游戏服务器会话数据
         * @type {string || null}
         */
        this.ServerSessionData = null;

        /**
         * 游戏属性，key-value结构的数组
         * @type {Array.<StringKV> || null}
         */
        this.GameProperties = null;

        /**
         * 日志开关，0表示关，1表示开
         * @type {number || null}
         */
        this.LogSwitch = null;

        /**
         * 标签，key-value结构的数组
         * @type {Array.<StringKV> || null}
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
        this.MatchName = 'MatchName' in params ? params.MatchName : null;
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.MatchDesc = 'MatchDesc' in params ? params.MatchDesc : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.ServerRegion = 'ServerRegion' in params ? params.ServerRegion : null;
        this.ServerQueue = 'ServerQueue' in params ? params.ServerQueue : null;
        this.CustomPushData = 'CustomPushData' in params ? params.CustomPushData : null;
        this.ServerSessionData = 'ServerSessionData' in params ? params.ServerSessionData : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new StringKV();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.LogSwitch = 'LogSwitch' in params ? params.LogSwitch : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * StartMatching返回参数结构体
 * @class
 */
class StartMatchingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 匹配票据 ID长度 128。
         * @type {string || null}
         */
        this.MatchTicketId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.MatchTicketId = 'MatchTicketId' in params ? params.MatchTicketId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMatch请求参数结构体
 * @class
 */
class CreateMatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配名称，[a-zA-Z0-9-\.]* 长度128
         * @type {string || null}
         */
        this.MatchName = null;

        /**
         * 规则code
         * @type {string || null}
         */
        this.RuleCode = null;

        /**
         * 超时时间，1-600秒
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 是否为匹配结果请求服务器资源，0表示否，1表示请求GSE资源
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * 匹配描述，最长1024
         * @type {string || null}
         */
        this.MatchDesc = null;

        /**
         * 只支持https 和 http 协议
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * 游戏服务器队列地域
         * @type {string || null}
         */
        this.ServerRegion = null;

        /**
         * 游戏服务器队列
         * @type {string || null}
         */
        this.ServerQueue = null;

        /**
         * 自定义推送数据
         * @type {string || null}
         */
        this.CustomPushData = null;

        /**
         * 游戏服务器会话数据
         * @type {string || null}
         */
        this.ServerSessionData = null;

        /**
         * 游戏属性，key-value结构的数组
         * @type {Array.<StringKV> || null}
         */
        this.GameProperties = null;

        /**
         * 日志开关，0表示关，1表示开
         * @type {number || null}
         */
        this.LogSwitch = null;

        /**
         * 标签，key-value结构的数组
         * @type {Array.<StringKV> || null}
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
        this.MatchName = 'MatchName' in params ? params.MatchName : null;
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.MatchDesc = 'MatchDesc' in params ? params.MatchDesc : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.ServerRegion = 'ServerRegion' in params ? params.ServerRegion : null;
        this.ServerQueue = 'ServerQueue' in params ? params.ServerQueue : null;
        this.CustomPushData = 'CustomPushData' in params ? params.CustomPushData : null;
        this.ServerSessionData = 'ServerSessionData' in params ? params.ServerSessionData : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new StringKV();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.LogSwitch = 'LogSwitch' in params ? params.LogSwitch : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeMatchingProgress请求参数结构体
 * @class
 */
class DescribeMatchingProgressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配票据 ID列表, 列表长度 12。
         * @type {Array.<MTicket> || null}
         */
        this.MatchTicketIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MatchTicketIds) {
            this.MatchTicketIds = new Array();
            for (let z in params.MatchTicketIds) {
                let obj = new MTicket();
                obj.deserialize(params.MatchTicketIds[z]);
                this.MatchTicketIds.push(obj);
            }
        }

    }
}

/**
 * ModifyMatch返回参数结构体
 * @class
 */
class ModifyMatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配信息
         * @type {MatchInfo || null}
         */
        this.MatchInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MatchInfo) {
            let obj = new MatchInfo();
            obj.deserialize(params.MatchInfo)
            this.MatchInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 统计数据之趋势数据
 * @class
 */
class ReportTrendData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总次数
         * @type {Array.<string> || null}
         */
        this.TotalList = null;

        /**
         * 被取消次数
         * @type {Array.<string> || null}
         */
        this.CancelList = null;

        /**
         * 成功次数
         * @type {Array.<string> || null}
         */
        this.SuccessList = null;

        /**
         * 失败次数
         * @type {Array.<string> || null}
         */
        this.FailList = null;

        /**
         * 超时次数
         * @type {Array.<string> || null}
         */
        this.TimeoutList = null;

        /**
         * 时间数组，单位：秒
         * @type {Array.<string> || null}
         */
        this.TimeList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalList = 'TotalList' in params ? params.TotalList : null;
        this.CancelList = 'CancelList' in params ? params.CancelList : null;
        this.SuccessList = 'SuccessList' in params ? params.SuccessList : null;
        this.FailList = 'FailList' in params ? params.FailList : null;
        this.TimeoutList = 'TimeoutList' in params ? params.TimeoutList : null;
        this.TimeList = 'TimeList' in params ? params.TimeList : null;

    }
}

/**
 * CreateMatch返回参数结构体
 * @class
 */
class CreateMatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配信息
         * @type {MatchInfo || null}
         */
        this.MatchInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MatchInfo) {
            let obj = new MatchInfo();
            obj.deserialize(params.MatchInfo)
            this.MatchInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则简单信息
 * @class
 */
class RuleBriefInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称 [a-zA-Z\d-\.]*
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 关联匹配
         * @type {Array.<StringKV> || null}
         */
        this.MatchCodeList = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 规则code
         * @type {string || null}
         */
        this.RuleCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.MatchCodeList) {
            this.MatchCodeList = new Array();
            for (let z in params.MatchCodeList) {
                let obj = new StringKV();
                obj.deserialize(params.MatchCodeList[z]);
                this.MatchCodeList.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;

    }
}

/**
 * DescribeMatches请求参数结构体
 * @class
 */
class DescribeMatchesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前页号，不传则获取所有有权限的资源。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 单页大小，不传则获取所有有权限的资源。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 查询类型（可选）：match表示通过matchCode或者matchName来搜索，rule表示通过ruleCode或者ruleName来搜索，其余类型不做过滤处理。
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * 查询关键词，针对SearchType进行具体过滤的内容。
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 标签列表，用于过滤。
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
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.SearchType = 'SearchType' in params ? params.SearchType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

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
 * DeleteRule请求参数结构体
 * @class
 */
class DeleteRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则code
         * @type {string || null}
         */
        this.RuleCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;

    }
}

/**
 * 匹配信息
 * @class
 */
class MatchInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配code
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * 匹配名称
         * @type {string || null}
         */
        this.MatchName = null;

        /**
         * 匹配描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchDesc = null;

        /**
         * 规则code
         * @type {string || null}
         */
        this.RuleCode = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 超时时间
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 接收通知地址
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * 是否为匹配结果请求服务器资源，0否，1请求GSE资源
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * 服务器队列所在地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServerRegion = null;

        /**
         * 服务器队列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServerQueue = null;

        /**
         * 自定义推送数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomPushData = null;

        /**
         * 游戏服务器会话数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServerSessionData = null;

        /**
         * 游戏属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StringKV> || null}
         */
        this.GameProperties = null;

        /**
         * 日志开关，0表示关，1表示开
         * @type {number || null}
         */
        this.LogSwitch = null;

        /**
         * 日志集id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志集名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * 日志主题id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogTopicId = null;

        /**
         * 日志主题名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogTopicName = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StringKV> || null}
         */
        this.Tags = null;

        /**
         * 地区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 用户AppId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 用户主账号Uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 用户创建账号Uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateUin = null;

        /**
         * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 日志状态，0表示正常，1表示日志集不存在，2表示日志主题不存在，3表示日志集和日志主题都不存在。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LogStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.MatchName = 'MatchName' in params ? params.MatchName : null;
        this.MatchDesc = 'MatchDesc' in params ? params.MatchDesc : null;
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.ServerRegion = 'ServerRegion' in params ? params.ServerRegion : null;
        this.ServerQueue = 'ServerQueue' in params ? params.ServerQueue : null;
        this.CustomPushData = 'CustomPushData' in params ? params.CustomPushData : null;
        this.ServerSessionData = 'ServerSessionData' in params ? params.ServerSessionData : null;

        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new StringKV();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.LogSwitch = 'LogSwitch' in params ? params.LogSwitch : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;
        this.LogTopicName = 'LogTopicName' in params ? params.LogTopicName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.LogStatus = 'LogStatus' in params ? params.LogStatus : null;

    }
}

/**
 * DescribeRules请求参数结构体
 * @class
 */
class DescribeRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前页号，不传则返回第一页
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 单页大小，最大 30，不填默认30
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 查询类型（可选）：match表示通过matchCode或者matchName来搜索，rule表示通过ruleCode或者ruleName来搜索，其余类型不做过滤处理。
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * 查询关键词，针对SearchType进行具体过滤的内容。
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 标签列表，用于过滤。
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
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.SearchType = 'SearchType' in params ? params.SearchType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

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
 * DescribeToken返回参数结构体
 * @class
 */
class DescribeTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前的MatchCode对应的Token。如果当前MatchCode没有Token，该参数可能取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchToken = null;

        /**
         * 当Token被替换后，GPM将兼容推送原始Token的时间（秒）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CompatibleSpan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchToken = 'MatchToken' in params ? params.MatchToken : null;
        this.CompatibleSpan = 'CompatibleSpan' in params ? params.CompatibleSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRule返回参数结构体
 * @class
 */
class DescribeRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleInfo || null}
         */
        this.RuleInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleInfo) {
            let obj = new RuleInfo();
            obj.deserialize(params.RuleInfo)
            this.RuleInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMatch请求参数结构体
 * @class
 */
class DescribeMatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配code
         * @type {string || null}
         */
        this.MatchCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

    }
}

/**
 * ModifyRule请求参数结构体
 * @class
 */
class ModifyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则code
         * @type {string || null}
         */
        this.RuleCode = null;

        /**
         * 规则名称，只能包含数字、字母、. 和 -
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则描述，最长1024
         * @type {string || null}
         */
        this.RuleDesc = null;

        /**
         * 标签，key-value结构的数组，最多关联50组标签
         * @type {Array.<StringKV> || null}
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
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleDesc = 'RuleDesc' in params ? params.RuleDesc : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeToken请求参数结构体
 * @class
 */
class DescribeTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配code
         * @type {string || null}
         */
        this.MatchCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

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
         * 起始时间，单位：秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 截止时间，单位：秒
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 时间粒度，1表示1天；2表示1小时；3表示1分钟；4表示10分钟；5表示30分钟
         * @type {number || null}
         */
        this.TimeType = null;

        /**
         * 匹配code
         * @type {string || null}
         */
        this.MatchCode = null;

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
        this.TimeType = 'TimeType' in params ? params.TimeType : null;
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

    }
}

/**
 * 玩家到各区域的延迟
 * @class
 */
class RegionLatency extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域
ap-beijing          华北地区(北京)
ap-chengdu          西南地区(成都)
ap-guangzhou          华南地区(广州)
ap-hongkong          港澳台地区(中国香港)
ap-seoul          亚太地区(首尔)
ap-shanghai          华东地区(上海)
ap-singapore          东南亚地区(新加坡)
eu-frankfurt          欧洲地区(法兰克福)
na-siliconvalley          美国西部(硅谷)
na-toronto          北美地区(多伦多)
ap-mumbai          亚太地区(孟买)
na-ashburn          美国东部(弗吉尼亚)
ap-bangkok          亚太地区(曼谷)
eu-moscow          欧洲地区(莫斯科)
ap-tokyo          亚太地区(东京)
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 毫秒延迟 0～999999
         * @type {number || null}
         */
        this.Latency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Latency = 'Latency' in params ? params.Latency : null;

    }
}

/**
 * CreateRule请求参数结构体
 * @class
 */
class CreateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称，[a-zA-Z0-9-\.]* 长度128
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则脚本，长度65535
         * @type {string || null}
         */
        this.RuleScript = null;

        /**
         * 规则描述，最长1024
         * @type {string || null}
         */
        this.RuleDesc = null;

        /**
         * 标签，key-value结构的数组，最多关联50组标签
         * @type {Array.<StringKV> || null}
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
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleScript = 'RuleScript' in params ? params.RuleScript : null;
        this.RuleDesc = 'RuleDesc' in params ? params.RuleDesc : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 匹配概况
 * @class
 */
class ReportOverviewData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总次数
         * @type {string || null}
         */
        this.TotalTimes = null;

        /**
         * 成功率
         * @type {number || null}
         */
        this.SuccessPercent = null;

        /**
         * 超时率
         * @type {number || null}
         */
        this.TimeoutPercent = null;

        /**
         * 失败率
         * @type {number || null}
         */
        this.FailPercent = null;

        /**
         * 平均匹配时间
         * @type {number || null}
         */
        this.AverageSec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTimes = 'TotalTimes' in params ? params.TotalTimes : null;
        this.SuccessPercent = 'SuccessPercent' in params ? params.SuccessPercent : null;
        this.TimeoutPercent = 'TimeoutPercent' in params ? params.TimeoutPercent : null;
        this.FailPercent = 'FailPercent' in params ? params.FailPercent : null;
        this.AverageSec = 'AverageSec' in params ? params.AverageSec : null;

    }
}

/**
 * DescribeRule请求参数结构体
 * @class
 */
class DescribeRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则code
         * @type {string || null}
         */
        this.RuleCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;

    }
}

/**
 * DescribeMatch返回参数结构体
 * @class
 */
class DescribeMatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MatchInfo || null}
         */
        this.MatchInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MatchInfo) {
            let obj = new MatchInfo();
            obj.deserialize(params.MatchInfo)
            this.MatchInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyToken返回参数结构体
 * @class
 */
class ModifyTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功设置的Token。
         * @type {string || null}
         */
        this.MatchToken = null;

        /**
         * 当前Token被替换后，GPM将持续推送原Token的时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CompatibleSpan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchToken = 'MatchToken' in params ? params.MatchToken : null;
        this.CompatibleSpan = 'CompatibleSpan' in params ? params.CompatibleSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 匹配code
 * @class
 */
class MatchCodeAttr extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配code
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

    }
}

/**
 * 玩家匹配属性
 * @class
 */
class MatchAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性名 长度 128 [a-zA-Z0-9-\.]*
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 属性类型: 0 数值; 1 string; 默认 0
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 数字属性值 默认 0.0
         * @type {number || null}
         */
        this.NumberValue = null;

        /**
         * 字符串属性值 长度 128 默认 ""
         * @type {string || null}
         */
        this.StringValue = null;

        /**
         * list 属性值
         * @type {Array.<string> || null}
         */
        this.ListValue = null;

        /**
         * 字典属性值
         * @type {Array.<AttributeMap> || null}
         */
        this.MapValue = null;

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
        this.NumberValue = 'NumberValue' in params ? params.NumberValue : null;
        this.StringValue = 'StringValue' in params ? params.StringValue : null;
        this.ListValue = 'ListValue' in params ? params.ListValue : null;

        if (params.MapValue) {
            this.MapValue = new Array();
            for (let z in params.MapValue) {
                let obj = new AttributeMap();
                obj.deserialize(params.MapValue[z]);
                this.MapValue.push(obj);
            }
        }

    }
}

/**
 * DeleteMatch返回参数结构体
 * @class
 */
class DeleteMatchResponse extends  AbstractModel {
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
 * CancelMatching请求参数结构体
 * @class
 */
class CancelMatchingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配 Code
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * 要取消的匹配匹配票据 ID
         * @type {string || null}
         */
        this.MatchTicketId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.MatchTicketId = 'MatchTicketId' in params ? params.MatchTicketId : null;

    }
}

/**
 * 玩家属性字典类型值
 * @class
 */
class AttributeMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性字典 key [a-zA-Z0-9-\.]*
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 属性字典 value
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * string keyValue解构
 * @class
 */
class StringKV extends  AbstractModel {
    constructor(){
        super();

        /**
         * 键
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
 * StartMatchingBackfill请求参数结构体
 * @class
 */
class StartMatchingBackfillRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配code
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * 玩家信息
         * @type {Array.<Player> || null}
         */
        this.Players = null;

        /**
         * 游戏服务器回话 ID [1-256] 个ASCII 字符
         * @type {string || null}
         */
        this.GameServerSessionId = null;

        /**
         * 匹配票据 Id 默认 "" 为空则由 GPM 自动生成 长度 [1, 128]
         * @type {string || null}
         */
        this.MatchTicketId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

        if (params.Players) {
            this.Players = new Array();
            for (let z in params.Players) {
                let obj = new Player();
                obj.deserialize(params.Players[z]);
                this.Players.push(obj);
            }
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.MatchTicketId = 'MatchTicketId' in params ? params.MatchTicketId : null;

    }
}

/**
 * CancelMatching返回参数结构体
 * @class
 */
class CancelMatchingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMatchCodes返回参数结构体
 * @class
 */
class DescribeMatchCodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配Code
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MatchCodeAttr> || null}
         */
        this.MatchCodes = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.MatchCodes) {
            this.MatchCodes = new Array();
            for (let z in params.MatchCodes) {
                let obj = new MatchCodeAttr();
                obj.deserialize(params.MatchCodes[z]);
                this.MatchCodes.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRule返回参数结构体
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则信息
         * @type {RuleInfo || null}
         */
        this.RuleInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleInfo) {
            let obj = new RuleInfo();
            obj.deserialize(params.RuleInfo)
            this.RuleInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRules返回参数结构体
 * @class
 */
class DescribeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleBriefInfo> || null}
         */
        this.RuleInfoList = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 当前页号
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 单页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 查询类型（可选）matchName表示匹配名称，matchCode表示匹配code，ruleName表示规则名称，tag表示标签Key/Value
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * 查询关键词（可选）
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleInfoList) {
            this.RuleInfoList = new Array();
            for (let z in params.RuleInfoList) {
                let obj = new RuleBriefInfo();
                obj.deserialize(params.RuleInfoList[z]);
                this.RuleInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.SearchType = 'SearchType' in params ? params.SearchType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * matchCode和匹配票据 ID组合结构
 * @class
 */
class MTicket extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配Code
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * 匹配票据 ID
         * @type {string || null}
         */
        this.MatchTicketId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.MatchTicketId = 'MatchTicketId' in params ? params.MatchTicketId : null;

    }
}

/**
 * 规则信息
 * @class
 */
class RuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称 [a-zA-Z0-9-\.]*
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 规则描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleDesc = null;

        /**
         * 规则脚本
         * @type {string || null}
         */
        this.RuleScript = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StringKV> || null}
         */
        this.Tags = null;

        /**
         * 关联匹配
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StringKV> || null}
         */
        this.MatchCodeList = null;

        /**
         * 规则code
         * @type {string || null}
         */
        this.RuleCode = null;

        /**
         * 地区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 用户AppId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 用户Uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 用户OwnerUin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RuleDesc = 'RuleDesc' in params ? params.RuleDesc : null;
        this.RuleScript = 'RuleScript' in params ? params.RuleScript : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new StringKV();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.MatchCodeList) {
            this.MatchCodeList = new Array();
            for (let z in params.MatchCodeList) {
                let obj = new StringKV();
                obj.deserialize(params.MatchCodeList[z]);
                this.MatchCodeList.push(obj);
            }
        }
        this.RuleCode = 'RuleCode' in params ? params.RuleCode : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;

    }
}

/**
 * ModifyToken请求参数结构体
 * @class
 */
class ModifyTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配Code。
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * 单位秒，取值0-1800。此参数表示当前Token被替换后，GPM将持续推送原Token的时间。在CompatibleSpan时间范围内，用户将在事件消息中收到当前和原始Token。
         * @type {number || null}
         */
        this.CompatibleSpan = null;

        /**
         * Token，[a-zA-Z0-9-_.], 长度0-64。如果为空，将由GPM随机生成。
         * @type {string || null}
         */
        this.MatchToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.CompatibleSpan = 'CompatibleSpan' in params ? params.CompatibleSpan : null;
        this.MatchToken = 'MatchToken' in params ? params.MatchToken : null;

    }
}

/**
 * StartMatchingBackfill返回参数结构体
 * @class
 */
class StartMatchingBackfillResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配票据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MatchTicket || null}
         */
        this.MatchTicket = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MatchTicket) {
            let obj = new MatchTicket();
            obj.deserialize(params.MatchTicket)
            this.MatchTicket = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMatches返回参数结构体
 * @class
 */
class DescribeMatchesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MatchInfo> || null}
         */
        this.MatchInfoList = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 当前页号，不填默认返回第一页
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 单页大小，不填默认取 30，最大值不能超过 30
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 查询类型（可选）：matchName表示匹配名称，matchCode表示匹配code，ruleName表示规则名称，tag表示标签Key/Value
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * 查询关键词（可选）
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MatchInfoList) {
            this.MatchInfoList = new Array();
            for (let z in params.MatchInfoList) {
                let obj = new MatchInfo();
                obj.deserialize(params.MatchInfoList[z]);
                this.MatchInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.SearchType = 'SearchType' in params ? params.SearchType : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 玩家信息。
 * @class
 */
class Player extends  AbstractModel {
    constructor(){
        super();

        /**
         * 玩家 PlayerId 长度 128 [a-zA-Z\d-\._]*
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 玩家昵称，长度 128
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 玩家匹配属性，最多 10 条
         * @type {Array.<MatchAttribute> || null}
         */
        this.MatchAttributes = null;

        /**
         * 队伍名，可以传递不同队伍名，长度 128 [a-zA-Z0-9-\.]*
         * @type {string || null}
         */
        this.Team = null;

        /**
         * 自定义玩家状态 透传参数 [0, 99999]
         * @type {number || null}
         */
        this.CustomPlayerStatus = null;

        /**
         * 自定义玩家信息 透传参数 长度 1024
         * @type {string || null}
         */
        this.CustomProfile = null;

        /**
         * 各区域延迟，最多 20 条
         * @type {Array.<RegionLatency> || null}
         */
        this.RegionLatencies = null;

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

        if (params.MatchAttributes) {
            this.MatchAttributes = new Array();
            for (let z in params.MatchAttributes) {
                let obj = new MatchAttribute();
                obj.deserialize(params.MatchAttributes[z]);
                this.MatchAttributes.push(obj);
            }
        }
        this.Team = 'Team' in params ? params.Team : null;
        this.CustomPlayerStatus = 'CustomPlayerStatus' in params ? params.CustomPlayerStatus : null;
        this.CustomProfile = 'CustomProfile' in params ? params.CustomProfile : null;

        if (params.RegionLatencies) {
            this.RegionLatencies = new Array();
            for (let z in params.RegionLatencies) {
                let obj = new RegionLatency();
                obj.deserialize(params.RegionLatencies[z]);
                this.RegionLatencies.push(obj);
            }
        }

    }
}

/**
 * StartMatching请求参数结构体
 * @class
 */
class StartMatchingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配 Code。
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * 玩家信息 最多 200 条。
         * @type {Array.<Player> || null}
         */
        this.Players = null;

        /**
         * 匹配票据 ID 默认空字符串，为空则由 GPM 自动生成 长度 128，只能包含数字、字母、. 和 -
         * @type {string || null}
         */
        this.MatchTicketId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

        if (params.Players) {
            this.Players = new Array();
            for (let z in params.Players) {
                let obj = new Player();
                obj.deserialize(params.Players[z]);
                this.Players.push(obj);
            }
        }
        this.MatchTicketId = 'MatchTicketId' in params ? params.MatchTicketId : null;

    }
}

/**
 * 标签键值对
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
 * DeleteMatch请求参数结构体
 * @class
 */
class DeleteMatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配code
         * @type {string || null}
         */
        this.MatchCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;

    }
}

/**
 * 匹配票据信息
 * @class
 */
class MatchTicket extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配票据 ID长度 128 [a-zA-Z0-9-\.]*
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 匹配 Code
         * @type {string || null}
         */
        this.MatchCode = null;

        /**
         * 根据 MatchType 取不同的结构序列化结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchResult = null;

        /**
         * 表示不同的匹配类型,NORMAL | GSE
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * 玩家信息列表
         * @type {Array.<Player> || null}
         */
        this.Players = null;

        /**
         * 匹配状态: SEARCHING 匹配中; PLACING 匹配放置中; COMPLETED 匹配完成; CANCELLED 匹配取消; TIMEDOUT 匹配超时; FAILED 匹配失败
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 匹配状态信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusMessage = null;

        /**
         * 匹配状态原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusReason = null;

        /**
         * 收到发起匹配请求的时间 eg: "2020-08-17T08:14:38.077Z"
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 匹配请求因完成、失败、超时、被取消而停止执行的时间 eg: "2020-08-17T08:14:38.077Z"
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.MatchCode = 'MatchCode' in params ? params.MatchCode : null;
        this.MatchResult = 'MatchResult' in params ? params.MatchResult : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;

        if (params.Players) {
            this.Players = new Array();
            for (let z in params.Players) {
                let obj = new Player();
                obj.deserialize(params.Players[z]);
                this.Players.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusMessage = 'StatusMessage' in params ? params.StatusMessage : null;
        this.StatusReason = 'StatusReason' in params ? params.StatusReason : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeMatchingProgress返回参数结构体
 * @class
 */
class DescribeMatchingProgressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配票据列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MatchTicket> || null}
         */
        this.MatchTickets = null;

        /**
         * 错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MatchTickets) {
            this.MatchTickets = new Array();
            for (let z in params.MatchTickets) {
                let obj = new MatchTicket();
                obj.deserialize(params.MatchTickets[z]);
                this.MatchTickets.push(obj);
            }
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRule返回参数结构体
 * @class
 */
class ModifyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则信息
         * @type {RuleInfo || null}
         */
        this.RuleInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleInfo) {
            let obj = new RuleInfo();
            obj.deserialize(params.RuleInfo)
            this.RuleInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeDataResponse: DescribeDataResponse,
    DescribeMatchCodesRequest: DescribeMatchCodesRequest,
    DeleteRuleResponse: DeleteRuleResponse,
    ModifyMatchRequest: ModifyMatchRequest,
    StartMatchingResponse: StartMatchingResponse,
    CreateMatchRequest: CreateMatchRequest,
    DescribeMatchingProgressRequest: DescribeMatchingProgressRequest,
    ModifyMatchResponse: ModifyMatchResponse,
    ReportTrendData: ReportTrendData,
    CreateMatchResponse: CreateMatchResponse,
    RuleBriefInfo: RuleBriefInfo,
    DescribeMatchesRequest: DescribeMatchesRequest,
    DeleteRuleRequest: DeleteRuleRequest,
    MatchInfo: MatchInfo,
    DescribeRulesRequest: DescribeRulesRequest,
    DescribeTokenResponse: DescribeTokenResponse,
    DescribeRuleResponse: DescribeRuleResponse,
    DescribeMatchRequest: DescribeMatchRequest,
    ModifyRuleRequest: ModifyRuleRequest,
    DescribeTokenRequest: DescribeTokenRequest,
    DescribeDataRequest: DescribeDataRequest,
    RegionLatency: RegionLatency,
    CreateRuleRequest: CreateRuleRequest,
    ReportOverviewData: ReportOverviewData,
    DescribeRuleRequest: DescribeRuleRequest,
    DescribeMatchResponse: DescribeMatchResponse,
    ModifyTokenResponse: ModifyTokenResponse,
    MatchCodeAttr: MatchCodeAttr,
    MatchAttribute: MatchAttribute,
    DeleteMatchResponse: DeleteMatchResponse,
    CancelMatchingRequest: CancelMatchingRequest,
    AttributeMap: AttributeMap,
    StringKV: StringKV,
    StartMatchingBackfillRequest: StartMatchingBackfillRequest,
    CancelMatchingResponse: CancelMatchingResponse,
    DescribeMatchCodesResponse: DescribeMatchCodesResponse,
    CreateRuleResponse: CreateRuleResponse,
    DescribeRulesResponse: DescribeRulesResponse,
    MTicket: MTicket,
    RuleInfo: RuleInfo,
    ModifyTokenRequest: ModifyTokenRequest,
    StartMatchingBackfillResponse: StartMatchingBackfillResponse,
    DescribeMatchesResponse: DescribeMatchesResponse,
    Player: Player,
    StartMatchingRequest: StartMatchingRequest,
    Tag: Tag,
    DeleteMatchRequest: DeleteMatchRequest,
    MatchTicket: MatchTicket,
    DescribeMatchingProgressResponse: DescribeMatchingProgressResponse,
    ModifyRuleResponse: ModifyRuleResponse,

}
