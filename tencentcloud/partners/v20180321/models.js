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
 * 描述待审核代客信息
 * @class
 */
class AgentClientElem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理商账号ID
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 代客账号ID
         * @type {string || null}
         */
        this.ClientUin = null;

        /**
         * 代客申请时间戳
         * @type {number || null}
         */
        this.ApplyTime = null;

        /**
         * 代客类型，可能值为a/b/c
         * @type {string || null}
         */
        this.ClientFlag = null;

        /**
         * 代客邮箱，打码显示
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * 代客手机，打码显示
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 0表示不欠费，1表示欠费
         * @type {number || null}
         */
        this.HasOverdueBill = null;

        /**
         * 1:待代理商审核;2:待腾讯云审核
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
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.ApplyTime = 'ApplyTime' in params ? params.ApplyTime : null;
        this.ClientFlag = 'ClientFlag' in params ? params.ClientFlag : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.HasOverdueBill = 'HasOverdueBill' in params ? params.HasOverdueBill : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeAgentAuditedClients请求参数结构体
 * @class
 */
class DescribeAgentAuditedClientsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户账号ID
         * @type {string || null}
         */
        this.ClientUin = null;

        /**
         * 客户名称。由于涉及隐私，名称打码显示，故名称仅支持打码后的模糊搜索
         * @type {string || null}
         */
        this.ClientName = null;

        /**
         * 客户类型，a/b，类型定义参考代理商相关政策文档
         * @type {string || null}
         */
        this.ClientFlag = null;

        /**
         * ASC/DESC， 不区分大小写，按审核通过时间排序
         * @type {string || null}
         */
        this.OrderDirection = null;

        /**
         * 客户账号ID列表
         * @type {Array.<string> || null}
         */
        this.ClientUins = null;

        /**
         * 是否欠费。0：不欠费；1：欠费
         * @type {number || null}
         */
        this.HasOverdueBill = null;

        /**
         * 客户备注
         * @type {string || null}
         */
        this.ClientRemark = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 客户类型：可以为new(新拓)/assign(指定)/old(存量)/空
         * @type {string || null}
         */
        this.ClientType = null;

        /**
         * 项目类型：可以为self(自拓项目)/platform(合作项目)/repeat(复算项目  )/空
         * @type {string || null}
         */
        this.ProjectType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.ClientName = 'ClientName' in params ? params.ClientName : null;
        this.ClientFlag = 'ClientFlag' in params ? params.ClientFlag : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.ClientUins = 'ClientUins' in params ? params.ClientUins : null;
        this.HasOverdueBill = 'HasOverdueBill' in params ? params.HasOverdueBill : null;
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ClientType = 'ClientType' in params ? params.ClientType : null;
        this.ProjectType = 'ProjectType' in params ? params.ProjectType : null;

    }
}

/**
 * AgentPayDeals请求参数结构体
 * @class
 */
class AgentPayDealsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单所有者uin
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 代付标志，1：代付；0：自付
         * @type {number || null}
         */
        this.AgentPay = null;

        /**
         * 订单号数组
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.AgentPay = 'AgentPay' in params ? params.AgentPay : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * 返佣信息定义
 * @class
 */
class RebateInfoElem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理商账号ID
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 返佣月份，如2018-02
         * @type {string || null}
         */
        this.RebateMonth = null;

        /**
         * 返佣金额，单位分
         * @type {number || null}
         */
        this.Amt = null;

        /**
         * 月度业绩，单位分
         * @type {number || null}
         */
        this.MonthSales = null;

        /**
         * 季度业绩，单位分
         * @type {number || null}
         */
        this.QuarterSales = null;

        /**
         * NORMAL(正常)/HAS_OVERDUE_BILL(欠费)/NO_CONTRACT(缺合同)
         * @type {string || null}
         */
        this.ExceptionFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RebateMonth = 'RebateMonth' in params ? params.RebateMonth : null;
        this.Amt = 'Amt' in params ? params.Amt : null;
        this.MonthSales = 'MonthSales' in params ? params.MonthSales : null;
        this.QuarterSales = 'QuarterSales' in params ? params.QuarterSales : null;
        this.ExceptionFlag = 'ExceptionFlag' in params ? params.ExceptionFlag : null;

    }
}

/**
 * DescribeClientBalance返回参数结构体
 * @class
 */
class DescribeClientBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户余额，单位分
         * @type {number || null}
         */
        this.Balance = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AgentTransferMoney请求参数结构体
 * @class
 */
class AgentTransferMoneyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户账号ID
         * @type {string || null}
         */
        this.ClientUin = null;

        /**
         * 转账金额，单位分
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
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.Amount = 'Amount' in params ? params.Amount : null;

    }
}

/**
 * DescribeClientBalance请求参数结构体
 * @class
 */
class DescribeClientBalanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户(代客)账号ID
         * @type {string || null}
         */
        this.ClientUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;

    }
}

/**
 * DescribeRebateInfos请求参数结构体
 * @class
 */
class DescribeRebateInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返佣月份，如2018-02
         * @type {string || null}
         */
        this.RebateMonth = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目
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
        this.RebateMonth = 'RebateMonth' in params ? params.RebateMonth : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeAgentAuditedClients返回参数结构体
 * @class
 */
class DescribeAgentAuditedClientsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已审核代客列表
         * @type {Array.<AgentAuditedClient> || null}
         */
        this.AgentClientSet = null;

        /**
         * 符合条件的代客总数
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

        if (params.AgentClientSet) {
            this.AgentClientSet = new Array();
            for (let z in params.AgentClientSet) {
                let obj = new AgentAuditedClient();
                obj.deserialize(params.AgentClientSet[z]);
                this.AgentClientSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentBills返回参数结构体
 * @class
 */
class DescribeAgentBillsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件列表总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 业务明细列表
         * @type {Array.<AgentBillElem> || null}
         */
        this.AgentBillSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AgentBillSet) {
            this.AgentBillSet = new Array();
            for (let z in params.AgentBillSet) {
                let obj = new AgentBillElem();
                obj.deserialize(params.AgentBillSet[z]);
                this.AgentBillSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AuditApplyClient请求参数结构体
 * @class
 */
class AuditApplyClientRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待审核客户账号ID
         * @type {string || null}
         */
        this.ClientUin = null;

        /**
         * 审核结果，可能的取值：accept/reject
         * @type {string || null}
         */
        this.AuditResult = null;

        /**
         * 申请理由，B类客户审核通过时必须填写申请理由
         * @type {string || null}
         */
        this.Note = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.AuditResult = 'AuditResult' in params ? params.AuditResult : null;
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * ModifyClientRemark返回参数结构体
 * @class
 */
class ModifyClientRemarkResponse extends  AbstractModel {
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
 * DescribeAgentClients返回参数结构体
 * @class
 */
class DescribeAgentClientsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待审核代客列表
         * @type {Array.<AgentClientElem> || null}
         */
        this.AgentClientSet = null;

        /**
         * 符合条件的代客总数
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

        if (params.AgentClientSet) {
            this.AgentClientSet = new Array();
            for (let z in params.AgentClientSet) {
                let obj = new AgentClientElem();
                obj.deserialize(params.AgentClientSet[z]);
                this.AgentClientSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentClients请求参数结构体
 * @class
 */
class DescribeAgentClientsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户账号ID
         * @type {string || null}
         */
        this.ClientUin = null;

        /**
         * 客户名称。由于涉及隐私，名称打码显示，故名称仅支持打码后的模糊搜索
         * @type {string || null}
         */
        this.ClientName = null;

        /**
         * 客户类型，a/b，类型定义参考代理商相关政策文档
         * @type {string || null}
         */
        this.ClientFlag = null;

        /**
         * ASC/DESC， 不区分大小写，按申请时间排序
         * @type {string || null}
         */
        this.OrderDirection = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目
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
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.ClientName = 'ClientName' in params ? params.ClientName : null;
        this.ClientFlag = 'ClientFlag' in params ? params.ClientFlag : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 已审核代客信息
 * @class
 */
class AgentAuditedClient extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理商账号ID
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 代客账号ID
         * @type {string || null}
         */
        this.ClientUin = null;

        /**
         * 代客审核通过时间戳
         * @type {string || null}
         */
        this.AgentTime = null;

        /**
         * 代客类型，可能值为a/b/c
         * @type {string || null}
         */
        this.ClientFlag = null;

        /**
         * 代客备注
         * @type {string || null}
         */
        this.ClientRemark = null;

        /**
         * 代客名称（首选实名认证名称）
         * @type {string || null}
         */
        this.ClientName = null;

        /**
         * 认证类型, 0：个人，1：企业；其他：未认证
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * 代客APPID
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 上月消费金额
         * @type {number || null}
         */
        this.LastMonthAmt = null;

        /**
         * 本月消费金额
         * @type {number || null}
         */
        this.ThisMonthAmt = null;

        /**
         * 是否欠费,0：不欠费；1：欠费
         * @type {number || null}
         */
        this.HasOverdueBill = null;

        /**
         * 客户类型：可以为new(新拓)/assign(指定)/old(存量)/空
         * @type {string || null}
         */
        this.ClientType = null;

        /**
         * 项目类型：可以为self(自拓项目)/platform(合作项目)/repeat(复算项目  )/空
         * @type {string || null}
         */
        this.ProjectType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.AgentTime = 'AgentTime' in params ? params.AgentTime : null;
        this.ClientFlag = 'ClientFlag' in params ? params.ClientFlag : null;
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.ClientName = 'ClientName' in params ? params.ClientName : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.LastMonthAmt = 'LastMonthAmt' in params ? params.LastMonthAmt : null;
        this.ThisMonthAmt = 'ThisMonthAmt' in params ? params.ThisMonthAmt : null;
        this.HasOverdueBill = 'HasOverdueBill' in params ? params.HasOverdueBill : null;
        this.ClientType = 'ClientType' in params ? params.ClientType : null;
        this.ProjectType = 'ProjectType' in params ? params.ProjectType : null;

    }
}

/**
 * ModifyClientRemark请求参数结构体
 * @class
 */
class ModifyClientRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户备注名称
         * @type {string || null}
         */
        this.ClientRemark = null;

        /**
         * 客户账号ID
         * @type {string || null}
         */
        this.ClientUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;

    }
}

/**
 * AgentTransferMoney返回参数结构体
 * @class
 */
class AgentTransferMoneyResponse extends  AbstractModel {
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
 * 业务信息定义
 * @class
 */
class AgentBillElem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理商账号ID
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 订单号，仅对预付费账单有意义
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 代客账号ID
         * @type {string || null}
         */
        this.ClientUin = null;

        /**
         * 代客备注名称
         * @type {string || null}
         */
        this.ClientRemark = null;

        /**
         * 支付时间
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * 云产品名称
         * @type {string || null}
         */
        this.GoodsType = null;

        /**
         * 预付费/后付费
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 支付月份
         * @type {string || null}
         */
        this.SettleMonth = null;

        /**
         * 支付金额，单位分
         * @type {number || null}
         */
        this.Amt = null;

        /**
         * agentpay：代付；selfpay：自付
         * @type {string || null}
         */
        this.PayerMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.GoodsType = 'GoodsType' in params ? params.GoodsType : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.SettleMonth = 'SettleMonth' in params ? params.SettleMonth : null;
        this.Amt = 'Amt' in params ? params.Amt : null;
        this.PayerMode = 'PayerMode' in params ? params.PayerMode : null;

    }
}

/**
 * AuditApplyClient返回参数结构体
 * @class
 */
class AuditApplyClientResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理商账号ID
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 客户账号ID
         * @type {string || null}
         */
        this.ClientUin = null;

        /**
         * 审核结果，包括accept/reject/qcloudaudit（腾讯云审核）
         * @type {string || null}
         */
        this.AuditResult = null;

        /**
         * 关联时间对应的时间戳
         * @type {number || null}
         */
        this.AgentTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.AuditResult = 'AuditResult' in params ? params.AuditResult : null;
        this.AgentTime = 'AgentTime' in params ? params.AgentTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentBills请求参数结构体
 * @class
 */
class DescribeAgentBillsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支付月份，如2018-02
         * @type {string || null}
         */
        this.SettleMonth = null;

        /**
         * 客户账号ID
         * @type {string || null}
         */
        this.ClientUin = null;

        /**
         * 支付方式，prepay/postpay
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 预付费订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 客户备注名称
         * @type {string || null}
         */
        this.ClientRemark = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目
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
        this.SettleMonth = 'SettleMonth' in params ? params.SettleMonth : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * AgentPayDeals返回参数结构体
 * @class
 */
class AgentPayDealsResponse extends  AbstractModel {
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
 * DescribeRebateInfos返回参数结构体
 * @class
 */
class DescribeRebateInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返佣信息列表
         * @type {Array.<RebateInfoElem> || null}
         */
        this.RebateInfoSet = null;

        /**
         * 符合查询条件返佣信息数目
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

        if (params.RebateInfoSet) {
            this.RebateInfoSet = new Array();
            for (let z in params.RebateInfoSet) {
                let obj = new RebateInfoElem();
                obj.deserialize(params.RebateInfoSet[z]);
                this.RebateInfoSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    AgentClientElem: AgentClientElem,
    DescribeAgentAuditedClientsRequest: DescribeAgentAuditedClientsRequest,
    AgentPayDealsRequest: AgentPayDealsRequest,
    RebateInfoElem: RebateInfoElem,
    DescribeClientBalanceResponse: DescribeClientBalanceResponse,
    AgentTransferMoneyRequest: AgentTransferMoneyRequest,
    DescribeClientBalanceRequest: DescribeClientBalanceRequest,
    DescribeRebateInfosRequest: DescribeRebateInfosRequest,
    DescribeAgentAuditedClientsResponse: DescribeAgentAuditedClientsResponse,
    DescribeAgentBillsResponse: DescribeAgentBillsResponse,
    AuditApplyClientRequest: AuditApplyClientRequest,
    ModifyClientRemarkResponse: ModifyClientRemarkResponse,
    DescribeAgentClientsResponse: DescribeAgentClientsResponse,
    DescribeAgentClientsRequest: DescribeAgentClientsRequest,
    AgentAuditedClient: AgentAuditedClient,
    ModifyClientRemarkRequest: ModifyClientRemarkRequest,
    AgentTransferMoneyResponse: AgentTransferMoneyResponse,
    AgentBillElem: AgentBillElem,
    AuditApplyClientResponse: AuditApplyClientResponse,
    DescribeAgentBillsRequest: DescribeAgentBillsRequest,
    AgentPayDealsResponse: AgentPayDealsResponse,
    DescribeRebateInfosResponse: DescribeRebateInfosResponse,

}
