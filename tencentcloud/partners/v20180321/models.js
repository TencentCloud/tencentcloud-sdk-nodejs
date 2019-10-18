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
 * DescribeAgentDealsCache请求参数结构体
 * @class
 */
class DescribeAgentDealsCacheRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 下单时间范围起始点
         * @type {string || null}
         */
        this.CreatTimeRangeStart = null;

        /**
         * 下单时间范围终止点
         * @type {string || null}
         */
        this.CreatTimeRangeEnd = null;

        /**
         * 0:下单时间降序；其他：下单时间升序
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 下单人账号ID列表
         * @type {Array.<string> || null}
         */
        this.OwnerUins = null;

        /**
         * 订单号列表
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * 支付方式，0：自付；1：代付
         * @type {number || null}
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CreatTimeRangeStart = 'CreatTimeRangeStart' in params ? params.CreatTimeRangeStart : null;
        this.CreatTimeRangeEnd = 'CreatTimeRangeEnd' in params ? params.CreatTimeRangeEnd : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OwnerUins = 'OwnerUins' in params ? params.OwnerUins : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.PayerMode = 'PayerMode' in params ? params.PayerMode : null;

    }
}

/**
 * DescribeSalesmans请求参数结构体
 * @class
 */
class DescribeSalesmansRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 业务员姓名(模糊查询)
         * @type {string || null}
         */
        this.SalesName = null;

        /**
         * 业务员ID
         * @type {string || null}
         */
        this.SalesUin = null;

        /**
         * ASC/DESC， 不区分大小写，按创建通过时间排序
         * @type {string || null}
         */
        this.OrderDirection = null;

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
        this.SalesName = 'SalesName' in params ? params.SalesName : null;
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

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

        /**
         * 业务员ID
         * @type {string || null}
         */
        this.SalesUin = null;

        /**
         * 业务员姓名（模糊查询）
         * @type {string || null}
         */
        this.SalesName = null;

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
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;

    }
}

/**
 * RemovePayRelationForClient请求参数结构体
 * @class
 */
class RemovePayRelationForClientRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;

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
 * RemovePayRelationForClient返回参数结构体
 * @class
 */
class RemovePayRelationForClientResponse extends  AbstractModel {
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
 * CreatePayRelationForClient返回参数结构体
 * @class
 */
class CreatePayRelationForClientResponse extends  AbstractModel {
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
 * DescribeAgentPayDeals请求参数结构体
 * @class
 */
class DescribeAgentPayDealsRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 下单时间范围起始点(不传时会默认查15天内订单，传值时需要传15天内的起始时间)
         * @type {string || null}
         */
        this.CreatTimeRangeStart = null;

        /**
         * 下单时间范围终止点
         * @type {string || null}
         */
        this.CreatTimeRangeEnd = null;

        /**
         * 0:下单时间降序；其他：下单时间升序
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 下单人账号ID列表
         * @type {Array.<string> || null}
         */
        this.OwnerUins = null;

        /**
         * 订单号列表
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CreatTimeRangeStart = 'CreatTimeRangeStart' in params ? params.CreatTimeRangeStart : null;
        this.CreatTimeRangeEnd = 'CreatTimeRangeEnd' in params ? params.CreatTimeRangeEnd : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OwnerUins = 'OwnerUins' in params ? params.OwnerUins : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

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
 * DescribeSalesmans返回参数结构体
 * @class
 */
class DescribeSalesmansResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务员列表
         * @type {Array.<AgentSalesmanElem> || null}
         */
        this.AgentSalesmanSet = null;

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

        if (params.AgentSalesmanSet) {
            this.AgentSalesmanSet = new Array();
            for (let z in params.AgentSalesmanSet) {
                let obj = new AgentSalesmanElem();
                obj.deserialize(params.AgentSalesmanSet[z]);
                this.AgentSalesmanSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 业务员ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SalesUin = null;

        /**
         * 业务员姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SalesName = null;

        /**
         * 代客邮箱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mail = null;

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
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;
        this.Mail = 'Mail' in params ? params.Mail : null;

    }
}

/**
 * DescribeAgentPayDeals返回参数结构体
 * @class
 */
class DescribeAgentPayDealsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单数组
         * @type {Array.<AgentDealElem> || null}
         */
        this.AgentPayDealSet = null;

        /**
         * 符合条件的订单总数量
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

        if (params.AgentPayDealSet) {
            this.AgentPayDealSet = new Array();
            for (let z in params.AgentPayDealSet) {
                let obj = new AgentDealElem();
                obj.deserialize(params.AgentPayDealSet[z]);
                this.AgentPayDealSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 订单价格详情
 * @class
 */
class DealGoodsPriceElem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实付金额
         * @type {number || null}
         */
        this.RealTotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;

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
 * CreatePayRelationForClient请求参数结构体
 * @class
 */
class CreatePayRelationForClientRequest extends  AbstractModel {
    constructor(){
        super();

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

        /**
         * 客户类型：可以为new(新拓)/assign(指定)/old(存量)/空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientType = null;

        /**
         * 项目类型：可以为self(自拓项目)/platform(合作项目)/repeat(复算项目  )/空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectType = null;

        /**
         * 活动ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActivityId = null;

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
        this.ClientType = 'ClientType' in params ? params.ClientType : null;
        this.ProjectType = 'ProjectType' in params ? params.ProjectType : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;

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
 * DescribeAgentDealsCache返回参数结构体
 * @class
 */
class DescribeAgentDealsCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单数组
         * @type {Array.<AgentDealElem> || null}
         */
        this.AgentDealSet = null;

        /**
         * 符合条件的订单总数量
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

        if (params.AgentDealSet) {
            this.AgentDealSet = new Array();
            for (let z in params.AgentDealSet) {
                let obj = new AgentDealElem();
                obj.deserialize(params.AgentDealSet[z]);
                this.AgentDealSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
 * 描述代理商代付的订单信息
 * @class
 */
class AgentDealElem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单自增 ID
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * 订单号
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 商品类型 ID
         * @type {string || null}
         */
        this.GoodsCategoryId = null;

        /**
         * 订单所有者
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 订单所有者对应 appId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 商品数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GoodsNum = null;

        /**
         * 价格详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DealGoodsPriceElem || null}
         */
        this.GoodsPrice = null;

        /**
         * 下单人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Creater = null;

        /**
         * 下单时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatTime = null;

        /**
         * 支付结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayEndTime = null;

        /**
         * 扣费流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * 支付人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Payer = null;

        /**
         * 订单状态，中文描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DealStatus = null;

        /**
         * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GoodsName = null;

        /**
         * 客户备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientRemark = null;

        /**
         * 订单操作类型，purchase（新购），renew（续费），modify（配置变更）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 代金券抵扣金额，单位分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VoucherDecline = null;

        /**
         * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BigDealId = null;

        /**
         * 客户类型（new：新拓；old：存量；assign：指派）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientType = null;

        /**
         * 项目类型（self：自拓；repeat：直销；platform：官网合作）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectType = null;

        /**
         * 业务员账号ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SalesUin = null;

        /**
         * 支付方式，0：自付；1：代付
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayerMode = null;

        /**
         * 活动ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActivityId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.GoodsCategoryId = 'GoodsCategoryId' in params ? params.GoodsCategoryId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;

        if (params.GoodsPrice) {
            let obj = new DealGoodsPriceElem();
            obj.deserialize(params.GoodsPrice)
            this.GoodsPrice = obj;
        }
        this.Creater = 'Creater' in params ? params.Creater : null;
        this.CreatTime = 'CreatTime' in params ? params.CreatTime : null;
        this.PayEndTime = 'PayEndTime' in params ? params.PayEndTime : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.Payer = 'Payer' in params ? params.Payer : null;
        this.DealStatus = 'DealStatus' in params ? params.DealStatus : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.GoodsName = 'GoodsName' in params ? params.GoodsName : null;
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.VoucherDecline = 'VoucherDecline' in params ? params.VoucherDecline : null;
        this.BigDealId = 'BigDealId' in params ? params.BigDealId : null;
        this.ClientType = 'ClientType' in params ? params.ClientType : null;
        this.ProjectType = 'ProjectType' in params ? params.ProjectType : null;
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.PayerMode = 'PayerMode' in params ? params.PayerMode : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;

    }
}

/**
 * 代理商业务员信息
 * @class
 */
class AgentSalesmanElem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理商账号ID
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 业务员ID
         * @type {string || null}
         */
        this.SalesUin = null;

        /**
         * 业务员姓名
         * @type {string || null}
         */
        this.SalesName = null;

        /**
         * 业务员创建时间
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
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
    DescribeAgentDealsCacheRequest: DescribeAgentDealsCacheRequest,
    DescribeSalesmansRequest: DescribeSalesmansRequest,
    DescribeAgentAuditedClientsRequest: DescribeAgentAuditedClientsRequest,
    RemovePayRelationForClientRequest: RemovePayRelationForClientRequest,
    AgentPayDealsRequest: AgentPayDealsRequest,
    RebateInfoElem: RebateInfoElem,
    DescribeClientBalanceResponse: DescribeClientBalanceResponse,
    AgentTransferMoneyRequest: AgentTransferMoneyRequest,
    DescribeClientBalanceRequest: DescribeClientBalanceRequest,
    RemovePayRelationForClientResponse: RemovePayRelationForClientResponse,
    DescribeRebateInfosRequest: DescribeRebateInfosRequest,
    CreatePayRelationForClientResponse: CreatePayRelationForClientResponse,
    DescribeAgentAuditedClientsResponse: DescribeAgentAuditedClientsResponse,
    DescribeAgentBillsResponse: DescribeAgentBillsResponse,
    DescribeAgentPayDealsRequest: DescribeAgentPayDealsRequest,
    AuditApplyClientRequest: AuditApplyClientRequest,
    ModifyClientRemarkResponse: ModifyClientRemarkResponse,
    DescribeAgentClientsResponse: DescribeAgentClientsResponse,
    DescribeAgentClientsRequest: DescribeAgentClientsRequest,
    DescribeSalesmansResponse: DescribeSalesmansResponse,
    AgentAuditedClient: AgentAuditedClient,
    DescribeAgentPayDealsResponse: DescribeAgentPayDealsResponse,
    DealGoodsPriceElem: DealGoodsPriceElem,
    ModifyClientRemarkRequest: ModifyClientRemarkRequest,
    CreatePayRelationForClientRequest: CreatePayRelationForClientRequest,
    AgentTransferMoneyResponse: AgentTransferMoneyResponse,
    AgentBillElem: AgentBillElem,
    AuditApplyClientResponse: AuditApplyClientResponse,
    DescribeAgentDealsCacheResponse: DescribeAgentDealsCacheResponse,
    DescribeAgentBillsRequest: DescribeAgentBillsRequest,
    AgentPayDealsResponse: AgentPayDealsResponse,
    AgentDealElem: AgentDealElem,
    AgentSalesmanElem: AgentSalesmanElem,
    DescribeRebateInfosResponse: DescribeRebateInfosResponse,

}
