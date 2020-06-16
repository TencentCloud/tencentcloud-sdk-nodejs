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
 * 检测到的图片中的商品位置和品类预测。 
当图片中存在多个商品时，输出多组坐标，按照__显著性__排序（综合考虑面积、是否在中心、检测算法置信度）。 
最多可以输出__3组__检测结果。
 * @class
 */
class RegionDetected extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品的品类预测结果。 
包含：鞋、图书音像、箱包、美妆个护、服饰、家电数码、玩具乐器、食品饮料、珠宝、家居家装、药品、酒水、绿植园艺、其他商品、非商品等。
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 商品品类预测的置信度
         * @type {number || null}
         */
        this.CategoryScore = null;

        /**
         * 检测到的主体在图片中的坐标，表示为矩形框的四个顶点坐标
         * @type {Location || null}
         */
        this.Location = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Category = 'Category' in params ? params.Category : null;
        this.CategoryScore = 'CategoryScore' in params ? params.CategoryScore : null;

        if (params.Location) {
            let obj = new Location();
            obj.deserialize(params.Location)
            this.Location = obj;
        }

    }
}

/**
 * 图像识别出的商品的详细信息。 
当图像中检测到多个物品时，会对显著性最高的物品进行识别。
 * @class
 */
class ProductInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1表示找到同款商品，以下字段为同款商品信息； 
0表示未找到同款商品， 具体商品信息为空（参考价格、名称、品牌等），仅提供商品类目。  
是否找到同款的判断依据为Score分值，分值越大则同款的可能性越大。
         * @type {number || null}
         */
        this.FindSKU = null;

        /**
         * 本商品在图片中的坐标，表示为矩形框的四个顶点坐标。
         * @type {Location || null}
         */
        this.Location = null;

        /**
         * 商品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 商品品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 参考价格，综合多个信息源，仅供参考。
         * @type {string || null}
         */
        this.Price = null;

        /**
         * 识别结果的商品类目。 
包含：鞋、图书音像、箱包、美妆个护、服饰、家电数码、玩具乐器、食品饮料、珠宝、家居家装、药品、酒水、绿植园艺、其他商品、非商品等。 
当类别为“非商品”时，除Location、Score和本字段之外的商品信息为空。
         * @type {string || null}
         */
        this.ProductCategory = null;

        /**
         * 输入图片中的主体物品和输出结果的相似度。分值越大，输出结果与输入图片是同款的可能性越高。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 搜索到的商品配图URL
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
        this.FindSKU = 'FindSKU' in params ? params.FindSKU : null;

        if (params.Location) {
            let obj = new Location();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.ProductCategory = 'ProductCategory' in params ? params.ProductCategory : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Image = 'Image' in params ? params.Image : null;

    }
}

/**
 * RecognizeProduct返回参数结构体
 * @class
 */
class RecognizeProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的图片中的商品位置和品类预测。 
当图片中存在多个商品时，输出多组坐标，按照__显著性__排序（综合考虑面积、是否在中心、检测算法置信度）。 
最多可以输出__3组__检测结果。
         * @type {Array.<RegionDetected> || null}
         */
        this.RegionDetected = null;

        /**
         * 图像识别出的商品的详细信息。 
当图像中检测到多个物品时，会对显著性最高的进行识别。
         * @type {ProductInfo || null}
         */
        this.ProductInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RegionDetected) {
            this.RegionDetected = new Array();
            for (let z in params.RegionDetected) {
                let obj = new RegionDetected();
                obj.deserialize(params.RegionDetected[z]);
                this.RegionDetected.push(obj);
            }
        }

        if (params.ProductInfo) {
            let obj = new ProductInfo();
            obj.deserialize(params.ProductInfo)
            this.ProductInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 检测到的主体在图片中的矩形框位置（四个顶点坐标）
 * @class
 */
class Location extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置矩形框的左上角横坐标
         * @type {number || null}
         */
        this.XMin = null;

        /**
         * 位置矩形框的左上角纵坐标
         * @type {number || null}
         */
        this.YMin = null;

        /**
         * 位置矩形框的右下角横坐标
         * @type {number || null}
         */
        this.XMax = null;

        /**
         * 位置矩形框的右下角纵坐标
         * @type {number || null}
         */
        this.YMax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.XMin = 'XMin' in params ? params.XMin : null;
        this.YMin = 'YMin' in params ? params.YMin : null;
        this.XMax = 'XMax' in params ? params.XMax : null;
        this.YMax = 'YMax' in params ? params.YMax : null;

    }
}

/**
 * RecognizeProduct请求参数结构体
 * @class
 */
class RecognizeProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片限制：内测版仅支持jpg、jpeg，图片大小不超过1M，分辨率在25万到100万之间。 
建议先对图片进行压缩，以便提升处理速度。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过1M，分辨率在25万到100万之间。 
与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
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
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

module.exports = {
    RegionDetected: RegionDetected,
    ProductInfo: ProductInfo,
    RecognizeProductResponse: RecognizeProductResponse,
    Location: Location,
    RecognizeProductRequest: RecognizeProductRequest,

}
