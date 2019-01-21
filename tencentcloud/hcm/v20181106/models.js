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
 * 识别出的算术式信息及评估结果
 * @class
 */
class Item extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别的算式是否正确
         * @type {string || null}
         */
        this.Item = null;

        /**
         * 识别的算式
         * @type {string || null}
         */
        this.ItemString = null;

        /**
         * 识别的算式在图片上的位置信息
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
        this.Item = 'Item' in params ? params.Item : null;
        this.ItemString = 'ItemString' in params ? params.ItemString : null;

        if (params.ItemCoord) {
            let obj = new ItemCoord();
            obj.deserialize(params.ItemCoord)
            this.ItemCoord = obj;
        }

    }
}

/**
 * Evaluation请求参数结构体
 * @class
 */
class EvaluationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片唯一标识，一张图片一个SessionId；
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 图片数据，需要使用base64对图片的二进制数据进行编码，与url参数二者填一即可；
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 HcmAppId 可以在[控制台](https://console.cloud.tencent.com/hcm)【应用管理】下新建。
         * @type {string || null}
         */
        this.HcmAppid = null;

        /**
         * 图片url，与Image参数二者填一即可；
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.HcmAppid = 'HcmAppid' in params ? params.HcmAppid : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * Evaluation返回参数结构体
 * @class
 */
class EvaluationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片唯一标识，一张图片一个SessionId；
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 识别出的算式信息；
         * @type {Array.<Item> || null}
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
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Item();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 目标算式在图片上的坐标信息
 * @class
 */
class ItemCoord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 算式高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 算式宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 算式图的左上角横坐标
         * @type {number || null}
         */
        this.X = null;

        /**
         * 算式图的左上角纵坐标
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
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;

    }
}

module.exports = {
    Item: Item,
    EvaluationRequest: EvaluationRequest,
    EvaluationResponse: EvaluationResponse,
    ItemCoord: ItemCoord,

}
