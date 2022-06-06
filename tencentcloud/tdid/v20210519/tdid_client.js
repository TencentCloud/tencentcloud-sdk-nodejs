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
const VerifyFunctionArg = models.VerifyFunctionArg;
const CreateCredentialRequest = models.CreateCredentialRequest;
const TransactionArg = models.TransactionArg;
const CreateTDidRequest = models.CreateTDidRequest;
const GetAuthorityIssuerResponse = models.GetAuthorityIssuerResponse;
const CredentialStatus = models.CredentialStatus;
const CreateSelectiveCredentialRequest = models.CreateSelectiveCredentialRequest;
const GetDidDocumentRequest = models.GetDidDocumentRequest;
const FunctionArg = models.FunctionArg;
const CreateTDidResponse = models.CreateTDidResponse;
const CreateSelectiveCredentialResponse = models.CreateSelectiveCredentialResponse;
const SetCredentialStatusRequest = models.SetCredentialStatusRequest;
const CreateTDidByPublicKeyRequest = models.CreateTDidByPublicKeyRequest;
const CreateTDidByPublicKeyResponse = models.CreateTDidByPublicKeyResponse;
const CreateCredentialResponse = models.CreateCredentialResponse;
const GetAuthorityIssuerRequest = models.GetAuthorityIssuerRequest;
const GetDidDocumentResponse = models.GetDidDocumentResponse;
const VerifyCredentialResponse = models.VerifyCredentialResponse;
const SetCredentialStatusResponse = models.SetCredentialStatusResponse;
const VerifyCredentialRequest = models.VerifyCredentialRequest;
const Proof = models.Proof;


/**
 * tdid client
 * @class
 */
class TdidClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tdid.tencentcloudapi.com", "2021-05-19", credential, region, profile);
    }
    
    /**
     * 查看DID文档

     * @param {GetDidDocumentRequest} req
     * @param {function(string, GetDidDocumentResponse):void} cb
     * @public
     */
    GetDidDocument(req, cb) {
        let resp = new GetDidDocumentResponse();
        this.request("GetDidDocument", req, resp, cb);
    }

    /**
     * 创建选择性批露凭证
     * @param {CreateSelectiveCredentialRequest} req
     * @param {function(string, CreateSelectiveCredentialResponse):void} cb
     * @public
     */
    CreateSelectiveCredential(req, cb) {
        let resp = new CreateSelectiveCredentialResponse();
        this.request("CreateSelectiveCredential", req, resp, cb);
    }

    /**
     * 创建凭证
     * @param {CreateCredentialRequest} req
     * @param {function(string, CreateCredentialResponse):void} cb
     * @public
     */
    CreateCredential(req, cb) {
        let resp = new CreateCredentialResponse();
        this.request("CreateCredential", req, resp, cb);
    }

    /**
     *  新建DID根据公钥生成Tdid
     * @param {CreateTDidByPublicKeyRequest} req
     * @param {function(string, CreateTDidByPublicKeyResponse):void} cb
     * @public
     */
    CreateTDidByPublicKey(req, cb) {
        let resp = new CreateTDidByPublicKeyResponse();
        this.request("CreateTDidByPublicKey", req, resp, cb);
    }

    /**
     * 验证凭证
     * @param {VerifyCredentialRequest} req
     * @param {function(string, VerifyCredentialResponse):void} cb
     * @public
     */
    VerifyCredential(req, cb) {
        let resp = new VerifyCredentialResponse();
        this.request("VerifyCredential", req, resp, cb);
    }

    /**
     * 创建机构DID
     * @param {CreateTDidRequest} req
     * @param {function(string, CreateTDidResponse):void} cb
     * @public
     */
    CreateTDid(req, cb) {
        let resp = new CreateTDidResponse();
        this.request("CreateTDid", req, resp, cb);
    }

    /**
     * 获取权威机构信息
     * @param {GetAuthorityIssuerRequest} req
     * @param {function(string, GetAuthorityIssuerResponse):void} cb
     * @public
     */
    GetAuthorityIssuer(req, cb) {
        let resp = new GetAuthorityIssuerResponse();
        this.request("GetAuthorityIssuer", req, resp, cb);
    }

    /**
     * 设置凭证链上状态
     * @param {SetCredentialStatusRequest} req
     * @param {function(string, SetCredentialStatusResponse):void} cb
     * @public
     */
    SetCredentialStatus(req, cb) {
        let resp = new SetCredentialStatusResponse();
        this.request("SetCredentialStatus", req, resp, cb);
    }


}
module.exports = TdidClient;
