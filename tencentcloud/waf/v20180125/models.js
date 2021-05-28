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
 * DeleteAttackDownloadRecord请求参数结构体
 * @class
 */
class DeleteAttackDownloadRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载任务记录唯一标记
         * @type {number || null}
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
 * 响应体的返回码
 * @class
 */
class ResponseCode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 如果成功则返回Success，失败则返回yunapi定义的错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 如果成功则返回Success，失败则返回WAF定义的二级错误码
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * AddCustomRule请求参数结构体
 * @class
 */
class AddCustomRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 优先级
         * @type {string || null}
         */
        this.SortId = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 策略详情
         * @type {Array.<Strategy> || null}
         */
        this.Strategies = null;

        /**
         * 需要添加策略的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 动作类型
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 如果动作是重定向，则表示重定向的地址；其他情况可以为空
         * @type {string || null}
         */
        this.Redirect = null;

        /**
         * "clb-waf"或者"sparta-waf"
         * @type {string || null}
         */
        this.Edition = null;

        /**
         * 放行的详情
         * @type {string || null}
         */
        this.Bypass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SortId = 'SortId' in params ? params.SortId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

        if (params.Strategies) {
            this.Strategies = new Array();
            for (let z in params.Strategies) {
                let obj = new Strategy();
                obj.deserialize(params.Strategies[z]);
                this.Strategies.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.Redirect = 'Redirect' in params ? params.Redirect : null;
        this.Edition = 'Edition' in params ? params.Edition : null;
        this.Bypass = 'Bypass' in params ? params.Bypass : null;

    }
}

/**
 * 自定义规则的匹配条件结构体
 * @class
 */
class Strategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配字段
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 逻辑符号
         * @type {string || null}
         */
        this.CompareFunc = null;

        /**
         * 匹配内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 匹配参数
         * @type {string || null}
         */
        this.Arg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.CompareFunc = 'CompareFunc' in params ? params.CompareFunc : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Arg = 'Arg' in params ? params.Arg : null;

    }
}

/**
 * ModifyCustomRuleStatus请求参数结构体
 * @class
 */
class ModifyCustomRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 规则ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 开关的状态，1是开启、0是关闭
         * @type {number || null}
         */
        this.Status = null;

        /**
         * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
         * @type {string || null}
         */
        this.Edition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Edition = 'Edition' in params ? params.Edition : null;

    }
}

/**
 * DescribeCustomRules请求参数结构体
 * @class
 */
class DescribeCustomRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 分页参数
         * @type {DescribeCustomRulesPagingInfo || null}
         */
        this.Paging = null;

        /**
         * clb-waf或者sparta-waf
         * @type {string || null}
         */
        this.Edition = null;

        /**
         * 过滤参数：动作类型：0放行，1阻断，2人机识别，3观察，4重定向
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 过滤参数：规则名称过滤条件
         * @type {string || null}
         */
        this.Search = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.Paging) {
            let obj = new DescribeCustomRulesPagingInfo();
            obj.deserialize(params.Paging)
            this.Paging = obj;
        }
        this.Edition = 'Edition' in params ? params.Edition : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.Search = 'Search' in params ? params.Search : null;

    }
}

/**
 * DeleteSession请求参数结构体
 * @class
 */
class DeleteSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * clb-waf 或者 sprta-waf
         * @type {string || null}
         */
        this.Edition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Edition = 'Edition' in params ? params.Edition : null;

    }
}

/**
 * DescribeCustomRules接口的翻页参数
 * @class
 */
class DescribeCustomRulesPagingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前页码
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 当前页的最大数据条数
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteDownloadRecord返回参数结构体
 * @class
 */
class DeleteDownloadRecordResponse extends  AbstractModel {
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
 * DescribeCustomRules返回参数结构体
 * @class
 */
class DescribeCustomRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则详情
         * @type {Array.<DescribeCustomRulesRspRuleListItem> || null}
         */
        this.RuleList = null;

        /**
         * 规则条数
         * @type {string || null}
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

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new DescribeCustomRulesRspRuleListItem();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDownloadRecord请求参数结构体
 * @class
 */
class DeleteDownloadRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录id
         * @type {string || null}
         */
        this.Flow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Flow = 'Flow' in params ? params.Flow : null;

    }
}

/**
 * ModifyCustomRuleStatus返回参数结构体
 * @class
 */
class ModifyCustomRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
         * @type {ResponseCode || null}
         */
        this.Success = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new ResponseCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserClbWafRegions请求参数结构体
 * @class
 */
class DescribeUserClbWafRegionsRequest extends  AbstractModel {
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
 * DescribeUserClbWafRegions返回参数结构体
 * @class
 */
class DescribeUserClbWafRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域（标准的ap-格式）列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAttackDownloadRecord返回参数结构体
 * @class
 */
class DeleteAttackDownloadRecordResponse extends  AbstractModel {
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
 * DescribeCustomRules接口回包中的复杂类型
 * @class
 */
class DescribeCustomRulesRspRuleListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动作类型
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 跳过的策略
         * @type {string || null}
         */
        this.Bypass = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 重定向地址
         * @type {string || null}
         */
        this.Redirect = null;

        /**
         * 策略ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 优先级
         * @type {string || null}
         */
        this.SortId = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 策略详情
         * @type {Array.<Strategy> || null}
         */
        this.Strategies = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.Bypass = 'Bypass' in params ? params.Bypass : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Redirect = 'Redirect' in params ? params.Redirect : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.SortId = 'SortId' in params ? params.SortId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Strategies) {
            this.Strategies = new Array();
            for (let z in params.Strategies) {
                let obj = new Strategy();
                obj.deserialize(params.Strategies[z]);
                this.Strategies.push(obj);
            }
        }

    }
}

/**
 * CreateAttackDownloadTask请求参数结构体
 * @class
 */
class CreateAttackDownloadTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名，所有域名填写all
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 查询起始时间
         * @type {string || null}
         */
        this.FromTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.ToTime = null;

        /**
         * 下载任务名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 风险等级
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * 拦截状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 自定义策略ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 攻击者IP
         * @type {string || null}
         */
        this.AttackIp = null;

        /**
         * 攻击类型
         * @type {string || null}
         */
        this.AttackType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.FromTime = 'FromTime' in params ? params.FromTime : null;
        this.ToTime = 'ToTime' in params ? params.ToTime : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AttackIp = 'AttackIp' in params ? params.AttackIp : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;

    }
}

/**
 * CreateAttackDownloadTask返回参数结构体
 * @class
 */
class CreateAttackDownloadTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.Flow = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Flow = 'Flow' in params ? params.Flow : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSession返回参数结构体
 * @class
 */
class DeleteSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddCustomRule返回参数结构体
 * @class
 */
class AddCustomRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
         * @type {ResponseCode || null}
         */
        this.Success = null;

        /**
         * 添加成功的规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new ResponseCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DeleteAttackDownloadRecordRequest: DeleteAttackDownloadRecordRequest,
    ResponseCode: ResponseCode,
    AddCustomRuleRequest: AddCustomRuleRequest,
    Strategy: Strategy,
    ModifyCustomRuleStatusRequest: ModifyCustomRuleStatusRequest,
    DescribeCustomRulesRequest: DescribeCustomRulesRequest,
    DeleteSessionRequest: DeleteSessionRequest,
    DescribeCustomRulesPagingInfo: DescribeCustomRulesPagingInfo,
    DeleteDownloadRecordResponse: DeleteDownloadRecordResponse,
    DescribeCustomRulesResponse: DescribeCustomRulesResponse,
    DeleteDownloadRecordRequest: DeleteDownloadRecordRequest,
    ModifyCustomRuleStatusResponse: ModifyCustomRuleStatusResponse,
    DescribeUserClbWafRegionsRequest: DescribeUserClbWafRegionsRequest,
    DescribeUserClbWafRegionsResponse: DescribeUserClbWafRegionsResponse,
    DeleteAttackDownloadRecordResponse: DeleteAttackDownloadRecordResponse,
    DescribeCustomRulesRspRuleListItem: DescribeCustomRulesRspRuleListItem,
    CreateAttackDownloadTaskRequest: CreateAttackDownloadTaskRequest,
    CreateAttackDownloadTaskResponse: CreateAttackDownloadTaskResponse,
    DeleteSessionResponse: DeleteSessionResponse,
    AddCustomRuleResponse: AddCustomRuleResponse,

}
