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
 * 凭证链上状态信息
 * @class
 */
class CredentialStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭证唯一id
         * @type {string || null}
         */
        this.CredentialId = null;

        /**
         * 凭证状态（0：吊销；1：有效）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 凭证颁发者Did
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * 凭证摘要
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Digest = null;

        /**
         * 凭证签名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Signature = null;

        /**
         * 更新时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CredentialId = 'CredentialId' in params ? params.CredentialId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.Digest = 'Digest' in params ? params.Digest : null;
        this.Signature = 'Signature' in params ? params.Signature : null;
        this.TimeStamp = 'TimeStamp' in params ? params.TimeStamp : null;

    }
}

/**
 * QueryPolicy请求参数结构体
 * @class
 */
class QueryPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * policy索引
         * @type {number || null}
         */
        this.PolicyIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;

    }
}

/**
 * RegisterClaimPolicy请求参数结构体
 * @class
 */
class RegisterClaimPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cpt索引
         * @type {number || null}
         */
        this.CptIndex = null;

        /**
         * 披露策略
         * @type {string || null}
         */
        this.Policy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CptIndex = 'CptIndex' in params ? params.CptIndex : null;
        this.Policy = 'Policy' in params ? params.Policy : null;

    }
}

/**
 * GetDidServiceDetail返回参数结构体
 * @class
 */
class GetDidServiceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * did服务信息
         * @type {DidServiceInfo || null}
         */
        this.DidService = null;

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

        if (params.DidService) {
            let obj = new DidServiceInfo();
            obj.deserialize(params.DidService)
            this.DidService = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCredential返回参数结构体
 * @class
 */
class CreateCredentialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Credential的具体信息
         * @type {string || null}
         */
        this.CredentialData = null;

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
        this.CredentialData = 'CredentialData' in params ? params.CredentialData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetConsortiumList请求参数结构体
 * @class
 */
class GetConsortiumListRequest extends  AbstractModel {
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
 * DownCpt返回参数结构体
 * @class
 */
class DownCptResponse extends  AbstractModel {
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
 * GetCredentialIssueTrend返回参数结构体
 * @class
 */
class GetCredentialIssueTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trend集合
         * @type {Array.<Trend> || null}
         */
        this.Trend = null;

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

        if (params.Trend) {
            this.Trend = new Array();
            for (let z in params.Trend) {
                let obj = new Trend();
                obj.deserialize(params.Trend[z]);
                this.Trend.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCredential请求参数结构体
 * @class
 */
class CreateCredentialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数集合，详见示例
         * @type {FunctionArg || null}
         */
        this.FunctionArg = null;

        /**
         * 参数集合，详见示例
         * @type {TransactionArg || null}
         */
        this.TransactionArg = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.VersionCredential = null;

        /**
         * 是否未签名
         * @type {boolean || null}
         */
        this.UnSigned = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FunctionArg) {
            let obj = new FunctionArg();
            obj.deserialize(params.FunctionArg)
            this.FunctionArg = obj;
        }

        if (params.TransactionArg) {
            let obj = new TransactionArg();
            obj.deserialize(params.TransactionArg)
            this.TransactionArg = obj;
        }
        this.VersionCredential = 'VersionCredential' in params ? params.VersionCredential : null;
        this.UnSigned = 'UnSigned' in params ? params.UnSigned : null;

    }
}

/**
 * CreateDidService返回参数结构体
 * @class
 */
class CreateDidServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务信息
         * @type {Task || null}
         */
        this.Task = null;

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

        if (params.Task) {
            let obj = new Task();
            obj.deserialize(params.Task)
            this.Task = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetConsortiumList返回参数结构体
 * @class
 */
class GetConsortiumListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联盟列表
         * @type {Array.<ConsortiumItem> || null}
         */
        this.ConsortiumList = null;

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

        if (params.ConsortiumList) {
            this.ConsortiumList = new Array();
            for (let z in params.ConsortiumList) {
                let obj = new ConsortiumItem();
                obj.deserialize(params.ConsortiumList[z]);
                this.ConsortiumList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCredentialCptRank请求参数结构体
 * @class
 */
class GetCredentialCptRankRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间（支持到天 2021-4-23）
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间（支持到天 2021-4-23）
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * GetPolicyList请求参数结构体
 * @class
 */
class GetPolicyListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始位置
         * @type {number || null}
         */
        this.DisplayStart = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.DisplayLength = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayStart = 'DisplayStart' in params ? params.DisplayStart : null;
        this.DisplayLength = 'DisplayLength' in params ? params.DisplayLength : null;

    }
}

/**
 * GetConsortiumClusterList返回参数结构体
 * @class
 */
class GetConsortiumClusterListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络列表
         * @type {Array.<BcosClusterItem> || null}
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

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new BcosClusterItem();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDidService、CheckDidDeploy出参
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 服务ID
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * 0: 部署中，1:部署成功，其他失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 错误提示
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * 生成时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * GetCptList请求参数结构体
 * @class
 */
class GetCptListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始位置
         * @type {number || null}
         */
        this.DisplayStart = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.DisplayLength = null;

        /**
         * 模板类型，0: 所有模板，1: 系统模板，2: 用户模板，3:普通模板
         * @type {number || null}
         */
        this.CptType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayStart = 'DisplayStart' in params ? params.DisplayStart : null;
        this.DisplayLength = 'DisplayLength' in params ? params.DisplayLength : null;
        this.CptType = 'CptType' in params ? params.CptType : null;

    }
}

/**
 * GetAuthoritiesList请求参数结构体
 * @class
 */
class GetAuthoritiesListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页码，从1开始
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * Did信息
         * @type {string || null}
         */
        this.Did = null;

        /**
         * 权威认证 1:已认证，2:未认证
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
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * GetAgencyTDid请求参数结构体
 * @class
 */
class GetAgencyTDidRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * RemoveHash请求参数结构体
 * @class
 */
class RemoveHashRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合约CNS地址
         * @type {string || null}
         */
        this.Hash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hash = 'Hash' in params ? params.Hash : null;

    }
}

/**
 * GetGroupList请求参数结构体
 * @class
 */
class GetGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0为未部署DID服务的群组，1为已部署DID服务的群组
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * 验证凭证签名
 * @class
 */
class Proof extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建时间
         * @type {number || null}
         */
        this.Created = null;

        /**
         * 创建着did
         * @type {string || null}
         */
        this.Creator = null;

        /**
         * salt值
         * @type {string || null}
         */
        this.SaltJson = null;

        /**
         * 签名
         * @type {string || null}
         */
        this.SignatureValue = null;

        /**
         * type类型
         * @type {string || null}
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
        this.Created = 'Created' in params ? params.Created : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.SaltJson = 'SaltJson' in params ? params.SaltJson : null;
        this.SignatureValue = 'SignatureValue' in params ? params.SignatureValue : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * GetDeployInfo请求参数结构体
 * @class
 */
class GetDeployInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合约CNS地址
         * @type {string || null}
         */
        this.Hash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hash = 'Hash' in params ? params.Hash : null;

    }
}

/**
 * 权威机构
 * @class
 */
class Authority extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权威机构ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Did的ID
         * @type {number || null}
         */
        this.DidId = null;

        /**
         * DID具体信息
         * @type {string || null}
         */
        this.Did = null;

        /**
         * 机构名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 权威认证 1:已认证，2:未认证
         * @type {number || null}
         */
        this.Status = null;

        /**
         * DID服务ID
         * @type {number || null}
         */
        this.DidServiceId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ContractAppId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 注册时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegisterTime = null;

        /**
         * 认证时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecognizeTime = null;

        /**
         * 生成时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 合约名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 链上标签
         * @type {string || null}
         */
        this.LabelName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.DidId = 'DidId' in params ? params.DidId : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DidServiceId = 'DidServiceId' in params ? params.DidServiceId : null;
        this.ContractAppId = 'ContractAppId' in params ? params.ContractAppId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RegisterTime = 'RegisterTime' in params ? params.RegisterTime : null;
        this.RecognizeTime = 'RecognizeTime' in params ? params.RecognizeTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.LabelName = 'LabelName' in params ? params.LabelName : null;

    }
}

/**
 * CreateLabel返回参数结构体
 * @class
 */
class CreateLabelResponse extends  AbstractModel {
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
 * GetPublicKey请求参数结构体
 * @class
 */
class GetPublicKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * did的具体号码
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * 标签
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签ID
         * @type {number || null}
         */
        this.LabelId = null;

        /**
         * 标签名称
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * did数量
         * @type {number || null}
         */
        this.DidCount = null;

        /**
         * 创建者did
         * @type {string || null}
         */
        this.Did = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelId = 'LabelId' in params ? params.LabelId : null;
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.DidCount = 'DidCount' in params ? params.DidCount : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * GetDidServiceList返回参数结构体
 * @class
 */
class GetDidServiceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DID服务列表
         * @type {Array.<DidServiceInfo> || null}
         */
        this.DidServiceList = null;

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

        if (params.DidServiceList) {
            this.DidServiceList = new Array();
            for (let z in params.DidServiceList) {
                let obj = new DidServiceInfo();
                obj.deserialize(params.DidServiceList[z]);
                this.DidServiceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeployByName返回参数结构体
 * @class
 */
class DeployByNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 哈希值
         * @type {string || null}
         */
        this.Hash = null;

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
        this.Hash = 'Hash' in params ? params.Hash : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLabel请求参数结构体
 * @class
 */
class CreateLabelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * 网络Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CreateDidService请求参数结构体
 * @class
 */
class CreateDidServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联盟名称
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * 联盟ID
         * @type {number || null}
         */
        this.ConsortiumId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 机构名称
         * @type {string || null}
         */
        this.AgencyName = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组名称
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
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.AgencyName = 'AgencyName' in params ? params.AgencyName : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * GetDidClusterDetail返回参数结构体
 * @class
 */
class GetDidClusterDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 组织名称
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * 区块链组织名称
         * @type {string || null}
         */
        this.ChainAgency = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.ChainAgency = 'ChainAgency' in params ? params.ChainAgency : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeAuthorityIssuer返回参数结构体
 * @class
 */
class RecognizeAuthorityIssuerResponse extends  AbstractModel {
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
 * EnableHash返回参数结构体
 * @class
 */
class EnableHashResponse extends  AbstractModel {
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
 * GetCredentialIssueTrend请求参数结构体
 * @class
 */
class GetCredentialIssueTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间（支持到天 2021-4-23）
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间（支持到天 2021-4-23）
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * EnableHash请求参数结构体
 * @class
 */
class EnableHashRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合约CNS地址
         * @type {string || null}
         */
        this.Hash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hash = 'Hash' in params ? params.Hash : null;

    }
}

/**
 * GetDidClusterList请求参数结构体
 * @class
 */
class GetDidClusterListRequest extends  AbstractModel {
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
 * GetCptInfo请求参数结构体
 * @class
 */
class GetCptInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cpt索引
         * @type {number || null}
         */
        this.CptIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CptIndex = 'CptIndex' in params ? params.CptIndex : null;

    }
}

/**
 * DownCpt请求参数结构体
 * @class
 */
class DownCptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cpt索引
         * @type {number || null}
         */
        this.CptIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CptIndex = 'CptIndex' in params ? params.CptIndex : null;

    }
}

/**
 * GetCptList返回参数结构体
 * @class
 */
class GetCptListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * cpt数据集合
         * @type {Array.<CptListData> || null}
         */
        this.CptDataList = null;

        /**
         * 凭证模板总数
         * @type {number || null}
         */
        this.AllCount = null;

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

        if (params.CptDataList) {
            this.CptDataList = new Array();
            for (let z in params.CptDataList) {
                let obj = new CptListData();
                obj.deserialize(params.CptDataList[z]);
                this.CptDataList.push(obj);
            }
        }
        this.AllCount = 'AllCount' in params ? params.AllCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCptInfo返回参数结构体
 * @class
 */
class GetCptInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CptJsonData的具体信息
         * @type {string || null}
         */
        this.CptJsonData = null;

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
        this.CptJsonData = 'CptJsonData' in params ? params.CptJsonData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDidRegisterTrend请求参数结构体
 * @class
 */
class GetDidRegisterTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间（支持到天 2021-4-23）
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间（支持到天 2021-4-23）
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * AddLabel请求参数结构体
 * @class
 */
class AddLabelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签ID
         * @type {number || null}
         */
        this.LabelId = null;

        /**
         * tdid
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LabelId = 'LabelId' in params ? params.LabelId : null;
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * GetAuthorityIssuer返回参数结构体
 * @class
 */
class GetAuthorityIssuerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 区块链网络id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 区块链群组id
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 权威机构did
         * @type {string || null}
         */
        this.Did = null;

        /**
         * 机构备注信息
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 注册时间
         * @type {string || null}
         */
        this.RegisterTime = null;

        /**
         * 认证时间
         * @type {string || null}
         */
        this.RecognizeTime = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RegisterTime = 'RegisterTime' in params ? params.RegisterTime : null;
        this.RecognizeTime = 'RecognizeTime' in params ? params.RecognizeTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSelectiveCredential返回参数结构体
 * @class
 */
class CreateSelectiveCredentialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭证字符串
         * @type {string || null}
         */
        this.CredentialData = null;

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
        this.CredentialData = 'CredentialData' in params ? params.CredentialData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyCredential返回参数结构体
 * @class
 */
class VerifyCredentialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否验证成功
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 验证返回码
         * @type {number || null}
         */
        this.VerifyCode = null;

        /**
         * 验证消息
         * @type {string || null}
         */
        this.VerifyMessage = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.VerifyCode = 'VerifyCode' in params ? params.VerifyCode : null;
        this.VerifyMessage = 'VerifyMessage' in params ? params.VerifyMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * cpt集合数据
 * @class
 */
class CptListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID信息
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 模版名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 服务ID
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * 合约应用ID
         * @type {number || null}
         */
        this.ContractAppId = null;

        /**
         * 凭证模板ID
         * @type {number || null}
         */
        this.CptId = null;

        /**
         * 模板类型，1: 系统模板，2: 用户模板，3:普通模板
         * @type {number || null}
         */
        this.CptType = null;

        /**
         * 凭证模版描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 凭证模板Json
         * @type {string || null}
         */
        this.CptJson = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 创建者DID
         * @type {string || null}
         */
        this.CreatorDid = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ContractAppId = 'ContractAppId' in params ? params.ContractAppId : null;
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.CptType = 'CptType' in params ? params.CptType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CptJson = 'CptJson' in params ? params.CptJson : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreatorDid = 'CreatorDid' in params ? params.CreatorDid : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * 创建凭证入参的FunctionArg
 * @class
 */
class FunctionArg extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPT ID
         * @type {number || null}
         */
        this.CptId = null;

        /**
         * 签发者 did
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * 声明
         * @type {string || null}
         */
        this.ClaimJson = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.ClaimJson = 'ClaimJson' in params ? params.ClaimJson : null;

    }
}

/**
 * CreateTDidByPrivateKey请求参数结构体
 * @class
 */
class CreateTDidByPrivateKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 私钥
         * @type {string || null}
         */
        this.PrivateKey = null;

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
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;

    }
}

/**
 * RegisterCpt返回参数结构体
 * @class
 */
class RegisterCptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭证模板索引
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 凭证模板id
         * @type {number || null}
         */
        this.CptId = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetCredentialStatus请求参数结构体
 * @class
 */
class SetCredentialStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭证状态
         * @type {CredentialStatus || null}
         */
        this.CredentialStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CredentialStatus) {
            let obj = new CredentialStatus();
            obj.deserialize(params.CredentialStatus)
            this.CredentialStatus = obj;
        }

    }
}

/**
 * RemoveHash返回参数结构体
 * @class
 */
class RemoveHashResponse extends  AbstractModel {
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
 * CheckDidDeploy请求参数结构体
 * @class
 */
class CheckDidDeployRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * GetDidDocument返回参数结构体
 * @class
 */
class GetDidDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * DID文档
         * @type {string || null}
         */
        this.Document = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Document = 'Document' in params ? params.Document : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RegisterIssuer返回参数结构体
 * @class
 */
class RegisterIssuerResponse extends  AbstractModel {
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
 * CancelAuthorityIssuer请求参数结构体
 * @class
 */
class CancelAuthorityIssuerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * did具体信息
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * CancelAuthorityIssuer返回参数结构体
 * @class
 */
class CancelAuthorityIssuerResponse extends  AbstractModel {
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
 * CreateTDid请求参数结构体
 * @class
 */
class CreateTDidRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 部署机构为1，否则为0
         * @type {number || null}
         */
        this.Relegation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Relegation = 'Relegation' in params ? params.Relegation : null;

    }
}

/**
 * GetAuthoritiesList返回参数结构体
 * @class
 */
class GetAuthoritiesListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集合
         * @type {Array.<Authority> || null}
         */
        this.ResultList = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.AllCount = null;

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

        if (params.ResultList) {
            this.ResultList = new Array();
            for (let z in params.ResultList) {
                let obj = new Authority();
                obj.deserialize(params.ResultList[z]);
                this.ResultList.push(obj);
            }
        }
        this.AllCount = 'AllCount' in params ? params.AllCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSelectiveCredential请求参数结构体
 * @class
 */
class CreateSelectiveCredentialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数集合
         * @type {VerifyFunctionArg || null}
         */
        this.FunctionArg = null;

        /**
         * 批露策略id
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FunctionArg) {
            let obj = new VerifyFunctionArg();
            obj.deserialize(params.FunctionArg)
            this.FunctionArg = obj;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * CreateTDidByPrivateKey返回参数结构体
 * @class
 */
class CreateTDidByPrivateKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * did的具体信息
         * @type {string || null}
         */
        this.Did = null;

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
        this.Did = 'Did' in params ? params.Did : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeployByName请求参数结构体
 * @class
 */
class DeployByNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * GetDidServiceList请求参数结构体
 * @class
 */
class GetDidServiceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1: 以网络维度输出, 0: 以服务维度输出
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * GetAuthorityIssuer请求参数结构体
 * @class
 */
class GetAuthorityIssuerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * tdid
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * GetDidClusterList返回参数结构体
 * @class
 */
class GetDidClusterListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DID网络列表
         * @type {Array.<DidCluster> || null}
         */
        this.DidClusterList = null;

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

        if (params.DidClusterList) {
            this.DidClusterList = new Array();
            for (let z in params.DidClusterList) {
                let obj = new DidCluster();
                obj.deserialize(params.DidClusterList[z]);
                this.DidClusterList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeAuthorityIssuer请求参数结构体
 * @class
 */
class RecognizeAuthorityIssuerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * did具体信息
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * GetCredentialStatus请求参数结构体
 * @class
 */
class GetCredentialStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭证id
         * @type {string || null}
         */
        this.CredentialId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CredentialId = 'CredentialId' in params ? params.CredentialId : null;

    }
}

/**
 * GetAgencyTDid返回参数结构体
 * @class
 */
class GetAgencyTDidResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定前缀
         * @type {string || null}
         */
        this.Prefix = null;

        /**
         * did详情
         * @type {Array.<Identity> || null}
         */
        this.Identity = null;

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
        this.Prefix = 'Prefix' in params ? params.Prefix : null;

        if (params.Identity) {
            this.Identity = new Array();
            for (let z in params.Identity) {
                let obj = new Identity();
                obj.deserialize(params.Identity[z]);
                this.Identity.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DID服务基本信息
 * @class
 */
class DidServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DID服务索引
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 账号唯一标识
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 联盟id
         * @type {number || null}
         */
        this.ConsortiumId = null;

        /**
         * 联盟名称
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 链ID
         * @type {string || null}
         */
        this.ChainId = null;

        /**
         * 1为盟主，0为非盟主
         * @type {number || null}
         */
        this.RoleType = null;

        /**
         * 机构DID
         * @type {string || null}
         */
        this.AgencyDid = null;

        /**
         * 机构名称
         * @type {string || null}
         */
        this.CreateOrg = null;

        /**
         * 端点
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 生成时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 群组名称
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ChainId = 'ChainId' in params ? params.ChainId : null;
        this.RoleType = 'RoleType' in params ? params.RoleType : null;
        this.AgencyDid = 'AgencyDid' in params ? params.AgencyDid : null;
        this.CreateOrg = 'CreateOrg' in params ? params.CreateOrg : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * SetCredentialStatus返回参数结构体
 * @class
 */
class SetCredentialStatusResponse extends  AbstractModel {
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
 * 模板颁发量排名
 * @class
 */
class CptIssueRank extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名称
         * @type {string || null}
         */
        this.CptName = null;

        /**
         * 名次
         * @type {number || null}
         */
        this.Rank = null;

        /**
         * 颁发量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.ApplyName = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CptName = 'CptName' in params ? params.CptName : null;
        this.Rank = 'Rank' in params ? params.Rank : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ApplyName = 'ApplyName' in params ? params.ApplyName : null;
        this.ApplyId = 'ApplyId' in params ? params.ApplyId : null;

    }
}

/**
 * GetCredentialCptRank返回参数结构体
 * @class
 */
class GetCredentialCptRankResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rank集合
         * @type {Array.<CptIssueRank> || null}
         */
        this.RankIssueResult = null;

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

        if (params.RankIssueResult) {
            this.RankIssueResult = new Array();
            for (let z in params.RankIssueResult) {
                let obj = new CptIssueRank();
                obj.deserialize(params.RankIssueResult[z]);
                this.RankIssueResult.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建凭证第二个
 * @class
 */
class TransactionArg extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭证did
         * @type {string || null}
         */
        this.InvokerTDid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokerTDid = 'InvokerTDid' in params ? params.InvokerTDid : null;

    }
}

/**
 * RegisterIssuer请求参数结构体
 * @class
 */
class RegisterIssuerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * tdid
         * @type {string || null}
         */
        this.Did = null;

        /**
         * 权威机构名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * GetDidList返回参数结构体
 * @class
 */
class GetDidListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据列表
         * @type {Array.<DidData> || null}
         */
        this.DataList = null;

        /**
         * 数据总条数
         * @type {number || null}
         */
        this.AllCount = null;

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

        if (params.DataList) {
            this.DataList = new Array();
            for (let z in params.DataList) {
                let obj = new DidData();
                obj.deserialize(params.DataList[z]);
                this.DataList.push(obj);
            }
        }
        this.AllCount = 'AllCount' in params ? params.AllCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDeployInfo返回参数结构体
 * @class
 */
class GetDeployInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合约CNS地址
         * @type {string || null}
         */
        this.Hash = null;

        /**
         * 合约主群组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 部署机构DID
         * @type {string || null}
         */
        this.DeployDid = null;

        /**
         * TDID SDK版本
         * @type {string || null}
         */
        this.SdkVersion = null;

        /**
         * TDID 合约版本
         * @type {string || null}
         */
        this.ContractVersion = null;

        /**
         * 区块链节点版本
         * @type {string || null}
         */
        this.BlockVersion = null;

        /**
         * 区块链节点IP
         * @type {string || null}
         */
        this.BlockIp = null;

        /**
         * DID合约地址
         * @type {string || null}
         */
        this.DidAddress = null;

        /**
         * CPT合约地址
         * @type {string || null}
         */
        this.CptAddress = null;

        /**
         * Authority Issuer地址
         * @type {string || null}
         */
        this.AuthorityAddress = null;

        /**
         * Evidence合约地址
         * @type {string || null}
         */
        this.EvidenceAddress = null;

        /**
         * Specific Issuer合约地址
         * @type {string || null}
         */
        this.SpecificAddress = null;

        /**
         * 链ID
         * @type {string || null}
         */
        this.ChainId = null;

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
        this.Hash = 'Hash' in params ? params.Hash : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DeployDid = 'DeployDid' in params ? params.DeployDid : null;
        this.SdkVersion = 'SdkVersion' in params ? params.SdkVersion : null;
        this.ContractVersion = 'ContractVersion' in params ? params.ContractVersion : null;
        this.BlockVersion = 'BlockVersion' in params ? params.BlockVersion : null;
        this.BlockIp = 'BlockIp' in params ? params.BlockIp : null;
        this.DidAddress = 'DidAddress' in params ? params.DidAddress : null;
        this.CptAddress = 'CptAddress' in params ? params.CptAddress : null;
        this.AuthorityAddress = 'AuthorityAddress' in params ? params.AuthorityAddress : null;
        this.EvidenceAddress = 'EvidenceAddress' in params ? params.EvidenceAddress : null;
        this.SpecificAddress = 'SpecificAddress' in params ? params.SpecificAddress : null;
        this.ChainId = 'ChainId' in params ? params.ChainId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 部署合约
 * @class
 */
class Contract extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名
         * @type {string || null}
         */
        this.ApplyName = null;

        /**
         * 合约状态 true:已启用 false:未启用
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 合约CNS地址
         * @type {string || null}
         */
        this.Hash = null;

        /**
         * 合约CNS地址脱敏
         * @type {string || null}
         */
        this.HashShow = null;

        /**
         * 部署机构DID
         * @type {string || null}
         */
        this.WeId = null;

        /**
         * 部署机构名称
         * @type {string || null}
         */
        this.DeployName = null;

        /**
         * 部署群组
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 部署时间
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
        this.ApplyName = 'ApplyName' in params ? params.ApplyName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Hash = 'Hash' in params ? params.Hash : null;
        this.HashShow = 'HashShow' in params ? params.HashShow : null;
        this.WeId = 'WeId' in params ? params.WeId : null;
        this.DeployName = 'DeployName' in params ? params.DeployName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * CreateTDidByPublicKey返回参数结构体
 * @class
 */
class CreateTDidByPublicKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * did具体信息
         * @type {string || null}
         */
        this.Did = null;

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
        this.Did = 'Did' in params ? params.Did : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckDidDeploy返回参数结构体
 * @class
 */
class CheckDidDeployResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务信息
         * @type {Task || null}
         */
        this.Task = null;

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

        if (params.Task) {
            let obj = new Task();
            obj.deserialize(params.Task)
            this.Task = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDidClusterDetail请求参数结构体
 * @class
 */
class GetDidClusterDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DID网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * GetConsortiumClusterList请求参数结构体
 * @class
 */
class GetConsortiumClusterListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联盟id
         * @type {number || null}
         */
        this.ConsortiumId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;

    }
}

/**
 * GetDidDetail返回参数结构体
 * @class
 */
class GetDidDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DID名称
         * @type {string || null}
         */
        this.Did = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 公钥
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * 权威认证
         * @type {number || null}
         */
        this.AuthorityState = null;

        /**
         * 联盟ID
         * @type {number || null}
         */
        this.ConsortiumId = null;

        /**
         * 联盟名称
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * bcos资源ID
         * @type {string || null}
         */
        this.ResChainId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

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
        this.Did = 'Did' in params ? params.Did : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.AuthorityState = 'AuthorityState' in params ? params.AuthorityState : null;
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ResChainId = 'ResChainId' in params ? params.ResChainId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 趋势
 * @class
 */
class Trend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间点
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 数量
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * bcos网络信息
 * @class
 */
class BcosClusterItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络索引id
         * @type {number || null}
         */
        this.ChainId = null;

        /**
         * 网络名称
         * @type {string || null}
         */
        this.ChainName = null;

        /**
         * 机构数量
         * @type {number || null}
         */
        this.AgencyCount = null;

        /**
         * 联盟id
         * @type {number || null}
         */
        this.ConsortiumId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 网络状态
         * @type {number || null}
         */
        this.ChainStatus = null;

        /**
         * 资源 id
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 组织名称
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * 机构id
         * @type {number || null}
         */
        this.AgencyId = null;

        /**
         * 续费状态
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 网络模式
         * @type {number || null}
         */
        this.TotalNetworkNode = null;

        /**
         * 创建节点数
         * @type {number || null}
         */
        this.TotalCreateNode = null;

        /**
         * 总群组数量
         * @type {number || null}
         */
        this.TotalGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChainId = 'ChainId' in params ? params.ChainId : null;
        this.ChainName = 'ChainName' in params ? params.ChainName : null;
        this.AgencyCount = 'AgencyCount' in params ? params.AgencyCount : null;
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ChainStatus = 'ChainStatus' in params ? params.ChainStatus : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.AgencyId = 'AgencyId' in params ? params.AgencyId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.TotalNetworkNode = 'TotalNetworkNode' in params ? params.TotalNetworkNode : null;
        this.TotalCreateNode = 'TotalCreateNode' in params ? params.TotalCreateNode : null;
        this.TotalGroups = 'TotalGroups' in params ? params.TotalGroups : null;

    }
}

/**
 * GetLabelList请求参数结构体
 * @class
 */
class GetLabelListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码，从1开始
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * did区块链网络信息
 * @class
 */
class DidCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 链ID
         * @type {number || null}
         */
        this.ChainId = null;

        /**
         * 链名称
         * @type {string || null}
         */
        this.ChainName = null;

        /**
         * 组织数量
         * @type {number || null}
         */
        this.AgencyCount = null;

        /**
         * 联盟ID
         * @type {number || null}
         */
        this.ConsortiumId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 网络状态
         * @type {number || null}
         */
        this.ChainStatus = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 联盟名称
         * @type {string || null}
         */
        this.ConsortiumName = null;

        /**
         * 组织ID
         * @type {number || null}
         */
        this.AgencyId = null;

        /**
         * 自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 网络节点总数
         * @type {number || null}
         */
        this.TotalNetworkNode = null;

        /**
         * 本机构节点数
         * @type {number || null}
         */
        this.TotalCreateNode = null;

        /**
         * 总群组数
         * @type {number || null}
         */
        this.TotalGroups = null;

        /**
         * DID总数
         * @type {number || null}
         */
        this.DidCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChainId = 'ChainId' in params ? params.ChainId : null;
        this.ChainName = 'ChainName' in params ? params.ChainName : null;
        this.AgencyCount = 'AgencyCount' in params ? params.AgencyCount : null;
        this.ConsortiumId = 'ConsortiumId' in params ? params.ConsortiumId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ChainStatus = 'ChainStatus' in params ? params.ChainStatus : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ConsortiumName = 'ConsortiumName' in params ? params.ConsortiumName : null;
        this.AgencyId = 'AgencyId' in params ? params.AgencyId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.TotalNetworkNode = 'TotalNetworkNode' in params ? params.TotalNetworkNode : null;
        this.TotalCreateNode = 'TotalCreateNode' in params ? params.TotalCreateNode : null;
        this.TotalGroups = 'TotalGroups' in params ? params.TotalGroups : null;
        this.DidCount = 'DidCount' in params ? params.DidCount : null;

    }
}

/**
 * GetDataPanel返回参数结构体
 * @class
 */
class GetDataPanelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区块链网络数量
         * @type {number || null}
         */
        this.BlockNetworkCount = null;

        /**
         * 区块链网络名称
         * @type {string || null}
         */
        this.BlockNetworkName = null;

        /**
         * 当前区块高度
         * @type {number || null}
         */
        this.BlockHeight = null;

        /**
         * 区块链网络类型
         * @type {number || null}
         */
        this.BlockNetworkType = null;

        /**
         * did数量
         * @type {number || null}
         */
        this.DidCount = null;

        /**
         * 凭证模版数量
         * @type {number || null}
         */
        this.CptCount = null;

        /**
         * 已认证权威机构数量
         * @type {number || null}
         */
        this.CertificatedAuthCount = null;

        /**
         * 颁发凭证数量
         * @type {number || null}
         */
        this.IssueCptCount = null;

        /**
         * 本周新增DID数量
         * @type {number || null}
         */
        this.NewDidCount = null;

        /**
         * BCOS网络类型数量
         * @type {number || null}
         */
        this.BcosCount = null;

        /**
         * Fabric网络类型数量
         * @type {number || null}
         */
        this.FabricCount = null;

        /**
         * 长安链网络类型数量
         * @type {number || null}
         */
        this.ChainMakerCount = null;

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
        this.BlockNetworkCount = 'BlockNetworkCount' in params ? params.BlockNetworkCount : null;
        this.BlockNetworkName = 'BlockNetworkName' in params ? params.BlockNetworkName : null;
        this.BlockHeight = 'BlockHeight' in params ? params.BlockHeight : null;
        this.BlockNetworkType = 'BlockNetworkType' in params ? params.BlockNetworkType : null;
        this.DidCount = 'DidCount' in params ? params.DidCount : null;
        this.CptCount = 'CptCount' in params ? params.CptCount : null;
        this.CertificatedAuthCount = 'CertificatedAuthCount' in params ? params.CertificatedAuthCount : null;
        this.IssueCptCount = 'IssueCptCount' in params ? params.IssueCptCount : null;
        this.NewDidCount = 'NewDidCount' in params ? params.NewDidCount : null;
        this.BcosCount = 'BcosCount' in params ? params.BcosCount : null;
        this.FabricCount = 'FabricCount' in params ? params.FabricCount : null;
        this.ChainMakerCount = 'ChainMakerCount' in params ? params.ChainMakerCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * did详情
 * @class
 */
class Identity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户标识符
         * @type {string || null}
         */
        this.AccountIdentifier = null;

        /**
         * 链ID
         * @type {string || null}
         */
        this.ChainID = null;

        /**
         * 完整tdid
         * @type {string || null}
         */
        this.Did = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 群组名称
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
        this.AccountIdentifier = 'AccountIdentifier' in params ? params.AccountIdentifier : null;
        this.ChainID = 'ChainID' in params ? params.ChainID : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * QueryPolicy返回参数结构体
 * @class
 */
class QueryPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 披露策略索引
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 披露策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 凭证模板ID
         * @type {number || null}
         */
        this.CptId = null;

        /**
         * 披露策略的具体信息
         * @type {string || null}
         */
        this.PolicyData = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.PolicyData = 'PolicyData' in params ? params.PolicyData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDidList请求参数结构体
 * @class
 */
class GetDidListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码，从1开始
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * Did信息
         * @type {string || null}
         */
        this.Did = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 群组
 * @class
 */
class Group extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 节点数量
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 所属机构节点数量
         * @type {number || null}
         */
        this.NodeCountOfAgency = null;

        /**
         * 群组描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 参与角色，盟主或非盟主
         * @type {number || null}
         */
        this.RoleType = null;

        /**
         * 链id
         * @type {string || null}
         */
        this.ChainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.NodeCountOfAgency = 'NodeCountOfAgency' in params ? params.NodeCountOfAgency : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RoleType = 'RoleType' in params ? params.RoleType : null;
        this.ChainId = 'ChainId' in params ? params.ChainId : null;

    }
}

/**
 * CheckChain返回参数结构体
 * @class
 */
class CheckChainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1为盟主，0为非盟主
         * @type {number || null}
         */
        this.RoleType = null;

        /**
         * 链ID
         * @type {string || null}
         */
        this.ChainId = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.AppName = null;

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
        this.RoleType = 'RoleType' in params ? params.RoleType : null;
        this.ChainId = 'ChainId' in params ? params.ChainId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTDidByPublicKey请求参数结构体
 * @class
 */
class CreateTDidByPublicKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 身份公钥
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * 加密公钥
         * @type {string || null}
         */
        this.EncryptPubKey = null;

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
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.EncryptPubKey = 'EncryptPubKey' in params ? params.EncryptPubKey : null;

    }
}

/**
 * 策略管理
 * @class
 */
class Policy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 披露策略索引
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 披露策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 服务ID
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * 合约应用ID
         * @type {number || null}
         */
        this.ContractAppId = null;

        /**
         * 披露策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 凭证模板ID
         * @type {number || null}
         */
        this.CptId = null;

        /**
         * 策略Json
         * @type {string || null}
         */
        this.PolicyJson = null;

        /**
         * 生成时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 创建者DID
         * @type {string || null}
         */
        this.CreatorDid = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 模板索引
         * @type {number || null}
         */
        this.CptIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ContractAppId = 'ContractAppId' in params ? params.ContractAppId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.PolicyJson = 'PolicyJson' in params ? params.PolicyJson : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreatorDid = 'CreatorDid' in params ? params.CreatorDid : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.CptIndex = 'CptIndex' in params ? params.CptIndex : null;

    }
}

/**
 * GetDataPanel请求参数结构体
 * @class
 */
class GetDataPanelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * GetGroupList返回参数结构体
 * @class
 */
class GetGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群组数据集合
         * @type {Array.<Group> || null}
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
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new Group();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RegisterClaimPolicy返回参数结构体
 * @class
 */
class RegisterClaimPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 披露策略索引
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 披露策略ID
         * @type {number || null}
         */
        this.PolicyId = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDidDetail请求参数结构体
 * @class
 */
class GetDidDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DID号码的具体信息
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * GetDidServiceDetail请求参数结构体
 * @class
 */
class GetDidServiceDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DID服务ID
         * @type {number || null}
         */
        this.ServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * GetDidDocument请求参数结构体
 * @class
 */
class GetDidDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * tdid
         * @type {string || null}
         */
        this.Did = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Did = 'Did' in params ? params.Did : null;

    }
}

/**
 * 联盟信息
 * @class
 */
class ConsortiumItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联盟id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 联盟名称
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * GetCredentialIssueRank返回参数结构体
 * @class
 */
class GetCredentialIssueRankResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rank集合
         * @type {Array.<CptIssueRank> || null}
         */
        this.RankIssueResult = null;

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

        if (params.RankIssueResult) {
            this.RankIssueResult = new Array();
            for (let z in params.RankIssueResult) {
                let obj = new CptIssueRank();
                obj.deserialize(params.RankIssueResult[z]);
                this.RankIssueResult.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddLabel返回参数结构体
 * @class
 */
class AddLabelResponse extends  AbstractModel {
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
 * GetDeployList返回参数结构体
 * @class
 */
class GetDeployListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合约总数
         * @type {number || null}
         */
        this.AllCount = null;

        /**
         * 合约部署列表
         * @type {Array.<Contract> || null}
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
        this.AllCount = 'AllCount' in params ? params.AllCount : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new Contract();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckChain请求参数结构体
 * @class
 */
class CheckChainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * did服务机构名称
         * @type {string || null}
         */
        this.AgencyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AgencyName = 'AgencyName' in params ? params.AgencyName : null;

    }
}

/**
 * GetPublicKey返回参数结构体
 * @class
 */
class GetPublicKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DID的具体信息
         * @type {string || null}
         */
        this.Did = null;

        /**
         * 公钥
         * @type {string || null}
         */
        this.PublicKey = null;

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
        this.Did = 'Did' in params ? params.Did : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDidRegisterTrend返回参数结构体
 * @class
 */
class GetDidRegisterTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trend集合
         * @type {Array.<Trend> || null}
         */
        this.Trend = null;

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

        if (params.Trend) {
            this.Trend = new Array();
            for (let z in params.Trend) {
                let obj = new Trend();
                obj.deserialize(params.Trend[z]);
                this.Trend.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCredentialStatus返回参数结构体
 * @class
 */
class GetCredentialStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 凭证状态信息
         * @type {CredentialStatus || null}
         */
        this.CredentialStatus = null;

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

        if (params.CredentialStatus) {
            let obj = new CredentialStatus();
            obj.deserialize(params.CredentialStatus)
            this.CredentialStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTDid返回参数结构体
 * @class
 */
class CreateTDidResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TDID
         * @type {string || null}
         */
        this.Did = null;

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
        this.Did = 'Did' in params ? params.Did : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyCredential请求参数结构体
 * @class
 */
class VerifyCredentialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数集合
         * @type {VerifyFunctionArg || null}
         */
        this.FunctionArg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FunctionArg) {
            let obj = new VerifyFunctionArg();
            obj.deserialize(params.FunctionArg)
            this.FunctionArg = obj;
        }

    }
}

/**
 * RegisterCpt请求参数结构体
 * @class
 */
class RegisterCptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * CptJson的具体信息
         * @type {string || null}
         */
        this.CptJson = null;

        /**
         * cptId 不填默认自增
         * @type {number || null}
         */
        this.CptId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.CptJson = 'CptJson' in params ? params.CptJson : null;
        this.CptId = 'CptId' in params ? params.CptId : null;

    }
}

/**
 * GetLabelList返回参数结构体
 * @class
 */
class GetLabelListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据集合
         * @type {Array.<Label> || null}
         */
        this.Result = null;

        /**
         * 总条数
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new Label();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 验证凭证参数值
 * @class
 */
class VerifyFunctionArg extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPT ID
         * @type {number || null}
         */
        this.CptId = null;

        /**
         * issuer did
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * 过期时间
         * @type {number || null}
         */
        this.ExpirationDate = null;

        /**
         * 声明
         * @type {string || null}
         */
        this.ClaimJson = null;

        /**
         * 颁发时间
         * @type {number || null}
         */
        this.IssuanceDate = null;

        /**
         * context值
         * @type {string || null}
         */
        this.Context = null;

        /**
         * id值
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 签名值
         * @type {Proof || null}
         */
        this.Proof = null;

        /**
         * type值
         * @type {Array.<string> || null}
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
        this.CptId = 'CptId' in params ? params.CptId : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.ClaimJson = 'ClaimJson' in params ? params.ClaimJson : null;
        this.IssuanceDate = 'IssuanceDate' in params ? params.IssuanceDate : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Proof) {
            let obj = new Proof();
            obj.deserialize(params.Proof)
            this.Proof = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * GetPolicyList返回参数结构体
 * @class
 */
class GetPolicyListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略Policy管理列表
         * @type {Array.<Policy> || null}
         */
        this.PolicyDataList = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.AllCount = null;

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

        if (params.PolicyDataList) {
            this.PolicyDataList = new Array();
            for (let z in params.PolicyDataList) {
                let obj = new Policy();
                obj.deserialize(params.PolicyDataList[z]);
                this.PolicyDataList.push(obj);
            }
        }
        this.AllCount = 'AllCount' in params ? params.AllCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DID列表
 * @class
 */
class DidData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务ID
         * @type {number || null}
         */
        this.ServiceId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * did号码
         * @type {string || null}
         */
        this.Did = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 权威机构认证状态 1未注册 2 未认证 3 已认证
         * @type {number || null}
         */
        this.AuthorityState = null;

        /**
         * DID标签名称
         * @type {string || null}
         */
        this.LabelName = null;

        /**
         * DID创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 联盟名称
         * @type {string || null}
         */
        this.AllianceName = null;

        /**
         * DID标签id
         * @type {number || null}
         */
        this.LabelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.Did = 'Did' in params ? params.Did : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.AuthorityState = 'AuthorityState' in params ? params.AuthorityState : null;
        this.LabelName = 'LabelName' in params ? params.LabelName : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AllianceName = 'AllianceName' in params ? params.AllianceName : null;
        this.LabelId = 'LabelId' in params ? params.LabelId : null;

    }
}

/**
 * GetCredentialIssueRank请求参数结构体
 * @class
 */
class GetCredentialIssueRankRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间（支持到天 2021-4-23）
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间（支持到天 2021-4-23）
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * GetDeployList请求参数结构体
 * @class
 */
class GetDeployListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 群组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 起始位置
         * @type {number || null}
         */
        this.DisplayStart = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.DisplayLength = null;

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
        this.DisplayStart = 'DisplayStart' in params ? params.DisplayStart : null;
        this.DisplayLength = 'DisplayLength' in params ? params.DisplayLength : null;

    }
}

module.exports = {
    CredentialStatus: CredentialStatus,
    QueryPolicyRequest: QueryPolicyRequest,
    RegisterClaimPolicyRequest: RegisterClaimPolicyRequest,
    GetDidServiceDetailResponse: GetDidServiceDetailResponse,
    CreateCredentialResponse: CreateCredentialResponse,
    GetConsortiumListRequest: GetConsortiumListRequest,
    DownCptResponse: DownCptResponse,
    GetCredentialIssueTrendResponse: GetCredentialIssueTrendResponse,
    CreateCredentialRequest: CreateCredentialRequest,
    CreateDidServiceResponse: CreateDidServiceResponse,
    GetConsortiumListResponse: GetConsortiumListResponse,
    GetCredentialCptRankRequest: GetCredentialCptRankRequest,
    GetPolicyListRequest: GetPolicyListRequest,
    GetConsortiumClusterListResponse: GetConsortiumClusterListResponse,
    Task: Task,
    GetCptListRequest: GetCptListRequest,
    GetAuthoritiesListRequest: GetAuthoritiesListRequest,
    GetAgencyTDidRequest: GetAgencyTDidRequest,
    RemoveHashRequest: RemoveHashRequest,
    GetGroupListRequest: GetGroupListRequest,
    Proof: Proof,
    GetDeployInfoRequest: GetDeployInfoRequest,
    Authority: Authority,
    CreateLabelResponse: CreateLabelResponse,
    GetPublicKeyRequest: GetPublicKeyRequest,
    Label: Label,
    GetDidServiceListResponse: GetDidServiceListResponse,
    DeployByNameResponse: DeployByNameResponse,
    CreateLabelRequest: CreateLabelRequest,
    CreateDidServiceRequest: CreateDidServiceRequest,
    GetDidClusterDetailResponse: GetDidClusterDetailResponse,
    RecognizeAuthorityIssuerResponse: RecognizeAuthorityIssuerResponse,
    EnableHashResponse: EnableHashResponse,
    GetCredentialIssueTrendRequest: GetCredentialIssueTrendRequest,
    EnableHashRequest: EnableHashRequest,
    GetDidClusterListRequest: GetDidClusterListRequest,
    GetCptInfoRequest: GetCptInfoRequest,
    DownCptRequest: DownCptRequest,
    GetCptListResponse: GetCptListResponse,
    GetCptInfoResponse: GetCptInfoResponse,
    GetDidRegisterTrendRequest: GetDidRegisterTrendRequest,
    AddLabelRequest: AddLabelRequest,
    GetAuthorityIssuerResponse: GetAuthorityIssuerResponse,
    CreateSelectiveCredentialResponse: CreateSelectiveCredentialResponse,
    VerifyCredentialResponse: VerifyCredentialResponse,
    CptListData: CptListData,
    FunctionArg: FunctionArg,
    CreateTDidByPrivateKeyRequest: CreateTDidByPrivateKeyRequest,
    RegisterCptResponse: RegisterCptResponse,
    SetCredentialStatusRequest: SetCredentialStatusRequest,
    RemoveHashResponse: RemoveHashResponse,
    CheckDidDeployRequest: CheckDidDeployRequest,
    GetDidDocumentResponse: GetDidDocumentResponse,
    RegisterIssuerResponse: RegisterIssuerResponse,
    CancelAuthorityIssuerRequest: CancelAuthorityIssuerRequest,
    CancelAuthorityIssuerResponse: CancelAuthorityIssuerResponse,
    CreateTDidRequest: CreateTDidRequest,
    GetAuthoritiesListResponse: GetAuthoritiesListResponse,
    CreateSelectiveCredentialRequest: CreateSelectiveCredentialRequest,
    CreateTDidByPrivateKeyResponse: CreateTDidByPrivateKeyResponse,
    DeployByNameRequest: DeployByNameRequest,
    GetDidServiceListRequest: GetDidServiceListRequest,
    GetAuthorityIssuerRequest: GetAuthorityIssuerRequest,
    GetDidClusterListResponse: GetDidClusterListResponse,
    RecognizeAuthorityIssuerRequest: RecognizeAuthorityIssuerRequest,
    GetCredentialStatusRequest: GetCredentialStatusRequest,
    GetAgencyTDidResponse: GetAgencyTDidResponse,
    DidServiceInfo: DidServiceInfo,
    SetCredentialStatusResponse: SetCredentialStatusResponse,
    CptIssueRank: CptIssueRank,
    GetCredentialCptRankResponse: GetCredentialCptRankResponse,
    TransactionArg: TransactionArg,
    RegisterIssuerRequest: RegisterIssuerRequest,
    GetDidListResponse: GetDidListResponse,
    GetDeployInfoResponse: GetDeployInfoResponse,
    Contract: Contract,
    CreateTDidByPublicKeyResponse: CreateTDidByPublicKeyResponse,
    CheckDidDeployResponse: CheckDidDeployResponse,
    GetDidClusterDetailRequest: GetDidClusterDetailRequest,
    GetConsortiumClusterListRequest: GetConsortiumClusterListRequest,
    GetDidDetailResponse: GetDidDetailResponse,
    Trend: Trend,
    BcosClusterItem: BcosClusterItem,
    GetLabelListRequest: GetLabelListRequest,
    DidCluster: DidCluster,
    GetDataPanelResponse: GetDataPanelResponse,
    Identity: Identity,
    QueryPolicyResponse: QueryPolicyResponse,
    GetDidListRequest: GetDidListRequest,
    Group: Group,
    CheckChainResponse: CheckChainResponse,
    CreateTDidByPublicKeyRequest: CreateTDidByPublicKeyRequest,
    Policy: Policy,
    GetDataPanelRequest: GetDataPanelRequest,
    GetGroupListResponse: GetGroupListResponse,
    RegisterClaimPolicyResponse: RegisterClaimPolicyResponse,
    GetDidDetailRequest: GetDidDetailRequest,
    GetDidServiceDetailRequest: GetDidServiceDetailRequest,
    GetDidDocumentRequest: GetDidDocumentRequest,
    ConsortiumItem: ConsortiumItem,
    GetCredentialIssueRankResponse: GetCredentialIssueRankResponse,
    AddLabelResponse: AddLabelResponse,
    GetDeployListResponse: GetDeployListResponse,
    CheckChainRequest: CheckChainRequest,
    GetPublicKeyResponse: GetPublicKeyResponse,
    GetDidRegisterTrendResponse: GetDidRegisterTrendResponse,
    GetCredentialStatusResponse: GetCredentialStatusResponse,
    CreateTDidResponse: CreateTDidResponse,
    VerifyCredentialRequest: VerifyCredentialRequest,
    RegisterCptRequest: RegisterCptRequest,
    GetLabelListResponse: GetLabelListResponse,
    VerifyFunctionArg: VerifyFunctionArg,
    GetPolicyListResponse: GetPolicyListResponse,
    DidData: DidData,
    GetCredentialIssueRankRequest: GetCredentialIssueRankRequest,
    GetDeployListRequest: GetDeployListRequest,

}
