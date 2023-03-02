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
 * DescribeCaptchaOperData返回参数结构体
 * @class
 */
class DescribeCaptchaOperDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功返回 0 其它失败
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 用户操作数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CaptchaOperDataRes || null}
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
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;

        if (params.Data) {
            let obj = new CaptchaOperDataRes();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaOperData方法 拦截情况type = 2 返回的数据结构
 * @class
 */
class CaptchaOperDataInterceptUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.DateKey = null;

        /**
         * 停止验证数量
         * @type {number || null}
         */
        this.AllStopCnt = null;

        /**
         * 图片停止加载数量
         * @type {number || null}
         */
        this.PicStopCnt = null;

        /**
         * 策略拦截数量
         * @type {number || null}
         */
        this.StrategyStopCnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DateKey = 'DateKey' in params ? params.DateKey : null;
        this.AllStopCnt = 'AllStopCnt' in params ? params.AllStopCnt : null;
        this.PicStopCnt = 'PicStopCnt' in params ? params.PicStopCnt : null;
        this.StrategyStopCnt = 'StrategyStopCnt' in params ? params.StrategyStopCnt : null;

    }
}

/**
 * DescribeCaptchaOperData方法 尝试次数分布 type = 4
 * @class
 */
class CaptchaOperDataTryTimesDistributeUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 尝试次数
         * @type {number || null}
         */
        this.TryCount = null;

        /**
         * 用户请求数量
         * @type {number || null}
         */
        this.UserCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TryCount = 'TryCount' in params ? params.TryCount : null;
        this.UserCount = 'UserCount' in params ? params.UserCount : null;

    }
}

/**
 * DescribeCaptchaMiniOperData返回参数结构体
 * @class
 */
class DescribeCaptchaMiniOperDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功返回 0 其它失败
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 用户操作数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CaptchaOperDataRes || null}
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
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;

        if (params.Data) {
            let obj = new CaptchaOperDataRes();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTotalTicketStatistics请求参数结构体
 * @class
 */
class GetTotalTicketStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTimeStr = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTimeStr = null;

        /**
         * 查询粒度
分钟：“1”
小时：“2”
天：“3”
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
        this.StartTimeStr = 'StartTimeStr' in params ? params.StartTimeStr : null;
        this.EndTimeStr = 'EndTimeStr' in params ? params.EndTimeStr : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;

    }
}

/**
 * DescribeCaptchaMiniDataSum返回参数结构体
 * @class
 */
class DescribeCaptchaMiniDataSumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GetSum = null;

        /**
         * 请求验证成功量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VfySuccSum = null;

        /**
         * 请求验证量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VfySum = null;

        /**
         * 拦截攻击量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttackSum = null;

        /**
         * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 成功返回0  其它失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 票据校验总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CheckTicketSum = null;

        /**
         * 票据验证通过量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TicketThroughputSum = null;

        /**
         * 票据验证拦截量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TicketInterceptSum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GetSum = 'GetSum' in params ? params.GetSum : null;
        this.VfySuccSum = 'VfySuccSum' in params ? params.VfySuccSum : null;
        this.VfySum = 'VfySum' in params ? params.VfySum : null;
        this.AttackSum = 'AttackSum' in params ? params.AttackSum : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CheckTicketSum = 'CheckTicketSum' in params ? params.CheckTicketSum : null;
        this.TicketThroughputSum = 'TicketThroughputSum' in params ? params.TicketThroughputSum : null;
        this.TicketInterceptSum = 'TicketInterceptSum' in params ? params.TicketInterceptSum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRequestStatistics返回参数结构体
 * @class
 */
class GetRequestStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询后数据块
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CaptchaStatisticObj || null}
         */
        this.Data = null;

        /**
         * 验证码返回码
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 验证码返回信息
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new CaptchaStatisticObj();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRequestStatistics请求参数结构体
 * @class
 */
class GetRequestStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码AppId
         * @type {string || null}
         */
        this.CaptchaAppId = null;

        /**
         * 开始时间字符串
         * @type {string || null}
         */
        this.StartTimeStr = null;

        /**
         * 结束时间字符串
         * @type {string || null}
         */
        this.EndTimeStr = null;

        /**
         * 查询粒度
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
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.StartTimeStr = 'StartTimeStr' in params ? params.StartTimeStr : null;
        this.EndTimeStr = 'EndTimeStr' in params ? params.EndTimeStr : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;

    }
}

/**
 * 拦截策略返回信息
 * @class
 */
class OutputManageMarketingRiskValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号 ID。对应输入参数： AccountType 是 1 时，对应 QQ 的 OpenID。
AccountType 是 2 时，对应微信的 OpenID/UnionID。
AccountType 是 4 时，对应手机号。
AccountType 是 8 时，对应 imei、idfa、imeiMD5 或者 idfaMD5。
AccountType 是 0 时，对应账号信息。
AccountType 是 10004 时，对应手机号的 MD5。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 操作时间戳，单位秒（对应输入参数）。 
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PostTime = null;

        /**
         * 对应输入参数，AccountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录 后关联业务自身的账号 ID。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssociateAccount = null;

        /**
         * 业务详情。 注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 风险值 pass : 无恶意
review：需要人工审核
reject：拒绝，高风险恶意
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * 风险类型，请查看下面详细说明 注意：此字段可能返回 null，表示取不到有效值。
账号风险	
        账号信用低	1	账号近期存在因恶意被处罚历史，网络低活跃，被举报等因素
	疑似 低活跃账号	11	账号活跃度与正常用户有差异
	垃圾账号	2	疑似批量注册小号，近期存在严重违规或大量举报
	疑似小号	21	账号有疑似线上养号，小号等行为
	疑似 违规账号	22	账号曾有违规行为、曾被举报过、曾因违规被处罚过等
	无效账号	3	送检账号参数无法成功解析，请检查微信 openid 是否有
	黑名单	4	该账号在业务侧有过拉黑记录
	白名单 	5	业务自行有添加过白名单记录
行为风险	
        批量操作	101	存在 ip/设备/环境等因素的聚集性异常
	疑似 IP 属性聚集 	1011	出现 IP 聚集
	疑似 设备属性聚集 	1012	出现设备聚集
	自动机 	103	疑似自动机批量请求
	微信登录态无效 	104	检查 wxtoken 参数，是否已经失效
环境风险	
        环境异常 	201	操作 ip/设备/环境存在异常。当前 ip 为非常用 ip 或恶意 ip 段
	疑似 非常用IP请求 	2011	当前请求 IP 非该账号常用 IP
	疑似 IP 异常 	2012	使用 idc 机房 ip 或 使用代理 ip 或 使用恶意 ip 
	非公网有效 ip 	205	传进来的 IP 地址为内网 ip 地址或者 ip 保留地
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.RiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.PostTime = 'PostTime' in params ? params.PostTime : null;
        this.AssociateAccount = 'AssociateAccount' in params ? params.AssociateAccount : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RiskType = 'RiskType' in params ? params.RiskType : null;

    }
}

/**
 * DescribeCaptchaOperData 接口 返回数据类型集合
 * @class
 */
class CaptchaOperDataRes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码加载耗时数据返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CaptchaOperDataLoadTimeUnit> || null}
         */
        this.OperDataLoadTimeUnitArray = null;

        /**
         * 验证码拦截情况数据返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CaptchaOperDataInterceptUnit> || null}
         */
        this.OperDataInterceptUnitArray = null;

        /**
         * 验证码尝试次数数据返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CaptchaOperDataTryTimesUnit> || null}
         */
        this.OperDataTryTimesUnitArray = null;

        /**
         * 验证码尝试次数分布数据返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CaptchaOperDataTryTimesDistributeUnit> || null}
         */
        this.OperDataTryTimesDistributeUnitArray = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OperDataLoadTimeUnitArray) {
            this.OperDataLoadTimeUnitArray = new Array();
            for (let z in params.OperDataLoadTimeUnitArray) {
                let obj = new CaptchaOperDataLoadTimeUnit();
                obj.deserialize(params.OperDataLoadTimeUnitArray[z]);
                this.OperDataLoadTimeUnitArray.push(obj);
            }
        }

        if (params.OperDataInterceptUnitArray) {
            this.OperDataInterceptUnitArray = new Array();
            for (let z in params.OperDataInterceptUnitArray) {
                let obj = new CaptchaOperDataInterceptUnit();
                obj.deserialize(params.OperDataInterceptUnitArray[z]);
                this.OperDataInterceptUnitArray.push(obj);
            }
        }

        if (params.OperDataTryTimesUnitArray) {
            this.OperDataTryTimesUnitArray = new Array();
            for (let z in params.OperDataTryTimesUnitArray) {
                let obj = new CaptchaOperDataTryTimesUnit();
                obj.deserialize(params.OperDataTryTimesUnitArray[z]);
                this.OperDataTryTimesUnitArray.push(obj);
            }
        }

        if (params.OperDataTryTimesDistributeUnitArray) {
            this.OperDataTryTimesDistributeUnitArray = new Array();
            for (let z in params.OperDataTryTimesDistributeUnitArray) {
                let obj = new CaptchaOperDataTryTimesDistributeUnit();
                obj.deserialize(params.OperDataTryTimesDistributeUnitArray[z]);
                this.OperDataTryTimesDistributeUnitArray.push(obj);
            }
        }

    }
}

/**
 * GetTicketStatistics请求参数结构体
 * @class
 */
class GetTicketStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码AppId
         * @type {string || null}
         */
        this.CaptchaAppId = null;

        /**
         * 开始时间字符串
         * @type {string || null}
         */
        this.StartTimeStr = null;

        /**
         * 结束时间字符串
         * @type {string || null}
         */
        this.EndTimeStr = null;

        /**
         * 查询粒度
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
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.StartTimeStr = 'StartTimeStr' in params ? params.StartTimeStr : null;
        this.EndTimeStr = 'EndTimeStr' in params ? params.EndTimeStr : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;

    }
}

/**
 * DescribeCaptchaTicketData 返回的数据结构
 * @class
 */
class TicketInterceptUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.DateKey = null;

        /**
         * 票据验证拦截量
         * @type {number || null}
         */
        this.Intercept = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DateKey = 'DateKey' in params ? params.DateKey : null;
        this.Intercept = 'Intercept' in params ? params.Intercept : null;

    }
}

/**
 * DescribeCaptchaUserAllAppId请求参数结构体
 * @class
 */
class DescribeCaptchaUserAllAppIdRequest extends  AbstractModel {
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
 * GetTotalTicketStatistics返回参数结构体
 * @class
 */
class GetTotalTicketStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CaptchaStatisticObj || null}
         */
        this.Data = null;

        /**
         * 返回码
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 返回信息
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new CaptchaStatisticObj();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 验证码票据校验趋势obj
 * @class
 */
class TicketCheckTrendObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间参数
         * @type {string || null}
         */
        this.Ftime = null;

        /**
         * 票据校验量
         * @type {number || null}
         */
        this.TicketCount = null;

        /**
         * 票据通过量
         * @type {number || null}
         */
        this.TicketThroughput = null;

        /**
         * 票据拦截量
         * @type {number || null}
         */
        this.TicketIntercept = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ftime = 'Ftime' in params ? params.Ftime : null;
        this.TicketCount = 'TicketCount' in params ? params.TicketCount : null;
        this.TicketThroughput = 'TicketThroughput' in params ? params.TicketThroughput : null;
        this.TicketIntercept = 'TicketIntercept' in params ? params.TicketIntercept : null;

    }
}

/**
 * DescribeCaptchaMiniData返回参数结构体
 * @class
 */
class DescribeCaptchaMiniDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码 0 成功 其它失败
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 数据数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CaptchaQueryData> || null}
         */
        this.Data = null;

        /**
         * 返回信息描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CaptchaQueryData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 拦截率趋势obj
 * @class
 */
class InterceptPerTrendObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间参数
         * @type {string || null}
         */
        this.Ftime = null;

        /**
         * 拦截率
         * @type {number || null}
         */
        this.RequestInterceptPer = null;

        /**
         * 答案拦截率
         * @type {number || null}
         */
        this.AnswerInterceptPer = null;

        /**
         * 策略拦截率
         * @type {number || null}
         */
        this.PolicyInterceptPer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ftime = 'Ftime' in params ? params.Ftime : null;
        this.RequestInterceptPer = 'RequestInterceptPer' in params ? params.RequestInterceptPer : null;
        this.AnswerInterceptPer = 'AnswerInterceptPer' in params ? params.AnswerInterceptPer : null;
        this.PolicyInterceptPer = 'PolicyInterceptPer' in params ? params.PolicyInterceptPer : null;

    }
}

/**
 * DescribeCaptchaMiniRiskResult请求参数结构体
 * @class
 */
class DescribeCaptchaMiniRiskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定填值：9（滑块验证码）
         * @type {number || null}
         */
        this.CaptchaType = null;

        /**
         * 验证码返回给用户的票据
         * @type {string || null}
         */
        this.Ticket = null;

        /**
         * 业务侧获取到的验证码使用者的外网IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 验证码应用APPID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 用于服务器端校验验证码票据的验证密钥，请妥善保密，请勿泄露给第三方
         * @type {string || null}
         */
        this.AppSecretKey = null;

        /**
         * 业务 ID，网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据
         * @type {number || null}
         */
        this.BusinessId = null;

        /**
         * 场景 ID，网站或应用的业务下有多个场景使用此服务，通过此 ID 区分统计数据
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * mac 地址或设备唯一标识
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * 手机设备号
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * 验证场景：1 活动防刷场景，2 登录保护场景，3 注册保护场景。根据需求选择场景参数。
         * @type {number || null}
         */
        this.SceneCode = null;

        /**
         * 用户操作来源的微信开放账号
         * @type {string || null}
         */
        this.WeChatOpenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaType = 'CaptchaType' in params ? params.CaptchaType : null;
        this.Ticket = 'Ticket' in params ? params.Ticket : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppSecretKey = 'AppSecretKey' in params ? params.AppSecretKey : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.SceneCode = 'SceneCode' in params ? params.SceneCode : null;
        this.WeChatOpenId = 'WeChatOpenId' in params ? params.WeChatOpenId : null;

    }
}

/**
 * UpdateCaptchaAppIdInfo返回参数结构体
 * @class
 */
class UpdateCaptchaAppIdInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码 0 成功，其它失败
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 返回操作信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用户注册的APPID和应用名称对象
 * @class
 */
class CaptchaUserAllAppId extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码应用ID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 注册应用名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 腾讯云APPID
         * @type {number || null}
         */
        this.TcAppId = null;

        /**
         * 渠道信息
         * @type {string || null}
         */
        this.ChannelInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.TcAppId = 'TcAppId' in params ? params.TcAppId : null;
        this.ChannelInfo = 'ChannelInfo' in params ? params.ChannelInfo : null;

    }
}

/**
 * DescribeCaptchaDataSum返回参数结构体
 * @class
 */
class DescribeCaptchaDataSumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求总量
         * @type {number || null}
         */
        this.GetSum = null;

        /**
         * 请求验证成功量
         * @type {number || null}
         */
        this.VfySuccSum = null;

        /**
         * 请求验证量
         * @type {number || null}
         */
        this.VfySum = null;

        /**
         * 拦截攻击量
         * @type {number || null}
         */
        this.AttackSum = null;

        /**
         * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 成功返回0  其它失败
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 票据校验总量
         * @type {number || null}
         */
        this.CheckTicketSum = null;

        /**
         * 票据验证通过量
         * @type {number || null}
         */
        this.TicketThroughputSum = null;

        /**
         * 票据验证拦截量
         * @type {number || null}
         */
        this.TicketInterceptSum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GetSum = 'GetSum' in params ? params.GetSum : null;
        this.VfySuccSum = 'VfySuccSum' in params ? params.VfySuccSum : null;
        this.VfySum = 'VfySum' in params ? params.VfySum : null;
        this.AttackSum = 'AttackSum' in params ? params.AttackSum : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CheckTicketSum = 'CheckTicketSum' in params ? params.CheckTicketSum : null;
        this.TicketThroughputSum = 'TicketThroughputSum' in params ? params.TicketThroughputSum : null;
        this.TicketInterceptSum = 'TicketInterceptSum' in params ? params.TicketInterceptSum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaTicketData 返回的数据结构
 * @class
 */
class TicketThroughUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.DateKey = null;

        /**
         * 票据验证的通过量
         * @type {number || null}
         */
        this.Through = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DateKey = 'DateKey' in params ? params.DateKey : null;
        this.Through = 'Through' in params ? params.Through : null;

    }
}

/**
 * DescribeCaptchaTicketData请求参数结构体
 * @class
 */
class DescribeCaptchaTicketDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码应用ID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 查询开始时间 例如：20200909
         * @type {number || null}
         */
        this.Start = null;

        /**
         * 查询结束时间 例如：20220314
         * @type {number || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;

    }
}

/**
 * DescribeCaptchaResult返回参数结构体
 * @class
 */
class DescribeCaptchaResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1 OK 验证通过
7 captcha no match 传入的Randstr不合法，请检查Randstr是否与前端返回的Randstr一致
8 ticket expired 传入的Ticket已过期（Ticket有效期5分钟），请重新生成Ticket、Randstr进行校验
9 ticket reused 传入的Ticket被重复使用，请重新生成Ticket、Randstr进行校验
15 decrypt fail 传入的Ticket不合法，请检查Ticket是否与前端返回的Ticket一致
16 appid-ticket mismatch 传入的CaptchaAppId错误，请检查CaptchaAppId是否与前端传入的CaptchaAppId一致，并且保障CaptchaAppId是从验证码控制台【验证管理】->【基础配置】中获取
21 diff 票据校验异常，可能的原因是（1）若Ticket包含terror前缀，一般是由于用户网络较差，导致前端自动容灾，而生成了容灾票据，业务侧可根据需要进行跳过或二次处理。（2）若Ticket不包含terror前缀，则是由于验证码风控系统发现请求有安全风险，业务侧可根据需要进行拦截。
100 appid-secretkey-ticket mismatch 参数校验错误，（1）请检查CaptchaAppId与AppSecretKey是否正确，CaptchaAppId、AppSecretKey需要在验证码控制台【验证管理】>【基础配置】中获取（2）请检查传入的Ticket是否由传入的CaptchaAppId生成
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 状态描述及验证错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 无感验证模式下，该参数返回验证结果：
EvilLevel=0 请求无恶意
EvilLevel=100 请求有恶意
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EvilLevel = null;

        /**
         * 前端获取验证码时间，时间戳格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GetCaptchaTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.EvilLevel = 'EvilLevel' in params ? params.EvilLevel : null;
        this.GetCaptchaTime = 'GetCaptchaTime' in params ? params.GetCaptchaTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaMiniDataSum请求参数结构体
 * @class
 */
class DescribeCaptchaMiniDataSumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码应用ID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 查询开始时间
         * @type {number || null}
         */
        this.Start = null;

        /**
         * 查询结束时间
         * @type {number || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;

    }
}

/**
 * DescribeCaptchaOperData操作数据查询尝试次数 type = 3
 * @class
 */
class CaptchaOperDataTryTimesUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.DateKey = null;

        /**
         * 平均尝试次数
         * @type {Array.<number> || null}
         */
        this.CntPerPass = null;

        /**
         * market平均尝试次数
         * @type {number || null}
         */
        this.MarketCntPerPass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DateKey = 'DateKey' in params ? params.DateKey : null;
        this.CntPerPass = 'CntPerPass' in params ? params.CntPerPass : null;
        this.MarketCntPerPass = 'MarketCntPerPass' in params ? params.MarketCntPerPass : null;

    }
}

/**
 * DescribeCaptchaOperData请求参数结构体
 * @class
 */
class DescribeCaptchaOperDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码应用ID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 查询开始时间
         * @type {number || null}
         */
        this.Start = null;

        /**
         * 查询类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 查询结束时间
         * @type {number || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.End = 'End' in params ? params.End : null;

    }
}

/**
 * DescribeCaptchaDataSum请求参数结构体
 * @class
 */
class DescribeCaptchaDataSumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码应用ID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 查询开始时间
         * @type {number || null}
         */
        this.Start = null;

        /**
         * 查询结束时间
         * @type {number || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;

    }
}

/**
 * DescribeCaptchaMiniRiskResult返回参数结构体
 * @class
 */
class DescribeCaptchaMiniRiskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1 ticket verification succeeded 票据验证成功
7 CaptchaAppId does not match 票据与验证码应用APPID不匹配
8 ticket expired 票据超时
10 ticket format error 票据格式不正确
15 ticket decryption failed 票据解密失败
16 CaptchaAppId wrong format 检查验证码应用APPID错误
21 ticket error 票据验证错误
25 bad visitor 策略拦截
26 system internal error 系统内部错误
100 param err 参数校验错误
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 状态描述及验证错误信息
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 拦截策略返回信息
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputManageMarketingRiskValue || null}
         */
        this.ManageMarketingRiskValue = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;

        if (params.ManageMarketingRiskValue) {
            let obj = new OutputManageMarketingRiskValue();
            obj.deserialize(params.ManageMarketingRiskValue)
            this.ManageMarketingRiskValue = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTicketStatistics返回参数结构体
 * @class
 */
class GetTicketStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询后数据块
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CaptchaStatisticObj || null}
         */
        this.Data = null;

        /**
         * 验证码返回码
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 验证码返回信息
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new CaptchaStatisticObj();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTotalRequestStatistics请求参数结构体
 * @class
 */
class GetTotalRequestStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间字符串
         * @type {string || null}
         */
        this.StartTimeStr = null;

        /**
         * 结束时间字符串
         * @type {string || null}
         */
        this.EndTimeStr = null;

        /**
         * 查询粒度
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
        this.StartTimeStr = 'StartTimeStr' in params ? params.StartTimeStr : null;
        this.EndTimeStr = 'EndTimeStr' in params ? params.EndTimeStr : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;

    }
}

/**
 * DescribeCaptchaTicketData 返回的数据结构
 * @class
 */
class TicketAmountUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.DateKey = null;

        /**
         * 票据验证总量
         * @type {number || null}
         */
        this.Amount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DateKey = 'DateKey' in params ? params.DateKey : null;
        this.Amount = 'Amount' in params ? params.Amount : null;

    }
}

/**
 * GetTotalRequestStatistics返回参数结构体
 * @class
 */
class GetTotalRequestStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询后数据块
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CaptchaStatisticObj || null}
         */
        this.Data = null;

        /**
         * 验证码返回码
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 验证码返回信息
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new CaptchaStatisticObj();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 该类型为DescribeCaptchaData 方法返回数据类型
 * @class
 */
class CaptchaQueryData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量
         * @type {number || null}
         */
        this.Cnt = null;

        /**
         * 时间
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cnt = 'Cnt' in params ? params.Cnt : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * 验证码请求趋势图obj
 * @class
 */
class RequestTrendObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间参数
         * @type {string || null}
         */
        this.Ftime = null;

        /**
         * 请求量
         * @type {number || null}
         */
        this.RequestAction = null;

        /**
         * 验证量
         * @type {number || null}
         */
        this.RequestVerify = null;

        /**
         * 通过量
         * @type {number || null}
         */
        this.RequestThroughput = null;

        /**
         * 拦截量
         * @type {number || null}
         */
        this.RequestIntercept = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ftime = 'Ftime' in params ? params.Ftime : null;
        this.RequestAction = 'RequestAction' in params ? params.RequestAction : null;
        this.RequestVerify = 'RequestVerify' in params ? params.RequestVerify : null;
        this.RequestThroughput = 'RequestThroughput' in params ? params.RequestThroughput : null;
        this.RequestIntercept = 'RequestIntercept' in params ? params.RequestIntercept : null;

    }
}

/**
 * DescribeCaptchaData返回参数结构体
 * @class
 */
class DescribeCaptchaDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码 0 成功 其它失败
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 数据数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CaptchaQueryData> || null}
         */
        this.Data = null;

        /**
         * 返回信息描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CaptchaQueryData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaResult请求参数结构体
 * @class
 */
class DescribeCaptchaResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定填值：9。可在控制台配置不同验证码类型。
         * @type {number || null}
         */
        this.CaptchaType = null;

        /**
         * 前端回调函数返回的用户验证票据
         * @type {string || null}
         */
        this.Ticket = null;

        /**
         * 业务侧获取到的验证码使用者的外网IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 前端回调函数返回的随机字符串
         * @type {string || null}
         */
        this.Randstr = null;

        /**
         * 验证码应用ID。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到CaptchaAppId。
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 验证码应用密钥。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到AppSecretKey。AppSecretKey属于服务器端校验验证码票据的密钥，请妥善保密，请勿泄露给第三方。
         * @type {string || null}
         */
        this.AppSecretKey = null;

        /**
         * 业务 ID，网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据
         * @type {number || null}
         */
        this.BusinessId = null;

        /**
         * 场景 ID，网站或应用的业务下有多个场景使用此服务，通过此 ID 区分统计数据
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * mac 地址或设备唯一标识
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * 手机设备号
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * 是否返回前端获取验证码时间，取值1：需要返回
         * @type {number || null}
         */
        this.NeedGetCaptchaTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaType = 'CaptchaType' in params ? params.CaptchaType : null;
        this.Ticket = 'Ticket' in params ? params.Ticket : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Randstr = 'Randstr' in params ? params.Randstr : null;
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppSecretKey = 'AppSecretKey' in params ? params.AppSecretKey : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.NeedGetCaptchaTime = 'NeedGetCaptchaTime' in params ? params.NeedGetCaptchaTime : null;

    }
}

/**
 * 验证码统计图Obj
 * @class
 */
class CaptchaStatisticObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求总量
         * @type {number || null}
         */
        this.ActionTotal = null;

        /**
         * 验证总量
         * @type {number || null}
         */
        this.VerifyTotal = null;

        /**
         * 验证通过总量
         * @type {number || null}
         */
        this.VerifyThroughTotal = null;

        /**
         * 验证拦截总量
         * @type {number || null}
         */
        this.VerifyInterceptTotal = null;

        /**
         * 票据校验总量
         * @type {number || null}
         */
        this.TicketTotal = null;

        /**
         * 票据通过总量
         * @type {number || null}
         */
        this.TicketThroughTotal = null;

        /**
         * 票据拦截总量
         * @type {number || null}
         */
        this.TicketInterceptTotal = null;

        /**
         * 请求趋势图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RequestTrendObj> || null}
         */
        this.RequestTrend = null;

        /**
         * 拦截率趋势图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InterceptPerTrendObj> || null}
         */
        this.InterceptPerTrend = null;

        /**
         * 票据校验趋势图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TicketCheckTrendObj> || null}
         */
        this.TicketCheckTrend = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionTotal = 'ActionTotal' in params ? params.ActionTotal : null;
        this.VerifyTotal = 'VerifyTotal' in params ? params.VerifyTotal : null;
        this.VerifyThroughTotal = 'VerifyThroughTotal' in params ? params.VerifyThroughTotal : null;
        this.VerifyInterceptTotal = 'VerifyInterceptTotal' in params ? params.VerifyInterceptTotal : null;
        this.TicketTotal = 'TicketTotal' in params ? params.TicketTotal : null;
        this.TicketThroughTotal = 'TicketThroughTotal' in params ? params.TicketThroughTotal : null;
        this.TicketInterceptTotal = 'TicketInterceptTotal' in params ? params.TicketInterceptTotal : null;

        if (params.RequestTrend) {
            this.RequestTrend = new Array();
            for (let z in params.RequestTrend) {
                let obj = new RequestTrendObj();
                obj.deserialize(params.RequestTrend[z]);
                this.RequestTrend.push(obj);
            }
        }

        if (params.InterceptPerTrend) {
            this.InterceptPerTrend = new Array();
            for (let z in params.InterceptPerTrend) {
                let obj = new InterceptPerTrendObj();
                obj.deserialize(params.InterceptPerTrend[z]);
                this.InterceptPerTrend.push(obj);
            }
        }

        if (params.TicketCheckTrend) {
            this.TicketCheckTrend = new Array();
            for (let z in params.TicketCheckTrend) {
                let obj = new TicketCheckTrendObj();
                obj.deserialize(params.TicketCheckTrend[z]);
                this.TicketCheckTrend.push(obj);
            }
        }

    }
}

/**
 * UpdateCaptchaAppIdInfo请求参数结构体
 * @class
 */
class UpdateCaptchaAppIdInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码应用ID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 应用名
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 域名限制
         * @type {string || null}
         */
        this.DomainLimit = null;

        /**
         * 场景类型
         * @type {number || null}
         */
        this.SceneType = null;

        /**
         * 验证码类型
         * @type {number || null}
         */
        this.CapType = null;

        /**
         * 风险级别
         * @type {number || null}
         */
        this.EvilInterceptGrade = null;

        /**
         * 智能检测
         * @type {number || null}
         */
        this.SmartVerify = null;

        /**
         * 开启智能引擎
         * @type {number || null}
         */
        this.SmartEngine = null;

        /**
         * web风格
         * @type {string || null}
         */
        this.SchemeColor = null;

        /**
         * 语言
         * @type {number || null}
         */
        this.CaptchaLanguage = null;

        /**
         * 告警邮箱
         * @type {string || null}
         */
        this.MailAlarm = null;

        /**
         * 是否全屏
         * @type {number || null}
         */
        this.TopFullScreen = null;

        /**
         * 流量限制
         * @type {number || null}
         */
        this.TrafficThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainLimit = 'DomainLimit' in params ? params.DomainLimit : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.CapType = 'CapType' in params ? params.CapType : null;
        this.EvilInterceptGrade = 'EvilInterceptGrade' in params ? params.EvilInterceptGrade : null;
        this.SmartVerify = 'SmartVerify' in params ? params.SmartVerify : null;
        this.SmartEngine = 'SmartEngine' in params ? params.SmartEngine : null;
        this.SchemeColor = 'SchemeColor' in params ? params.SchemeColor : null;
        this.CaptchaLanguage = 'CaptchaLanguage' in params ? params.CaptchaLanguage : null;
        this.MailAlarm = 'MailAlarm' in params ? params.MailAlarm : null;
        this.TopFullScreen = 'TopFullScreen' in params ? params.TopFullScreen : null;
        this.TrafficThreshold = 'TrafficThreshold' in params ? params.TrafficThreshold : null;

    }
}

/**
 * 操作数据查询方法DescribeCaptchaOperData 的返回结果，安全验证码加载耗时type = 1
 * @class
 */
class CaptchaOperDataLoadTimeUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.DateKey = null;

        /**
         * Market加载时间
         * @type {number || null}
         */
        this.MarketLoadTime = null;

        /**
         * AppId加载时间
         * @type {number || null}
         */
        this.AppIdLoadTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DateKey = 'DateKey' in params ? params.DateKey : null;
        this.MarketLoadTime = 'MarketLoadTime' in params ? params.MarketLoadTime : null;
        this.AppIdLoadTime = 'AppIdLoadTime' in params ? params.AppIdLoadTime : null;

    }
}

/**
 * DescribeCaptchaMiniOperData请求参数结构体
 * @class
 */
class DescribeCaptchaMiniOperDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码应用ID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 查询开始时间
         * @type {number || null}
         */
        this.Start = null;

        /**
         * 查询类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 查询结束时间
         * @type {number || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.End = 'End' in params ? params.End : null;

    }
}

/**
 * DescribeCaptchaAppIdInfo请求参数结构体
 * @class
 */
class DescribeCaptchaAppIdInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码应用注册APPID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;

    }
}

/**
 * DescribeCaptchaAppIdInfo返回参数结构体
 * @class
 */
class DescribeCaptchaAppIdInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 界面风格
         * @type {string || null}
         */
        this.SchemeColor = null;

        /**
         * 语言
         * @type {number || null}
         */
        this.Language = null;

        /**
         * 场景
         * @type {number || null}
         */
        this.SceneType = null;

        /**
         * 防控风险等级
         * @type {number || null}
         */
        this.EvilInterceptGrade = null;

        /**
         * 智能验证
         * @type {number || null}
         */
        this.SmartVerify = null;

        /**
         * 智能引擎
         * @type {number || null}
         */
        this.SmartEngine = null;

        /**
         * 验证码类型
         * @type {number || null}
         */
        this.CapType = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 域名限制
         * @type {string || null}
         */
        this.DomainLimit = null;

        /**
         * 邮件告警
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.MailAlarm = null;

        /**
         * 流量控制
         * @type {number || null}
         */
        this.TrafficThreshold = null;

        /**
         * 加密key
         * @type {string || null}
         */
        this.EncryptKey = null;

        /**
         * 是否全屏
         * @type {number || null}
         */
        this.TopFullScreen = null;

        /**
         * 成功返回0 其它失败
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 返回操作信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SchemeColor = 'SchemeColor' in params ? params.SchemeColor : null;
        this.Language = 'Language' in params ? params.Language : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.EvilInterceptGrade = 'EvilInterceptGrade' in params ? params.EvilInterceptGrade : null;
        this.SmartVerify = 'SmartVerify' in params ? params.SmartVerify : null;
        this.SmartEngine = 'SmartEngine' in params ? params.SmartEngine : null;
        this.CapType = 'CapType' in params ? params.CapType : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainLimit = 'DomainLimit' in params ? params.DomainLimit : null;
        this.MailAlarm = 'MailAlarm' in params ? params.MailAlarm : null;
        this.TrafficThreshold = 'TrafficThreshold' in params ? params.TrafficThreshold : null;
        this.EncryptKey = 'EncryptKey' in params ? params.EncryptKey : null;
        this.TopFullScreen = 'TopFullScreen' in params ? params.TopFullScreen : null;
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaUserAllAppId返回参数结构体
 * @class
 */
class DescribeCaptchaUserAllAppIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户注册的所有Appid和应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CaptchaUserAllAppId> || null}
         */
        this.Data = null;

        /**
         * 成功返回 0  其它失败
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 返回操作信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CaptchaUserAllAppId();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaData请求参数结构体
 * @class
 */
class DescribeCaptchaDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码应用ID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 查询开始时间
         * @type {number || null}
         */
        this.Start = null;

        /**
         * 查询结束时间
         * @type {number || null}
         */
        this.End = null;

        /**
         * 查询类型
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
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeCaptchaMiniResult请求参数结构体
 * @class
 */
class DescribeCaptchaMiniResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定填值：9（滑块验证码）
         * @type {number || null}
         */
        this.CaptchaType = null;

        /**
         * 验证码返回给用户的票据
         * @type {string || null}
         */
        this.Ticket = null;

        /**
         * 业务侧获取到的验证码使用者的外网IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 验证码应用ID。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到CaptchaAppId。
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 验证码应用密钥。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到AppSecretKey。AppSecretKey属于服务器端校验验证码票据的密钥，请妥善保密，请勿泄露给第三方。
         * @type {string || null}
         */
        this.AppSecretKey = null;

        /**
         * 业务 ID，网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据
         * @type {number || null}
         */
        this.BusinessId = null;

        /**
         * 场景 ID，网站或应用的业务下有多个场景使用此服务，通过此 ID 区分统计数据
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * mac 地址或设备唯一标识
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * 手机设备号
         * @type {string || null}
         */
        this.Imei = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaType = 'CaptchaType' in params ? params.CaptchaType : null;
        this.Ticket = 'Ticket' in params ? params.Ticket : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppSecretKey = 'AppSecretKey' in params ? params.AppSecretKey : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.Imei = 'Imei' in params ? params.Imei : null;

    }
}

/**
 * DescribeCaptchaTicketData返回参数结构体
 * @class
 */
class DescribeCaptchaTicketDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功返回 0 其它失败
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 验证码票据信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CaptchaTicketDataRes || null}
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
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;

        if (params.Data) {
            let obj = new CaptchaTicketDataRes();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaTicketData 接口 返回数据类型集合
 * @class
 */
class CaptchaTicketDataRes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 票据验证总量返回
         * @type {Array.<TicketAmountUnit> || null}
         */
        this.TicketAmountArray = null;

        /**
         * 票据验证通过量返回
         * @type {Array.<TicketThroughUnit> || null}
         */
        this.TicketThroughArray = null;

        /**
         * 票据验证拦截量返回
         * @type {Array.<TicketInterceptUnit> || null}
         */
        this.TicketInterceptArray = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TicketAmountArray) {
            this.TicketAmountArray = new Array();
            for (let z in params.TicketAmountArray) {
                let obj = new TicketAmountUnit();
                obj.deserialize(params.TicketAmountArray[z]);
                this.TicketAmountArray.push(obj);
            }
        }

        if (params.TicketThroughArray) {
            this.TicketThroughArray = new Array();
            for (let z in params.TicketThroughArray) {
                let obj = new TicketThroughUnit();
                obj.deserialize(params.TicketThroughArray[z]);
                this.TicketThroughArray.push(obj);
            }
        }

        if (params.TicketInterceptArray) {
            this.TicketInterceptArray = new Array();
            for (let z in params.TicketInterceptArray) {
                let obj = new TicketInterceptUnit();
                obj.deserialize(params.TicketInterceptArray[z]);
                this.TicketInterceptArray.push(obj);
            }
        }

    }
}

/**
 * DescribeCaptchaMiniResult返回参数结构体
 * @class
 */
class DescribeCaptchaMiniResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1       ticket verification succeeded     票据验证成功
7       CaptchaAppId does not match     票据与验证码应用APPID不匹配
8       ticket expired     票据超时
10     ticket format error     票据格式不正确
15     ticket decryption failed     票据解密失败
16     CaptchaAppId wrong format     检查验证码应用APPID错误
21     ticket error     票据验证错误
25     invalid ticket     无效票据
26     system internal error     系统内部错误
31 	   UnauthorizedOperation.Unauthorized	无有效套餐包/账户已欠费
100   param err     参数校验错误
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 状态描述及验证错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaMiniData请求参数结构体
 * @class
 */
class DescribeCaptchaMiniDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码应用ID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 查询开始时间 例如：2019112900
         * @type {number || null}
         */
        this.Start = null;

        /**
         * 查询结束时间 例如：2019112902
         * @type {number || null}
         */
        this.End = null;

        /**
         * 查询类型 安全验证码小程序插件分类查询数据接口，请求量type=0、通过量type=1、验证量type=2、拦截量type=3 小时级查询（五小时左右延迟）
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
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

module.exports = {
    DescribeCaptchaOperDataResponse: DescribeCaptchaOperDataResponse,
    CaptchaOperDataInterceptUnit: CaptchaOperDataInterceptUnit,
    CaptchaOperDataTryTimesDistributeUnit: CaptchaOperDataTryTimesDistributeUnit,
    DescribeCaptchaMiniOperDataResponse: DescribeCaptchaMiniOperDataResponse,
    GetTotalTicketStatisticsRequest: GetTotalTicketStatisticsRequest,
    DescribeCaptchaMiniDataSumResponse: DescribeCaptchaMiniDataSumResponse,
    GetRequestStatisticsResponse: GetRequestStatisticsResponse,
    GetRequestStatisticsRequest: GetRequestStatisticsRequest,
    OutputManageMarketingRiskValue: OutputManageMarketingRiskValue,
    CaptchaOperDataRes: CaptchaOperDataRes,
    GetTicketStatisticsRequest: GetTicketStatisticsRequest,
    TicketInterceptUnit: TicketInterceptUnit,
    DescribeCaptchaUserAllAppIdRequest: DescribeCaptchaUserAllAppIdRequest,
    GetTotalTicketStatisticsResponse: GetTotalTicketStatisticsResponse,
    TicketCheckTrendObj: TicketCheckTrendObj,
    DescribeCaptchaMiniDataResponse: DescribeCaptchaMiniDataResponse,
    InterceptPerTrendObj: InterceptPerTrendObj,
    DescribeCaptchaMiniRiskResultRequest: DescribeCaptchaMiniRiskResultRequest,
    UpdateCaptchaAppIdInfoResponse: UpdateCaptchaAppIdInfoResponse,
    CaptchaUserAllAppId: CaptchaUserAllAppId,
    DescribeCaptchaDataSumResponse: DescribeCaptchaDataSumResponse,
    TicketThroughUnit: TicketThroughUnit,
    DescribeCaptchaTicketDataRequest: DescribeCaptchaTicketDataRequest,
    DescribeCaptchaResultResponse: DescribeCaptchaResultResponse,
    DescribeCaptchaMiniDataSumRequest: DescribeCaptchaMiniDataSumRequest,
    CaptchaOperDataTryTimesUnit: CaptchaOperDataTryTimesUnit,
    DescribeCaptchaOperDataRequest: DescribeCaptchaOperDataRequest,
    DescribeCaptchaDataSumRequest: DescribeCaptchaDataSumRequest,
    DescribeCaptchaMiniRiskResultResponse: DescribeCaptchaMiniRiskResultResponse,
    GetTicketStatisticsResponse: GetTicketStatisticsResponse,
    GetTotalRequestStatisticsRequest: GetTotalRequestStatisticsRequest,
    TicketAmountUnit: TicketAmountUnit,
    GetTotalRequestStatisticsResponse: GetTotalRequestStatisticsResponse,
    CaptchaQueryData: CaptchaQueryData,
    RequestTrendObj: RequestTrendObj,
    DescribeCaptchaDataResponse: DescribeCaptchaDataResponse,
    DescribeCaptchaResultRequest: DescribeCaptchaResultRequest,
    CaptchaStatisticObj: CaptchaStatisticObj,
    UpdateCaptchaAppIdInfoRequest: UpdateCaptchaAppIdInfoRequest,
    CaptchaOperDataLoadTimeUnit: CaptchaOperDataLoadTimeUnit,
    DescribeCaptchaMiniOperDataRequest: DescribeCaptchaMiniOperDataRequest,
    DescribeCaptchaAppIdInfoRequest: DescribeCaptchaAppIdInfoRequest,
    DescribeCaptchaAppIdInfoResponse: DescribeCaptchaAppIdInfoResponse,
    DescribeCaptchaUserAllAppIdResponse: DescribeCaptchaUserAllAppIdResponse,
    DescribeCaptchaDataRequest: DescribeCaptchaDataRequest,
    DescribeCaptchaMiniResultRequest: DescribeCaptchaMiniResultRequest,
    DescribeCaptchaTicketDataResponse: DescribeCaptchaTicketDataResponse,
    CaptchaTicketDataRes: CaptchaTicketDataRes,
    DescribeCaptchaMiniResultResponse: DescribeCaptchaMiniResultResponse,
    DescribeCaptchaMiniDataRequest: DescribeCaptchaMiniDataRequest,

}
