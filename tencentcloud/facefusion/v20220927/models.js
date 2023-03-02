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
 * 素材信息
 * @class
 */
class PublicMaterialInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材Id
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 素材状态
         * @type {number || null}
         */
        this.MaterialStatus = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 人脸信息
         * @type {Array.<MaterialFaces> || null}
         */
        this.MaterialFaceList = null;

        /**
         * 素材名
         * @type {string || null}
         */
        this.MaterialName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.MaterialStatus = 'MaterialStatus' in params ? params.MaterialStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.MaterialFaceList) {
            this.MaterialFaceList = new Array();
            for (let z in params.MaterialFaceList) {
                let obj = new MaterialFaces();
                obj.deserialize(params.MaterialFaceList[z]);
                this.MaterialFaceList.push(obj);
            }
        }
        this.MaterialName = 'MaterialName' in params ? params.MaterialName : null;

    }
}

/**
 * DescribeMaterialList返回参数结构体
 * @class
 */
class DescribeMaterialListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材列表数据
         * @type {Array.<PublicMaterialInfos> || null}
         */
        this.MaterialInfos = null;

        /**
         * 素材条数
         * @type {number || null}
         */
        this.Count = null;

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

        if (params.MaterialInfos) {
            this.MaterialInfos = new Array();
            for (let z in params.MaterialInfos) {
                let obj = new PublicMaterialInfos();
                obj.deserialize(params.MaterialInfos[z]);
                this.MaterialInfos.push(obj);
            }
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人脸信息
 * @class
 */
class FaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸框的横坐标
         * @type {number || null}
         */
        this.X = null;

        /**
         * 人脸框的纵坐标
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 人脸框的宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 人脸框的高度
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
 * 人脸信息
 * @class
 */
class MaterialFaces extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸序号
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * 人脸框信息
         * @type {FaceInfo || null}
         */
        this.FaceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaceId = 'FaceId' in params ? params.FaceId : null;

        if (params.FaceInfo) {
            let obj = new FaceInfo();
            obj.deserialize(params.FaceInfo)
            this.FaceInfo = obj;
        }

    }
}

/**
 * 人脸图片和待被融合的素材模板图的人脸位置信息。
 * @class
 */
class MergeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入图片base64
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 输入图片url
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 上传的图片人脸位置信息（人脸框）
         * @type {FaceRect || null}
         */
        this.InputImageFaceRect = null;

        /**
         * 控制台上传的素材人脸ID，不填默认取最大人脸
         * @type {string || null}
         */
        this.TemplateFaceID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.InputImageFaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.InputImageFaceRect)
            this.InputImageFaceRect = obj;
        }
        this.TemplateFaceID = 'TemplateFaceID' in params ? params.TemplateFaceID : null;

    }
}

/**
 * FuseFace返回参数结构体
 * @class
 */
class FuseFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RspImgType 为 url 时，返回结果的 url， RspImgType 为 base64 时返回 base64 数据。
         * @type {string || null}
         */
        this.FusedImage = null;

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
        this.FusedImage = 'FusedImage' in params ? params.FusedImage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FuseFace请求参数结构体
 * @class
 */
class FuseFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动 ID，请在<a href="https://console.cloud.tencent.com/facefusion" target="_blank">人脸融合控制台</a>查看。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 素材 ID，请在<a href="https://console.cloud.tencent.com/facefusion" target="_blank">人脸融合控制台</a>查看。
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 返回图像方式（url 或 base64) ，二选一。url有效期为7天。
         * @type {string || null}
         */
        this.RspImgType = null;

        /**
         * 用户人脸图片、素材模板图的人脸位置信息。
         * @type {Array.<MergeInfo> || null}
         */
        this.MergeInfos = null;

        /**
         * 脸型融合比例，数值越高，融合后的脸型越像素材人物。取值范围[0,100] 
若此参数不填写，则使用人脸融合控制台中脸型参数数值。（换脸版算法暂不支持此参数调整）
         * @type {number || null}
         */
        this.FuseProfileDegree = null;

        /**
         * 五官融合比例，数值越高，融合后的五官越像素材人物。取值范围[0,100] 
若此参数不填写，则使用人脸融合控制台中五官参数数值。（换脸版算法暂不支持此参数调整）
         * @type {number || null}
         */
        this.FuseFaceDegree = null;

        /**
         * 为融合结果图添加合成标识的开关，默认为1。
1：添加标识。
0：不添加标识。
其他数值：默认按1处理。
建议您使用显著标识来提示结果图使用了人脸融合技术，是AI合成的图片。
         * @type {number || null}
         */
        this.LogoAdd = null;

        /**
         * 标识内容设置。
默认在融合结果图右下角添加“本图片为AI合成图片”字样，您可根据自身需要替换为其他的Logo图片。
         * @type {LogoParam || null}
         */
        this.LogoParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

        if (params.MergeInfos) {
            this.MergeInfos = new Array();
            for (let z in params.MergeInfos) {
                let obj = new MergeInfo();
                obj.deserialize(params.MergeInfos[z]);
                this.MergeInfos.push(obj);
            }
        }
        this.FuseProfileDegree = 'FuseProfileDegree' in params ? params.FuseProfileDegree : null;
        this.FuseFaceDegree = 'FuseFaceDegree' in params ? params.FuseFaceDegree : null;
        this.LogoAdd = 'LogoAdd' in params ? params.LogoAdd : null;

        if (params.LogoParam) {
            let obj = new LogoParam();
            obj.deserialize(params.LogoParam)
            this.LogoParam = obj;
        }

    }
}

/**
 * 人脸框信息
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
 * DescribeMaterialList请求参数结构体
 * @class
 */
class DescribeMaterialListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活动Id
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * 素材Id
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 每次拉取条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
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
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * logo参数
 * @class
 */
class LogoParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识图片位于融合结果图中的坐标，将按照坐标对标识图片进行位置和大小的拉伸匹配
         * @type {FaceRect || null}
         */
        this.LogoRect = null;

        /**
         * 标识图片Url地址
         * @type {string || null}
         */
        this.LogoUrl = null;

        /**
         * 标识图片base64
         * @type {string || null}
         */
        this.LogoImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LogoRect) {
            let obj = new FaceRect();
            obj.deserialize(params.LogoRect)
            this.LogoRect = obj;
        }
        this.LogoUrl = 'LogoUrl' in params ? params.LogoUrl : null;
        this.LogoImage = 'LogoImage' in params ? params.LogoImage : null;

    }
}

module.exports = {
    PublicMaterialInfos: PublicMaterialInfos,
    DescribeMaterialListResponse: DescribeMaterialListResponse,
    FaceInfo: FaceInfo,
    MaterialFaces: MaterialFaces,
    MergeInfo: MergeInfo,
    FuseFaceResponse: FuseFaceResponse,
    FuseFaceRequest: FuseFaceRequest,
    FaceRect: FaceRect,
    DescribeMaterialListRequest: DescribeMaterialListRequest,
    LogoParam: LogoParam,

}
