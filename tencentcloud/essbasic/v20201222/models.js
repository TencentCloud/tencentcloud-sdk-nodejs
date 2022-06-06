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
 * DescribeFaceIdResults请求参数结构体
 * @class
 */
class DescribeFaceIdResultsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 慧眼业务ID
         * @type {string || null}
         */
        this.WbAppId = null;

        /**
         * 订单号(orderNo); 限制在3个或以内
         * @type {Array.<string> || null}
         */
        this.OrderNumbers = null;

        /**
         * 1:视频+照片,2:照片,3:视频,0（或其他数字）:无; 可选
         * @type {number || null}
         */
        this.FileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.WbAppId = 'WbAppId' in params ? params.WbAppId : null;
        this.OrderNumbers = 'OrderNumbers' in params ? params.OrderNumbers : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

    }
}

/**
 * CreateSubOrganization请求参数结构体
 * @class
 */
class CreateSubOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 机构证件号码类型可选值：
1. USCC - 统一社会信用代码
2. BIZREGISTNO - 营业执照注册号
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 机构证件号码
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 机构类型可选值：
1. ENTERPRISE - 企业
2. INDIVIDUALBIZ - 个体工商户
3. PUBLICINSTITUTION - 政府/事业单位
4. OTHERS - 其他组织
         * @type {string || null}
         */
        this.OrganizationType = null;

        /**
         * 机构法人/经营者姓名
         * @type {string || null}
         */
        this.LegalName = null;

        /**
         * 机构法人/经营者证件类型可选值：
1. ID_CARD - 居民身份证
2. PASSPORT - 护照
3. MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证
4. MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证
5. HOUSEHOLD_REGISTER - 户口本
6. TEMP_ID_CARD - 临时居民身份证
         * @type {string || null}
         */
        this.LegalIdCardType = null;

        /**
         * 机构法人/经营者证件号码；
OrganizationType 为 ENTERPRISE时，INDIVIDUALBIZ 时必填，其他情况选填
         * @type {string || null}
         */
        this.LegalIdCardNumber = null;

        /**
         * 机构名称全称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 机构在第三方的唯一标识，32位以内标识符
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 是否使用OpenId作为数据主键，如果为true，请确保OpenId在当前应用号唯一
         * @type {boolean || null}
         */
        this.UseOpenId = null;

        /**
         * 机构证件文件类型可选值：
1. USCCFILE - 统一社会信用代码证书
2. LICENSEFILE - 营业执照
         * @type {string || null}
         */
        this.IdCardFileType = null;

        /**
         * 机构证件照片文件，base64编码，支持jpg、jpeg、png格式
         * @type {string || null}
         */
        this.BizLicenseFile = null;

        /**
         * 机构证件照片文件名
         * @type {string || null}
         */
        this.BizLicenseFileName = null;

        /**
         * 机构法人/经营者/联系人手机号码
         * @type {string || null}
         */
        this.LegalMobile = null;

        /**
         * 组织联系人姓名
         * @type {string || null}
         */
        this.ContactName = null;

        /**
         * 实名认证的客户端IP
         * @type {string || null}
         */
        this.VerifyClientIp = null;

        /**
         * 实名认证的服务器IP
         * @type {string || null}
         */
        this.VerifyServerIp = null;

        /**
         * 企业联系地址
         * @type {Address || null}
         */
        this.ContactAddress = null;

        /**
         * 机构电子邮箱
         * @type {string || null}
         */
        this.Email = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.OrganizationType = 'OrganizationType' in params ? params.OrganizationType : null;
        this.LegalName = 'LegalName' in params ? params.LegalName : null;
        this.LegalIdCardType = 'LegalIdCardType' in params ? params.LegalIdCardType : null;
        this.LegalIdCardNumber = 'LegalIdCardNumber' in params ? params.LegalIdCardNumber : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.UseOpenId = 'UseOpenId' in params ? params.UseOpenId : null;
        this.IdCardFileType = 'IdCardFileType' in params ? params.IdCardFileType : null;
        this.BizLicenseFile = 'BizLicenseFile' in params ? params.BizLicenseFile : null;
        this.BizLicenseFileName = 'BizLicenseFileName' in params ? params.BizLicenseFileName : null;
        this.LegalMobile = 'LegalMobile' in params ? params.LegalMobile : null;
        this.ContactName = 'ContactName' in params ? params.ContactName : null;
        this.VerifyClientIp = 'VerifyClientIp' in params ? params.VerifyClientIp : null;
        this.VerifyServerIp = 'VerifyServerIp' in params ? params.VerifyServerIp : null;

        if (params.ContactAddress) {
            let obj = new Address();
            obj.deserialize(params.ContactAddress)
            this.ContactAddress = obj;
        }
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * 此结构体 (Component) 用于描述控件属性。
 * @class
 */
class Component extends  AbstractModel {
    constructor(){
        super();

        /**
         * 控件编号

注：
当GenerateMode=3时，通过"^"来决定是否使用关键字整词匹配能力。
例：
当GenerateMode=3时，如果传入关键字"^甲方签署^"，则会在PDF文件中有且仅有"甲方签署"关键字的地方进行对应操作。
如传入的关键字为"甲方签署"，则PDF文件中每个出现关键字的位置都会执行相应操作。
         * @type {string || null}
         */
        this.ComponentId = null;

        /**
         * 如果是Component控件类型，则可选的字段为：
TEXT - 普通文本控件；
DATE - 普通日期控件；
SELECT- 勾选框控件；
如果是SignComponent控件类型，则可选的字段为
SIGN_SEAL- 签署印章控件；
SIGN_DATE- 签署日期控件；
SIGN_SIGNATURE - 用户签名控件；
         * @type {string || null}
         */
        this.ComponentType = null;

        /**
         * 控件名称
         * @type {string || null}
         */
        this.ComponentName = null;

        /**
         * 定义控件是否为必填项，默认为false
         * @type {boolean || null}
         */
        this.ComponentRequired = null;

        /**
         * 控件所属文件的序号 (模板中的resourceId排列序号)
         * @type {number || null}
         */
        this.FileIndex = null;

        /**
         * 控件生成的方式：
0 - 普通控件
1 - 表单域
2 - html 控件
3 - 关键字
         * @type {number || null}
         */
        this.GenerateMode = null;

        /**
         * 参数控件宽度，单位px
         * @type {number || null}
         */
        this.ComponentWidth = null;

        /**
         * 参数控件高度，单位px
         * @type {number || null}
         */
        this.ComponentHeight = null;

        /**
         * 参数控件所在页码
         * @type {number || null}
         */
        this.ComponentPage = null;

        /**
         * 参数控件X位置，单位px
         * @type {number || null}
         */
        this.ComponentPosX = null;

        /**
         * 参数控件Y位置，单位px
         * @type {number || null}
         */
        this.ComponentPosY = null;

        /**
         * 参数控件样式
         * @type {string || null}
         */
        this.ComponentExtra = null;

        /**
         * 印章ID，如果是手写签名则为jpg或png格式的base64图片

SIGN_SEAL控件,可以用ORG_DEFAULT_SEAL表示主企业的默认印章
SIGN_SEAL控件,可以用SUBORG_DEFAULT_SEAL表示子企业的默认印章
SIGN_SEAL控件,可以用USER_DEFAULT_SEAL表示个人默认印章
         * @type {string || null}
         */
        this.ComponentValue = null;

        /**
         * 如果是SIGN_SEAL类型的签署控件, 参数标识H5签署界面是否在该签署区上进行放置展示, 1为放置,其他为不放置
         * @type {number || null}
         */
        this.SealOperate = null;

        /**
         * 不同GenerateMode对应的额外信息
         * @type {string || null}
         */
        this.GenerateExtra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentId = 'ComponentId' in params ? params.ComponentId : null;
        this.ComponentType = 'ComponentType' in params ? params.ComponentType : null;
        this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
        this.ComponentRequired = 'ComponentRequired' in params ? params.ComponentRequired : null;
        this.FileIndex = 'FileIndex' in params ? params.FileIndex : null;
        this.GenerateMode = 'GenerateMode' in params ? params.GenerateMode : null;
        this.ComponentWidth = 'ComponentWidth' in params ? params.ComponentWidth : null;
        this.ComponentHeight = 'ComponentHeight' in params ? params.ComponentHeight : null;
        this.ComponentPage = 'ComponentPage' in params ? params.ComponentPage : null;
        this.ComponentPosX = 'ComponentPosX' in params ? params.ComponentPosX : null;
        this.ComponentPosY = 'ComponentPosY' in params ? params.ComponentPosY : null;
        this.ComponentExtra = 'ComponentExtra' in params ? params.ComponentExtra : null;
        this.ComponentValue = 'ComponentValue' in params ? params.ComponentValue : null;
        this.SealOperate = 'SealOperate' in params ? params.SealOperate : null;
        this.GenerateExtra = 'GenerateExtra' in params ? params.GenerateExtra : null;

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
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 印章类型：
1. PERSONAL - 个人私章
2. OFFICIAL - 公章
3. SPECIAL_FINANCIAL - 财务专用章
4. CONTRACT - 合同专用章
5. LEGAL_REPRESENTATIVE - 法定代表人章
6. SPECIAL_NATIONWIDE_INVOICE - 发票专用章
7. OTHER-其他
         * @type {string || null}
         */
        this.SealType = null;

        /**
         * 印章名称
         * @type {string || null}
         */
        this.SealName = null;

        /**
         * 请求创建印章的客户端IP
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 印章图片，base64编码（与FileId参数二选一，同时传入参数时优先使用Image参数）
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 印章文件图片ID（与Image参数二选一，同时传入参数时优先使用Image参数）
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 需要创建印章的用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 是否是默认印章 true：是，false：否
         * @type {boolean || null}
         */
        this.IsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.SealType = 'SealType' in params ? params.SealType : null;
        this.SealName = 'SealName' in params ? params.SealName : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

    }
}

/**
 * CancelFlow返回参数结构体
 * @class
 */
class CancelFlowResponse extends  AbstractModel {
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
 * 此结构体 (FaceIdPhoto) 用于描述慧眼人脸核身照片信息。
 * @class
 */
class FaceIdPhoto extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核身结果：
0 - 通过；
1 - 未通过
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 核身失败描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 照片数据 (base64编码, 一般为JPG或PNG)
         * @type {string || null}
         */
        this.Photo = null;

        /**
         * 订单号 (orderNo)
         * @type {string || null}
         */
        this.OrderNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Photo = 'Photo' in params ? params.Photo : null;
        this.OrderNumber = 'OrderNumber' in params ? params.OrderNumber : null;

    }
}

/**
 * VerifySubOrganization请求参数结构体
 * @class
 */
class VerifySubOrganizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息，该接口SubOrganizationId必填
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 机构在第三方的唯一标识，32位定长字符串，与 Caller 中 SubOrgnizationId 二者至少需要传入一个，全部传入时则使用 SubOrganizationId 信息
         * @type {string || null}
         */
        this.OpenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;

    }
}

/**
 * VerifyUser请求参数结构体
 * @class
 */
class VerifyUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 电子签平台用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 是否需要下发个人长效证书，默认为false
注：如您有下发个人长效证书需求，请提前邮件至e-contract@oa.com进行申请。
         * @type {boolean || null}
         */
        this.CertificateRequired = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.CertificateRequired = 'CertificateRequired' in params ? params.CertificateRequired : null;

    }
}

/**
 * DescribeFaceIdPhotos返回参数结构体
 * @class
 */
class DescribeFaceIdPhotosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 照片信息列表
         * @type {Array.<FaceIdPhoto> || null}
         */
        this.Photos = null;

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

        if (params.Photos) {
            this.Photos = new Array();
            for (let z in params.Photos) {
                let obj = new FaceIdPhoto();
                obj.deserialize(params.Photos[z]);
                this.Photos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckVerifyCodeMatchFlowId请求参数结构体
 * @class
 */
class CheckVerifyCodeMatchFlowIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 验证码
         * @type {string || null}
         */
        this.VerifyCode = null;

        /**
         * 流程(目录) id
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.VerifyCode = 'VerifyCode' in params ? params.VerifyCode : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * CheckBankCard2EVerification请求参数结构体
 * @class
 */
class CheckBankCard2EVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息; 必选
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 银行卡号
         * @type {string || null}
         */
        this.BankCard = null;

        /**
         * 姓名
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

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.BankCard = 'BankCard' in params ? params.BankCard : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeFileIdsByCustomIds返回参数结构体
 * @class
 */
class DescribeFileIdsByCustomIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * <自定义Id,文件id>数组
         * @type {Array.<CustomFileIdMap> || null}
         */
        this.CustomIdList = null;

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

        if (params.CustomIdList) {
            this.CustomIdList = new Array();
            for (let z in params.CustomIdList) {
                let obj = new CustomFileIdMap();
                obj.deserialize(params.CustomIdList[z]);
                this.CustomIdList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySubOrganizationInfo返回参数结构体
 * @class
 */
class ModifySubOrganizationInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子机构ID
         * @type {string || null}
         */
        this.SubOrganizationId = null;

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
        this.SubOrganizationId = 'SubOrganizationId' in params ? params.SubOrganizationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCatalogApprovers请求参数结构体
 * @class
 */
class DescribeCatalogApproversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 目录ID
         * @type {string || null}
         */
        this.CatalogId = null;

        /**
         * 查询指定用户是否为参与者,为空表示查询所有参与者
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.CatalogId = 'CatalogId' in params ? params.CatalogId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CheckFaceIdentify请求参数结构体
 * @class
 */
class CheckFaceIdentifyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息; 必选
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 人脸核身渠道; 必选; WEIXINAPP:腾讯电子签小程序,FACEID:腾讯电子签慧眼,None:白名单中的客户直接通过
         * @type {string || null}
         */
        this.VerifyChannel = null;

        /**
         * 核身订单号; 必选; 对于WEIXINAPP,直接取响应的{VerifyResult};对于FACEID,使用{WbAppId}:{OrderNo}拼接
         * @type {string || null}
         */
        this.VerifyResult = null;

        /**
         * 要对比的姓名; 可选; 未填写时对比caller.OperatorId的实名信息
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 要对比的身份证号码; 可选; 未填写时对比caller.OperatorId的实名信息
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 是否取认证时的照片
         * @type {boolean || null}
         */
        this.GetPhoto = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.VerifyChannel = 'VerifyChannel' in params ? params.VerifyChannel : null;
        this.VerifyResult = 'VerifyResult' in params ? params.VerifyResult : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.GetPhoto = 'GetPhoto' in params ? params.GetPhoto : null;

    }
}

/**
 * CreateServerFlowSign返回参数结构体
 * @class
 */
class CreateServerFlowSignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态：
0：失败
1：成功
         * @type {number || null}
         */
        this.SignStatus = null;

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
        this.SignStatus = 'SignStatus' in params ? params.SignStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyUser返回参数结构体
 * @class
 */
class ModifyUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯电子签平台用户唯一标识
         * @type {string || null}
         */
        this.UserId = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckBankCard4EVerification返回参数结构体
 * @class
 */
class CheckBankCard4EVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测结果
计费结果码：
  0:  认证通过
  1:  认证未通过
  2:  持卡人信息有误
  3:  未开通无卡支付
  4:  此卡被没收
  5:  无效卡号
  6:  此卡无对应发卡行
  7:  该卡未初始化或睡眠卡
  8:  作弊卡、吞卡
  9:  此卡已挂失
  10: 该卡已过期
  11: 受限制的卡
  12: 密码错误次数超限
  13: 发卡行不支持此交易
不收费结果码:
  101: 姓名校验不通过
  102: 银行卡号码有误
  103: 验证中心服务繁忙
  104: 身份证号码有误
  105: 手机号码不合法
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 结果描述; 未通过时必选
         * @type {string || null}
         */
        this.Description = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFileUrls请求参数结构体
 * @class
 */
class DescribeFileUrlsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 业务编号数组，如模板编号、文档编号、印章编号、流程编号、目录编号
         * @type {Array.<string> || null}
         */
        this.BusinessIds = null;

        /**
         * 业务类型：
1. TEMPLATE - 模板
2. SEAL - 印章
3. FLOW - 流程
4.CATALOG - 目录
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * 下载后的文件命名，只有FileType为“ZIP”时生效
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 单个业务ID多个资源情况下，指定资源起始偏移量
         * @type {number || null}
         */
        this.ResourceOffset = null;

        /**
         * 单个业务ID多个资源情况下，指定资源数量
         * @type {number || null}
         */
        this.ResourceLimit = null;

        /**
         * 文件类型，支持"JPG", "PDF","ZIP"等，默认为上传的文件类型
         * @type {string || null}
         */
        this.FileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.BusinessIds = 'BusinessIds' in params ? params.BusinessIds : null;
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.ResourceOffset = 'ResourceOffset' in params ? params.ResourceOffset : null;
        this.ResourceLimit = 'ResourceLimit' in params ? params.ResourceLimit : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

    }
}

/**
 * 此结构体 (FlowFileInfo) 用于描述流程文档信息。
 * @class
 */
class FlowFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件序号
         * @type {number || null}
         */
        this.FileIndex = null;

        /**
         * 文件类型
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件的MD5码
         * @type {string || null}
         */
        this.FileMd5 = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件大小，单位为Byte
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 文件创建时间戳
         * @type {number || null}
         */
        this.CreatedOn = null;

        /**
         * 文件的下载地址
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileIndex = 'FileIndex' in params ? params.FileIndex : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileMd5 = 'FileMd5' in params ? params.FileMd5 : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 此结构体 (SmsTemplate) 用于描述短信模板。
 * @class
 */
class SmsTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID，必须填写已审核通过的模板ID。模板ID可登录短信控制台查看。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 短信签名内容，使用UTF-8编码，必须填写已审核通过的签名，签名信息可登录短信控制台查看。
         * @type {string || null}
         */
        this.Sign = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Sign = 'Sign' in params ? params.Sign : null;

    }
}

/**
 * 此结构体 (Address) 用于描述住址或通讯地址。
 * @class
 */
class Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * 省份
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 区县
         * @type {string || null}
         */
        this.County = null;

        /**
         * 详细地址
         * @type {string || null}
         */
        this.Details = null;

        /**
         * 国家，默认中国
         * @type {string || null}
         */
        this.Country = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.County = 'County' in params ? params.County : null;
        this.Details = 'Details' in params ? params.Details : null;
        this.Country = 'Country' in params ? params.Country : null;

    }
}

/**
 * ModifyUserDefaultSeal请求参数结构体
 * @class
 */
class ModifyUserDefaultSealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 用户唯一标识，需要重新指定默认印章的用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 重新指定的默认印章ID
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 请求重新指定个人默认印章的客户端IP
         * @type {string || null}
         */
        this.SourceIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;

    }
}

/**
 * GenerateUserSeal请求参数结构体
 * @class
 */
class GenerateUserSealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 请求生成个人印章的客户端IP
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 电子印章名称
         * @type {string || null}
         */
        this.SealName = null;

        /**
         * 是否是默认印章 true：是，false：否
         * @type {boolean || null}
         */
        this.IsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.SealName = 'SealName' in params ? params.SealName : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

    }
}

/**
 * CheckIdCardVerification返回参数结构体
 * @class
 */
class CheckIdCardVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测结果; 
收费错误码:
  0: 通过,
  1: 姓名和身份证号不一致,
免费错误码:
  101: 非法身份证号(长度,格式等不正确),
  102: 非法姓名(长度,格式等不正确),
  103: 验证平台异常,
  104: 证件库中无此身份证记录
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 结果描述; 未通过时必选
         * @type {string || null}
         */
        this.Description = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlow返回参数结构体
 * @class
 */
class DescribeFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程创建者信息
         * @type {Caller || null}
         */
        this.Creator = null;

        /**
         * 流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 流程名称
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 流程描述
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 流程的类型: ”劳务合同“,”租赁合同“,”销售合同“,”其他“
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 流程状态：
0-创建；
1-签署中；
2-拒签；
3-撤回；
4-签完存档完成；
5-已过期；
6-已销毁
7-签署完成未归档
         * @type {number || null}
         */
        this.FlowStatus = null;

        /**
         * 流程创建时间
         * @type {number || null}
         */
        this.CreatedOn = null;

        /**
         * 流程完成时间
         * @type {number || null}
         */
        this.UpdatedOn = null;

        /**
         * 流程截止日期
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 回调地址
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 流程中止原因
         * @type {string || null}
         */
        this.FlowMessage = null;

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

        if (params.Creator) {
            let obj = new Caller();
            obj.deserialize(params.Creator)
            this.Creator = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.FlowStatus = 'FlowStatus' in params ? params.FlowStatus : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.FlowMessage = 'FlowMessage' in params ? params.FlowMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSubOrganizationAndSeal请求参数结构体
 * @class
 */
class CreateSubOrganizationAndSealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 机构名称全称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 机构证件号码类型可选值：
1. USCC - 统一社会信用代码
2. BIZREGISTNO - 营业执照注册号
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 机构证件号码
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 机构类型可选值：
1. ENTERPRISE - 企业
2. INDIVIDUALBIZ - 个体工商户
3. PUBLICINSTITUTION - 政府/事业单位
4. OTHERS - 其他组织
         * @type {string || null}
         */
        this.OrganizationType = null;

        /**
         * 机构法人/经营者姓名
         * @type {string || null}
         */
        this.LegalName = null;

        /**
         * 机构法人/经营者证件类型可选值：
1. ID_CARD - 居民身份证
2. PASSPORT - 护照
3. MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证
4. MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证
5. HOUSEHOLD_REGISTER - 户口本
6. TEMP_ID_CARD - 临时居民身份证
         * @type {string || null}
         */
        this.LegalIdCardType = null;

        /**
         * 机构法人/经营者证件号码；
OrganizationType 为 ENTERPRISE时，INDIVIDUALBIZ 时必填，其他情况选填
         * @type {string || null}
         */
        this.LegalIdCardNumber = null;

        /**
         * 实名认证的客户端IP/请求生成企业印章的客户端Ip
         * @type {string || null}
         */
        this.VerifyClientIp = null;

        /**
         * 机构电子邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 机构证件文件类型可选值：
1. USCCFILE - 统一社会信用代码证书
2. LICENSEFILE - 营业执照
         * @type {string || null}
         */
        this.IdCardFileType = null;

        /**
         * 机构证件照片文件，base64编码，支持jpg、jpeg、png格式
         * @type {string || null}
         */
        this.BizLicenseFile = null;

        /**
         * 机构证件照片文件名
         * @type {string || null}
         */
        this.BizLicenseFileName = null;

        /**
         * 机构法人/经营者/联系人手机号码
         * @type {string || null}
         */
        this.LegalMobile = null;

        /**
         * 组织联系人姓名
         * @type {string || null}
         */
        this.ContactName = null;

        /**
         * 实名认证的服务器IP
         * @type {string || null}
         */
        this.VerifyServerIp = null;

        /**
         * 企业联系地址
         * @type {Address || null}
         */
        this.ContactAddress = null;

        /**
         * 电子印章名称
         * @type {string || null}
         */
        this.SealName = null;

        /**
         * 印章类型：默认: CONTRACT
1. OFFICIAL-公章
2. SPECIAL_FINANCIAL-财务专用章
3. CONTRACT-合同专用章
4. LEGAL_REPRESENTATIVE-法定代表人章
5. SPECIAL_NATIONWIDE_INVOICE-发票专用章
6. OTHER-其他
         * @type {string || null}
         */
        this.SealType = null;

        /**
         * 企业印章横向文字，最多可填8个汉字（可为空，默认为"电子签名专用章"）
         * @type {string || null}
         */
        this.SealHorizontalText = null;

        /**
         * 机构在第三方的唯一标识，32位以内标识符
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 是否使用OpenId作为数据主键，如果为true，请确保OpenId在当前应用号唯一
         * @type {boolean || null}
         */
        this.UseOpenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.OrganizationType = 'OrganizationType' in params ? params.OrganizationType : null;
        this.LegalName = 'LegalName' in params ? params.LegalName : null;
        this.LegalIdCardType = 'LegalIdCardType' in params ? params.LegalIdCardType : null;
        this.LegalIdCardNumber = 'LegalIdCardNumber' in params ? params.LegalIdCardNumber : null;
        this.VerifyClientIp = 'VerifyClientIp' in params ? params.VerifyClientIp : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.IdCardFileType = 'IdCardFileType' in params ? params.IdCardFileType : null;
        this.BizLicenseFile = 'BizLicenseFile' in params ? params.BizLicenseFile : null;
        this.BizLicenseFileName = 'BizLicenseFileName' in params ? params.BizLicenseFileName : null;
        this.LegalMobile = 'LegalMobile' in params ? params.LegalMobile : null;
        this.ContactName = 'ContactName' in params ? params.ContactName : null;
        this.VerifyServerIp = 'VerifyServerIp' in params ? params.VerifyServerIp : null;

        if (params.ContactAddress) {
            let obj = new Address();
            obj.deserialize(params.ContactAddress)
            this.ContactAddress = obj;
        }
        this.SealName = 'SealName' in params ? params.SealName : null;
        this.SealType = 'SealType' in params ? params.SealType : null;
        this.SealHorizontalText = 'SealHorizontalText' in params ? params.SealHorizontalText : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.UseOpenId = 'UseOpenId' in params ? params.UseOpenId : null;

    }
}

/**
 * CheckMobileVerification请求参数结构体
 * @class
 */
class CheckMobileVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息; 必选
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 身份证件号码
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 身份证件类型; ID_CARD
         * @type {string || null}
         */
        this.IdCardType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;

    }
}

/**
 * SendFlowUrl返回参数结构体
 * @class
 */
class SendFlowUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署任务ID，标识每一次的流程发送
         * @type {string || null}
         */
        this.SignId = null;

        /**
         * 签署链接
         * @type {string || null}
         */
        this.SignUrl = null;

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
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.SignUrl = 'SignUrl' in params ? params.SignUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCatalogApprovers返回参数结构体
 * @class
 */
class DescribeCatalogApproversResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参与者列表
         * @type {Array.<CatalogApprovers> || null}
         */
        this.Approvers = null;

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

        if (params.Approvers) {
            this.Approvers = new Array();
            for (let z in params.Approvers) {
                let obj = new CatalogApprovers();
                obj.deserialize(params.Approvers[z]);
                this.Approvers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * <自定义Id,文件id>映射对象
 * @class
 */
class CustomFileIdMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义ID
         * @type {string || null}
         */
        this.CustomId = null;

        /**
         * 文件id
         * @type {string || null}
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomId = 'CustomId' in params ? params.CustomId : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

    }
}

/**
 * SendFlow返回参数结构体
 * @class
 */
class SendFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署任务ID，标识每一次的流程发送
         * @type {string || null}
         */
        this.SignId = null;

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
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 目录流程参与者
 * @class
 */
class CatalogApprovers extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 参与者列表
         * @type {Array.<FlowApproverInfo> || null}
         */
        this.Approvers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Approvers) {
            this.Approvers = new Array();
            for (let z in params.Approvers) {
                let obj = new FlowApproverInfo();
                obj.deserialize(params.Approvers[z]);
                this.Approvers.push(obj);
            }
        }

    }
}

/**
 * DescribeSeals请求参数结构体
 * @class
 */
class DescribeSealsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 印章ID列表
         * @type {Array.<string> || null}
         */
        this.SealIds = null;

        /**
         * 用户唯一标识
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.SealIds = 'SealIds' in params ? params.SealIds : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * 此结构体 (FlowApproverInfo) 用于描述流程参与者信息。
 * @class
 */
class FlowApproverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 认证方式：
WEIXINAPP - 微信小程序；
FACEID - 慧眼 (默认)；
VERIFYCODE - 验证码；
THIRD - 第三方 (暂不支持)
         * @type {Array.<string> || null}
         */
        this.VerifyChannel = null;

        /**
         * 签署状态：
0 - 待签署；
1- 已签署；
2 - 拒绝；
3 - 过期未处理；
4 - 流程已撤回,
12-审核中,
13-审核驳回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ApproveStatus = null;

        /**
         * 拒签/签署/审核驳回原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApproveMessage = null;

        /**
         * 签约时间的时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ApproveTime = null;

        /**
         * 签署企业ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubOrganizationId = null;

        /**
         * 签署完成后跳转的URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JumpUrl = null;

        /**
         * 用户签署区ID到印章ID的映射集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ComponentSeal> || null}
         */
        this.ComponentSeals = null;

        /**
         * 签署前置条件：是否强制用户全文阅读，即阅读到待签署文档的最后一页。默认FALSE
         * @type {boolean || null}
         */
        this.IsFullText = null;

        /**
         * 签署前置条件：强制阅读时长，页面停留时长不足则不允许签署。默认不限制
         * @type {number || null}
         */
        this.PreReadTime = null;

        /**
         * 签署人手机号，脱敏显示
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 签署链接截止时间，默认签署流程发起后7天失效
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 是否为最后一个签署人, 若为最后一人，则其签署完成后自动归档
         * @type {boolean || null}
         */
        this.IsLastApprover = null;

        /**
         * 短信模板
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SmsTemplate || null}
         */
        this.SmsTemplate = null;

        /**
         * 身份证号，脱敏显示
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 用户姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否支持线下核身
         * @type {boolean || null}
         */
        this.CanOffLine = null;

        /**
         * 证件号码类型：ID_CARD - 身份证，PASSPORT - 护照，MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证; 暂不支持用于电子签自有平台实名认证，MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证; 暂不支持用于电子签自有平台实名认证，HOUSEHOLD_REGISTER - 户口本; 暂不支持用于电子签自有平台实名认证，TEMP_ID_CARD - 临时居民身份证; 暂不支持用于电子签自有平台实名认证
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 签署回调地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 签署任务ID，标识每一次的流程发送
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.VerifyChannel = 'VerifyChannel' in params ? params.VerifyChannel : null;
        this.ApproveStatus = 'ApproveStatus' in params ? params.ApproveStatus : null;
        this.ApproveMessage = 'ApproveMessage' in params ? params.ApproveMessage : null;
        this.ApproveTime = 'ApproveTime' in params ? params.ApproveTime : null;
        this.SubOrganizationId = 'SubOrganizationId' in params ? params.SubOrganizationId : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;

        if (params.ComponentSeals) {
            this.ComponentSeals = new Array();
            for (let z in params.ComponentSeals) {
                let obj = new ComponentSeal();
                obj.deserialize(params.ComponentSeals[z]);
                this.ComponentSeals.push(obj);
            }
        }
        this.IsFullText = 'IsFullText' in params ? params.IsFullText : null;
        this.PreReadTime = 'PreReadTime' in params ? params.PreReadTime : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.IsLastApprover = 'IsLastApprover' in params ? params.IsLastApprover : null;

        if (params.SmsTemplate) {
            let obj = new SmsTemplate();
            obj.deserialize(params.SmsTemplate)
            this.SmsTemplate = obj;
        }
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CanOffLine = 'CanOffLine' in params ? params.CanOffLine : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * DescribeFlowFiles请求参数结构体
 * @class
 */
class DescribeFlowFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息; 必选
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 需要查询的流程ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * DescribeCustomFlowIds返回参数结构体
 * @class
 */
class DescribeCustomFlowIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义流程 id 映射列表
         * @type {Array.<CustomFlowIdMap> || null}
         */
        this.CustomIdList = null;

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

        if (params.CustomIdList) {
            this.CustomIdList = new Array();
            for (let z in params.CustomIdList) {
                let obj = new CustomFlowIdMap();
                obj.deserialize(params.CustomIdList[z]);
                this.CustomIdList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 此结构体 (SubOrganizationDetail) 用于描述子机构或子企业的详情信息。
 * @class
 */
class SubOrganizationDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组织ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 机构名称全称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 机构电子邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 机构证件号码类型
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 机构证件号码
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 机构类型
         * @type {string || null}
         */
        this.OrganizationType = null;

        /**
         * 机构证件文件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdCardFileType = null;

        /**
         * 机构证件照片文件，base64编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizLicenseFile = null;

        /**
         * 机构证件照片文件名
         * @type {string || null}
         */
        this.BizLicenseFileName = null;

        /**
         * 机构法人/经营者姓名
         * @type {string || null}
         */
        this.LegalName = null;

        /**
         * 机构法人/经营者证件类型
         * @type {string || null}
         */
        this.LegalIdCardType = null;

        /**
         * 机构法人/经营者证件号码
         * @type {string || null}
         */
        this.LegalIdCardNumber = null;

        /**
         * 机构法人/经营者/联系人手机号码
         * @type {string || null}
         */
        this.LegalMobile = null;

        /**
         * 组织联系人姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContactName = null;

        /**
         * 机构实名状态
         * @type {string || null}
         */
        this.VerifyStatus = null;

        /**
         * 机构通过实名时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VerifiedOn = null;

        /**
         * 机构创建时间
         * @type {number || null}
         */
        this.CreatedOn = null;

        /**
         * 机构更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdatedOn = null;

        /**
         * 实名认证的客户端IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VerifyClientIp = null;

        /**
         * 实名认证的服务器IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VerifyServerIp = null;

        /**
         * 企业联系地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Address || null}
         */
        this.ContactAddress = null;

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
        this.Email = 'Email' in params ? params.Email : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.OrganizationType = 'OrganizationType' in params ? params.OrganizationType : null;
        this.IdCardFileType = 'IdCardFileType' in params ? params.IdCardFileType : null;
        this.BizLicenseFile = 'BizLicenseFile' in params ? params.BizLicenseFile : null;
        this.BizLicenseFileName = 'BizLicenseFileName' in params ? params.BizLicenseFileName : null;
        this.LegalName = 'LegalName' in params ? params.LegalName : null;
        this.LegalIdCardType = 'LegalIdCardType' in params ? params.LegalIdCardType : null;
        this.LegalIdCardNumber = 'LegalIdCardNumber' in params ? params.LegalIdCardNumber : null;
        this.LegalMobile = 'LegalMobile' in params ? params.LegalMobile : null;
        this.ContactName = 'ContactName' in params ? params.ContactName : null;
        this.VerifyStatus = 'VerifyStatus' in params ? params.VerifyStatus : null;
        this.VerifiedOn = 'VerifiedOn' in params ? params.VerifiedOn : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.VerifyClientIp = 'VerifyClientIp' in params ? params.VerifyClientIp : null;
        this.VerifyServerIp = 'VerifyServerIp' in params ? params.VerifyServerIp : null;

        if (params.ContactAddress) {
            let obj = new Address();
            obj.deserialize(params.ContactAddress)
            this.ContactAddress = obj;
        }

    }
}

/**
 * CheckIdCardVerification请求参数结构体
 * @class
 */
class CheckIdCardVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息; 必选
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 身份证件号码
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 身份证件类型; ID_CARD
         * @type {string || null}
         */
        this.IdCardType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;

    }
}

/**
 * CreateSignUrl返回参数结构体
 * @class
 */
class CreateSignUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同签署链接
         * @type {string || null}
         */
        this.SignUrl = null;

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
        this.SignUrl = 'SignUrl' in params ? params.SignUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySubOrganizationInfo请求参数结构体
 * @class
 */
class ModifySubOrganizationInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息，该接口 SubOrganizationId 字段与 OpenId 字段二者至少需要传入一个，全部传入时则使用 SubOrganizationId 信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 机构在第三方的唯一标识，32位定长字符串，与 Caller 中 SubOrgnizationId 二者至少需要传入一个，全部传入时则使用 SubOrganizationId 信息
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 机构名称全称，修改后机构状态将变为未实名，需要调用实名接口重新实名。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 机构类型可选值：
1. ENTERPRISE - 企业；
2. INDIVIDUALBIZ - 个体工商户；
3. PUBLICINSTITUTION - 政府/事业单位
4. OTHERS - 其他组织
         * @type {string || null}
         */
        this.OrganizationType = null;

        /**
         * 机构证件照片文件，base64编码。支持jpg，jpeg，png格式；如果传值，则重新上传文件后，机构状态将变为未实名，需要调用实名接口重新实名。
         * @type {string || null}
         */
        this.BizLicenseFile = null;

        /**
         * 机构证件照片文件名
         * @type {string || null}
         */
        this.BizLicenseFileName = null;

        /**
         * 机构法人/经营者姓名
         * @type {string || null}
         */
        this.LegalName = null;

        /**
         * 机构法人/经营者证件类型，可选值：ID_CARD - 居民身份证。OrganizationType 为 ENTERPRISE、INDIVIDUALBIZ 时，此项必填，其他情况选填。
         * @type {string || null}
         */
        this.LegalIdCardType = null;

        /**
         * 机构法人/经营者证件号码。OrganizationType 为 ENTERPRISE、INDIVIDUALBIZ 时，此项必填，其他情况选填
         * @type {string || null}
         */
        this.LegalIdCardNumber = null;

        /**
         * 机构法人/经营者/联系人手机号码
         * @type {string || null}
         */
        this.LegalMobile = null;

        /**
         * 组织联系人姓名
         * @type {string || null}
         */
        this.ContactName = null;

        /**
         * 企业联系地址
         * @type {Address || null}
         */
        this.ContactAddress = null;

        /**
         * 机构电子邮箱
         * @type {string || null}
         */
        this.Email = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OrganizationType = 'OrganizationType' in params ? params.OrganizationType : null;
        this.BizLicenseFile = 'BizLicenseFile' in params ? params.BizLicenseFile : null;
        this.BizLicenseFileName = 'BizLicenseFileName' in params ? params.BizLicenseFileName : null;
        this.LegalName = 'LegalName' in params ? params.LegalName : null;
        this.LegalIdCardType = 'LegalIdCardType' in params ? params.LegalIdCardType : null;
        this.LegalIdCardNumber = 'LegalIdCardNumber' in params ? params.LegalIdCardNumber : null;
        this.LegalMobile = 'LegalMobile' in params ? params.LegalMobile : null;
        this.ContactName = 'ContactName' in params ? params.ContactName : null;

        if (params.ContactAddress) {
            let obj = new Address();
            obj.deserialize(params.ContactAddress)
            this.ContactAddress = obj;
        }
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * SendSignInnerVerifyCode返回参数结构体
 * @class
 */
class SendSignInnerVerifyCodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true: 验证码正确，false: 验证码错误
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
 * DescribeFaceIdPhotos请求参数结构体
 * @class
 */
class DescribeFaceIdPhotosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 慧眼业务ID
         * @type {string || null}
         */
        this.WbAppId = null;

        /**
         * 订单号(orderNo); 限制在3个或以内
         * @type {Array.<string> || null}
         */
        this.OrderNumbers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.WbAppId = 'WbAppId' in params ? params.WbAppId : null;
        this.OrderNumbers = 'OrderNumbers' in params ? params.OrderNumbers : null;

    }
}

/**
 * 此结构体 (FileUrl) 用于描述下载文件的URL信息。
 * @class
 */
class FileUrl extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载文件的URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 下载文件的附加信息
         * @type {string || null}
         */
        this.Option = null;

        /**
         * 下载文件所属的资源序号
         * @type {number || null}
         */
        this.Index = null;

        /**
         * 目录业务下，文件对应的流程
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Option = 'Option' in params ? params.Option : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * CreateUser返回参数结构体
 * @class
 */
class CreateUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID，按应用号隔离
         * @type {string || null}
         */
        this.UserId = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckVerifyCodeMatchFlowId返回参数结构体
 * @class
 */
class CheckVerifyCodeMatchFlowIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true: 验证码正确，false: 验证码错误
         * @type {boolean || null}
         */
        this.Success = null;

        /**
         * 0: 验证码正确 1:验证码错误或过期 2:验证码错误 3:验证码和流程不匹配 4:验证码输入错误超过次数 5:内部错误
6:参数错误
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 结果描述
         * @type {string || null}
         */
        this.Description = null;

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
        this.Success = 'Success' in params ? params.Success : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyOrganizationDefaultSeal请求参数结构体
 * @class
 */
class ModifyOrganizationDefaultSealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 重新指定的默认印章ID
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 请求重新指定企业默认印章的客户端IP
         * @type {string || null}
         */
        this.SourceIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;

    }
}

/**
 * CreateFaceIdSign返回参数结构体
 * @class
 */
class CreateFaceIdSignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慧眼API签名
         * @type {string || null}
         */
        this.Sign = null;

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
        this.Sign = 'Sign' in params ? params.Sign : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlowApprovers返回参数结构体
 * @class
 */
class DescribeFlowApproversResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 流程参与者信息
         * @type {Array.<FlowApproverInfo> || null}
         */
        this.Approvers = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Approvers) {
            this.Approvers = new Array();
            for (let z in params.Approvers) {
                let obj = new FlowApproverInfo();
                obj.deserialize(params.Approvers[z]);
                this.Approvers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckMobileAndName请求参数结构体
 * @class
 */
class CheckMobileAndNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息; 必选
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 姓名
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

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Name = 'Name' in params ? params.Name : null;

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
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 印章ID
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 请求删除印章的客户端IP
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 用户唯一标识，默认为空时删除企业印章，如非空则删除个人印章
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CheckBankCardVerification返回参数结构体
 * @class
 */
class CheckBankCardVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测结果
计费结果码：
  0:  认证通过
  1:  认证未通过
  2:  持卡人信息有误
  3:  未开通无卡支付
  4:  此卡被没收
  5:  无效卡号
  6:  此卡无对应发卡行
  7:  该卡未初始化或睡眠卡
  8:  作弊卡、吞卡
  9:  此卡已挂失
  10: 该卡已过期
  11: 受限制的卡
  12: 密码错误次数超限
  13: 发卡行不支持此交易
不收费结果码:
  101: 姓名校验不通过
  102: 银行卡号码有误
  103: 验证中心服务繁忙
  104: 身份证号码有误
  105: 手机号码不合法
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 结果描述; 未通过时必选
         * @type {string || null}
         */
        this.Description = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ArchiveFlow请求参数结构体
 * @class
 */
class ArchiveFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 流程ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * CreateUserAndSeal返回参数结构体
 * @class
 */
class CreateUserAndSealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户唯一标识，按应用号隔离
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 默认印章ID
         * @type {string || null}
         */
        this.SealId = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 此结构体 (FaceIdResult) 用于描述慧眼人脸核身结果。
 * @class
 */
class FaceIdResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核身结果：
0 - 通过；
1 - 未通过
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 核身失败描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 订单号 (orderNo)
         * @type {string || null}
         */
        this.OrderNumber = null;

        /**
         * 姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 身份证件类型： 
ID_CARD - 居民身份证
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 身份证件号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 活体检测得分 (百分制)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LiveRate = null;

        /**
         * 人脸检测得分 (百分制)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Similarity = null;

        /**
         * 刷脸时间 (UNIX时间戳)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OccurredTime = null;

        /**
         * 照片数据 (base64编码, 一般为JPG或PNG)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Photo = null;

        /**
         * 视频数据 (base64编码, 一般为MP4)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Video = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.OrderNumber = 'OrderNumber' in params ? params.OrderNumber : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.LiveRate = 'LiveRate' in params ? params.LiveRate : null;
        this.Similarity = 'Similarity' in params ? params.Similarity : null;
        this.OccurredTime = 'OccurredTime' in params ? params.OccurredTime : null;
        this.Photo = 'Photo' in params ? params.Photo : null;
        this.Video = 'Video' in params ? params.Video : null;

    }
}

/**
 * CreateSignUrl请求参数结构体
 * @class
 */
class CreateSignUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 签署人ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 文件签署截止时间戳
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 目录ID。当 SignUrlType 为 CATALOG 时必填
         * @type {string || null}
         */
        this.CatalogId = null;

        /**
         * 流程ID。当 SignUrlType 为 FLOW 时必填
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 签署链接类型：
1. FLOW - 单流程签署 (默认) 
2. CATALOG - 目录签署
         * @type {string || null}
         */
        this.SignUrlType = null;

        /**
         * 发送流程或目录时生成的签署任务ID
         * @type {string || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.CatalogId = 'CatalogId' in params ? params.CatalogId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.SignUrlType = 'SignUrlType' in params ? params.SignUrlType : null;
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * 此结构体 (ComponentSeal) 用于描述“签署区ID”到“印章ID”的映射。
 * @class
 */
class ComponentSeal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署区ID
         * @type {string || null}
         */
        this.ComponentId = null;

        /**
         * 印章ID
         * @type {string || null}
         */
        this.SealId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentId = 'ComponentId' in params ? params.ComponentId : null;
        this.SealId = 'SealId' in params ? params.SealId : null;

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
 * UploadFiles请求参数结构体
 * @class
 */
class UploadFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 文件对应业务类型，用于区分文件存储路径：
1. TEMPLATE - 模版； 文件类型：.pdf/.html
2. DOCUMENT - 签署过程及签署后的合同文档 文件类型：.pdf/.html
3. FLOW - 签署过程 文件类型：.pdf/.html
4. SEAL - 印章； 文件类型：.jpg/.jpeg/.png
5. BUSINESSLICENSE - 营业执照 文件类型：.jpg/.jpeg/.png
6. IDCARD - 身份证 文件类型：.jpg/.jpeg/.png
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * 上传文件内容数组，最多支持20个文件
         * @type {Array.<UploadFile> || null}
         */
        this.FileInfos = null;

        /**
         * 上传文件链接数组，最多支持20个URL
         * @type {Array.<string> || null}
         */
        this.FileUrls = null;

        /**
         * 是否将pdf灰色矩阵置白
true--是，处理置白
false--否，不处理
         * @type {boolean || null}
         */
        this.CoverRect = null;

        /**
         * 特殊文件类型需要指定文件类型：
HTML-- .html文件
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 用户自定义ID数组，与上传文件一一对应
         * @type {Array.<string> || null}
         */
        this.CustomIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new UploadFile();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }
        this.FileUrls = 'FileUrls' in params ? params.FileUrls : null;
        this.CoverRect = 'CoverRect' in params ? params.CoverRect : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.CustomIds = 'CustomIds' in params ? params.CustomIds : null;

    }
}

/**
 * DescribeUsers请求参数结构体
 * @class
 */
class DescribeUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * UserId列表，最多支持100个UserId
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * CreateFlowByFiles请求参数结构体
 * @class
 */
class CreateFlowByFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 流程创建信息
         * @type {FlowInfo || null}
         */
        this.FlowInfo = null;

        /**
         * 文件资源列表 (支持多文件)
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 自定义流程id
         * @type {string || null}
         */
        this.CustomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }

        if (params.FlowInfo) {
            let obj = new FlowInfo();
            obj.deserialize(params.FlowInfo)
            this.FlowInfo = obj;
        }
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.CustomId = 'CustomId' in params ? params.CustomId : null;

    }
}

/**
 * 目录流程签署区
 * @class
 */
class CatalogComponents extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 签署区列表
         * @type {Array.<Component> || null}
         */
        this.SignComponents = null;

        /**
         * 签署任务ID
         * @type {string || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.SignComponents) {
            this.SignComponents = new Array();
            for (let z in params.SignComponents) {
                let obj = new Component();
                obj.deserialize(params.SignComponents[z]);
                this.SignComponents.push(obj);
            }
        }
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * ArchiveFlow返回参数结构体
 * @class
 */
class ArchiveFlowResponse extends  AbstractModel {
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
 * 此结构体 (FlowInfo) 用于描述流程信息。
 * @class
 */
class FlowInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同名字
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 签署截止时间戳，超过有效签署时间则该签署流程失败
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 合同描述
         * @type {string || null}
         */
        this.FlowDescription = null;

        /**
         * 合同类型：
1. “劳务”
2. “销售”
3. “租赁”
4. “其他”
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 回调地址
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 用户自定义数据
         * @type {string || null}
         */
        this.UserData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.FlowDescription = 'FlowDescription' in params ? params.FlowDescription : null;
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.UserData = 'UserData' in params ? params.UserData : null;

    }
}

/**
 * 此结构体 (UserDescribe) 用于描述个人帐号查询结果。
 * @class
 */
class UserDescribe extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 手机号，隐藏中间4位数字，用*代替
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 注册时间点 (UNIX时间戳)
         * @type {number || null}
         */
        this.CreatedOn = null;

        /**
         * 实名认证状态：
0 - 未实名；
1 - 通过实名
         * @type {number || null}
         */
        this.VerifyStatus = null;

        /**
         * 真实姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 实名认证通过时间 (UNIX时间戳)
         * @type {number || null}
         */
        this.VerifiedOn = null;

        /**
         * 身份证件类型; 
ID_CARD - 居民身份证；
PASSPORT - 护照；
MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证；
MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证；
HOUSEHOLD_REGISTER - 户口本；
TEMP_ID_CARD - 临时居民身份证
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 身份证件号码 (脱敏)
         * @type {string || null}
         */
        this.IdCardNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.VerifyStatus = 'VerifyStatus' in params ? params.VerifyStatus : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.VerifiedOn = 'VerifiedOn' in params ? params.VerifiedOn : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;

    }
}

/**
 * CheckBankCard2EVerification返回参数结构体
 * @class
 */
class CheckBankCard2EVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测结果
计费结果码：
  0:  认证通过
  1:  认证未通过
  2:  持卡人信息有误
  3:  未开通无卡支付
  4:  此卡被没收
  5:  无效卡号
  6:  此卡无对应发卡行
  7:  该卡未初始化或睡眠卡
  8:  作弊卡、吞卡
  9:  此卡已挂失
  10: 该卡已过期
  11: 受限制的卡
  12: 密码错误次数超限
  13: 发卡行不支持此交易
不收费结果码:
  101: 姓名校验不通过
  102: 银行卡号码有误
  103: 验证中心服务繁忙
  104: 身份证号码有误
  105: 手机号码不合法
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 结果描述; 未通过时必选
         * @type {string || null}
         */
        this.Description = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifySubOrganization返回参数结构体
 * @class
 */
class VerifySubOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子机构ID
         * @type {string || null}
         */
        this.SubOrganizationId = null;

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
        this.SubOrganizationId = 'SubOrganizationId' in params ? params.SubOrganizationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSeals返回参数结构体
 * @class
 */
class DescribeSealsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 印章信息
         * @type {Array.<Seal> || null}
         */
        this.Seals = null;

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

        if (params.Seals) {
            this.Seals = new Array();
            for (let z in params.Seals) {
                let obj = new Seal();
                obj.deserialize(params.Seals[z]);
                this.Seals.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFileUrls返回参数结构体
 * @class
 */
class DescribeFileUrlsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件下载URL数组
         * @type {Array.<FileUrl> || null}
         */
        this.FileUrls = null;

        /**
         * URL数量
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

        if (params.FileUrls) {
            this.FileUrls = new Array();
            for (let z in params.FileUrls) {
                let obj = new FileUrl();
                obj.deserialize(params.FileUrls[z]);
                this.FileUrls.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySeal请求参数结构体
 * @class
 */
class ModifySealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 请求更新印章的客户端IP
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 电子印章ID。若为空，则修改个人/机构的默认印章。
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 电子印章名称
         * @type {string || null}
         */
        this.SealName = null;

        /**
         * 印章图片，base64编码（与FileId参数二选一，同时传入参数时优先使用Image参数）
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 印章图片文件ID（与Image参数二选一，同时传入参数时优先使用Image参数）
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 需要更新印章的用户ID
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.SealName = 'SealName' in params ? params.SealName : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CheckBankCard3EVerification请求参数结构体
 * @class
 */
class CheckBankCard3EVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息; 必选
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 银行卡号
         * @type {string || null}
         */
        this.BankCard = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 身份证件号码
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 身份证件类型; ID_CARD
         * @type {string || null}
         */
        this.IdCardType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.BankCard = 'BankCard' in params ? params.BankCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;

    }
}

/**
 * CheckBankCardVerification请求参数结构体
 * @class
 */
class CheckBankCardVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息; 必选
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 银行卡号
         * @type {string || null}
         */
        this.BankCard = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 身份证件号码
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 身份证件类型; ID_CARD
         * @type {string || null}
         */
        this.IdCardType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.BankCard = 'BankCard' in params ? params.BankCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;

    }
}

/**
 * RejectFlow请求参数结构体
 * @class
 */
class RejectFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 意愿确认票据。
1. VerifyChannel 为 WEIXINAPP，使用响应的VerifyResult；
2. VerifyChannel 为 FACEID时，使用OrderNo；
3. VerifyChannel 为 VERIFYCODE，使用短信验证码
4. VerifyChannel 为 NONE，传空值
（注：普通情况下，VerifyResult不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系）
         * @type {string || null}
         */
        this.VerifyResult = null;

        /**
         * 意愿确认渠道：
1. WEIXINAPP - 微信小程序
2. FACEID - 慧眼 (默认) 
3. VERIFYCODE - 验证码
4. THIRD - 第三方 (暂不支持)
5. NONE - 无需电子签系统验证
（注：普通情况下，VerifyChannel不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系）
         * @type {string || null}
         */
        this.VerifyChannel = null;

        /**
         * 客户端来源IP
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 拒签原因
         * @type {string || null}
         */
        this.RejectMessage = null;

        /**
         * 签署参与者编号
         * @type {string || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.VerifyResult = 'VerifyResult' in params ? params.VerifyResult : null;
        this.VerifyChannel = 'VerifyChannel' in params ? params.VerifyChannel : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.RejectMessage = 'RejectMessage' in params ? params.RejectMessage : null;
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * DescribeSubOrganizations请求参数结构体
 * @class
 */
class DescribeSubOrganizationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 子机构ID数组
         * @type {Array.<string> || null}
         */
        this.SubOrganizationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.SubOrganizationIds = 'SubOrganizationIds' in params ? params.SubOrganizationIds : null;

    }
}

/**
 * 此结构体 (SignSeal) 用于描述签名/印章信息。
 * @class
 */
class SignSeal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署控件ID
         * @type {string || null}
         */
        this.ComponentId = null;

        /**
         * 签署印章类型:
SIGN_SIGNATURE - 签名
SIGN_SEAL - 印章
SIGN_DATE - 日期
SIGN_IMAGE - 图片
         * @type {string || null}
         */
        this.SignType = null;

        /**
         * 合同文件ID
         * @type {number || null}
         */
        this.FileIndex = null;

        /**
         * 印章ID，仅当 SignType 为 SIGN_SEAL 时必填
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 签名内容，仅当 SignType 为SIGN_SIGNATURE或SIGN_IMAGE 时必填，base64编码
         * @type {string || null}
         */
        this.SealContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentId = 'ComponentId' in params ? params.ComponentId : null;
        this.SignType = 'SignType' in params ? params.SignType : null;
        this.FileIndex = 'FileIndex' in params ? params.FileIndex : null;
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.SealContent = 'SealContent' in params ? params.SealContent : null;

    }
}

/**
 * DescribeCatalogSignComponents请求参数结构体
 * @class
 */
class DescribeCatalogSignComponentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 目录ID
         * @type {string || null}
         */
        this.CatalogId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.CatalogId = 'CatalogId' in params ? params.CatalogId : null;

    }
}

/**
 * ModifyOrganizationDefaultSeal返回参数结构体
 * @class
 */
class ModifyOrganizationDefaultSealResponse extends  AbstractModel {
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
 * CreateFlowByFiles返回参数结构体
 * @class
 */
class CreateFlowByFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
         * @type {string || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyUserDefaultSeal返回参数结构体
 * @class
 */
class ModifyUserDefaultSealResponse extends  AbstractModel {
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
 * UploadFiles返回参数结构体
 * @class
 */
class UploadFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件id数组
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 上传成功文件数量
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
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckBankCard3EVerification返回参数结构体
 * @class
 */
class CheckBankCard3EVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测结果
计费结果码：
  0:  认证通过
  1:  认证未通过
  2:  持卡人信息有误
  3:  未开通无卡支付
  4:  此卡被没收
  5:  无效卡号
  6:  此卡无对应发卡行
  7:  该卡未初始化或睡眠卡
  8:  作弊卡、吞卡
  9:  此卡已挂失
  10: 该卡已过期
  11: 受限制的卡
  12: 密码错误次数超限
  13: 发卡行不支持此交易
不收费结果码:
  101: 姓名校验不通过
  102: 银行卡号码有误
  103: 验证中心服务繁忙
  104: 身份证号码有误
  105: 手机号码不合法
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 结果描述; 未通过时必选
         * @type {string || null}
         */
        this.Description = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SignFlow请求参数结构体
 * @class
 */
class SignFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 意愿确认票据。
1. VerifyChannel 为 WEIXINAPP，使用响应的VerifyResult；
2. VerifyChannel 为 FACEID时，使用OrderNo；
3. VerifyChannel 为 VERIFYCODE，使用短信验证码
4. VerifyChannel 为 NONE，传空值
（注：普通情况下，VerifyResult不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系）
         * @type {string || null}
         */
        this.VerifyResult = null;

        /**
         * 意愿确认渠道：
1. WEIXINAPP - 微信小程序
2. FACEID - 慧眼 (默认) 
3. VERIFYCODE - 验证码
4. THIRD - 第三方 (暂不支持)
5. NONE - 无需电子签系统验证
（注：普通情况下，VerifyChannel不能为None，如您不希望腾讯电子签对用户签署意愿做校验，请提前与客户经理或邮件至e-contract@tencent.com与我们联系）
         * @type {string || null}
         */
        this.VerifyChannel = null;

        /**
         * 客户端来源IP
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 签署内容
         * @type {Array.<SignSeal> || null}
         */
        this.SignSeals = null;

        /**
         * 签署备注
         * @type {string || null}
         */
        this.ApproveMessage = null;

        /**
         * 签署参与者编号
         * @type {string || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.VerifyResult = 'VerifyResult' in params ? params.VerifyResult : null;
        this.VerifyChannel = 'VerifyChannel' in params ? params.VerifyChannel : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;

        if (params.SignSeals) {
            this.SignSeals = new Array();
            for (let z in params.SignSeals) {
                let obj = new SignSeal();
                obj.deserialize(params.SignSeals[z]);
                this.SignSeals.push(obj);
            }
        }
        this.ApproveMessage = 'ApproveMessage' in params ? params.ApproveMessage : null;
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * 自定义流程id映射关系
 * @class
 */
class CustomFlowIdMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义id
         * @type {string || null}
         */
        this.CustomId = null;

        /**
         * 流程id
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomId = 'CustomId' in params ? params.CustomId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * DescribeCustomFlowIdsByFlowId请求参数结构体
 * @class
 */
class DescribeCustomFlowIdsByFlowIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 流程 id 列表，最多同时查询 10 个流程 id
         * @type {Array.<string> || null}
         */
        this.FlowIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;

    }
}

/**
 * 此结构体 (UploadFile) 用于描述多文件上传的文件信息。
 * @class
 */
class UploadFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base64编码后的文件内容
         * @type {string || null}
         */
        this.FileBody = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileBody = 'FileBody' in params ? params.FileBody : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * DescribeUsers返回参数结构体
 * @class
 */
class DescribeUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息查询结果
         * @type {Array.<UserDescribe> || null}
         */
        this.Users = null;

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

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new UserDescribe();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateH5FaceIdUrl请求参数结构体
 * @class
 */
class CreateH5FaceIdUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息; 必选
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 慧眼业务ID; 不填写时后台使用Caller反查
         * @type {string || null}
         */
        this.WbAppId = null;

        /**
         * 姓名; 可选(未通过实名认证的用户必选)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户证件类型; 可选; 默认ID_CARD:中国居民身份证
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 用户证件号; 可选(未通过实名认证的用户必选)
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * H5人脸核身完成后回调的第三方Url; 可选; 不需要做Encode, 跳转的参数: ?code=XX&orderNo=XX&liveRate=xx, code=0表示成功,orderNo为订单号,liveRate为百分制活体检测得分
         * @type {string || null}
         */
        this.JumpUrl = null;

        /**
         * 参数值为"1":直接跳转到url回调地址; 可选; 其他值:跳转提供的结果页面
         * @type {string || null}
         */
        this.JumpType = null;

        /**
         * browser:表示在浏览器启动刷脸, app:表示在App里启动刷脸,默认值为browser; 可选
         * @type {string || null}
         */
        this.OpenFrom = null;

        /**
         * 跳转类型; 可选; 参数值为"1"时,刷脸页面使用replace方式跳转,不在浏览器history中留下记录;不传或其他值则正常跳转
         * @type {string || null}
         */
        this.RedirectType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.WbAppId = 'WbAppId' in params ? params.WbAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;
        this.JumpType = 'JumpType' in params ? params.JumpType : null;
        this.OpenFrom = 'OpenFrom' in params ? params.OpenFrom : null;
        this.RedirectType = 'RedirectType' in params ? params.RedirectType : null;

    }
}

/**
 * CheckMobileVerification返回参数结构体
 * @class
 */
class CheckMobileVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测结果
计费结果码：
  0:  验证结果一致
  1:  手机号未实名
  2:  姓名和手机号不一致
  3:  信息不一致(手机号已实名,但姓名和身份证号与实名信息不一致)
不收费结果码:
  101: 查无记录
  102: 非法姓名(长度,格式等不正确)
  103: 非法手机号(长度,格式等不正确)
  104: 非法身份证号(长度,校验位等不正确)
  105: 认证未通过
  106: 验证平台异常
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 结果描述; 未通过时必选
         * @type {string || null}
         */
        this.Description = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlowFiles返回参数结构体
 * @class
 */
class DescribeFlowFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程编号
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 流程文件列表
         * @type {Array.<FlowFileInfo> || null}
         */
        this.FlowFileInfos = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.FlowFileInfos) {
            this.FlowFileInfos = new Array();
            for (let z in params.FlowFileInfos) {
                let obj = new FlowFileInfo();
                obj.deserialize(params.FlowFileInfos[z]);
                this.FlowFileInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUser请求参数结构体
 * @class
 */
class CreateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 第三方平台唯一标识；要求应用内OpenId唯一; len<=32
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 用户姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户证件类型：
1. ID_CARD - 居民身份证
2. PASSPORT - 护照
3. MAINLAND_TRAVEL_PERMIT_FOR_HONGKONG_AND_MACAO_RESIDENTS - 港澳居民来往内地通行证
4. MAINLAND_TRAVEL_PERMIT_FOR_TAIWAN_RESIDENTS - 台湾居民来往大陆通行证
5. HOUSEHOLD_REGISTER - 户口本
6. TEMP_ID_CARD - 临时居民身份证
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 用户证件号
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 是否以OpenId作为UserId (为true时将直接以OpenId生成腾讯电子签平台的UserId)
         * @type {boolean || null}
         */
        this.UseOpenId = null;

        /**
         * 用户邮箱，不要求唯一
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户手机号码，不要求唯一
         * @type {string || null}
         */
        this.Mobile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.UseOpenId = 'UseOpenId' in params ? params.UseOpenId : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;

    }
}

/**
 * CreatePreviewSignUrl请求参数结构体
 * @class
 */
class CreatePreviewSignUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * URL过期时间戳
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 目录ID。当 SignUrlType 为 CATALOG 时必填
         * @type {string || null}
         */
        this.CatalogId = null;

        /**
         * 流程ID。当 SignUrlType 为 FLOW 时必填
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 签署链接类型：
1. FLOW - 单流程签署 (默认) 
2. CATALOG - 目录签署
         * @type {string || null}
         */
        this.SignUrlType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.CatalogId = 'CatalogId' in params ? params.CatalogId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.SignUrlType = 'SignUrlType' in params ? params.SignUrlType : null;

    }
}

/**
 * CreateUserAndSeal请求参数结构体
 * @class
 */
class CreateUserAndSealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 第三方平台唯一标识，要求应用内OpenId唯一
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 用户姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户证件类型：
1. ID_CARD - 居民身份证
5. HOUSEHOLD_REGISTER - 户口本
6. TEMP_ID_CARD - 临时居民身份证
         * @type {string || null}
         */
        this.IdCardType = null;

        /**
         * 用户证件号
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 请求生成个人印章的客户端IP
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 用户手机号码，不要求唯一
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 用户邮箱，不要求唯一
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 默认印章名称
         * @type {string || null}
         */
        this.SealName = null;

        /**
         * 是否以OpenId作为UserId (为true时将直接以OpenId生成腾讯电子签平台的UserId)
         * @type {boolean || null}
         */
        this.UseOpenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.SealName = 'SealName' in params ? params.SealName : null;
        this.UseOpenId = 'UseOpenId' in params ? params.UseOpenId : null;

    }
}

/**
 * CreatePreviewSignUrl返回参数结构体
 * @class
 */
class CreatePreviewSignUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同预览URL
         * @type {string || null}
         */
        this.PreviewSignUrl = null;

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
        this.PreviewSignUrl = 'PreviewSignUrl' in params ? params.PreviewSignUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFaceIdSign请求参数结构体
 * @class
 */
class CreateFaceIdSignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息; 必选
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 除api_ticket之外的其它要参与签名的参数值,包括UserId
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeCustomFlowIdsByFlowId返回参数结构体
 * @class
 */
class DescribeCustomFlowIdsByFlowIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义流程 id 映射列表
         * @type {Array.<CustomFlowIdMap> || null}
         */
        this.CustomIdList = null;

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

        if (params.CustomIdList) {
            this.CustomIdList = new Array();
            for (let z in params.CustomIdList) {
                let obj = new CustomFlowIdMap();
                obj.deserialize(params.CustomIdList[z]);
                this.CustomIdList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SignFlow返回参数结构体
 * @class
 */
class SignFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署任务状态。签署成功 - SUCCESS、提交审核 - REVIEW
         * @type {string || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RejectFlow返回参数结构体
 * @class
 */
class RejectFlowResponse extends  AbstractModel {
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
 * DescribeFlow请求参数结构体
 * @class
 */
class DescribeFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 需要查询的流程ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * DescribeFileIdsByCustomIds请求参数结构体
 * @class
 */
class DescribeFileIdsByCustomIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息, OrganizationId必填
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 用户自定义ID
         * @type {Array.<string> || null}
         */
        this.CustomIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.CustomIds = 'CustomIds' in params ? params.CustomIds : null;

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
         * 电子印章Id
         * @type {string || null}
         */
        this.SealId = null;

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
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenerateOrganizationSeal返回参数结构体
 * @class
 */
class GenerateOrganizationSealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电子印章Id
         * @type {string || null}
         */
        this.SealId = null;

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
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubOrganizations返回参数结构体
 * @class
 */
class DescribeSubOrganizationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子机构信息列表
         * @type {Array.<SubOrganizationDetail> || null}
         */
        this.SubOrganizationInfos = null;

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

        if (params.SubOrganizationInfos) {
            this.SubOrganizationInfos = new Array();
            for (let z in params.SubOrganizationInfos) {
                let obj = new SubOrganizationDetail();
                obj.deserialize(params.SubOrganizationInfos[z]);
                this.SubOrganizationInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyFlowFile请求参数结构体
 * @class
 */
class DestroyFlowFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 流程ID
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * CheckFaceIdentify返回参数结构体
 * @class
 */
class CheckFaceIdentifyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核身结果; 0:通过,1:不通过
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 核身结果描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 渠道名
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 认证通过时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VerifiedOn = null;

        /**
         * 核身流水号
         * @type {string || null}
         */
        this.SerialNumber = null;

        /**
         * 渠道核身服务器IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VerifyServerIp = null;

        /**
         * 核身照片文件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PhotoFileName = null;

        /**
         * 核身照片内容base64(文件格式见文件名后缀,一般为jpg)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PhotoFileData = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.VerifiedOn = 'VerifiedOn' in params ? params.VerifiedOn : null;
        this.SerialNumber = 'SerialNumber' in params ? params.SerialNumber : null;
        this.VerifyServerIp = 'VerifyServerIp' in params ? params.VerifyServerIp : null;
        this.PhotoFileName = 'PhotoFileName' in params ? params.PhotoFileName : null;
        this.PhotoFileData = 'PhotoFileData' in params ? params.PhotoFileData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 此结构体 (Seal) 用于描述电子印章的信息。
 * @class
 */
class Seal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电子印章ID
         * @type {string || null}
         */
        this.SealId = null;

        /**
         * 电子印章名称
         * @type {string || null}
         */
        this.SealName = null;

        /**
         * 电子印章类型
         * @type {string || null}
         */
        this.SealType = null;

        /**
         * 电子印章来源：
CREATE - 通过图片上传
GENERATE - 通过文字生成
         * @type {string || null}
         */
        this.SealSource = null;

        /**
         * 电子印章创建者
         * @type {Caller || null}
         */
        this.Creator = null;

        /**
         * 电子印章创建时间戳
         * @type {number || null}
         */
        this.CreatedOn = null;

        /**
         * 电子印章所有人
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 电子印章URL
         * @type {FileUrl || null}
         */
        this.FileUrl = null;

        /**
         * 是否为默认印章，false-非默认，true-默认
         * @type {boolean || null}
         */
        this.DefaultSeal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.SealName = 'SealName' in params ? params.SealName : null;
        this.SealType = 'SealType' in params ? params.SealType : null;
        this.SealSource = 'SealSource' in params ? params.SealSource : null;

        if (params.Creator) {
            let obj = new Caller();
            obj.deserialize(params.Creator)
            this.Creator = obj;
        }
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.FileUrl) {
            let obj = new FileUrl();
            obj.deserialize(params.FileUrl)
            this.FileUrl = obj;
        }
        this.DefaultSeal = 'DefaultSeal' in params ? params.DefaultSeal : null;

    }
}

/**
 * SendFlowUrl请求参数结构体
 * @class
 */
class SendFlowUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 需要推送合同的流程ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 签署人ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 签署控件信息 (支持添加多个控件)
         * @type {Array.<Component> || null}
         */
        this.SignComponents = null;

        /**
         * 签署人手机号 (如果选择短信验证码签署，则此字段必填)
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 签署人对应的子机构ID，个人签署者此字段不填
         * @type {string || null}
         */
        this.SubOrganizationId = null;

        /**
         * 签名后校验方式：
1. WEIXINAPP - 微信小程序；
2. FACEID - 慧眼 (默认) ；
3. VERIFYCODE - 验证码；
4. NONE - 无。此选项为白名单参数，暂不支持公开调用。如需开通权限，请通过客户经理或邮件至e-contract@tencent.com与我们联系；
5. THIRD - 第三方 (暂不支持)
6. OFFLINE - 线下人工审核
         * @type {Array.<string> || null}
         */
        this.VerifyChannel = null;

        /**
         * 签署链接失效截止时间，默认为7天
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 是否为最后一个签署人。若为最后一人，本次签署完成以后自动归档
         * @type {boolean || null}
         */
        this.IsLastApprover = null;

        /**
         * 签署完成后，前端跳转的url
         * @type {string || null}
         */
        this.JumpUrl = null;

        /**
         * 短信模板
默认使用腾讯电子签官方短信模板，如有自定义需求，请通过客户经理或邮件至e-contract@tencent.com与我们联系。
         * @type {SmsTemplate || null}
         */
        this.SmsTemplate = null;

        /**
         * 签署前置条件：是否要全文阅读，默认否
         * @type {boolean || null}
         */
        this.IsFullText = null;

        /**
         * 签署前置条件：强制用户阅读待签署文件时长，默认不限制
         * @type {number || null}
         */
        this.PreReadTime = null;

        /**
         * 当前参与者是否支持线下核身,默认为不支持
         * @type {boolean || null}
         */
        this.CanOffLine = null;

        /**
         * 签署任务的回调地址
         * @type {string || null}
         */
        this.CallbackUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.SignComponents) {
            this.SignComponents = new Array();
            for (let z in params.SignComponents) {
                let obj = new Component();
                obj.deserialize(params.SignComponents[z]);
                this.SignComponents.push(obj);
            }
        }
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.SubOrganizationId = 'SubOrganizationId' in params ? params.SubOrganizationId : null;
        this.VerifyChannel = 'VerifyChannel' in params ? params.VerifyChannel : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.IsLastApprover = 'IsLastApprover' in params ? params.IsLastApprover : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;

        if (params.SmsTemplate) {
            let obj = new SmsTemplate();
            obj.deserialize(params.SmsTemplate)
            this.SmsTemplate = obj;
        }
        this.IsFullText = 'IsFullText' in params ? params.IsFullText : null;
        this.PreReadTime = 'PreReadTime' in params ? params.PreReadTime : null;
        this.CanOffLine = 'CanOffLine' in params ? params.CanOffLine : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

    }
}

/**
 * CancelFlow请求参数结构体
 * @class
 */
class CancelFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 流程ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 撤销原因
         * @type {string || null}
         */
        this.CancelMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.CancelMessage = 'CancelMessage' in params ? params.CancelMessage : null;

    }
}

/**
 * CreateH5FaceIdUrl返回参数结构体
 * @class
 */
class CreateH5FaceIdUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跳转到人脸核身页面的链接
         * @type {string || null}
         */
        this.Url = null;

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
        this.Url = 'Url' in params ? params.Url : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomFlowIds请求参数结构体
 * @class
 */
class DescribeCustomFlowIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 自定义 id 列表，最多同时查询 10 个自定义 id
         * @type {Array.<string> || null}
         */
        this.CustomIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.CustomIds = 'CustomIds' in params ? params.CustomIds : null;

    }
}

/**
 * DescribeFlowApprovers请求参数结构体
 * @class
 */
class DescribeFlowApproversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 需要查询的流程ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 需要查询的用户ID，为空则默认查询所有用户信息
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 需要查询的签署ID，为空则不按签署ID过滤
         * @type {string || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * DescribeFaceIdResults返回参数结构体
 * @class
 */
class DescribeFaceIdResultsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核身结果列表
         * @type {Array.<FaceIdResult> || null}
         */
        this.Results = null;

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

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new FaceIdResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckBankCard4EVerification请求参数结构体
 * @class
 */
class CheckBankCard4EVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息; 必选
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 银行卡号
         * @type {string || null}
         */
        this.BankCard = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 身份证件号码
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 身份证件类型; ID_CARD
         * @type {string || null}
         */
        this.IdCardType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.BankCard = 'BankCard' in params ? params.BankCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.IdCardType = 'IdCardType' in params ? params.IdCardType : null;

    }
}

/**
 * GenerateUserSeal返回参数结构体
 * @class
 */
class GenerateUserSealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电子印章Id
         * @type {string || null}
         */
        this.SealId = null;

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
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCatalogSignComponents返回参数结构体
 * @class
 */
class DescribeCatalogSignComponentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签署区列表
         * @type {Array.<CatalogComponents> || null}
         */
        this.SignComponents = null;

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

        if (params.SignComponents) {
            this.SignComponents = new Array();
            for (let z in params.SignComponents) {
                let obj = new CatalogComponents();
                obj.deserialize(params.SignComponents[z]);
                this.SignComponents.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenerateOrganizationSeal请求参数结构体
 * @class
 */
class GenerateOrganizationSealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 印章类型：
OFFICIAL-公章
SPECIAL_FINANCIAL-财务专用章
CONTRACT-合同专用章
LEGAL_REPRESENTATIVE-法定代表人章
SPECIAL_NATIONWIDE_INVOICE-发票专用章
OTHER-其他
         * @type {string || null}
         */
        this.SealType = null;

        /**
         * 请求生成企业印章的客户端Ip
         * @type {string || null}
         */
        this.SourceIp = null;

        /**
         * 电子印章名称
         * @type {string || null}
         */
        this.SealName = null;

        /**
         * 企业印章横向文字，最多可填8个汉字（可不填，默认为"电子签名专用章"）
         * @type {string || null}
         */
        this.SealHorizontalText = null;

        /**
         * 是否是默认印章 true：是，false：否
         * @type {boolean || null}
         */
        this.IsDefault = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.SealType = 'SealType' in params ? params.SealType : null;
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;
        this.SealName = 'SealName' in params ? params.SealName : null;
        this.SealHorizontalText = 'SealHorizontalText' in params ? params.SealHorizontalText : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

    }
}

/**
 * CreateServerFlowSign请求参数结构体
 * @class
 */
class CreateServerFlowSignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 流程ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 签署区域信息
         * @type {Array.<Component> || null}
         */
        this.SignComponents = null;

        /**
         * 客户端IP
         * @type {string || null}
         */
        this.SourceIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.SignComponents) {
            this.SignComponents = new Array();
            for (let z in params.SignComponents) {
                let obj = new Component();
                obj.deserialize(params.SignComponents[z]);
                this.SignComponents.push(obj);
            }
        }
        this.SourceIp = 'SourceIp' in params ? params.SourceIp : null;

    }
}

/**
 * 此结构体 (Caller) 用于描述调用方属性。
 * @class
 */
class Caller extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用号
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 下属机构ID
         * @type {string || null}
         */
        this.SubOrganizationId = null;

        /**
         * 经办人的用户ID
         * @type {string || null}
         */
        this.OperatorId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.SubOrganizationId = 'SubOrganizationId' in params ? params.SubOrganizationId : null;
        this.OperatorId = 'OperatorId' in params ? params.OperatorId : null;

    }
}

/**
 * VerifyUser返回参数结构体
 * @class
 */
class VerifyUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电子签平台用户ID
         * @type {string || null}
         */
        this.UserId = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendFlow请求参数结构体
 * @class
 */
class SendFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 需要推送合同的流程ID
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 签署人用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 签署控件信息 (支持添加多个控件)
         * @type {Array.<Component> || null}
         */
        this.SignComponents = null;

        /**
         * 签署人手机号 (如果选择短信验证码签署，则此字段必填)
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 签署人对应的子机构ID，个人签署者此字段不填
         * @type {string || null}
         */
        this.SubOrganizationId = null;

        /**
         * 签名后校验方式：
1. WEIXINAPP - 微信小程序；
2. FACEID - 慧眼 (默认) ；
3. VERIFYCODE - 验证码；
4. NONE - 无。此选项为白名单参数，暂不支持公开调用。如需开通权限，请通过客户经理或邮件至e-contract@tencent.com与我们联系；
5. THIRD - 第三方 (暂不支持)
         * @type {Array.<string> || null}
         */
        this.VerifyChannel = null;

        /**
         * 签署链接失效截止时间，默认为7天
         * @type {number || null}
         */
        this.Deadline = null;

        /**
         * 是否为最后一个签署人。若为最后一人，本次签署完成以后自动归档。
         * @type {boolean || null}
         */
        this.IsLastApprover = null;

        /**
         * 签署完成后，前端跳转的URL
         * @type {string || null}
         */
        this.JumpUrl = null;

        /**
         * 短信模板。默认使用腾讯电子签官方短信模板，如有自定义需求，请通过客户经理或邮件至e-contract@tencent.com与我们联系。
         * @type {SmsTemplate || null}
         */
        this.SmsTemplate = null;

        /**
         * 签署前置条件：是否要全文阅读，默认否
         * @type {boolean || null}
         */
        this.IsFullText = null;

        /**
         * 签署前置条件：强制用户阅读待签署文件时长，默认不限制
         * @type {number || null}
         */
        this.PreReadTime = null;

        /**
         * 当前参与者是否支持线下核身,默认为不支持
         * @type {boolean || null}
         */
        this.CanOffLine = null;

        /**
         * 签署任务的回调地址
         * @type {string || null}
         */
        this.CallbackUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.SignComponents) {
            this.SignComponents = new Array();
            for (let z in params.SignComponents) {
                let obj = new Component();
                obj.deserialize(params.SignComponents[z]);
                this.SignComponents.push(obj);
            }
        }
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.SubOrganizationId = 'SubOrganizationId' in params ? params.SubOrganizationId : null;
        this.VerifyChannel = 'VerifyChannel' in params ? params.VerifyChannel : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.IsLastApprover = 'IsLastApprover' in params ? params.IsLastApprover : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;

        if (params.SmsTemplate) {
            let obj = new SmsTemplate();
            obj.deserialize(params.SmsTemplate)
            this.SmsTemplate = obj;
        }
        this.IsFullText = 'IsFullText' in params ? params.IsFullText : null;
        this.PreReadTime = 'PreReadTime' in params ? params.PreReadTime : null;
        this.CanOffLine = 'CanOffLine' in params ? params.CanOffLine : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

    }
}

/**
 * SendSignInnerVerifyCode请求参数结构体
 * @class
 */
class SendSignInnerVerifyCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 验证码类型，取值(SIGN)
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * 用户 id
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 模板 id
         * @type {string || null}
         */
        this.VerifyTemplateId = null;

        /**
         * 签名
         * @type {string || null}
         */
        this.VerifySign = null;

        /**
         * 流程(目录) id
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 三要素检测结果
         * @type {number || null}
         */
        this.CheckThreeElementResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.VerifyTemplateId = 'VerifyTemplateId' in params ? params.VerifyTemplateId : null;
        this.VerifySign = 'VerifySign' in params ? params.VerifySign : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.CheckThreeElementResult = 'CheckThreeElementResult' in params ? params.CheckThreeElementResult : null;

    }
}

/**
 * DestroyFlowFile返回参数结构体
 * @class
 */
class DestroyFlowFileResponse extends  AbstractModel {
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
 * CreateSubOrganization返回参数结构体
 * @class
 */
class CreateSubOrganizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子机构ID
         * @type {string || null}
         */
        this.SubOrganizationId = null;

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
        this.SubOrganizationId = 'SubOrganizationId' in params ? params.SubOrganizationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSubOrganizationAndSeal返回参数结构体
 * @class
 */
class CreateSubOrganizationAndSealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子机构在电子文件签署平台唯一标识
         * @type {string || null}
         */
        this.SubOrganizationId = null;

        /**
         * 电子印章ID
         * @type {string || null}
         */
        this.SealId = null;

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
        this.SubOrganizationId = 'SubOrganizationId' in params ? params.SubOrganizationId : null;
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyUser请求参数结构体
 * @class
 */
class ModifyUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用方信息
         * @type {Caller || null}
         */
        this.Caller = null;

        /**
         * 第三方平台用户唯一标识; OpenId 和 UserId 二选一填写, 两个都不为空则优先使用UserId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 腾讯电子签平台用户唯一标识; OpenId 和 UserId 二选一填写, 两个都不为空则优先使用UserId
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户手机号码，不要求唯一
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 用户邮箱，不要求唯一
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户姓名
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

        if (params.Caller) {
            let obj = new Caller();
            obj.deserialize(params.Caller)
            this.Caller = obj;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * CheckMobileAndName返回参数结构体
 * @class
 */
class CheckMobileAndNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测结果
计费结果码：
  0:  验证结果一致
  1:  手机号未实名
  2:  姓名和手机号不一致
  3:  信息不一致(手机号已实名,但姓名和身份证号与实名信息不一致)
不收费结果码:
  101: 查无记录
  102: 非法姓名(长度,格式等不正确)
  103: 非法手机号(长度,格式等不正确)
  104: 非法身份证号(长度,校验位等不正确)
  105: 认证未通过
  106: 验证平台异常
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 结果描述; 未通过时必选
         * @type {string || null}
         */
        this.Description = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySeal返回参数结构体
 * @class
 */
class ModifySealResponse extends  AbstractModel {
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

module.exports = {
    DescribeFaceIdResultsRequest: DescribeFaceIdResultsRequest,
    CreateSubOrganizationRequest: CreateSubOrganizationRequest,
    Component: Component,
    CreateSealRequest: CreateSealRequest,
    CancelFlowResponse: CancelFlowResponse,
    FaceIdPhoto: FaceIdPhoto,
    VerifySubOrganizationRequest: VerifySubOrganizationRequest,
    VerifyUserRequest: VerifyUserRequest,
    DescribeFaceIdPhotosResponse: DescribeFaceIdPhotosResponse,
    CheckVerifyCodeMatchFlowIdRequest: CheckVerifyCodeMatchFlowIdRequest,
    CheckBankCard2EVerificationRequest: CheckBankCard2EVerificationRequest,
    DescribeFileIdsByCustomIdsResponse: DescribeFileIdsByCustomIdsResponse,
    ModifySubOrganizationInfoResponse: ModifySubOrganizationInfoResponse,
    DescribeCatalogApproversRequest: DescribeCatalogApproversRequest,
    CheckFaceIdentifyRequest: CheckFaceIdentifyRequest,
    CreateServerFlowSignResponse: CreateServerFlowSignResponse,
    ModifyUserResponse: ModifyUserResponse,
    CheckBankCard4EVerificationResponse: CheckBankCard4EVerificationResponse,
    DescribeFileUrlsRequest: DescribeFileUrlsRequest,
    FlowFileInfo: FlowFileInfo,
    SmsTemplate: SmsTemplate,
    Address: Address,
    ModifyUserDefaultSealRequest: ModifyUserDefaultSealRequest,
    GenerateUserSealRequest: GenerateUserSealRequest,
    CheckIdCardVerificationResponse: CheckIdCardVerificationResponse,
    DescribeFlowResponse: DescribeFlowResponse,
    CreateSubOrganizationAndSealRequest: CreateSubOrganizationAndSealRequest,
    CheckMobileVerificationRequest: CheckMobileVerificationRequest,
    SendFlowUrlResponse: SendFlowUrlResponse,
    DescribeCatalogApproversResponse: DescribeCatalogApproversResponse,
    CustomFileIdMap: CustomFileIdMap,
    SendFlowResponse: SendFlowResponse,
    CatalogApprovers: CatalogApprovers,
    DescribeSealsRequest: DescribeSealsRequest,
    FlowApproverInfo: FlowApproverInfo,
    DescribeFlowFilesRequest: DescribeFlowFilesRequest,
    DescribeCustomFlowIdsResponse: DescribeCustomFlowIdsResponse,
    SubOrganizationDetail: SubOrganizationDetail,
    CheckIdCardVerificationRequest: CheckIdCardVerificationRequest,
    CreateSignUrlResponse: CreateSignUrlResponse,
    ModifySubOrganizationInfoRequest: ModifySubOrganizationInfoRequest,
    SendSignInnerVerifyCodeResponse: SendSignInnerVerifyCodeResponse,
    DescribeFaceIdPhotosRequest: DescribeFaceIdPhotosRequest,
    FileUrl: FileUrl,
    CreateUserResponse: CreateUserResponse,
    CheckVerifyCodeMatchFlowIdResponse: CheckVerifyCodeMatchFlowIdResponse,
    ModifyOrganizationDefaultSealRequest: ModifyOrganizationDefaultSealRequest,
    CreateFaceIdSignResponse: CreateFaceIdSignResponse,
    DescribeFlowApproversResponse: DescribeFlowApproversResponse,
    CheckMobileAndNameRequest: CheckMobileAndNameRequest,
    DeleteSealRequest: DeleteSealRequest,
    CheckBankCardVerificationResponse: CheckBankCardVerificationResponse,
    ArchiveFlowRequest: ArchiveFlowRequest,
    CreateUserAndSealResponse: CreateUserAndSealResponse,
    FaceIdResult: FaceIdResult,
    CreateSignUrlRequest: CreateSignUrlRequest,
    ComponentSeal: ComponentSeal,
    DeleteSealResponse: DeleteSealResponse,
    UploadFilesRequest: UploadFilesRequest,
    DescribeUsersRequest: DescribeUsersRequest,
    CreateFlowByFilesRequest: CreateFlowByFilesRequest,
    CatalogComponents: CatalogComponents,
    ArchiveFlowResponse: ArchiveFlowResponse,
    FlowInfo: FlowInfo,
    UserDescribe: UserDescribe,
    CheckBankCard2EVerificationResponse: CheckBankCard2EVerificationResponse,
    VerifySubOrganizationResponse: VerifySubOrganizationResponse,
    DescribeSealsResponse: DescribeSealsResponse,
    DescribeFileUrlsResponse: DescribeFileUrlsResponse,
    ModifySealRequest: ModifySealRequest,
    CheckBankCard3EVerificationRequest: CheckBankCard3EVerificationRequest,
    CheckBankCardVerificationRequest: CheckBankCardVerificationRequest,
    RejectFlowRequest: RejectFlowRequest,
    DescribeSubOrganizationsRequest: DescribeSubOrganizationsRequest,
    SignSeal: SignSeal,
    DescribeCatalogSignComponentsRequest: DescribeCatalogSignComponentsRequest,
    ModifyOrganizationDefaultSealResponse: ModifyOrganizationDefaultSealResponse,
    CreateFlowByFilesResponse: CreateFlowByFilesResponse,
    ModifyUserDefaultSealResponse: ModifyUserDefaultSealResponse,
    UploadFilesResponse: UploadFilesResponse,
    CheckBankCard3EVerificationResponse: CheckBankCard3EVerificationResponse,
    SignFlowRequest: SignFlowRequest,
    CustomFlowIdMap: CustomFlowIdMap,
    DescribeCustomFlowIdsByFlowIdRequest: DescribeCustomFlowIdsByFlowIdRequest,
    UploadFile: UploadFile,
    DescribeUsersResponse: DescribeUsersResponse,
    CreateH5FaceIdUrlRequest: CreateH5FaceIdUrlRequest,
    CheckMobileVerificationResponse: CheckMobileVerificationResponse,
    DescribeFlowFilesResponse: DescribeFlowFilesResponse,
    CreateUserRequest: CreateUserRequest,
    CreatePreviewSignUrlRequest: CreatePreviewSignUrlRequest,
    CreateUserAndSealRequest: CreateUserAndSealRequest,
    CreatePreviewSignUrlResponse: CreatePreviewSignUrlResponse,
    CreateFaceIdSignRequest: CreateFaceIdSignRequest,
    DescribeCustomFlowIdsByFlowIdResponse: DescribeCustomFlowIdsByFlowIdResponse,
    SignFlowResponse: SignFlowResponse,
    RejectFlowResponse: RejectFlowResponse,
    DescribeFlowRequest: DescribeFlowRequest,
    DescribeFileIdsByCustomIdsRequest: DescribeFileIdsByCustomIdsRequest,
    CreateSealResponse: CreateSealResponse,
    GenerateOrganizationSealResponse: GenerateOrganizationSealResponse,
    DescribeSubOrganizationsResponse: DescribeSubOrganizationsResponse,
    DestroyFlowFileRequest: DestroyFlowFileRequest,
    CheckFaceIdentifyResponse: CheckFaceIdentifyResponse,
    Seal: Seal,
    SendFlowUrlRequest: SendFlowUrlRequest,
    CancelFlowRequest: CancelFlowRequest,
    CreateH5FaceIdUrlResponse: CreateH5FaceIdUrlResponse,
    DescribeCustomFlowIdsRequest: DescribeCustomFlowIdsRequest,
    DescribeFlowApproversRequest: DescribeFlowApproversRequest,
    DescribeFaceIdResultsResponse: DescribeFaceIdResultsResponse,
    CheckBankCard4EVerificationRequest: CheckBankCard4EVerificationRequest,
    GenerateUserSealResponse: GenerateUserSealResponse,
    DescribeCatalogSignComponentsResponse: DescribeCatalogSignComponentsResponse,
    GenerateOrganizationSealRequest: GenerateOrganizationSealRequest,
    CreateServerFlowSignRequest: CreateServerFlowSignRequest,
    Caller: Caller,
    VerifyUserResponse: VerifyUserResponse,
    SendFlowRequest: SendFlowRequest,
    SendSignInnerVerifyCodeRequest: SendSignInnerVerifyCodeRequest,
    DestroyFlowFileResponse: DestroyFlowFileResponse,
    CreateSubOrganizationResponse: CreateSubOrganizationResponse,
    CreateSubOrganizationAndSealResponse: CreateSubOrganizationAndSealResponse,
    ModifyUserRequest: ModifyUserRequest,
    CheckMobileAndNameResponse: CheckMobileAndNameResponse,
    ModifySealResponse: ModifySealResponse,

}
