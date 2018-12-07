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
 * GetDetectInfo请求参数结构体
 * @class
 */
class GetDetectInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务流水号
         * @type {string || null}
         */
        this.BizToken = null;

        /**
         * 规则Id。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 指定需要拉取何种信息（0：全部；1：文本类；2：身份证正反面；3：截帧（最佳帧）；4：视频）。可拼接。如 134表示拉取文本类、截帧（最佳帧）、视频
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
        this.BizToken = params.BizToken || null;
        this.RuleId = params.RuleId || null;
        this.InfoType = params.InfoType || null;

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
         * 规则Id。a-zA-Z0-9组合。最长长度32位。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 终端类型。可选值有：weixinh5, weixinh5native, h5, tinyappsdk, iossdk, androidsdk。只有值为"weixinh5"时会返回跳转URL。
         * @type {string || null}
         */
        this.TerminalType = null;

        /**
         * 身份证号或者是客户系统内部的唯一用户id。（传uid的时候只能使用ImageBase64传的照片进行一比一）a-zA-Z0-9组合。最长长度32位。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 姓名。最长长度32位。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 回调地址。最长长度1024位。
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * 额外参数，会在getDetectInfo时带回去。最长长度1024位。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 用于一比一时的照片base64。此时必须传入IdCard。
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
        this.RuleId = params.RuleId || null;
        this.TerminalType = params.TerminalType || null;
        this.IdCard = params.IdCard || null;
        this.Name = params.Name || null;
        this.RedirectUrl = params.RedirectUrl || null;
        this.Extra = params.Extra || null;
        this.ImageBase64 = params.ImageBase64 || null;

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
         * 用于跳转的URL。只能于微信中打开。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 业务流水号。在获取认证信息接口中作为BizToken传入
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
        this.Url = params.Url || null;
        this.BizToken = params.BizToken || null;
        this.RequestId = params.RequestId || null;

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
    "ErrMsg": null,       // 本次核身的错误信息。
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
  // 最佳帧照片Base64
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
        this.DetectInfo = params.DetectInfo || null;
        this.RequestId = params.RequestId || null;

    }
}

module.exports = {
    GetDetectInfoRequest: GetDetectInfoRequest,
    DetectAuthRequest: DetectAuthRequest,
    DetectAuthResponse: DetectAuthResponse,
    GetDetectInfoResponse: GetDetectInfoResponse,

}
