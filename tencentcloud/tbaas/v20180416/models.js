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
         * 模块名，固定字段：transaction
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：query
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 业务所属智能合约名称，可在智能合约详情或列表中获取
         * @type {string || null}
         */
        this.ChaincodeName = null;

        /**
         * 业务所属通道名称，可在通道详情或列表中获取
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 执行该查询交易的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称极其所属组织名称
         * @type {Array.<PeerSet> || null}
         */
        this.Peers = null;

        /**
         * 该笔交易查询需要调用的智能合约中的函数名称
         * @type {string || null}
         */
        this.FuncName = null;

        /**
         * 被调用的函数参数列表
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ChaincodeName = 'ChaincodeName' in params ? params.ChaincodeName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;

        if (params.Peers) {
            this.Peers = new Array();
            for (let z in params.Peers) {
                let obj = new PeerSet();
                obj.deserialize(params.Peers[z]);
                this.Peers.push(obj);
            }
        }
        this.FuncName = 'FuncName' in params ? params.FuncName : null;
        this.Args = 'Args' in params ? params.Args : null;

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
        this.TxValidationCode = 'TxValidationCode' in params ? params.TxValidationCode : null;
        this.TxValidationMsg = 'TxValidationMsg' in params ? params.TxValidationMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 模块名，固定字段：transaction
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：invoke
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 业务所属智能合约名称，可在智能合约详情或列表中获取
         * @type {string || null}
         */
        this.ChaincodeName = null;

        /**
         * 业务所属通道名称，可在通道详情或列表中获取
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 对该笔交易进行背书的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称极其所属组织名称
         * @type {Array.<PeerSet> || null}
         */
        this.Peers = null;

        /**
         * 该笔交易需要调用的智能合约中的函数名称
         * @type {string || null}
         */
        this.FuncName = null;

        /**
         * 被调用的函数参数列表
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * 同步调用标识，可选参数，值为0或者不传表示使用同步方法调用，调用后会等待交易执行后再返回执行结果；值为1时表示使用异步方式调用Invoke，执行后会立即返回交易对应的Txid，后续需要通过GetInvokeTx这个API查询该交易的执行结果。（对于逻辑较为简单的交易，可以使用同步模式；对于逻辑较为复杂的交易，建议使用异步模式，否则容易导致API因等待时间过长，返回等待超时）
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ChaincodeName = 'ChaincodeName' in params ? params.ChaincodeName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;

        if (params.Peers) {
            this.Peers = new Array();
            for (let z in params.Peers) {
                let obj = new PeerSet();
                obj.deserialize(params.Peers[z]);
                this.Peers.push(obj);
            }
        }
        this.FuncName = 'FuncName' in params ? params.FuncName : null;
        this.Args = 'Args' in params ? params.Args : null;
        this.AsyncFlag = 'AsyncFlag' in params ? params.AsyncFlag : null;

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
        this.PeerName = 'PeerName' in params ? params.PeerName : null;
        this.OrgName = 'OrgName' in params ? params.OrgName : null;

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
         * 模块名，固定字段：transaction
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：query_txid
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 业务所属通道名称，可在通道详情或列表中获取
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 执行该查询交易的节点名称，可以在通道详情中获取该通道上的节点名称极其所属组织名称
         * @type {string || null}
         */
        this.PeerName = null;

        /**
         * 执行该查询交易的节点所属组织名称，可以在通道详情中获取该通道上的节点名称极其所属组织名称
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PeerName = 'PeerName' in params ? params.PeerName : null;
        this.PeerGroup = 'PeerGroup' in params ? params.PeerGroup : null;
        this.TxId = 'TxId' in params ? params.TxId : null;

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
         * 交易执行结果
         * @type {string || null}
         */
        this.Events = null;

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
        this.Txid = 'Txid' in params ? params.Txid : null;
        this.Events = 'Events' in params ? params.Events : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

module.exports = {
    QueryRequest: QueryRequest,
    GetInvokeTxResponse: GetInvokeTxResponse,
    InvokeRequest: InvokeRequest,
    PeerSet: PeerSet,
    GetInvokeTxRequest: GetInvokeTxRequest,
    InvokeResponse: InvokeResponse,
    QueryResponse: QueryResponse,

}
