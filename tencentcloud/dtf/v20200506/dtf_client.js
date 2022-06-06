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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const PagedTransaction = models.PagedTransaction;
const Transaction = models.Transaction;
const DescribeTransactionsRequest = models.DescribeTransactionsRequest;
const DescribeTransactionsResponse = models.DescribeTransactionsResponse;


/**
 * dtf client
 * @class
 */
class DtfClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dtf.tencentcloudapi.com", "2020-05-06", credential, region, profile);
    }
    
    /**
     * 查询主事务列表
     * @param {DescribeTransactionsRequest} req
     * @param {function(string, DescribeTransactionsResponse):void} cb
     * @public
     */
    DescribeTransactions(req, cb) {
        let resp = new DescribeTransactionsResponse();
        this.request("DescribeTransactions", req, resp, cb);
    }


}
module.exports = DtfClient;
