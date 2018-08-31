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
 * Query请求参数结构体
 * @class
 */
class QueryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * cluster标识
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 合约名称
         * @type {string || null}
         */
        this.ChaincodeName = null;

        /**
         * 通道名称
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 使用的节点名称及对应组织名称
         * @type {Array.<PeerSet> || null}
         */
        this.Peers = null;

        /**
         * 函数名
         * @type {string || null}
         */
        this.FuncName = null;

        /**
         * 函数参数列表
         * @type {Array.<string> || null}
         */
        this.Args = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.ClusterId = params.ClusterId || null;
        this.ChaincodeName = params.ChaincodeName || null;
        this.ChannelName = params.ChannelName || null;

        if (params.Peers) {
            this.Peers = new Array();
            for (let z in params.Peers) {
                let obj = new PeerSet();
                obj.deserialize(params.Peers[z]);
                this.Peers.push(obj);
            }
        }
        this.FuncName = params.FuncName || null;
        this.Args = params.Args || null;

    }
}

/**
 * GetInvokeTx返回参数结构体
 * @class
 */
class GetInvokeTxResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态码
         * @type {number || null}
         */
        this.TxValidationCode = null;

        /**
         * 消息
         * @type {string || null}
         */
        this.TxValidationMsg = null;

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
        this.TxValidationCode = params.TxValidationCode || null;
        this.TxValidationMsg = params.TxValidationMsg || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * Invoke请求参数结构体
 * @class
 */
class InvokeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * cluster标识
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 合约名称
         * @type {string || null}
         */
        this.ChaincodeName = null;

        /**
         * 通道名称
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 使用的节点名称及对应组织名称
         * @type {Array.<PeerSet> || null}
         */
        this.Peers = null;

        /**
         * 函数名
         * @type {string || null}
         */
        this.FuncName = null;

        /**
         * 函数参数列表
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * 同步调用标识
         * @type {number || null}
         */
        this.AsyncFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.ClusterId = params.ClusterId || null;
        this.ChaincodeName = params.ChaincodeName || null;
        this.ChannelName = params.ChannelName || null;

        if (params.Peers) {
            this.Peers = new Array();
            for (let z in params.Peers) {
                let obj = new PeerSet();
                obj.deserialize(params.Peers[z]);
                this.Peers.push(obj);
            }
        }
        this.FuncName = params.FuncName || null;
        this.Args = params.Args || null;
        this.AsyncFlag = params.AsyncFlag || null;

    }
}

/**
 * PeerSet
 * @class
 */
class PeerSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点名称
         * @type {string || null}
         */
        this.PeerName = null;

        /**
         * 组织名称
         * @type {string || null}
         */
        this.OrgName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PeerName = params.PeerName || null;
        this.OrgName = params.OrgName || null;

    }
}

/**
 * GetInvokeTx请求参数结构体
 * @class
 */
class GetInvokeTxRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * cluster标识
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 通道名称
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 节点名称
         * @type {string || null}
         */
        this.PeerName = null;

        /**
         * 节点所属组织名称
         * @type {string || null}
         */
        this.PeerGroup = null;

        /**
         * 事务ID
         * @type {string || null}
         */
        this.TxId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.ClusterId = params.ClusterId || null;
        this.ChannelName = params.ChannelName || null;
        this.PeerName = params.PeerName || null;
        this.PeerGroup = params.PeerGroup || null;
        this.TxId = params.TxId || null;

    }
}

/**
 * Invoke返回参数结构体
 * @class
 */
class InvokeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易编号
         * @type {string || null}
         */
        this.Txid = null;

        /**
         * 返回内容
         * @type {string || null}
         */
        this.Events = null;

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
        this.Txid = params.Txid || null;
        this.Events = params.Events || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * Query返回参数结构体
 * @class
 */
class QueryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果数据
         * @type {Array.<string> || null}
         */
        this.Data = null;

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
        this.Data = params.Data || null;
        this.RequestId = params.RequestId || null;

    }
}

module.exports = {
    QueryRequest: QueryRequest,
    GetInvokeTxResponse: GetInvokeTxResponse,
    InvokeRequest: InvokeRequest,
    PeerSet: PeerSet,
    GetInvokeTxRequest: GetInvokeTxRequest,
    InvokeResponse: InvokeResponse,
    QueryResponse: QueryResponse,

}
