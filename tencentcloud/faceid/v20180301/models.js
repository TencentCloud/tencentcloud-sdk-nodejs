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
 * 核身视频信息
 * @class
 */
class DetectInfoVideoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活体视频的base64编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LivenessVideo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LivenessVideo = 'LivenessVideo' in params ? params.LivenessVideo : null;

    }
}

/**
 * GetDetectInfoEnhanced请求参数结构体
 * @class
 */
class GetDetectInfoEnhancedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸核身流程的标识，调用DetectAuth接口时生成。
         * @type {string || null}
         */
        this.BizToken = null;

        /**
         * 用于细分客户使用场景，由腾讯侧在线下对接时分配。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 指定拉取的结果信息，取值（0：全部；1：文本类；2：身份证信息；3：视频最佳截图信息）。
如 13表示拉取文本类、视频最佳截图信息。
默认值：0
         * @type {string || null}
         */
        this.InfoType = null;

        /**
         * 从活体视频中截取一定张数的最佳帧（仅部分服务支持，若需使用请与慧眼小助手沟通）。默认为0，最大为10，超出10的最多只给10张。（InfoType需要包含3）
         * @type {number || null}
         */
        this.BestFramesCount = null;

        /**
         * 是否对身份证照片进行裁边。默认为false。（InfoType需要包含2）
         * @type {boolean || null}
         */
        this.IsCutIdCardImage = null;

        /**
         * 是否需要从身份证中抠出头像。默认为false。（InfoType需要包含2）
         * @type {boolean || null}
         */
        this.IsNeedIdCardAvatar = null;

        /**
         * 是否需要对返回中的敏感信息进行加密。其中敏感信息包括：Response.Text.IdCard、Response.Text.Name、Response.Text.OcrIdCard、Response.Text.OcrName
         * @type {boolean || null}
         */
        this.IsEncrypt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizToken = 'BizToken' in params ? params.BizToken : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.InfoType = 'InfoType' in params ? params.InfoType : null;
        this.BestFramesCount = 'BestFramesCount' in params ? params.BestFramesCount : null;
        this.IsCutIdCardImage = 'IsCutIdCardImage' in params ? params.IsCutIdCardImage : null;
        this.IsNeedIdCardAvatar = 'IsNeedIdCardAvatar' in params ? params.IsNeedIdCardAvatar : null;
        this.IsEncrypt = 'IsEncrypt' in params ? params.IsEncrypt : null;

    }
}

/**
 * GetFaceIdToken请求参数结构体
 * @class
 */
class GetFaceIdTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地上传照片(LOCAL)、商业库(BUSINESS)
         * @type {string || null}
         */
        this.CompareLib = null;

        /**
         * CompareLib为商业库时必传。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * CompareLib为商业库库时必传。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * CompareLib为上传照片比对时必传，Base64后图片最大8MB。
请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * SDK中生成的Meta字符串
         * @type {string || null}
         */
        this.Meta = null;

        /**
         * 透传参数 1000长度字符串
         * @type {string || null}
         */
        this.Extra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompareLib = 'CompareLib' in params ? params.CompareLib : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.Meta = 'Meta' in params ? params.Meta : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

    }
}

/**
 * Liveness请求参数结构体
 * @class
 */
class LivenessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于活体检测的视频，视频的BASE64值；
BASE64编码后的大小不超过8M，支持mp4、avi、flv格式。
         * @type {string || null}
         */
        this.VideoBase64 = null;

        /**
         * 活体检测类型，取值：LIP/ACTION/SILENT。
LIP为数字模式，ACTION为动作模式，SILENT为静默模式，三种模式选择一种传入。
         * @type {string || null}
         */
        this.LivenessType = null;

        /**
         * 数字模式传参：数字验证码(1234)，需先调用接口获取数字验证码；
动作模式传参：传动作顺序(2,1 or 1,2)，需先调用接口获取动作顺序；
静默模式传参：不需要传递此参数。
         * @type {string || null}
         */
        this.ValidateData = null;

        /**
         * 额外配置，传入JSON字符串。
{
"BestFrameNum": 2  //需要返回多张最佳截图，取值范围1-10
}
         * @type {string || null}
         */
        this.Optional = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;
        this.Optional = 'Optional' in params ? params.Optional : null;

    }
}

/**
 * 敏感数据加密
 * @class
 */
class Encryption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 有加密需求的用户，接入传入kms的CiphertextBlob，关于数据加密可查阅<a href="https://cloud.tencent.com/document/product/1007/47180">数据加密</a> 文档。
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * 在使用加密服务时，填入要被加密的字段。本接口中可填入加密后的一个或多个字段
         * @type {Array.<string> || null}
         */
        this.EncryptList = null;

        /**
         * 有加密需求的用户，传入CBC加密的初始向量
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
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.EncryptList = 'EncryptList' in params ? params.EncryptList : null;
        this.Iv = 'Iv' in params ? params.Iv : null;

    }
}

/**
 * CheckBankCardInformation请求参数结构体
 * @class
 */
class CheckBankCardInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 银行卡号。
         * @type {string || null}
         */
        this.BankCard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BankCard = 'BankCard' in params ? params.BankCard : null;

    }
}

/**
 * MobileNetworkTimeVerification返回参数结构体
 * @class
 */
class MobileNetworkTimeVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码，收费情况如下。
收费结果码：
0: 成功
-2: 手机号不存在
-3: 手机号存在，但无法查询到在网时长
不收费结果码：
-1: 手机号格式不正确
-4: 验证中心服务繁忙
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 在网时长区间。
格式为(a,b]，表示在网时长在a个月以上，b个月以下。若b为+时表示没有上限。
         * @type {string || null}
         */
        this.Range = null;

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
        this.Range = 'Range' in params ? params.Range : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetLiveCode请求参数结构体
 * @class
 */
class GetLiveCodeRequest extends  AbstractModel {
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
 * GetEidResult返回参数结构体
 * @class
 */
class GetEidResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本类信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DetectInfoText || null}
         */
        this.Text = null;

        /**
         * 身份证照片信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DetectInfoIdCardData || null}
         */
        this.IdCardData = null;

        /**
         * 最佳帧信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DetectInfoBestFrame || null}
         */
        this.BestFrame = null;

        /**
         * Eid信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EidInfo || null}
         */
        this.EidInfo = null;

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

        if (params.Text) {
            let obj = new DetectInfoText();
            obj.deserialize(params.Text)
            this.Text = obj;
        }

        if (params.IdCardData) {
            let obj = new DetectInfoIdCardData();
            obj.deserialize(params.IdCardData)
            this.IdCardData = obj;
        }

        if (params.BestFrame) {
            let obj = new DetectInfoBestFrame();
            obj.deserialize(params.BestFrame)
            this.BestFrame = obj;
        }

        if (params.EidInfo) {
            let obj = new EidInfo();
            obj.deserialize(params.EidInfo)
            this.EidInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IdCardVerification请求参数结构体
 * @class
 */
class IdCardVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份证号
         * @type {string || null}
         */
        this.IdCard = null;

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
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * BankCardVerification请求参数结构体
 * @class
 */
class BankCardVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开户证件号，与CertType参数的证件类型一致，如：身份证，则传入身份证号。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 银行卡
         * @type {string || null}
         */
        this.BankCard = null;

        /**
         * 证件类型，请确认该证件为开户时使用的证件类型，未用于开户的证件信息不支持验证。
目前默认：0 身份证，其他证件类型需求可以联系小助手faceid001确认。
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 敏感数据加密信息。对传入信息（姓名、身份证号、银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。
         * @type {Encryption || null}
         */
        this.Encryption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BankCard = 'BankCard' in params ? params.BankCard : null;
        this.CertType = 'CertType' in params ? params.CertType : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

    }
}

/**
 * CheckBankCardInformation返回参数结构体
 * @class
 */
class CheckBankCardInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码，收费情况如下。
收费结果码：
0: 查询成功
-1: 未查到信息
不收费结果码
-2：验证中心服务繁忙
-3：银行卡不存在
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 开户行
         * @type {string || null}
         */
        this.AccountBank = null;

        /**
         * 卡性质：1. 借记卡；2. 贷记卡
         * @type {number || null}
         */
        this.AccountType = null;

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
        this.AccountBank = 'AccountBank' in params ? params.AccountBank : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 核身最佳帧信息
 * @class
 */
class DetectInfoBestFrame extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活体比对最佳帧。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BestFrame = null;

        /**
         * 自截帧。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BestFrames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BestFrame = 'BestFrame' in params ? params.BestFrame : null;
        this.BestFrames = 'BestFrames' in params ? params.BestFrames : null;

    }
}

/**
 * CheckIdCardInformation返回参数结构体
 * @class
 */
class CheckIdCardInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 相似度，取值范围 [0.00, 100.00]。推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一）
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 民族
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * 出生日期
         * @type {string || null}
         */
        this.Birth = null;

        /**
         * 地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 身份证号
         * @type {string || null}
         */
        this.IdNum = null;

        /**
         * 身份证头像照片的base64编码，如果抠图失败会拿整张身份证做比对并返回空。
         * @type {string || null}
         */
        this.Portrait = null;

        /**
         * 告警信息，当在Config中配置了告警信息会停止人像比对，Result返回错误（FailedOperation.OcrWarningOccurred）并有此告警信息，Code 告警码列表和释义：

-9101 身份证边框不完整告警，
-9102 身份证复印件告警，
-9103 身份证翻拍告警，
-9105 身份证框内遮挡告警，
-9104 临时身份证告警，
-9106 身份证 PS 告警。
-8001 图片模糊告警
多个会 |  隔开如 "-9101|-9106|-9104"
         * @type {string || null}
         */
        this.Warnings = null;

        /**
         * 图片质量分数，当请求Config中配置图片模糊告警该参数才有意义，取值范围（0～100），目前默认阈值是50分，低于50分会触发模糊告警。
         * @type {number || null}
         */
        this.Quality = null;

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
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.Birth = 'Birth' in params ? params.Birth : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.IdNum = 'IdNum' in params ? params.IdNum : null;
        this.Portrait = 'Portrait' in params ? params.Portrait : null;
        this.Warnings = 'Warnings' in params ? params.Warnings : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDetectInfoEnhanced返回参数结构体
 * @class
 */
class GetDetectInfoEnhancedResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本类信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DetectInfoText || null}
         */
        this.Text = null;

        /**
         * 身份证照片信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DetectInfoIdCardData || null}
         */
        this.IdCardData = null;

        /**
         * 最佳帧信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DetectInfoBestFrame || null}
         */
        this.BestFrame = null;

        /**
         * 视频信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DetectInfoVideoData || null}
         */
        this.VideoData = null;

        /**
         * 敏感数据加密信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Encryption || null}
         */
        this.Encryption = null;

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

        if (params.Text) {
            let obj = new DetectInfoText();
            obj.deserialize(params.Text)
            this.Text = obj;
        }

        if (params.IdCardData) {
            let obj = new DetectInfoIdCardData();
            obj.deserialize(params.IdCardData)
            this.IdCardData = obj;
        }

        if (params.BestFrame) {
            let obj = new DetectInfoBestFrame();
            obj.deserialize(params.BestFrame)
            this.BestFrame = obj;
        }

        if (params.VideoData) {
            let obj = new DetectInfoVideoData();
            obj.deserialize(params.VideoData)
            this.VideoData = obj;
        }

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PhoneVerification请求参数结构体
 * @class
 */
class PhoneVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份证号
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 有加密需求的用户，接入传入kms的CiphertextBlob，关于数据加密可查阅 <a href="https://cloud.tencent.com/document/product/1007/47180">数据加密</a> 文档。
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * 在使用加密服务时，填入要被加密的字段。本接口中可填入加密后的IdCard，Name，Phone中的一个或多个
         * @type {Array.<string> || null}
         */
        this.EncryptList = null;

        /**
         * 有加密需求的用户，传入CBC加密的初试向量
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
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.EncryptList = 'EncryptList' in params ? params.EncryptList : null;
        this.Iv = 'Iv' in params ? params.Iv : null;

    }
}

/**
 * GetEidResult请求参数结构体
 * @class
 */
class GetEidResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸核身流程的标识，调用GetEidToken接口时生成的。
         * @type {string || null}
         */
        this.EidToken = null;

        /**
         * 指定拉取的结果信息，取值（0：全部；1：文本类；2：身份证信息；3：最佳截图信息）。
如 13表示拉取文本类、最佳截图信息。
默认值：0
         * @type {string || null}
         */
        this.InfoType = null;

        /**
         * 从活体视频中截取一定张数的最佳帧。默认为0，最大为3，超出3的最多只给3张。（InfoType需要包含3）
         * @type {number || null}
         */
        this.BestFramesCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EidToken = 'EidToken' in params ? params.EidToken : null;
        this.InfoType = 'InfoType' in params ? params.InfoType : null;
        this.BestFramesCount = 'BestFramesCount' in params ? params.BestFramesCount : null;

    }
}

/**
 * DetectAuth返回参数结构体
 * @class
 */
class DetectAuthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于发起核身流程的URL，仅微信H5场景使用。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 一次核身流程的标识，有效时间为7,200秒；
完成核身后，可用该标识获取验证结果信息。
         * @type {string || null}
         */
        this.BizToken = null;

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
        this.BizToken = 'BizToken' in params ? params.BizToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PhoneVerification返回参数结构体
 * @class
 */
class PhoneVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码:
收费结果码
0: 认证通过
-4: 信息不一致（手机号已实名，但姓名和身份证号与实名信息不一致）
-5: 手机号未实名
不收费结果码
-6: 手机号码不合法
-7: 身份证号码有误
-8: 姓名校验不通过
-9: 没有记录
-10: 认证未通过
-11: 验证中心服务繁忙
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
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
 * GetEidToken请求参数结构体
 * @class
 */
class GetEidTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EID商户id，字段长度最长50位。
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 身份标识（未使用OCR服务时，必须传入）。
规则：a-zA-Z0-9组合。最长长度32位。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名。（未使用OCR服务时，必须传入）最长长度32位。中文请使用UTF-8编码。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 透传字段，在获取验证结果时返回。最长长度1024位。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 小程序模式配置，包括如何传入姓名身份证的配置。
         * @type {GetEidTokenConfig || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

        if (params.Config) {
            let obj = new GetEidTokenConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * IdCardOCRVerification请求参数结构体
 * @class
 */
class IdCardOCRVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份证号
姓名和身份证号、ImageBase64、ImageUrl三者必须提供其中之一。若都提供了，则按照姓名和身份证号>ImageBase64>ImageUrl的优先级使用参数。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 身份证人像面的 Base64 值
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 身份证人像面的 Url 地址
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 敏感数据加密信息。对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。
         * @type {Encryption || null}
         */
        this.Encryption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

    }
}

/**
 * CheckPhoneAndName返回参数结构体
 * @class
 */
class CheckPhoneAndNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码，收费情况如下。
收费结果码：
0: 验证结果一致
1: 验证结果不一致
不收费结果码：
-1:查无记录
-2:引擎未知错误
-3:引擎服务异常
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述
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
 * BankCard4EVerification返回参数结构体
 * @class
 */
class BankCard4EVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码
收费结果码：
'0': '认证通过'
'-1': '认证未通过'
'-6': '持卡人信息有误'
'-7': '未开通无卡支付'
'-8': '此卡被没收'
'-9': '无效卡号'
'-10': '此卡无对应发卡行'
'-11': '该卡未初始化或睡眠卡'
'-12': '作弊卡、吞卡'
'-13': '此卡已挂失'
'-14': '该卡已过期'
'-15': '受限制的卡'
'-16': '密码错误次数超限'
'-17': '发卡行不支持此交易'
不收费结果码：
'-2': '姓名校验不通过'
'-3': '身份证号码有误'
'-4': '银行卡号码有误'
'-5': '手机号码不合法'
'-18': '验证中心服务繁忙'
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
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
 * MobileStatus请求参数结构体
 * @class
 */
class MobileStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手机号码
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 敏感数据加密信息。对传入信息（手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。
         * @type {Encryption || null}
         */
        this.Encryption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mobile = 'Mobile' in params ? params.Mobile : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

    }
}

/**
 * GetRealNameAuthToken请求参数结构体
 * @class
 */
class GetRealNameAuthTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 身份证号
         * @type {string || null}
         */
        this.IDCard = null;

        /**
         * 回调地址。实名认证完成后，将会重定向到这个地址通知认证发起方。仅支持http或https协议。
         * @type {string || null}
         */
        this.CallbackURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IDCard = 'IDCard' in params ? params.IDCard : null;
        this.CallbackURL = 'CallbackURL' in params ? params.CallbackURL : null;

    }
}

/**
 * BankCard2EVerification请求参数结构体
 * @class
 */
class BankCard2EVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 银行卡
         * @type {string || null}
         */
        this.BankCard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.BankCard = 'BankCard' in params ? params.BankCard : null;

    }
}

/**
 * LivenessRecognition请求参数结构体
 * @class
 */
class LivenessRecognitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份证号
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名。中文请使用UTF-8编码。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用于活体检测的视频，视频的BASE64值；
BASE64编码后的大小不超过8M，支持mp4、avi、flv格式。
         * @type {string || null}
         */
        this.VideoBase64 = null;

        /**
         * 活体检测类型，取值：LIP/ACTION/SILENT。
LIP为数字模式，ACTION为动作模式，SILENT为静默模式，三种模式选择一种传入。
         * @type {string || null}
         */
        this.LivenessType = null;

        /**
         * 数字模式传参：数字验证码(1234)，需先调用接口获取数字验证码；
动作模式传参：传动作顺序(2,1 or 1,2)，需先调用接口获取动作顺序；
静默模式传参：空。
         * @type {string || null}
         */
        this.ValidateData = null;

        /**
         * 额外配置，传入JSON字符串。
{
"BestFrameNum": 2  //需要返回多张最佳截图，取值范围1-10
}
         * @type {string || null}
         */
        this.Optional = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;
        this.Optional = 'Optional' in params ? params.Optional : null;

    }
}

/**
 * Eid出参
 * @class
 */
class EidInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户方 appeIDcode 的数字证书
         * @type {string || null}
         */
        this.EidCode = null;

        /**
         * eID 中心针对商户方EidCode的电子签名
         * @type {string || null}
         */
        this.EidSign = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EidCode = 'EidCode' in params ? params.EidCode : null;
        this.EidSign = 'EidSign' in params ? params.EidSign : null;

    }
}

/**
 * GetFaceIdToken返回参数结构体
 * @class
 */
class GetFaceIdTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 有效期 10分钟。只能完成1次核身。
         * @type {string || null}
         */
        this.FaceIdToken = null;

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
        this.FaceIdToken = 'FaceIdToken' in params ? params.FaceIdToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取token时的的配置
 * @class
 */
class GetEidTokenConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名身份证输入方式。
1：传身份证正反面OCR   
2：传身份证正面OCR  
3：用户手动输入  
4：客户后台传入  
默认1
注：使用OCR时仅支持用户修改结果中的姓名
         * @type {string || null}
         */
        this.InputType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputType = 'InputType' in params ? params.InputType : null;

    }
}

/**
 * MobileStatus返回参数结构体
 * @class
 */
class MobileStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码，收费情况如下。
收费结果码：
0：成功
不收费结果码：
-1：未查询到结果
-2：手机号格式不正确
-3：验证中心服务繁忙
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 状态码：
0：正常
1：停机
2：销号
3：空号
4：不在网
99：未知状态
         * @type {number || null}
         */
        this.StatusCode = null;

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
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IdCardOCRVerification返回参数结构体
 * @class
 */
class IdCardOCRVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码，收费情况如下。
收费结果码：
0: 姓名和身份证号一致
-1: 姓名和身份证号不一致
不收费结果码：
-2: 非法身份证号（长度、校验位等不正确）
-3: 非法姓名（长度、格式等不正确）
-4: 证件库服务异常
-5: 证件库中无此身份证记录
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用于验证的姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用于验证的身份证号
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * OCR得到的性别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * OCR得到的民族
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * OCR得到的生日
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Birth = null;

        /**
         * OCR得到的地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.Birth = 'Birth' in params ? params.Birth : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetRealNameAuthToken返回参数结构体
 * @class
 */
class GetRealNameAuthTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询实名认证结果的唯一凭证
         * @type {string || null}
         */
        this.AuthToken = null;

        /**
         * 实名认证授权地址，认证发起方需要重定向到这个地址获取认证用户的授权，仅能在微信环境下打开。
         * @type {string || null}
         */
        this.RedirectURL = null;

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
        this.AuthToken = 'AuthToken' in params ? params.AuthToken : null;
        this.RedirectURL = 'RedirectURL' in params ? params.RedirectURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Liveness返回参数结构体
 * @class
 */
class LivenessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证通过后的视频最佳截图照片，照片为BASE64编码后的值，jpg格式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BestFrameBase64 = null;

        /**
         * 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 最佳最佳截图列表，仅在配置了返回多张最佳截图时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BestFrameList = null;

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
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.BestFrameList = 'BestFrameList' in params ? params.BestFrameList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckIdCardInformation请求参数结构体
 * @class
 */
class CheckIdCardInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份证人像面的 Base64 值
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。
请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。
ImageBase64、ImageUrl二者必须提供其中之一。若都提供了，则按照ImageUrl>ImageBase64的优先级使用参数。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 身份证人像面的 Url 地址
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 以下可选字段均为bool 类型，默认false：
CopyWarn，复印件告警
BorderCheckWarn，边框和框内遮挡告警
ReshootWarn，翻拍告警
DetectPsWarn，PS检测告警
TempIdWarn，临时身份证告警
Quality，图片质量告警（评价图片模糊程度）

SDK 设置方式参考：
Config = Json.stringify({"CopyWarn":true,"ReshootWarn":true})
API 3.0 Explorer 设置方式参考：
Config = {"CopyWarn":true,"ReshootWarn":true}
         * @type {string || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * 核身文本信息
 * @class
 */
class DetectInfoText extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次流程最终验证结果。0为成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 本次流程最终验证结果描述。（仅描述用，文案更新时不会通知。）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 本次验证使用的身份证号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 本次验证使用的姓名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Ocr识别结果。民族。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrNation = null;

        /**
         * Ocr识别结果。家庭住址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrAddress = null;

        /**
         * Ocr识别结果。生日。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrBirth = null;

        /**
         * Ocr识别结果。签发机关。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrAuthority = null;

        /**
         * Ocr识别结果。有效日期。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrValidDate = null;

        /**
         * Ocr识别结果。姓名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrName = null;

        /**
         * Ocr识别结果。身份证号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrIdCard = null;

        /**
         * Ocr识别结果。性别。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrGender = null;

        /**
         * 本次流程最终活体结果。0为成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LiveStatus = null;

        /**
         * 本次流程最终活体结果描述。（仅描述用，文案更新时不会通知。）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LiveMsg = null;

        /**
         * 本次流程最终一比一结果。0为成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Comparestatus = null;

        /**
         * 本次流程最终一比一结果描述。（仅描述用，文案更新时不会通知。）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Comparemsg = null;

        /**
         * 本次流程活体一比一的分数，取值范围 [0.00, 100.00]。相似度大于等于70时才判断为同一人，也可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Sim = null;

        /**
         * 地理位置经纬度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Location = null;

        /**
         * Auth接口带入额外信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 本次流程进行的活体一比一流水。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetectDetail> || null}
         */
        this.LivenessDetail = null;

        /**
         * 手机号码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 本次流程最终比对库源类型。包括：
权威库；
业务方自有库（用户上传照片、客户的混合库、混合部署库）；
二次验证库；
人工审核库；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CompareLibType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OcrNation = 'OcrNation' in params ? params.OcrNation : null;
        this.OcrAddress = 'OcrAddress' in params ? params.OcrAddress : null;
        this.OcrBirth = 'OcrBirth' in params ? params.OcrBirth : null;
        this.OcrAuthority = 'OcrAuthority' in params ? params.OcrAuthority : null;
        this.OcrValidDate = 'OcrValidDate' in params ? params.OcrValidDate : null;
        this.OcrName = 'OcrName' in params ? params.OcrName : null;
        this.OcrIdCard = 'OcrIdCard' in params ? params.OcrIdCard : null;
        this.OcrGender = 'OcrGender' in params ? params.OcrGender : null;
        this.LiveStatus = 'LiveStatus' in params ? params.LiveStatus : null;
        this.LiveMsg = 'LiveMsg' in params ? params.LiveMsg : null;
        this.Comparestatus = 'Comparestatus' in params ? params.Comparestatus : null;
        this.Comparemsg = 'Comparemsg' in params ? params.Comparemsg : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

        if (params.LivenessDetail) {
            this.LivenessDetail = new Array();
            for (let z in params.LivenessDetail) {
                let obj = new DetectDetail();
                obj.deserialize(params.LivenessDetail[z]);
                this.LivenessDetail.push(obj);
            }
        }
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.CompareLibType = 'CompareLibType' in params ? params.CompareLibType : null;

    }
}

/**
 * DetectAuth请求参数结构体
 * @class
 */
class DetectAuthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于细分客户使用场景，申请开通服务后，可以在腾讯云慧眼人脸核身控制台（https://console.cloud.tencent.com/faceid） 自助接入里面创建，审核通过后即可调用。如有疑问，请加慧眼小助手微信（faceid001）进行咨询。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 本接口不需要传递此参数。
         * @type {string || null}
         */
        this.TerminalType = null;

        /**
         * 身份标识（未使用OCR服务时，必须传入）。
规则：a-zA-Z0-9组合。最长长度32位。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名。（未使用OCR服务时，必须传入）最长长度32位。中文请使用UTF-8编码。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 认证结束后重定向的回调链接地址。最长长度1024位。
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * 透传字段，在获取验证结果时返回。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 用于人脸比对的照片，图片的Base64值；
Base64编码后的图片数据大小不超过3M，仅支持jpg、png格式。请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 敏感数据加密信息。对传入信息（姓名、身份证号）有加密需求的用户可使用此参数，详情请点击左侧链接。
         * @type {Encryption || null}
         */
        this.Encryption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.TerminalType = 'TerminalType' in params ? params.TerminalType : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

    }
}

/**
 * MinorsVerification返回参数结构体
 * @class
 */
class MinorsVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果码，收费情况如下。
收费结果码：
0: 成年
-1: 未成年
-3: 姓名和身份证号不一致

不收费结果码：
-2: 未查询到手机号信息
-4: 非法身份证号（长度、校验位等不正确）
-5: 非法姓名（长度、格式等不正确）
-6: 权威数据源服务异常
-7: 未查询到身份信息
-8: 权威数据源升级中，请稍后再试
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 该字段的值为年龄区间。格式为[a,b)，
[0,8)表示年龄小于8周岁区间，不包括8岁；
[8,16)表示年龄8-16周岁区间，不包括16岁；
[16,18)表示年龄16-18周岁区间，不包括18岁；
[18,+)表示年龄大于18周岁。
         * @type {string || null}
         */
        this.AgeRange = null;

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
        this.AgeRange = 'AgeRange' in params ? params.AgeRange : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BankCardVerification返回参数结构体
 * @class
 */
class BankCardVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码
收费结果码：
'0': '认证通过'
'-1': '认证未通过'
'-5': '持卡人信息有误'
'-6': '未开通无卡支付'
'-7': '此卡被没收'
'-8': '无效卡号'
'-9': '此卡无对应发卡行'
'-10': '该卡未初始化或睡眠卡'
'-11': '作弊卡、吞卡'
'-12': '此卡已挂失'
'-13': '该卡已过期'
'-14': '受限制的卡'
'-15': '密码错误次数超限'
'-16': '发卡行不支持此交易'
不收费结果码：
'-2': '姓名校验不通过'
'-3': '身份证号码有误'
'-4': '银行卡号码有误'
'-17': '验证中心服务繁忙'
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
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
 * GetRealNameAuthResult请求参数结构体
 * @class
 */
class GetRealNameAuthResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实名认证凭证
         * @type {string || null}
         */
        this.AuthToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuthToken = 'AuthToken' in params ? params.AuthToken : null;

    }
}

/**
 * ImageRecognition请求参数结构体
 * @class
 */
class ImageRecognitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份证号
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名。中文请使用UTF-8编码。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用于人脸比对的照片，图片的Base64值；
Base64编码后的图片数据大小不超过3M，仅支持jpg、png格式。
请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 本接口不需要传递此参数。
         * @type {string || null}
         */
        this.Optional = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.Optional = 'Optional' in params ? params.Optional : null;

    }
}

/**
 * BankCard4EVerification请求参数结构体
 * @class
 */
class BankCard4EVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 银行卡
         * @type {string || null}
         */
        this.BankCard = null;

        /**
         * 手机号码
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 开户证件号，与CertType参数的证件类型一致，如：身份证，则传入身份证号。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 证件类型，请确认该证件为开户时使用的证件类型，未用于开户的证件信息不支持验证。
目前默认为0：身份证，其他证件类型暂不支持。
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 敏感数据加密信息。对传入信息（姓名、身份证号、手机号、银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。
         * @type {Encryption || null}
         */
        this.Encryption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.BankCard = 'BankCard' in params ? params.BankCard : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.CertType = 'CertType' in params ? params.CertType : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

    }
}

/**
 * MobileNetworkTimeVerification请求参数结构体
 * @class
 */
class MobileNetworkTimeVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手机号码
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 敏感数据加密信息。对传入信息（手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。
         * @type {Encryption || null}
         */
        this.Encryption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mobile = 'Mobile' in params ? params.Mobile : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

    }
}

/**
 * GetFaceIdResult请求参数结构体
 * @class
 */
class GetFaceIdResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SDK人脸核身流程的标识，调用GetFaceIdToken接口时生成。
         * @type {string || null}
         */
        this.FaceIdToken = null;

        /**
         * 是否需要拉取视频，默认false不需要
         * @type {boolean || null}
         */
        this.IsNeedVideo = null;

        /**
         * 是否需要拉取截帧，默认false不需要
         * @type {boolean || null}
         */
        this.IsNeedBestFrame = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaceIdToken = 'FaceIdToken' in params ? params.FaceIdToken : null;
        this.IsNeedVideo = 'IsNeedVideo' in params ? params.IsNeedVideo : null;
        this.IsNeedBestFrame = 'IsNeedBestFrame' in params ? params.IsNeedBestFrame : null;

    }
}

/**
 * GetActionSequence返回参数结构体
 * @class
 */
class GetActionSequenceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动作顺序(2,1 or 1,2) 。1代表张嘴，2代表闭眼。
         * @type {string || null}
         */
        this.ActionSequence = null;

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
        this.ActionSequence = 'ActionSequence' in params ? params.ActionSequence : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LivenessRecognition返回参数结构体
 * @class
 */
class LivenessRecognitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证通过后的视频最佳截图照片，照片为BASE64编码后的值，jpg格式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BestFrameBase64 = null;

        /**
         * 相似度，取值范围 [0.00, 100.00]。推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一）
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 最佳截图列表，仅在配置了返回多张最佳截图时返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BestFrameList = null;

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
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.BestFrameList = 'BestFrameList' in params ? params.BestFrameList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MinorsVerification请求参数结构体
 * @class
 */
class MinorsVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参与校验的参数类型。
0：使用手机号进行校验；
1：使用姓名与身份证号进行校验。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 手机号，11位数字，
特别提示：
手机号验证只限制在腾讯健康守护可信模型覆盖的数据范围内，与手机号本身在运营商是否实名无关联，不在范围会提示“手机号未实名”，建议客户与传入姓名和身份证号信息组合使用。
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 身份证号码。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 敏感数据加密信息。对传入信息（姓名、身份证号、手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。
         * @type {Encryption || null}
         */
        this.Encryption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

    }
}

/**
 * ImageRecognition返回参数结构体
 * @class
 */
class ImageRecognitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 相似度，取值范围 [0.00, 100.00]。推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一）
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
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
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetActionSequence请求参数结构体
 * @class
 */
class GetActionSequenceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认不需要使用
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * GetDetectInfo返回参数结构体
 * @class
 */
class GetDetectInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * JSON字符串。
{
  // 文本类信息
  "Text": {
    "ErrCode": null,      // 本次核身最终结果。0为成功
    "ErrMsg": null,       // 本次核身最终结果信息描述。
    "IdCard": "",         // 本次核身最终获得的身份证号。
    "Name": "",           // 本次核身最终获得的姓名。
    "OcrNation": null,    // ocr阶段获取的民族
    "OcrAddress": null,   // ocr阶段获取的地址
    "OcrBirth": null,     // ocr阶段获取的出生信息
    "OcrAuthority": null, // ocr阶段获取的证件签发机关
    "OcrValidDate": null, // ocr阶段获取的证件有效期
    "OcrName": null,      // ocr阶段获取的姓名
    "OcrIdCard": null,    // ocr阶段获取的身份证号
    "OcrGender": null,    // ocr阶段获取的性别
    "LiveStatus": null,   // 活体检测阶段的错误码。0为成功
    "LiveMsg": null,      // 活体检测阶段的错误信息
    "Comparestatus": null,// 一比一阶段的错误码。0为成功
    "Comparemsg": null,   // 一比一阶段的错误信息
    "Sim": null, // 比对相似度
    "Location": null, // 地理位置信息
    "Extra": "",          // DetectAuth结果传进来的Extra信息
    "Detail": {           // 活体一比一信息详情
      "LivenessData": [
            {
              ErrCode: null, // 活体比对验证错误码
              ErrMsg: null, // 活体比对验证错误描述
              ReqTime: null, // 活体验证时间戳
              IdCard: null, // 验证身份证号
              Name: null // 验证姓名
            }
      ]
    }
  },
  // 身份证正反面照片Base64
  "IdCardData": {
    "OcrFront": null,
    "OcrBack": null
  },
  // 视频最佳帧截图Base64
  "BestFrame": {
    "BestFrame": null
  },
  // 活体视频Base64
  "VideoData": {
    "LivenessVideo": null
  }
}
         * @type {string || null}
         */
        this.DetectInfo = null;

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
        this.DetectInfo = 'DetectInfo' in params ? params.DetectInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LivenessCompare返回参数结构体
 * @class
 */
class LivenessCompareResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证通过后的视频最佳截图照片，照片为BASE64编码后的值，jpg格式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BestFrameBase64 = null;

        /**
         * 相似度，取值范围 [0.00, 100.00]。推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一）。
         * @type {number || null}
         */
        this.Sim = null;

        /**
         * 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 最佳截图列表，仅在配置了返回多张最佳截图时返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BestFrameList = null;

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
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.BestFrameList = 'BestFrameList' in params ? params.BestFrameList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetLiveCode返回参数结构体
 * @class
 */
class GetLiveCodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数字验证码，如：1234
         * @type {string || null}
         */
        this.LiveCode = null;

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
        this.LiveCode = 'LiveCode' in params ? params.LiveCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDetectInfo请求参数结构体
 * @class
 */
class GetDetectInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸核身流程的标识，调用DetectAuth接口时生成。
         * @type {string || null}
         */
        this.BizToken = null;

        /**
         * 用于细分客户使用场景，申请开通服务后，可以在腾讯云慧眼人脸核身控制台（https://console.cloud.tencent.com/faceid） 自助接入里面创建，审核通过后即可调用。如有疑问，请加慧眼小助手微信（faceid001）进行咨询。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 指定拉取的结果信息，取值（0：全部；1：文本类；2：身份证正反面；3：视频最佳截图照片；4：视频）。
如 134表示拉取文本类、视频最佳截图照片、视频。
默认值：0
         * @type {string || null}
         */
        this.InfoType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizToken = 'BizToken' in params ? params.BizToken : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.InfoType = 'InfoType' in params ? params.InfoType : null;

    }
}

/**
 * BankCard2EVerification返回参数结构体
 * @class
 */
class BankCard2EVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码
计费结果码：
  '0': '认证通过'
  '-1': '认证未通过'
 '-4': '持卡人信息有误'
  '-5': '未开通无卡支付'
  '-6': '此卡被没收'
  '-7': '无效卡号'
  '-8': '此卡无对应发卡行'
  '-9': '该卡未初始化或睡眠卡'
  '-10': '作弊卡、吞卡'
  '-11': '此卡已挂失'
  '-12': '该卡已过期'
  '-13': '受限制的卡'
  '-14': '密码错误次数超限'
  '-15': '发卡行不支持此交易'
不计费结果码：
  '-2': '姓名校验不通过'
  '-3': '银行卡号码有误'
  '-16': '验证中心服务繁忙'
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
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
 * IdCardVerification返回参数结构体
 * @class
 */
class IdCardVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码，收费情况如下。
收费结果码：
0: 姓名和身份证号一致
-1: 姓名和身份证号不一致
不收费结果码：
-2: 非法身份证号（长度、校验位等不正确）
-3: 非法姓名（长度、格式等不正确）
-4: 证件库服务异常
-5: 证件库中无此身份证记录
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
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
 * 核身身份证图片信息
 * @class
 */
class DetectInfoIdCardData extends  AbstractModel {
    constructor(){
        super();

        /**
         * OCR正面照片的base64编码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrFront = null;

        /**
         * OCR反面照片的base64编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrBack = null;

        /**
         * 旋转裁边后的正面照片base64编码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessedFrontImage = null;

        /**
         * 旋转裁边后的背面照片base64编码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcessedBackImage = null;

        /**
         * 身份证正面人像图base64编码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Avatar = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OcrFront = 'OcrFront' in params ? params.OcrFront : null;
        this.OcrBack = 'OcrBack' in params ? params.OcrBack : null;
        this.ProcessedFrontImage = 'ProcessedFrontImage' in params ? params.ProcessedFrontImage : null;
        this.ProcessedBackImage = 'ProcessedBackImage' in params ? params.ProcessedBackImage : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;

    }
}

/**
 * CheckPhoneAndName请求参数结构体
 * @class
 */
class CheckPhoneAndNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ⼿机号
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
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * GetEidToken返回参数结构体
 * @class
 */
class GetEidTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一次核身流程的标识，有效时间为7,200秒；
完成核身后，可用该标识获取验证结果信息。
         * @type {string || null}
         */
        this.EidToken = null;

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
        this.EidToken = 'EidToken' in params ? params.EidToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LivenessCompare请求参数结构体
 * @class
 */
class LivenessCompareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于人脸比对的照片，图片的Base64值；
Base64编码后的图片数据大小不超过3M，仅支持jpg、png格式。
请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 用于活体检测的视频，视频的Base64值；
Base64编码后的大小不超过8M，支持mp4、avi、flv格式。
请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。
         * @type {string || null}
         */
        this.VideoBase64 = null;

        /**
         * 活体检测类型，取值：LIP/ACTION/SILENT。
LIP为数字模式，ACTION为动作模式，SILENT为静默模式，三种模式选择一种传入。
         * @type {string || null}
         */
        this.LivenessType = null;

        /**
         * 数字模式传参：数字验证码(1234)，需先调用接口获取数字验证码；
动作模式传参：传动作顺序(2,1 or 1,2)，需先调用接口获取动作顺序；
静默模式传参：空。
         * @type {string || null}
         */
        this.ValidateData = null;

        /**
         * 额外配置，传入JSON字符串。
{
"BestFrameNum": 2  //需要返回多张最佳截图，取值范围1-10
}
         * @type {string || null}
         */
        this.Optional = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;
        this.Optional = 'Optional' in params ? params.Optional : null;

    }
}

/**
 * 活体一比一详情
 * @class
 */
class DetectDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求时间戳。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReqTime = null;

        /**
         * 本次活体一比一请求的唯一标记。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Seq = null;

        /**
         * 参与本次活体一比一的身份证号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Idcard = null;

        /**
         * 参与本次活体一比一的姓名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 本次活体一比一的相似度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Sim = null;

        /**
         * 本次活体一比一是否收费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsNeedCharge = null;

        /**
         * 本次活体一比一最终结果。0为成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Errcode = null;

        /**
         * 本次活体一比一最终结果描述。（仅描述用，文案更新时不会通知。）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Errmsg = null;

        /**
         * 本次活体结果。0为成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Livestatus = null;

        /**
         * 本次活体结果描述。（仅描述用，文案更新时不会通知。）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Livemsg = null;

        /**
         * 本次一比一结果。0为成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Comparestatus = null;

        /**
         * 本次一比一结果描述。（仅描述用，文案更新时不会通知。）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Comparemsg = null;

        /**
         * 比对库源类型。包括：
公安商业库；
业务方自有库（用户上传照片、客户的混合库、混合部署库）；
二次验证库；
人工审核库；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CompareLibType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReqTime = 'ReqTime' in params ? params.ReqTime : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.Idcard = 'Idcard' in params ? params.Idcard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.IsNeedCharge = 'IsNeedCharge' in params ? params.IsNeedCharge : null;
        this.Errcode = 'Errcode' in params ? params.Errcode : null;
        this.Errmsg = 'Errmsg' in params ? params.Errmsg : null;
        this.Livestatus = 'Livestatus' in params ? params.Livestatus : null;
        this.Livemsg = 'Livemsg' in params ? params.Livemsg : null;
        this.Comparestatus = 'Comparestatus' in params ? params.Comparestatus : null;
        this.Comparemsg = 'Comparemsg' in params ? params.Comparemsg : null;
        this.CompareLibType = 'CompareLibType' in params ? params.CompareLibType : null;

    }
}

/**
 * GetFaceIdResult返回参数结构体
 * @class
 */
class GetFaceIdResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份证
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 业务核验结果，参考https://cloud.tencent.com/document/product/1007/47912
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务核验描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 相似度，0-100，数值越大相似度越高
         * @type {number || null}
         */
        this.Similarity = null;

        /**
         * 用户核验的视频
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VideoBase64 = null;

        /**
         * 用户核验视频的截帧
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BestFrameBase64 = null;

        /**
         * 获取token时透传的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Extra = null;

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
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Similarity = 'Similarity' in params ? params.Similarity : null;
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EncryptedPhoneVerification请求参数结构体
 * @class
 */
class EncryptedPhoneVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份证号，加密方式以EncryptionMode为准
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名，加密方式以EncryptionMode为准
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 手机号，加密方式以EncryptionMode为准
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 敏感信息的加密方式，目前只支持MD5加密传输，参数取值：

0：明文，不加密
1：使用MD5加密
         * @type {string || null}
         */
        this.EncryptionMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.EncryptionMode = 'EncryptionMode' in params ? params.EncryptionMode : null;

    }
}

/**
 * GetRealNameAuthResult返回参数结构体
 * @class
 */
class GetRealNameAuthResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码，收费情况如下：

收费码：
0:  姓名和身份证号一致
-1: 姓名和身份证号不一致
-2: 姓名和微信实名姓名不一致

不收费码：
-3: 微信号未实名
         * @type {string || null}
         */
        this.ResultType = null;

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
        this.ResultType = 'ResultType' in params ? params.ResultType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EncryptedPhoneVerification返回参数结构体
 * @class
 */
class EncryptedPhoneVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码:
【收费结果码】
0: 认证通过
-4: 信息不一致

【不收费结果码】
-7: 身份证号码有误
-9: 没有记录
-11: 验证中心服务繁忙
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
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

module.exports = {
    DetectInfoVideoData: DetectInfoVideoData,
    GetDetectInfoEnhancedRequest: GetDetectInfoEnhancedRequest,
    GetFaceIdTokenRequest: GetFaceIdTokenRequest,
    LivenessRequest: LivenessRequest,
    Encryption: Encryption,
    CheckBankCardInformationRequest: CheckBankCardInformationRequest,
    MobileNetworkTimeVerificationResponse: MobileNetworkTimeVerificationResponse,
    GetLiveCodeRequest: GetLiveCodeRequest,
    GetEidResultResponse: GetEidResultResponse,
    IdCardVerificationRequest: IdCardVerificationRequest,
    BankCardVerificationRequest: BankCardVerificationRequest,
    CheckBankCardInformationResponse: CheckBankCardInformationResponse,
    DetectInfoBestFrame: DetectInfoBestFrame,
    CheckIdCardInformationResponse: CheckIdCardInformationResponse,
    GetDetectInfoEnhancedResponse: GetDetectInfoEnhancedResponse,
    PhoneVerificationRequest: PhoneVerificationRequest,
    GetEidResultRequest: GetEidResultRequest,
    DetectAuthResponse: DetectAuthResponse,
    PhoneVerificationResponse: PhoneVerificationResponse,
    GetEidTokenRequest: GetEidTokenRequest,
    IdCardOCRVerificationRequest: IdCardOCRVerificationRequest,
    CheckPhoneAndNameResponse: CheckPhoneAndNameResponse,
    BankCard4EVerificationResponse: BankCard4EVerificationResponse,
    MobileStatusRequest: MobileStatusRequest,
    GetRealNameAuthTokenRequest: GetRealNameAuthTokenRequest,
    BankCard2EVerificationRequest: BankCard2EVerificationRequest,
    LivenessRecognitionRequest: LivenessRecognitionRequest,
    EidInfo: EidInfo,
    GetFaceIdTokenResponse: GetFaceIdTokenResponse,
    GetEidTokenConfig: GetEidTokenConfig,
    MobileStatusResponse: MobileStatusResponse,
    IdCardOCRVerificationResponse: IdCardOCRVerificationResponse,
    GetRealNameAuthTokenResponse: GetRealNameAuthTokenResponse,
    LivenessResponse: LivenessResponse,
    CheckIdCardInformationRequest: CheckIdCardInformationRequest,
    DetectInfoText: DetectInfoText,
    DetectAuthRequest: DetectAuthRequest,
    MinorsVerificationResponse: MinorsVerificationResponse,
    BankCardVerificationResponse: BankCardVerificationResponse,
    GetRealNameAuthResultRequest: GetRealNameAuthResultRequest,
    ImageRecognitionRequest: ImageRecognitionRequest,
    BankCard4EVerificationRequest: BankCard4EVerificationRequest,
    MobileNetworkTimeVerificationRequest: MobileNetworkTimeVerificationRequest,
    GetFaceIdResultRequest: GetFaceIdResultRequest,
    GetActionSequenceResponse: GetActionSequenceResponse,
    LivenessRecognitionResponse: LivenessRecognitionResponse,
    MinorsVerificationRequest: MinorsVerificationRequest,
    ImageRecognitionResponse: ImageRecognitionResponse,
    GetActionSequenceRequest: GetActionSequenceRequest,
    GetDetectInfoResponse: GetDetectInfoResponse,
    LivenessCompareResponse: LivenessCompareResponse,
    GetLiveCodeResponse: GetLiveCodeResponse,
    GetDetectInfoRequest: GetDetectInfoRequest,
    BankCard2EVerificationResponse: BankCard2EVerificationResponse,
    IdCardVerificationResponse: IdCardVerificationResponse,
    DetectInfoIdCardData: DetectInfoIdCardData,
    CheckPhoneAndNameRequest: CheckPhoneAndNameRequest,
    GetEidTokenResponse: GetEidTokenResponse,
    LivenessCompareRequest: LivenessCompareRequest,
    DetectDetail: DetectDetail,
    GetFaceIdResultResponse: GetFaceIdResultResponse,
    EncryptedPhoneVerificationRequest: EncryptedPhoneVerificationRequest,
    GetRealNameAuthResultResponse: GetRealNameAuthResultResponse,
    EncryptedPhoneVerificationResponse: EncryptedPhoneVerificationResponse,

}
