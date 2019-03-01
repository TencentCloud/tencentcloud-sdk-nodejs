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
 * CreateLicense返回参数结构体
 * @class
 */
class CreateLicenseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64 编码的许可证二进制数据。
         * @type {string || null}
         */
        this.License = null;

        /**
         * 加密内容的内容ID
         * @type {string || null}
         */
        this.ContentId = null;

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
        this.License = 'License' in params ? params.License : null;
        this.ContentId = 'ContentId' in params ? params.ContentId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 播放控制参数
 * @class
 */
class PlaybackPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放许可证的有效期
         * @type {number || null}
         */
        this.LicenseDurationSeconds = null;

        /**
         * 开始播放后，允许最长播放时间
         * @type {number || null}
         */
        this.PlaybackDurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseDurationSeconds = 'LicenseDurationSeconds' in params ? params.LicenseDurationSeconds : null;
        this.PlaybackDurationSeconds = 'PlaybackDurationSeconds' in params ? params.PlaybackDurationSeconds : null;

    }
}

/**
 * StartEncryption请求参数结构体
 * @class
 */
class StartEncryptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * cos的end point。
         * @type {string || null}
         */
        this.CosEndPoint = null;

        /**
         * cos api密钥id。
         * @type {string || null}
         */
        this.CosSecretId = null;

        /**
         * cos api密钥。
         * @type {string || null}
         */
        this.CosSecretKey = null;

        /**
         * 使用的DRM方案类型，接口取值WIDEVINE,FAIRPLAY
         * @type {string || null}
         */
        this.DrmType = null;

        /**
         * 存储在COS上的原始内容信息
         * @type {DrmSourceObject || null}
         */
        this.SourceObject = null;

        /**
         * 加密后的内容存储到COS的对象
         * @type {Array.<DrmOutputObject> || null}
         */
        this.OutputObjects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosEndPoint = 'CosEndPoint' in params ? params.CosEndPoint : null;
        this.CosSecretId = 'CosSecretId' in params ? params.CosSecretId : null;
        this.CosSecretKey = 'CosSecretKey' in params ? params.CosSecretKey : null;
        this.DrmType = 'DrmType' in params ? params.DrmType : null;

        if (params.SourceObject) {
            let obj = new DrmSourceObject();
            obj.deserialize(params.SourceObject)
            this.SourceObject = obj;
        }

        if (params.OutputObjects) {
            this.OutputObjects = new Array();
            for (let z in params.OutputObjects) {
                let obj = new DrmOutputObject();
                obj.deserialize(params.OutputObjects[z]);
                this.OutputObjects.push(obj);
            }
        }

    }
}

/**
 * DescribeKeys返回参数结构体
 * @class
 */
class DescribeKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加密密钥列表
         * @type {Array.<Key> || null}
         */
        this.Keys = null;

        /**
         * 用来加密密钥。
如果入参中带有RsaPublicKey，则SessionKey为使用Rsa公钥加密后的二进制数据，Base64编码字符串。
如果入参中没有RsaPublicKey，则SessionKey为原始数据的字符串形式。
         * @type {string || null}
         */
        this.SessionKey = null;

        /**
         * 内容ID
         * @type {string || null}
         */
        this.ContentId = null;

        /**
         * Widevine方案的Pssh数据，Base64编码。
Fairplay方案无该值。
         * @type {string || null}
         */
        this.Pssh = null;

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

        if (params.Keys) {
            this.Keys = new Array();
            for (let z in params.Keys) {
                let obj = new Key();
                obj.deserialize(params.Keys[z]);
                this.Keys.push(obj);
            }
        }
        this.SessionKey = 'SessionKey' in params ? params.SessionKey : null;
        this.ContentId = 'ContentId' in params ? params.ContentId : null;
        this.Pssh = 'Pssh' in params ? params.Pssh : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Drm加密对象输出参数
 * @class
 */
class DrmOutputPara extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容类型。例:video，audio，mpd，m3u8
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 语言,例: en, zh-cn
         * @type {string || null}
         */
        this.Language = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Language = 'Language' in params ? params.Language : null;

    }
}

/**
 * CreateLicense请求参数结构体
 * @class
 */
class CreateLicenseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DRM方案类型，接口取值：WIDEVINE，FAIRPLAY。
         * @type {string || null}
         */
        this.DrmType = null;

        /**
         * Base64编码的终端设备License Request数据。
         * @type {string || null}
         */
        this.LicenseRequest = null;

        /**
         * 内容类型，接口取值：VodVideo,LiveVideo。
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * 授权播放的Track列表。
该值为空时，默认授权所有track播放。
         * @type {Array.<string> || null}
         */
        this.Tracks = null;

        /**
         * 播放策略参数。
         * @type {PlaybackPolicy || null}
         */
        this.PlaybackPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DrmType = 'DrmType' in params ? params.DrmType : null;
        this.LicenseRequest = 'LicenseRequest' in params ? params.LicenseRequest : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.Tracks = 'Tracks' in params ? params.Tracks : null;

        if (params.PlaybackPolicy) {
            let obj = new PlaybackPolicy();
            obj.deserialize(params.PlaybackPolicy)
            this.PlaybackPolicy = obj;
        }

    }
}

/**
 * StartEncryption返回参数结构体
 * @class
 */
class StartEncryptionResponse extends  AbstractModel {
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
 * DRM加密密钥
 * @class
 */
class Key extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加密track类型。
         * @type {string || null}
         */
        this.Track = null;

        /**
         * 密钥ID。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 原始Key使用AES-128 ECB模式和SessionKey加密的后的二进制数据，Base64编码的字符串。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 原始IV使用AES-128 ECB模式和SessionKey加密的后的二进制数据，Base64编码的字符串。
         * @type {string || null}
         */
        this.Iv = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Track = 'Track' in params ? params.Track : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Iv = 'Iv' in params ? params.Iv : null;

    }
}

/**
 * DescribeKeys请求参数结构体
 * @class
 */
class DescribeKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用的DRM方案类型，接口取值WIDEVINE、FAIRPLAY、NORMALAES。
         * @type {string || null}
         */
        this.DrmType = null;

        /**
         * 加密的track列表，接口取值VIDEO、AUDIO。
         * @type {Array.<string> || null}
         */
        this.Tracks = null;

        /**
         * 内容类型。接口取值VodVideo,LiveVideo
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * Base64编码的Rsa公钥，用来加密出参中的SessionKey。
如果该参数为空，则出参中SessionKey为明文。
         * @type {string || null}
         */
        this.RsaPublicKey = null;

        /**
         * 一个加密内容的唯一标识。
如果该参数为空，则后台自动生成
         * @type {string || null}
         */
        this.ContentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DrmType = 'DrmType' in params ? params.DrmType : null;
        this.Tracks = 'Tracks' in params ? params.Tracks : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.RsaPublicKey = 'RsaPublicKey' in params ? params.RsaPublicKey : null;
        this.ContentId = 'ContentId' in params ? params.ContentId : null;

    }
}

/**
 * 用于DRM加密的源对象
 * @class
 */
class DrmSourceObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入的桶名称。
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * 输入对象名称。
         * @type {string || null}
         */
        this.ObjectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.ObjectName = 'ObjectName' in params ? params.ObjectName : null;

    }
}

/**
 * DRM加密后的输出对象
 * @class
 */
class DrmOutputObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输出的桶名称。
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * 输出的对象名称。
         * @type {string || null}
         */
        this.ObjectName = null;

        /**
         * 输出对象参数。
         * @type {DrmOutputPara || null}
         */
        this.Para = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.ObjectName = 'ObjectName' in params ? params.ObjectName : null;

        if (params.Para) {
            let obj = new DrmOutputPara();
            obj.deserialize(params.Para)
            this.Para = obj;
        }

    }
}

module.exports = {
    CreateLicenseResponse: CreateLicenseResponse,
    PlaybackPolicy: PlaybackPolicy,
    StartEncryptionRequest: StartEncryptionRequest,
    DescribeKeysResponse: DescribeKeysResponse,
    DrmOutputPara: DrmOutputPara,
    CreateLicenseRequest: CreateLicenseRequest,
    StartEncryptionResponse: StartEncryptionResponse,
    Key: Key,
    DescribeKeysRequest: DescribeKeysRequest,
    DrmSourceObject: DrmSourceObject,
    DrmOutputObject: DrmOutputObject,

}
