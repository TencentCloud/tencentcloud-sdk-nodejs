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
 * SendVcode返回参数结构体
 * @class
 */
class SendVcodeResponse extends  AbstractModel {
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
 * DeleteAccount请求参数结构体
 * @class
 */
class DeleteAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名AccountMng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名DeleteAccount
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 帐号ID列表
         * @type {Array.<string> || null}
         */
        this.AccountList = null;

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
        this.AccountList = 'AccountList' in params ? params.AccountList : null;

    }
}

/**
 * CreateSeal请求参数结构体
 * @class
 */
class CreateSealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名SealMng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名CreateSeal
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 帐号ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 签章链接，图片必须为png格式
         * @type {string || null}
         */
        this.ImgUrl = null;

        /**
         * 图片数据，base64编码
         * @type {string || null}
         */
        this.ImgData = null;

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
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.ImgUrl = 'ImgUrl' in params ? params.ImgUrl : null;
        this.ImgData = 'ImgData' in params ? params.ImgData : null;

    }
}

/**
 * CreateSeal返回参数结构体
 * @class
 */
class CreateSealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签章ID
         * @type {string || null}
         */
        this.SealResId = null;

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
        this.SealResId = 'SealResId' in params ? params.SealResId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 签署关键字信息
 * @class
 */
class SignKeyword extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键字
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * X轴偏移坐标
         * @type {string || null}
         */
        this.OffsetCoordX = null;

        /**
         * Y轴偏移坐标
         * @type {string || null}
         */
        this.OffsetCoordY = null;

        /**
         * 签章图片宽度
         * @type {string || null}
         */
        this.ImageWidth = null;

        /**
         * 签章图片高度
         * @type {string || null}
         */
        this.ImageHeight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.OffsetCoordX = 'OffsetCoordX' in params ? params.OffsetCoordX : null;
        this.OffsetCoordY = 'OffsetCoordY' in params ? params.OffsetCoordY : null;
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;

    }
}

/**
 * DescribeTaskStatus返回参数结构体
 * @class
 */
class DescribeTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务结果
         * @type {string || null}
         */
        this.TaskResult = null;

        /**
         * 任务类型，010代表合同上传结果，020代表合同下载结果
         * @type {string || null}
         */
        this.TaskType = null;

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
        this.TaskResult = 'TaskResult' in params ? params.TaskResult : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckVcode请求参数结构体
 * @class
 */
class CheckVcodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名VerifyCode
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名CheckVcode
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 帐号ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 合同ID
         * @type {string || null}
         */
        this.ContractResId = null;

        /**
         * 验证码
         * @type {string || null}
         */
        this.VerifyCode = null;

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
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.ContractResId = 'ContractResId' in params ? params.ContractResId : null;
        this.VerifyCode = 'VerifyCode' in params ? params.VerifyCode : null;

    }
}

/**
 * CheckVcode返回参数结构体
 * @class
 */
class CheckVcodeResponse extends  AbstractModel {
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
 * DownloadContract返回参数结构体
 * @class
 */
class DownloadContractResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
 * 签署坐标对象
 * @class
 */
class SignLocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名域页数
         * @type {string || null}
         */
        this.SignOnPage = null;

        /**
         * 签名域左下角X轴坐标轴
         * @type {string || null}
         */
        this.SignLocationLBX = null;

        /**
         * 签名域左下角Y轴坐标轴
         * @type {string || null}
         */
        this.SignLocationLBY = null;

        /**
         * 签名域右上角X轴坐标轴
         * @type {string || null}
         */
        this.SignLocationRUX = null;

        /**
         * 签名域右上角Y轴坐标轴
         * @type {string || null}
         */
        this.SignLocationRUY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignOnPage = 'SignOnPage' in params ? params.SignOnPage : null;
        this.SignLocationLBX = 'SignLocationLBX' in params ? params.SignLocationLBX : null;
        this.SignLocationLBY = 'SignLocationLBY' in params ? params.SignLocationLBY : null;
        this.SignLocationRUX = 'SignLocationRUX' in params ? params.SignLocationRUX : null;
        this.SignLocationRUY = 'SignLocationRUY' in params ? params.SignLocationRUY : null;

    }
}

/**
 * SignContractByKeyword返回参数结构体
 * @class
 */
class SignContractByKeywordResponse extends  AbstractModel {
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
 * 签署人信息
 * @class
 */
class SignInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 授权时间，格式为年月日时分秒，例20160801095509
         * @type {string || null}
         */
        this.AuthorizationTime = null;

        /**
         * 授权IP地址
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 签章ID
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 签名图片，优先级比SealId高
         * @type {string || null}
         */
        this.ImageData = null;

        /**
         * 默认值：1  表示RSA证书， 2 表示国密证书， 参数不传时默认为1
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 签名域的标签值
         * @type {string || null}
         */
        this.SignLocation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.AuthorizationTime = 'AuthorizationTime' in params ? params.AuthorizationTime : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.ImageData = 'ImageData' in params ? params.ImageData : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.SignLocation = 'SignLocation' in params ? params.SignLocation : null;

    }
}

/**
 * DeleteSeal请求参数结构体
 * @class
 */
class DeleteSealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名SealMng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名DeleteSeal
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 帐号ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 签章ID
         * @type {string || null}
         */
        this.SealResId = null;

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
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.SealResId = 'SealResId' in params ? params.SealResId : null;

    }
}

/**
 * DownloadContract请求参数结构体
 * @class
 */
class DownloadContractRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名ContractMng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名DownloadContract
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 合同ID
         * @type {string || null}
         */
        this.ContractResId = null;

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
        this.ContractResId = 'ContractResId' in params ? params.ContractResId : null;

    }
}

/**
 * CreateEnterpriseAccount返回参数结构体
 * @class
 */
class CreateEnterpriseAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帐号ID
         * @type {string || null}
         */
        this.AccountResId = null;

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
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePersonalAccount返回参数结构体
 * @class
 */
class CreatePersonalAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号ID
         * @type {string || null}
         */
        this.AccountResId = null;

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
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEnterpriseAccount请求参数结构体
 * @class
 */
class CreateEnterpriseAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名AccountMng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名CreateEnterpriseAccount
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 企业用户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 企业用户证件类型，8代表营业执照，详情请见常见问题
         * @type {number || null}
         */
        this.IdentType = null;

        /**
         * 企业用户营业执照号码
         * @type {string || null}
         */
        this.IdentNo = null;

        /**
         * 企业联系人手机号
         * @type {string || null}
         */
        this.MobilePhone = null;

        /**
         * 经办人姓名
         * @type {string || null}
         */
        this.TransactorName = null;

        /**
         * 经办人证件类型，0代表身份证
         * @type {number || null}
         */
        this.TransactorIdentType = null;

        /**
         * 经办人证件号码
         * @type {string || null}
         */
        this.TransactorIdentNo = null;

        /**
         * 经办人手机号
         * @type {string || null}
         */
        this.TransactorPhone = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.IdentType = 'IdentType' in params ? params.IdentType : null;
        this.IdentNo = 'IdentNo' in params ? params.IdentNo : null;
        this.MobilePhone = 'MobilePhone' in params ? params.MobilePhone : null;
        this.TransactorName = 'TransactorName' in params ? params.TransactorName : null;
        this.TransactorIdentType = 'TransactorIdentType' in params ? params.TransactorIdentType : null;
        this.TransactorIdentNo = 'TransactorIdentNo' in params ? params.TransactorIdentNo : null;
        this.TransactorPhone = 'TransactorPhone' in params ? params.TransactorPhone : null;

    }
}

/**
 * CreateContractByUpload请求参数结构体
 * @class
 */
class CreateContractByUploadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名ContractMng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名CreateContractByUpload
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 签署人信息
         * @type {Array.<SignInfo> || null}
         */
        this.SignInfos = null;

        /**
         * 合同上传链接地址
         * @type {string || null}
         */
        this.ContractFile = null;

        /**
         * 合同名称
         * @type {string || null}
         */
        this.ContractName = null;

        /**
         * 合同发起方帐号ID
         * @type {string || null}
         */
        this.Initiator = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remarks = null;

        /**
         * 合同长时间未签署的过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

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

        if (params.SignInfos) {
            this.SignInfos = new Array();
            for (let z in params.SignInfos) {
                let obj = new SignInfo();
                obj.deserialize(params.SignInfos[z]);
                this.SignInfos.push(obj);
            }
        }
        this.ContractFile = 'ContractFile' in params ? params.ContractFile : null;
        this.ContractName = 'ContractName' in params ? params.ContractName : null;
        this.Initiator = 'Initiator' in params ? params.Initiator : null;
        this.Remarks = 'Remarks' in params ? params.Remarks : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * CreateContractByUpload返回参数结构体
 * @class
 */
class CreateContractByUploadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
 * DeleteSeal返回参数结构体
 * @class
 */
class DeleteSealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签章ID
         * @type {string || null}
         */
        this.SealResId = null;

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
        this.SealResId = 'SealResId' in params ? params.SealResId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePersonalAccount请求参数结构体
 * @class
 */
class CreatePersonalAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名AccountMng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名CreatePersonalAccount
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 个人用户姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 个人用户证件类型，0代表身份证，详情请见常见问题
         * @type {number || null}
         */
        this.IdentType = null;

        /**
         * 个人用户证件号码
         * @type {string || null}
         */
        this.IdentNo = null;

        /**
         * 个人用户手机号
         * @type {string || null}
         */
        this.MobilePhone = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.IdentType = 'IdentType' in params ? params.IdentType : null;
        this.IdentNo = 'IdentNo' in params ? params.IdentNo : null;
        this.MobilePhone = 'MobilePhone' in params ? params.MobilePhone : null;

    }
}

/**
 * DescribeTaskStatus请求参数结构体
 * @class
 */
class DescribeTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名CommonMng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名DescribeTaskStatus
         * @type {string || null}
         */
        this.Operation = null;

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
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * SignContractByKeyword请求参数结构体
 * @class
 */
class SignContractByKeywordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名ContractMng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名SignContractByKeyword
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 合同ID
         * @type {string || null}
         */
        this.ContractResId = null;

        /**
         * 账户ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 授权时间，格式为年月日时分秒，例20160801095509
         * @type {string || null}
         */
        this.AuthorizationTime = null;

        /**
         * 授权IP地址
         * @type {string || null}
         */
        this.Position = null;

        /**
         * 签署关键字，偏移坐标原点为关键字中心
         * @type {SignKeyword || null}
         */
        this.SignKeyword = null;

        /**
         * 签章ID
         * @type {string || null}
         */
        this.SealResId = null;

        /**
         * 选用证书类型：1  表示RSA证书， 2 表示国密证书， 参数不传时默认为1
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 签名图片，base64编码
         * @type {string || null}
         */
        this.ImageData = null;

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
        this.ContractResId = 'ContractResId' in params ? params.ContractResId : null;
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.AuthorizationTime = 'AuthorizationTime' in params ? params.AuthorizationTime : null;
        this.Position = 'Position' in params ? params.Position : null;

        if (params.SignKeyword) {
            let obj = new SignKeyword();
            obj.deserialize(params.SignKeyword)
            this.SignKeyword = obj;
        }
        this.SealResId = 'SealResId' in params ? params.SealResId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.ImageData = 'ImageData' in params ? params.ImageData : null;

    }
}

/**
 * SendVcode请求参数结构体
 * @class
 */
class SendVcodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名VerifyCode
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名SendVcode
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 合同ID
         * @type {string || null}
         */
        this.ContractResId = null;

        /**
         * 帐号ID
         * @type {string || null}
         */
        this.AccountResId = null;

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
        this.ContractResId = 'ContractResId' in params ? params.ContractResId : null;
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;

    }
}

/**
 * SignContractByCoordinate请求参数结构体
 * @class
 */
class SignContractByCoordinateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名ContractMng
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名SignContractByCoordinate
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 合同ID
         * @type {string || null}
         */
        this.ContractResId = null;

        /**
         * 帐户ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 授权时间，格式为年月日时分秒，例20160801095509
         * @type {string || null}
         */
        this.AuthorizationTime = null;

        /**
         * 授权IP地址
         * @type {string || null}
         */
        this.Position = null;

        /**
         * 签署坐标，坐标原点在文件左下角，坐标单位为磅，坐标不得超过合同文件边界
         * @type {Array.<SignLocation> || null}
         */
        this.SignLocations = null;

        /**
         * 签章ID
         * @type {string || null}
         */
        this.SealResId = null;

        /**
         * 选用证书类型：1  表示RSA证书， 2 表示国密证书， 参数不传时默认为1
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 签名图片，base64编码
         * @type {string || null}
         */
        this.ImageData = null;

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
        this.ContractResId = 'ContractResId' in params ? params.ContractResId : null;
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.AuthorizationTime = 'AuthorizationTime' in params ? params.AuthorizationTime : null;
        this.Position = 'Position' in params ? params.Position : null;

        if (params.SignLocations) {
            this.SignLocations = new Array();
            for (let z in params.SignLocations) {
                let obj = new SignLocation();
                obj.deserialize(params.SignLocations[z]);
                this.SignLocations.push(obj);
            }
        }
        this.SealResId = 'SealResId' in params ? params.SealResId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.ImageData = 'ImageData' in params ? params.ImageData : null;

    }
}

/**
 * SignContractByCoordinate返回参数结构体
 * @class
 */
class SignContractByCoordinateResponse extends  AbstractModel {
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
 * DeleteAccount返回参数结构体
 * @class
 */
class DeleteAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除成功帐号ID列表
         * @type {Array.<string> || null}
         */
        this.DelSuccessList = null;

        /**
         * 删除失败帐号ID列表
         * @type {Array.<string> || null}
         */
        this.DelFailedList = null;

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
        this.DelSuccessList = 'DelSuccessList' in params ? params.DelSuccessList : null;
        this.DelFailedList = 'DelFailedList' in params ? params.DelFailedList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SendVcodeResponse: SendVcodeResponse,
    DeleteAccountRequest: DeleteAccountRequest,
    CreateSealRequest: CreateSealRequest,
    CreateSealResponse: CreateSealResponse,
    SignKeyword: SignKeyword,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    CheckVcodeRequest: CheckVcodeRequest,
    CheckVcodeResponse: CheckVcodeResponse,
    DownloadContractResponse: DownloadContractResponse,
    SignLocation: SignLocation,
    SignContractByKeywordResponse: SignContractByKeywordResponse,
    SignInfo: SignInfo,
    DeleteSealRequest: DeleteSealRequest,
    DownloadContractRequest: DownloadContractRequest,
    CreateEnterpriseAccountResponse: CreateEnterpriseAccountResponse,
    CreatePersonalAccountResponse: CreatePersonalAccountResponse,
    CreateEnterpriseAccountRequest: CreateEnterpriseAccountRequest,
    CreateContractByUploadRequest: CreateContractByUploadRequest,
    CreateContractByUploadResponse: CreateContractByUploadResponse,
    DeleteSealResponse: DeleteSealResponse,
    CreatePersonalAccountRequest: CreatePersonalAccountRequest,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    SignContractByKeywordRequest: SignContractByKeywordRequest,
    SendVcodeRequest: SendVcodeRequest,
    SignContractByCoordinateRequest: SignContractByCoordinateRequest,
    SignContractByCoordinateResponse: SignContractByCoordinateResponse,
    DeleteAccountResponse: DeleteAccountResponse,

}
