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
 * GetBlockList请求参数结构体
 * @class
 */
class GetBlockListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名称，固定字段：block
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名称，固定字段：block_list
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 通道ID，固定字段：0
         * @type {number || null}
         */
        this.ChannelId = null;

        /**
         * 组织ID，固定字段：0
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 需要查询的通道名称，可在通道详情或列表中获取
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 需要获取的起始交易偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 需要获取的交易数量
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
         * @type {string || null}
         */
        this.GroupName = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Args = 'Args' in params ? params.Args : null;
        this.AsyncFlag = 'AsyncFlag' in params ? params.AsyncFlag : null;

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
         * 交易执行状态码
         * @type {number || null}
         */
        this.TxValidationCode = null;

        /**
         * 交易执行消息
         * @type {string || null}
         */
        this.TxValidationMsg = null;

        /**
         * 交易所在区块ID
         * @type {number || null}
         */
        this.BlockId = null;

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
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetBlockList返回参数结构体
 * @class
 */
class GetBlockListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区块数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 区块列表
         * @type {Array.<Block> || null}
         */
        this.BlockList = null;

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

        if (params.BlockList) {
            this.BlockList = new Array();
            for (let z in params.BlockList) {
                let obj = new Block();
                obj.deserialize(params.BlockList[z]);
                this.BlockList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 交易列表项信息
 * @class
 */
class TransactionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易ID
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 交易hash
         * @type {string || null}
         */
        this.TransactionHash = null;

        /**
         * 创建交易的组织名
         * @type {string || null}
         */
        this.CreateOrgName = null;

        /**
         * 交易所在区块号
         * @type {number || null}
         */
        this.BlockId = null;

        /**
         * 交易类型（普通交易和配置交易）
         * @type {string || null}
         */
        this.TransactionType = null;

        /**
         * 交易创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 交易所在区块高度
         * @type {number || null}
         */
        this.BlockHeight = null;

        /**
         * 交易状态
         * @type {string || null}
         */
        this.TransactionStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.TransactionHash = 'TransactionHash' in params ? params.TransactionHash : null;
        this.CreateOrgName = 'CreateOrgName' in params ? params.CreateOrgName : null;
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.TransactionType = 'TransactionType' in params ? params.TransactionType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BlockHeight = 'BlockHeight' in params ? params.BlockHeight : null;
        this.TransactionStatus = 'TransactionStatus' in params ? params.TransactionStatus : null;

    }
}

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
         * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
         * @type {string || null}
         */
        this.GroupName = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Args = 'Args' in params ? params.Args : null;

    }
}

/**
 * GetClusterSummary返回参数结构体
 * @class
 */
class GetClusterSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络通道总数量
         * @type {number || null}
         */
        this.TotalChannelCount = null;

        /**
         * 当前组织创建的通道数量
         * @type {number || null}
         */
        this.MyChannelCount = null;

        /**
         * 其组织创建的通道数量
         * @type {number || null}
         */
        this.OtherChannelCount = null;

        /**
         * 当前组织加入的通道数量
         * @type {number || null}
         */
        this.JoinChannelCount = null;

        /**
         * 与当前组织无关的通道数量
         * @type {number || null}
         */
        this.NoneChannelCount = null;

        /**
         * 网络节点总数量
         * @type {number || null}
         */
        this.TotalPeerCount = null;

        /**
         * 当前组织创建的节点数量
         * @type {number || null}
         */
        this.MyPeerCount = null;

        /**
         * 其他组织创建的节点数量
         * @type {number || null}
         */
        this.OtherPeerCount = null;

        /**
         * 网络组织总数量
         * @type {number || null}
         */
        this.TotalGroupCount = null;

        /**
         * 当前组织创建的组织数量
         * @type {number || null}
         */
        this.MyGroupCount = null;

        /**
         * 其他组织创建的组织数量
         * @type {number || null}
         */
        this.OtherGroupCount = null;

        /**
         * 网络智能合约总数量
         * @type {number || null}
         */
        this.TotalChaincodeCount = null;

        /**
         * 最近7天发起的智能合约数量
         * @type {number || null}
         */
        this.RecentChaincodeCount = null;

        /**
         * 当前组织发起的智能合约数量
         * @type {number || null}
         */
        this.MyChaincodeCount = null;

        /**
         * 其组织发起的智能合约数量
         * @type {number || null}
         */
        this.OtherChaincodeCount = null;

        /**
         * 当前组织的证书总数量
         * @type {number || null}
         */
        this.TotalCertCount = null;

        /**
         * 颁发给当前组织的证书数量
         * @type {number || null}
         */
        this.TlsCertCount = null;

        /**
         * 网络背书节点证书数量
         * @type {number || null}
         */
        this.PeerCertCount = null;

        /**
         * 网络排序节点证书数量
         * @type {number || null}
         */
        this.OrderCertCount = null;

        /**
         * 当前组织业务证书数量
         * @type {number || null}
         */
        this.ClientCertCount = null;

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
        this.TotalChannelCount = 'TotalChannelCount' in params ? params.TotalChannelCount : null;
        this.MyChannelCount = 'MyChannelCount' in params ? params.MyChannelCount : null;
        this.OtherChannelCount = 'OtherChannelCount' in params ? params.OtherChannelCount : null;
        this.JoinChannelCount = 'JoinChannelCount' in params ? params.JoinChannelCount : null;
        this.NoneChannelCount = 'NoneChannelCount' in params ? params.NoneChannelCount : null;
        this.TotalPeerCount = 'TotalPeerCount' in params ? params.TotalPeerCount : null;
        this.MyPeerCount = 'MyPeerCount' in params ? params.MyPeerCount : null;
        this.OtherPeerCount = 'OtherPeerCount' in params ? params.OtherPeerCount : null;
        this.TotalGroupCount = 'TotalGroupCount' in params ? params.TotalGroupCount : null;
        this.MyGroupCount = 'MyGroupCount' in params ? params.MyGroupCount : null;
        this.OtherGroupCount = 'OtherGroupCount' in params ? params.OtherGroupCount : null;
        this.TotalChaincodeCount = 'TotalChaincodeCount' in params ? params.TotalChaincodeCount : null;
        this.RecentChaincodeCount = 'RecentChaincodeCount' in params ? params.RecentChaincodeCount : null;
        this.MyChaincodeCount = 'MyChaincodeCount' in params ? params.MyChaincodeCount : null;
        this.OtherChaincodeCount = 'OtherChaincodeCount' in params ? params.OtherChaincodeCount : null;
        this.TotalCertCount = 'TotalCertCount' in params ? params.TotalCertCount : null;
        this.TlsCertCount = 'TlsCertCount' in params ? params.TlsCertCount : null;
        this.PeerCertCount = 'PeerCertCount' in params ? params.PeerCertCount : null;
        this.OrderCertCount = 'OrderCertCount' in params ? params.OrderCertCount : null;
        this.ClientCertCount = 'ClientCertCount' in params ? params.ClientCertCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetLatesdTransactionList请求参数结构体
 * @class
 */
class GetLatesdTransactionListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名称，固定字段：transaction
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名称，固定字段：latest_transaction_list
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 组织ID，固定字段：0
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 通道ID，固定字段：0
         * @type {number || null}
         */
        this.ChannelId = null;

        /**
         * 获取的最新交易的区块数量，取值范围1~5
         * @type {number || null}
         */
        this.LatestBlockNumber = null;

        /**
         * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 需要查询的通道名称，可在通道详情或列表中获取
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 需要获取的起始交易偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 需要获取的交易数量
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.LatestBlockNumber = 'LatestBlockNumber' in params ? params.LatestBlockNumber : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * 交易ID
         * @type {string || null}
         */
        this.TxId = null;

        /**
         * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
         * @type {string || null}
         */
        this.GroupName = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * GetLatesdTransactionList返回参数结构体
 * @class
 */
class GetLatesdTransactionListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 交易列表
         * @type {Array.<TransactionItem> || null}
         */
        this.TransactionList = null;

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

        if (params.TransactionList) {
            this.TransactionList = new Array();
            for (let z in params.TransactionList) {
                let obj = new TransactionItem();
                obj.deserialize(params.TransactionList[z]);
                this.TransactionList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 交易ID
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

/**
 * GetClusterSummary请求参数结构体
 * @class
 */
class GetClusterSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名称，固定字段：cluster_mng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名称，固定字段：cluster_summary
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 组织ID，固定字段：0
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
         * @type {string || null}
         */
        this.GroupName = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * 区块对象
 * @class
 */
class Block extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区块编号
         * @type {number || null}
         */
        this.BlockNum = null;

        /**
         * 区块Hash数值
         * @type {string || null}
         */
        this.DataHash = null;

        /**
         * 区块ID，与区块编号一直
         * @type {number || null}
         */
        this.BlockId = null;

        /**
         * 前一个区块Hash（未使用）,与区块Hash数值一直
         * @type {string || null}
         */
        this.PreHash = null;

        /**
         * 区块内的交易数量
         * @type {number || null}
         */
        this.TxCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlockNum = 'BlockNum' in params ? params.BlockNum : null;
        this.DataHash = 'DataHash' in params ? params.DataHash : null;
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.PreHash = 'PreHash' in params ? params.PreHash : null;
        this.TxCount = 'TxCount' in params ? params.TxCount : null;

    }
}

module.exports = {
    GetBlockListRequest: GetBlockListRequest,
    PeerSet: PeerSet,
    InvokeRequest: InvokeRequest,
    GetInvokeTxResponse: GetInvokeTxResponse,
    GetBlockListResponse: GetBlockListResponse,
    TransactionItem: TransactionItem,
    QueryRequest: QueryRequest,
    GetClusterSummaryResponse: GetClusterSummaryResponse,
    GetLatesdTransactionListRequest: GetLatesdTransactionListRequest,
    GetInvokeTxRequest: GetInvokeTxRequest,
    GetLatesdTransactionListResponse: GetLatesdTransactionListResponse,
    InvokeResponse: InvokeResponse,
    QueryResponse: QueryResponse,
    GetClusterSummaryRequest: GetClusterSummaryRequest,
    Block: Block,

}
