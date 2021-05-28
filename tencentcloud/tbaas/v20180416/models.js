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
 * 节点详情信息
 * @class
 */
class PeerDetailForUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点名称
         * @type {string || null}
         */
        this.PeerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PeerName = 'PeerName' in params ? params.PeerName : null;

    }
}

/**
 * GetBcosTransList请求参数结构体
 * @class
 */
class GetBcosTransListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组编号，可在群组列表中获取
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 当前页数，默认是1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页记录数，默认为10
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 区块高度，可以从InvokeBcosTrans接口的返回值中解析获取
         * @type {number || null}
         */
        this.BlockNumber = null;

        /**
         * 交易哈希，可以从InvokeBcosTrans接口的返回值中解析获取
         * @type {string || null}
         */
        this.TransHash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.BlockNumber = 'BlockNumber' in params ? params.BlockNumber : null;
        this.TransHash = 'TransHash' in params ? params.TransHash : null;

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
         * 执行该查询交易的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称及其所属组织名称
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
 * DeployDynamicBcosContract返回参数结构体
 * @class
 */
class DeployDynamicBcosContractResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署成功返回的合约地址
         * @type {string || null}
         */
        this.ContractAddress = null;

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
        this.ContractAddress = 'ContractAddress' in params ? params.ContractAddress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetClusterListForUser返回参数结构体
 * @class
 */
class GetClusterListForUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 网络列表
         * @type {Array.<ClusterDetailForUser> || null}
         */
        this.ClusterList = null;

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

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new ClusterDetailForUser();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetBlockTransactionListForUser返回参数结构体
 * @class
 */
class GetBlockTransactionListForUserResponse extends  AbstractModel {
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
 * SendTransactionHandler返回参数结构体
 * @class
 */
class SendTransactionHandlerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易结果json字符串
         * @type {string || null}
         */
        this.TransactionRsp = null;

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
        this.TransactionRsp = 'TransactionRsp' in params ? params.TransactionRsp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyUserCert请求参数结构体
 * @class
 */
class ApplyUserCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定字段：cert_mng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：cert_apply_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 申请证书的组织名称，可以在组织管理列表中获取当前组织的名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 用户证书标识，用于标识用户证书，要求由纯小写字母组成，长度小于10
         * @type {string || null}
         */
        this.UserIdentity = null;

        /**
         * 证书申请实体，使用腾讯云账号实名认证的名称
         * @type {string || null}
         */
        this.Applicant = null;

        /**
         * 证件号码。如果腾讯云账号对应的实名认证类型为企业认证，填入“0”；如果腾讯云账号对应的实名认证类型为个人认证，填入个人身份证号码
         * @type {string || null}
         */
        this.IdentityNum = null;

        /**
         * csr p10证书文件。需要用户根据文档生成证书的CSR文件
         * @type {string || null}
         */
        this.CsrData = null;

        /**
         * 证书备注信息
         * @type {string || null}
         */
        this.Notes = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.UserIdentity = 'UserIdentity' in params ? params.UserIdentity : null;
        this.Applicant = 'Applicant' in params ? params.Applicant : null;
        this.IdentityNum = 'IdentityNum' in params ? params.IdentityNum : null;
        this.CsrData = 'CsrData' in params ? params.CsrData : null;
        this.Notes = 'Notes' in params ? params.Notes : null;

    }
}

/**
 * TransByDynamicContractHandler请求参数结构体
 * @class
 */
class TransByDynamicContractHandlerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定字段：transaction
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：trans_by_dynamic_contract
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 群组编号
         * @type {string || null}
         */
        this.GroupPk = null;

        /**
         * 合约地址（合约部署成功，可得到合约地址）
         * @type {string || null}
         */
        this.ContractAddress = null;

        /**
         * 合约名
         * @type {string || null}
         */
        this.ContractName = null;

        /**
         * 合约编译后的abi
         * @type {string || null}
         */
        this.AbiInfo = null;

        /**
         * 合约被调用方法名
         * @type {string || null}
         */
        this.FuncName = null;

        /**
         * 合约被调用方法的入参
         * @type {Array.<string> || null}
         */
        this.FuncParam = null;

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
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.ContractAddress = 'ContractAddress' in params ? params.ContractAddress : null;
        this.ContractName = 'ContractName' in params ? params.ContractName : null;
        this.AbiInfo = 'AbiInfo' in params ? params.AbiInfo : null;
        this.FuncName = 'FuncName' in params ? params.FuncName : null;
        this.FuncParam = 'FuncParam' in params ? params.FuncParam : null;

    }
}

/**
 * GetTransListHandler返回参数结构体
 * @class
 */
class GetTransListHandlerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 当前群组编号
         * @type {string || null}
         */
        this.GroupPk = null;

        /**
         * 返回数据列表
         * @type {Array.<BcosTransInfo> || null}
         */
        this.List = null;

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
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new BcosTransInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InvokeBcosTrans请求参数结构体
 * @class
 */
class InvokeBcosTransRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组编号，可在群组列表中获取
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 合约地址，可在合约详情获取
         * @type {string || null}
         */
        this.ContractAddress = null;

        /**
         * 合约Abi的json数组格式的字符串，可在合约详情获取
         * @type {string || null}
         */
        this.AbiInfo = null;

        /**
         * 合约方法名
         * @type {string || null}
         */
        this.FuncName = null;

        /**
         * 签名用户编号，可在私钥管理页面获取
         * @type {string || null}
         */
        this.SignUserId = null;

        /**
         * 合约方法入参，json格式字符串
         * @type {string || null}
         */
        this.FuncParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ContractAddress = 'ContractAddress' in params ? params.ContractAddress : null;
        this.AbiInfo = 'AbiInfo' in params ? params.AbiInfo : null;
        this.FuncName = 'FuncName' in params ? params.FuncName : null;
        this.SignUserId = 'SignUserId' in params ? params.SignUserId : null;
        this.FuncParam = 'FuncParam' in params ? params.FuncParam : null;

    }
}

/**
 * GetChaincodeInitializeResultForUser请求参数结构体
 * @class
 */
class GetChaincodeInitializeResultForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：chaincode_mng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：chaincode_init_result_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 调用合约的组织名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 业务所属通道名称
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 业务所属合约名称
         * @type {string || null}
         */
        this.ChaincodeName = null;

        /**
         * 业务所属智能合约版本
         * @type {string || null}
         */
        this.ChaincodeVersion = null;

        /**
         * 实例化任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.ChaincodeName = 'ChaincodeName' in params ? params.ChaincodeName : null;
        this.ChaincodeVersion = 'ChaincodeVersion' in params ? params.ChaincodeVersion : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * InitializeChaincodeForUser请求参数结构体
 * @class
 */
class InitializeChaincodeForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：chaincode_mng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：chaincode_init_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 调用合约的组织名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 业务所属智能合约名称
         * @type {string || null}
         */
        this.ChaincodeName = null;

        /**
         * 业务所属智能合约版本
         * @type {string || null}
         */
        this.ChaincodeVersion = null;

        /**
         * 业务所属通道名称
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 合约实例化节点名称，可以在通道详情中获取该通道上的节点名称
         * @type {string || null}
         */
        this.PeerName = null;

        /**
         * 实例化的函数参数列表
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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ChaincodeName = 'ChaincodeName' in params ? params.ChaincodeName : null;
        this.ChaincodeVersion = 'ChaincodeVersion' in params ? params.ChaincodeVersion : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PeerName = 'PeerName' in params ? params.PeerName : null;
        this.Args = 'Args' in params ? params.Args : null;

    }
}

/**
 * DeployDynamicContractHandler返回参数结构体
 * @class
 */
class DeployDynamicContractHandlerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署成功返回的合约地址
         * @type {string || null}
         */
        this.ContractAddress = null;

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
        this.ContractAddress = 'ContractAddress' in params ? params.ContractAddress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SrvInvoke请求参数结构体
 * @class
 */
class SrvInvokeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务类型，iss或者dam
         * @type {string || null}
         */
        this.Service = null;

        /**
         * 服务接口，要调用的方法函数名
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 用户自定义json字符串
         * @type {string || null}
         */
        this.Param = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Service = 'Service' in params ? params.Service : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Param = 'Param' in params ? params.Param : null;

    }
}

/**
 * ApplyUserCert返回参数结构体
 * @class
 */
class ApplyUserCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * 证书DN
         * @type {string || null}
         */
        this.CertDn = null;

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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertDn = 'CertDn' in params ? params.CertDn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetChaincodeCompileLogForUser请求参数结构体
 * @class
 */
class GetChaincodeCompileLogForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：chaincode_mng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：chaincode_compile_log_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 调用合约的组织名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 业务所属智能合约名称
         * @type {string || null}
         */
        this.ChaincodeName = null;

        /**
         * 业务所属智能合约版本
         * @type {string || null}
         */
        this.ChaincodeVersion = null;

        /**
         * 合约安装节点名称，可以在通道详情中获取该通道上的节点名称
         * @type {string || null}
         */
        this.PeerName = null;

        /**
         * 返回数据项数，本接口默认取值：10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回数据起始偏移，本接口默认取值：0
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ChaincodeName = 'ChaincodeName' in params ? params.ChaincodeName : null;
        this.ChaincodeVersion = 'ChaincodeVersion' in params ? params.ChaincodeVersion : null;
        this.PeerName = 'PeerName' in params ? params.PeerName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * GetBcosBlockByNumber请求参数结构体
 * @class
 */
class GetBcosBlockByNumberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组编号，可在群组列表中获取
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 区块高度，可以从InvokeBcosTrans接口的返回值中解析获取
         * @type {number || null}
         */
        this.BlockNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.BlockNumber = 'BlockNumber' in params ? params.BlockNumber : null;

    }
}

/**
 * GetPeerLogForUser返回参数结构体
 * @class
 */
class GetPeerLogForUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回日志总行数，不会超过入参的RowNum
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 日志列表
         * @type {Array.<LogDetailForUser> || null}
         */
        this.PeerLogList = null;

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

        if (params.PeerLogList) {
            this.PeerLogList = new Array();
            for (let z in params.PeerLogList) {
                let obj = new LogDetailForUser();
                obj.deserialize(params.PeerLogList[z]);
                this.PeerLogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetBcosBlockList返回参数结构体
 * @class
 */
class GetBcosBlockListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回数据列表
         * @type {Array.<BcosBlockObj> || null}
         */
        this.List = null;

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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new BcosBlockObj();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadUserCert返回参数结构体
 * @class
 */
class DownloadUserCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书名称
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 证书内容
         * @type {string || null}
         */
        this.CertCtx = null;

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
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertCtx = 'CertCtx' in params ? params.CertCtx : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetChaincodeLogForUser请求参数结构体
 * @class
 */
class GetChaincodeLogForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：chaincode_mng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：chaincode_log_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 调用合约的组织名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 业务所属智能合约名称
         * @type {string || null}
         */
        this.ChaincodeName = null;

        /**
         * 业务所属智能合约版本
         * @type {string || null}
         */
        this.ChaincodeVersion = null;

        /**
         * 合约安装节点名称，可以在通道详情中获取该通道上的节点名称
         * @type {string || null}
         */
        this.PeerName = null;

        /**
         * 日志开始时间，如"2020-11-24 19:49:25"
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 返回日志行数的最大值，系统设定该参数最大为1000，且一行日志的最大字节数是500，即最大返回50万个字节数的日志数据
         * @type {number || null}
         */
        this.RowNum = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ChaincodeName = 'ChaincodeName' in params ? params.ChaincodeName : null;
        this.ChaincodeVersion = 'ChaincodeVersion' in params ? params.ChaincodeVersion : null;
        this.PeerName = 'PeerName' in params ? params.PeerName : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.RowNum = 'RowNum' in params ? params.RowNum : null;

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
 * GetTransactionDetailForUser请求参数结构体
 * @class
 */
class GetTransactionDetailForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定字段：transaction
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：transaction_detail_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 参与交易的组织名称，可以在组织管理列表中获取当前组织的名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 业务所属通道名称，可在通道详情或列表中获取
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 区块ID，通过GetInvokeTx接口可以获取交易所在的区块ID
         * @type {number || null}
         */
        this.BlockId = null;

        /**
         * 交易ID，需要查询的详情的交易ID
         * @type {string || null}
         */
        this.TransactionId = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;

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
 * GetBcosBlockList请求参数结构体
 * @class
 */
class GetBcosBlockListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组编号，可在群组列表中获取
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 当前页数，默认为1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页记录数，默认为10
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 区块高度，可以从InvokeBcosTrans接口的返回值中解析获取
         * @type {number || null}
         */
        this.BlockNumber = null;

        /**
         * 区块哈希，可以从InvokeBcosTrans接口的返回值中解析获取
         * @type {string || null}
         */
        this.BlockHash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.BlockNumber = 'BlockNumber' in params ? params.BlockNumber : null;
        this.BlockHash = 'BlockHash' in params ? params.BlockHash : null;

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
 * BlockByNumberHandler返回参数结构体
 * @class
 */
class BlockByNumberHandlerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回区块json字符串
         * @type {string || null}
         */
        this.BlockJson = null;

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
        this.BlockJson = 'BlockJson' in params ? params.BlockJson : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTransListHandler请求参数结构体
 * @class
 */
class GetTransListHandlerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定字段：transaction
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：get_trans_list
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 记录偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页记录数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 群组编号
         * @type {string || null}
         */
        this.GroupPk = null;

        /**
         * 交易哈希
         * @type {string || null}
         */
        this.TransHash = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.TransHash = 'TransHash' in params ? params.TransHash : null;

    }
}

/**
 * GetTransByHashHandler返回参数结构体
 * @class
 */
class GetTransByHashHandlerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易信息json字符串
         * @type {string || null}
         */
        this.TransactionJson = null;

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
        this.TransactionJson = 'TransactionJson' in params ? params.TransactionJson : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeployDynamicContractHandler请求参数结构体
 * @class
 */
class DeployDynamicContractHandlerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定字段：contract
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：deploy_dynamic_contract
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 群组编号
         * @type {string || null}
         */
        this.GroupPk = null;

        /**
         * 合约名称
         * @type {string || null}
         */
        this.ContractName = null;

        /**
         * 合约编译后的abi
         * @type {string || null}
         */
        this.AbiInfo = null;

        /**
         * 合约编译后的binary
         * @type {string || null}
         */
        this.ByteCodeBin = null;

        /**
         * 构造函数入参
         * @type {Array.<string> || null}
         */
        this.ConstructorParams = null;

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
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.ContractName = 'ContractName' in params ? params.ContractName : null;
        this.AbiInfo = 'AbiInfo' in params ? params.AbiInfo : null;
        this.ByteCodeBin = 'ByteCodeBin' in params ? params.ByteCodeBin : null;
        this.ConstructorParams = 'ConstructorParams' in params ? params.ConstructorParams : null;

    }
}

/**
 * 网络详情信息
 * @class
 */
class ClusterDetailForUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 组织列表
         * @type {Array.<GroupDetailForUser> || null}
         */
        this.GroupList = null;

        /**
         * 网络名称
         * @type {string || null}
         */
        this.ClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new GroupDetailForUser();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * GetPeerLogForUser请求参数结构体
 * @class
 */
class GetPeerLogForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：peer_mng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：peer_log_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 调用合约的组织名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 节点名称
         * @type {string || null}
         */
        this.PeerName = null;

        /**
         * 日志开始时间，如"2020-11-24 19:49:25"
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 返回日志行数的最大值，系统设定该参数最大为1000，且一行日志的最大字节数是500，即最大返回50万个字节数的日志数据
         * @type {number || null}
         */
        this.RowNum = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.PeerName = 'PeerName' in params ? params.PeerName : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.RowNum = 'RowNum' in params ? params.RowNum : null;

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
 * DownloadUserCert请求参数结构体
 * @class
 */
class DownloadUserCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定字段：cert_mng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：cert_download_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 证书ID，可以在证书详情页面获取
         * @type {number || null}
         */
        this.CertId = null;

        /**
         * 证书DN，可以在证书详情页面获取
         * @type {string || null}
         */
        this.CertDn = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 下载证书的组织名称，可以在组织管理列表中获取当前组织的名称
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertDn = 'CertDn' in params ? params.CertDn : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

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
         * 当前组织加入的通道数量
         * @type {number || null}
         */
        this.JoinChannelCount = null;

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
        this.OrderCount = null;

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
        this.JoinChannelCount = 'JoinChannelCount' in params ? params.JoinChannelCount : null;
        this.TotalPeerCount = 'TotalPeerCount' in params ? params.TotalPeerCount : null;
        this.MyPeerCount = 'MyPeerCount' in params ? params.MyPeerCount : null;
        this.OrderCount = 'OrderCount' in params ? params.OrderCount : null;
        this.TotalGroupCount = 'TotalGroupCount' in params ? params.TotalGroupCount : null;
        this.MyGroupCount = 'MyGroupCount' in params ? params.MyGroupCount : null;
        this.TotalChaincodeCount = 'TotalChaincodeCount' in params ? params.TotalChaincodeCount : null;
        this.RecentChaincodeCount = 'RecentChaincodeCount' in params ? params.RecentChaincodeCount : null;
        this.MyChaincodeCount = 'MyChaincodeCount' in params ? params.MyChaincodeCount : null;
        this.TotalCertCount = 'TotalCertCount' in params ? params.TotalCertCount : null;
        this.TlsCertCount = 'TlsCertCount' in params ? params.TlsCertCount : null;
        this.PeerCertCount = 'PeerCertCount' in params ? params.PeerCertCount : null;
        this.ClientCertCount = 'ClientCertCount' in params ? params.ClientCertCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TransByDynamicContractHandler返回参数结构体
 * @class
 */
class TransByDynamicContractHandlerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易结果json字符串
         * @type {string || null}
         */
        this.TransactionRsp = null;

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
        this.TransactionRsp = 'TransactionRsp' in params ? params.TransactionRsp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * GetBlockTransactionListForUser请求参数结构体
 * @class
 */
class GetBlockTransactionListForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定字段：transaction
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：block_transaction_list_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 参与交易的组织名称，可以在组织管理列表中获取当前组织的名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 业务所属通道名称，可在通道详情或列表中获取
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 区块ID，通过GetInvokeTx接口可以获取交易所在的区块ID
         * @type {number || null}
         */
        this.BlockId = null;

        /**
         * 查询的交易列表起始偏移地址
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询的交易列表数量
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateChaincodeAndInstallForUser请求参数结构体
 * @class
 */
class CreateChaincodeAndInstallForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：chaincode_mng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：chaincode_create_and_install_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 合约安装节点名称，可以在通道详情中获取该通道上的节点名称
         * @type {string || null}
         */
        this.PeerName = null;

        /**
         * 智能合约名称，格式说明：以小写字母开头，由2-12位数字或小写字母组成
         * @type {string || null}
         */
        this.ChaincodeName = null;

        /**
         * 智能合约版本，格式说明：由1-12位数字、小写字母、特殊符号(“.”)组成，如v1.0
         * @type {string || null}
         */
        this.ChaincodeVersion = null;

        /**
         * 智能合约代码文件类型，支持类型：
1. "go"：.go合约文件
2. "gozip"：go合约工程zip包，要求压缩目录为代码根目录
3. "javazip"：java合约工程zip包，要求压缩目录为代码根目录
4. "nodezip"：nodejs合约工程zip包，要求压缩目录为代码根目录
         * @type {string || null}
         */
        this.ChaincodeFileType = null;

        /**
         * 合约内容，合约文件或压缩包内容的base64编码，大小要求小于等于5M
         * @type {string || null}
         */
        this.Chaincode = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.PeerName = 'PeerName' in params ? params.PeerName : null;
        this.ChaincodeName = 'ChaincodeName' in params ? params.ChaincodeName : null;
        this.ChaincodeVersion = 'ChaincodeVersion' in params ? params.ChaincodeVersion : null;
        this.ChaincodeFileType = 'ChaincodeFileType' in params ? params.ChaincodeFileType : null;
        this.Chaincode = 'Chaincode' in params ? params.Chaincode : null;

    }
}

/**
 * SrvInvoke返回参数结构体
 * @class
 */
class SrvInvokeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码
         * @type {number || null}
         */
        this.RetCode = null;

        /**
         * 返回消息
         * @type {string || null}
         */
        this.RetMsg = null;

        /**
         * 返回数据
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
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetBcosTransByHash返回参数结构体
 * @class
 */
class GetBcosTransByHashResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易信息json字符串
         * @type {string || null}
         */
        this.TransactionJson = null;

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
        this.TransactionJson = 'TransactionJson' in params ? params.TransactionJson : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetBlockListHandler请求参数结构体
 * @class
 */
class GetBlockListHandlerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定字段：block
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：get_block_list
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 记录偏移数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页记录数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 当前群组编号
         * @type {string || null}
         */
        this.GroupPk = null;

        /**
         * 区块哈希
         * @type {string || null}
         */
        this.BlockHash = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.BlockHash = 'BlockHash' in params ? params.BlockHash : null;

    }
}

/**
 * GetChaincodeLogForUser返回参数结构体
 * @class
 */
class GetChaincodeLogForUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回日志总行数，不会超过入参的RowNum
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 日志列表
         * @type {Array.<LogDetailForUser> || null}
         */
        this.ChaincodeLogList = null;

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

        if (params.ChaincodeLogList) {
            this.ChaincodeLogList = new Array();
            for (let z in params.ChaincodeLogList) {
                let obj = new LogDetailForUser();
                obj.deserialize(params.ChaincodeLogList[z]);
                this.ChaincodeLogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 日志详情信息
 * @class
 */
class LogDetailForUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志行号
         * @type {number || null}
         */
        this.LineNumber = null;

        /**
         * 日志详情
         * @type {string || null}
         */
        this.LogMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LineNumber = 'LineNumber' in params ? params.LineNumber : null;
        this.LogMessage = 'LogMessage' in params ? params.LogMessage : null;

    }
}

/**
 * InvokeBcosTrans返回参数结构体
 * @class
 */
class InvokeBcosTransResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易结果json字符串
         * @type {string || null}
         */
        this.TransactionRsp = null;

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
        this.TransactionRsp = 'TransactionRsp' in params ? params.TransactionRsp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InitializeChaincodeForUser返回参数结构体
 * @class
 */
class InitializeChaincodeForUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例化任务ID，用于查询实例化结果
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 组织详情信息
 * @class
 */
class GroupDetailForUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组织名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 组织MSP Identity
         * @type {string || null}
         */
        this.GroupMSPId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupMSPId = 'GroupMSPId' in params ? params.GroupMSPId : null;

    }
}

/**
 * GetBcosBlockByNumber返回参数结构体
 * @class
 */
class GetBcosBlockByNumberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回区块json字符串
         * @type {string || null}
         */
        this.BlockJson = null;

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
        this.BlockJson = 'BlockJson' in params ? params.BlockJson : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetClusterListForUser请求参数结构体
 * @class
 */
class GetClusterListForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：cluster_mng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：cluster_list_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 返回数据项数，本接口默认取值：10，上限取值：20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回数据起始偏移，本接口默认取值：0
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * 区块数据Hash数值
         * @type {string || null}
         */
        this.DataHash = null;

        /**
         * 区块ID，与区块编号一致
         * @type {number || null}
         */
        this.BlockId = null;

        /**
         * 前一个区块Hash
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
 * Bcos交易信息对象
 * @class
 */
class BcosTransInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所属区块高度
         * @type {number || null}
         */
        this.BlockNumber = null;

        /**
         * 区块时间戳
         * @type {string || null}
         */
        this.BlockTimestamp = null;

        /**
         * 交易哈希
         * @type {string || null}
         */
        this.TransHash = null;

        /**
         * 交易发起者
         * @type {string || null}
         */
        this.TransFrom = null;

        /**
         * 交易接收者
         * @type {string || null}
         */
        this.TransTo = null;

        /**
         * 落库时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlockNumber = 'BlockNumber' in params ? params.BlockNumber : null;
        this.BlockTimestamp = 'BlockTimestamp' in params ? params.BlockTimestamp : null;
        this.TransHash = 'TransHash' in params ? params.TransHash : null;
        this.TransFrom = 'TransFrom' in params ? params.TransFrom : null;
        this.TransTo = 'TransTo' in params ? params.TransTo : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * GetChaincodeInitializeResultForUser返回参数结构体
 * @class
 */
class GetChaincodeInitializeResultForUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例化结果：0，实例化中；1，实例化成功；2，实例化失败
         * @type {number || null}
         */
        this.InitResult = null;

        /**
         * 实例化信息
         * @type {string || null}
         */
        this.InitMessage = null;

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
        this.InitResult = 'InitResult' in params ? params.InitResult : null;
        this.InitMessage = 'InitMessage' in params ? params.InitMessage : null;
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
         * 对该笔交易进行背书的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称及其所属组织名称
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
         * 被调用的函数参数列表，参数列表大小总和要求小于2M
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
 * GetBlockListHandler返回参数结构体
 * @class
 */
class GetBlockListHandlerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 当前群组编号
         * @type {string || null}
         */
        this.GroupPk = null;

        /**
         * 返回数据列表
         * @type {Array.<BcosBlockObj> || null}
         */
        this.List = null;

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
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new BcosBlockObj();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTransactionDetailForUser返回参数结构体
 * @class
 */
class GetTransactionDetailForUserResponse extends  AbstractModel {
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
         * 交易类型（普通交易和配置交易）
         * @type {string || null}
         */
        this.TransactionType = null;

        /**
         * 交易状态
         * @type {string || null}
         */
        this.TransactionStatus = null;

        /**
         * 交易创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 交易数据
         * @type {string || null}
         */
        this.TransactionData = null;

        /**
         * 交易所在区块号
         * @type {number || null}
         */
        this.BlockId = null;

        /**
         * 交易所在区块哈希
         * @type {string || null}
         */
        this.BlockHash = null;

        /**
         * 交易所在区块高度
         * @type {number || null}
         */
        this.BlockHeight = null;

        /**
         * 通道名称
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 交易所在合约名称
         * @type {string || null}
         */
        this.ContractName = null;

        /**
         * 背书组织列表
         * @type {Array.<EndorserGroup> || null}
         */
        this.EndorserOrgList = null;

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
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.TransactionHash = 'TransactionHash' in params ? params.TransactionHash : null;
        this.CreateOrgName = 'CreateOrgName' in params ? params.CreateOrgName : null;
        this.TransactionType = 'TransactionType' in params ? params.TransactionType : null;
        this.TransactionStatus = 'TransactionStatus' in params ? params.TransactionStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TransactionData = 'TransactionData' in params ? params.TransactionData : null;
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.BlockHash = 'BlockHash' in params ? params.BlockHash : null;
        this.BlockHeight = 'BlockHeight' in params ? params.BlockHeight : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.ContractName = 'ContractName' in params ? params.ContractName : null;

        if (params.EndorserOrgList) {
            this.EndorserOrgList = new Array();
            for (let z in params.EndorserOrgList) {
                let obj = new EndorserGroup();
                obj.deserialize(params.EndorserOrgList[z]);
                this.EndorserOrgList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetBcosTransByHash请求参数结构体
 * @class
 */
class GetBcosTransByHashRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组编号，可在群组列表中获取
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 交易哈希值，可以从InvokeBcosTrans接口的返回值中解析获取
         * @type {string || null}
         */
        this.TransHash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.TransHash = 'TransHash' in params ? params.TransHash : null;

    }
}

/**
 * GetChannelListForUser返回参数结构体
 * @class
 */
class GetChannelListForUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 通道列表
         * @type {Array.<ChannelDetailForUser> || null}
         */
        this.ChannelList = null;

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

        if (params.ChannelList) {
            this.ChannelList = new Array();
            for (let z in params.ChannelList) {
                let obj = new ChannelDetailForUser();
                obj.deserialize(params.ChannelList[z]);
                this.ChannelList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetChaincodeCompileLogForUser返回参数结构体
 * @class
 */
class GetChaincodeCompileLogForUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志总行数，上限2000条日志
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 日志列表
         * @type {Array.<LogDetailForUser> || null}
         */
        this.CompileLogList = null;

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

        if (params.CompileLogList) {
            this.CompileLogList = new Array();
            for (let z in params.CompileLogList) {
                let obj = new LogDetailForUser();
                obj.deserialize(params.CompileLogList[z]);
                this.CompileLogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeployDynamicBcosContract请求参数结构体
 * @class
 */
class DeployDynamicBcosContractRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组编号，可在群组列表中获取
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 合约编译后的ABI，可在合约详情获取
         * @type {string || null}
         */
        this.AbiInfo = null;

        /**
         * 合约编译得到的字节码，hex编码，可在合约详情获取
         * @type {string || null}
         */
        this.ByteCodeBin = null;

        /**
         * 签名用户编号，可在私钥管理页面获取
         * @type {string || null}
         */
        this.SignUserId = null;

        /**
         * 构造函数入参，Json数组，多个参数以逗号分隔（参数为数组时同理），如：["str1",["arr1","arr2"]]
         * @type {string || null}
         */
        this.ConstructorParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.AbiInfo = 'AbiInfo' in params ? params.AbiInfo : null;
        this.ByteCodeBin = 'ByteCodeBin' in params ? params.ByteCodeBin : null;
        this.SignUserId = 'SignUserId' in params ? params.SignUserId : null;
        this.ConstructorParams = 'ConstructorParams' in params ? params.ConstructorParams : null;

    }
}

/**
 * SendTransactionHandler请求参数结构体
 * @class
 */
class SendTransactionHandlerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定字段：transaction
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：send_transaction
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 群组编号
         * @type {string || null}
         */
        this.GroupPk = null;

        /**
         * 合约编号
         * @type {number || null}
         */
        this.ContractId = null;

        /**
         * 合约方法名
         * @type {string || null}
         */
        this.FuncName = null;

        /**
         * 合约方法入参
         * @type {Array.<string> || null}
         */
        this.FuncParam = null;

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
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.ContractId = 'ContractId' in params ? params.ContractId : null;
        this.FuncName = 'FuncName' in params ? params.FuncName : null;
        this.FuncParam = 'FuncParam' in params ? params.FuncParam : null;

    }
}

/**
 * GetBcosTransList返回参数结构体
 * @class
 */
class GetBcosTransListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回数据列表
         * @type {Array.<BcosTransInfo> || null}
         */
        this.List = null;

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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new BcosTransInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BlockByNumberHandler请求参数结构体
 * @class
 */
class BlockByNumberHandlerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定字段：block
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：block_by_number
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 当前群组编号
         * @type {string || null}
         */
        this.GroupPk = null;

        /**
         * 区块高度
         * @type {number || null}
         */
        this.BlockNumber = null;

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
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.BlockNumber = 'BlockNumber' in params ? params.BlockNumber : null;

    }
}

/**
 * Bcos区块对象
 * @class
 */
class BcosBlockObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区块哈希
         * @type {string || null}
         */
        this.BlockHash = null;

        /**
         * 区块高度
         * @type {number || null}
         */
        this.BlockNumber = null;

        /**
         * 区块时间戳
         * @type {string || null}
         */
        this.BlockTimestamp = null;

        /**
         * 打包节点ID
         * @type {string || null}
         */
        this.Sealer = null;

        /**
         * 打包节点索引
         * @type {number || null}
         */
        this.SealerIndex = null;

        /**
         * 记录保存时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 交易数量
         * @type {number || null}
         */
        this.TransCount = null;

        /**
         * 记录修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlockHash = 'BlockHash' in params ? params.BlockHash : null;
        this.BlockNumber = 'BlockNumber' in params ? params.BlockNumber : null;
        this.BlockTimestamp = 'BlockTimestamp' in params ? params.BlockTimestamp : null;
        this.Sealer = 'Sealer' in params ? params.Sealer : null;
        this.SealerIndex = 'SealerIndex' in params ? params.SealerIndex : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TransCount = 'TransCount' in params ? params.TransCount : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * 通道详情信息
 * @class
 */
class ChannelDetailForUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道名称
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 当前组织加入通道的节点列表
         * @type {Array.<PeerDetailForUser> || null}
         */
        this.PeerList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;

        if (params.PeerList) {
            this.PeerList = new Array();
            for (let z in params.PeerList) {
                let obj = new PeerDetailForUser();
                obj.deserialize(params.PeerList[z]);
                this.PeerList.push(obj);
            }
        }

    }
}

/**
 * GetTransByHashHandler请求参数结构体
 * @class
 */
class GetTransByHashHandlerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定字段：transaction
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，固定字段：get_trans_by_hash
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 群组编号
         * @type {string || null}
         */
        this.GroupPk = null;

        /**
         * 交易哈希
         * @type {string || null}
         */
        this.TransHash = null;

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
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.TransHash = 'TransHash' in params ? params.TransHash : null;

    }
}

/**
 * CreateChaincodeAndInstallForUser返回参数结构体
 * @class
 */
class CreateChaincodeAndInstallForUserResponse extends  AbstractModel {
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
 * GetChannelListForUser请求参数结构体
 * @class
 */
class GetChannelListForUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，本接口取值：channel_mng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名，本接口取值：channel_list_for_user
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 组织名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 返回数据项数，本接口默认取值：10，上限取值：20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回数据起始偏移，本接口默认取值：0
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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 背书组织及其节点列表
 * @class
 */
class EndorserGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 背书组织名称
         * @type {string || null}
         */
        this.EndorserGroupName = null;

        /**
         * 背书节点列表
         * @type {Array.<string> || null}
         */
        this.EndorserPeerList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndorserGroupName = 'EndorserGroupName' in params ? params.EndorserGroupName : null;
        this.EndorserPeerList = 'EndorserPeerList' in params ? params.EndorserPeerList : null;

    }
}

module.exports = {
    PeerDetailForUser: PeerDetailForUser,
    GetBcosTransListRequest: GetBcosTransListRequest,
    QueryRequest: QueryRequest,
    DeployDynamicBcosContractResponse: DeployDynamicBcosContractResponse,
    GetClusterListForUserResponse: GetClusterListForUserResponse,
    GetBlockTransactionListForUserResponse: GetBlockTransactionListForUserResponse,
    SendTransactionHandlerResponse: SendTransactionHandlerResponse,
    ApplyUserCertRequest: ApplyUserCertRequest,
    TransByDynamicContractHandlerRequest: TransByDynamicContractHandlerRequest,
    GetTransListHandlerResponse: GetTransListHandlerResponse,
    InvokeBcosTransRequest: InvokeBcosTransRequest,
    GetChaincodeInitializeResultForUserRequest: GetChaincodeInitializeResultForUserRequest,
    InitializeChaincodeForUserRequest: InitializeChaincodeForUserRequest,
    DeployDynamicContractHandlerResponse: DeployDynamicContractHandlerResponse,
    SrvInvokeRequest: SrvInvokeRequest,
    ApplyUserCertResponse: ApplyUserCertResponse,
    GetChaincodeCompileLogForUserRequest: GetChaincodeCompileLogForUserRequest,
    GetBcosBlockByNumberRequest: GetBcosBlockByNumberRequest,
    GetPeerLogForUserResponse: GetPeerLogForUserResponse,
    GetBcosBlockListResponse: GetBcosBlockListResponse,
    DownloadUserCertResponse: DownloadUserCertResponse,
    GetChaincodeLogForUserRequest: GetChaincodeLogForUserRequest,
    GetLatesdTransactionListRequest: GetLatesdTransactionListRequest,
    InvokeResponse: InvokeResponse,
    GetTransactionDetailForUserRequest: GetTransactionDetailForUserRequest,
    GetBlockListResponse: GetBlockListResponse,
    TransactionItem: TransactionItem,
    GetBcosBlockListRequest: GetBcosBlockListRequest,
    GetClusterSummaryRequest: GetClusterSummaryRequest,
    BlockByNumberHandlerResponse: BlockByNumberHandlerResponse,
    GetTransListHandlerRequest: GetTransListHandlerRequest,
    GetTransByHashHandlerResponse: GetTransByHashHandlerResponse,
    GetInvokeTxRequest: GetInvokeTxRequest,
    DeployDynamicContractHandlerRequest: DeployDynamicContractHandlerRequest,
    ClusterDetailForUser: ClusterDetailForUser,
    GetPeerLogForUserRequest: GetPeerLogForUserRequest,
    GetLatesdTransactionListResponse: GetLatesdTransactionListResponse,
    DownloadUserCertRequest: DownloadUserCertRequest,
    GetClusterSummaryResponse: GetClusterSummaryResponse,
    TransByDynamicContractHandlerResponse: TransByDynamicContractHandlerResponse,
    PeerSet: PeerSet,
    GetBlockTransactionListForUserRequest: GetBlockTransactionListForUserRequest,
    CreateChaincodeAndInstallForUserRequest: CreateChaincodeAndInstallForUserRequest,
    SrvInvokeResponse: SrvInvokeResponse,
    GetBcosTransByHashResponse: GetBcosTransByHashResponse,
    GetBlockListHandlerRequest: GetBlockListHandlerRequest,
    GetChaincodeLogForUserResponse: GetChaincodeLogForUserResponse,
    LogDetailForUser: LogDetailForUser,
    InvokeBcosTransResponse: InvokeBcosTransResponse,
    InitializeChaincodeForUserResponse: InitializeChaincodeForUserResponse,
    GroupDetailForUser: GroupDetailForUser,
    GetBcosBlockByNumberResponse: GetBcosBlockByNumberResponse,
    GetClusterListForUserRequest: GetClusterListForUserRequest,
    Block: Block,
    GetBlockListRequest: GetBlockListRequest,
    BcosTransInfo: BcosTransInfo,
    GetChaincodeInitializeResultForUserResponse: GetChaincodeInitializeResultForUserResponse,
    InvokeRequest: InvokeRequest,
    GetInvokeTxResponse: GetInvokeTxResponse,
    GetBlockListHandlerResponse: GetBlockListHandlerResponse,
    GetTransactionDetailForUserResponse: GetTransactionDetailForUserResponse,
    GetBcosTransByHashRequest: GetBcosTransByHashRequest,
    GetChannelListForUserResponse: GetChannelListForUserResponse,
    GetChaincodeCompileLogForUserResponse: GetChaincodeCompileLogForUserResponse,
    DeployDynamicBcosContractRequest: DeployDynamicBcosContractRequest,
    SendTransactionHandlerRequest: SendTransactionHandlerRequest,
    GetBcosTransListResponse: GetBcosTransListResponse,
    BlockByNumberHandlerRequest: BlockByNumberHandlerRequest,
    BcosBlockObj: BcosBlockObj,
    ChannelDetailForUser: ChannelDetailForUser,
    GetTransByHashHandlerRequest: GetTransByHashHandlerRequest,
    CreateChaincodeAndInstallForUserResponse: CreateChaincodeAndInstallForUserResponse,
    GetChannelListForUserRequest: GetChannelListForUserRequest,
    QueryResponse: QueryResponse,
    EndorserGroup: EndorserGroup,

}
