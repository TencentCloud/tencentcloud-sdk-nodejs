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
         * 已弃用。
         * @type {boolean || null}
         */
        this.IsEncrypt = null;

        /**
         * 是否需要对返回中的敏感信息进行加密。仅指定加密算法Algorithm即可，其余字段传入默认值。其中敏感信息包括：Response.Text.IdCard、Response.Text.Name、Response.Text.OcrIdCard、Response.Text.OcrName
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
        this.BizToken = 'BizToken' in params ? params.BizToken : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.InfoType = 'InfoType' in params ? params.InfoType : null;
        this.BestFramesCount = 'BestFramesCount' in params ? params.BestFramesCount : null;
        this.IsCutIdCardImage = 'IsCutIdCardImage' in params ? params.IsCutIdCardImage : null;
        this.IsNeedIdCardAvatar = 'IsNeedIdCardAvatar' in params ? params.IsNeedIdCardAvatar : null;
        this.IsEncrypt = 'IsEncrypt' in params ? params.IsEncrypt : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

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
         * CompareLib为商业库时必传。
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

        /**
         * 默认为false，设置该参数为true后，核身过程中的视频图片将会存储在人脸核身控制台授权cos的bucket中，拉取结果时会返回对应资源完整cos地址。开通地址见https://console.cloud.tencent.com/faceid/cos
【注意】选择该参数为true后将不返回base64数据，请根据接入情况谨慎修改。
         * @type {boolean || null}
         */
        this.UseCos = null;

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
        this.CompareLib = 'CompareLib' in params ? params.CompareLib : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.Meta = 'Meta' in params ? params.Meta : null;
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.UseCos = 'UseCos' in params ? params.UseCos : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

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
 * RuleId相关配置
 * @class
 */
class RuleIdConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意愿核身过程中识别用户的回答意图，开启后除了IntentionQuestions的Answers列表中的标准回答会通过，近似意图的回答也会通过，默认不开启。
         * @type {boolean || null}
         */
        this.IntentionRecognition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentionRecognition = 'IntentionRecognition' in params ? params.IntentionRecognition : null;

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
         * 在使用加密服务时，填入要被加密的字段。本接口中可填入加密后的一个或多个字段
         * @type {Array.<string> || null}
         */
        this.EncryptList = null;

        /**
         * 有加密需求的用户，接入传入kms的CiphertextBlob，关于数据加密可查阅<a href="https://cloud.tencent.com/document/product/1007/47180">数据加密</a> 文档。
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * 有加密需求的用户，传入CBC加密的初始向量（客户自定义字符串，长度16字符）。
         * @type {string || null}
         */
        this.Iv = null;

        /**
         * 加密使用的算法（支持'AES-256-CBC'、'SM4-GCM'），不传默认为'AES-256-CBC'
         * @type {string || null}
         */
        this.Algorithm = null;

        /**
         * SM4-GCM算法生成的消息摘要（校验消息完整性时使用）
         * @type {Array.<string> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EncryptList = 'EncryptList' in params ? params.EncryptList : null;
        this.CiphertextBlob = 'CiphertextBlob' in params ? params.CiphertextBlob : null;
        this.Iv = 'Iv' in params ? params.Iv : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.TagList = 'TagList' in params ? params.TagList : null;

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

        /**
         * 敏感数据加密信息。对传入信息（银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。
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
        this.BankCard = 'BankCard' in params ? params.BankCard : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

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
 * CheckIdNameDate返回参数结构体
 * @class
 */
class CheckIdNameDateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码，收费情况如下。
收费结果码：
0: 一致
-1: 不一致
不收费结果码：
-2: 非法身份证号（长度、校验位等不正确）
-3: 非法姓名（长度、格式等不正确）
-4: 非法有效期（长度、格式等不正确）
-5: 身份信息无效
-6: 证件库服务异常
-7: 证件库中无此身份证记录
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

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

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
目前默认：0 身份证，其他证件类型需求可以添加[腾讯云人脸核身小助手](https://cloud.tencent.com/document/product/1007/56130)进行确认。
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
不收费结果码：
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
         * 卡性质：1. 借记卡；2. 贷记卡；3. 预付费卡；4. 准贷记卡
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
         * 活体比对最佳帧Base64编码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BestFrame = null;

        /**
         * 自截帧Base64编码数组。
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
 * 账单详情
 * @class
 */
class WeChatBillDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * token
         * @type {string || null}
         */
        this.BizToken = null;

        /**
         * 本token收费次数
         * @type {number || null}
         */
        this.ChargeCount = null;

        /**
         * 本token计费详情
         * @type {Array.<ChargeDetail> || null}
         */
        this.ChargeDetails = null;

        /**
         * 业务RuleId
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizToken = 'BizToken' in params ? params.BizToken : null;
        this.ChargeCount = 'ChargeCount' in params ? params.ChargeCount : null;

        if (params.ChargeDetails) {
            this.ChargeDetails = new Array();
            for (let z in params.ChargeDetails) {
                let obj = new ChargeDetail();
                obj.deserialize(params.ChargeDetails[z]);
                this.ChargeDetails.push(obj);
            }
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

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

        /**
         * 是否使用意愿核身，默认不使用。注意：如开启使用，则计费标签按【意愿核身】计费标签计价；如不开启，则计费标签按【E证通】计费标签计价，价格详见：[价格说明](https://cloud.tencent.com/document/product/1007/56804)。
         * @type {boolean || null}
         */
        this.UseIntentionVerify = null;

        /**
         * 意愿核身模式。枚举值：1( 朗读模式)，2（问答模式） 。默认值1
         * @type {string || null}
         */
        this.IntentionMode = null;

        /**
         * 意愿核身朗读模式使用的文案，若未使用意愿核身朗读功能，该字段无需传入。默认为空，最长可接受120的字符串长度。
         * @type {string || null}
         */
        this.IntentionVerifyText = null;

        /**
         * 意愿核身问答模式的配置列表。当前仅支持一个问答。
         * @type {Array.<IntentionQuestion> || null}
         */
        this.IntentionQuestions = null;

        /**
         * 意愿核身过程中识别用户的回答意图，开启后除了IntentionQuestions的Answers列表中的标准回答会通过，近似意图的回答也会通过，默认不开启。
         * @type {boolean || null}
         */
        this.IntentionRecognition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.UseIntentionVerify = 'UseIntentionVerify' in params ? params.UseIntentionVerify : null;
        this.IntentionMode = 'IntentionMode' in params ? params.IntentionMode : null;
        this.IntentionVerifyText = 'IntentionVerifyText' in params ? params.IntentionVerifyText : null;

        if (params.IntentionQuestions) {
            this.IntentionQuestions = new Array();
            for (let z in params.IntentionQuestions) {
                let obj = new IntentionQuestion();
                obj.deserialize(params.IntentionQuestions[z]);
                this.IntentionQuestions.push(obj);
            }
        }
        this.IntentionRecognition = 'IntentionRecognition' in params ? params.IntentionRecognition : null;

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

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }
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
         * 意愿核身相关信息。若未使用意愿核身功能，该字段返回值可以不处理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IntentionVerifyData || null}
         */
        this.IntentionVerifyData = null;

        /**
         * 意愿核身问答模式结果。若未使用该意愿核身功能，该字段返回值可以不处理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IntentionQuestionResult || null}
         */
        this.IntentionQuestionResult = null;

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

        if (params.IntentionVerifyData) {
            let obj = new IntentionVerifyData();
            obj.deserialize(params.IntentionVerifyData)
            this.IntentionVerifyData = obj;
        }

        if (params.IntentionQuestionResult) {
            let obj = new IntentionQuestionResult();
            obj.deserialize(params.IntentionQuestionResult)
            this.IntentionQuestionResult = obj;
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
         * 有加密需求的用户，传入kms的CiphertextBlob，关于数据加密可查阅 <a href="https://cloud.tencent.com/document/product/1007/47180">数据加密</a> 文档。
         * @type {string || null}
         */
        this.CiphertextBlob = null;

        /**
         * 在使用加密服务时，填入要被加密的字段。本接口中可填入加密后的IdCard，Name，Phone中的一个或多个。
         * @type {Array.<string> || null}
         */
        this.EncryptList = null;

        /**
         * 有加密需求的用户，传入CBC加密的初始向量。
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
 * PhoneVerificationCMCC请求参数结构体
 * @class
 */
class PhoneVerificationCMCCRequest extends  AbstractModel {
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
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Phone = 'Phone' in params ? params.Phone : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

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
         * E证通流程的唯一标识，调用GetEidToken接口时生成。
         * @type {string || null}
         */
        this.EidToken = null;

        /**
         * 指定拉取的结果信息，取值（0：全部；1：文本类；2：身份证信息；3：最佳截图信息；5：意愿核身朗读模式相关结果；6：意愿核身问答模式相关结果）。
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
0: 三要素信息一致
-4: 三要素信息不一致
不收费结果码
-6: 手机号码不合法
-7: 身份证号码有误
-8: 姓名校验不通过
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
         * 运营商名称。
取值范围为["","移动","电信","联通"]
         * @type {string || null}
         */
        this.Isp = null;

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
        this.Isp = 'Isp' in params ? params.Isp : null;
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
         * 小程序模式配置，包括如何传入姓名身份证的配置，以及是否使用意愿核身。
         * @type {GetEidTokenConfig || null}
         */
        this.Config = null;

        /**
         * 最长长度1024位。用户从Url中进入核身认证结束后重定向的回调链接地址。EidToken会在该链接的query参数中。
         * @type {string || null}
         */
        this.RedirectUrl = null;

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
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

        if (params.Config) {
            let obj = new GetEidTokenConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

    }
}

/**
 * 意愿核身问答模式结果
 * @class
 */
class IntentionQuestionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意愿核身最终结果：
0：认证通过，-1：认证未通过，-2：浏览器内核不兼容，无法进行意愿校验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FinalResultCode = null;

        /**
         * 视频base64（其中包含全程问题和回答音频，mp4格式）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Video = null;

        /**
         * 屏幕截图base64列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ScreenShot = null;

        /**
         * 和答案匹配结果列表
0：成功，-1：不匹配
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ResultCode = null;

        /**
         * 回答问题语音识别结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AsrResult = null;

        /**
         * 答案录音音频
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Audios = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FinalResultCode = 'FinalResultCode' in params ? params.FinalResultCode : null;
        this.Video = 'Video' in params ? params.Video : null;
        this.ScreenShot = 'ScreenShot' in params ? params.ScreenShot : null;
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;
        this.AsrResult = 'AsrResult' in params ? params.AsrResult : null;
        this.Audios = 'Audios' in params ? params.Audios : null;

    }
}

/**
 * GetWeChatBillDetails返回参数结构体
 * @class
 */
class GetWeChatBillDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否还有下一页。该字段为true时，需要将NextCursor的值作为入参Cursor继续调用本接口。
         * @type {boolean || null}
         */
        this.HasNextPage = null;

        /**
         * 下一页的游标。用于分页。
         * @type {number || null}
         */
        this.NextCursor = null;

        /**
         * 数据
         * @type {Array.<WeChatBillDetail> || null}
         */
        this.WeChatBillDetails = null;

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
        this.HasNextPage = 'HasNextPage' in params ? params.HasNextPage : null;
        this.NextCursor = 'NextCursor' in params ? params.NextCursor : null;

        if (params.WeChatBillDetails) {
            this.WeChatBillDetails = new Array();
            for (let z in params.WeChatBillDetails) {
                let obj = new WeChatBillDetail();
                obj.deserialize(params.WeChatBillDetails[z]);
                this.WeChatBillDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ParseNfcData返回参数结构体
 * @class
 */
class ParseNfcDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0为首次查询成功，-1为查询失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultCode = null;

        /**
         * 身份证号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdNum = null;

        /**
         * 姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 照片
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Picture = null;

        /**
         * 出生日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BirthDate = null;

        /**
         * 有效期起始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 有效期结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 住址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 民族
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * 性别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 身份证 01 中国护照 03 军官证 04 武警证 05 港澳通行证 06 台胞证 07 外国护照 08 士兵证 09 临时身份证 10 户口本 11 警官证 12 外国人永久居留证 13 港澳台居民居住证 14 回乡证 15 大陆居民来往台湾通行证 16 其他证件 99
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdType = null;

        /**
         * 英文姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnName = null;

        /**
         * 签发机关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SigningOrganization = null;

        /**
         * 港澳台居民居住证，通行证号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OtherIdNum = null;

        /**
         * 旅行证件国籍
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * 旅行证件机读区第二行 29~42 位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PersonalNumber = null;

        /**
         * 旅行证件类的核验结果。JSON格式如下：
{"result_issuer ":"签发者证书合法性验证结果 ","result_pape r":"证件安全对象合法性验证 结果 ","result_data" :"防数据篡改验证结果 ","result_chip" :"防证书件芯片被复制验证结果"} 
 0:验证通过，1: 验证不通过，2: 未验证，3:部分通过，当4项核验结果都为0时，表示证件为真
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckMRTD = null;

        /**
         * 身份证照片面合成图片
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageA = null;

        /**
         * 身份证国徽面合成图片
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageB = null;

        /**
         * 对result code的结果描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultDescription = null;

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
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;
        this.IdNum = 'IdNum' in params ? params.IdNum : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Picture = 'Picture' in params ? params.Picture : null;
        this.BirthDate = 'BirthDate' in params ? params.BirthDate : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.IdType = 'IdType' in params ? params.IdType : null;
        this.EnName = 'EnName' in params ? params.EnName : null;
        this.SigningOrganization = 'SigningOrganization' in params ? params.SigningOrganization : null;
        this.OtherIdNum = 'OtherIdNum' in params ? params.OtherIdNum : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.PersonalNumber = 'PersonalNumber' in params ? params.PersonalNumber : null;
        this.CheckMRTD = 'CheckMRTD' in params ? params.CheckMRTD : null;
        this.ImageA = 'ImageA' in params ? params.ImageA : null;
        this.ImageB = 'ImageB' in params ? params.ImageB : null;
        this.ResultDescription = 'ResultDescription' in params ? params.ResultDescription : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckIdNameDate请求参数结构体
 * @class
 */
class CheckIdNameDateRequest extends  AbstractModel {
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
        this.IdCard = null;

        /**
         * 身份证有效期开始时间，格式：YYYYMMDD。如：20210701
         * @type {string || null}
         */
        this.ValidityBegin = null;

        /**
         * 身份证有效期到期时间，格式：YYYYMMDD，长期用“00000000”代替；如：20210701
         * @type {string || null}
         */
        this.ValidityEnd = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.ValidityBegin = 'ValidityBegin' in params ? params.ValidityBegin : null;
        this.ValidityEnd = 'ValidityEnd' in params ? params.ValidityEnd : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

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

        /**
         * 敏感数据加密信息。对传入信息（姓名、银行卡号）有加密需求的用户可使用此参数，详情请点击左侧链接。
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

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

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
         * 活体检测类型，取值：LIP/ACTION/SILENT。
LIP为数字模式，ACTION为动作模式，SILENT为静默模式，三种模式选择一种传入。
         * @type {string || null}
         */
        this.LivenessType = null;

        /**
         * 用于活体检测的视频，视频的BASE64值；
BASE64编码后的大小不超过8M，支持mp4、avi、flv格式。
         * @type {string || null}
         */
        this.VideoBase64 = null;

        /**
         * 用于活体检测的视频Url 地址。视频下载后经Base64编码不超过 8M，视频下载耗时不超过4S，支持mp4、avi、flv格式。

视频的 VideoUrl、VideoBase64 必须提供一个，如果都提供，只使用 VideoBase64。

建议视频存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议视频存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * 数字模式传参：传数字验证码，验证码需先调用<a href="https://cloud.tencent.com/document/product/1007/31821">获取数字验证码接口</a>得到；
动作模式传参：传动作顺序，动作顺序需先调用<a href="https://cloud.tencent.com/document/product/1007/31822">获取动作顺序接口</a>得到；
静默模式传参：空。
         * @type {string || null}
         */
        this.ValidateData = null;

        /**
         * 额外配置，传入JSON字符串。
{
"BestFrameNum": 2  //需要返回多张最佳截图，取值范围2-10
}
         * @type {string || null}
         */
        this.Optional = null;

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
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;
        this.Optional = 'Optional' in params ? params.Optional : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

    }
}

/**
 * Eid出参，包括商户方用户的标识和加密的用户姓名身份证信息。
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
         * Eid中心针对商户方EidCode的电子签名
         * @type {string || null}
         */
        this.EidSign = null;

        /**
         * 商户方公钥加密的会话密钥的base64字符串，[指引详见](https://cloud.tencent.com/document/product/1007/63370)
         * @type {string || null}
         */
        this.DesKey = null;

        /**
         * 会话密钥sm2加密后的base64字符串，[指引详见](https://cloud.tencent.com/document/product/1007/63370)
         * @type {string || null}
         */
        this.UserInfo = null;

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
        this.DesKey = 'DesKey' in params ? params.DesKey : null;
        this.UserInfo = 'UserInfo' in params ? params.UserInfo : null;

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
 * PhoneVerificationCMCC返回参数结构体
 * @class
 */
class PhoneVerificationCMCCResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码，收费情况如下。
收费结果码：
0: 认证通过
-4: 信息不一致（手机号已实名，但姓名和身份证号与实名信息不一致）
不收费结果码：
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
         * 运营商名称。
取值范围为["移动","联通","电信",""]
         * @type {string || null}
         */
        this.Isp = null;

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
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckEidTokenStatus返回参数结构体
 * @class
 */
class CheckEidTokenStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 枚举：
init：token未验证
doing: 验证中
finished: 验证完成
timeout: token已超时
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
 * PhoneVerificationCTCC返回参数结构体
 * @class
 */
class PhoneVerificationCTCCResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码，收费情况如下。
收费结果码：
0: 认证通过
-4: 信息不一致（手机号已实名，但姓名和身份证号与实名信息不一致）
不收费结果码：
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
         * 运营商名称。
取值范围为["移动","联通","电信",""]
         * @type {string || null}
         */
        this.Isp = null;

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
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * PhoneVerificationCTCC请求参数结构体
 * @class
 */
class PhoneVerificationCTCCRequest extends  AbstractModel {
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
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Phone = 'Phone' in params ? params.Phone : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

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
-6: 权威比对系统升级中，请稍后再试
-7: 认证次数超过当日限制
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
 * 计费详情
 * @class
 */
class ChargeDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一比一时间时间戳，13位。
         * @type {string || null}
         */
        this.ReqTime = null;

        /**
         * 一比一请求的唯一标记。
         * @type {string || null}
         */
        this.Seq = null;

        /**
         * 一比一时使用的、脱敏后的身份证号。
         * @type {string || null}
         */
        this.Idcard = null;

        /**
         * 一比一时使用的、脱敏后的姓名。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 一比一的相似度。0-100，保留2位小数。
         * @type {string || null}
         */
        this.Sim = null;

        /**
         * 本次详情是否收费。
         * @type {boolean || null}
         */
        this.IsNeedCharge = null;

        /**
         * 收费类型，比对、核身、混合部署。
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 本次活体一比一最终结果。
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 本次活体一比一最终结果描述。
         * @type {string || null}
         */
        this.ErrorMessage = null;

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
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

    }
}

/**
 * ParseNfcData请求参数结构体
 * @class
 */
class ParseNfcDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 前端SDK返回
         * @type {string || null}
         */
        this.ReqId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReqId = 'ReqId' in params ? params.ReqId : null;

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

        /**
         * 是否需要对返回中的敏感信息进行加密。默认false。
其中敏感信息包括：Response.IdNum、Response.Name
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.IsEncrypt = 'IsEncrypt' in params ? params.IsEncrypt : null;

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
         * 身份校验环节识别结果：民族。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrNation = null;

        /**
         * 身份校验环节识别结果：家庭住址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrAddress = null;

        /**
         * 身份校验环节识别结果：生日。格式为：YYYY/M/D
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrBirth = null;

        /**
         * 身份校验环节识别结果：签发机关。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrAuthority = null;

        /**
         * 身份校验环节识别结果：有效日期。格式为：YYYY.MM.DD-YYYY.MM.DD
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrValidDate = null;

        /**
         * 身份校验环节识别结果：姓名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrName = null;

        /**
         * 身份校验环节识别结果：身份证号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrIdCard = null;

        /**
         * 身份校验环节识别结果：性别。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrGender = null;

        /**
         * 身份校验环节采用的信息上传方式。
取值有"NFC"、"OCR"、"手动输入"、"其他"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdInfoFrom = null;

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

        /**
         * 本次流程最终活体类型。包括：
0：未知
1：数字活体
2：动作活体
3：静默活体
4：一闪活体（动作+光线）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LivenessMode = null;

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
        this.IdInfoFrom = 'IdInfoFrom' in params ? params.IdInfoFrom : null;
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
        this.LivenessMode = 'LivenessMode' in params ? params.LivenessMode : null;

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
         * 用于细分客户使用场景，申请开通服务后，可以在腾讯云慧眼人脸核身控制台（https://console.cloud.tencent.com/faceid） 自助接入里面创建，审核通过后即可调用。如有疑问，请添加[腾讯云人脸核身小助手](https://cloud.tencent.com/document/product/1007/56130)进行咨询。
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

        /**
         * 意愿核身（朗读模式）使用的文案，若未使用意愿核身（朗读模式），则该字段无需传入。默认为空，最长可接受120的字符串长度。
         * @type {string || null}
         */
        this.IntentionVerifyText = null;

        /**
         * 意愿核身（问答模式）使用的文案，包括：系统语音播报的文本、需要核验的标准文本。当前仅支持一个播报文本+回答文本。
         * @type {Array.<IntentionQuestion> || null}
         */
        this.IntentionQuestions = null;

        /**
         * RuleId相关配置
         * @type {RuleIdConfig || null}
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
        this.IntentionVerifyText = 'IntentionVerifyText' in params ? params.IntentionVerifyText : null;

        if (params.IntentionQuestions) {
            this.IntentionQuestions = new Array();
            for (let z in params.IntentionQuestions) {
                let obj = new IntentionQuestion();
                obj.deserialize(params.IntentionQuestions[z]);
                this.IntentionQuestions.push(obj);
            }
        }

        if (params.Config) {
            let obj = new RuleIdConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
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
 * GetWeChatBillDetails请求参数结构体
 * @class
 */
class GetWeChatBillDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取的日期（YYYY-MM-DD）。最大可追溯到365天前。当天6点后才能拉取前一天的数据。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 游标。用于分页，取第一页时传0，取后续页面时，传入本接口响应中返回的NextCursor字段的值。
         * @type {number || null}
         */
        this.Cursor = null;

        /**
         * 需要拉取账单详情业务对应的RuleId。不传会返回所有RuleId数据。默认为空字符串。
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.Cursor = 'Cursor' in params ? params.Cursor : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * CheckEidTokenStatus请求参数结构体
 * @class
 */
class CheckEidTokenStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * E证通流程的唯一标识，调用GetEidToken接口时生成。
         * @type {string || null}
         */
        this.EidToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EidToken = 'EidToken' in params ? params.EidToken : null;

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
         * 文本类信息。（基于对敏感信息的保护，验证使用的姓名和身份证号统一通过加密后从Eidinfo参数中返回，如需获取请在控制台申请返回身份信息，详见[E证通获取实名信息指引](https://cloud.tencent.com/document/product/1007/63370)）
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
         * Eid信息。（包括商户下用户唯一标识以及加密后的姓名、身份证号信息。解密方式详见[E证通获取实名信息指引](https://cloud.tencent.com/document/product/1007/63370)）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EidInfo || null}
         */
        this.EidInfo = null;

        /**
         * 意愿核身朗读模式相关信息。若未使用意愿核身朗读功能，该字段返回值可以不处理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IntentionVerifyData || null}
         */
        this.IntentionVerifyData = null;

        /**
         * 意愿核身问答模式相关信息。若未使用意愿核身问答模式功能，该字段返回值可以不处理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IntentionQuestionResult || null}
         */
        this.IntentionQuestionResult = null;

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

        if (params.IntentionVerifyData) {
            let obj = new IntentionVerifyData();
            obj.deserialize(params.IntentionVerifyData)
            this.IntentionVerifyData = obj;
        }

        if (params.IntentionQuestionResult) {
            let obj = new IntentionQuestionResult();
            obj.deserialize(params.IntentionQuestionResult)
            this.IntentionQuestionResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.Optional = 'Optional' in params ? params.Optional : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

    }
}

/**
 * PhoneVerificationCUCC请求参数结构体
 * @class
 */
class PhoneVerificationCUCCRequest extends  AbstractModel {
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
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Phone = 'Phone' in params ? params.Phone : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

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
 * PhoneVerificationCUCC返回参数结构体
 * @class
 */
class PhoneVerificationCUCCResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码，收费情况如下。
收费结果码：
0: 认证通过
-4: 信息不一致（手机号已实名，但姓名和身份证号与实名信息不一致）
不收费结果码：
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
         * 运营商名称。
取值范围为["移动","联通","电信",""]
         * @type {string || null}
         */
        this.Isp = null;

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
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
-6: 权威比对系统升级中，请稍后再试
-7: 认证次数超过当日限制
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

        /**
         * 身份证人像面告警码，开启身份证告警功能后才会返回，返回数组中可能出现的告警码如下：
-9100 身份证有效日期不合法告警，
-9101 身份证边框不完整告警，
-9102 身份证复印件告警，
-9103 身份证翻拍告警，
-9105 身份证框内遮挡告警，
-9104 临时身份证告警，
-9106 身份证 PS 告警，
-9107 身份证反光告警。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.WarnInfos = null;

        /**
         * 身份证国徽面告警码，开启身份证告警功能后才会返回，返回数组中可能出现的告警码如下：
-9100 身份证有效日期不合法告警，
-9101 身份证边框不完整告警，
-9102 身份证复印件告警，
-9103 身份证翻拍告警，
-9105 身份证框内遮挡告警，
-9104 临时身份证告警，
-9106 身份证 PS 告警，
-9107 身份证反光告警。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.BackWarnInfos = null;

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
        this.WarnInfos = 'WarnInfos' in params ? params.WarnInfos : null;
        this.BackWarnInfos = 'BackWarnInfos' in params ? params.BackWarnInfos : null;

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

        /**
         * 敏感数据加密信息。对传入信息（姓名、手机号）有加密需求的用户可使用此参数，详情请点击左侧链接。
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
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Encryption) {
            let obj = new Encryption();
            obj.deserialize(params.Encryption)
            this.Encryption = obj;
        }

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
         * 一次核身流程的标识，有效时间为600秒；
完成核身后，可用该标识获取验证结果信息。
         * @type {string || null}
         */
        this.EidToken = null;

        /**
         * 发起核身流程的URL，用于H5场景核身。
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
        this.EidToken = 'EidToken' in params ? params.EidToken : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 意愿核身相关结果
 * @class
 */
class IntentionVerifyData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意愿确认环节中录制的视频（base64）。若不存在则为空字符串。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentionVerifyVideo = null;

        /**
         * 意愿确认环节中用户语音转文字的识别结果。若不存在则为空字符串。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AsrResult = null;

        /**
         * 意愿确认环节的结果码。当该结果码为0时，语音朗读的视频与语音识别结果才会返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 意愿确认环节的结果信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 意愿确认环节中录制视频的最佳帧（base64）。若不存在则为空字符串。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentionVerifyBestFrame = null;

        /**
         * 本次流程用户语音与传入文本比对的相似度分值，取值范围 [0.00, 100.00]。只有配置了相似度阈值后才进行语音校验并返回相似度分值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AsrResultSimilarity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentionVerifyVideo = 'IntentionVerifyVideo' in params ? params.IntentionVerifyVideo : null;
        this.AsrResult = 'AsrResult' in params ? params.AsrResult : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.IntentionVerifyBestFrame = 'IntentionVerifyBestFrame' in params ? params.IntentionVerifyBestFrame : null;
        this.AsrResultSimilarity = 'AsrResultSimilarity' in params ? params.AsrResultSimilarity : null;

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
         * 活体检测类型，取值：LIP/ACTION/SILENT。
LIP为数字模式，ACTION为动作模式，SILENT为静默模式，三种模式选择一种传入。
         * @type {string || null}
         */
        this.LivenessType = null;

        /**
         * 用于人脸比对的照片的Base64值；
Base64编码后的图片数据大小不超过3M，仅支持jpg、png格式。
请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。

图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageBase64。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 用于人脸比对照片的URL地址；图片下载后经Base64编码后的数据大小不超过3M，仅支持jpg、png格式。

图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageBase64。

图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 数字模式传参：传数字验证码，验证码需先调用<a href="https://cloud.tencent.com/document/product/1007/31821">获取数字验证码接口</a>得到；
动作模式传参：传动作顺序，动作顺序需先调用<a href="https://cloud.tencent.com/document/product/1007/31822">获取动作顺序接口</a>得到；
静默模式传参：空。
         * @type {string || null}
         */
        this.ValidateData = null;

        /**
         * 额外配置，传入JSON字符串。
{
"BestFrameNum": 2  //需要返回多张最佳截图，取值范围2-10
}
         * @type {string || null}
         */
        this.Optional = null;

        /**
         * 用于活体检测的视频，视频的Base64值；
Base64编码后的大小不超过8M，支持mp4、avi、flv格式。
请使用标准的Base64编码方式(带=补位)，编码规范参考RFC4648。

视频的 VideoUrl、VideoBase64 必须提供一个，如果都提供，只使用 VideoBase64。
         * @type {string || null}
         */
        this.VideoBase64 = null;

        /**
         * 用于活体检测的视频Url 地址。视频下载后经Base64编码后不超过 8M，视频下载耗时不超过4S，支持mp4、avi、flv格式。

视频的 VideoUrl、VideoBase64 必须提供一个，如果都提供，只使用 VideoBase64。

建议视频存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议视频存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.VideoUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;
        this.Optional = 'Optional' in params ? params.Optional : null;
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;

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

        /**
         * 枚举活体检测类型：
0：未知
1：数字活体
2：动作活体
3：静默活体
4：一闪活体（动作+光线）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LivenessMode = null;

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
        this.LivenessMode = 'LivenessMode' in params ? params.LivenessMode : null;

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
         * 用户核验的视频base64，如果选择了使用cos，返回完整cos地址如https://bucket.cos.ap-guangzhou.myqcloud.com/objectKey
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VideoBase64 = null;

        /**
         * 用户核验视频的截帧base64，如果选择了使用cos，返回完整cos地址如https://bucket.cos.ap-guangzhou.myqcloud.com/objectKey
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
         * 设备风险标签，仅错误码返回1007（设备疑似被劫持）时返回风险标签。标签说明：
202、5001：设备疑似被Root
203、5004：设备疑似被注入
205：设备疑似被Hook
206：设备疑似虚拟运行环境
5007、1005：设备疑似摄像头被劫持
8000：设备疑似存在异常篡改行为
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceInfoTag = null;

        /**
         * 行为风险标签，仅错误码返回1007（设备疑似被劫持）时返回风险标签。标签说明：
02：攻击风险
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskInfoTag = null;

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
        this.DeviceInfoTag = 'DeviceInfoTag' in params ? params.DeviceInfoTag : null;
        this.RiskInfoTag = 'RiskInfoTag' in params ? params.RiskInfoTag : null;
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
         * 敏感信息的加密方式，目前支持明文、MD5和SHA256加密传输，参数取值：

0：明文，不加密
1:   使用MD5加密
2:   使用SHA256
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
 * 意愿核身过程中播报的问题文本、用户回答的标准文本。
 * @class
 */
class IntentionQuestion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统播报的问题文本，问题最大长度为150个字符。
         * @type {string || null}
         */
        this.Question = null;

        /**
         * 用户答案的标准文本列表，用于识别用户回答的语音与标准文本是否一致。列表长度最大为50，单个答案长度限制10个字符。
         * @type {Array.<string> || null}
         */
        this.Answers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Question = 'Question' in params ? params.Question : null;
        this.Answers = 'Answers' in params ? params.Answers : null;

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
0:   三要素信息一致
-4:  三要素信息不一致

【不收费结果码】
-7: 身份证号码有误
-8: 参数错误
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
         * 运营商名称。
取值范围为["移动","联通","电信",""]
         * @type {string || null}
         */
        this.ISP = null;

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
        this.ISP = 'ISP' in params ? params.ISP : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DetectInfoVideoData: DetectInfoVideoData,
    GetDetectInfoEnhancedRequest: GetDetectInfoEnhancedRequest,
    GetFaceIdTokenRequest: GetFaceIdTokenRequest,
    LivenessRequest: LivenessRequest,
    RuleIdConfig: RuleIdConfig,
    Encryption: Encryption,
    CheckBankCardInformationRequest: CheckBankCardInformationRequest,
    MobileNetworkTimeVerificationResponse: MobileNetworkTimeVerificationResponse,
    GetLiveCodeRequest: GetLiveCodeRequest,
    CheckIdNameDateResponse: CheckIdNameDateResponse,
    IdCardVerificationRequest: IdCardVerificationRequest,
    BankCardVerificationRequest: BankCardVerificationRequest,
    CheckBankCardInformationResponse: CheckBankCardInformationResponse,
    DetectInfoBestFrame: DetectInfoBestFrame,
    WeChatBillDetail: WeChatBillDetail,
    GetEidTokenConfig: GetEidTokenConfig,
    CheckIdCardInformationResponse: CheckIdCardInformationResponse,
    GetDetectInfoEnhancedResponse: GetDetectInfoEnhancedResponse,
    PhoneVerificationRequest: PhoneVerificationRequest,
    PhoneVerificationCMCCRequest: PhoneVerificationCMCCRequest,
    GetEidResultRequest: GetEidResultRequest,
    DetectAuthResponse: DetectAuthResponse,
    PhoneVerificationResponse: PhoneVerificationResponse,
    GetEidTokenRequest: GetEidTokenRequest,
    IntentionQuestionResult: IntentionQuestionResult,
    GetWeChatBillDetailsResponse: GetWeChatBillDetailsResponse,
    CheckPhoneAndNameResponse: CheckPhoneAndNameResponse,
    BankCard4EVerificationResponse: BankCard4EVerificationResponse,
    MobileStatusRequest: MobileStatusRequest,
    IdCardOCRVerificationRequest: IdCardOCRVerificationRequest,
    LivenessRecognitionResponse: LivenessRecognitionResponse,
    ParseNfcDataResponse: ParseNfcDataResponse,
    CheckIdNameDateRequest: CheckIdNameDateRequest,
    BankCard2EVerificationRequest: BankCard2EVerificationRequest,
    LivenessRecognitionRequest: LivenessRecognitionRequest,
    EidInfo: EidInfo,
    GetFaceIdTokenResponse: GetFaceIdTokenResponse,
    PhoneVerificationCMCCResponse: PhoneVerificationCMCCResponse,
    CheckEidTokenStatusResponse: CheckEidTokenStatusResponse,
    PhoneVerificationCTCCResponse: PhoneVerificationCTCCResponse,
    MobileStatusResponse: MobileStatusResponse,
    PhoneVerificationCTCCRequest: PhoneVerificationCTCCRequest,
    IdCardOCRVerificationResponse: IdCardOCRVerificationResponse,
    ChargeDetail: ChargeDetail,
    ParseNfcDataRequest: ParseNfcDataRequest,
    LivenessResponse: LivenessResponse,
    CheckIdCardInformationRequest: CheckIdCardInformationRequest,
    DetectInfoText: DetectInfoText,
    DetectAuthRequest: DetectAuthRequest,
    MinorsVerificationResponse: MinorsVerificationResponse,
    GetWeChatBillDetailsRequest: GetWeChatBillDetailsRequest,
    CheckEidTokenStatusRequest: CheckEidTokenStatusRequest,
    GetEidResultResponse: GetEidResultResponse,
    ImageRecognitionRequest: ImageRecognitionRequest,
    PhoneVerificationCUCCRequest: PhoneVerificationCUCCRequest,
    BankCard4EVerificationRequest: BankCard4EVerificationRequest,
    MobileNetworkTimeVerificationRequest: MobileNetworkTimeVerificationRequest,
    GetFaceIdResultRequest: GetFaceIdResultRequest,
    PhoneVerificationCUCCResponse: PhoneVerificationCUCCResponse,
    GetActionSequenceResponse: GetActionSequenceResponse,
    BankCardVerificationResponse: BankCardVerificationResponse,
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
    IntentionVerifyData: IntentionVerifyData,
    LivenessCompareRequest: LivenessCompareRequest,
    DetectDetail: DetectDetail,
    GetFaceIdResultResponse: GetFaceIdResultResponse,
    EncryptedPhoneVerificationRequest: EncryptedPhoneVerificationRequest,
    IntentionQuestion: IntentionQuestion,
    EncryptedPhoneVerificationResponse: EncryptedPhoneVerificationResponse,

}
