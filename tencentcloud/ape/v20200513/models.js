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
 * BatchDescribeOrderCertificate请求参数结构体
 * @class
 */
class BatchDescribeOrderCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要下载授权书的订单id
         * @type {Array.<string> || null}
         */
        this.OrderIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIds = 'OrderIds' in params ? params.OrderIds : null;

    }
}

/**
 * BatchDescribeOrderImage返回参数结构体
 * @class
 */
class BatchDescribeOrderImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的下载地址
         * @type {Array.<string> || null}
         */
        this.ImageUrls = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrls = 'ImageUrls' in params ? params.ImageUrls : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 图片信息条目
 * @class
 */
class ImageItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片ID
         * @type {number || null}
         */
        this.ImageId = null;

        /**
         * 图片标题
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 图片描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 图片预览链接
         * @type {string || null}
         */
        this.PreviewUrl = null;

        /**
         * 图片缩略图
         * @type {string || null}
         */
        this.ThumbUrl = null;

        /**
         * 图片供应商
         * @type {string || null}
         */
        this.Vendor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PreviewUrl = 'PreviewUrl' in params ? params.PreviewUrl : null;
        this.ThumbUrl = 'ThumbUrl' in params ? params.ThumbUrl : null;
        this.Vendor = 'Vendor' in params ? params.Vendor : null;

    }
}

/**
 * DescribeImages返回参数结构体
 * @class
 */
class DescribeImagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 是否有下一页
         * @type {boolean || null}
         */
        this.HaveMore = null;

        /**
         * 图片信息数组
         * @type {Array.<ImageItem> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.HaveMore = 'HaveMore' in params ? params.HaveMore : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ImageItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAuthUsers请求参数结构体
 * @class
 */
class DescribeAuthUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移量
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 图片售卖组合信息
 * @class
 */
class ImageMarshal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 售卖组合唯一标识
         * @type {number || null}
         */
        this.MarshalId = null;

        /**
         * 图片高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 图片宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 图片大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 图片格式
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 图片价格(单位:分)
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 授权范围
         * @type {string || null}
         */
        this.LicenseScope = null;

        /**
         * 是否支持VIP购买
         * @type {boolean || null}
         */
        this.IsVip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MarshalId = 'MarshalId' in params ? params.MarshalId : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.LicenseScope = 'LicenseScope' in params ? params.LicenseScope : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;

    }
}

/**
 * BatchDescribeOrderCertificate返回参数结构体
 * @class
 */
class BatchDescribeOrderCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权书的下载地址
         * @type {Array.<string> || null}
         */
        this.CertificateUrls = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateUrls = 'CertificateUrls' in params ? params.CertificateUrls : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImage返回参数结构体
 * @class
 */
class DescribeImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片ID
         * @type {number || null}
         */
        this.ImageId = null;

        /**
         * 图片标题
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 图片描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 图片预览链接
         * @type {string || null}
         */
        this.PreviewUrl = null;

        /**
         * 图片缩略图
         * @type {string || null}
         */
        this.ThumbUrl = null;

        /**
         * 图片供应商
         * @type {string || null}
         */
        this.Vendor = null;

        /**
         * 图片售卖组合信息
         * @type {Array.<ImageMarshal> || null}
         */
        this.Marshals = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PreviewUrl = 'PreviewUrl' in params ? params.PreviewUrl : null;
        this.ThumbUrl = 'ThumbUrl' in params ? params.ThumbUrl : null;
        this.Vendor = 'Vendor' in params ? params.Vendor : null;

        if (params.Marshals) {
            this.Marshals = new Array();
            for (let z in params.Marshals) {
                let obj = new ImageMarshal();
                obj.deserialize(params.Marshals[z]);
                this.Marshals.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAuthUsers返回参数结构体
 * @class
 */
class DescribeAuthUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权人信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AuthInfo> || null}
         */
        this.Users = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 是否是老策略用户
         * @type {boolean || null}
         */
        this.OldUser = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new AuthInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.OldUser = 'OldUser' in params ? params.OldUser : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 授权人信息
 * @class
 */
class AuthInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主键
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 授权人名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 身份证号/社会信用代码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 授权人类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

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
        this.Code = 'Code' in params ? params.Code : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeImage请求参数结构体
 * @class
 */
class DescribeImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片ID
         * @type {number || null}
         */
        this.ImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

    }
}

/**
 * CreateOrderAndPay返回参数结构体
 * @class
 */
class CreateOrderAndPayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单ID
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImages请求参数结构体
 * @class
 */
class DescribeImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索关键字
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 构图方式，可选以下值：horizontal、vertical、square，分别代表以下含义：横图、竖图、方图
         * @type {string || null}
         */
        this.Orientation = null;

        /**
         * 图片类型，可选以下值：照片、插画
         * @type {string || null}
         */
        this.ImageSenseType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Orientation = 'Orientation' in params ? params.Orientation : null;
        this.ImageSenseType = 'ImageSenseType' in params ? params.ImageSenseType : null;

    }
}

/**
 * CreateOrderAndPay请求参数结构体
 * @class
 */
class CreateOrderAndPayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片ID
         * @type {number || null}
         */
        this.ImageId = null;

        /**
         * 授权人ID
         * @type {string || null}
         */
        this.AuthUserId = null;

        /**
         * 售卖组合id
         * @type {number || null}
         */
        this.MarshalId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.AuthUserId = 'AuthUserId' in params ? params.AuthUserId : null;
        this.MarshalId = 'MarshalId' in params ? params.MarshalId : null;

    }
}

/**
 * BatchDescribeOrderImage请求参数结构体
 * @class
 */
class BatchDescribeOrderImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要下载图片的订单id
         * @type {Array.<string> || null}
         */
        this.OrderIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIds = 'OrderIds' in params ? params.OrderIds : null;

    }
}

module.exports = {
    BatchDescribeOrderCertificateRequest: BatchDescribeOrderCertificateRequest,
    BatchDescribeOrderImageResponse: BatchDescribeOrderImageResponse,
    ImageItem: ImageItem,
    DescribeImagesResponse: DescribeImagesResponse,
    DescribeAuthUsersRequest: DescribeAuthUsersRequest,
    ImageMarshal: ImageMarshal,
    BatchDescribeOrderCertificateResponse: BatchDescribeOrderCertificateResponse,
    DescribeImageResponse: DescribeImageResponse,
    DescribeAuthUsersResponse: DescribeAuthUsersResponse,
    AuthInfo: AuthInfo,
    DescribeImageRequest: DescribeImageRequest,
    CreateOrderAndPayResponse: CreateOrderAndPayResponse,
    DescribeImagesRequest: DescribeImagesRequest,
    CreateOrderAndPayRequest: CreateOrderAndPayRequest,
    BatchDescribeOrderImageRequest: BatchDescribeOrderImageRequest,

}
