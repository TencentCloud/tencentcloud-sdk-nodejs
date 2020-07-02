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
 * SwapGenderPic请求参数结构体
 * @class
 */
class SwapGenderPicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸转化性别信息。 
您可以输入最多3个 GenderInfo 来实现给一张图中的最多3张人脸转换性别。
         * @type {Array.<GenderInfo> || null}
         */
        this.GenderInfos = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
         * @type {string || null}
         */
        this.RspImgType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GenderInfos) {
            this.GenderInfos = new Array();
            for (let z in params.GenderInfos) {
                let obj = new GenderInfo();
                obj.deserialize(params.GenderInfos[z]);
                this.GenderInfos.push(obj);
            }
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

    }
}

/**
 * 人脸变年龄信息
 * @class
 */
class AgeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 变化到的人脸年龄 [10,80]。
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。  
您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Age = 'Age' in params ? params.Age : null;

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }

    }
}

/**
 * 人脸转换性别信息
 * @class
 */
class GenderInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 选择转换方向，0：男变女，1：女变男。
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。  
您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Gender = 'Gender' in params ? params.Gender : null;

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }

    }
}

/**
 * SwapGenderPic返回参数结构体
 * @class
 */
class SwapGenderPicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
         * @type {string || null}
         */
        this.ResultImage = null;

        /**
         * RspImgType 为 url 时，返回处理后的图片 url 数据。
         * @type {string || null}
         */
        this.ResultUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultImage = 'ResultImage' in params ? params.ResultImage : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChangeAgePic返回参数结构体
 * @class
 */
class ChangeAgePicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
         * @type {string || null}
         */
        this.ResultImage = null;

        /**
         * RspImgType 为 url 时，返回处理后的图片 url 数据。
         * @type {string || null}
         */
        this.ResultUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultImage = 'ResultImage' in params ? params.ResultImage : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人脸框位置
 * @class
 */
class FaceRect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸框左上角横坐标。
         * @type {number || null}
         */
        this.X = null;

        /**
         * 人脸框左上角纵坐标。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 人脸框宽度。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 人脸框高度。
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
 * ChangeAgePic请求参数结构体
 * @class
 */
class ChangeAgePicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸变老变年轻信息。 
您可以输入最多3个 AgeInfo 来实现给一张图中的最多3张人脸变老变年轻。
         * @type {Array.<AgeInfo> || null}
         */
        this.AgeInfos = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
         * @type {string || null}
         */
        this.RspImgType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AgeInfos) {
            this.AgeInfos = new Array();
            for (let z in params.AgeInfos) {
                let obj = new AgeInfo();
                obj.deserialize(params.AgeInfos[z]);
                this.AgeInfos.push(obj);
            }
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

    }
}

module.exports = {
    SwapGenderPicRequest: SwapGenderPicRequest,
    AgeInfo: AgeInfo,
    GenderInfo: GenderInfo,
    SwapGenderPicResponse: SwapGenderPicResponse,
    ChangeAgePicResponse: ChangeAgePicResponse,
    FaceRect: FaceRect,
    ChangeAgePicRequest: ChangeAgePicRequest,

}
