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
 * GetDepositFile返回参数结构体
 * @class
 */
class GetDepositFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证编号
         * @type {string || null}
         */
        this.EvidenceId = null;

        /**
         * 存证文件临时链接
         * @type {string || null}
         */
        this.EvidenceFile = null;

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
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.EvidenceFile = 'EvidenceFile' in params ? params.EvidenceFile : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImageDeposit请求参数结构体
 * @class
 */
class CreateImageDepositRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证名称(长度最大30)
         * @type {string || null}
         */
        this.EvidenceName = null;

        /**
         * 数据Base64编码，大小不超过5M
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 带后缀的文件名称，如 test.png
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件hash
         * @type {string || null}
         */
        this.EvidenceHash = null;

        /**
         * 业务ID 透传 长度最大不超过64
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
         * @type {number || null}
         */
        this.HashType = null;

        /**
         * 存证描述
         * @type {string || null}
         */
        this.EvidenceDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceName = 'EvidenceName' in params ? params.EvidenceName : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.EvidenceHash = 'EvidenceHash' in params ? params.EvidenceHash : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.HashType = 'HashType' in params ? params.HashType : null;
        this.EvidenceDescription = 'EvidenceDescription' in params ? params.EvidenceDescription : null;

    }
}

/**
 * CreateVideoDeposit请求参数结构体
 * @class
 */
class CreateVideoDepositRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证名称(长度最大30)
         * @type {string || null}
         */
        this.EvidenceName = null;

        /**
         * 数据Base64编码，大小不超过5M
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 带后缀的文件名称，如music.mkv
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件hash
         * @type {string || null}
         */
        this.EvidenceHash = null;

        /**
         * 业务ID 透传 长度最大不超过64
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
         * @type {number || null}
         */
        this.HashType = null;

        /**
         * 存证描述
         * @type {string || null}
         */
        this.EvidenceDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceName = 'EvidenceName' in params ? params.EvidenceName : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.EvidenceHash = 'EvidenceHash' in params ? params.EvidenceHash : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.HashType = 'HashType' in params ? params.HashType : null;
        this.EvidenceDescription = 'EvidenceDescription' in params ? params.EvidenceDescription : null;

    }
}

/**
 * CreateDocDeposit请求参数结构体
 * @class
 */
class CreateDocDepositRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证名称(长度最大30)
         * @type {string || null}
         */
        this.EvidenceName = null;

        /**
         * 数据Base64编码，大小不超过5M
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 带后缀的文件名称，如 test.doc
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件hash
         * @type {string || null}
         */
        this.EvidenceHash = null;

        /**
         * 业务ID 透传 长度最大不超过64
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
         * @type {number || null}
         */
        this.HashType = null;

        /**
         * 存证描述
         * @type {string || null}
         */
        this.EvidenceDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceName = 'EvidenceName' in params ? params.EvidenceName : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.EvidenceHash = 'EvidenceHash' in params ? params.EvidenceHash : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.HashType = 'HashType' in params ? params.HashType : null;
        this.EvidenceDescription = 'EvidenceDescription' in params ? params.EvidenceDescription : null;

    }
}

/**
 * CreateHashDepositNoSeal请求参数结构体
 * @class
 */
class CreateHashDepositNoSealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据hash
         * @type {string || null}
         */
        this.EvidenceHash = null;

        /**
         * 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 业务扩展信息
         * @type {string || null}
         */
        this.EvidenceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceHash = 'EvidenceHash' in params ? params.EvidenceHash : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.EvidenceInfo = 'EvidenceInfo' in params ? params.EvidenceInfo : null;

    }
}

/**
 * CreateHashDeposit请求参数结构体
 * @class
 */
class CreateHashDepositRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证名称(长度最大30)
         * @type {string || null}
         */
        this.EvidenceName = null;

        /**
         * 数据hash
         * @type {string || null}
         */
        this.EvidenceHash = null;

        /**
         * 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 存证描述
         * @type {string || null}
         */
        this.EvidenceDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceName = 'EvidenceName' in params ? params.EvidenceName : null;
        this.EvidenceHash = 'EvidenceHash' in params ? params.EvidenceHash : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.EvidenceDescription = 'EvidenceDescription' in params ? params.EvidenceDescription : null;

    }
}

/**
 * VerifyEvidenceHash返回参数结构体
 * @class
 */
class VerifyEvidenceHashResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核验结果，true为核验成功，false为核验失败
         * @type {boolean || null}
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDataDeposit返回参数结构体
 * @class
 */
class CreateDataDepositResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务ID 透传 长度最大不超过64
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 请求成功，返回存证编码,用于查询存证后续业务数据
         * @type {string || null}
         */
        this.EvidenceId = null;

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
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDepositCert请求参数结构体
 * @class
 */
class GetDepositCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证编码
         * @type {string || null}
         */
        this.EvidenceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;

    }
}

/**
 * CreateAudioDeposit请求参数结构体
 * @class
 */
class CreateAudioDepositRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证名称(长度最大30)
         * @type {string || null}
         */
        this.EvidenceName = null;

        /**
         * 数据Base64编码，大小不超过5M
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 带后缀的文件名称，如music.mp3
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件hash
         * @type {string || null}
         */
        this.EvidenceHash = null;

        /**
         * 业务ID 透传 长度最大不超过64
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
         * @type {number || null}
         */
        this.HashType = null;

        /**
         * 存证描述
         * @type {string || null}
         */
        this.EvidenceDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceName = 'EvidenceName' in params ? params.EvidenceName : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.EvidenceHash = 'EvidenceHash' in params ? params.EvidenceHash : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.HashType = 'HashType' in params ? params.HashType : null;
        this.EvidenceDescription = 'EvidenceDescription' in params ? params.EvidenceDescription : null;

    }
}

/**
 * GetDepositFile请求参数结构体
 * @class
 */
class GetDepositFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证编码
         * @type {string || null}
         */
        this.EvidenceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;

    }
}

/**
 * VerifyEvidenceBlockChainTxHash请求参数结构体
 * @class
 */
class VerifyEvidenceBlockChainTxHashRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区块链交易 hash，在“存证基本信息查询（GetDepositInfo）”接口中可以获取。
         * @type {string || null}
         */
        this.EvidenceTxHash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceTxHash = 'EvidenceTxHash' in params ? params.EvidenceTxHash : null;

    }
}

/**
 * VerifyEvidenceHash请求参数结构体
 * @class
 */
class VerifyEvidenceHashRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证内容hash，hash类型即为用户在存证时所用或所选的hash类型
         * @type {string || null}
         */
        this.EvidenceHash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceHash = 'EvidenceHash' in params ? params.EvidenceHash : null;

    }
}

/**
 * CreateHashDepositNoCert返回参数结构体
 * @class
 */
class CreateHashDepositNoCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 透传字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 存证编码
         * @type {string || null}
         */
        this.EvidenceId = null;

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
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyEvidenceBlockChainTxHash返回参数结构体
 * @class
 */
class VerifyEvidenceBlockChainTxHashResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核验结果，true为核验成功，fals为核验失败
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 存证时间，仅当核验结果为true时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EvidenceTime = null;

        /**
         * 存证编码，仅当核验结果为true时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EvidenceId = null;

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
        this.EvidenceTime = 'EvidenceTime' in params ? params.EvidenceTime : null;
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAudioDeposit返回参数结构体
 * @class
 */
class CreateAudioDepositResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务ID 透传 长度最大不超过64
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 请求成功，返回存证编码,用于查询存证后续业务数据
         * @type {string || null}
         */
        this.EvidenceId = null;

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
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDepositInfo返回参数结构体
 * @class
 */
class GetDepositInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证编号
         * @type {string || null}
         */
        this.EvidenceId = null;

        /**
         * 上链时间
         * @type {string || null}
         */
        this.EvidenceTime = null;

        /**
         * 区块链交易哈希
         * @type {string || null}
         */
        this.EvidenceTxHash = null;

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
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.EvidenceTime = 'EvidenceTime' in params ? params.EvidenceTime : null;
        this.EvidenceTxHash = 'EvidenceTxHash' in params ? params.EvidenceTxHash : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateHashDepositNoCert请求参数结构体
 * @class
 */
class CreateHashDepositNoCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据hash
         * @type {string || null}
         */
        this.EvidenceHash = null;

        /**
         * 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 业务扩展信息
         * @type {string || null}
         */
        this.EvidenceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceHash = 'EvidenceHash' in params ? params.EvidenceHash : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.EvidenceInfo = 'EvidenceInfo' in params ? params.EvidenceInfo : null;

    }
}

/**
 * CreateHashDepositNoSeal返回参数结构体
 * @class
 */
class CreateHashDepositNoSealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 透传字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 存证编码
         * @type {string || null}
         */
        this.EvidenceId = null;

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
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDocDeposit返回参数结构体
 * @class
 */
class CreateDocDepositResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务ID 透传 长度最大不超过64
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 请求成功，返回存证编码,用于查询存证后续业务数据
         * @type {string || null}
         */
        this.EvidenceId = null;

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
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDepositInfo请求参数结构体
 * @class
 */
class GetDepositInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证编码
         * @type {string || null}
         */
        this.EvidenceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;

    }
}

/**
 * CreateVideoDeposit返回参数结构体
 * @class
 */
class CreateVideoDepositResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务ID 透传 长度最大不超过64
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 请求成功，返回存证编码,用于查询存证后续业务数据
         * @type {string || null}
         */
        this.EvidenceId = null;

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
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDataDeposit请求参数结构体
 * @class
 */
class CreateDataDepositRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务数据明文(json格式字符串)，最大256kb
         * @type {string || null}
         */
        this.EvidenceInfo = null;

        /**
         * 存证名称(长度最大30)
         * @type {string || null}
         */
        this.EvidenceName = null;

        /**
         * 业务ID 透传 长度最大不超过64
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
         * @type {number || null}
         */
        this.HashType = null;

        /**
         * 存证描述
         * @type {string || null}
         */
        this.EvidenceDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvidenceInfo = 'EvidenceInfo' in params ? params.EvidenceInfo : null;
        this.EvidenceName = 'EvidenceName' in params ? params.EvidenceName : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.HashType = 'HashType' in params ? params.HashType : null;
        this.EvidenceDescription = 'EvidenceDescription' in params ? params.EvidenceDescription : null;

    }
}

/**
 * GetDepositCert返回参数结构体
 * @class
 */
class GetDepositCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存证编码
         * @type {string || null}
         */
        this.EvidenceId = null;

        /**
         * 存证证书文件临时链接
         * @type {string || null}
         */
        this.EvidenceCert = null;

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
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.EvidenceCert = 'EvidenceCert' in params ? params.EvidenceCert : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImageDeposit返回参数结构体
 * @class
 */
class CreateImageDepositResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务ID 透传 长度最大不超过64
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 请求成功，返回存证编码,用于查询存证后续业务数据
         * @type {string || null}
         */
        this.EvidenceId = null;

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
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateHashDeposit返回参数结构体
 * @class
 */
class CreateHashDepositResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 透传字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 存证编码
         * @type {string || null}
         */
        this.EvidenceId = null;

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
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    GetDepositFileResponse: GetDepositFileResponse,
    CreateImageDepositRequest: CreateImageDepositRequest,
    CreateVideoDepositRequest: CreateVideoDepositRequest,
    CreateDocDepositRequest: CreateDocDepositRequest,
    CreateHashDepositNoSealRequest: CreateHashDepositNoSealRequest,
    CreateHashDepositRequest: CreateHashDepositRequest,
    VerifyEvidenceHashResponse: VerifyEvidenceHashResponse,
    CreateDataDepositResponse: CreateDataDepositResponse,
    GetDepositCertRequest: GetDepositCertRequest,
    CreateAudioDepositRequest: CreateAudioDepositRequest,
    GetDepositFileRequest: GetDepositFileRequest,
    VerifyEvidenceBlockChainTxHashRequest: VerifyEvidenceBlockChainTxHashRequest,
    VerifyEvidenceHashRequest: VerifyEvidenceHashRequest,
    CreateHashDepositNoCertResponse: CreateHashDepositNoCertResponse,
    VerifyEvidenceBlockChainTxHashResponse: VerifyEvidenceBlockChainTxHashResponse,
    CreateAudioDepositResponse: CreateAudioDepositResponse,
    GetDepositInfoResponse: GetDepositInfoResponse,
    CreateHashDepositNoCertRequest: CreateHashDepositNoCertRequest,
    CreateHashDepositNoSealResponse: CreateHashDepositNoSealResponse,
    CreateDocDepositResponse: CreateDocDepositResponse,
    GetDepositInfoRequest: GetDepositInfoRequest,
    CreateVideoDepositResponse: CreateVideoDepositResponse,
    CreateDataDepositRequest: CreateDataDepositRequest,
    GetDepositCertResponse: GetDepositCertResponse,
    CreateImageDepositResponse: CreateImageDepositResponse,
    CreateHashDepositResponse: CreateHashDepositResponse,

}
