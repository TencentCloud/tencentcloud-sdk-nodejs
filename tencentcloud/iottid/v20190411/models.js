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
 * DescribePermission请求参数结构体
 * @class
 */
class DescribePermissionRequest extends  AbstractModel {
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
 * VerifyChipBurnInfo返回参数结构体
 * @class
 */
class VerifyChipBurnInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证结果
         * @type {boolean || null}
         */
        this.Pass = null;

        /**
         * 已验证次数
         * @type {number || null}
         */
        this.VerifiedTimes = null;

        /**
         * 剩余验证次数
         * @type {number || null}
         */
        this.LeftTimes = null;

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
        this.Pass = 'Pass' in params ? params.Pass : null;
        this.VerifiedTimes = 'VerifiedTimes' in params ? params.VerifiedTimes : null;
        this.LeftTimes = 'LeftTimes' in params ? params.LeftTimes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeliverTids返回参数结构体
 * @class
 */
class DeliverTidsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 空发的TID信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TidKeysInfo> || null}
         */
        this.TidSet = null;

        /**
         * 产品公钥
         * @type {string || null}
         */
        this.ProductKey = null;

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

        if (params.TidSet) {
            this.TidSet = new Array();
            for (let z in params.TidSet) {
                let obj = new TidKeysInfo();
                obj.deserialize(params.TidSet[z]);
                this.TidSet.push(obj);
            }
        }
        this.ProductKey = 'ProductKey' in params ? params.ProductKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BurnTidNotify返回参数结构体
 * @class
 */
class BurnTidNotifyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接收回执成功的TID
         * @type {string || null}
         */
        this.Tid = null;

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
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailableLibCount返回参数结构体
 * @class
 */
class DescribeAvailableLibCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可空发的白盒密钥数量
         * @type {number || null}
         */
        this.Quantity = null;

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
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadDeviceUniqueCode返回参数结构体
 * @class
 */
class UploadDeviceUniqueCodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次已上传数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 重复的硬件唯一标识码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ExistedCodeSet = null;

        /**
         * 剩余可上传数量
         * @type {number || null}
         */
        this.LeftQuantity = null;

        /**
         * 错误的硬件唯一标识码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.IllegalCodeSet = null;

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
        this.Count = 'Count' in params ? params.Count : null;
        this.ExistedCodeSet = 'ExistedCodeSet' in params ? params.ExistedCodeSet : null;
        this.LeftQuantity = 'LeftQuantity' in params ? params.LeftQuantity : null;
        this.IllegalCodeSet = 'IllegalCodeSet' in params ? params.IllegalCodeSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AuthTestTid返回参数结构体
 * @class
 */
class AuthTestTidResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果
         * @type {boolean || null}
         */
        this.Pass = null;

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
        this.Pass = 'Pass' in params ? params.Pass : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeliverTidNotify返回参数结构体
 * @class
 */
class DeliverTidNotifyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 剩余空发数量
         * @type {number || null}
         */
        this.RemaindCount = null;

        /**
         * 已回执的TID编码
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 产品公钥
         * @type {string || null}
         */
        this.ProductKey = null;

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
        this.RemaindCount = 'RemaindCount' in params ? params.RemaindCount : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.ProductKey = 'ProductKey' in params ? params.ProductKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AuthTestTid请求参数结构体
 * @class
 */
class AuthTestTidRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备端SDK填入测试TID参数后生成的加密数据串
         * @type {string || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * BurnTidNotify请求参数结构体
 * @class
 */
class BurnTidNotifyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单编号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * TID编号
         * @type {string || null}
         */
        this.Tid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Tid = 'Tid' in params ? params.Tid : null;

    }
}

/**
 * VerifyChipBurnInfo请求参数结构体
 * @class
 */
class VerifyChipBurnInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证数据
         * @type {string || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * UploadDeviceUniqueCode请求参数结构体
 * @class
 */
class UploadDeviceUniqueCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 硬件唯一标识码
         * @type {Array.<string> || null}
         */
        this.CodeSet = null;

        /**
         * 硬件标识码绑定的申请编号
         * @type {string || null}
         */
        this.OrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeSet = 'CodeSet' in params ? params.CodeSet : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

    }
}

/**
 * DescribeAvailableLibCount请求参数结构体
 * @class
 */
class DescribeAvailableLibCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单编号
         * @type {string || null}
         */
        this.OrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

    }
}

/**
 * DeliverTids请求参数结构体
 * @class
 */
class DeliverTidsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单ID
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 数量，1~100
         * @type {number || null}
         */
        this.Quantity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;

    }
}

/**
 * DeliverTidNotify请求参数结构体
 * @class
 */
class DeliverTidNotifyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单编号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * TID编号
         * @type {string || null}
         */
        this.Tid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Tid = 'Tid' in params ? params.Tid : null;

    }
}

/**
 * 系统生成的TID和密钥信息
 * @class
 */
class TidKeysInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * TID号码
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 公钥
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * 私钥
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * 共享密钥
         * @type {string || null}
         */
        this.Psk = null;

        /**
         * 软加固白盒密钥下载地址
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 软加固设备标识码
         * @type {string || null}
         */
        this.DeviceCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.Psk = 'Psk' in params ? params.Psk : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.DeviceCode = 'DeviceCode' in params ? params.DeviceCode : null;

    }
}

/**
 * DescribePermission返回参数结构体
 * @class
 */
class DescribePermissionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业用户
         * @type {boolean || null}
         */
        this.EnterpriseUser = null;

        /**
         * 下载控制台权限
         * @type {string || null}
         */
        this.DownloadPermission = null;

        /**
         * 使用控制台权限
         * @type {string || null}
         */
        this.UsePermission = null;

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
        this.EnterpriseUser = 'EnterpriseUser' in params ? params.EnterpriseUser : null;
        this.DownloadPermission = 'DownloadPermission' in params ? params.DownloadPermission : null;
        this.UsePermission = 'UsePermission' in params ? params.UsePermission : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadTids请求参数结构体
 * @class
 */
class DownloadTidsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单编号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 下载数量：1~10
         * @type {number || null}
         */
        this.Quantity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;

    }
}

/**
 * DownloadTids返回参数结构体
 * @class
 */
class DownloadTidsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载的TID信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TidKeysInfo> || null}
         */
        this.TidSet = null;

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

        if (params.TidSet) {
            this.TidSet = new Array();
            for (let z in params.TidSet) {
                let obj = new TidKeysInfo();
                obj.deserialize(params.TidSet[z]);
                this.TidSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribePermissionRequest: DescribePermissionRequest,
    VerifyChipBurnInfoResponse: VerifyChipBurnInfoResponse,
    DeliverTidsResponse: DeliverTidsResponse,
    BurnTidNotifyResponse: BurnTidNotifyResponse,
    DescribeAvailableLibCountResponse: DescribeAvailableLibCountResponse,
    UploadDeviceUniqueCodeResponse: UploadDeviceUniqueCodeResponse,
    AuthTestTidResponse: AuthTestTidResponse,
    DeliverTidNotifyResponse: DeliverTidNotifyResponse,
    AuthTestTidRequest: AuthTestTidRequest,
    BurnTidNotifyRequest: BurnTidNotifyRequest,
    VerifyChipBurnInfoRequest: VerifyChipBurnInfoRequest,
    UploadDeviceUniqueCodeRequest: UploadDeviceUniqueCodeRequest,
    DescribeAvailableLibCountRequest: DescribeAvailableLibCountRequest,
    DeliverTidsRequest: DeliverTidsRequest,
    DeliverTidNotifyRequest: DeliverTidNotifyRequest,
    TidKeysInfo: TidKeysInfo,
    DescribePermissionResponse: DescribePermissionResponse,
    DownloadTidsRequest: DownloadTidsRequest,
    DownloadTidsResponse: DownloadTidsResponse,

}
