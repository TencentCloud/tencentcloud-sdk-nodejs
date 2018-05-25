const AbstractModel = require("../../common/abstract_model");

/**
 * 描述代客信息
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
         * 代客类型，可能值为a/b
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = params.Uin || null;
        this.ClientUin = params.ClientUin || null;
        this.ApplyTime = params.ApplyTime || null;
        this.ClientFlag = params.ClientFlag || null;
        this.Mail = params.Mail || null;
        this.Phone = params.Phone || null;
        this.HasOverdueBill = params.HasOverdueBill || null;

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
        this.ClientUin = params.ClientUin || null;
        this.ClientName = params.ClientName || null;
        this.ClientFlag = params.ClientFlag || null;
        this.OrderDirection = params.OrderDirection || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = params.Uin || null;
        this.ClientUin = params.ClientUin || null;
        this.AuditResult = params.AuditResult || null;
        this.AgentTime = params.AgentTime || null;
        this.RequestId = params.RequestId || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

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
        this.SettleMonth = params.SettleMonth || null;
        this.ClientUin = params.ClientUin || null;
        this.PayMode = params.PayMode || null;
        this.OrderId = params.OrderId || null;
        this.ClientRemark = params.ClientRemark || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
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
        this.TotalCount = params.TotalCount || null;
        this.RequestId = params.RequestId || null;

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
        this.RebateMonth = params.RebateMonth || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.ClientRemark = params.ClientRemark || null;
        this.ClientUin = params.ClientUin || null;

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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = params.TotalCount || null;

        if (params.AgentBillSet) {
            this.AgentBillSet = new Array();
            for (let z in params.AgentBillSet) {
                let obj = new AgentBillElem();
                obj.deserialize(params.AgentBillSet[z]);
                this.AgentBillSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.ClientUin = params.ClientUin || null;
        this.AuditResult = params.AuditResult || null;
        this.Note = params.Note || null;

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
        this.Uin = params.Uin || null;
        this.OrderId = params.OrderId || null;
        this.ClientUin = params.ClientUin || null;
        this.ClientRemark = params.ClientRemark || null;
        this.PayTime = params.PayTime || null;
        this.GoodsType = params.GoodsType || null;
        this.PayMode = params.PayMode || null;
        this.SettleMonth = params.SettleMonth || null;
        this.Amt = params.Amt || null;
        this.PayerMode = params.PayerMode || null;

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
        this.Uin = params.Uin || null;
        this.RebateMonth = params.RebateMonth || null;
        this.Amt = params.Amt || null;
        this.MonthSales = params.MonthSales || null;
        this.QuarterSales = params.QuarterSales || null;
        this.ExceptionFlag = params.ExceptionFlag || null;

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
         * 代客列表
         * @type {Array.<AgentClientElem> || null}
         */
        this.AgentClientSet = null;

        /**
         * 符合条件的代客总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
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
        this.TotalCount = params.TotalCount || null;
        this.RequestId = params.RequestId || null;

    }
}

module.exports = {
    AgentClientElem: AgentClientElem,
    DescribeAgentClientsRequest: DescribeAgentClientsRequest,
    AuditApplyClientResponse: AuditApplyClientResponse,
    ModifyClientRemarkResponse: ModifyClientRemarkResponse,
    DescribeAgentBillsRequest: DescribeAgentBillsRequest,
    DescribeRebateInfosResponse: DescribeRebateInfosResponse,
    DescribeRebateInfosRequest: DescribeRebateInfosRequest,
    ModifyClientRemarkRequest: ModifyClientRemarkRequest,
    DescribeAgentBillsResponse: DescribeAgentBillsResponse,
    AuditApplyClientRequest: AuditApplyClientRequest,
    AgentBillElem: AgentBillElem,
    RebateInfoElem: RebateInfoElem,
    DescribeAgentClientsResponse: DescribeAgentClientsResponse,

}
