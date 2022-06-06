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
const CopyCryptoColumnPolicyRequest = models.CopyCryptoColumnPolicyRequest;
const CryptoCopyColumnPolicyTableFilter = models.CryptoCopyColumnPolicyTableFilter;
const CopyCryptoColumnPolicyResponse = models.CopyCryptoColumnPolicyResponse;


/**
 * casb client
 * @class
 */
class CasbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("casb.tencentcloudapi.com", "2020-05-07", credential, region, profile);
    }
    
    /**
     * 同region下 根据用户输入的CasbId,MetaDataId 复制策略到DstCasbId,MetaDataId中。
场景1：
相同CasbId，不同MetadataId 下策略复制
场景2：
不同Casbid,不同MetaDataId 下策略复制
场景3:
相同CasbId,相同MetaDataId 且 DatabaseName不同 策略复制

     * @param {CopyCryptoColumnPolicyRequest} req
     * @param {function(string, CopyCryptoColumnPolicyResponse):void} cb
     * @public
     */
    CopyCryptoColumnPolicy(req, cb) {
        let resp = new CopyCryptoColumnPolicyResponse();
        this.request("CopyCryptoColumnPolicy", req, resp, cb);
    }


}
module.exports = CasbClient;
