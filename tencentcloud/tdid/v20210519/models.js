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

module.exports = {
    VerifyFunctionArg: VerifyFunctionArg,
    CreateCredentialRequest: CreateCredentialRequest,
    TransactionArg: TransactionArg,
    CreateTDidRequest: CreateTDidRequest,
    GetAuthorityIssuerResponse: GetAuthorityIssuerResponse,
    CredentialStatus: CredentialStatus,
    CreateSelectiveCredentialRequest: CreateSelectiveCredentialRequest,
    GetDidDocumentRequest: GetDidDocumentRequest,
    FunctionArg: FunctionArg,
    CreateTDidResponse: CreateTDidResponse,
    CreateSelectiveCredentialResponse: CreateSelectiveCredentialResponse,
    SetCredentialStatusRequest: SetCredentialStatusRequest,
    CreateTDidByPublicKeyRequest: CreateTDidByPublicKeyRequest,
    CreateTDidByPublicKeyResponse: CreateTDidByPublicKeyResponse,
    CreateCredentialResponse: CreateCredentialResponse,
    GetAuthorityIssuerRequest: GetAuthorityIssuerRequest,
    GetDidDocumentResponse: GetDidDocumentResponse,
    VerifyCredentialResponse: VerifyCredentialResponse,
    SetCredentialStatusResponse: SetCredentialStatusResponse,
    VerifyCredentialRequest: VerifyCredentialRequest,
    Proof: Proof,

}
