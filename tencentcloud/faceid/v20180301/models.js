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
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
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
0: 认证通过
-1: 手机号已实名，但是身份证和姓名均与实名信息不一致 
-2: 手机号已实名，手机号和证件号一致，姓名不一致
-3: 手机号已实名，手机号和姓名一致，身份证不一致
-4: 信息不一致
-5: 手机号未实名
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
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mobile = 'Mobile' in params ? params.Mobile : null;

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

/**
 * MobileNetworkTimeVerification请求参数结构体
 * @class
 */
class MobileNetworkTimeVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手机号码。不支持电信手机号。
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
        this.Mobile = 'Mobile' in params ? params.Mobile : null;

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
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Sim = 'Sim' in params ? params.Sim : null;
        this.Result = 'Result' in params ? params.Result : null;
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
-2: 手机号未实名
-3: 姓名和身份证号不一致

不收费结果码：
-4: 非法身份证号（长度、校验位等不正确）
-5: 非法姓名（长度、格式等不正确）
-6: 数据源服务异常
-7: 数据源中无此身份证记录
-8: 公安比对系统升级中，请稍后再试
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 业务结果描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 当结果码为0或者-1时，该字段的值为年龄区间。
格式为[a,b)，表示年龄在a岁以上（包括a岁），b岁以下（不包括b岁）。若b为+时表示没有上限。
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
目前默认：0 身份证，其他证件类型需求可以联系小助手faceid001确认。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.BankCard = 'BankCard' in params ? params.BankCard : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.CertType = 'CertType' in params ? params.CertType : null;

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
         * 手机号。11位数字。
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
        this.BestFrameBase64 = 'BestFrameBase64' in params ? params.BestFrameBase64 : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    MobileNetworkTimeVerificationResponse: MobileNetworkTimeVerificationResponse,
    LivenessRequest: LivenessRequest,
    LivenessCompareResponse: LivenessCompareResponse,
    GetLiveCodeRequest: GetLiveCodeRequest,
    IdCardVerificationRequest: IdCardVerificationRequest,
    BankCardVerificationRequest: BankCardVerificationRequest,
    PhoneVerificationRequest: PhoneVerificationRequest,
    DetectAuthResponse: DetectAuthResponse,
    PhoneVerificationResponse: PhoneVerificationResponse,
    IdCardOCRVerificationRequest: IdCardOCRVerificationRequest,
    BankCard4EVerificationResponse: BankCard4EVerificationResponse,
    MobileStatusRequest: MobileStatusRequest,
    BankCard2EVerificationRequest: BankCard2EVerificationRequest,
    LivenessRecognitionRequest: LivenessRecognitionRequest,
    MobileNetworkTimeVerificationRequest: MobileNetworkTimeVerificationRequest,
    LivenessRecognitionResponse: LivenessRecognitionResponse,
    MobileStatusResponse: MobileStatusResponse,
    IdCardOCRVerificationResponse: IdCardOCRVerificationResponse,
    DetectAuthRequest: DetectAuthRequest,
    MinorsVerificationResponse: MinorsVerificationResponse,
    BankCardVerificationResponse: BankCardVerificationResponse,
    ImageRecognitionRequest: ImageRecognitionRequest,
    BankCard4EVerificationRequest: BankCard4EVerificationRequest,
    GetActionSequenceResponse: GetActionSequenceResponse,
    MinorsVerificationRequest: MinorsVerificationRequest,
    ImageRecognitionResponse: ImageRecognitionResponse,
    GetActionSequenceRequest: GetActionSequenceRequest,
    GetDetectInfoResponse: GetDetectInfoResponse,
    GetLiveCodeResponse: GetLiveCodeResponse,
    GetDetectInfoRequest: GetDetectInfoRequest,
    BankCard2EVerificationResponse: BankCard2EVerificationResponse,
    IdCardVerificationResponse: IdCardVerificationResponse,
    LivenessCompareRequest: LivenessCompareRequest,
    LivenessResponse: LivenessResponse,

}
