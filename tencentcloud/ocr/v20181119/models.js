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
         * 算式运算结果
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
 * CarInvoiceOCR请求参数结构体
 * @class
 */
class CarInvoiceOCRRequest extends  AbstractModel {
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
         * 识别出的图片在混贴票据图片中的位置信息。
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
 * MLIDPassportOCR请求参数结构体
 * @class
 */
class MLIDPassportOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 是否返回图片
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
         * 出生日期
         * @type {string || null}
         */
        this.DateOfBirth = null;

        /**
         * 初次领证日期
         * @type {string || null}
         */
        this.DateOfFirstIssue = null;

        /**
         * 准驾车型
         * @type {string || null}
         */
        this.Class = null;

        /**
         * 有效期开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 有效期截止时间
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 证号
         * @type {string || null}
         */
        this.CardCode = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 此字段为扩展字段。目前EnglishOCR接口返回内容为空。
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
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。( 中国地区之外不支持这个字段 )
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 是否返回图片
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
 * 机动车登记证书识别结果
 * @class
 */
class VehicleRegCertInfo extends  AbstractModel {
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
 * VehicleLicenseOCR请求参数结构体
 * @class
 */
class VehicleLicenseOCRRequest extends  AbstractModel {
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
         * FRONT 为行驶证主页正面（有红色印章的一面），
BACK 为行驶证副页正面（有号码号牌的一面）。
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
         * 识别出的字段名称（关键字）。
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
 * 数学试题识别结果
 * @class
 */
class TextEduPaper extends  AbstractModel {
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
         * 识别出的图片在混贴票据图片中的位置信息。
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
 * EnterpriseLicenseOCR请求参数结构体
 * @class
 */
class EnterpriseLicenseOCRRequest extends  AbstractModel {
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
         * 识别出的字段名称。
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
         * 识别出的字段名称（关键字）。
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
         * 识别出的字段名称（关键字）。
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
         * 识别出的字段名称（关键字）。
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
 * GeneralHandwritingOCR请求参数结构体
 * @class
 */
class GeneralHandwritingOCRRequest extends  AbstractModel {
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
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextDetection> || null}
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
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
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
 * QrcodeOCR请求参数结构体
 * @class
 */
class QrcodeOCRRequest extends  AbstractModel {
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
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextDetection> || null}
         */
        this.TextDetections = null;

        /**
         * 检测到的语言类型，目前支持的语言类型参考入参LanguageType说明。
         * @type {string || null}
         */
        this.Language = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 扩展信息，根据请求的可选字段返回对应内容，不请求则不返回，具体输入参考示例3和示例4。

目前支持的扩展字段为：
IdCard，身份证照片，请求 CropIdCard 时返回；
Portrait，人像照片，请求 CropPortrait 时返回；
WarnInfos，告警信息（Code - 告警码），识别出以下告警内容时返回。

Code 告警码列表和释义：
-9100	身份证有效日期不合法告警，
-9101	身份证边框不完整告警，
-9102	身份证复印件告警，
-9103	身份证翻拍告警，
-9105	身份证框内遮挡告警，
-9104	临时身份证告警，
-9106	身份证 PS 告警。
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * PropOwnerCertOCR请求参数结构体
 * @class
 */
class PropOwnerCertOCRRequest extends  AbstractModel {
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
 * TextDetect请求参数结构体
 * @class
 */
class TextDetectRequest extends  AbstractModel {
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
 * VehicleRegCertOCR请求参数结构体
 * @class
 */
class VehicleRegCertOCRRequest extends  AbstractModel {
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
 * LicensePlateOCR请求参数结构体
 * @class
 */
class LicensePlateOCRRequest extends  AbstractModel {
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
 * GeneralBasicOCR请求参数结构体
 * @class
 */
class GeneralBasicOCRRequest extends  AbstractModel {
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

        /**
         * 保留字段。
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 识别语言类型。
支持自动识别语言类型，同时支持自选语言种类，默认中英文混合(zh)。
可选值：
zh\auto\jap\kor\
spa\fre\ger\por\
vie\may\rus\ita\
hol\swe\fin\dan\
nor\hun\tha\lat
可选值分别表示：
中英文混合、自动识别、日语、韩语、
西班牙语、法语、德语、葡萄牙语、
越南语、马来语、俄语、意大利语、
荷兰语、瑞典语、芬兰语、丹麦语、
挪威语、匈牙利语、泰语、拉丁语系。
         * @type {string || null}
         */
        this.LanguageType = null;

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
 * EnglishOCR请求参数结构体
 * @class
 */
class EnglishOCRRequest extends  AbstractModel {
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
 * GeneralAccurateOCR请求参数结构体
 * @class
 */
class GeneralAccurateOCRRequest extends  AbstractModel {
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
 * OrgCodeCertOCR请求参数结构体
 * @class
 */
class OrgCodeCertOCRRequest extends  AbstractModel {
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
 * 购车发票识别结果
 * @class
 */
class CarInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
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
 * 机票行程单识别结果
 * @class
 */
class FlightInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段 Name 对应的字符串结果。
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
 * 金融票据切片识别单个字段的内容
 * @class
 */
class FinanBillSliceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称。
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
 * EduPaperOCR请求参数结构体
 * @class
 */
class EduPaperOCRRequest extends  AbstractModel {
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
         * @type {Array.<number> || null}
         */
        this.Warn = null;

        /**
         * 证件图片
         * @type {string || null}
         */
        this.Image = null;

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
 * 识别出的字段
 * @class
 */
class DutyPaidProofInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
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
 * ArithmeticOCR请求参数结构体
 * @class
 */
class ArithmeticOCRRequest extends  AbstractModel {
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
 * FormulaOCR请求参数结构体
 * @class
 */
class FormulaOCRRequest extends  AbstractModel {
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
 * PassportOCR请求参数结构体
 * @class
 */
class PassportOCRRequest extends  AbstractModel {
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
         * 护照类型（默认CN）：
CN：支持中国大陆居民护照，字段较多，精度更高；
HK：支持中国香港护照（部分主要字段）；
GENERAL：支持国外护照（部分主要字段）；
THAI：支持泰国护照（部分主要字段）。
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
         * 识别出的字段名称（关键字）。
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
 * GeneralAccurateOCR返回参数结构体
 * @class
 */
class GeneralAccurateOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextDetection> || null}
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
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 识别出的字段名称。
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 检测到的文本信息，具体内容请点击左侧链接。
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
 * 增值税发票卷票信息
 * @class
 */
class VatRollInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
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
         * 识别出的字段名称（关键字）。
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
         * FRONT 为身份证有照片的一面（人像面），
BACK 为身份证有国徽的一面（国徽面）。
         * @type {string || null}
         */
        this.CardSide = null;

        /**
         * 可选字段，根据需要选择是否请求对应字段。
目前包含的字段为：
CropIdCard，身份证照片裁剪，bool 类型，默认false，
CropPortrait，人像照片裁剪，bool 类型，默认false，
CopyWarn，复印件告警，bool 类型，默认false，
BorderCheckWarn，边框和框内遮挡告警，bool 类型，默认false，
ReshootWarn，翻拍告警，bool 类型，默认false，
DetectPsWarn，PS检测告警，bool类型，默认false，
TempIdWarn，临时身份证告警，bool类型，默认false，
InvalidDateWarn，身份证有效日期不合法告警，bool类型，默认false。

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
        this.ReturnImage = 'ReturnImage' in params ? params.ReturnImage : null;
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
         * @type {Array.<number> || null}
         */
        this.Warn = null;

        /**
         * 证件图片
         * @type {string || null}
         */
        this.Image = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * BizLicenseOCR返回参数结构体
 * @class
 */
class BizLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 注册号
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
        this.CardNo = 'CardNo' in params ? params.CardNo : null;
        this.BankInfo = 'BankInfo' in params ? params.BankInfo : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
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
    BusinessCardOCRResponse: BusinessCardOCRResponse,
    TextArithmetic: TextArithmetic,
    BankCardOCRRequest: BankCardOCRRequest,
    CarInvoiceOCRRequest: CarInvoiceOCRRequest,
    MixedInvoiceItem: MixedInvoiceItem,
    TrainTicketOCRRequest: TrainTicketOCRRequest,
    EstateCertOCRResponse: EstateCertOCRResponse,
    FlightInvoiceOCRRequest: FlightInvoiceOCRRequest,
    MLIDPassportOCRRequest: MLIDPassportOCRRequest,
    TextDetectResponse: TextDetectResponse,
    FinanBillSliceOCRResponse: FinanBillSliceOCRResponse,
    DriverLicenseOCRResponse: DriverLicenseOCRResponse,
    TextDetectionEn: TextDetectionEn,
    PermitOCRResponse: PermitOCRResponse,
    InvoiceGeneralOCRRequest: InvoiceGeneralOCRRequest,
    Rect: Rect,
    WaybillOCRResponse: WaybillOCRResponse,
    SingleInvoiceInfo: SingleInvoiceInfo,
    TextFormula: TextFormula,
    MLIDCardOCRRequest: MLIDCardOCRRequest,
    VehicleRegCertInfo: VehicleRegCertInfo,
    VehicleLicenseOCRRequest: VehicleLicenseOCRRequest,
    EnterpriseLicenseOCRResponse: EnterpriseLicenseOCRResponse,
    InvoiceGeneralInfo: InvoiceGeneralInfo,
    InstitutionOCRResponse: InstitutionOCRResponse,
    DriverLicenseOCRRequest: DriverLicenseOCRRequest,
    TextDetection: TextDetection,
    TextEduPaper: TextEduPaper,
    QrcodeOCRResponse: QrcodeOCRResponse,
    WaybillObj: WaybillObj,
    InvoiceDetectInfo: InvoiceDetectInfo,
    EnterpriseLicenseOCRRequest: EnterpriseLicenseOCRRequest,
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
    InsuranceBillOCRResponse: InsuranceBillOCRResponse,
    GeneralEfficientOCRResponse: GeneralEfficientOCRResponse,
    TextTable: TextTable,
    QrcodeOCRRequest: QrcodeOCRRequest,
    TaxiInvoiceOCRResponse: TaxiInvoiceOCRResponse,
    GeneralBasicOCRResponse: GeneralBasicOCRResponse,
    VinOCRRequest: VinOCRRequest,
    QuotaInvoiceOCRRequest: QuotaInvoiceOCRRequest,
    MixedInvoiceOCRResponse: MixedInvoiceOCRResponse,
    QrcodeImgSize: QrcodeImgSize,
    VehicleLicenseOCRResponse: VehicleLicenseOCRResponse,
    VatInvoiceOCRRequest: VatInvoiceOCRRequest,
    IDCardOCRResponse: IDCardOCRResponse,
    DutyPaidProofOCRResponse: DutyPaidProofOCRResponse,
    TollInvoiceOCRRequest: TollInvoiceOCRRequest,
    LicensePlateOCRResponse: LicensePlateOCRResponse,
    PermitOCRRequest: PermitOCRRequest,
    InvoiceGeneralOCRResponse: InvoiceGeneralOCRResponse,
    TaxiInvoiceOCRRequest: TaxiInvoiceOCRRequest,
    PropOwnerCertOCRRequest: PropOwnerCertOCRRequest,
    TextDetectRequest: TextDetectRequest,
    VatRollInvoiceOCRResponse: VatRollInvoiceOCRResponse,
    EduPaperOCRResponse: EduPaperOCRResponse,
    BusinessCardInfo: BusinessCardInfo,
    TextGeneralHandwriting: TextGeneralHandwriting,
    TableOCRRequest: TableOCRRequest,
    VehicleRegCertOCRRequest: VehicleRegCertOCRRequest,
    LicensePlateOCRRequest: LicensePlateOCRRequest,
    GeneralBasicOCRRequest: GeneralBasicOCRRequest,
    TextVehicleBack: TextVehicleBack,
    GeneralEfficientOCRRequest: GeneralEfficientOCRRequest,
    TollInvoiceOCRResponse: TollInvoiceOCRResponse,
    EnglishOCRRequest: EnglishOCRRequest,
    PassportOCRResponse: PassportOCRResponse,
    GeneralAccurateOCRRequest: GeneralAccurateOCRRequest,
    OrgCodeCertOCRRequest: OrgCodeCertOCRRequest,
    FlightInvoiceOCRResponse: FlightInvoiceOCRResponse,
    InstitutionOCRRequest: InstitutionOCRRequest,
    CarInvoiceInfo: CarInvoiceInfo,
    FlightInvoiceInfo: FlightInvoiceInfo,
    TextVehicleFront: TextVehicleFront,
    FinanBillSliceInfo: FinanBillSliceInfo,
    EduPaperOCRRequest: EduPaperOCRRequest,
    FinanBillSliceOCRRequest: FinanBillSliceOCRRequest,
    MLIDPassportOCRResponse: MLIDPassportOCRResponse,
    VatRollInvoiceOCRRequest: VatRollInvoiceOCRRequest,
    Coord: Coord,
    DutyPaidProofInfo: DutyPaidProofInfo,
    FinanBillOCRResponse: FinanBillOCRResponse,
    TextWaybill: TextWaybill,
    QuestionObj: QuestionObj,
    VinOCRResponse: VinOCRResponse,
    ArithmeticOCRRequest: ArithmeticOCRRequest,
    FormulaOCRRequest: FormulaOCRRequest,
    PassportOCRRequest: PassportOCRRequest,
    DutyPaidProofOCRRequest: DutyPaidProofOCRRequest,
    ItemCoord: ItemCoord,
    OrgCodeCertOCRResponse: OrgCodeCertOCRResponse,
    MixedInvoiceOCRRequest: MixedInvoiceOCRRequest,
    ResidenceBookletOCRResponse: ResidenceBookletOCRResponse,
    CarInvoiceOCRResponse: CarInvoiceOCRResponse,
    GeneralFastOCRRequest: GeneralFastOCRRequest,
    ShipInvoiceOCRResponse: ShipInvoiceOCRResponse,
    InsuranceBillInfo: InsuranceBillInfo,
    VehicleRegCertOCRResponse: VehicleRegCertOCRResponse,
    GeneralAccurateOCRResponse: GeneralAccurateOCRResponse,
    ResidenceBookletOCRRequest: ResidenceBookletOCRRequest,
    BusInvoiceOCRResponse: BusInvoiceOCRResponse,
    QrcodeResultsInfo: QrcodeResultsInfo,
    EnglishOCRResponse: EnglishOCRResponse,
    BusInvoiceOCRRequest: BusInvoiceOCRRequest,
    QuotaInvoiceOCRResponse: QuotaInvoiceOCRResponse,
    EnterpriseLicenseInfo: EnterpriseLicenseInfo,
    InsuranceBillOCRRequest: InsuranceBillOCRRequest,
    GeneralHandwritingOCRResponse: GeneralHandwritingOCRResponse,
    TableOCRResponse: TableOCRResponse,
    QuestionBlockObj: QuestionBlockObj,
    WaybillOCRRequest: WaybillOCRRequest,
    VatRollInvoiceInfo: VatRollInvoiceInfo,
    ShipInvoiceInfo: ShipInvoiceInfo,
    IDCardOCRRequest: IDCardOCRRequest,
    MixedInvoiceDetectRequest: MixedInvoiceDetectRequest,
    MLIDCardOCRResponse: MLIDCardOCRResponse,
    EstateCertOCRRequest: EstateCertOCRRequest,
    BizLicenseOCRResponse: BizLicenseOCRResponse,
    VatInvoiceOCRResponse: VatInvoiceOCRResponse,
    ShipInvoiceOCRRequest: ShipInvoiceOCRRequest,
    BankCardOCRResponse: BankCardOCRResponse,
    BusinessCardOCRRequest: BusinessCardOCRRequest,
    FinanBillOCRRequest: FinanBillOCRRequest,
    GeneralFastOCRResponse: GeneralFastOCRResponse,
    QrcodePositionObj: QrcodePositionObj,

}
