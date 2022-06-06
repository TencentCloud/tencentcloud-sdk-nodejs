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
 * 分页主事务
 * @class
 */
class PagedTransaction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数，特定在该接口中总是会返回null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 主事务分组列表
         * @type {Array.<Transaction> || null}
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
                let obj = new Transaction();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }

    }
}

/**
 * 主事务
 * @class
 */
class Transaction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主事务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TransactionId = null;

        /**
         * 主事务开始时间戳，UTC，精确到毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TransactionBegin = null;

        /**
         * 主事务结束时间戳，UTC，精确到毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TransactionEnd = null;

        /**
         * 主事务提交时间戳，UTC，精确到毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TransactionCommit = null;

        /**
         * 主事务回滚时间戳，UTC，精确到毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TransactionRollback = null;

        /**
         * 主事务异常停止时间戳，UTC，精确到毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TransactionError = null;

        /**
         * 主事务超时时长，单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 主事务状态：0:Trying, 1:Confirming, 2: Confirmed, 3:Canceling, 4: Canceled
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 主事务结束标识：0:运行中, 1: 已结束
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndFlag = null;

        /**
         * 主事务超时标识：0:运行中, 1: 已超时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeoutFlag = null;

        /**
         * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 事务分组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 主事务来源服务标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Server = null;

        /**
         * 分支事务数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BranchQuantity = null;

        /**
         * 重试标识：true：可以重试；false：不可重试
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.RetryFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.TransactionBegin = 'TransactionBegin' in params ? params.TransactionBegin : null;
        this.TransactionEnd = 'TransactionEnd' in params ? params.TransactionEnd : null;
        this.TransactionCommit = 'TransactionCommit' in params ? params.TransactionCommit : null;
        this.TransactionRollback = 'TransactionRollback' in params ? params.TransactionRollback : null;
        this.TransactionError = 'TransactionError' in params ? params.TransactionError : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.EndFlag = 'EndFlag' in params ? params.EndFlag : null;
        this.TimeoutFlag = 'TimeoutFlag' in params ? params.TimeoutFlag : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Server = 'Server' in params ? params.Server : null;
        this.BranchQuantity = 'BranchQuantity' in params ? params.BranchQuantity : null;
        this.RetryFlag = 'RetryFlag' in params ? params.RetryFlag : null;

    }
}

/**
 * DescribeTransactions请求参数结构体
 * @class
 */
class DescribeTransactionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事务分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 事务开始时间查询起始时间戳，UTC，精确到毫秒
         * @type {number || null}
         */
        this.TransactionBeginFrom = null;

        /**
         * 事务开始时间查询截止时间戳，UTC，精确到毫秒
         * @type {number || null}
         */
        this.TransactionBeginTo = null;

        /**
         * 仅查询异常状态的事务，true：仅查询异常，false或不传入：查询所有
         * @type {boolean || null}
         */
        this.SearchError = null;

        /**
         * 主事务ID，不传入时查询全量，高优先级
         * @type {number || null}
         */
        this.TransactionId = null;

        /**
         * 主事务ID列表，不传入时查询全量，低优先级
         * @type {Array.<number> || null}
         */
        this.TransactionIdList = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.TransactionBeginFrom = 'TransactionBeginFrom' in params ? params.TransactionBeginFrom : null;
        this.TransactionBeginTo = 'TransactionBeginTo' in params ? params.TransactionBeginTo : null;
        this.SearchError = 'SearchError' in params ? params.SearchError : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.TransactionIdList = 'TransactionIdList' in params ? params.TransactionIdList : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeTransactions返回参数结构体
 * @class
 */
class DescribeTransactionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主事务分页列表
         * @type {PagedTransaction || null}
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
            let obj = new PagedTransaction();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    PagedTransaction: PagedTransaction,
    Transaction: Transaction,
    DescribeTransactionsRequest: DescribeTransactionsRequest,
    DescribeTransactionsResponse: DescribeTransactionsResponse,

}
