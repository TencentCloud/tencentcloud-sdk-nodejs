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
 * Liveness请求参数结构体
 * @class
 */
class LivenessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于活体检测的视频，视频的BASE64值；
BASE64编码后的大小不超过5M，支持mp4、avi、flv格式。
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
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;
        this.Optional = 'Optional' in params ? params.Optional : null;

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
         * 业务错误描述
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
    "Location": null, // 地理位置信息
    "Extra": "",          // DetectAuth结果传进来的Extra信息
    "Detail": {           // 活体一比一信息详情
      "LivenessData": []
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
         * 业务错误描述
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
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 身份标识（与公安权威库比对时必须是身份证号）。
规则：a-zA-Z0-9组合。最长长度32位。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名。最长长度32位。中文请使用UTF-8编码。
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
         * 用于人脸比对的照片，图片的BASE64值；
BASE64编码后的图片数据大小不超过3M，仅支持jpg、png格式。
         * @type {string || null}
         */
        this.ImageBase64 = null;

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
 * IdCardVerification返回参数结构体
 * @class
 */
class IdCardVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码。
0: 姓名和身份证号一致
-1: 姓名和身份证号不一致
-2: 身份证号错误
-3: 姓名错误
-4: 认证出错
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 认证结果信息。
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
 * BankCardVerification返回参数结构体
 * @class
 */
class BankCardVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证结果码。
'0': '认证通过'
'-1': '认证未通过'
'-2': '姓名校验不通过'
'-3': '身份证号码有误'
'-4': '银行卡号码有误'
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
'-17': '服务繁忙'
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 认证结果信息。
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
         * 银行卡
         * @type {string || null}
         */
        this.BankCard = null;

        /**
         * 证件类型，请确认该证件为开户时使用的证件类型，未用于开户的证件信息不支持验证。（不填默认0）
0 身份证
1 军官证
2 护照
3 港澳证
4 台胞证
5 警官证
6 士兵证
7 其它证件
         * @type {number || null}
         */
        this.CertType = null;

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
         * 用于人脸比对的照片，图片的BASE64值；
BASE64编码后的图片数据大小不超过3M，仅支持jpg、png格式。
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
 * LivenessCompare请求参数结构体
 * @class
 */
class LivenessCompareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于人脸比对的照片，图片的BASE64值；
BASE64编码后的图片数据大小不超过3M，仅支持jpg、png格式。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 用于活体检测的视频，视频的BASE64值；
BASE64编码后的大小不超过5M，支持mp4、avi、flv格式。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;
        this.Optional = 'Optional' in params ? params.Optional : null;

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
         * @type {string || null}
         */
        this.BestFrameBase64 = null;

        /**
         * 业务错误码，成功情况返回Success, 错误情况请参考下方错误码 列表中FailedOperation部分
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务错误描述
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
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Result = 'Result' in params ? params.Result : null;
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
 * LivenessRecognition返回参数结构体
 * @class
 */
class LivenessRecognitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证通过后的视频最佳截图照片，照片为BASE64编码后的值，jpg格式。
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
         * 业务错误描述
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
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
BASE64编码后的大小不超过5M，支持mp4、avi、flv格式。
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
        this.VideoBase64 = 'VideoBase64' in params ? params.VideoBase64 : null;
        this.LivenessType = 'LivenessType' in params ? params.LivenessType : null;
        this.ValidateData = 'ValidateData' in params ? params.ValidateData : null;
        this.Optional = 'Optional' in params ? params.Optional : null;

    }
}

module.exports = {
    LivenessRequest: LivenessRequest,
    GetLiveCodeResponse: GetLiveCodeResponse,
    DetectAuthResponse: DetectAuthResponse,
    ImageRecognitionResponse: ImageRecognitionResponse,
    GetActionSequenceRequest: GetActionSequenceRequest,
    GetDetectInfoResponse: GetDetectInfoResponse,
    LivenessCompareResponse: LivenessCompareResponse,
    DetectAuthRequest: DetectAuthRequest,
    GetDetectInfoRequest: GetDetectInfoRequest,
    GetLiveCodeRequest: GetLiveCodeRequest,
    IdCardVerificationResponse: IdCardVerificationResponse,
    BankCardVerificationResponse: BankCardVerificationResponse,
    IdCardVerificationRequest: IdCardVerificationRequest,
    BankCardVerificationRequest: BankCardVerificationRequest,
    ImageRecognitionRequest: ImageRecognitionRequest,
    LivenessCompareRequest: LivenessCompareRequest,
    LivenessResponse: LivenessResponse,
    GetActionSequenceResponse: GetActionSequenceResponse,
    LivenessRecognitionResponse: LivenessRecognitionResponse,
    LivenessRecognitionRequest: LivenessRecognitionRequest,

}
