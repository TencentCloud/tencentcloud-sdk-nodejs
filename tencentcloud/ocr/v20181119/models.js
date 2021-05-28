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
 * VerifyBizLicense请求参数结构体
 * @class
 */
class VerifyBizLicenseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必须提供一个，如果都提供，只使用 ImageUrl。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必须提供一个，如果都提供，只使用 ImageUrl。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 用于入参是营业执照图片的场景，表示需要校验的参数：RegNum（注册号或者统一社会信用代码），Name（企业名称），Address（经营地址）。选择后会返回相关参数校验结果。RegNum为必选，Name和Address可选。
格式为{RegNum: true, Name:true/false, Address:true/false}

设置方式参考：
Config = Json.stringify({"Name":true,"Address":true})
API 3.0 Explorer 设置方式参考：
Config = {"Name":true,"Address":true}
         * @type {string || null}
         */
        this.ImageConfig = null;

        /**
         * 用于入参是文本的场景，RegNum表示注册号或者统一社会信用代码。若没有传入营业执照图片，则RegNum为必选项，若图片和RegNum都传入，则只使用RegNum。
         * @type {string || null}
         */
        this.RegNum = null;

        /**
         * 用于入参是文本的场景，Name表示企业名称。Name为可选项，填写后会返回Name的校验结果。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用于入参是文本的场景，Address表示经营地址，填写后会返回Address的校验结果。
         * @type {string || null}
         */
        this.Address = null;

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
        this.ImageConfig = 'ImageConfig' in params ? params.ImageConfig : null;
        this.RegNum = 'RegNum' in params ? params.RegNum : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;

    }
}

/**
 * BusinessCardOCR返回参数结构体
 * @class
 */
class BusinessCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名片识别结果，具体内容请点击左侧链接。
         * @type {Array.<BusinessCardInfo> || null}
         */
        this.BusinessCardInfos = null;

        /**
         * 返回图像预处理后的图片，图像预处理未开启时返回内容为空。
         * @type {string || null}
         */
        this.RetImageBase64 = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.BusinessCardInfos) {
            this.BusinessCardInfos = new Array();
            for (let z in params.BusinessCardInfos) {
                let obj = new BusinessCardInfo();
                obj.deserialize(params.BusinessCardInfos[z]);
                this.BusinessCardInfos.push(obj);
            }
        }
        this.RetImageBase64 = 'RetImageBase64' in params ? params.RetImageBase64 : null;
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 算式识别结果
 * @class
 */
class TextArithmetic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * 算式运算结果，true-正确   false-错误或非法参数
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 保留字段，暂不支持
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 原图文本行坐标，以四个顶点坐标表示（保留字段，暂不支持）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 保留字段，暂不支持
         * @type {string || null}
         */
        this.AdvancedInfo = null;

        /**
         * 文本行旋转纠正之后在图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
         * @type {ItemCoord || null}
         */
        this.ItemCoord = null;

        /**
         * 算式题型编号：
‘1’: 加减乘除四则
‘2’: 加减乘除已知结果求运算因子
‘3’: 判断大小
‘4’: 约等于估算
‘5’: 带余数除法
‘6’: 分数四则运算
‘7’: 单位换算
‘8’: 竖式加减法
‘9’: 竖式乘除法
‘10’: 脱式计算
‘11’: 解方程
         * @type {string || null}
         */
        this.ExpressionType = null;

        /**
         * 错题推荐答案，算式运算结果正确返回为""，算式运算结果错误返回推荐答案 (注：暂不支持多个关系运算符（如1<10<7）、无关系运算符（如frac(1,2)+frac(2,3)）、单位换算（如1元=100角）错题的推荐答案返回)
         * @type {string || null}
         */
        this.Answer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

        if (params.ItemCoord) {
            let obj = new ItemCoord();
            obj.deserialize(params.ItemCoord)
            this.ItemCoord = obj;
        }
        this.ExpressionType = 'ExpressionType' in params ? params.ExpressionType : null;
        this.Answer = 'Answer' in params ? params.Answer : null;

    }
}

/**
 * HKIDCardOCR请求参数结构体
 * @class
 */
class HKIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否鉴伪。
         * @type {boolean || null}
         */
        this.DetectFake = null;

        /**
         * 是否返回人像照片。
         * @type {boolean || null}
         */
        this.ReturnHeadImage = null;

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
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
        this.DetectFake = 'DetectFake' in params ? params.DetectFake : null;
        this.ReturnHeadImage = 'ReturnHeadImage' in params ? params.ReturnHeadImage : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * CarInvoiceOCR请求参数结构体
 * @class
 */
class CarInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 混贴票据单张发票识别信息
 * @class
 */
class MixedInvoiceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果。
OK：表示识别成功；FailedOperation.UnsupportedInvioce：表示不支持识别；
FailedOperation.UnKnowError：表示识别失败；
其它错误码见各个票据接口的定义。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 识别出的图片所属的票据类型。
-1：未知类型
0：出租车发票
1：定额发票
2：火车票
3：增值税发票
5：机票行程单
8：通用机打发票
9：汽车票
10：轮船票
11：增值税发票（卷票 ）
12：购车发票
13：过路过桥费发票
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 识别出的图片在混贴票据图片中的位置信息。与Angel结合可以得出原图位置，组成RotatedRect((X+0.5\*Width,Y+0.5\*Height), (Width, Height), Angle)，详情可参考OpenCV文档。
         * @type {Rect || null}
         */
        this.Rect = null;

        /**
         * 识别出的图片在混贴票据图片中的旋转角度。
         * @type {number || null}
         */
        this.Angle = null;

        /**
         * 识别到的内容。
         * @type {Array.<SingleInvoiceInfo> || null}
         */
        this.SingleInvoiceInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }
        this.Angle = 'Angle' in params ? params.Angle : null;

        if (params.SingleInvoiceInfos) {
            this.SingleInvoiceInfos = new Array();
            for (let z in params.SingleInvoiceInfos) {
                let obj = new SingleInvoiceInfo();
                obj.deserialize(params.SingleInvoiceInfos[z]);
                this.SingleInvoiceInfos.push(obj);
            }
        }

    }
}

/**
 * TrainTicketOCR请求参数结构体
 * @class
 */
class TrainTicketOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * EstateCertOCR返回参数结构体
 * @class
 */
class EstateCertOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权利人
         * @type {string || null}
         */
        this.Obligee = null;

        /**
         * 共有情况
         * @type {string || null}
         */
        this.Ownership = null;

        /**
         * 坐落
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 不动产单元号
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 权利类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 权利性质
         * @type {string || null}
         */
        this.Property = null;

        /**
         * 用途
         * @type {string || null}
         */
        this.Usage = null;

        /**
         * 面积
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 使用期限
         * @type {string || null}
         */
        this.Term = null;

        /**
         * 权利其他状况，多行会用换行符\n连接。
         * @type {string || null}
         */
        this.Other = null;

        /**
         * 图片旋转角度
         * @type {number || null}
         */
        this.Angle = null;

        /**
         * 不动产权号
         * @type {string || null}
         */
        this.Number = null;

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
        this.Obligee = 'Obligee' in params ? params.Obligee : null;
        this.Ownership = 'Ownership' in params ? params.Ownership : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Property = 'Property' in params ? params.Property : null;
        this.Usage = 'Usage' in params ? params.Usage : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Term = 'Term' in params ? params.Term : null;
        this.Other = 'Other' in params ? params.Other : null;
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FlightInvoiceOCR请求参数结构体
 * @class
 */
class FlightInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * MLIDPassportOCR请求参数结构体
 * @class
 */
class MLIDPassportOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 是否返回图片，默认false
         * @type {boolean || null}
         */
        this.RetImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.RetImage = 'RetImage' in params ? params.RetImage : null;

    }
}

/**
 * TextDetect返回参数结构体
 * @class
 */
class TextDetectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片中是否包含文字。
         * @type {boolean || null}
         */
        this.HasText = null;

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
        this.HasText = 'HasText' in params ? params.HasText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TollInvoiceOCR返回参数结构体
 * @class
 */
class TollInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过路过桥费发票识别结果，具体内容请点击左侧链接。
         * @type {Array.<TollInvoiceInfo> || null}
         */
        this.TollInvoiceInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.TollInvoiceInfos) {
            this.TollInvoiceInfos = new Array();
            for (let z in params.TollInvoiceInfos) {
                let obj = new TollInvoiceInfo();
                obj.deserialize(params.TollInvoiceInfos[z]);
                this.TollInvoiceInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyBizLicense返回参数结构体
 * @class
 */
class VerifyBizLicenseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态码
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 统一社会信用代码
         * @type {string || null}
         */
        this.CreditCode = null;

        /**
         * 组织机构代码
         * @type {string || null}
         */
        this.OrgCode = null;

        /**
         * 经营期限自（YYYY-MM-DD）
         * @type {string || null}
         */
        this.OpenFrom = null;

        /**
         * 经营期限至（YYYY-MM-DD）
         * @type {string || null}
         */
        this.OpenTo = null;

        /**
         * 法人姓名
         * @type {string || null}
         */
        this.FrName = null;

        /**
         * 经营状态，包括：成立、筹建、存续、在营、开业、在册、正常经营、开业登记中、登记成立、撤销、撤销登记、非正常户、告解、个体暂时吊销、个体转企业、吊销（未注销）、拟注销、已注销、（待）迁入、（待）迁出、停业、歇业、清算等。
         * @type {string || null}
         */
        this.EnterpriseStatus = null;

        /**
         * 经营（业务）范围及方式
         * @type {string || null}
         */
        this.OperateScopeAndForm = null;

        /**
         * 注册资金（单位:万元）
         * @type {string || null}
         */
        this.RegCap = null;

        /**
         * 注册币种
         * @type {string || null}
         */
        this.RegCapCur = null;

        /**
         * 登记机关
         * @type {string || null}
         */
        this.RegOrg = null;

        /**
         * 开业日期（YYYY-MM-DD）
         * @type {string || null}
         */
        this.EsDate = null;

        /**
         * 企业（机构）类型
         * @type {string || null}
         */
        this.EnterpriseType = null;

        /**
         * 注销日期
         * @type {string || null}
         */
        this.CancelDate = null;

        /**
         * 吊销日期
         * @type {string || null}
         */
        this.RevokeDate = null;

        /**
         * 许可经营项目
         * @type {string || null}
         */
        this.AbuItem = null;

        /**
         * 一般经营项目
         * @type {string || null}
         */
        this.CbuItem = null;

        /**
         * 核准时间
         * @type {string || null}
         */
        this.ApprDate = null;

        /**
         * 省
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 地级市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 区\县
         * @type {string || null}
         */
        this.County = null;

        /**
         * 住所所在行政区划代码
         * @type {string || null}
         */
        this.AreaCode = null;

        /**
         * 行业门类代码
         * @type {string || null}
         */
        this.IndustryPhyCode = null;

        /**
         * 行业门类名称
         * @type {string || null}
         */
        this.IndustryPhyName = null;

        /**
         * 国民经济行业代码
         * @type {string || null}
         */
        this.IndustryCode = null;

        /**
         * 国民经济行业名称
         * @type {string || null}
         */
        this.IndustryName = null;

        /**
         * 经营（业务）范围
         * @type {string || null}
         */
        this.OperateScope = null;

        /**
         * 要核验的工商注册号
         * @type {string || null}
         */
        this.VerifyRegNo = null;

        /**
         * 工商注册号
         * @type {string || null}
         */
        this.RegNo = null;

        /**
         * 要核验的企业名称
         * @type {string || null}
         */
        this.VerifyEnterpriseName = null;

        /**
         * 企业名称
         * @type {string || null}
         */
        this.EnterpriseName = null;

        /**
         * 要核验的注册地址
         * @type {string || null}
         */
        this.VerifyAddress = null;

        /**
         * 注册地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 验证结果
         * @type {BizLicenseVerifyResult || null}
         */
        this.RegNumResult = null;

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
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.CreditCode = 'CreditCode' in params ? params.CreditCode : null;
        this.OrgCode = 'OrgCode' in params ? params.OrgCode : null;
        this.OpenFrom = 'OpenFrom' in params ? params.OpenFrom : null;
        this.OpenTo = 'OpenTo' in params ? params.OpenTo : null;
        this.FrName = 'FrName' in params ? params.FrName : null;
        this.EnterpriseStatus = 'EnterpriseStatus' in params ? params.EnterpriseStatus : null;
        this.OperateScopeAndForm = 'OperateScopeAndForm' in params ? params.OperateScopeAndForm : null;
        this.RegCap = 'RegCap' in params ? params.RegCap : null;
        this.RegCapCur = 'RegCapCur' in params ? params.RegCapCur : null;
        this.RegOrg = 'RegOrg' in params ? params.RegOrg : null;
        this.EsDate = 'EsDate' in params ? params.EsDate : null;
        this.EnterpriseType = 'EnterpriseType' in params ? params.EnterpriseType : null;
        this.CancelDate = 'CancelDate' in params ? params.CancelDate : null;
        this.RevokeDate = 'RevokeDate' in params ? params.RevokeDate : null;
        this.AbuItem = 'AbuItem' in params ? params.AbuItem : null;
        this.CbuItem = 'CbuItem' in params ? params.CbuItem : null;
        this.ApprDate = 'ApprDate' in params ? params.ApprDate : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.County = 'County' in params ? params.County : null;
        this.AreaCode = 'AreaCode' in params ? params.AreaCode : null;
        this.IndustryPhyCode = 'IndustryPhyCode' in params ? params.IndustryPhyCode : null;
        this.IndustryPhyName = 'IndustryPhyName' in params ? params.IndustryPhyName : null;
        this.IndustryCode = 'IndustryCode' in params ? params.IndustryCode : null;
        this.IndustryName = 'IndustryName' in params ? params.IndustryName : null;
        this.OperateScope = 'OperateScope' in params ? params.OperateScope : null;
        this.VerifyRegNo = 'VerifyRegNo' in params ? params.VerifyRegNo : null;
        this.RegNo = 'RegNo' in params ? params.RegNo : null;
        this.VerifyEnterpriseName = 'VerifyEnterpriseName' in params ? params.VerifyEnterpriseName : null;
        this.EnterpriseName = 'EnterpriseName' in params ? params.EnterpriseName : null;
        this.VerifyAddress = 'VerifyAddress' in params ? params.VerifyAddress : null;
        this.Address = 'Address' in params ? params.Address : null;

        if (params.RegNumResult) {
            let obj = new BizLicenseVerifyResult();
            obj.deserialize(params.RegNumResult)
            this.RegNumResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FinanBillSliceOCR返回参数结构体
 * @class
 */
class FinanBillSliceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 金融票据切片识别结果，具体内容请点击左侧链接。
         * @type {Array.<FinanBillSliceInfo> || null}
         */
        this.FinanBillSliceInfos = null;

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

        if (params.FinanBillSliceInfos) {
            this.FinanBillSliceInfos = new Array();
            for (let z in params.FinanBillSliceInfos) {
                let obj = new FinanBillSliceInfo();
                obj.deserialize(params.FinanBillSliceInfos[z]);
                this.FinanBillSliceInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DriverLicenseOCR返回参数结构体
 * @class
 */
class DriverLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

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
         * 国籍
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * 住址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 出生日期（YYYY-MM-DD）
         * @type {string || null}
         */
        this.DateOfBirth = null;

        /**
         * 初次领证日期（YYYY-MM-DD）
         * @type {string || null}
         */
        this.DateOfFirstIssue = null;

        /**
         * 准驾车型
         * @type {string || null}
         */
        this.Class = null;

        /**
         * 有效期开始时间（YYYY-MM-DD）
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 有效期截止时间（YYYY-MM-DD）
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 证号
         * @type {string || null}
         */
        this.CardCode = null;

        /**
         * 档案编号
         * @type {string || null}
         */
        this.ArchivesCode = null;

        /**
         * 记录
         * @type {string || null}
         */
        this.Record = null;

        /**
         * Code 告警码列表和释义：
-9102  复印件告警
-9103  翻拍件告警
-9106  ps告警
注：告警码可以同时存在多个
         * @type {Array.<number> || null}
         */
        this.RecognizeWarnCode = null;

        /**
         * 告警码说明：
WARN_DRIVER_LICENSE_COPY_CARD 复印件告警
WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警
WARN_DRIVER_LICENSE_PS_CARD ps告警
注：告警信息可以同时存在多个
         * @type {Array.<string> || null}
         */
        this.RecognizeWarnMsg = null;

        /**
         * 发证单位
         * @type {string || null}
         */
        this.IssuingAuthority = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.DateOfBirth = 'DateOfBirth' in params ? params.DateOfBirth : null;
        this.DateOfFirstIssue = 'DateOfFirstIssue' in params ? params.DateOfFirstIssue : null;
        this.Class = 'Class' in params ? params.Class : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.CardCode = 'CardCode' in params ? params.CardCode : null;
        this.ArchivesCode = 'ArchivesCode' in params ? params.ArchivesCode : null;
        this.Record = 'Record' in params ? params.Record : null;
        this.RecognizeWarnCode = 'RecognizeWarnCode' in params ? params.RecognizeWarnCode : null;
        this.RecognizeWarnMsg = 'RecognizeWarnMsg' in params ? params.RecognizeWarnMsg : null;
        this.IssuingAuthority = 'IssuingAuthority' in params ? params.IssuingAuthority : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 识别出来的单词信息包括单词（包括单词Character和单词置信度confidence）
 * @class
 */
class Words extends  AbstractModel {
    constructor(){
        super();

        /**
         * 置信度 0 ~100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 候选字Character
         * @type {string || null}
         */
        this.Character = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Character = 'Character' in params ? params.Character : null;

    }
}

/**
 * 英文识别结果
 * @class
 */
class TextDetectionEn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容。
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * 置信度 0 ~100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文本行在原图中的四点坐标。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段。目前EnglishOCR接口返回内容为空。
         * @type {string || null}
         */
        this.AdvancedInfo = null;

        /**
         * 英文单词在原图中的四点坐标。
         * @type {Array.<WordCoordPoint> || null}
         */
        this.WordCoordPoint = null;

        /**
         * 候选字符集(包含候选字Character以及置信度Confidence)。
         * @type {Array.<CandWord> || null}
         */
        this.CandWord = null;

        /**
         * 识别出来的单词信息（包括单词Character和单词置信度confidence）
         * @type {Array.<Words> || null}
         */
        this.Words = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

        if (params.WordCoordPoint) {
            this.WordCoordPoint = new Array();
            for (let z in params.WordCoordPoint) {
                let obj = new WordCoordPoint();
                obj.deserialize(params.WordCoordPoint[z]);
                this.WordCoordPoint.push(obj);
            }
        }

        if (params.CandWord) {
            this.CandWord = new Array();
            for (let z in params.CandWord) {
                let obj = new CandWord();
                obj.deserialize(params.CandWord[z]);
                this.CandWord.push(obj);
            }
        }

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new Words();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }

    }
}

/**
 * PermitOCR返回参数结构体
 * @class
 */
class PermitOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 英文姓名
         * @type {string || null}
         */
        this.EnglishName = null;

        /**
         * 证件号
         * @type {string || null}
         */
        this.Number = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 有效期限
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * 签发机关
         * @type {string || null}
         */
        this.IssueAuthority = null;

        /**
         * 签发地点
         * @type {string || null}
         */
        this.IssueAddress = null;

        /**
         * 出生日期
         * @type {string || null}
         */
        this.Birthday = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.EnglishName = 'EnglishName' in params ? params.EnglishName : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.IssueAuthority = 'IssueAuthority' in params ? params.IssueAuthority : null;
        this.IssueAddress = 'IssueAddress' in params ? params.IssueAddress : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InvoiceGeneralOCR请求参数结构体
 * @class
 */
class InvoiceGeneralOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 矩形坐标
 * @class
 */
class Rect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 左上角x
         * @type {number || null}
         */
        this.X = null;

        /**
         * 左上角y
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 高度
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * WaybillOCR返回参数结构体
 * @class
 */
class WaybillOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {TextWaybill || null}
         */
        this.TextDetections = null;

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

        if (params.TextDetections) {
            let obj = new TextWaybill();
            obj.deserialize(params.TextDetections)
            this.TextDetections = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 混贴票据中单张发票的内容
 * @class
 */
class SingleInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 数学公式识别结果
 * @class
 */
class TextFormula extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         * @type {string || null}
         */
        this.DetectedText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;

    }
}

/**
 * MLIDCardOCR请求参数结构体
 * @class
 */
class MLIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。( 中国地区之外不支持这个字段 )
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 是否返回图片，默认false
         * @type {boolean || null}
         */
        this.RetImage = null;

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
        this.RetImage = 'RetImage' in params ? params.RetImage : null;

    }
}

/**
 * 增值税发票项目明细
 * @class
 */
class VatInvoiceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 行号
         * @type {string || null}
         */
        this.LineNo = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规格
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 单位
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 数量
         * @type {string || null}
         */
        this.Quantity = null;

        /**
         * 单价
         * @type {string || null}
         */
        this.UnitPrice = null;

        /**
         * 不含税金额
         * @type {string || null}
         */
        this.AmountWithoutTax = null;

        /**
         * 税率
         * @type {string || null}
         */
        this.TaxRate = null;

        /**
         * 税额
         * @type {string || null}
         */
        this.TaxAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LineNo = 'LineNo' in params ? params.LineNo : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.AmountWithoutTax = 'AmountWithoutTax' in params ? params.AmountWithoutTax : null;
        this.TaxRate = 'TaxRate' in params ? params.TaxRate : null;
        this.TaxAmount = 'TaxAmount' in params ? params.TaxAmount : null;

    }
}

/**
 * 机动车登记证书识别结果
 * @class
 */
class VehicleRegCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称(关键字)，支持以下字段：
【注册登记页】
车辆型号、车辆识别代号/车架号、发动机号、制造厂名称、轴距、轮胎数、总质量、外廓尺寸、轴数、车辆出厂日期、发证日期、使用性质、车辆获得方式、车辆类型、国产/进口、燃料种类、车身颜色、发动机型号、车辆品牌、编号、转向形式、
机动车所有人1、身份证明名称1、号码1、登记机关1、登记日期1
机动车所有人2、身份证明名称2、号码2、登记机关2、登记日期2
机动车所有人3、身份证明名称3、号码3、登记机关3、登记日期3
机动车所有人4、身份证明名称4、号码4、登记机关4、登记日期4
机动车所有人5、身份证明名称5、号码5、登记机关5、登记日期5
机动车所有人6、身份证明名称6、号码6、登记机关6、登记日期6
机动车所有人7、身份证明名称7、号码7、登记机关7、登记日期7
【抵押登记页】
机动车登记证书编号、身份证明名称/号码、抵押权人姓名/名称、抵押登记日期。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * VehicleLicenseOCR请求参数结构体
 * @class
 */
class VehicleLicenseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * FRONT 为行驶证主页正面（有红色印章的一面），
BACK 为行驶证副页正面（有号码号牌的一面）。
默认值为：FRONT。
         * @type {string || null}
         */
        this.CardSide = null;

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
        this.CardSide = 'CardSide' in params ? params.CardSide : null;

    }
}

/**
 * EnterpriseLicenseOCR返回参数结构体
 * @class
 */
class EnterpriseLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业证照识别结果，具体内容请点击左侧链接。
         * @type {Array.<EnterpriseLicenseInfo> || null}
         */
        this.EnterpriseLicenseInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.EnterpriseLicenseInfos) {
            this.EnterpriseLicenseInfos = new Array();
            for (let z in params.EnterpriseLicenseInfos) {
                let obj = new EnterpriseLicenseInfo();
                obj.deserialize(params.EnterpriseLicenseInfos[z]);
                this.EnterpriseLicenseInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 通用机打发票信息
 * @class
 */
class InvoiceGeneralInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称(关键字)，支持以下字段：
发票代码、发票号码、日期、合计金额(小写)、合计金额(大写)、购买方识别号、销售方识别号、校验码、购买方名称、销售方名称、时间、种类、发票消费类型、省、市、是否有公司印章。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         * @type {Rect || null}
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * 英文OCR识别出的单词在原图中的四点坐标数组
 * @class
 */
class WordCoordPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 英文OCR识别出的每个单词在原图中的四点坐标。
         * @type {Array.<Coord> || null}
         */
        this.WordCoordinate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WordCoordinate) {
            this.WordCoordinate = new Array();
            for (let z in params.WordCoordinate) {
                let obj = new Coord();
                obj.deserialize(params.WordCoordinate[z]);
                this.WordCoordinate.push(obj);
            }
        }

    }
}

/**
 * InstitutionOCR返回参数结构体
 * @class
 */
class InstitutionOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 注册号
         * @type {string || null}
         */
        this.RegId = null;

        /**
         * 有效期
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * 住所
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 法定代表人
         * @type {string || null}
         */
        this.LegalPerson = null;

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
        this.RegId = 'RegId' in params ? params.RegId : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.LegalPerson = 'LegalPerson' in params ? params.LegalPerson : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DriverLicenseOCR请求参数结构体
 * @class
 */
class DriverLicenseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * FRONT 为驾驶证主页正面（有红色印章的一面），
BACK 为驾驶证副页正面（有档案编号的一面）。
默认值为：FRONT。
         * @type {string || null}
         */
        this.CardSide = null;

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
        this.CardSide = 'CardSide' in params ? params.CardSide : null;

    }
}

/**
 * 验真接口
 * @class
 */
class BizLicenseVerifyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * “0“：一致
“-1”：此号未查询到结果
         * @type {string || null}
         */
        this.RegNum = null;

        /**
         * “0“：一致
“-1”：不一致
“”：不验真
         * @type {string || null}
         */
        this.Name = null;

        /**
         * “0“：一致
“-1”：不一致
“”：不验真
         * @type {string || null}
         */
        this.Address = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegNum = 'RegNum' in params ? params.RegNum : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;

    }
}

/**
 * 文字识别结果
 * @class
 */
class TextDetection extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * 置信度 0 ~100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段。
GeneralBasicOcr接口返回段落信息Parag，包含ParagNo。
         * @type {string || null}
         */
        this.AdvancedInfo = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
         * @type {ItemCoord || null}
         */
        this.ItemPolygon = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

        if (params.ItemPolygon) {
            let obj = new ItemCoord();
            obj.deserialize(params.ItemPolygon)
            this.ItemPolygon = obj;
        }

    }
}

/**
 * RecognizeTableOCR返回参数结构体
 * @class
 */
class RecognizeTableOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TableDetectInfo> || null}
         */
        this.TableDetections = null;

        /**
         * Base64 编码后的 Excel 数据。
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 图片为PDF时，返回PDF的总页数，默认为0
         * @type {number || null}
         */
        this.PdfPageSize = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，统一以逆时针方向旋转，逆时针为负，角度范围为-360°至0°。
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.TableDetections) {
            this.TableDetections = new Array();
            for (let z in params.TableDetections) {
                let obj = new TableDetectInfo();
                obj.deserialize(params.TableDetections[z]);
                this.TableDetections.push(obj);
            }
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.PdfPageSize = 'PdfPageSize' in params ? params.PdfPageSize : null;
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数学试题识别结果
 * @class
 */
class TextEduPaper extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）
         * @type {string || null}
         */
        this.Item = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Item对应的字符串结果
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
         * @type {ItemCoord || null}
         */
        this.Itemcoord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Item = 'Item' in params ? params.Item : null;
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;

        if (params.Itemcoord) {
            let obj = new ItemCoord();
            obj.deserialize(params.Itemcoord)
            this.Itemcoord = obj;
        }

    }
}

/**
 * QrcodeOCR返回参数结构体
 * @class
 */
class QrcodeOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 二维码/条形码识别结果信息，具体内容请点击左侧链接。
         * @type {Array.<QrcodeResultsInfo> || null}
         */
        this.CodeResults = null;

        /**
         * 图片大小，具体内容请点击左侧链接。
         * @type {QrcodeImgSize || null}
         */
        this.ImgSize = null;

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

        if (params.CodeResults) {
            this.CodeResults = new Array();
            for (let z in params.CodeResults) {
                let obj = new QrcodeResultsInfo();
                obj.deserialize(params.CodeResults[z]);
                this.CodeResults.push(obj);
            }
        }

        if (params.ImgSize) {
            let obj = new QrcodeImgSize();
            obj.deserialize(params.ImgSize)
            this.ImgSize = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运单识别对象
 * @class
 */
class WaybillObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 票据检测结果
 * @class
 */
class InvoiceDetectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的图片在混贴票据图片中的旋转角度。
         * @type {number || null}
         */
        this.Angle = null;

        /**
         * 识别出的图片所属的票据类型。
-1：未知类型
0：出租车发票
1：定额发票
2：火车票
3：增值税发票
4：客运限额发票
5：机票行程单
6：酒店账单
7：完税证明
8：通用机打发票
9：汽车票
10：轮船票
11：增值税发票（卷票 ）
12：购车发票
13：过路过桥费发票
14：购物小票
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 识别出的图片在混贴票据图片中的位置信息。与Angel结合可以得出原图位置，组成RotatedRect((X+0.5\*Width,Y+0.5\*Height), (Width, Height), Angle)，详情可参考OpenCV文档。
         * @type {Rect || null}
         */
        this.Rect = null;

        /**
         * 入参 ReturnImage 为 True 时返回 Base64 编码后的图片。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Image = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }
        this.Image = 'Image' in params ? params.Image : null;

    }
}

/**
 * MainlandPermitOCR请求参数结构体
 * @class
 */
class MainlandPermitOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 是否返回头像。默认不返回。
         * @type {boolean || null}
         */
        this.RetProfile = null;

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
        this.RetProfile = 'RetProfile' in params ? params.RetProfile : null;

    }
}

/**
 * EnterpriseLicenseOCR请求参数结构体
 * @class
 */
class EnterpriseLicenseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * BankCardOCR请求参数结构体
 * @class
 */
class BankCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 是否返回预处理（精确剪裁对齐）后的银行卡图片数据，默认false。
         * @type {boolean || null}
         */
        this.RetBorderCutImage = null;

        /**
         * 是否返回卡号的切图图片数据，默认false。
         * @type {boolean || null}
         */
        this.RetCardNoImage = null;

        /**
         * 复印件检测开关，如果输入的图片是银行卡复印件图片则返回告警，默认false。
         * @type {boolean || null}
         */
        this.EnableCopyCheck = null;

        /**
         * 翻拍检测开关，如果输入的图片是银行卡翻拍图片则返回告警，默认false。
         * @type {boolean || null}
         */
        this.EnableReshootCheck = null;

        /**
         * 边框遮挡检测开关，如果输入的图片是银行卡边框被遮挡则返回告警，默认false。
         * @type {boolean || null}
         */
        this.EnableBorderCheck = null;

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
        this.RetBorderCutImage = 'RetBorderCutImage' in params ? params.RetBorderCutImage : null;
        this.RetCardNoImage = 'RetCardNoImage' in params ? params.RetCardNoImage : null;
        this.EnableCopyCheck = 'EnableCopyCheck' in params ? params.EnableCopyCheck : null;
        this.EnableReshootCheck = 'EnableReshootCheck' in params ? params.EnableReshootCheck : null;
        this.EnableBorderCheck = 'EnableBorderCheck' in params ? params.EnableBorderCheck : null;

    }
}

/**
 * PropOwnerCertOCR返回参数结构体
 * @class
 */
class PropOwnerCertOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房地产权利人
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 共有情况
         * @type {string || null}
         */
        this.Possession = null;

        /**
         * 登记时间
         * @type {string || null}
         */
        this.RegisterTime = null;

        /**
         * 规划用途
         * @type {string || null}
         */
        this.Purpose = null;

        /**
         * 房屋性质
         * @type {string || null}
         */
        this.Nature = null;

        /**
         * 房地坐落
         * @type {string || null}
         */
        this.Location = null;

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
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.Possession = 'Possession' in params ? params.Possession : null;
        this.RegisterTime = 'RegisterTime' in params ? params.RegisterTime : null;
        this.Purpose = 'Purpose' in params ? params.Purpose : null;
        this.Nature = 'Nature' in params ? params.Nature : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 金融票据整单识别单个字段的内容
 * @class
 */
class FinanBillInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称(关键字)，支持以下字段：
【进账单】
日期、出票全称、出票账号、出票开户行、收款人全称、收款人账号、收款开户行、大写金额、小写金额、票据种类、票据张数、票据号码；
【支票】
开户银行、支票种类、凭证号码2、日期、大写金额、小写金额、付款行编号、密码、凭证号码1；
【银行承兑汇票】或【商业承兑汇票】
出票日期、行号1、行号2、出票人全称、出票人账号、付款行全称、收款人全称、收款人账号、收款人开户行、出票金额大写、出票金额小写、汇票到期日、付款行行号、付款行地址。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * TrainTicketOCR返回参数结构体
 * @class
 */
class TrainTicketOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编号
         * @type {string || null}
         */
        this.TicketNum = null;

        /**
         * 出发站
         * @type {string || null}
         */
        this.StartStation = null;

        /**
         * 到达站
         * @type {string || null}
         */
        this.DestinationStation = null;

        /**
         * 出发时间
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 车次
         * @type {string || null}
         */
        this.TrainNum = null;

        /**
         * 座位号
         * @type {string || null}
         */
        this.Seat = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 票价
         * @type {string || null}
         */
        this.Price = null;

        /**
         * 席别
         * @type {string || null}
         */
        this.SeatCategory = null;

        /**
         * 身份证号
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 发票消费类型
         * @type {string || null}
         */
        this.InvoiceType = null;

        /**
         * 序列号
         * @type {string || null}
         */
        this.SerialNumber = null;

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
        this.TicketNum = 'TicketNum' in params ? params.TicketNum : null;
        this.StartStation = 'StartStation' in params ? params.StartStation : null;
        this.DestinationStation = 'DestinationStation' in params ? params.DestinationStation : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.TrainNum = 'TrainNum' in params ? params.TrainNum : null;
        this.Seat = 'Seat' in params ? params.Seat : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.SeatCategory = 'SeatCategory' in params ? params.SeatCategory : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.InvoiceType = 'InvoiceType' in params ? params.InvoiceType : null;
        this.SerialNumber = 'SerialNumber' in params ? params.SerialNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 过路过桥费字段信息
 * @class
 */
class TollInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。支持以下字段的识别：
发票代码、发票号码、日期、金额、入口、出口、时间、发票消费类型、高速标志。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         * @type {Rect || null}
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * ArithmeticOCR返回参数结构体
 * @class
 */
class ArithmeticOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextArithmetic> || null}
         */
        this.TextDetections = null;

        /**
         * 图片横屏的角度(90度或270度)
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextArithmetic();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FormulaOCR返回参数结构体
 * @class
 */
class FormulaOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负
         * @type {number || null}
         */
        this.Angle = null;

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextFormula> || null}
         */
        this.FormulaInfos = null;

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
        this.Angle = 'Angle' in params ? params.Angle : null;

        if (params.FormulaInfos) {
            this.FormulaInfos = new Array();
            for (let z in params.FormulaInfos) {
                let obj = new TextFormula();
                obj.deserialize(params.FormulaInfos[z]);
                this.FormulaInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 汽车票字段信息
 * @class
 */
class BusInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称(关键字)，支持以下字段：
发票代码、发票号码、日期、票价、始发地、目的地、姓名、时间、发票消费类型、身份证号、省、市。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         * @type {Rect || null}
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * 增值税发票识别结果
 * @class
 */
class TextVatInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。支持以下字段的识别：
发票代码、 发票号码、 打印发票代码、 打印发票号码、 开票日期、 购买方识别号、 小写金额、 价税合计(大写)、 销售方识别号、 校验码、 购买方名称、 销售方名称、 税额、 复核、 联次名称、 备注、 联次、 密码区、 开票人、 收款人、 （货物或应税劳务、服务名称）、省、 市、 服务类型、 通行费标志、 是否代开、 是否收购、 合计金额、 是否有公司印章、 发票消费类型、 车船税、 机器编号、 成品油标志、 税率、 合计税额、 （购买方地址、电话）、 （销售方地址、电话）、 单价、 金额、 销售方开户行及账号、 购买方开户行及账号、 规格型号、 发票名称、 单位、 数量、 校验码备选、 校验码后六位备选、发票号码备选。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 字段在原图中的中的四点坐标。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Polygon || null}
         */
        this.Polygon = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Polygon) {
            let obj = new Polygon();
            obj.deserialize(params.Polygon)
            this.Polygon = obj;
        }

    }
}

/**
 * GeneralHandwritingOCR请求参数结构体
 * @class
 */
class GeneralHandwritingOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 场景字段，默认不用填写。
可选值:only_hw  表示只输出手写体识别结果，过滤印刷体。
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 是否开启单字的四点定位坐标输出，默认值为false。
         * @type {boolean || null}
         */
        this.EnableWordPolygon = null;

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
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.EnableWordPolygon = 'EnableWordPolygon' in params ? params.EnableWordPolygon : null;

    }
}

/**
 * BizLicenseOCR请求参数结构体
 * @class
 */
class BizLicenseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * MixedInvoiceDetect返回参数结构体
 * @class
 */
class MixedInvoiceDetectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测出的票据类型列表，具体内容请点击左侧链接。
         * @type {Array.<InvoiceDetectInfo> || null}
         */
        this.InvoiceDetectInfos = null;

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

        if (params.InvoiceDetectInfos) {
            this.InvoiceDetectInfos = new Array();
            for (let z in params.InvoiceDetectInfos) {
                let obj = new InvoiceDetectInfo();
                obj.deserialize(params.InvoiceDetectInfos[z]);
                this.InvoiceDetectInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 发票人员信息
 * @class
 */
class VatInvoiceUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 纳税人识别号
         * @type {string || null}
         */
        this.TaxId = null;

        /**
         * 地 址、电 话
         * @type {string || null}
         */
        this.AddrTel = null;

        /**
         * 开户行及账号
         * @type {string || null}
         */
        this.FinancialAccount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TaxId = 'TaxId' in params ? params.TaxId : null;
        this.AddrTel = 'AddrTel' in params ? params.AddrTel : null;
        this.FinancialAccount = 'FinancialAccount' in params ? params.FinancialAccount : null;

    }
}

/**
 * InsuranceBillOCR返回参数结构体
 * @class
 */
class InsuranceBillOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保险单据识别结果，具体内容请点击左侧链接。
         * @type {Array.<InsuranceBillInfo> || null}
         */
        this.InsuranceBillInfos = null;

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

        if (params.InsuranceBillInfos) {
            this.InsuranceBillInfos = new Array();
            for (let z in params.InsuranceBillInfos) {
                let obj = new InsuranceBillInfo();
                obj.deserialize(params.InsuranceBillInfos[z]);
                this.InsuranceBillInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GeneralEfficientOCR返回参数结构体
 * @class
 */
class GeneralEfficientOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
         * @type {Array.<TextDetection> || null}
         */
        this.TextDetections = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
         * @type {number || null}
         */
        this.Angel = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HmtResidentPermitOCR请求参数结构体
 * @class
 */
class HmtResidentPermitOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * FRONT：有照片的一面（人像面），
BACK：无照片的一面（国徽面），
该参数如果不填或填错，将为您自动判断正反面。
         * @type {string || null}
         */
        this.CardSide = null;

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
        this.CardSide = 'CardSide' in params ? params.CardSide : null;

    }
}

/**
 * QrcodeOCR请求参数结构体
 * @class
 */
class QrcodeOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，支持PNG、JPG、JPEG格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，支持PNG、JPG、JPEG格式。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * TaxiInvoiceOCR返回参数结构体
 * @class
 */
class TaxiInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票代码
         * @type {string || null}
         */
        this.InvoiceNum = null;

        /**
         * 发票号码
         * @type {string || null}
         */
        this.InvoiceCode = null;

        /**
         * 日期
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 金额
         * @type {string || null}
         */
        this.Fare = null;

        /**
         * 上车时间
         * @type {string || null}
         */
        this.GetOnTime = null;

        /**
         * 下车时间
         * @type {string || null}
         */
        this.GetOffTime = null;

        /**
         * 里程
         * @type {string || null}
         */
        this.Distance = null;

        /**
         * 发票所在地
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 车牌号
         * @type {string || null}
         */
        this.PlateNumber = null;

        /**
         * 发票消费类型
         * @type {string || null}
         */
        this.InvoiceType = null;

        /**
         * 省
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

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
        this.InvoiceNum = 'InvoiceNum' in params ? params.InvoiceNum : null;
        this.InvoiceCode = 'InvoiceCode' in params ? params.InvoiceCode : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Fare = 'Fare' in params ? params.Fare : null;
        this.GetOnTime = 'GetOnTime' in params ? params.GetOnTime : null;
        this.GetOffTime = 'GetOffTime' in params ? params.GetOffTime : null;
        this.Distance = 'Distance' in params ? params.Distance : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.PlateNumber = 'PlateNumber' in params ? params.PlateNumber : null;
        this.InvoiceType = 'InvoiceType' in params ? params.InvoiceType : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GeneralBasicOCR返回参数结构体
 * @class
 */
class GeneralBasicOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
         * @type {Array.<TextDetection> || null}
         */
        this.TextDetections = null;

        /**
         * 检测到的语言类型，目前支持的语言类型参考入参LanguageType说明。
         * @type {string || null}
         */
        this.Language = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
         * @type {number || null}
         */
        this.Angel = null;

        /**
         * 图片为PDF时，返回PDF的总页数，默认为0
         * @type {number || null}
         */
        this.PdfPageSize = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Language = 'Language' in params ? params.Language : null;
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.PdfPageSize = 'PdfPageSize' in params ? params.PdfPageSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeThaiIDCardOCR返回参数结构体
 * @class
 */
class RecognizeThaiIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份证号码
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 泰文姓名
         * @type {string || null}
         */
        this.ThaiName = null;

        /**
         * 英文姓名
         * @type {string || null}
         */
        this.EnFirstName = null;

        /**
         * 地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 出生日期
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * 首次领用日期
         * @type {string || null}
         */
        this.IssueDate = null;

        /**
         * 签发日期
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * 英文姓名
         * @type {string || null}
         */
        this.EnLastName = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.ThaiName = 'ThaiName' in params ? params.ThaiName : null;
        this.EnFirstName = 'EnFirstName' in params ? params.EnFirstName : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.EnLastName = 'EnLastName' in params ? params.EnLastName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 单元格识别结果
 * @class
 */
class CellContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 段落编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ParagNo = null;

        /**
         * 字体大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WordSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParagNo = 'ParagNo' in params ? params.ParagNo : null;
        this.WordSize = 'WordSize' in params ? params.WordSize : null;

    }
}

/**
 * MixedInvoiceOCR返回参数结构体
 * @class
 */
class MixedInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 混贴票据识别结果，具体内容请点击左侧链接。
         * @type {Array.<MixedInvoiceItem> || null}
         */
        this.MixedInvoiceItems = null;

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

        if (params.MixedInvoiceItems) {
            this.MixedInvoiceItems = new Array();
            for (let z in params.MixedInvoiceItems) {
                let obj = new MixedInvoiceItem();
                obj.deserialize(params.MixedInvoiceItems[z]);
                this.MixedInvoiceItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClassifyDetectOCR返回参数结构体
 * @class
 */
class ClassifyDetectOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能卡证分类结果。当图片类型不支持分类识别或者识别出的类型不在请求参数DiscernType指定的范围内时，返回结果中的Type字段将为空字符串，Name字段将返回"其它"
         * @type {Array.<ClassifyDetectInfo> || null}
         */
        this.ClassifyDetectInfos = null;

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

        if (params.ClassifyDetectInfos) {
            this.ClassifyDetectInfos = new Array();
            for (let z in params.ClassifyDetectInfos) {
                let obj = new ClassifyDetectInfo();
                obj.deserialize(params.ClassifyDetectInfos[z]);
                this.ClassifyDetectInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VehicleLicenseOCR返回参数结构体
 * @class
 */
class VehicleLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 行驶证主页正面的识别结果，CardSide 为 FRONT。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TextVehicleFront || null}
         */
        this.FrontInfo = null;

        /**
         * 行驶证副页正面的识别结果，CardSide 为 BACK。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TextVehicleBack || null}
         */
        this.BackInfo = null;

        /**
         * Code 告警码列表和释义：
-9102 复印件告警
-9103 翻拍件告警
-9106 ps告警
注：告警码可以同时存在多个
         * @type {Array.<number> || null}
         */
        this.RecognizeWarnCode = null;

        /**
         * 告警码说明：
WARN_DRIVER_LICENSE_COPY_CARD 复印件告警
WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警
WARN_DRIVER_LICENSE_PS_CARD ps告警
注：告警信息可以同时存在多个
         * @type {Array.<string> || null}
         */
        this.RecognizeWarnMsg = null;

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

        if (params.FrontInfo) {
            let obj = new TextVehicleFront();
            obj.deserialize(params.FrontInfo)
            this.FrontInfo = obj;
        }

        if (params.BackInfo) {
            let obj = new TextVehicleBack();
            obj.deserialize(params.BackInfo)
            this.BackInfo = obj;
        }
        this.RecognizeWarnCode = 'RecognizeWarnCode' in params ? params.RecognizeWarnCode : null;
        this.RecognizeWarnMsg = 'RecognizeWarnMsg' in params ? params.RecognizeWarnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VatInvoiceOCR请求参数结构体
 * @class
 */
class VatInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片/PDF的 Base64 值。
支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。
支持的图片/PDF大小：所下载文件经Base64编码后不超过 7M。文件下载时间不超过 3 秒。
输入参数 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片/PDF的 Url 地址。
支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。
支持的图片/PDF大小：所下载文件经 Base64 编码后不超过 7M。文件下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
         * @type {boolean || null}
         */
        this.IsPdf = null;

        /**
         * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
         * @type {number || null}
         */
        this.PdfPageNumber = null;

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
        this.IsPdf = 'IsPdf' in params ? params.IsPdf : null;
        this.PdfPageNumber = 'PdfPageNumber' in params ? params.PdfPageNumber : null;

    }
}

/**
 * IDCardOCR返回参数结构体
 * @class
 */
class IDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名（人像面）
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 性别（人像面）
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 民族（人像面）
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * 出生日期（人像面）
         * @type {string || null}
         */
        this.Birth = null;

        /**
         * 地址（人像面）
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 身份证号（人像面）
         * @type {string || null}
         */
        this.IdNum = null;

        /**
         * 发证机关（国徽面）
         * @type {string || null}
         */
        this.Authority = null;

        /**
         * 证件有效期（国徽面）
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * 扩展信息，不请求则不返回，具体输入参考示例3和示例4。
IdCard，裁剪后身份证照片的base64编码，请求 Config.CropIdCard 时返回；
Portrait，身份证头像照片的base64编码，请求 Config.CropPortrait 时返回；

Quality，图片质量分数，请求 Config.Quality 时返回（取值范围：0~100，分数越低越模糊，建议阈值≥50）;
BorderCodeValue，身份证边框不完整告警阈值分数，请求 Config.BorderCheckWarn时返回（取值范围：0~100，分数越低边框遮挡可能性越低，建议阈值≥50）;

WarnInfos，告警信息，Code 告警码列表和释义：
-9100	身份证有效日期不合法告警，
-9101	身份证边框不完整告警，
-9102	身份证复印件告警，
-9103	身份证翻拍告警，
-9105	身份证框内遮挡告警，
-9104	临时身份证告警，
-9106	身份证 PS 告警，
-9107       身份证反光告警。
         * @type {string || null}
         */
        this.AdvancedInfo = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.Birth = 'Birth' in params ? params.Birth : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.IdNum = 'IdNum' in params ? params.IdNum : null;
        this.Authority = 'Authority' in params ? params.Authority : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClassifyDetectOCR请求参数结构体
 * @class
 */
class ClassifyDetectOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 可以指定要识别的票证类型,指定后不出现在此列表的票证将不返回类型。不指定时默认返回所有支持类别票证的识别信息。

以下是当前支持的类型：
IDCardFront: 身份证正面识别
IDCardBack: 身份证背面识别
Passport: 护照
BusinessCard: 名片识别
BankCard: 银行卡识别
VehicleLicenseFront: 行驶证主页识别
VehicleLicenseBack: 行驶证副页识别
DriverLicenseFront: 驾驶证主页识别
DriverLicenseBack: 驾驶证副页识别
PermitFront: 港澳台通行证正面
ResidenceBooklet: 户口本资料页
MainlandPermitFront: 港澳台来往内地通行证正面
HmtResidentPermitFront: 港澳台居住证正面
HmtResidentPermitBack: 港澳台居住证背面
EstateCert: 不动产证
BizLicense: 营业执照
         * @type {Array.<string> || null}
         */
        this.DiscernType = null;

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
        this.DiscernType = 'DiscernType' in params ? params.DiscernType : null;

    }
}

/**
 * DutyPaidProofOCR返回参数结构体
 * @class
 */
class DutyPaidProofOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 完税证明识别结果，具体内容请点击左侧链接。
         * @type {Array.<DutyPaidProofInfo> || null}
         */
        this.DutyPaidProofInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.DutyPaidProofInfos) {
            this.DutyPaidProofInfos = new Array();
            for (let z in params.DutyPaidProofInfos) {
                let obj = new DutyPaidProofInfo();
                obj.deserialize(params.DutyPaidProofInfos[z]);
                this.DutyPaidProofInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TollInvoiceOCR请求参数结构体
 * @class
 */
class TollInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * LicensePlateOCR返回参数结构体
 * @class
 */
class LicensePlateOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的车牌号码。
         * @type {string || null}
         */
        this.Number = null;

        /**
         * 置信度，0 - 100 之间。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文本行在原图片中的像素坐标框。
         * @type {Rect || null}
         */
        this.Rect = null;

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
        this.Number = 'Number' in params ? params.Number : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HKIDCardOCR返回参数结构体
 * @class
 */
class HKIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 中文姓名
         * @type {string || null}
         */
        this.CnName = null;

        /**
         * 英文姓名
         * @type {string || null}
         */
        this.EnName = null;

        /**
         * 中文姓名对应电码
         * @type {string || null}
         */
        this.TelexCode = null;

        /**
         * 性别 ：“男M”或“女F”
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 出生日期
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * 永久性居民身份证。
0：非永久；
1：永久；
-1：未知。
         * @type {number || null}
         */
        this.Permanent = null;

        /**
         * 身份证号码
         * @type {string || null}
         */
        this.IdNum = null;

        /**
         * 证件符号，出生日期下的符号，例如"***AZ"
         * @type {string || null}
         */
        this.Symbol = null;

        /**
         * 首次签发日期
         * @type {string || null}
         */
        this.FirstIssueDate = null;

        /**
         * 最近领用日期
         * @type {string || null}
         */
        this.CurrentIssueDate = null;

        /**
         * 真假判断。
0：无法判断（图像模糊、不完整、反光、过暗等导致无法判断）；
1：假；
2：真。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FakeDetectResult = null;

        /**
         * 人像照片Base64后的结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HeadImage = null;

        /**
         * 多重告警码，当身份证是翻拍、复印、PS件时返回对应告警码。
-9102：证照复印件告警
-9103：证照翻拍告警
-9104：证照PS告警
-9105：证照防伪告警
         * @type {Array.<number> || null}
         */
        this.WarningCode = null;

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
        this.CnName = 'CnName' in params ? params.CnName : null;
        this.EnName = 'EnName' in params ? params.EnName : null;
        this.TelexCode = 'TelexCode' in params ? params.TelexCode : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Permanent = 'Permanent' in params ? params.Permanent : null;
        this.IdNum = 'IdNum' in params ? params.IdNum : null;
        this.Symbol = 'Symbol' in params ? params.Symbol : null;
        this.FirstIssueDate = 'FirstIssueDate' in params ? params.FirstIssueDate : null;
        this.CurrentIssueDate = 'CurrentIssueDate' in params ? params.CurrentIssueDate : null;
        this.FakeDetectResult = 'FakeDetectResult' in params ? params.FakeDetectResult : null;
        this.HeadImage = 'HeadImage' in params ? params.HeadImage : null;
        this.WarningCode = 'WarningCode' in params ? params.WarningCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 发票商品
 * @class
 */
class VatInvoiceGoodsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称
         * @type {string || null}
         */
        this.Item = null;

        /**
         * 规格型号
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * 单位
         * @type {string || null}
         */
        this.MeasurementDimension = null;

        /**
         * 价格
         * @type {string || null}
         */
        this.Price = null;

        /**
         * 数量
         * @type {string || null}
         */
        this.Quantity = null;

        /**
         * 金额
         * @type {string || null}
         */
        this.Amount = null;

        /**
         * 税率(如6%、免税)
         * @type {string || null}
         */
        this.TaxScheme = null;

        /**
         * 税额
         * @type {string || null}
         */
        this.TaxAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Item = 'Item' in params ? params.Item : null;
        this.Specification = 'Specification' in params ? params.Specification : null;
        this.MeasurementDimension = 'MeasurementDimension' in params ? params.MeasurementDimension : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.TaxScheme = 'TaxScheme' in params ? params.TaxScheme : null;
        this.TaxAmount = 'TaxAmount' in params ? params.TaxAmount : null;

    }
}

/**
 * PermitOCR请求参数结构体
 * @class
 */
class PermitOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * InvoiceGeneralOCR返回参数结构体
 * @class
 */
class InvoiceGeneralOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通用机打发票识别结果，具体内容请点击左侧链接。
         * @type {Array.<InvoiceGeneralInfo> || null}
         */
        this.InvoiceGeneralInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.InvoiceGeneralInfos) {
            this.InvoiceGeneralInfos = new Array();
            for (let z in params.InvoiceGeneralInfos) {
                let obj = new InvoiceGeneralInfo();
                obj.deserialize(params.InvoiceGeneralInfos[z]);
                this.InvoiceGeneralInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TaxiInvoiceOCR请求参数结构体
 * @class
 */
class TaxiInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * PropOwnerCertOCR请求参数结构体
 * @class
 */
class PropOwnerCertOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * TextDetect请求参数结构体
 * @class
 */
class TextDetectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * VatRollInvoiceOCR返回参数结构体
 * @class
 */
class VatRollInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增值税发票（卷票）识别结果，具体内容请点击左侧链接。
         * @type {Array.<VatRollInvoiceInfo> || null}
         */
        this.VatRollInvoiceInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.VatRollInvoiceInfos) {
            this.VatRollInvoiceInfos = new Array();
            for (let z in params.VatRollInvoiceInfos) {
                let obj = new VatRollInvoiceInfo();
                obj.deserialize(params.VatRollInvoiceInfos[z]);
                this.VatRollInvoiceInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VatInvoiceVerify请求参数结构体
 * @class
 */
class VatInvoiceVerifyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票代码， 一张发票一天只能查询5次。
         * @type {string || null}
         */
        this.InvoiceCode = null;

        /**
         * 发票号码（8位）。
         * @type {string || null}
         */
        this.InvoiceNo = null;

        /**
         * 开票日期（不支持当天发票查询，只支持一年以内），如：2019-12-20。
         * @type {string || null}
         */
        this.InvoiceDate = null;

        /**
         * 金额/发票校验码后6位（根据票种传递对应值，如果报参数错误，请仔细检查每个票种对应的值）
增值税专用发票：开具金额（不含税）
增值税普通发票、增值税电子普通发票（含通行费发票）、增值税普通发票（卷票）：校验码后6位
机动车销售统一发票：不含税价
货物运输业增值税专用发票：合计金额
二手车销售统一发票：车价合计
         * @type {string || null}
         */
        this.Additional = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvoiceCode = 'InvoiceCode' in params ? params.InvoiceCode : null;
        this.InvoiceNo = 'InvoiceNo' in params ? params.InvoiceNo : null;
        this.InvoiceDate = 'InvoiceDate' in params ? params.InvoiceDate : null;
        this.Additional = 'Additional' in params ? params.Additional : null;

    }
}

/**
 * EduPaperOCR返回参数结构体
 * @class
 */
class EduPaperOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextEduPaper> || null}
         */
        this.EduPaperInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。
         * @type {number || null}
         */
        this.Angle = null;

        /**
         * 结构化方式输出，具体内容请点击左侧链接。
         * @type {Array.<QuestionBlockObj> || null}
         */
        this.QuestionBlockInfos = null;

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

        if (params.EduPaperInfos) {
            this.EduPaperInfos = new Array();
            for (let z in params.EduPaperInfos) {
                let obj = new TextEduPaper();
                obj.deserialize(params.EduPaperInfos[z]);
                this.EduPaperInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;

        if (params.QuestionBlockInfos) {
            this.QuestionBlockInfos = new Array();
            for (let z in params.QuestionBlockInfos) {
                let obj = new QuestionBlockObj();
                obj.deserialize(params.QuestionBlockInfos[z]);
                this.QuestionBlockInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeThaiIDCardOCR请求参数结构体
 * @class
 */
class RecognizeThaiIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 名片识别结果
 * @class
 */
class BusinessCardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字，可能重复，比如多个手机），能识别的字段名为：
姓名、英文姓名、英文地址、公司、英文公司、职位、英文职位、部门、英文部门、手机、电话、传真、社交帐号、QQ、MSN、微信、微博、邮箱、邮编、网址、公司账号、其他。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
         * @type {ItemCoord || null}
         */
        this.ItemCoord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.ItemCoord) {
            let obj = new ItemCoord();
            obj.deserialize(params.ItemCoord)
            this.ItemCoord = obj;
        }

    }
}

/**
 * 文字识别结果
 * @class
 */
class TextGeneralHandwriting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * 置信度 0 - 100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段。
能返回文本行的段落信息，例如：{\"Parag\":{\"ParagNo\":2}}，
其中ParagNo为段落行，从1开始。
         * @type {string || null}
         */
        this.AdvancedInfo = null;

        /**
         * 字的坐标数组，以四个顶点坐标表示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Polygon> || null}
         */
        this.WordPolygon = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

        if (params.WordPolygon) {
            this.WordPolygon = new Array();
            for (let z in params.WordPolygon) {
                let obj = new Polygon();
                obj.deserialize(params.WordPolygon[z]);
                this.WordPolygon.push(obj);
            }
        }

    }
}

/**
 * TableOCR请求参数结构体
 * @class
 */
class TableOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 图片大小
 * @class
 */
class QrcodeImgSize extends  AbstractModel {
    constructor(){
        super();

        /**
         * 宽
         * @type {number || null}
         */
        this.Wide = null;

        /**
         * 高
         * @type {number || null}
         */
        this.High = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Wide = 'Wide' in params ? params.Wide : null;
        this.High = 'High' in params ? params.High : null;

    }
}

/**
 * VerifyBasicBizLicense返回参数结构体
 * @class
 */
class VerifyBasicBizLicenseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态码，成功时返回0
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 统一社会信用代码
         * @type {string || null}
         */
        this.CreditCode = null;

        /**
         * 经营期限自（YYYY-MM-DD）
         * @type {string || null}
         */
        this.Opfrom = null;

        /**
         * 经营期限至（YYYY-MM-DD）
         * @type {string || null}
         */
        this.Opto = null;

        /**
         * 法人姓名
         * @type {string || null}
         */
        this.Frname = null;

        /**
         * 经营状态，包括：成立、筹建、存续、在营、开业、在册、正常经营、开业登记中、登记成立、撤销、撤销登记、非正常户、告解、个体暂时吊销、个体转企业、吊销（未注销）、拟注销、已注销、（待）迁入、（待）迁出、停业、歇业、清算等。
         * @type {string || null}
         */
        this.Entstatus = null;

        /**
         * 经营业务范围
         * @type {string || null}
         */
        this.Zsopscope = null;

        /**
         * 查询的状态信息
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 原注册号
         * @type {string || null}
         */
        this.Oriregno = null;

        /**
         * 要核验的工商注册号
         * @type {string || null}
         */
        this.VerifyRegno = null;

        /**
         * 工商注册号
         * @type {string || null}
         */
        this.Regno = null;

        /**
         * 要核验的企业名称
         * @type {string || null}
         */
        this.VerifyEntname = null;

        /**
         * 企业名称
         * @type {string || null}
         */
        this.Entname = null;

        /**
         * 要核验的住址
         * @type {string || null}
         */
        this.VerifyDom = null;

        /**
         * 住址
         * @type {string || null}
         */
        this.Dom = null;

        /**
         * 验证结果
         * @type {BizLicenseVerifyResult || null}
         */
        this.RegNumResult = null;

        /**
         * 注册资本（单位：万元）,只有输入参数regCapital为1的时候才输出
         * @type {string || null}
         */
        this.RegCapital = null;

        /**
         * 成立/注册日期，只有输入参数EstablishTime为true时展示，默认为空
         * @type {string || null}
         */
        this.EstablishTime = null;

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
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.CreditCode = 'CreditCode' in params ? params.CreditCode : null;
        this.Opfrom = 'Opfrom' in params ? params.Opfrom : null;
        this.Opto = 'Opto' in params ? params.Opto : null;
        this.Frname = 'Frname' in params ? params.Frname : null;
        this.Entstatus = 'Entstatus' in params ? params.Entstatus : null;
        this.Zsopscope = 'Zsopscope' in params ? params.Zsopscope : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Oriregno = 'Oriregno' in params ? params.Oriregno : null;
        this.VerifyRegno = 'VerifyRegno' in params ? params.VerifyRegno : null;
        this.Regno = 'Regno' in params ? params.Regno : null;
        this.VerifyEntname = 'VerifyEntname' in params ? params.VerifyEntname : null;
        this.Entname = 'Entname' in params ? params.Entname : null;
        this.VerifyDom = 'VerifyDom' in params ? params.VerifyDom : null;
        this.Dom = 'Dom' in params ? params.Dom : null;

        if (params.RegNumResult) {
            let obj = new BizLicenseVerifyResult();
            obj.deserialize(params.RegNumResult)
            this.RegNumResult = obj;
        }
        this.RegCapital = 'RegCapital' in params ? params.RegCapital : null;
        this.EstablishTime = 'EstablishTime' in params ? params.EstablishTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VehicleRegCertOCR请求参数结构体
 * @class
 */
class VehicleRegCertOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * WaybillOCR请求参数结构体
 * @class
 */
class WaybillOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 预检测开关，当待识别运单占整个输入图像的比例较小时，建议打开预检测开关。默认值为false。
         * @type {boolean || null}
         */
        this.EnablePreDetect = null;

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
        this.EnablePreDetect = 'EnablePreDetect' in params ? params.EnablePreDetect : null;

    }
}

/**
 * 商品码信息
 * @class
 */
class ProductDataRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品名称(英文)
         * @type {string || null}
         */
        this.EnName = null;

        /**
         * 品牌名称
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 规格型号
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 宽度，单位毫米
         * @type {string || null}
         */
        this.Width = null;

        /**
         * 高度，单位毫米
         * @type {string || null}
         */
        this.Height = null;

        /**
         * 深度，单位毫米
         * @type {string || null}
         */
        this.Depth = null;

        /**
         * 关键字
         * @type {string || null}
         */
        this.KeyWord = null;

        /**
         * 简短描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 图片链接
         * @type {Array.<string> || null}
         */
        this.ImageLink = null;

        /**
         * 厂家名称
         * @type {string || null}
         */
        this.ManufacturerName = null;

        /**
         * 厂家地址
         * @type {string || null}
         */
        this.ManufacturerAddress = null;

        /**
         * 企业社会信用代码
         * @type {string || null}
         */
        this.FirmCode = null;

        /**
         * 表示数据查询状态
checkResult	状态说明
1	 经查，该商品条码已在中国物品编码中心注册
2	经查，该厂商识别代码已在中国物品编码中心注册，但编码信息未按规定通报。
3	经查，该厂商识别代码已于xxxxx注销，请关注产品生产日期。
4	经查，该企业以及条码未经条码中心注册，属于违法使用
-1	经查，该商品条码被冒用
-2	经查，该厂商识别代码已在中国物品编码中心注册，但该产品已经下市
S001                未找到该厂商识别代码的注册信息。
S002		该厂商识别代码已经在GS1注册，但编码信息未通报
S003		该商品条码已在GS1通报
S004		该商品条码已注销
S005		数字不正确。GS1前缀（3位国家/地区代码）用于特殊用途。
E001		完整性失败：此GTIN的长度无效。
E002		完整性失败：校验位不正确。
E003		完整性失败：字符串包含字母数字字符。
E004		数字不正确。GS1前缀（3位国家/地区代码）不存在。
E005		数字不正确。GS1前缀（3位国家/地区代码）用于特殊用途。
E006		数字不正确。尚未分配该GS1公司前缀。
E008	        经查，该企业厂商识别代码以及条码尚未通报
         * @type {string || null}
         */
        this.CheckResult = null;

        /**
         * UNSPSC分类码
         * @type {string || null}
         */
        this.CategoryCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.EnName = 'EnName' in params ? params.EnName : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Depth = 'Depth' in params ? params.Depth : null;
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ImageLink = 'ImageLink' in params ? params.ImageLink : null;
        this.ManufacturerName = 'ManufacturerName' in params ? params.ManufacturerName : null;
        this.ManufacturerAddress = 'ManufacturerAddress' in params ? params.ManufacturerAddress : null;
        this.FirmCode = 'FirmCode' in params ? params.FirmCode : null;
        this.CheckResult = 'CheckResult' in params ? params.CheckResult : null;
        this.CategoryCode = 'CategoryCode' in params ? params.CategoryCode : null;

    }
}

/**
 * LicensePlateOCR请求参数结构体
 * @class
 */
class LicensePlateOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * GeneralBasicOCR请求参数结构体
 * @class
 */
class GeneralBasicOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片/PDF的 Base64 值。
要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片/PDF的 Url 地址。
要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 保留字段。
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 识别语言类型。
支持自动识别语言类型，同时支持自选语言种类，默认中英文混合(zh)，各种语言均支持与英文混合的文字识别。
可选值：
zh\auto\jap\kor\
spa\fre\ger\por\
vie\may\rus\ita\
hol\swe\fin\dan\
nor\hun\tha\lat\ara
可选值分别表示：
中英文混合、自动识别、日语、韩语、
西班牙语、法语、德语、葡萄牙语、
越南语、马来语、俄语、意大利语、
荷兰语、瑞典语、芬兰语、丹麦语、
挪威语、匈牙利语、泰语、拉丁语系、
阿拉伯语。
         * @type {string || null}
         */
        this.LanguageType = null;

        /**
         * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
         * @type {boolean || null}
         */
        this.IsPdf = null;

        /**
         * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
         * @type {number || null}
         */
        this.PdfPageNumber = null;

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
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.LanguageType = 'LanguageType' in params ? params.LanguageType : null;
        this.IsPdf = 'IsPdf' in params ? params.IsPdf : null;
        this.PdfPageNumber = 'PdfPageNumber' in params ? params.PdfPageNumber : null;

    }
}

/**
 * 行驶证副页正面的识别结果
 * @class
 */
class TextVehicleBack extends  AbstractModel {
    constructor(){
        super();

        /**
         * 号牌号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlateNo = null;

        /**
         * 档案编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileNo = null;

        /**
         * 核定人数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AllowNum = null;

        /**
         * 总质量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalMass = null;

        /**
         * 整备质量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurbWeight = null;

        /**
         * 核定载质量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadQuality = null;

        /**
         * 外廓尺寸
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalSize = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Marks = null;

        /**
         * 检验记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Record = null;

        /**
         * 准牵引总质量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalQuasiMass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlateNo = 'PlateNo' in params ? params.PlateNo : null;
        this.FileNo = 'FileNo' in params ? params.FileNo : null;
        this.AllowNum = 'AllowNum' in params ? params.AllowNum : null;
        this.TotalMass = 'TotalMass' in params ? params.TotalMass : null;
        this.CurbWeight = 'CurbWeight' in params ? params.CurbWeight : null;
        this.LoadQuality = 'LoadQuality' in params ? params.LoadQuality : null;
        this.ExternalSize = 'ExternalSize' in params ? params.ExternalSize : null;
        this.Marks = 'Marks' in params ? params.Marks : null;
        this.Record = 'Record' in params ? params.Record : null;
        this.TotalQuasiMass = 'TotalQuasiMass' in params ? params.TotalQuasiMass : null;

    }
}

/**
 * GeneralEfficientOCR请求参数结构体
 * @class
 */
class GeneralEfficientOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * AdvertiseOCR请求参数结构体
 * @class
 */
class AdvertiseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * RideHailingDriverLicenseOCR返回参数结构体
 * @class
 */
class RideHailingDriverLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 证号，对应网约车驾驶证字段：证号/从业资格证号/驾驶员证号/身份证号
         * @type {string || null}
         */
        this.LicenseNumber = null;

        /**
         * 有效起始日期
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 有效期截止时间，对应网约车驾驶证字段：有效期至/营运期限止
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 初始发证日期，对应网约车驾驶证字段：初始领证日期/发证日期
         * @type {string || null}
         */
        this.ReleaseDate = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ReleaseDate = 'ReleaseDate' in params ? params.ReleaseDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 企业四要素核验结果
 * @class
 */
class Detail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业四要素核验结果状态码
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 企业四要素核验结果描述
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * EnglishOCR请求参数结构体
 * @class
 */
class EnglishOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 单词四点坐标开关，开启可返回图片中单词的四点坐标。
该参数默认值为false。
         * @type {boolean || null}
         */
        this.EnableCoordPoint = null;

        /**
         * 候选字开关，开启可返回识别时多个可能的候选字（每个候选字对应其置信度）。
该参数默认值为false。
         * @type {boolean || null}
         */
        this.EnableCandWord = null;

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
        this.EnableCoordPoint = 'EnableCoordPoint' in params ? params.EnableCoordPoint : null;
        this.EnableCandWord = 'EnableCandWord' in params ? params.EnableCandWord : null;

    }
}

/**
 * VatInvoiceVerify返回参数结构体
 * @class
 */
class VatInvoiceVerifyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增值税发票信息，详情请点击左侧链接。
         * @type {VatInvoice || null}
         */
        this.Invoice = null;

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

        if (params.Invoice) {
            let obj = new VatInvoice();
            obj.deserialize(params.Invoice)
            this.Invoice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PassportOCR返回参数结构体
 * @class
 */
class PassportOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国家码
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 护照号
         * @type {string || null}
         */
        this.PassportNo = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 国籍
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * 出生日期
         * @type {string || null}
         */
        this.BirthDate = null;

        /**
         * 出生地点
         * @type {string || null}
         */
        this.BirthPlace = null;

        /**
         * 签发日期
         * @type {string || null}
         */
        this.IssueDate = null;

        /**
         * 签发地点
         * @type {string || null}
         */
        this.IssuePlace = null;

        /**
         * 有效期
         * @type {string || null}
         */
        this.ExpiryDate = null;

        /**
         * 持证人签名
         * @type {string || null}
         */
        this.Signature = null;

        /**
         * 最下方第一行 MRZ Code 序列
         * @type {string || null}
         */
        this.CodeSet = null;

        /**
         * 最下方第二行 MRZ Code 序列
         * @type {string || null}
         */
        this.CodeCrc = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 姓
         * @type {string || null}
         */
        this.FamilyName = null;

        /**
         * 名
         * @type {string || null}
         */
        this.FirstName = null;

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
        this.Country = 'Country' in params ? params.Country : null;
        this.PassportNo = 'PassportNo' in params ? params.PassportNo : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.BirthDate = 'BirthDate' in params ? params.BirthDate : null;
        this.BirthPlace = 'BirthPlace' in params ? params.BirthPlace : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;
        this.IssuePlace = 'IssuePlace' in params ? params.IssuePlace : null;
        this.ExpiryDate = 'ExpiryDate' in params ? params.ExpiryDate : null;
        this.Signature = 'Signature' in params ? params.Signature : null;
        this.CodeSet = 'CodeSet' in params ? params.CodeSet : null;
        this.CodeCrc = 'CodeCrc' in params ? params.CodeCrc : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.FamilyName = 'FamilyName' in params ? params.FamilyName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyEnterpriseFourFactors请求参数结构体
 * @class
 */
class VerifyEnterpriseFourFactorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名
         * @type {string || null}
         */
        this.RealName = null;

        /**
         * 证件号码（公司注册证件号）
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 企业全称
         * @type {string || null}
         */
        this.EnterpriseName = null;

        /**
         * 企业标识（注册号，统一社会信用代码）
         * @type {string || null}
         */
        this.EnterpriseMark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealName = 'RealName' in params ? params.RealName : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.EnterpriseName = 'EnterpriseName' in params ? params.EnterpriseName : null;
        this.EnterpriseMark = 'EnterpriseMark' in params ? params.EnterpriseMark : null;

    }
}

/**
 * GeneralAccurateOCR请求参数结构体
 * @class
 */
class GeneralAccurateOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * OrgCodeCertOCR请求参数结构体
 * @class
 */
class OrgCodeCertOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * FlightInvoiceOCR返回参数结构体
 * @class
 */
class FlightInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机票行程单识别结果，具体内容请点击左侧链接。
         * @type {Array.<FlightInvoiceInfo> || null}
         */
        this.FlightInvoiceInfos = null;

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

        if (params.FlightInvoiceInfos) {
            this.FlightInvoiceInfos = new Array();
            for (let z in params.FlightInvoiceInfos) {
                let obj = new FlightInvoiceInfo();
                obj.deserialize(params.FlightInvoiceInfos[z]);
                this.FlightInvoiceInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InstitutionOCR请求参数结构体
 * @class
 */
class InstitutionOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 购车发票识别结果
 * @class
 */
class CarInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称(关键字)，支持以下字段：
发票代码、 机打代码、 发票号码、 发动机号码、 合格证号、 机打号码、 价税合计(小写)、 销货单位名称、 身份证号码/组织机构代码、 购买方名称、 销售方纳税人识别号、 购买方纳税人识别号、主管税务机关、 主管税务机关代码、 开票日期、 不含税价(小写)、 吨位、增值税税率或征收率、 车辆识别代号/车架号码、 增值税税额、 厂牌型号、 省、 市、 发票消费类型、 销售方电话、 销售方账号、 产地、 进口证明书号、 车辆类型、 机器编号、备注、开票人、限乘人数、商检单号、销售方地址、销售方开户银行、价税合计。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 字段在旋转纠正之后的图像中的像素坐标。
         * @type {Rect || null}
         */
        this.Rect = null;

        /**
         * 字段在原图中的中的四点坐标。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Polygon || null}
         */
        this.Polygon = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

        if (params.Polygon) {
            let obj = new Polygon();
            obj.deserialize(params.Polygon)
            this.Polygon = obj;
        }

    }
}

/**
 * 机票行程单识别结果
 * @class
 */
class FlightInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称(关键字)，支持以下字段：
票价、合计金额、填开日期、有效身份证件号码、电子客票号码、验证码、旅客姓名、填开单位、其他税费、燃油附加费、民航发展基金、保险费、销售单位代号、始发地、目的地、航班号、时间、日期、座位等级、承运人、发票消费类型、国内国际标签、印刷序号、客票级别/类别、客票生效日期、有效期截止日期、免费行李。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段 Name 对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 多个行程的字段所在行号，下标从0开始，非行字段或未能识别行号的该值返回-1。
         * @type {number || null}
         */
        this.Row = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Row = 'Row' in params ? params.Row : null;

    }
}

/**
 * 行驶证主页正面的识别结果
 * @class
 */
class TextVehicleFront extends  AbstractModel {
    constructor(){
        super();

        /**
         * 号牌号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlateNo = null;

        /**
         * 车辆类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VehicleType = null;

        /**
         * 所有人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 住址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 使用性质
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UseCharacter = null;

        /**
         * 品牌型号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Model = null;

        /**
         * 车辆识别代号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vin = null;

        /**
         * 发动机号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EngineNo = null;

        /**
         * 注册日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegisterDate = null;

        /**
         * 发证日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IssueDate = null;

        /**
         * 印章
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Seal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlateNo = 'PlateNo' in params ? params.PlateNo : null;
        this.VehicleType = 'VehicleType' in params ? params.VehicleType : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.UseCharacter = 'UseCharacter' in params ? params.UseCharacter : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.Vin = 'Vin' in params ? params.Vin : null;
        this.EngineNo = 'EngineNo' in params ? params.EngineNo : null;
        this.RegisterDate = 'RegisterDate' in params ? params.RegisterDate : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;
        this.Seal = 'Seal' in params ? params.Seal : null;

    }
}

/**
 * 广告文字识别结果
 * @class
 */
class AdvertiseTextDetection extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * 置信度 0 ~100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段。
GeneralBasicOcr接口返回段落信息Parag，包含ParagNo。
         * @type {string || null}
         */
        this.AdvancedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

    }
}

/**
 * 金融票据切片识别单个字段的内容
 * @class
 */
class FinanBillSliceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称(关键字)，支持以下字段：
大写金额、小写金额、账号、票号1、票号2、收款人、大写日期、同城交换号、地址-省份、地址-城市、付款行全称、支票密码、支票用途。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * QueryBarCode返回参数结构体
 * @class
 */
class QueryBarCodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 条码
         * @type {string || null}
         */
        this.BarCode = null;

        /**
         * 条码信息数组
         * @type {Array.<ProductDataRecord> || null}
         */
        this.ProductDataRecords = null;

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
        this.BarCode = 'BarCode' in params ? params.BarCode : null;

        if (params.ProductDataRecords) {
            this.ProductDataRecords = new Array();
            for (let z in params.ProductDataRecords) {
                let obj = new ProductDataRecord();
                obj.deserialize(params.ProductDataRecords[z]);
                this.ProductDataRecords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ArithmeticOCR请求参数结构体
 * @class
 */
class ArithmeticOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 用于选择是否支持横屏拍摄。打开则支持横屏拍摄图片角度判断，角度信息在返回参数的angle中，默认值为true
         * @type {boolean || null}
         */
        this.SupportHorizontalImage = null;

        /**
         * 是否拒绝非速算图，打开则拒绝非速算图(注：非速算图是指风景人物等明显不是速算图片的图片)，默认值为false
         * @type {boolean || null}
         */
        this.RejectNonArithmeticPic = null;

        /**
         * 是否展开耦合算式中的竖式计算，默认值为false
         * @type {boolean || null}
         */
        this.EnableDispRelatedVertical = null;

        /**
         * 是否展示竖式算式的中间结果和格式控制字符，默认值为false
         * @type {boolean || null}
         */
        this.EnableDispMidResult = null;

        /**
         * 是否开启pdf识别，默认值为true
         * @type {boolean || null}
         */
        this.EnablePdfRecognize = null;

        /**
         * pdf页码，从0开始，默认为0
         * @type {number || null}
         */
        this.PdfPageIndex = null;

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
        this.SupportHorizontalImage = 'SupportHorizontalImage' in params ? params.SupportHorizontalImage : null;
        this.RejectNonArithmeticPic = 'RejectNonArithmeticPic' in params ? params.RejectNonArithmeticPic : null;
        this.EnableDispRelatedVertical = 'EnableDispRelatedVertical' in params ? params.EnableDispRelatedVertical : null;
        this.EnableDispMidResult = 'EnableDispMidResult' in params ? params.EnableDispMidResult : null;
        this.EnablePdfRecognize = 'EnablePdfRecognize' in params ? params.EnablePdfRecognize : null;
        this.PdfPageIndex = 'PdfPageIndex' in params ? params.PdfPageIndex : null;

    }
}

/**
 * VerifyOfdVatInvoiceOCR请求参数结构体
 * @class
 */
class VerifyOfdVatInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * OFD文件的 Url 地址。
         * @type {string || null}
         */
        this.OfdFileUrl = null;

        /**
         * OFD文件的 Base64 值。
OfdFileUrl 和 OfdFileBase64 必传其一，若两者都传，只解析OfdFileBase64。
         * @type {string || null}
         */
        this.OfdFileBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OfdFileUrl = 'OfdFileUrl' in params ? params.OfdFileUrl : null;
        this.OfdFileBase64 = 'OfdFileBase64' in params ? params.OfdFileBase64 : null;

    }
}

/**
 * FinanBillSliceOCR请求参数结构体
 * @class
 */
class FinanBillSliceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * MLIDPassportOCR返回参数结构体
 * @class
 */
class MLIDPassportOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 护照ID
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 出生日期
         * @type {string || null}
         */
        this.DateOfBirth = null;

        /**
         * 性别（F女，M男）
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 有效期
         * @type {string || null}
         */
        this.DateOfExpiration = null;

        /**
         * 发行国
         * @type {string || null}
         */
        this.IssuingCountry = null;

        /**
         * 国籍
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * 告警码
-9103	证照翻拍告警
-9102	证照复印件告警
-9106       证件遮挡告警
         * @type {Array.<number> || null}
         */
        this.Warn = null;

        /**
         * 证件图片
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 扩展字段:
{
    ID:{
        Confidence:0.9999
    },
    Name:{
        Confidence:0.9996
    }
}
         * @type {string || null}
         */
        this.AdvancedInfo = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DateOfBirth = 'DateOfBirth' in params ? params.DateOfBirth : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.DateOfExpiration = 'DateOfExpiration' in params ? params.DateOfExpiration : null;
        this.IssuingCountry = 'IssuingCountry' in params ? params.IssuingCountry : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Warn = 'Warn' in params ? params.Warn : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VatRollInvoiceOCR请求参数结构体
 * @class
 */
class VatRollInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 表格标题
 * @class
 */
class TableTitle extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 坐标
 * @class
 */
class Coord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 横坐标
         * @type {number || null}
         */
        this.X = null;

        /**
         * 纵坐标
         * @type {number || null}
         */
        this.Y = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;

    }
}

/**
 * SealOCR返回参数结构体
 * @class
 */
class SealOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 印章内容
         * @type {string || null}
         */
        this.SealBody = null;

        /**
         * 印章坐标
         * @type {Rect || null}
         */
        this.Location = null;

        /**
         * 其它文本内容
         * @type {Array.<string> || null}
         */
        this.OtherTexts = null;

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
        this.SealBody = 'SealBody' in params ? params.SealBody : null;

        if (params.Location) {
            let obj = new Rect();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.OtherTexts = 'OtherTexts' in params ? params.OtherTexts : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 识别出的字段
 * @class
 */
class DutyPaidProofInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称(关键字)，支持以下字段：
税号 、纳税人识别号 、纳税人名称 、金额合计大写 、金额合计小写 、填发日期 、税务机关 、填票人。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         * @type {Rect || null}
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * FinanBillOCR返回参数结构体
 * @class
 */
class FinanBillOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 金融票据整单识别结果，具体内容请点击左侧链接。
         * @type {Array.<FinanBillInfo> || null}
         */
        this.FinanBillInfos = null;

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

        if (params.FinanBillInfos) {
            this.FinanBillInfos = new Array();
            for (let z in params.FinanBillInfos) {
                let obj = new FinanBillInfo();
                obj.deserialize(params.FinanBillInfos[z]);
                this.FinanBillInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ShipInvoiceOCR请求参数结构体
 * @class
 */
class ShipInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 运单识别结果
 * @class
 */
class TextWaybill extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收件人姓名
         * @type {WaybillObj || null}
         */
        this.RecName = null;

        /**
         * 收件人手机号
         * @type {WaybillObj || null}
         */
        this.RecNum = null;

        /**
         * 收件人地址
         * @type {WaybillObj || null}
         */
        this.RecAddr = null;

        /**
         * 寄件人姓名
         * @type {WaybillObj || null}
         */
        this.SenderName = null;

        /**
         * 寄件人手机号
         * @type {WaybillObj || null}
         */
        this.SenderNum = null;

        /**
         * 寄件人地址
         * @type {WaybillObj || null}
         */
        this.SenderAddr = null;

        /**
         * 运单号
         * @type {WaybillObj || null}
         */
        this.WaybillNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecName) {
            let obj = new WaybillObj();
            obj.deserialize(params.RecName)
            this.RecName = obj;
        }

        if (params.RecNum) {
            let obj = new WaybillObj();
            obj.deserialize(params.RecNum)
            this.RecNum = obj;
        }

        if (params.RecAddr) {
            let obj = new WaybillObj();
            obj.deserialize(params.RecAddr)
            this.RecAddr = obj;
        }

        if (params.SenderName) {
            let obj = new WaybillObj();
            obj.deserialize(params.SenderName)
            this.SenderName = obj;
        }

        if (params.SenderNum) {
            let obj = new WaybillObj();
            obj.deserialize(params.SenderNum)
            this.SenderNum = obj;
        }

        if (params.SenderAddr) {
            let obj = new WaybillObj();
            obj.deserialize(params.SenderAddr)
            this.SenderAddr = obj;
        }

        if (params.WaybillNum) {
            let obj = new WaybillObj();
            obj.deserialize(params.WaybillNum)
            this.WaybillNum = obj;
        }

    }
}

/**
 * 试题识别结构化信息
 * @class
 */
class QuestionObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 题号
         * @type {string || null}
         */
        this.QuestionTextNo = null;

        /**
         * 题型：
1: "选择题"
2: "填空题"
3: "解答题"
         * @type {number || null}
         */
        this.QuestionTextType = null;

        /**
         * 题干
         * @type {string || null}
         */
        this.QuestionText = null;

        /**
         * 选择题选项，包含1个或多个option
         * @type {string || null}
         */
        this.QuestionOptions = null;

        /**
         * 所有子题的question属性
         * @type {string || null}
         */
        this.QuestionSubquestion = null;

        /**
         * 示意图检测框在的图片中的像素坐标
         * @type {Array.<Rect> || null}
         */
        this.QuestionImageCoords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QuestionTextNo = 'QuestionTextNo' in params ? params.QuestionTextNo : null;
        this.QuestionTextType = 'QuestionTextType' in params ? params.QuestionTextType : null;
        this.QuestionText = 'QuestionText' in params ? params.QuestionText : null;
        this.QuestionOptions = 'QuestionOptions' in params ? params.QuestionOptions : null;
        this.QuestionSubquestion = 'QuestionSubquestion' in params ? params.QuestionSubquestion : null;

        if (params.QuestionImageCoords) {
            this.QuestionImageCoords = new Array();
            for (let z in params.QuestionImageCoords) {
                let obj = new Rect();
                obj.deserialize(params.QuestionImageCoords[z]);
                this.QuestionImageCoords.push(obj);
            }
        }

    }
}

/**
 * VinOCR返回参数结构体
 * @class
 */
class VinOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的车辆 VIN 码。
         * @type {string || null}
         */
        this.Vin = null;

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
        this.Vin = 'Vin' in params ? params.Vin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EduPaperOCR请求参数结构体
 * @class
 */
class EduPaperOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 扩展配置信息。
配置格式：{"option1":value1,"option2":value2}
1. task_type：任务类型【0: 关闭版式分析与处理 1: 开启版式分析处理】可选参数，Int32类型，默认值为1
2. is_structuralization：是否结构化输出【true：返回包体同时返回通用和结构化输出  false：返回包体返回通用输出】 可选参数，Bool类型，默认值为true
3. if_readable_format：是否按照版式整合通用文本/公式输出结果 可选参数，Bool类型，默认值为false
示例：
{"task_type": 1,"is_structuralization": true,"if_readable_format": true}
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
 * FormulaOCR请求参数结构体
 * @class
 */
class FormulaOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * PassportOCR请求参数结构体
 * @class
 */
class PassportOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 默认填写CN
支持中国大陆地区护照。
         * @type {string || null}
         */
        this.Type = null;

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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DutyPaidProofOCR请求参数结构体
 * @class
 */
class DutyPaidProofOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * RideHailingDriverLicenseOCR请求参数结构体
 * @class
 */
class RideHailingDriverLicenseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * QueryBarCode请求参数结构体
 * @class
 */
class QueryBarCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 条形码
         * @type {string || null}
         */
        this.BarCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BarCode = 'BarCode' in params ? params.BarCode : null;

    }
}

/**
 * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
 * @class
 */
class ItemCoord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 左上角x
         * @type {number || null}
         */
        this.X = null;

        /**
         * 左上角y
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 宽width
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 高height
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * OrgCodeCertOCR返回参数结构体
 * @class
 */
class OrgCodeCertOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代码
         * @type {string || null}
         */
        this.OrgCode = null;

        /**
         * 机构名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 有效期
         * @type {string || null}
         */
        this.ValidDate = null;

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
        this.OrgCode = 'OrgCode' in params ? params.OrgCode : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MixedInvoiceOCR请求参数结构体
 * @class
 */
class MixedInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 需要识别的票据类型列表，为空或不填表示识别全部类型。
0：出租车发票
1：定额发票
2：火车票
3：增值税发票
5：机票行程单
8：通用机打发票
9：汽车票
10：轮船票
11：增值税发票（卷票 ）
12：购车发票
13：过路过桥费发票
         * @type {Array.<number> || null}
         */
        this.Types = null;

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
        this.Types = 'Types' in params ? params.Types : null;

    }
}

/**
 * 表格内容检测
 * @class
 */
class TableDetectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元格内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TableCell> || null}
         */
        this.Cells = null;

        /**
         * 表格标题
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TableTitle> || null}
         */
        this.Titles = null;

        /**
         * 图像中的文本块类型，0 为非表格文本，
1 为有线表格，2 为无线表格
（接口暂不支持日文无线表格识别，若传入日文无线表格，返回0）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 表格主体四个顶点坐标（依次为左上角，
右上角，右下角，左下角）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.TableCoordPoint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Cells) {
            this.Cells = new Array();
            for (let z in params.Cells) {
                let obj = new TableCell();
                obj.deserialize(params.Cells[z]);
                this.Cells.push(obj);
            }
        }

        if (params.Titles) {
            this.Titles = new Array();
            for (let z in params.Titles) {
                let obj = new TableTitle();
                obj.deserialize(params.Titles[z]);
                this.Titles.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TableCoordPoint) {
            this.TableCoordPoint = new Array();
            for (let z in params.TableCoordPoint) {
                let obj = new Coord();
                obj.deserialize(params.TableCoordPoint[z]);
                this.TableCoordPoint.push(obj);
            }
        }

    }
}

/**
 * ResidenceBookletOCR返回参数结构体
 * @class
 */
class ResidenceBookletOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 户号
         * @type {string || null}
         */
        this.HouseholdNumber = null;

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
         * 出生地
         * @type {string || null}
         */
        this.BirthPlace = null;

        /**
         * 民族
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * 籍贯
         * @type {string || null}
         */
        this.NativePlace = null;

        /**
         * 出生日期
         * @type {string || null}
         */
        this.BirthDate = null;

        /**
         * 公民身份证件编号
         * @type {string || null}
         */
        this.IdCardNumber = null;

        /**
         * 文化程度
         * @type {string || null}
         */
        this.EducationDegree = null;

        /**
         * 服务处所
         * @type {string || null}
         */
        this.ServicePlace = null;

        /**
         * 户别
         * @type {string || null}
         */
        this.Household = null;

        /**
         * 住址
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
        this.HouseholdNumber = 'HouseholdNumber' in params ? params.HouseholdNumber : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.BirthPlace = 'BirthPlace' in params ? params.BirthPlace : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.NativePlace = 'NativePlace' in params ? params.NativePlace : null;
        this.BirthDate = 'BirthDate' in params ? params.BirthDate : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.EducationDegree = 'EducationDegree' in params ? params.EducationDegree : null;
        this.ServicePlace = 'ServicePlace' in params ? params.ServicePlace : null;
        this.Household = 'Household' in params ? params.Household : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CarInvoiceOCR返回参数结构体
 * @class
 */
class CarInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购车发票识别结果，具体内容请点击左侧链接。
         * @type {Array.<CarInvoiceInfo> || null}
         */
        this.CarInvoiceInfos = null;

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

        if (params.CarInvoiceInfos) {
            this.CarInvoiceInfos = new Array();
            for (let z in params.CarInvoiceInfos) {
                let obj = new CarInvoiceInfo();
                obj.deserialize(params.CarInvoiceInfos[z]);
                this.CarInvoiceInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GeneralFastOCR请求参数结构体
 * @class
 */
class GeneralFastOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
         * @type {boolean || null}
         */
        this.IsPdf = null;

        /**
         * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
         * @type {number || null}
         */
        this.PdfPageNumber = null;

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
        this.IsPdf = 'IsPdf' in params ? params.IsPdf : null;
        this.PdfPageNumber = 'PdfPageNumber' in params ? params.PdfPageNumber : null;

    }
}

/**
 * 文本的坐标，以四个顶点坐标表示
注意：此字段可能返回 null，表示取不到有效值
 * @class
 */
class Polygon extends  AbstractModel {
    constructor(){
        super();

        /**
         * 左上顶点坐标
         * @type {Coord || null}
         */
        this.LeftTop = null;

        /**
         * 右上顶点坐标
         * @type {Coord || null}
         */
        this.RightTop = null;

        /**
         * 右下顶点坐标
         * @type {Coord || null}
         */
        this.RightBottom = null;

        /**
         * 左下顶点坐标
         * @type {Coord || null}
         */
        this.LeftBottom = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LeftTop) {
            let obj = new Coord();
            obj.deserialize(params.LeftTop)
            this.LeftTop = obj;
        }

        if (params.RightTop) {
            let obj = new Coord();
            obj.deserialize(params.RightTop)
            this.RightTop = obj;
        }

        if (params.RightBottom) {
            let obj = new Coord();
            obj.deserialize(params.RightBottom)
            this.RightBottom = obj;
        }

        if (params.LeftBottom) {
            let obj = new Coord();
            obj.deserialize(params.LeftBottom)
            this.LeftBottom = obj;
        }

    }
}

/**
 * ShipInvoiceOCR返回参数结构体
 * @class
 */
class ShipInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 轮船票识别结果，具体内容请点击左侧链接。
         * @type {Array.<ShipInvoiceInfo> || null}
         */
        this.ShipInvoiceInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.ShipInvoiceInfos) {
            this.ShipInvoiceInfos = new Array();
            for (let z in params.ShipInvoiceInfos) {
                let obj = new ShipInvoiceInfo();
                obj.deserialize(params.ShipInvoiceInfos[z]);
                this.ShipInvoiceInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 保险单据信息
 * @class
 */
class InsuranceBillInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称(关键字)，支持以下字段：
【病案首页】
姓名、性别、出生日期、出院诊断、疾病编码、入院病情等。
【费用清单】
医疗参保人员类别、身份证号、入院方式、结账日期、项目、金额等。
【结算单】
名称、单价、数量、金额、医保内、医保外等。
【医疗发票】
姓名、性别、住院时间、收费项目、金额、合计等。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * VehicleRegCertOCR返回参数结构体
 * @class
 */
class VehicleRegCertOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机动车登记证书识别结果，具体内容请点击左侧链接。
         * @type {Array.<VehicleRegCertInfo> || null}
         */
        this.VehicleRegCertInfos = null;

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

        if (params.VehicleRegCertInfos) {
            this.VehicleRegCertInfos = new Array();
            for (let z in params.VehicleRegCertInfos) {
                let obj = new VehicleRegCertInfo();
                obj.deserialize(params.VehicleRegCertInfos[z]);
                this.VehicleRegCertInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 卡证智能分类结果
 * @class
 */
class ClassifyDetectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类名称，包括：身份证、护照、名片、银行卡、行驶证、驾驶证、港澳台通行证、户口本、港澳台来往内地通行证、港澳台居住证、不动产证、营业执照
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分类类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 位置坐标
         * @type {Rect || null}
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * GeneralAccurateOCR返回参数结构体
 * @class
 */
class GeneralAccurateOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
         * @type {Array.<TextDetection> || null}
         */
        this.TextDetections = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
         * @type {number || null}
         */
        this.Angel = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SealOCR请求参数结构体
 * @class
 */
class SealOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * VerifyOfdVatInvoiceOCR返回参数结构体
 * @class
 */
class VerifyOfdVatInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票类型
026:增值税电子普通发票
028:增值税电子专用发票
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 发票代码
         * @type {string || null}
         */
        this.InvoiceCode = null;

        /**
         * 发票号码
         * @type {string || null}
         */
        this.InvoiceNumber = null;

        /**
         * 开票日期
         * @type {string || null}
         */
        this.IssueDate = null;

        /**
         * 验证码
         * @type {string || null}
         */
        this.InvoiceCheckCode = null;

        /**
         * 机器编号
         * @type {string || null}
         */
        this.MachineNumber = null;

        /**
         * 密码区
         * @type {string || null}
         */
        this.TaxControlCode = null;

        /**
         * 购买方
         * @type {VatInvoiceUserInfo || null}
         */
        this.Buyer = null;

        /**
         * 销售方
         * @type {VatInvoiceUserInfo || null}
         */
        this.Seller = null;

        /**
         * 价税合计
         * @type {string || null}
         */
        this.TaxInclusiveTotalAmount = null;

        /**
         * 开票人
         * @type {string || null}
         */
        this.InvoiceClerk = null;

        /**
         * 收款人
         * @type {string || null}
         */
        this.Payee = null;

        /**
         * 复核人
         * @type {string || null}
         */
        this.Checker = null;

        /**
         * 税额
         * @type {string || null}
         */
        this.TaxTotalAmount = null;

        /**
         * 不含税金额
         * @type {string || null}
         */
        this.TaxExclusiveTotalAmount = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 货物或服务清单
         * @type {Array.<VatInvoiceGoodsInfo> || null}
         */
        this.GoodsInfos = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.InvoiceCode = 'InvoiceCode' in params ? params.InvoiceCode : null;
        this.InvoiceNumber = 'InvoiceNumber' in params ? params.InvoiceNumber : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;
        this.InvoiceCheckCode = 'InvoiceCheckCode' in params ? params.InvoiceCheckCode : null;
        this.MachineNumber = 'MachineNumber' in params ? params.MachineNumber : null;
        this.TaxControlCode = 'TaxControlCode' in params ? params.TaxControlCode : null;

        if (params.Buyer) {
            let obj = new VatInvoiceUserInfo();
            obj.deserialize(params.Buyer)
            this.Buyer = obj;
        }

        if (params.Seller) {
            let obj = new VatInvoiceUserInfo();
            obj.deserialize(params.Seller)
            this.Seller = obj;
        }
        this.TaxInclusiveTotalAmount = 'TaxInclusiveTotalAmount' in params ? params.TaxInclusiveTotalAmount : null;
        this.InvoiceClerk = 'InvoiceClerk' in params ? params.InvoiceClerk : null;
        this.Payee = 'Payee' in params ? params.Payee : null;
        this.Checker = 'Checker' in params ? params.Checker : null;
        this.TaxTotalAmount = 'TaxTotalAmount' in params ? params.TaxTotalAmount : null;
        this.TaxExclusiveTotalAmount = 'TaxExclusiveTotalAmount' in params ? params.TaxExclusiveTotalAmount : null;
        this.Note = 'Note' in params ? params.Note : null;

        if (params.GoodsInfos) {
            this.GoodsInfos = new Array();
            for (let z in params.GoodsInfos) {
                let obj = new VatInvoiceGoodsInfo();
                obj.deserialize(params.GoodsInfos[z]);
                this.GoodsInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表格识别结果
 * @class
 */
class TextTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元格左上角的列索引
         * @type {number || null}
         */
        this.ColTl = null;

        /**
         * 单元格左上角的行索引
         * @type {number || null}
         */
        this.RowTl = null;

        /**
         * 单元格右下角的列索引
         * @type {number || null}
         */
        this.ColBr = null;

        /**
         * 单元格右下角的行索引
         * @type {number || null}
         */
        this.RowBr = null;

        /**
         * 单元格文字
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 单元格类型，包含body（表格主体）、header（表头）、footer（表尾）三种
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 置信度 0 ~100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段
         * @type {string || null}
         */
        this.AdvancedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ColTl = 'ColTl' in params ? params.ColTl : null;
        this.RowTl = 'RowTl' in params ? params.RowTl : null;
        this.ColBr = 'ColBr' in params ? params.ColBr : null;
        this.RowBr = 'RowBr' in params ? params.RowBr : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

    }
}

/**
 * ResidenceBookletOCR请求参数结构体
 * @class
 */
class ResidenceBookletOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * BusInvoiceOCR返回参数结构体
 * @class
 */
class BusInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 汽车票识别结果，具体内容请点击左侧链接。
         * @type {Array.<BusInvoiceInfo> || null}
         */
        this.BusInvoiceInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.BusInvoiceInfos) {
            this.BusInvoiceInfos = new Array();
            for (let z in params.BusInvoiceInfos) {
                let obj = new BusInvoiceInfo();
                obj.deserialize(params.BusInvoiceInfos[z]);
                this.BusInvoiceInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 二维码/条形码识别结果信息
 * @class
 */
class QrcodeResultsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型（二维码、条形码）
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 二维码/条形码包含的地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 二维码/条形码坐标（二维码会返回位置坐标，条形码暂不返回位置坐标，因此默认X和Y返回值均为-1）
         * @type {QrcodePositionObj || null}
         */
        this.Position = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.Position) {
            let obj = new QrcodePositionObj();
            obj.deserialize(params.Position)
            this.Position = obj;
        }

    }
}

/**
 * MainlandPermitOCR返回参数结构体
 * @class
 */
class MainlandPermitOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 中文姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 英文姓名
         * @type {string || null}
         */
        this.EnglishName = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 出生日期
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * 签发机关
         * @type {string || null}
         */
        this.IssueAuthority = null;

        /**
         * 有效期限
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * 证件号
         * @type {string || null}
         */
        this.Number = null;

        /**
         * 签发地点
         * @type {string || null}
         */
        this.IssueAddress = null;

        /**
         * 签发次数
         * @type {string || null}
         */
        this.IssueNumber = null;

        /**
         * 证件类别， 如：台湾居民来往大陆通行证、港澳居民来往内地通行证。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * RetProfile为True时返回头像字段， Base64编码
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.EnglishName = 'EnglishName' in params ? params.EnglishName : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.IssueAuthority = 'IssueAuthority' in params ? params.IssueAuthority : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.IssueAddress = 'IssueAddress' in params ? params.IssueAddress : null;
        this.IssueNumber = 'IssueNumber' in params ? params.IssueNumber : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 增值税发票信息
 * @class
 */
class VatInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票代码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 发票号码
         * @type {string || null}
         */
        this.Number = null;

        /**
         * 开票日期
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 购方抬头
         * @type {string || null}
         */
        this.BuyerName = null;

        /**
         * 购方税号
         * @type {string || null}
         */
        this.BuyerTaxCode = null;

        /**
         * 购方地址电话
         * @type {string || null}
         */
        this.BuyerAddressPhone = null;

        /**
         * 购方银行账号
         * @type {string || null}
         */
        this.BuyerBankAccount = null;

        /**
         * 销方名称
         * @type {string || null}
         */
        this.SellerName = null;

        /**
         * 销方税号
         * @type {string || null}
         */
        this.SellerTaxCode = null;

        /**
         * 销方地址电话
         * @type {string || null}
         */
        this.SellerAddressPhone = null;

        /**
         * 销方银行账号
         * @type {string || null}
         */
        this.SellerBankAccount = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 机器编码
         * @type {string || null}
         */
        this.MachineNo = null;

        /**
         * 发票类型
01：专用发票 
02：货运发票
03：机动车发票 
04：普通发票 
10：电子发票 
11：卷式发票 
14：通行费发票 
15：二手车发票
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 检验码
         * @type {string || null}
         */
        this.CheckCode = null;

        /**
         * 是否作废（红冲）是否作废（红冲）
Y: 已作废 N：未作废 H：红冲
         * @type {string || null}
         */
        this.IsAbandoned = null;

        /**
         * 是否有销货清单 
Y: 有清单 N：无清单 
卷票无
         * @type {string || null}
         */
        this.HasSellerList = null;

        /**
         * 销货清单标题
         * @type {string || null}
         */
        this.SellerListTitle = null;

        /**
         * 销货清单税额
         * @type {string || null}
         */
        this.SellerListTax = null;

        /**
         * 不含税金额
         * @type {string || null}
         */
        this.AmountWithoutTax = null;

        /**
         * 税额
         * @type {string || null}
         */
        this.TaxAmount = null;

        /**
         * 含税金额
         * @type {string || null}
         */
        this.AmountWithTax = null;

        /**
         * 项目明细
         * @type {Array.<VatInvoiceItem> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.BuyerName = 'BuyerName' in params ? params.BuyerName : null;
        this.BuyerTaxCode = 'BuyerTaxCode' in params ? params.BuyerTaxCode : null;
        this.BuyerAddressPhone = 'BuyerAddressPhone' in params ? params.BuyerAddressPhone : null;
        this.BuyerBankAccount = 'BuyerBankAccount' in params ? params.BuyerBankAccount : null;
        this.SellerName = 'SellerName' in params ? params.SellerName : null;
        this.SellerTaxCode = 'SellerTaxCode' in params ? params.SellerTaxCode : null;
        this.SellerAddressPhone = 'SellerAddressPhone' in params ? params.SellerAddressPhone : null;
        this.SellerBankAccount = 'SellerBankAccount' in params ? params.SellerBankAccount : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.MachineNo = 'MachineNo' in params ? params.MachineNo : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CheckCode = 'CheckCode' in params ? params.CheckCode : null;
        this.IsAbandoned = 'IsAbandoned' in params ? params.IsAbandoned : null;
        this.HasSellerList = 'HasSellerList' in params ? params.HasSellerList : null;
        this.SellerListTitle = 'SellerListTitle' in params ? params.SellerListTitle : null;
        this.SellerListTax = 'SellerListTax' in params ? params.SellerListTax : null;
        this.AmountWithoutTax = 'AmountWithoutTax' in params ? params.AmountWithoutTax : null;
        this.TaxAmount = 'TaxAmount' in params ? params.TaxAmount : null;
        this.AmountWithTax = 'AmountWithTax' in params ? params.AmountWithTax : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new VatInvoiceItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * HmtResidentPermitOCR返回参数结构体
 * @class
 */
class HmtResidentPermitOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证件姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Sex = null;

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
        this.IdCardNo = null;

        /**
         * 0-正面
1-反面
         * @type {number || null}
         */
        this.CardType = null;

        /**
         * 证件有效期限
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * 签发机关
         * @type {string || null}
         */
        this.Authority = null;

        /**
         * 签发次数
         * @type {string || null}
         */
        this.VisaNum = null;

        /**
         * 通行证号码
         * @type {string || null}
         */
        this.PassNo = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birth = 'Birth' in params ? params.Birth : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.IdCardNo = 'IdCardNo' in params ? params.IdCardNo : null;
        this.CardType = 'CardType' in params ? params.CardType : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.Authority = 'Authority' in params ? params.Authority : null;
        this.VisaNum = 'VisaNum' in params ? params.VisaNum : null;
        this.PassNo = 'PassNo' in params ? params.PassNo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnglishOCR返回参数结构体
 * @class
 */
class EnglishOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextDetectionEn> || null}
         */
        this.TextDetections = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
         * @type {number || null}
         */
        this.Angel = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetectionEn();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BusInvoiceOCR请求参数结构体
 * @class
 */
class BusInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * QuotaInvoiceOCR返回参数结构体
 * @class
 */
class QuotaInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票号码
         * @type {string || null}
         */
        this.InvoiceNum = null;

        /**
         * 发票代码
         * @type {string || null}
         */
        this.InvoiceCode = null;

        /**
         * 大写金额
         * @type {string || null}
         */
        this.Rate = null;

        /**
         * 小写金额
         * @type {string || null}
         */
        this.RateNum = null;

        /**
         * 发票消费类型
         * @type {string || null}
         */
        this.InvoiceType = null;

        /**
         * 省
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

        /**
         * 是否有公司印章（1有 0无 空为识别不出）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HasStamp = null;

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
        this.InvoiceNum = 'InvoiceNum' in params ? params.InvoiceNum : null;
        this.InvoiceCode = 'InvoiceCode' in params ? params.InvoiceCode : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.RateNum = 'RateNum' in params ? params.RateNum : null;
        this.InvoiceType = 'InvoiceType' in params ? params.InvoiceType : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.HasStamp = 'HasStamp' in params ? params.HasStamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RideHailingTransportLicenseOCR返回参数结构体
 * @class
 */
class RideHailingTransportLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交运管许可字号。
         * @type {string || null}
         */
        this.OperationLicenseNumber = null;

        /**
         * 车辆所有人，对应网约车运输证字段：车辆所有人/车主名称/业户名称。
         * @type {string || null}
         */
        this.VehicleOwner = null;

        /**
         * 车牌号码，对应网约车运输证字段：车牌号码/车辆号牌。
         * @type {string || null}
         */
        this.VehicleNumber = null;

        /**
         * 有效起始日期。
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 有效期截止时间，对应网约车运输证字段：有效期至/营运期限止。
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 初始发证日期，对应网约车运输证字段：初始领证日期/发证日期。
         * @type {string || null}
         */
        this.ReleaseDate = null;

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
        this.OperationLicenseNumber = 'OperationLicenseNumber' in params ? params.OperationLicenseNumber : null;
        this.VehicleOwner = 'VehicleOwner' in params ? params.VehicleOwner : null;
        this.VehicleNumber = 'VehicleNumber' in params ? params.VehicleNumber : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ReleaseDate = 'ReleaseDate' in params ? params.ReleaseDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 候选字符集(包含候选字Character以及置信度Confidence)
 * @class
 */
class CandWord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 候选字符集的单词信息（包括单词Character和单词置信度confidence）
         * @type {Array.<Words> || null}
         */
        this.CandWords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CandWords) {
            this.CandWords = new Array();
            for (let z in params.CandWords) {
                let obj = new Words();
                obj.deserialize(params.CandWords[z]);
                this.CandWords.push(obj);
            }
        }

    }
}

/**
 * 企业证照单个字段的内容
 * @class
 */
class EnterpriseLicenseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字），不同证件类型可能不同，证件类型包含企业登记证书、许可证书、企业执照、三证合一类证书；
支持以下字段：统一社会信用代码、法定代表人、公司名称、公司地址、注册资金、企业关型、经营范围、成立日期、有效期、开办资金、经费来源、举办单位等；
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * InsuranceBillOCR请求参数结构体
 * @class
 */
class InsuranceBillOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * GeneralHandwritingOCR返回参数结构体
 * @class
 */
class GeneralHandwritingOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextGeneralHandwriting> || null}
         */
        this.TextDetections = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
         * @type {number || null}
         */
        this.Angel = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextGeneralHandwriting();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 单元格数据
 * @class
 */
class TableCell extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元格左上角的列索引
         * @type {number || null}
         */
        this.ColTl = null;

        /**
         * 单元格左上角的行索引
         * @type {number || null}
         */
        this.RowTl = null;

        /**
         * 单元格右下角的列索引
         * @type {number || null}
         */
        this.ColBr = null;

        /**
         * 单元格右下角的行索引
         * @type {number || null}
         */
        this.RowBr = null;

        /**
         * 单元格内识别出的字符串文本，若文本存在多行，以换行符"\n"隔开
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 单元格类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 单元格置信度
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 单元格在图像中的四点坐标
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdvancedInfo = null;

        /**
         * 单元格文本属性
         * @type {Array.<CellContent> || null}
         */
        this.Contents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ColTl = 'ColTl' in params ? params.ColTl : null;
        this.RowTl = 'RowTl' in params ? params.RowTl : null;
        this.ColBr = 'ColBr' in params ? params.ColBr : null;
        this.RowBr = 'RowBr' in params ? params.RowBr : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

        if (params.Contents) {
            this.Contents = new Array();
            for (let z in params.Contents) {
                let obj = new CellContent();
                obj.deserialize(params.Contents[z]);
                this.Contents.push(obj);
            }
        }

    }
}

/**
 * TableOCR返回参数结构体
 * @class
 */
class TableOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接
         * @type {Array.<TextTable> || null}
         */
        this.TextDetections = null;

        /**
         * Base64 编码后的 Excel 数据。
         * @type {string || null}
         */
        this.Data = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextTable();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数学试题识别结构化对象
 * @class
 */
class QuestionBlockObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数学试题识别结构化信息数组
         * @type {Array.<QuestionObj> || null}
         */
        this.QuestionArr = null;

        /**
         * 题目主体区域检测框在图片中的像素坐标
         * @type {Rect || null}
         */
        this.QuestionBboxCoord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.QuestionArr) {
            this.QuestionArr = new Array();
            for (let z in params.QuestionArr) {
                let obj = new QuestionObj();
                obj.deserialize(params.QuestionArr[z]);
                this.QuestionArr.push(obj);
            }
        }

        if (params.QuestionBboxCoord) {
            let obj = new Rect();
            obj.deserialize(params.QuestionBboxCoord)
            this.QuestionBboxCoord = obj;
        }

    }
}

/**
 * AdvertiseOCR返回参数结构体
 * @class
 */
class AdvertiseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
         * @type {Array.<AdvertiseTextDetection> || null}
         */
        this.TextDetections = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new AdvertiseTextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 增值税发票卷票信息
 * @class
 */
class VatRollInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称(关键字)，支持以下字段：
发票代码、合计金额(小写)、合计金额(大写)、开票日期、发票号码、购买方识别号、销售方识别号、校验码、销售方名称、购买方名称、发票消费类型、省、市、是否有公司印章、服务类型、品名、种类。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         * @type {Rect || null}
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * 轮船票字段信息
 * @class
 */
class ShipInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称(关键字)，支持以下字段：
发票代码、发票号码、日期、票价、始发地、目的地、姓名、时间、发票消费类型、省、市、币种。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         * @type {Rect || null}
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * IDCardOCR请求参数结构体
 * @class
 */
class IDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * FRONT：身份证有照片的一面（人像面），
BACK：身份证有国徽的一面（国徽面），
该参数如果不填，将为您自动判断身份证正反面。
         * @type {string || null}
         */
        this.CardSide = null;

        /**
         * 以下可选字段均为bool 类型，默认false：
CropIdCard，身份证照片裁剪（去掉证件外多余的边缘、自动矫正拍摄角度）
CropPortrait，人像照片裁剪（自动抠取身份证头像区域）
CopyWarn，复印件告警
BorderCheckWarn，边框和框内遮挡告警
ReshootWarn，翻拍告警
DetectPsWarn，PS检测告警
TempIdWarn，临时身份证告警
InvalidDateWarn，身份证有效日期不合法告警
Quality，图片质量分数（评价图片的模糊程度）
MultiCardDetect，是否开启多卡证检测
ReflectWarn，是否开启反光检测

SDK 设置方式参考：
Config = Json.stringify({"CropIdCard":true,"CropPortrait":true})
API 3.0 Explorer 设置方式参考：
Config = {"CropIdCard":true,"CropPortrait":true}
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
        this.CardSide = 'CardSide' in params ? params.CardSide : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * MixedInvoiceDetect请求参数结构体
 * @class
 */
class MixedInvoiceDetectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否需要返回裁剪后的图片。
         * @type {boolean || null}
         */
        this.ReturnImage = null;

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ReturnImage = 'ReturnImage' in params ? params.ReturnImage : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * VinOCR请求参数结构体
 * @class
 */
class VinOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * RideHailingTransportLicenseOCR请求参数结构体
 * @class
 */
class RideHailingTransportLicenseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * MLIDCardOCR返回参数结构体
 * @class
 */
class MLIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份证号
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 告警码
-9103	证照翻拍告警
-9102	证照复印件告警
-9106       证件遮挡告警
         * @type {Array.<number> || null}
         */
        this.Warn = null;

        /**
         * 证件图片
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 扩展字段：
{
    ID:{
        Confidence:0.9999
    },
    Name:{
        Confidence:0.9996
    }
}
         * @type {string || null}
         */
        this.AdvancedInfo = null;

        /**
         * 证件类型
MyKad  身份证
MyPR    永居证
MyTentera   军官证
MyKAS    临时身份证
POLIS  警察证
IKAD   劳工证
MyKid 儿童卡
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 出生日期（目前该字段仅支持IKAD劳工证）
         * @type {string || null}
         */
        this.Birthday = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Warn = 'Warn' in params ? params.Warn : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeTableOCR请求参数结构体
 * @class
 */
class RecognizeTableOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片/PDF的 Base64 值。
要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片/PDF的 Url 地址。
要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
         * @type {boolean || null}
         */
        this.IsPdf = null;

        /**
         * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
         * @type {number || null}
         */
        this.PdfPageNumber = null;

        /**
         * 语言，zh：中英文（默认）jap：日文
         * @type {string || null}
         */
        this.TableLanguage = null;

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
        this.IsPdf = 'IsPdf' in params ? params.IsPdf : null;
        this.PdfPageNumber = 'PdfPageNumber' in params ? params.PdfPageNumber : null;
        this.TableLanguage = 'TableLanguage' in params ? params.TableLanguage : null;

    }
}

/**
 * EstateCertOCR请求参数结构体
 * @class
 */
class EstateCertOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * VerifyBasicBizLicense请求参数结构体
 * @class
 */
class VerifyBasicBizLicenseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必须提供一个，如果都提供，只使用 ImageUrl。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必须提供一个，如果都提供，只使用 ImageUrl。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 用于入参是营业执照图片的场景，表示需要校验的参数：RegNum（注册号或者统一社会信用代码），Name（企业名称），Address（经营地址）。选择后会返回相关参数校验结果。RegNum为必选，Name和Address可选。
格式为{RegNum: true, Name:true/false, Address:true/false}

设置方式参考：
Config = Json.stringify({"Name":true,"Address":true})
API 3.0 Explorer 设置方式参考：
Config = {"Name":true,"Address":true}
         * @type {string || null}
         */
        this.ImageConfig = null;

        /**
         * 用于入参是文本的场景，RegNum表示注册号或者统一社会信用代码。若没有传入营业执照图片，则RegNum为必选项，若图片和RegNum都传入，则只使用RegNum。
         * @type {string || null}
         */
        this.RegNum = null;

        /**
         * 用于入参是文本的场景，Name表示企业名称。Name为可选项，填写后会返回Name的校验结果。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用于入参是文本的场景，Address表示经营地址。Address为可选项，填写后会返回Address的校验结果。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 1表示输出注册资本字段（单位：万元），其他值表示不输出。默认不输出。
         * @type {number || null}
         */
        this.RegCapital = null;

        /**
         * true表示展示成立/注册日期
         * @type {boolean || null}
         */
        this.EstablishTime = null;

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
        this.ImageConfig = 'ImageConfig' in params ? params.ImageConfig : null;
        this.RegNum = 'RegNum' in params ? params.RegNum : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.RegCapital = 'RegCapital' in params ? params.RegCapital : null;
        this.EstablishTime = 'EstablishTime' in params ? params.EstablishTime : null;

    }
}

/**
 * BizLicenseOCR返回参数结构体
 * @class
 */
class BizLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统一社会信用代码（三合一之前为注册号）
         * @type {string || null}
         */
        this.RegNum = null;

        /**
         * 公司名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 注册资本
         * @type {string || null}
         */
        this.Capital = null;

        /**
         * 法定代表人
         * @type {string || null}
         */
        this.Person = null;

        /**
         * 地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 经营范围
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 主体类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 营业期限
         * @type {string || null}
         */
        this.Period = null;

        /**
         * 组成形式
         * @type {string || null}
         */
        this.ComposingForm = null;

        /**
         * 成立日期
         * @type {string || null}
         */
        this.SetDate = null;

        /**
         * Code 告警码列表和释义：
-20001 非营业执照
注：告警码可以同时存在多个
         * @type {Array.<number> || null}
         */
        this.RecognizeWarnCode = null;

        /**
         * 告警码说明：
OCR_WARNING_TPYE_NOT_MATCH 非营业执照
注：告警信息可以同时存在多个
         * @type {Array.<string> || null}
         */
        this.RecognizeWarnMsg = null;

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
        this.RegNum = 'RegNum' in params ? params.RegNum : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Capital = 'Capital' in params ? params.Capital : null;
        this.Person = 'Person' in params ? params.Person : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ComposingForm = 'ComposingForm' in params ? params.ComposingForm : null;
        this.SetDate = 'SetDate' in params ? params.SetDate : null;
        this.RecognizeWarnCode = 'RecognizeWarnCode' in params ? params.RecognizeWarnCode : null;
        this.RecognizeWarnMsg = 'RecognizeWarnMsg' in params ? params.RecognizeWarnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VatInvoiceOCR返回参数结构体
 * @class
 */
class VatInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextVatInvoice> || null}
         */
        this.VatInvoiceInfos = null;

        /**
         * 明细条目。VatInvoiceInfos中关于明细项的具体条目。
         * @type {Array.<VatInvoiceItem> || null}
         */
        this.Items = null;

        /**
         * 默认值为0。如果图片为PDF时，返回PDF的总页数。
         * @type {number || null}
         */
        this.PdfPageSize = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
         * @type {number || null}
         */
        this.Angle = null;

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

        if (params.VatInvoiceInfos) {
            this.VatInvoiceInfos = new Array();
            for (let z in params.VatInvoiceInfos) {
                let obj = new TextVatInvoice();
                obj.deserialize(params.VatInvoiceInfos[z]);
                this.VatInvoiceInfos.push(obj);
            }
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new VatInvoiceItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.PdfPageSize = 'PdfPageSize' in params ? params.PdfPageSize : null;
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QuotaInvoiceOCR请求参数结构体
 * @class
 */
class QuotaInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * BankCardOCR返回参数结构体
 * @class
 */
class BankCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卡号
         * @type {string || null}
         */
        this.CardNo = null;

        /**
         * 银行信息
         * @type {string || null}
         */
        this.BankInfo = null;

        /**
         * 有效期，格式如：07/2023
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * 卡类型
         * @type {string || null}
         */
        this.CardType = null;

        /**
         * 卡名字
         * @type {string || null}
         */
        this.CardName = null;

        /**
         * 切片图片数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BorderCutImage = null;

        /**
         * 卡号图片数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CardNoImage = null;

        /**
         * WarningCode 告警码列表和释义：
-9110:银行卡日期无效; 
-9111:银行卡边框不完整; 
-9112:银行卡图片反光;
-9113:银行卡复印件;
-9114:银行卡翻拍件
（告警码可以同时存在多个）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.WarningCode = null;

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
        this.CardNo = 'CardNo' in params ? params.CardNo : null;
        this.BankInfo = 'BankInfo' in params ? params.BankInfo : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.CardType = 'CardType' in params ? params.CardType : null;
        this.CardName = 'CardName' in params ? params.CardName : null;
        this.BorderCutImage = 'BorderCutImage' in params ? params.BorderCutImage : null;
        this.CardNoImage = 'CardNoImage' in params ? params.CardNoImage : null;
        this.WarningCode = 'WarningCode' in params ? params.WarningCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BusinessCardOCR请求参数结构体
 * @class
 */
class BusinessCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 可选字段，根据需要选择是否请求对应字段。
目前支持的字段为：
RetImageType-“PROPROCESS” 图像预处理，string 类型。
图像预处理功能为，检测图片倾斜的角度，将原本倾斜的图片围绕中心点转正，最终输出一张正的名片抠图。

SDK 设置方式参考：
Config = Json.stringify({"RetImageType":"PROPROCESS"})
API 3.0 Explorer 设置方式参考：
Config = {"RetImageType":"PROPROCESS"}
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
 * FinanBillOCR请求参数结构体
 * @class
 */
class FinanBillOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
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
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * VerifyEnterpriseFourFactors返回参数结构体
 * @class
 */
class VerifyEnterpriseFourFactorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核验一致性（1:一致，2:不一致）
         * @type {number || null}
         */
        this.State = null;

        /**
         * 返回不一致时，返回明细，-22：姓名不一致，-23：证件号码不一致，-24：企业名称不一致，-25：企业标识不一致
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Detail || null}
         */
        this.Detail = null;

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
        this.State = 'State' in params ? params.State : null;

        if (params.Detail) {
            let obj = new Detail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GeneralFastOCR返回参数结构体
 * @class
 */
class GeneralFastOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextDetection> || null}
         */
        this.TextDetections = null;

        /**
         * 检测到的语言，目前支持的语种范围为：简体中文、繁体中文、英文、日文、韩文。未来将陆续新增对更多语种的支持。
返回结果含义为：zh - 中英混合，jap - 日文，kor - 韩文。
         * @type {string || null}
         */
        this.Language = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负
         * @type {number || null}
         */
        this.Angel = null;

        /**
         * 图片为PDF时，返回PDF的总页数，默认为0
         * @type {number || null}
         */
        this.PdfPageSize = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Language = 'Language' in params ? params.Language : null;
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.PdfPageSize = 'PdfPageSize' in params ? params.PdfPageSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 二维码/条形码坐标信息
 * @class
 */
class QrcodePositionObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 左上顶点坐标（如果是条形码，X和Y都为-1）
         * @type {Coord || null}
         */
        this.LeftTop = null;

        /**
         * 右上顶点坐标（如果是条形码，X和Y都为-1）
         * @type {Coord || null}
         */
        this.RightTop = null;

        /**
         * 右下顶点坐标（如果是条形码，X和Y都为-1）
         * @type {Coord || null}
         */
        this.RightBottom = null;

        /**
         * 左下顶点坐标（如果是条形码，X和Y都为-1）
         * @type {Coord || null}
         */
        this.LeftBottom = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LeftTop) {
            let obj = new Coord();
            obj.deserialize(params.LeftTop)
            this.LeftTop = obj;
        }

        if (params.RightTop) {
            let obj = new Coord();
            obj.deserialize(params.RightTop)
            this.RightTop = obj;
        }

        if (params.RightBottom) {
            let obj = new Coord();
            obj.deserialize(params.RightBottom)
            this.RightBottom = obj;
        }

        if (params.LeftBottom) {
            let obj = new Coord();
            obj.deserialize(params.LeftBottom)
            this.LeftBottom = obj;
        }

    }
}

module.exports = {
    VerifyBizLicenseRequest: VerifyBizLicenseRequest,
    BusinessCardOCRResponse: BusinessCardOCRResponse,
    TextArithmetic: TextArithmetic,
    HKIDCardOCRRequest: HKIDCardOCRRequest,
    CarInvoiceOCRRequest: CarInvoiceOCRRequest,
    MixedInvoiceItem: MixedInvoiceItem,
    TrainTicketOCRRequest: TrainTicketOCRRequest,
    EstateCertOCRResponse: EstateCertOCRResponse,
    FlightInvoiceOCRRequest: FlightInvoiceOCRRequest,
    MLIDPassportOCRRequest: MLIDPassportOCRRequest,
    TextDetectResponse: TextDetectResponse,
    TollInvoiceOCRResponse: TollInvoiceOCRResponse,
    VerifyBizLicenseResponse: VerifyBizLicenseResponse,
    FinanBillSliceOCRResponse: FinanBillSliceOCRResponse,
    DriverLicenseOCRResponse: DriverLicenseOCRResponse,
    Words: Words,
    TextDetectionEn: TextDetectionEn,
    PermitOCRResponse: PermitOCRResponse,
    InvoiceGeneralOCRRequest: InvoiceGeneralOCRRequest,
    Rect: Rect,
    WaybillOCRResponse: WaybillOCRResponse,
    SingleInvoiceInfo: SingleInvoiceInfo,
    TextFormula: TextFormula,
    MLIDCardOCRRequest: MLIDCardOCRRequest,
    VatInvoiceItem: VatInvoiceItem,
    VehicleRegCertInfo: VehicleRegCertInfo,
    VehicleLicenseOCRRequest: VehicleLicenseOCRRequest,
    EnterpriseLicenseOCRResponse: EnterpriseLicenseOCRResponse,
    InvoiceGeneralInfo: InvoiceGeneralInfo,
    WordCoordPoint: WordCoordPoint,
    InstitutionOCRResponse: InstitutionOCRResponse,
    DriverLicenseOCRRequest: DriverLicenseOCRRequest,
    BizLicenseVerifyResult: BizLicenseVerifyResult,
    TextDetection: TextDetection,
    RecognizeTableOCRResponse: RecognizeTableOCRResponse,
    TextEduPaper: TextEduPaper,
    QrcodeOCRResponse: QrcodeOCRResponse,
    WaybillObj: WaybillObj,
    InvoiceDetectInfo: InvoiceDetectInfo,
    MainlandPermitOCRRequest: MainlandPermitOCRRequest,
    EnterpriseLicenseOCRRequest: EnterpriseLicenseOCRRequest,
    BankCardOCRRequest: BankCardOCRRequest,
    PropOwnerCertOCRResponse: PropOwnerCertOCRResponse,
    FinanBillInfo: FinanBillInfo,
    TrainTicketOCRResponse: TrainTicketOCRResponse,
    TollInvoiceInfo: TollInvoiceInfo,
    ArithmeticOCRResponse: ArithmeticOCRResponse,
    FormulaOCRResponse: FormulaOCRResponse,
    BusInvoiceInfo: BusInvoiceInfo,
    TextVatInvoice: TextVatInvoice,
    GeneralHandwritingOCRRequest: GeneralHandwritingOCRRequest,
    BizLicenseOCRRequest: BizLicenseOCRRequest,
    MixedInvoiceDetectResponse: MixedInvoiceDetectResponse,
    VatInvoiceUserInfo: VatInvoiceUserInfo,
    InsuranceBillOCRResponse: InsuranceBillOCRResponse,
    GeneralEfficientOCRResponse: GeneralEfficientOCRResponse,
    HmtResidentPermitOCRRequest: HmtResidentPermitOCRRequest,
    QrcodeOCRRequest: QrcodeOCRRequest,
    TaxiInvoiceOCRResponse: TaxiInvoiceOCRResponse,
    GeneralBasicOCRResponse: GeneralBasicOCRResponse,
    RecognizeThaiIDCardOCRResponse: RecognizeThaiIDCardOCRResponse,
    CellContent: CellContent,
    MixedInvoiceOCRResponse: MixedInvoiceOCRResponse,
    ClassifyDetectOCRResponse: ClassifyDetectOCRResponse,
    VehicleLicenseOCRResponse: VehicleLicenseOCRResponse,
    VatInvoiceOCRRequest: VatInvoiceOCRRequest,
    IDCardOCRResponse: IDCardOCRResponse,
    ClassifyDetectOCRRequest: ClassifyDetectOCRRequest,
    DutyPaidProofOCRResponse: DutyPaidProofOCRResponse,
    TollInvoiceOCRRequest: TollInvoiceOCRRequest,
    LicensePlateOCRResponse: LicensePlateOCRResponse,
    HKIDCardOCRResponse: HKIDCardOCRResponse,
    VatInvoiceGoodsInfo: VatInvoiceGoodsInfo,
    PermitOCRRequest: PermitOCRRequest,
    InvoiceGeneralOCRResponse: InvoiceGeneralOCRResponse,
    TaxiInvoiceOCRRequest: TaxiInvoiceOCRRequest,
    PropOwnerCertOCRRequest: PropOwnerCertOCRRequest,
    TextDetectRequest: TextDetectRequest,
    VatRollInvoiceOCRResponse: VatRollInvoiceOCRResponse,
    VatInvoiceVerifyRequest: VatInvoiceVerifyRequest,
    EduPaperOCRResponse: EduPaperOCRResponse,
    RecognizeThaiIDCardOCRRequest: RecognizeThaiIDCardOCRRequest,
    BusinessCardInfo: BusinessCardInfo,
    TextGeneralHandwriting: TextGeneralHandwriting,
    TableOCRRequest: TableOCRRequest,
    QrcodeImgSize: QrcodeImgSize,
    VerifyBasicBizLicenseResponse: VerifyBasicBizLicenseResponse,
    VehicleRegCertOCRRequest: VehicleRegCertOCRRequest,
    WaybillOCRRequest: WaybillOCRRequest,
    ProductDataRecord: ProductDataRecord,
    LicensePlateOCRRequest: LicensePlateOCRRequest,
    GeneralBasicOCRRequest: GeneralBasicOCRRequest,
    TextVehicleBack: TextVehicleBack,
    GeneralEfficientOCRRequest: GeneralEfficientOCRRequest,
    AdvertiseOCRRequest: AdvertiseOCRRequest,
    RideHailingDriverLicenseOCRResponse: RideHailingDriverLicenseOCRResponse,
    Detail: Detail,
    EnglishOCRRequest: EnglishOCRRequest,
    VatInvoiceVerifyResponse: VatInvoiceVerifyResponse,
    PassportOCRResponse: PassportOCRResponse,
    VerifyEnterpriseFourFactorsRequest: VerifyEnterpriseFourFactorsRequest,
    GeneralAccurateOCRRequest: GeneralAccurateOCRRequest,
    OrgCodeCertOCRRequest: OrgCodeCertOCRRequest,
    FlightInvoiceOCRResponse: FlightInvoiceOCRResponse,
    InstitutionOCRRequest: InstitutionOCRRequest,
    CarInvoiceInfo: CarInvoiceInfo,
    FlightInvoiceInfo: FlightInvoiceInfo,
    TextVehicleFront: TextVehicleFront,
    AdvertiseTextDetection: AdvertiseTextDetection,
    FinanBillSliceInfo: FinanBillSliceInfo,
    QueryBarCodeResponse: QueryBarCodeResponse,
    ArithmeticOCRRequest: ArithmeticOCRRequest,
    VerifyOfdVatInvoiceOCRRequest: VerifyOfdVatInvoiceOCRRequest,
    FinanBillSliceOCRRequest: FinanBillSliceOCRRequest,
    MLIDPassportOCRResponse: MLIDPassportOCRResponse,
    VatRollInvoiceOCRRequest: VatRollInvoiceOCRRequest,
    TableTitle: TableTitle,
    Coord: Coord,
    SealOCRResponse: SealOCRResponse,
    DutyPaidProofInfo: DutyPaidProofInfo,
    FinanBillOCRResponse: FinanBillOCRResponse,
    ShipInvoiceOCRRequest: ShipInvoiceOCRRequest,
    TextWaybill: TextWaybill,
    QuestionObj: QuestionObj,
    VinOCRResponse: VinOCRResponse,
    EduPaperOCRRequest: EduPaperOCRRequest,
    FormulaOCRRequest: FormulaOCRRequest,
    PassportOCRRequest: PassportOCRRequest,
    DutyPaidProofOCRRequest: DutyPaidProofOCRRequest,
    RideHailingDriverLicenseOCRRequest: RideHailingDriverLicenseOCRRequest,
    QueryBarCodeRequest: QueryBarCodeRequest,
    ItemCoord: ItemCoord,
    OrgCodeCertOCRResponse: OrgCodeCertOCRResponse,
    MixedInvoiceOCRRequest: MixedInvoiceOCRRequest,
    TableDetectInfo: TableDetectInfo,
    ResidenceBookletOCRResponse: ResidenceBookletOCRResponse,
    CarInvoiceOCRResponse: CarInvoiceOCRResponse,
    GeneralFastOCRRequest: GeneralFastOCRRequest,
    Polygon: Polygon,
    ShipInvoiceOCRResponse: ShipInvoiceOCRResponse,
    InsuranceBillInfo: InsuranceBillInfo,
    VehicleRegCertOCRResponse: VehicleRegCertOCRResponse,
    ClassifyDetectInfo: ClassifyDetectInfo,
    GeneralAccurateOCRResponse: GeneralAccurateOCRResponse,
    SealOCRRequest: SealOCRRequest,
    VerifyOfdVatInvoiceOCRResponse: VerifyOfdVatInvoiceOCRResponse,
    TextTable: TextTable,
    ResidenceBookletOCRRequest: ResidenceBookletOCRRequest,
    BusInvoiceOCRResponse: BusInvoiceOCRResponse,
    QrcodeResultsInfo: QrcodeResultsInfo,
    MainlandPermitOCRResponse: MainlandPermitOCRResponse,
    VatInvoice: VatInvoice,
    HmtResidentPermitOCRResponse: HmtResidentPermitOCRResponse,
    EnglishOCRResponse: EnglishOCRResponse,
    BusInvoiceOCRRequest: BusInvoiceOCRRequest,
    QuotaInvoiceOCRResponse: QuotaInvoiceOCRResponse,
    RideHailingTransportLicenseOCRResponse: RideHailingTransportLicenseOCRResponse,
    CandWord: CandWord,
    EnterpriseLicenseInfo: EnterpriseLicenseInfo,
    InsuranceBillOCRRequest: InsuranceBillOCRRequest,
    GeneralHandwritingOCRResponse: GeneralHandwritingOCRResponse,
    TableCell: TableCell,
    TableOCRResponse: TableOCRResponse,
    QuestionBlockObj: QuestionBlockObj,
    AdvertiseOCRResponse: AdvertiseOCRResponse,
    VatRollInvoiceInfo: VatRollInvoiceInfo,
    ShipInvoiceInfo: ShipInvoiceInfo,
    IDCardOCRRequest: IDCardOCRRequest,
    MixedInvoiceDetectRequest: MixedInvoiceDetectRequest,
    VinOCRRequest: VinOCRRequest,
    RideHailingTransportLicenseOCRRequest: RideHailingTransportLicenseOCRRequest,
    MLIDCardOCRResponse: MLIDCardOCRResponse,
    RecognizeTableOCRRequest: RecognizeTableOCRRequest,
    EstateCertOCRRequest: EstateCertOCRRequest,
    VerifyBasicBizLicenseRequest: VerifyBasicBizLicenseRequest,
    BizLicenseOCRResponse: BizLicenseOCRResponse,
    VatInvoiceOCRResponse: VatInvoiceOCRResponse,
    QuotaInvoiceOCRRequest: QuotaInvoiceOCRRequest,
    BankCardOCRResponse: BankCardOCRResponse,
    BusinessCardOCRRequest: BusinessCardOCRRequest,
    FinanBillOCRRequest: FinanBillOCRRequest,
    VerifyEnterpriseFourFactorsResponse: VerifyEnterpriseFourFactorsResponse,
    GeneralFastOCRResponse: GeneralFastOCRResponse,
    QrcodePositionObj: QrcodePositionObj,

}
