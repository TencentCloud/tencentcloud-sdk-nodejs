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
 * 眼睛信息
 * @class
 */
class Eye extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别是否佩戴眼镜。
AttributeItem对应的Type为 —— 0：无眼镜，1：普通眼镜，2：墨镜
         * @type {AttributeItem || null}
         */
        this.Glass = null;

        /**
         * 识别眼睛的睁开、闭合状态。
AttributeItem对应的Type为 —— 0：睁开，1：闭眼
         * @type {AttributeItem || null}
         */
        this.EyeOpen = null;

        /**
         * 识别是否双眼皮。
AttributeItem对应的Type为 —— 0：无，1：有。
         * @type {AttributeItem || null}
         */
        this.EyelidType = null;

        /**
         * 眼睛大小。
AttributeItem对应的Type为 —— 0：小眼睛，1：普通眼睛，2：大眼睛。
         * @type {AttributeItem || null}
         */
        this.EyeSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Glass) {
            let obj = new AttributeItem();
            obj.deserialize(params.Glass)
            this.Glass = obj;
        }

        if (params.EyeOpen) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyeOpen)
            this.EyeOpen = obj;
        }

        if (params.EyelidType) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyelidType)
            this.EyelidType = obj;
        }

        if (params.EyeSize) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyeSize)
            this.EyeSize = obj;
        }

    }
}

/**
 * 识别出的最相似候选人
 * @class
 */
class Candidate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人脸ID
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * 候选者的匹配得分。 

1万大小人脸底库下，误识率百分之一对应分数为70分，误识率千分之一对应分数为80分，误识率万分之一对应分数为90分；
10万大小人脸底库下，误识率百分之一对应分数为80分，误识率千分之一对应分数为90分，误识率万分之一对应分数为100分；
30万大小人脸底库下，误识率百分之一对应分数为85分，误识率千分之一对应分数为95分。

一般80分左右可适用大部分场景，建议分数不要超过90分。您可以根据实际情况选择合适的分数。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 人员名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * 人员性别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 包含此人员的人员库及描述字段内容列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PersonGroupInfo> || null}
         */
        this.PersonGroupInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.Gender = 'Gender' in params ? params.Gender : null;

        if (params.PersonGroupInfos) {
            this.PersonGroupInfos = new Array();
            for (let z in params.PersonGroupInfos) {
                let obj = new PersonGroupInfo();
                obj.deserialize(params.PersonGroupInfos[z]);
                this.PersonGroupInfos.push(obj);
            }
        }

    }
}

/**
 * DetectFaceAttributes返回参数结构体
 * @class
 */
class DetectFaceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求的图片宽度。
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * 请求的图片高度。
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * 人脸信息列表。
         * @type {Array.<FaceDetailInfo> || null}
         */
        this.FaceDetailInfos = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;

        if (params.FaceDetailInfos) {
            this.FaceDetailInfos = new Array();
            for (let z in params.FaceDetailInfos) {
                let obj = new FaceDetailInfo();
                obj.deserialize(params.FaceDetailInfos[z]);
                this.FaceDetailInfos.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchPersonsReturnsByGroup返回参数结构体
 * @class
 */
class SearchPersonsReturnsByGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索的人员库中包含的人员数。若输入图片中所有人脸均不符合质量要求，则返回0。
         * @type {number || null}
         */
        this.PersonNum = null;

        /**
         * 识别结果。
         * @type {Array.<ResultsReturnsByGroup> || null}
         */
        this.ResultsReturnsByGroup = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.PersonNum = 'PersonNum' in params ? params.PersonNum : null;

        if (params.ResultsReturnsByGroup) {
            this.ResultsReturnsByGroup = new Array();
            for (let z in params.ResultsReturnsByGroup) {
                let obj = new ResultsReturnsByGroup();
                obj.deserialize(params.ResultsReturnsByGroup[z]);
                this.ResultsReturnsByGroup.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 帽子信息
 * @class
 */
class Hat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帽子佩戴状态信息。
AttributeItem对应的Type为 —— 0：不戴帽子，1：普通帽子，2：头盔，3：保安帽。
         * @type {AttributeItem || null}
         */
        this.Style = null;

        /**
         * 帽子颜色。
AttributeItem对应的Type为 —— 0：不戴帽子，1：红色系，2：黄色系，3：蓝色系，4：黑色系，5：灰白色系，6：混色系子。
         * @type {AttributeItem || null}
         */
        this.Color = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Style) {
            let obj = new AttributeItem();
            obj.deserialize(params.Style)
            this.Style = obj;
        }

        if (params.Color) {
            let obj = new AttributeItem();
            obj.deserialize(params.Color)
            this.Color = obj;
        }

    }
}

/**
 * CreatePerson请求参数结构体
 * @class
 */
class CreatePersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待加入的人员库ID，取值为创建人员库接口中的GroupId
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人员名称。[1，60]个字符，可修改，可重复。
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * 人员ID，单个腾讯云账号下不可修改，不可重复。支持英文、数字、-%@#&_，长度限制64B。
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 0代表未填写，1代表男性，2代表女性。
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 人员描述字段内容，key-value。[0，60]个字符，可修改，可重复。
         * @type {Array.<PersonExDescriptionInfo> || null}
         */
        this.PersonExDescriptionInfos = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 此参数用于控制判断 Image 或 Url 中图片包含的人脸，是否在人员库中已有疑似的同一人。 
如果判断为已有相同人在人员库中，则不会创建新的人员，返回疑似同一人的人员信息。 
如果判断没有，则完成创建人员。 
0: 不进行判断，无论是否有疑似同一人在库中均完成入库； 
1:较低的同一人判断要求（百一误识别率）； 
2: 一般的同一人判断要求（千一误识别率）； 
3: 较高的同一人判断要求（万一误识别率）； 
4: 很高的同一人判断要求（十万一误识别率）。 
默认 0。  
注： 要求越高，则疑似同一人的概率越小。不同要求对应的误识别率仅为参考值，您可以根据实际情况调整。
         * @type {number || null}
         */
        this.UniquePersonControl = null;

        /**
         * 图片质量控制。 
0: 不进行控制； 
1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 
2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 
3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 
4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 
默认 0。 
若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Gender = 'Gender' in params ? params.Gender : null;

        if (params.PersonExDescriptionInfos) {
            this.PersonExDescriptionInfos = new Array();
            for (let z in params.PersonExDescriptionInfos) {
                let obj = new PersonExDescriptionInfo();
                obj.deserialize(params.PersonExDescriptionInfos[z]);
                this.PersonExDescriptionInfos.push(obj);
            }
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.UniquePersonControl = 'UniquePersonControl' in params ? params.UniquePersonControl : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * CreateFace返回参数结构体
 * @class
 */
class CreateFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加入成功的人脸数量
         * @type {number || null}
         */
        this.SucFaceNum = null;

        /**
         * 加入成功的人脸ID列表
         * @type {Array.<string> || null}
         */
        this.SucFaceIds = null;

        /**
         * 每张人脸图片添加结果，-1101 代表未检测到人脸，-1102 代表图片解码失败， 
-1601代表不符合图片质量控制要求, -1604 代表人脸相似度没有超过FaceMatchThreshold。 
其他非 0 值代表算法服务异常。 
RetCode的顺序和入参中 Images 或 Urls 的顺序一致。
         * @type {Array.<number> || null}
         */
        this.RetCode = null;

        /**
         * 加入成功的人脸索引。索引顺序和入参中 Images 或 Urls 的顺序一致。 
例， Urls 中 有 3 个 url，第二个 url 失败，则 SucIndexes 值为 [0,2] 。
         * @type {Array.<number> || null}
         */
        this.SucIndexes = null;

        /**
         * 加入成功的人脸框位置。顺序和入参中 Images 或 Urls 的顺序一致。
         * @type {Array.<FaceRect> || null}
         */
        this.SucFaceRects = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.SucFaceNum = 'SucFaceNum' in params ? params.SucFaceNum : null;
        this.SucFaceIds = 'SucFaceIds' in params ? params.SucFaceIds : null;
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.SucIndexes = 'SucIndexes' in params ? params.SucIndexes : null;

        if (params.SucFaceRects) {
            this.SucFaceRects = new Array();
            for (let z in params.SucFaceRects) {
                let obj = new FaceRect();
                obj.deserialize(params.SucFaceRects[z]);
                this.SucFaceRects.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人脸属性中的发型信息。
 * @class
 */
class FaceHairAttributesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0：光头，1：短发，2：中发，3：长发，4：绑发
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 0：有刘海，1：无刘海
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bang = null;

        /**
         * 0：黑色，1：金色，2：棕色，3：灰白色
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Color = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Length = 'Length' in params ? params.Length : null;
        this.Bang = 'Bang' in params ? params.Bang : null;
        this.Color = 'Color' in params ? params.Color : null;

    }
}

/**
 * CreateFace请求参数结构体
 * @class
 */
class CreateFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID，取值为创建人员接口中的PersonId
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
人员人脸总数量不可超过5张。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
人员人脸总数量不可超过5张。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 只有和该人员已有的人脸相似度超过FaceMatchThreshold值的人脸，才能增加人脸成功。 
默认值60分。取值范围[0,100] 。
         * @type {number || null}
         */
        this.FaceMatchThreshold = null;

        /**
         * 图片质量控制。 
0: 不进行控制； 
1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 
2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 
3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 
4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 
默认 0。 
若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Images = 'Images' in params ? params.Images : null;
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.FaceMatchThreshold = 'FaceMatchThreshold' in params ? params.FaceMatchThreshold : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * CreateGroup请求参数结构体
 * @class
 */
class CreateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库名称，[1,60]个字符，可修改，不可重复。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 人员库 ID，不可修改，不可重复。支持英文、数字、-%@#&_，长度限制64B。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人员库自定义描述字段，用于描述人员库中人员属性，该人员库下所有人员将拥有此描述字段。 
最多可以创建5个。 
每个自定义描述字段支持[1,30]个字符。 
在同一人员库中自定义描述字段不可重复。 
例： 设置某人员库“自定义描述字段”为["学号","工号","手机号"]， 
则该人员库下所有人员将拥有名为“学号”、“工号”、“手机号”的描述字段， 
可在对应人员描述字段中填写内容，登记该人员的学号、工号、手机号等信息。
         * @type {Array.<string> || null}
         */
        this.GroupExDescriptions = null;

        /**
         * 人员库信息备注，[0，40]个字符。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 人脸识别服务所用的算法模型版本。

目前入参支持 “2.0”和“3.0“ 两个输入。

2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。

2020年11月26日后开通服务的账号仅支持输入“3.0”。

不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupExDescriptions = 'GroupExDescriptions' in params ? params.GroupExDescriptions : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;

    }
}

/**
 * GetPersonGroupInfo请求参数结构体
 * @class
 */
class GetPersonGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID，取值为创建人员接口中的PersonId
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 起始序号，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 人脸信息列表。
 * @class
 */
class FaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸框左上角横坐标。
人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 
若需截取完整人脸，可以在完整分completeness满足需求的情况下，将负值坐标取0。
         * @type {number || null}
         */
        this.X = null;

        /**
         * 人脸框左上角纵坐标。 
人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 
若需截取完整人脸，可以在完整分completeness满足需求的情况下，将负值坐标取0。
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

        /**
         * 人脸属性信息，包含性别( gender )、年龄( age )、表情( expression )、 
魅力( beauty )、眼镜( glass )、口罩（mask）、头发（hair）和姿态 (pitch，roll，yaw )。只有当 NeedFaceAttributes 设为 1 时才返回有效信息。
         * @type {FaceAttributesInfo || null}
         */
        this.FaceAttributesInfo = null;

        /**
         * 人脸质量信息，包含质量分（score）、模糊分（sharpness）、光照分（brightness）、遮挡分（completeness）。只有当NeedFaceDetection设为1时才返回有效信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FaceQualityInfo || null}
         */
        this.FaceQualityInfo = null;

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

        if (params.FaceAttributesInfo) {
            let obj = new FaceAttributesInfo();
            obj.deserialize(params.FaceAttributesInfo)
            this.FaceAttributesInfo = obj;
        }

        if (params.FaceQualityInfo) {
            let obj = new FaceQualityInfo();
            obj.deserialize(params.FaceQualityInfo)
            this.FaceQualityInfo = obj;
        }

    }
}

/**
 * CheckSimilarPerson请求参数结构体
 * @class
 */
class CheckSimilarPersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待整理的人员库列表。 
人员库总人数不可超过200万，人员库个数不可超过10个。
数组元素取值为创建人员库接口中的GroupId
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * 人员查重整理力度的控制。
1：力度较高的档案整理，能够消除更多的重复身份，对应稍高的非重复身份误清除率；
2：力度较低的档案整理，非重复身份的误清除率较低，对应稍低的重复身份消除率。
         * @type {number || null}
         */
        this.UniquePersonControl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.UniquePersonControl = 'UniquePersonControl' in params ? params.UniquePersonControl : null;

    }
}

/**
 * AnalyzeDenseLandmarks请求参数结构体
 * @class
 */
class AnalyzeDenseLandmarksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测模式。0 为检测所有出现的人脸， 1 为检测面积最大的人脸。 
默认为 0。 
最多返回 5 张人脸的五官定位（人脸关键点）具体信息。
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。  
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。  
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。  
非腾讯云存储的Url速度和稳定性可能受一定影响。  
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 人脸识别服务所用的算法模型版本。本接口仅支持 “3.0“ 输入。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * GetGroupList请求参数结构体
 * @class
 */
class GetGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始序号，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为10，最大值为1000
         * @type {number || null}
         */
        this.Limit = null;

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

    }
}

/**
 * GetUpgradeGroupFaceModelVersionJobList请求参数结构体
 * @class
 */
class GetUpgradeGroupFaceModelVersionJobListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始序号，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为10，最大值为1000。
         * @type {number || null}
         */
        this.Limit = null;

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

    }
}

/**
 * GetUpgradeGroupFaceModelVersionResult返回参数结构体
 * @class
 */
class GetUpgradeGroupFaceModelVersionResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员升级任务预估结束时间。 StartTimestamp的值是自 Unix 纪元时间到人员查重任务预估结束的毫秒数。  
Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。 
如果为0表示这个任务已经执行完毕。
         * @type {number || null}
         */
        this.EndTimestamp = null;

        /**
         * 升级任务完成进度。取值[0.0，100.0]。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 0表示升级中，1表示升级完毕，2表示回滚完毕，3表示升级失败。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 升级起始时间。 
StartTime的值是自 Unix 纪元时间到Group创建时间的毫秒数。 
Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。 
有关更多信息，请参阅 Unix 时间。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 当前算法模型版本。
         * @type {string || null}
         */
        this.FromFaceModelVersion = null;

        /**
         * 目标算法模型版本。
         * @type {string || null}
         */
        this.ToFaceModelVersion = null;

        /**
         * 人员库ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 无法升级的人脸Id信息，文件格式
         * @type {string || null}
         */
        this.FailedFacesUrl = null;

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
        this.EndTimestamp = 'EndTimestamp' in params ? params.EndTimestamp : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.FromFaceModelVersion = 'FromFaceModelVersion' in params ? params.FromFaceModelVersion : null;
        this.ToFaceModelVersion = 'ToFaceModelVersion' in params ? params.ToFaceModelVersion : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.FailedFacesUrl = 'FailedFacesUrl' in params ? params.FailedFacesUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectLiveFaceAccurate返回参数结构体
 * @class
 */
class DetectLiveFaceAccurateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活体打分，取值范围 [0,100]，根据活体分数对应的阈值区间来判断是否为翻拍。目前阈值可分为[5,10,40,70,90]，其中推荐阈值为40。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.Score = 'Score' in params ? params.Score : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AnalyzeFace请求参数结构体
 * @class
 */
class AnalyzeFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测模式。0 为检测所有出现的人脸， 1 为检测面积最大的人脸。默认为 0。最多返回 10 张人脸的五官定位（人脸关键点）具体信息。
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 人脸识别服务所用的算法模型版本。

目前入参支持 “2.0”和“3.0“ 两个输入。

2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。

2020年11月26日后开通服务的账号仅支持输入“3.0”。

不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * CreatePerson返回参数结构体
 * @class
 */
class CreatePersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸图片唯一标识。
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * 检测出的人脸框的位置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

        /**
         * 疑似同一人的PersonId。 
当 UniquePersonControl 参数不为0且人员库中有疑似的同一人，此参数才有意义。
         * @type {string || null}
         */
        this.SimilarPersonId = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.FaceId = 'FaceId' in params ? params.FaceId : null;

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }
        this.SimilarPersonId = 'SimilarPersonId' in params ? params.SimilarPersonId : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchFaces返回参数结构体
 * @class
 */
class SearchFacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果。
         * @type {Array.<Result> || null}
         */
        this.Results = null;

        /**
         * 搜索的人员库中包含的人脸数。
         * @type {number || null}
         */
        this.FaceNum = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new Result();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.FaceNum = 'FaceNum' in params ? params.FaceNum : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CopyPerson返回参数结构体
 * @class
 */
class CopyPersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功加入的人员库数量
         * @type {number || null}
         */
        this.SucGroupNum = null;

        /**
         * 成功加入的人员库列表
         * @type {Array.<string> || null}
         */
        this.SucGroupIds = null;

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
        this.SucGroupNum = 'SucGroupNum' in params ? params.SucGroupNum : null;
        this.SucGroupIds = 'SucGroupIds' in params ? params.SucGroupIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EstimateCheckSimilarPersonCostTime返回参数结构体
 * @class
 */
class EstimateCheckSimilarPersonCostTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员查重任务预估需要耗费时间。 单位为分钟。
         * @type {number || null}
         */
        this.EstimatedTimeCost = null;

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
        this.EstimatedTimeCost = 'EstimatedTimeCost' in params ? params.EstimatedTimeCost : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分组识别结果Item
 * @class
 */
class GroupCandidate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库ID 。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 识别出的最相似候选人。
         * @type {Array.<Candidate> || null}
         */
        this.Candidates = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.Candidates) {
            this.Candidates = new Array();
            for (let z in params.Candidates) {
                let obj = new Candidate();
                obj.deserialize(params.Candidates[z]);
                this.Candidates.push(obj);
            }
        }

    }
}

/**
 * DeleteFace返回参数结构体
 * @class
 */
class DeleteFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除成功的人脸数量
         * @type {number || null}
         */
        this.SucDeletedNum = null;

        /**
         * 删除成功的人脸ID列表
         * @type {Array.<string> || null}
         */
        this.SucFaceIds = null;

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
        this.SucDeletedNum = 'SucDeletedNum' in params ? params.SucDeletedNum : null;
        this.SucFaceIds = 'SucFaceIds' in params ? params.SucFaceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePerson请求参数结构体
 * @class
 */
class DeletePersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID，取值为创建人员接口中的PersonId
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * DetectLiveFace返回参数结构体
 * @class
 */
class DetectLiveFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活体打分，取值范围 [0,100]，分数一般落于[80, 100]区间内，0分也为常见值。推荐相大于 87 时可判断为活体。可根据具体场景自行调整阈值。
本字段当且仅当FaceModelVersion为2.0时才具备参考意义。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * 活体检测是否通过。
本字段只有FaceModelVersion为3.0时才具备参考意义。
         * @type {boolean || null}
         */
        this.IsLiveness = null;

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
        this.Score = 'Score' in params ? params.Score : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.IsLiveness = 'IsLiveness' in params ? params.IsLiveness : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFace请求参数结构体
 * @class
 */
class DeleteFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID，取值为创建人员接口中的PersonId
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 待删除的人脸ID列表，数组元素取值为增加人脸接口返回的FaceId
         * @type {Array.<string> || null}
         */
        this.FaceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.FaceIds = 'FaceIds' in params ? params.FaceIds : null;

    }
}

/**
 * ModifyGroup请求参数结构体
 * @class
 */
class ModifyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库ID，取值为创建人员库接口中的GroupId
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人员库名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 需要修改的人员库自定义描述字段，key-value
         * @type {Array.<GroupExDescriptionInfo> || null}
         */
        this.GroupExDescriptionInfos = null;

        /**
         * 人员库信息备注
         * @type {string || null}
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

        if (params.GroupExDescriptionInfos) {
            this.GroupExDescriptionInfos = new Array();
            for (let z in params.GroupExDescriptionInfos) {
                let obj = new GroupExDescriptionInfo();
                obj.deserialize(params.GroupExDescriptionInfos[z]);
                this.GroupExDescriptionInfos.push(obj);
            }
        }
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * DeleteGroup请求参数结构体
 * @class
 */
class DeleteGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库ID，取值为创建人员库接口中的GroupId
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * EstimateCheckSimilarPersonCostTime请求参数结构体
 * @class
 */
class EstimateCheckSimilarPersonCostTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待整理的人员库列表。 
人员库总人数不可超过200万，人员库个数不可超过10个。
数组元素取值为创建人员库接口中的GroupId
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;

    }
}

/**
 * RevertGroupFaceModelVersion返回参数结构体
 * @class
 */
class RevertGroupFaceModelVersionResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeGroupFaceModelVersion请求参数结构体
 * @class
 */
class UpgradeGroupFaceModelVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要升级的人员库ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 需要升级至的算法模型版本。默认为最新版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;

    }
}

/**
 * DetectLiveFace请求参数结构体
 * @class
 */
class DetectLiveFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。（图片的宽高比请接近3:4，不符合宽高比的图片返回的分值不具备参考意义）。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。 
（图片的宽高比请接近 3:4，不符合宽高比的图片返回的分值不具备参考意义） 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 人脸识别服务所用的算法模型版本。

目前入参支持 “2.0”和“3.0“ 两个输入。

2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。

2020年11月26日后开通服务的账号仅支持输入“3.0”。

不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;

    }
}

/**
 * GetPersonBaseInfo返回参数结构体
 * @class
 */
class GetPersonBaseInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员名称
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * 人员性别，0代表未填写，1代表男性，2代表女性
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 包含的人脸 ID 列表
         * @type {Array.<string> || null}
         */
        this.FaceIds = null;

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
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.FaceIds = 'FaceIds' in params ? params.FaceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSimilarPersonResult请求参数结构体
 * @class
 */
class GetSimilarPersonResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查重任务ID，用于查询、获取查重的进度和结果。取值为人员查重接口返回的JobId
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * SearchPersons返回参数结构体
 * @class
 */
class SearchPersonsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果。
         * @type {Array.<Result> || null}
         */
        this.Results = null;

        /**
         * 搜索的人员库中包含的人员数。若输入图片中所有人脸均不符合质量要求，则返回0。
         * @type {number || null}
         */
        this.PersonNum = null;

        /**
         * 人脸识别所用的算法模型版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new Result();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.PersonNum = 'PersonNum' in params ? params.PersonNum : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetUpgradeGroupFaceModelVersionResult请求参数结构体
 * @class
 */
class GetUpgradeGroupFaceModelVersionResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 升级任务ID，用于查询、获取人员库升级的进度和结果。
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * 返回的人员库信息
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 人员库ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人员库自定义描述字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.GroupExDescriptions = null;

        /**
         * 人员库信息备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 人脸识别所用的算法模型版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * Group的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。 
Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。有关更多信息，请参阅 Unix 时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreationTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupExDescriptions = 'GroupExDescriptions' in params ? params.GroupExDescriptions : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.CreationTimestamp = 'CreationTimestamp' in params ? params.CreationTimestamp : null;

    }
}

/**
 * 人脸质量信息，包含质量分（score）、模糊分（sharpness）、光照分（brightness）、遮挡分（completeness）。只有当NeedFaceDetection设为1时才返回有效信息。
 * @class
 */
class FaceQualityInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 质量分: [0,100]，综合评价图像质量是否适合人脸识别，分数越高质量越好。 
正常情况，只需要使用Score作为质量分总体的判断标准即可。Sharpness、Brightness、Completeness等细项分仅供参考。
参考范围：[0,40]较差，[40,60] 一般，[60,80]较好，[80,100]很好。 
建议：人脸入库选取70以上的图片。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 清晰分：[0,100]，评价图片清晰程度，分数越高越清晰。 
参考范围：[0,40]特别模糊，[40,60]模糊，[60,80]一般，[80,100]清晰。 
建议：人脸入库选取80以上的图片。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Sharpness = null;

        /**
         * 光照分：[0,100]，评价图片光照程度，分数越高越亮。 
参考范围： [0,30]偏暗，[30,70]光照正常，[70,100]偏亮。 
建议：人脸入库选取[30,70]的图片。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Brightness = null;

        /**
         * 五官遮挡分，评价眉毛（Eyebrow）、眼睛（Eye）、鼻子（Nose）、脸颊（Cheek）、嘴巴（Mouth）、下巴（Chin）的被遮挡程度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FaceQualityCompleteness || null}
         */
        this.Completeness = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Score = 'Score' in params ? params.Score : null;
        this.Sharpness = 'Sharpness' in params ? params.Sharpness : null;
        this.Brightness = 'Brightness' in params ? params.Brightness : null;

        if (params.Completeness) {
            let obj = new FaceQualityCompleteness();
            obj.deserialize(params.Completeness)
            this.Completeness = obj;
        }

    }
}

/**
 * SearchFacesReturnsByGroup返回参数结构体
 * @class
 */
class SearchFacesReturnsByGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索的人员库中包含的人脸数。
         * @type {number || null}
         */
        this.FaceNum = null;

        /**
         * 识别结果。
         * @type {Array.<ResultsReturnsByGroup> || null}
         */
        this.ResultsReturnsByGroup = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.FaceNum = 'FaceNum' in params ? params.FaceNum : null;

        if (params.ResultsReturnsByGroup) {
            this.ResultsReturnsByGroup = new Array();
            for (let z in params.ResultsReturnsByGroup) {
                let obj = new ResultsReturnsByGroup();
                obj.deserialize(params.ResultsReturnsByGroup[z]);
                this.ResultsReturnsByGroup.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CopyPerson请求参数结构体
 * @class
 */
class CopyPersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID，取值为创建人员接口中的PersonId
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 待加入的人员库列表，数组元素取值为创建人员库接口中的GroupId
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;

    }
}

/**
 * SearchPersonsReturnsByGroup请求参数结构体
 * @class
 */
class SearchPersonsReturnsByGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 希望搜索的人员库列表，上限60个。数组元素取值为创建人员库接口中的GroupId
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的Url速度和稳定性可能受一定影响。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。
MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。
例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34将影响搜索精度。建议设置为80。
         * @type {number || null}
         */
        this.MinFaceSize = null;

        /**
         * 被检测到的人脸，对应最多返回的最相似人员数目。默认值为5，最大值为10。  
例，设MaxFaceNum为3，MaxPersonNumPerGroup为5，GroupIds长度为3，则最多可能返回3*5*3=45个人员。
         * @type {number || null}
         */
        this.MaxPersonNumPerGroup = null;

        /**
         * 图片质量控制。 
0: 不进行控制； 
1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 
2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 
3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 
4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 
默认 0。 
若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * 出参Score中，只有超过FaceMatchThreshold值的结果才会返回。默认为0。
         * @type {number || null}
         */
        this.FaceMatchThreshold = null;

        /**
         * 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0
         * @type {number || null}
         */
        this.NeedPersonInfo = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.MinFaceSize = 'MinFaceSize' in params ? params.MinFaceSize : null;
        this.MaxPersonNumPerGroup = 'MaxPersonNumPerGroup' in params ? params.MaxPersonNumPerGroup : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.FaceMatchThreshold = 'FaceMatchThreshold' in params ? params.FaceMatchThreshold : null;
        this.NeedPersonInfo = 'NeedPersonInfo' in params ? params.NeedPersonInfo : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * DeletePersonFromGroup返回参数结构体
 * @class
 */
class DeletePersonFromGroupResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCheckSimilarPersonJobIdList返回参数结构体
 * @class
 */
class GetCheckSimilarPersonJobIdListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员查重任务信息列表。
         * @type {Array.<JobIdInfo> || null}
         */
        this.JobIdInfos = null;

        /**
         * 查重任务总数量。
         * @type {number || null}
         */
        this.JobIdNum = null;

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

        if (params.JobIdInfos) {
            this.JobIdInfos = new Array();
            for (let z in params.JobIdInfos) {
                let obj = new JobIdInfo();
                obj.deserialize(params.JobIdInfos[z]);
                this.JobIdInfos.push(obj);
            }
        }
        this.JobIdNum = 'JobIdNum' in params ? params.JobIdNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 稠密关键点详细信息
 * @class
 */
class DenseFaceShape extends  AbstractModel {
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

        /**
         * 描述左侧眼睛轮廓的 XX 点。
         * @type {Array.<Point> || null}
         */
        this.LeftEye = null;

        /**
         * 描述右侧眼睛轮廓的 XX 点。
         * @type {Array.<Point> || null}
         */
        this.RightEye = null;

        /**
         * 描述左侧眉毛轮廓的 XX 点。
         * @type {Array.<Point> || null}
         */
        this.LeftEyeBrow = null;

        /**
         * 描述右侧眉毛轮廓的 XX 点。
         * @type {Array.<Point> || null}
         */
        this.RightEyeBrow = null;

        /**
         * 描述外嘴巴轮廓的 XX 点， 从左侧开始逆时针返回。
         * @type {Array.<Point> || null}
         */
        this.MouthOutside = null;

        /**
         * 描述内嘴巴轮廓的 XX 点，从左侧开始逆时针返回。
         * @type {Array.<Point> || null}
         */
        this.MouthInside = null;

        /**
         * 描述鼻子轮廓的 XX 点。
         * @type {Array.<Point> || null}
         */
        this.Nose = null;

        /**
         * 左瞳孔轮廓的 XX 个点。
         * @type {Array.<Point> || null}
         */
        this.LeftPupil = null;

        /**
         * 右瞳孔轮廓的 XX 个点。
         * @type {Array.<Point> || null}
         */
        this.RightPupil = null;

        /**
         * 中轴线轮廓的 XX 个点。
         * @type {Array.<Point> || null}
         */
        this.CentralAxis = null;

        /**
         * 下巴轮廓的 XX 个点。
         * @type {Array.<Point> || null}
         */
        this.Chin = null;

        /**
         * 左眼袋的 XX 个点。
         * @type {Array.<Point> || null}
         */
        this.LeftEyeBags = null;

        /**
         * 右眼袋的 XX 个点。
         * @type {Array.<Point> || null}
         */
        this.RightEyeBags = null;

        /**
         * 额头的 XX 个点。
         * @type {Array.<Point> || null}
         */
        this.Forehead = null;

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

        if (params.LeftEye) {
            this.LeftEye = new Array();
            for (let z in params.LeftEye) {
                let obj = new Point();
                obj.deserialize(params.LeftEye[z]);
                this.LeftEye.push(obj);
            }
        }

        if (params.RightEye) {
            this.RightEye = new Array();
            for (let z in params.RightEye) {
                let obj = new Point();
                obj.deserialize(params.RightEye[z]);
                this.RightEye.push(obj);
            }
        }

        if (params.LeftEyeBrow) {
            this.LeftEyeBrow = new Array();
            for (let z in params.LeftEyeBrow) {
                let obj = new Point();
                obj.deserialize(params.LeftEyeBrow[z]);
                this.LeftEyeBrow.push(obj);
            }
        }

        if (params.RightEyeBrow) {
            this.RightEyeBrow = new Array();
            for (let z in params.RightEyeBrow) {
                let obj = new Point();
                obj.deserialize(params.RightEyeBrow[z]);
                this.RightEyeBrow.push(obj);
            }
        }

        if (params.MouthOutside) {
            this.MouthOutside = new Array();
            for (let z in params.MouthOutside) {
                let obj = new Point();
                obj.deserialize(params.MouthOutside[z]);
                this.MouthOutside.push(obj);
            }
        }

        if (params.MouthInside) {
            this.MouthInside = new Array();
            for (let z in params.MouthInside) {
                let obj = new Point();
                obj.deserialize(params.MouthInside[z]);
                this.MouthInside.push(obj);
            }
        }

        if (params.Nose) {
            this.Nose = new Array();
            for (let z in params.Nose) {
                let obj = new Point();
                obj.deserialize(params.Nose[z]);
                this.Nose.push(obj);
            }
        }

        if (params.LeftPupil) {
            this.LeftPupil = new Array();
            for (let z in params.LeftPupil) {
                let obj = new Point();
                obj.deserialize(params.LeftPupil[z]);
                this.LeftPupil.push(obj);
            }
        }

        if (params.RightPupil) {
            this.RightPupil = new Array();
            for (let z in params.RightPupil) {
                let obj = new Point();
                obj.deserialize(params.RightPupil[z]);
                this.RightPupil.push(obj);
            }
        }

        if (params.CentralAxis) {
            this.CentralAxis = new Array();
            for (let z in params.CentralAxis) {
                let obj = new Point();
                obj.deserialize(params.CentralAxis[z]);
                this.CentralAxis.push(obj);
            }
        }

        if (params.Chin) {
            this.Chin = new Array();
            for (let z in params.Chin) {
                let obj = new Point();
                obj.deserialize(params.Chin[z]);
                this.Chin.push(obj);
            }
        }

        if (params.LeftEyeBags) {
            this.LeftEyeBags = new Array();
            for (let z in params.LeftEyeBags) {
                let obj = new Point();
                obj.deserialize(params.LeftEyeBags[z]);
                this.LeftEyeBags.push(obj);
            }
        }

        if (params.RightEyeBags) {
            this.RightEyeBags = new Array();
            for (let z in params.RightEyeBags) {
                let obj = new Point();
                obj.deserialize(params.RightEyeBags[z]);
                this.RightEyeBags.push(obj);
            }
        }

        if (params.Forehead) {
            this.Forehead = new Array();
            for (let z in params.Forehead) {
                let obj = new Point();
                obj.deserialize(params.Forehead[z]);
                this.Forehead.push(obj);
            }
        }

    }
}

/**
 * 识别结果。

 * @class
 */
class ResultsReturnsByGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测出的人脸框位置。
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

        /**
         * 识别结果。
         * @type {Array.<GroupCandidate> || null}
         */
        this.GroupCandidates = null;

        /**
         * 检测出的人脸图片状态返回码。0 表示正常。 
-1601代表不符合图片质量控制要求，此时Candidate内容为空。
         * @type {number || null}
         */
        this.RetCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }

        if (params.GroupCandidates) {
            this.GroupCandidates = new Array();
            for (let z in params.GroupCandidates) {
                let obj = new GroupCandidate();
                obj.deserialize(params.GroupCandidates[z]);
                this.GroupCandidates.push(obj);
            }
        }
        this.RetCode = 'RetCode' in params ? params.RetCode : null;

    }
}

/**
 * 坐标
 * @class
 */
class Point extends  AbstractModel {
    constructor(){
        super();

        /**
         * x坐标
         * @type {number || null}
         */
        this.X = null;

        /**
         * Y坐标
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
 * GetPersonListNum返回参数结构体
 * @class
 */
class GetPersonListNumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员数量
         * @type {number || null}
         */
        this.PersonNum = null;

        /**
         * 人脸数量
         * @type {number || null}
         */
        this.FaceNum = null;

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
        this.PersonNum = 'PersonNum' in params ? params.PersonNum : null;
        this.FaceNum = 'FaceNum' in params ? params.FaceNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePersonFromGroup请求参数结构体
 * @class
 */
class DeletePersonFromGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID，取值为创建人员接口中的PersonId
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人员库ID，取值为创建人员库接口中的GroupId
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * VerifyFace请求参数结构体
 * @class
 */
class VerifyFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待验证的人员ID。人员ID具体信息请参考人员库管理相关接口。
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 图片质量控制。 
0: 不进行控制； 
1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 
2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 
3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 
4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 
默认 0。 
若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * GetPersonList返回参数结构体
 * @class
 */
class GetPersonListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的人员信息
         * @type {Array.<PersonInfo> || null}
         */
        this.PersonInfos = null;

        /**
         * 该人员库的人员数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PersonNum = null;

        /**
         * 该人员库的人脸数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FaceNum = null;

        /**
         * 人脸识别所用的算法模型版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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

        if (params.PersonInfos) {
            this.PersonInfos = new Array();
            for (let z in params.PersonInfos) {
                let obj = new PersonInfo();
                obj.deserialize(params.PersonInfos[z]);
                this.PersonInfos.push(obj);
            }
        }
        this.PersonNum = 'PersonNum' in params ? params.PersonNum : null;
        this.FaceNum = 'FaceNum' in params ? params.FaceNum : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 头发信息
 * @class
 */
class Hair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 头发长度信息。
AttributeItem对应的Type为 —— 0：光头，1：短发，2：中发，3：长发，4：绑发。
         * @type {AttributeItem || null}
         */
        this.Length = null;

        /**
         * 刘海信息。
AttributeItem对应的Type为 —— 0：无刘海，1：有刘海。
         * @type {AttributeItem || null}
         */
        this.Bang = null;

        /**
         * 头发颜色信息。
AttributeItem对应的Type为 —— 0：黑色，1：金色，2：棕色，3：灰白色。
         * @type {AttributeItem || null}
         */
        this.Color = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Length) {
            let obj = new AttributeItem();
            obj.deserialize(params.Length)
            this.Length = obj;
        }

        if (params.Bang) {
            let obj = new AttributeItem();
            obj.deserialize(params.Bang)
            this.Bang = obj;
        }

        if (params.Color) {
            let obj = new AttributeItem();
            obj.deserialize(params.Color)
            this.Color = obj;
        }

    }
}

/**
 * CheckSimilarPerson返回参数结构体
 * @class
 */
class CheckSimilarPersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查重任务ID，用于查询、获取查重的进度和结果。
         * @type {string || null}
         */
        this.JobId = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人脸的识别结果
 * @class
 */
class Result extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的最相似候选人
         * @type {Array.<Candidate> || null}
         */
        this.Candidates = null;

        /**
         * 检测出的人脸框位置
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

        /**
         * 检测出的人脸图片状态返回码。0 表示正常。 
-1601代表不符合图片质量控制要求，此时Candidate内容为空。
         * @type {number || null}
         */
        this.RetCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Candidates) {
            this.Candidates = new Array();
            for (let z in params.Candidates) {
                let obj = new Candidate();
                obj.deserialize(params.Candidates[z]);
                this.Candidates.push(obj);
            }
        }

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }
        this.RetCode = 'RetCode' in params ? params.RetCode : null;

    }
}

/**
 * GetPersonGroupInfo返回参数结构体
 * @class
 */
class GetPersonGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 包含此人员的人员库及描述字段内容列表
         * @type {Array.<PersonGroupInfo> || null}
         */
        this.PersonGroupInfos = null;

        /**
         * 人员库总数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupNum = null;

        /**
         * 人脸识别服务所用的算法模型版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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

        if (params.PersonGroupInfos) {
            this.PersonGroupInfos = new Array();
            for (let z in params.PersonGroupInfos) {
                let obj = new PersonGroupInfo();
                obj.deserialize(params.PersonGroupInfos[z]);
                this.PersonGroupInfos.push(obj);
            }
        }
        this.GroupNum = 'GroupNum' in params ? params.GroupNum : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeGroupFaceModelVersion返回参数结构体
 * @class
 */
class UpgradeGroupFaceModelVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 升级任务ID，用于查询、获取升级的进度和结果。
         * @type {string || null}
         */
        this.JobId = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchFacesReturnsByGroup请求参数结构体
 * @class
 */
class SearchFacesReturnsByGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 希望搜索的人员库列表，上限60个。数组元素取值为创建人员库接口中的GroupId。
不可同时搜索不同算法模型版本（FaceModelVersion）的人员库。
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的Url速度和稳定性可能受一定影响。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。
MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。
例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34将影响搜索精度。建议设置为80。
         * @type {number || null}
         */
        this.MinFaceSize = null;

        /**
         * 被检测到的人脸，对应最多返回的最相似人员数目。默认值为5，最大值为10。  
例，设MaxFaceNum为3，MaxPersonNum为5，则最多可能返回3*5=15个人员。
         * @type {number || null}
         */
        this.MaxPersonNumPerGroup = null;

        /**
         * 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0
         * @type {number || null}
         */
        this.NeedPersonInfo = null;

        /**
         * 图片质量控制。 
0: 不进行控制； 
1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 
2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 
3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 
4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 
默认 0。 
若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * 出参Score中，只有大于等于FaceMatchThreshold值的结果才会返回。
默认为0。
取值范围[0.0,100.0) 。
         * @type {number || null}
         */
        this.FaceMatchThreshold = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.MinFaceSize = 'MinFaceSize' in params ? params.MinFaceSize : null;
        this.MaxPersonNumPerGroup = 'MaxPersonNumPerGroup' in params ? params.MaxPersonNumPerGroup : null;
        this.NeedPersonInfo = 'NeedPersonInfo' in params ? params.NeedPersonInfo : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.FaceMatchThreshold = 'FaceMatchThreshold' in params ? params.FaceMatchThreshold : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * AnalyzeDenseLandmarks返回参数结构体
 * @class
 */
class AnalyzeDenseLandmarksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求的图片宽度。
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * 请求的图片高度。
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * 稠密人脸关键点具体信息。
         * @type {Array.<DenseFaceShape> || null}
         */
        this.DenseFaceShapeSet = null;

        /**
         * 人脸识别服务所用的算法模型版本。本接口仅支持 “3.0“ 输入。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;

        if (params.DenseFaceShapeSet) {
            this.DenseFaceShapeSet = new Array();
            for (let z in params.DenseFaceShapeSet) {
                let obj = new DenseFaceShape();
                obj.deserialize(params.DenseFaceShapeSet[z]);
                this.DenseFaceShapeSet.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPersonBaseInfo返回参数结构体
 * @class
 */
class ModifyPersonBaseInfoResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSimilarPersonResult返回参数结构体
 * @class
 */
class GetSimilarPersonResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查重任务完成进度。取值[0.0，100.0]。当且仅当值为100时，SimilarPersons才有意义。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 疑似同一人的人员信息文件临时下载链接， 有效时间为5分钟，结果文件实际保存90天。
文件内容由 SimilarPerson 的数组组成。
         * @type {string || null}
         */
        this.SimilarPersonsUrl = null;

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
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.SimilarPersonsUrl = 'SimilarPersonsUrl' in params ? params.SimilarPersonsUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPersonGroupInfo请求参数结构体
 * @class
 */
class ModifyPersonGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库ID，取值为创建人员库接口中的GroupId
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人员ID，取值为创建人员接口中的PersonId
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 需要修改的人员描述字段内容，key-value
         * @type {Array.<PersonExDescriptionInfo> || null}
         */
        this.PersonExDescriptionInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

        if (params.PersonExDescriptionInfos) {
            this.PersonExDescriptionInfos = new Array();
            for (let z in params.PersonExDescriptionInfos) {
                let obj = new PersonExDescriptionInfo();
                obj.deserialize(params.PersonExDescriptionInfos[z]);
                this.PersonExDescriptionInfos.push(obj);
            }
        }

    }
}

/**
 * RevertGroupFaceModelVersion请求参数结构体
 * @class
 */
class RevertGroupFaceModelVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要回滚的升级任务ID。
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * 五官遮挡分，评价眉毛（Eyebrow）、眼睛（Eye）、鼻子（Nose）、脸颊（Cheek）、嘴巴（Mouth）、下巴（Chin）的被遮挡程度。
 * @class
 */
class FaceQualityCompleteness extends  AbstractModel {
    constructor(){
        super();

        /**
         * 眉毛的遮挡分数[0,100]，分数越高遮挡越少。 
参考范围：[0,80]表示发生遮挡。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Eyebrow = null;

        /**
         * 眼睛的遮挡分数[0,100],分数越高遮挡越少。 
参考范围：[0,80]表示发生遮挡。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Eye = null;

        /**
         * 鼻子的遮挡分数[0,100],分数越高遮挡越少。 
参考范围：[0,60]表示发生遮挡。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Nose = null;

        /**
         * 脸颊的遮挡分数[0,100],分数越高遮挡越少。 
参考范围：[0,70]表示发生遮挡。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cheek = null;

        /**
         * 嘴巴的遮挡分数[0,100],分数越高遮挡越少。 
参考范围：[0,50]表示发生遮挡。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Mouth = null;

        /**
         * 下巴的遮挡分数[0,100],分数越高遮挡越少。 
参考范围：[0,70]表示发生遮挡。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Chin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Eyebrow = 'Eyebrow' in params ? params.Eyebrow : null;
        this.Eye = 'Eye' in params ? params.Eye : null;
        this.Nose = 'Nose' in params ? params.Nose : null;
        this.Cheek = 'Cheek' in params ? params.Cheek : null;
        this.Mouth = 'Mouth' in params ? params.Mouth : null;
        this.Chin = 'Chin' in params ? params.Chin : null;

    }
}

/**
 * 人脸属性信息，包含性别( gender )、年龄( age )、表情( expression )、 
魅力( beauty )、眼镜( glass )、口罩（mask）、头发（hair）和姿态 (pitch，roll，yaw )。只有当 NeedFaceAttributes 设为 1 时才返回有效信息，最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 FaceAttributesInfo 不具备参考意义。
 * @class
 */
class FaceAttributesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 性别[0~49]为女性，[50，100]为男性，越接近0和100表示置信度越高。NeedFaceAttributes 不为 1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 年龄 [0~100]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 微笑[0(normal，正常)~50(smile，微笑)~100(laugh，大笑)]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {number || null}
         */
        this.Expression = null;

        /**
         * 是否有眼镜 [true,false]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {boolean || null}
         */
        this.Glass = null;

        /**
         * 上下偏移[-30,30]，单位角度。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 
建议：人脸入库选择[-10,10]的图片。
         * @type {number || null}
         */
        this.Pitch = null;

        /**
         * 左右偏移[-30,30]，单位角度。 NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 
建议：人脸入库选择[-10,10]的图片。
         * @type {number || null}
         */
        this.Yaw = null;

        /**
         * 平面旋转[-180,180]，单位角度。 NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。  
建议：人脸入库选择[-20,20]的图片。
         * @type {number || null}
         */
        this.Roll = null;

        /**
         * 魅力[0~100]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {number || null}
         */
        this.Beauty = null;

        /**
         * 是否有帽子 [true,false]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Hat = null;

        /**
         * 是否有口罩 [true,false]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Mask = null;

        /**
         * 头发信息，包含头发长度（length）、有无刘海（bang）、头发颜色（color）。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FaceHairAttributesInfo || null}
         */
        this.Hair = null;

        /**
         * 双眼是否睁开 [true,false]。只要有超过一只眼睛闭眼，就返回false。 NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EyeOpen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Expression = 'Expression' in params ? params.Expression : null;
        this.Glass = 'Glass' in params ? params.Glass : null;
        this.Pitch = 'Pitch' in params ? params.Pitch : null;
        this.Yaw = 'Yaw' in params ? params.Yaw : null;
        this.Roll = 'Roll' in params ? params.Roll : null;
        this.Beauty = 'Beauty' in params ? params.Beauty : null;
        this.Hat = 'Hat' in params ? params.Hat : null;
        this.Mask = 'Mask' in params ? params.Mask : null;

        if (params.Hair) {
            let obj = new FaceHairAttributesInfo();
            obj.deserialize(params.Hair)
            this.Hair = obj;
        }
        this.EyeOpen = 'EyeOpen' in params ? params.EyeOpen : null;

    }
}

/**
 * VerifyPerson请求参数结构体
 * @class
 */
class VerifyPersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待验证的人员ID。人员ID具体信息请参考人员库管理相关接口。
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 图片 base64 数据。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。。
 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 图片质量控制。 
0: 不进行控制； 
1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 
2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 
3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 
4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 
默认 0。 
若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * CompareMaskFace返回参数结构体
 * @class
 */
class CompareMaskFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 两张图片中人脸的相似度分数。
不同算法版本返回的相似度分数不同。 
若需要验证两张图片中人脸是否为同一人，3.0版本误识率千分之一对应分数为40分，误识率万分之一对应分数为50分，误识率十万分之一对应分数为60分。  一般超过50分则可认定为同一人。 
2.0版本误识率千分之一对应分数为70分，误识率万分之一对应分数为80分，误识率十万分之一对应分数为90分。 一般超过80分则可认定为同一人。 
若需要验证两张图片中的人脸是否为同一人，建议使用人脸验证接口。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.Score = 'Score' in params ? params.Score : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPersonBaseInfo请求参数结构体
 * @class
 */
class ModifyPersonBaseInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID，取值为创建人员接口中的PersonId
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 需要修改的人员名称
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * 需要修改的人员性别，1代表男性，2代表女性
         * @type {number || null}
         */
        this.Gender = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.Gender = 'Gender' in params ? params.Gender : null;

    }
}

/**
 * DetectLiveFaceAccurate请求参数结构体
 * @class
 */
class DetectLiveFaceAccurateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 
图片的宽高比请接近 3:4，手机拍摄比例最佳。
人脸尺寸大于100X100像素。
图片格式支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。 
图片的宽高比请接近 3:4，手机拍摄比例最佳。
人脸尺寸大于100X100像素。
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。
图片格式支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 人脸识别服务所用的算法模型版本。目前入参支持“3.0“。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;

    }
}

/**
 * 查重任务信息
 * @class
 */
class JobIdInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查重任务ID，用于查询、获取查重的进度和结果。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 查重起始时间。 
StartTime的值是自 Unix 纪元时间到Group创建时间的毫秒数。 
Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。 
有关更多信息，请参阅 Unix 时间。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查重任务是否已完成。0: 成功 1: 未完成 2: 失败
         * @type {number || null}
         */
        this.JobStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.JobStatus = 'JobStatus' in params ? params.JobStatus : null;

    }
}

/**
 * 人脸信息列表。
 * @class
 */
class FaceDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测出的人脸框位置。
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

        /**
         * 人脸属性信息，根据 FaceAttributesType 输入的类型，返回年龄（Age）、颜值（Beauty） 
情绪（Emotion）、眼睛信息（Eye）、眉毛（Eyebrow）、性别（Gender） 
头发（Hair）、帽子（Hat）、姿态（Headpose）、口罩（Mask）、嘴巴（Mouse）、胡子（Moustache） 
鼻子（Nose）、脸型（Shape）、肤色（Skin）、微笑（Smile）等人脸属性信息。  
若 FaceAttributesType 没有输入相关类型，则FaceDetaiAttributesInfo返回的细项不具备参考意义。
         * @type {FaceDetailAttributesInfo || null}
         */
        this.FaceDetailAttributesInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }

        if (params.FaceDetailAttributesInfo) {
            let obj = new FaceDetailAttributesInfo();
            obj.deserialize(params.FaceDetailAttributesInfo)
            this.FaceDetailAttributesInfo = obj;
        }

    }
}

/**
 * SearchFaces请求参数结构体
 * @class
 */
class SearchFacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 希望搜索的人员库列表，上限100个。数组元素取值为创建人员库接口中的GroupId。
不可同时搜索不同算法模型版本（FaceModelVersion）的人员库。
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。 
MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。 
例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34的人脸图片无法被识别。建议设置为80。
         * @type {number || null}
         */
        this.MinFaceSize = null;

        /**
         * 单张被识别的人脸返回的最相似人员数量。默认值为5，最大值为100。 
例，设MaxFaceNum为1，MaxPersonNum为8，则返回Top8相似的人员信息。
值越大，需要处理的时间越长。建议不要超过10。
         * @type {number || null}
         */
        this.MaxPersonNum = null;

        /**
         * 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0
         * @type {number || null}
         */
        this.NeedPersonInfo = null;

        /**
         * 图片质量控制。 
0: 不进行控制； 
1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 
2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 
3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 
4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 
默认 0。 
若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * 出参Score中，只有超过FaceMatchThreshold值的结果才会返回。默认为0。
         * @type {number || null}
         */
        this.FaceMatchThreshold = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.MinFaceSize = 'MinFaceSize' in params ? params.MinFaceSize : null;
        this.MaxPersonNum = 'MaxPersonNum' in params ? params.MaxPersonNum : null;
        this.NeedPersonInfo = 'NeedPersonInfo' in params ? params.NeedPersonInfo : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.FaceMatchThreshold = 'FaceMatchThreshold' in params ? params.FaceMatchThreshold : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * GetCheckSimilarPersonJobIdList请求参数结构体
 * @class
 */
class GetCheckSimilarPersonJobIdListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始序号，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为10，最大值为1000。
         * @type {number || null}
         */
        this.Limit = null;

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

    }
}

/**
 * SearchPersons请求参数结构体
 * @class
 */
class SearchPersonsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 希望搜索的人员库列表，上限100个。数组元素取值为创建人员库接口中的GroupId
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的Url速度和稳定性可能受一定影响。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。
MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。
例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34将影响搜索精度。建议设置为80。
         * @type {number || null}
         */
        this.MinFaceSize = null;

        /**
         * 单张被识别的人脸返回的最相似人员数量。默认值为5，最大值为100。
例，设MaxFaceNum为1，MaxPersonNum为8，则返回Top8相似的人员信息。
值越大，需要处理的时间越长。建议不要超过10。
         * @type {number || null}
         */
        this.MaxPersonNum = null;

        /**
         * 图片质量控制。 
0: 不进行控制； 
1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 
2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 
3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 
4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 
默认 0。 
若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * 出参Score中，只有大于等于FaceMatchThreshold值的结果才会返回。默认为0。取值范围[0.0,100.0) 。
         * @type {number || null}
         */
        this.FaceMatchThreshold = null;

        /**
         * 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0
         * @type {number || null}
         */
        this.NeedPersonInfo = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.MinFaceSize = 'MinFaceSize' in params ? params.MinFaceSize : null;
        this.MaxPersonNum = 'MaxPersonNum' in params ? params.MaxPersonNum : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.FaceMatchThreshold = 'FaceMatchThreshold' in params ? params.FaceMatchThreshold : null;
        this.NeedPersonInfo = 'NeedPersonInfo' in params ? params.NeedPersonInfo : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * 返回的人员信息
 * @class
 */
class PersonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员名称
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * 人员Id
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人员性别
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 人员描述字段内容
         * @type {Array.<string> || null}
         */
        this.PersonExDescriptions = null;

        /**
         * 包含的人脸照片列表
         * @type {Array.<string> || null}
         */
        this.FaceIds = null;

        /**
         * 人员的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Person创建时间的毫秒数。 
Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。有关更多信息，请参阅 Unix 时间。
         * @type {number || null}
         */
        this.CreationTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.PersonExDescriptions = 'PersonExDescriptions' in params ? params.PersonExDescriptions : null;
        this.FaceIds = 'FaceIds' in params ? params.FaceIds : null;
        this.CreationTimestamp = 'CreationTimestamp' in params ? params.CreationTimestamp : null;

    }
}

/**
 * 需要修改的人员库自定义描述字段key-value
 * @class
 */
class GroupExDescriptionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库自定义描述字段Index，从0开始
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupExDescriptionIndex = null;

        /**
         * 需要更新的人员库自定义描述字段内容
         * @type {string || null}
         */
        this.GroupExDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupExDescriptionIndex = 'GroupExDescriptionIndex' in params ? params.GroupExDescriptionIndex : null;
        this.GroupExDescription = 'GroupExDescription' in params ? params.GroupExDescription : null;

    }
}

/**
 * CompareMaskFace请求参数结构体
 * @class
 */
class CompareMaskFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * A 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.ImageA = null;

        /**
         * B 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.ImageB = null;

        /**
         * A 图片的 Url ，对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
A 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.UrlA = null;

        /**
         * B 图片的 Url ，对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
B 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.UrlB = null;

        /**
         * 人脸识别服务所用的算法模型版本。该接口只支持"3.0"
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * 图片质量控制。 
0: 不进行控制； 
1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 
2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 
3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 
4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 
默认 0。 
若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
         * @type {number || null}
         */
        this.QualityControl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageA = 'ImageA' in params ? params.ImageA : null;
        this.ImageB = 'ImageB' in params ? params.ImageB : null;
        this.UrlA = 'UrlA' in params ? params.UrlA : null;
        this.UrlB = 'UrlB' in params ? params.UrlB : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;

    }
}

/**
 * AnalyzeFace返回参数结构体
 * @class
 */
class AnalyzeFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求的图片宽度。
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * 请求的图片高度。
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * 五官定位（人脸关键点）具体信息。
         * @type {Array.<FaceShape> || null}
         */
        this.FaceShapeSet = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;

        if (params.FaceShapeSet) {
            this.FaceShapeSet = new Array();
            for (let z in params.FaceShapeSet) {
                let obj = new FaceShape();
                obj.deserialize(params.FaceShapeSet[z]);
                this.FaceShapeSet.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectFace请求参数结构体
 * @class
 */
class DetectFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最多处理的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为120。 
此参数用于控制处理待检测图片中的人脸个数，值越小，处理速度越快。
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * 人脸长和宽的最小尺寸，单位为像素。
默认为34。建议不低于34。
低于MinFaceSize值的人脸不会被检测。
         * @type {number || null}
         */
        this.MinFaceSize = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 是否需要返回人脸属性信息（FaceAttributesInfo）。0 为不需要返回，1 为需要返回。默认为 0。 
非 1 值均视为不需要返回，此时 FaceAttributesInfo 不具备参考意义。  
最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 FaceAttributesInfo 不具备参考意义。  
提取人脸属性信息较为耗时，如不需要人脸属性信息，建议关闭此项功能，加快人脸检测速度。
         * @type {number || null}
         */
        this.NeedFaceAttributes = null;

        /**
         * 是否开启质量检测。0 为关闭，1 为开启。默认为 0。 
非 1 值均视为不进行质量检测。
最多返回面积最大的 30 张人脸质量分信息，超过 30 张人脸（第 31 张及以后的人脸）的 FaceQualityInfo不具备参考意义。  
建议：人脸入库操作建议开启此功能。
         * @type {number || null}
         */
        this.NeedQualityDetection = null;

        /**
         * 人脸识别服务所用的算法模型版本。

目前入参支持 “2.0”和“3.0“ 两个输入。

2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。

2020年11月26日后开通服务的账号仅支持输入“3.0”。

不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.MinFaceSize = 'MinFaceSize' in params ? params.MinFaceSize : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.NeedFaceAttributes = 'NeedFaceAttributes' in params ? params.NeedFaceAttributes : null;
        this.NeedQualityDetection = 'NeedQualityDetection' in params ? params.NeedQualityDetection : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * GetPersonBaseInfo请求参数结构体
 * @class
 */
class GetPersonBaseInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID，创建人员接口中的PersonId
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * DeletePerson返回参数结构体
 * @class
 */
class DeletePersonResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 需要修改的人员描述字段内容，key-value
 * @class
 */
class PersonExDescriptionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员描述字段Index，从0开始
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PersonExDescriptionIndex = null;

        /**
         * 需要更新的人员描述字段内容
         * @type {string || null}
         */
        this.PersonExDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonExDescriptionIndex = 'PersonExDescriptionIndex' in params ? params.PersonExDescriptionIndex : null;
        this.PersonExDescription = 'PersonExDescription' in params ? params.PersonExDescription : null;

    }
}

/**
 * GetUpgradeGroupFaceModelVersionJobList返回参数结构体
 * @class
 */
class GetUpgradeGroupFaceModelVersionJobListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库升级任务信息列表。
         * @type {Array.<UpgradeJobInfo> || null}
         */
        this.JobInfos = null;

        /**
         * 升级任务总数量。
         * @type {number || null}
         */
        this.JobNum = null;

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

        if (params.JobInfos) {
            this.JobInfos = new Array();
            for (let z in params.JobInfos) {
                let obj = new UpgradeJobInfo();
                obj.deserialize(params.JobInfos[z]);
                this.JobInfos.push(obj);
            }
        }
        this.JobNum = 'JobNum' in params ? params.JobNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 姿态信息
 * @class
 */
class HeadPose extends  AbstractModel {
    constructor(){
        super();

        /**
         * 上下偏移[-30,30]。
         * @type {number || null}
         */
        this.Pitch = null;

        /**
         * 左右偏移[-30,30]。
         * @type {number || null}
         */
        this.Yaw = null;

        /**
         * 平面旋转[-180,180]。
         * @type {number || null}
         */
        this.Roll = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Pitch = 'Pitch' in params ? params.Pitch : null;
        this.Yaw = 'Yaw' in params ? params.Yaw : null;
        this.Roll = 'Roll' in params ? params.Roll : null;

    }
}

/**
 * GetGroupList返回参数结构体
 * @class
 */
class GetGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的人员库信息
         * @type {Array.<GroupInfo> || null}
         */
        this.GroupInfos = null;

        /**
         * 人员库总数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupNum = null;

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

        if (params.GroupInfos) {
            this.GroupInfos = new Array();
            for (let z in params.GroupInfos) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupInfos[z]);
                this.GroupInfos.push(obj);
            }
        }
        this.GroupNum = 'GroupNum' in params ? params.GroupNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectFaceAttributes请求参数结构体
 * @class
 */
class DetectFaceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最多处理的人脸数目。 
默认值为1（仅检测图片中面积最大的那张人脸），最大值为120。 
此参数用于控制处理待检测图片中的人脸个数，值越小，处理速度越快。
         * @type {number || null}
         */
        this.MaxFaceNum = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。 
对应图片 base64 编码后大小不可超过5M。 
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 是否返回年龄、性别、情绪等属性。 
合法值为（大小写不敏感）：None、Age、Beauty、Emotion、Eye、Eyebrow 
Gender、Hair、Hat、Headpose、Mask、Mouth、Moustache、Nose、Shape、Skin、Smile。 
None为不需要返回。默认为 None。 
需要将属性组成一个用逗号分隔的字符串，属性之间的顺序没有要求。 
关于各属性的详细描述，参见下文出参。 
最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 AttributesInfo 不具备参考意义。
         * @type {string || null}
         */
        this.FaceAttributesType = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

        /**
         * 人脸识别服务所用的算法模型版本。本接口仅支持“3.0”输入
         * @type {string || null}
         */
        this.FaceModelVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxFaceNum = 'MaxFaceNum' in params ? params.MaxFaceNum : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.FaceAttributesType = 'FaceAttributesType' in params ? params.FaceAttributesType : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;

    }
}

/**
 * GetGroupInfo返回参数结构体
 * @class
 */
class GetGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 人员库ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人员库自定义描述字段
         * @type {Array.<string> || null}
         */
        this.GroupExDescriptions = null;

        /**
         * 人员库信息备注
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * Group的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。
         * @type {number || null}
         */
        this.CreationTimestamp = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupExDescriptions = 'GroupExDescriptions' in params ? params.GroupExDescriptions : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.CreationTimestamp = 'CreationTimestamp' in params ? params.CreationTimestamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CompareFace返回参数结构体
 * @class
 */
class CompareFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 两张图片中人脸的相似度分数。
不同算法版本返回的相似度分数不同。 
若需要验证两张图片中人脸是否为同一人，3.0版本误识率千分之一对应分数为40分，误识率万分之一对应分数为50分，误识率十万分之一对应分数为60分。  一般超过50分则可认定为同一人。 
2.0版本误识率千分之一对应分数为70分，误识率万分之一对应分数为80分，误识率十万分之一对应分数为90分。 一般超过80分则可认定为同一人。 
若需要验证两张图片中的人脸是否为同一人，建议使用人脸验证接口。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.Score = 'Score' in params ? params.Score : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 嘴巴信息。
 * @class
 */
class Mouth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否张嘴信息。
AttributeItem对应的Type为 —— 0：不张嘴，1：张嘴。
         * @type {AttributeItem || null}
         */
        this.MouthOpen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MouthOpen) {
            let obj = new AttributeItem();
            obj.deserialize(params.MouthOpen)
            this.MouthOpen = obj;
        }

    }
}

/**
 * 包含此人员的人员库及描述字段内容列表
 * @class
 */
class PersonGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 包含此人员的人员库ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人员描述字段内容
         * @type {Array.<string> || null}
         */
        this.PersonExDescriptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PersonExDescriptions = 'PersonExDescriptions' in params ? params.PersonExDescriptions : null;

    }
}

/**
 * VerifyFace返回参数结构体
 * @class
 */
class VerifyFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 给定的人脸图片与 PersonId 对应人脸的相似度。若 PersonId 下有多张人脸（Face），返回相似度最大的分数。

不同算法版本返回的相似度分数不同。
若需要验证两张图片中人脸是否为同一人，3.0版本误识率千分之一对应分数为40分，误识率万分之一对应分数为50分，误识率十万分之一对应分数为60分。 一般超过50分则可认定为同一人。
2.0版本误识率千分之一对应分数为70分，误识率万分之一对应分数为80分，误识率十万分之一对应分数为90分。 一般超过80分则可认定为同一人。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 是否为同一人的判断。
         * @type {boolean || null}
         */
        this.IsMatch = null;

        /**
         * 人脸识别所用的算法模型版本，是该 Person 所在的人员库的算法模型版本。在创建人员库时设置，详情可参考[算法模型版本](https://cloud.tencent.com/document/product/867/40042)
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.Score = 'Score' in params ? params.Score : null;
        this.IsMatch = 'IsMatch' in params ? params.IsMatch : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteGroup返回参数结构体
 * @class
 */
class DeleteGroupResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 五官定位（人脸关键点）具体信息。
 * @class
 */
class FaceShape extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述脸型轮廓的 21 点。
         * @type {Array.<Point> || null}
         */
        this.FaceProfile = null;

        /**
         * 描述左侧眼睛轮廓的 8 点。
         * @type {Array.<Point> || null}
         */
        this.LeftEye = null;

        /**
         * 描述右侧眼睛轮廓的 8 点。
         * @type {Array.<Point> || null}
         */
        this.RightEye = null;

        /**
         * 描述左侧眉毛轮廓的 8 点。
         * @type {Array.<Point> || null}
         */
        this.LeftEyeBrow = null;

        /**
         * 描述右侧眉毛轮廓的 8 点。
         * @type {Array.<Point> || null}
         */
        this.RightEyeBrow = null;

        /**
         * 描述嘴巴轮廓的 22 点。
         * @type {Array.<Point> || null}
         */
        this.Mouth = null;

        /**
         * 描述鼻子轮廓的 13 点。
         * @type {Array.<Point> || null}
         */
        this.Nose = null;

        /**
         * 左瞳孔轮廓的 1 个点。
         * @type {Array.<Point> || null}
         */
        this.LeftPupil = null;

        /**
         * 右瞳孔轮廓的 1 个点。
         * @type {Array.<Point> || null}
         */
        this.RightPupil = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceProfile) {
            this.FaceProfile = new Array();
            for (let z in params.FaceProfile) {
                let obj = new Point();
                obj.deserialize(params.FaceProfile[z]);
                this.FaceProfile.push(obj);
            }
        }

        if (params.LeftEye) {
            this.LeftEye = new Array();
            for (let z in params.LeftEye) {
                let obj = new Point();
                obj.deserialize(params.LeftEye[z]);
                this.LeftEye.push(obj);
            }
        }

        if (params.RightEye) {
            this.RightEye = new Array();
            for (let z in params.RightEye) {
                let obj = new Point();
                obj.deserialize(params.RightEye[z]);
                this.RightEye.push(obj);
            }
        }

        if (params.LeftEyeBrow) {
            this.LeftEyeBrow = new Array();
            for (let z in params.LeftEyeBrow) {
                let obj = new Point();
                obj.deserialize(params.LeftEyeBrow[z]);
                this.LeftEyeBrow.push(obj);
            }
        }

        if (params.RightEyeBrow) {
            this.RightEyeBrow = new Array();
            for (let z in params.RightEyeBrow) {
                let obj = new Point();
                obj.deserialize(params.RightEyeBrow[z]);
                this.RightEyeBrow.push(obj);
            }
        }

        if (params.Mouth) {
            this.Mouth = new Array();
            for (let z in params.Mouth) {
                let obj = new Point();
                obj.deserialize(params.Mouth[z]);
                this.Mouth.push(obj);
            }
        }

        if (params.Nose) {
            this.Nose = new Array();
            for (let z in params.Nose) {
                let obj = new Point();
                obj.deserialize(params.Nose[z]);
                this.Nose.push(obj);
            }
        }

        if (params.LeftPupil) {
            this.LeftPupil = new Array();
            for (let z in params.LeftPupil) {
                let obj = new Point();
                obj.deserialize(params.LeftPupil[z]);
                this.LeftPupil.push(obj);
            }
        }

        if (params.RightPupil) {
            this.RightPupil = new Array();
            for (let z in params.RightPupil) {
                let obj = new Point();
                obj.deserialize(params.RightPupil[z]);
                this.RightPupil.push(obj);
            }
        }

    }
}

/**
 * CompareFace请求参数结构体
 * @class
 */
class CompareFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * A 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.ImageA = null;

        /**
         * B 图片 base64 数据，base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.ImageB = null;

        /**
         * A 图片的 Url ，对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
A 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.UrlA = null;

        /**
         * B 图片的 Url ，对应图片 base64 编码后大小不可超过5M。
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
B 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.UrlB = null;

        /**
         * 人脸识别服务所用的算法模型版本。

目前入参支持 “2.0”和“3.0“ 两个输入。

2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。

2020年11月26日后开通服务的账号仅支持输入“3.0”。

不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

        /**
         * 图片质量控制。 
0: 不进行控制； 
1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 
2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 
3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 
4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 
默认 0。 
若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
         * @type {number || null}
         */
        this.QualityControl = null;

        /**
         * 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
         * @type {number || null}
         */
        this.NeedRotateDetection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageA = 'ImageA' in params ? params.ImageA : null;
        this.ImageB = 'ImageB' in params ? params.ImageB : null;
        this.UrlA = 'UrlA' in params ? params.UrlA : null;
        this.UrlB = 'UrlB' in params ? params.UrlB : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.QualityControl = 'QualityControl' in params ? params.QualityControl : null;
        this.NeedRotateDetection = 'NeedRotateDetection' in params ? params.NeedRotateDetection : null;

    }
}

/**
 * VerifyPerson返回参数结构体
 * @class
 */
class VerifyPersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 给定的人脸照片与 PersonId 对应的相似度。若 PersonId 下有多张人脸（Face），会融合多张人脸信息进行验证。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 是否为同一人的判断。
         * @type {boolean || null}
         */
        this.IsMatch = null;

        /**
         * 人脸识别所用的算法模型版本，是该 Person 所在的人员库的算法模型版本。在创建人员库时设置，详情可参考[算法模型版本](https://cloud.tencent.com/document/product/867/40042)
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.Score = 'Score' in params ? params.Score : null;
        this.IsMatch = 'IsMatch' in params ? params.IsMatch : null;
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectFace返回参数结构体
 * @class
 */
class DetectFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求的图片宽度。
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * 请求的图片高度。
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * 人脸信息列表。包含人脸坐标信息、属性信息（若需要）、质量分信息（若需要）。
         * @type {Array.<FaceInfo> || null}
         */
        this.FaceInfos = null;

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;

        if (params.FaceInfos) {
            this.FaceInfos = new Array();
            for (let z in params.FaceInfos) {
                let obj = new FaceInfo();
                obj.deserialize(params.FaceInfos[z]);
                this.FaceInfos.push(obj);
            }
        }
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPersonListNum请求参数结构体
 * @class
 */
class GetPersonListNumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库ID，取值为创建人员库接口中的GroupId
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 眉毛信息
 * @class
 */
class Eyebrow extends  AbstractModel {
    constructor(){
        super();

        /**
         * 眉毛浓密。
AttributeItem对应的Type为 —— 0：淡眉，1：浓眉。
         * @type {AttributeItem || null}
         */
        this.EyebrowDensity = null;

        /**
         * 眉毛弯曲。
AttributeItem对应的Type为 —— 0：不弯，1：弯眉。
         * @type {AttributeItem || null}
         */
        this.EyebrowCurve = null;

        /**
         * 眉毛长短。
AttributeItem对应的Type为 —— 0：短眉毛，1：长眉毛。
         * @type {AttributeItem || null}
         */
        this.EyebrowLength = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EyebrowDensity) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyebrowDensity)
            this.EyebrowDensity = obj;
        }

        if (params.EyebrowCurve) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyebrowCurve)
            this.EyebrowCurve = obj;
        }

        if (params.EyebrowLength) {
            let obj = new AttributeItem();
            obj.deserialize(params.EyebrowLength)
            this.EyebrowLength = obj;
        }

    }
}

/**
 * GetGroupInfo请求参数结构体
 * @class
 */
class GetGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库 ID，取值为创建人员库接口中的GroupId
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 人员库升级任务信息
 * @class
 */
class UpgradeJobInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库升级任务ID，用于查询、获取升级的进度和结果。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 人员库ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 当前算法模型版本。
         * @type {string || null}
         */
        this.FromFaceModelVersion = null;

        /**
         * 目标算法模型版本。
         * @type {string || null}
         */
        this.ToFaceModelVersion = null;

        /**
         * 升级起始时间。 
StartTime的值是自 Unix 纪元时间到Group创建时间的毫秒数。 
Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。 
有关更多信息，请参阅 Unix 时间。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 0表示升级中，1表示升级完毕，2表示回滚完毕，3表示升级失败。
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.FromFaceModelVersion = 'FromFaceModelVersion' in params ? params.FromFaceModelVersion : null;
        this.ToFaceModelVersion = 'ToFaceModelVersion' in params ? params.ToFaceModelVersion : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyGroup返回参数结构体
 * @class
 */
class ModifyGroupResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPersonList请求参数结构体
 * @class
 */
class GetPersonListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库ID，取值为创建人员库接口中的GroupId
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 起始序号，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为10，最大值为1000
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 人脸属性信息，根据 FaceAttributesType 输入的类型，返回年龄（Age）、颜值（Beauty） 
情绪（Emotion）、眼睛信息（Eye）、眉毛（Eyebrow）、性别（Gender） 
头发（Hair）、帽子（Hat）、姿态（Headpose）、口罩（Mask）、嘴巴（Mouth）、胡子（Moustache） 
鼻子（Nose）、脸型（Shape）、肤色（Skin）、微笑（Smile）等人脸属性信息。  
若 FaceAttributesType 没有输入相关类型，则FaceDetaiAttributesInfo返回的细项不具备参考意义。
 * @class
 */
class FaceDetailAttributesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 年龄 [0,65]，其中65代表“65岁及以上”。 
FaceAttributesType 不为含Age 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 美丑打分[0,100]。 
FaceAttributesType 不含 Beauty 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {number || null}
         */
        this.Beauty = null;

        /**
         * 情绪，可识别自然、高兴、惊讶、生气、悲伤、厌恶、害怕。 
AttributeItem对应的Type为 —— 0：自然，1：高兴，2：惊讶，3：生气，4：悲伤，5：厌恶，6：害怕
FaceAttributesType 不含Emotion 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {AttributeItem || null}
         */
        this.Emotion = null;

        /**
         * 眼睛相关信息，可识别是否戴眼镜、是否闭眼、是否双眼皮和眼睛大小。 
FaceAttributesType 不含Eye 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {Eye || null}
         */
        this.Eye = null;

        /**
         * 眉毛相关信息，可识别眉毛浓密、弯曲、长短信息。 
FaceAttributesType 不含Eyebrow 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {Eyebrow || null}
         */
        this.Eyebrow = null;

        /**
         * 性别信息。 
AttributeItem对应的Type为 —— 	0：男性，1：女性。
FaceAttributesType 不含Gender 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {AttributeItem || null}
         */
        this.Gender = null;

        /**
         * 头发信息，包含头发长度、有无刘海、头发颜色。 
FaceAttributesType 不含Hair 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {Hair || null}
         */
        this.Hair = null;

        /**
         * 帽子信息，可识别是否佩戴帽子、帽子款式、帽子颜色。 
FaceAttributesType 不含Hat 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {Hat || null}
         */
        this.Hat = null;

        /**
         * 姿态信息，包含人脸的上下偏移、左右偏移、平面旋转信息。 
FaceAttributesType 不含Headpose 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {HeadPose || null}
         */
        this.HeadPose = null;

        /**
         * 口罩佩戴信息。 
AttributeItem对应的Type为 —— 0: 无口罩， 1: 有口罩不遮脸，2: 有口罩遮下巴，3: 有口罩遮嘴，4: 正确佩戴口罩。
FaceAttributesType 不含Mask 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {AttributeItem || null}
         */
        this.Mask = null;

        /**
         * 嘴巴信息，可识别是否张嘴、嘴唇厚度。 
FaceAttributesType 不含 Mouth 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {Mouth || null}
         */
        this.Mouth = null;

        /**
         * 胡子信息。
AttributeItem对应的Type为 —— 0：无胡子，1：有胡子。 
FaceAttributesType 不含 Moustache 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {AttributeItem || null}
         */
        this.Moustache = null;

        /**
         * 鼻子信息。 
AttributeItem对应的Type为 —— 0：朝天鼻，1：鹰钩鼻，2：普通，3：圆鼻头
FaceAttributesType 不含 Nose 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {AttributeItem || null}
         */
        this.Nose = null;

        /**
         * 脸型信息。 
AttributeItem对应的Type为 —— 0：方脸，1：三角脸，2：鹅蛋脸，3：心形脸，4：圆脸。
FaceAttributesType 不含 Shape 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {AttributeItem || null}
         */
        this.Shape = null;

        /**
         * 肤色信息。 
AttributeItem对应的Type为 —— 0：黄色皮肤，1：棕色皮肤，2：黑色皮肤，3：白色皮肤。
FaceAttributesType 不含 Skin 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {AttributeItem || null}
         */
        this.Skin = null;

        /**
         * 微笑程度，[0,100]。 
FaceAttributesType 不含 Smile 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
         * @type {number || null}
         */
        this.Smile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Age = 'Age' in params ? params.Age : null;
        this.Beauty = 'Beauty' in params ? params.Beauty : null;

        if (params.Emotion) {
            let obj = new AttributeItem();
            obj.deserialize(params.Emotion)
            this.Emotion = obj;
        }

        if (params.Eye) {
            let obj = new Eye();
            obj.deserialize(params.Eye)
            this.Eye = obj;
        }

        if (params.Eyebrow) {
            let obj = new Eyebrow();
            obj.deserialize(params.Eyebrow)
            this.Eyebrow = obj;
        }

        if (params.Gender) {
            let obj = new AttributeItem();
            obj.deserialize(params.Gender)
            this.Gender = obj;
        }

        if (params.Hair) {
            let obj = new Hair();
            obj.deserialize(params.Hair)
            this.Hair = obj;
        }

        if (params.Hat) {
            let obj = new Hat();
            obj.deserialize(params.Hat)
            this.Hat = obj;
        }

        if (params.HeadPose) {
            let obj = new HeadPose();
            obj.deserialize(params.HeadPose)
            this.HeadPose = obj;
        }

        if (params.Mask) {
            let obj = new AttributeItem();
            obj.deserialize(params.Mask)
            this.Mask = obj;
        }

        if (params.Mouth) {
            let obj = new Mouth();
            obj.deserialize(params.Mouth)
            this.Mouth = obj;
        }

        if (params.Moustache) {
            let obj = new AttributeItem();
            obj.deserialize(params.Moustache)
            this.Moustache = obj;
        }

        if (params.Nose) {
            let obj = new AttributeItem();
            obj.deserialize(params.Nose)
            this.Nose = obj;
        }

        if (params.Shape) {
            let obj = new AttributeItem();
            obj.deserialize(params.Shape)
            this.Shape = obj;
        }

        if (params.Skin) {
            let obj = new AttributeItem();
            obj.deserialize(params.Skin)
            this.Skin = obj;
        }
        this.Smile = 'Smile' in params ? params.Smile : null;

    }
}

/**
 * 人脸属性信息
 * @class
 */
class AttributeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性值
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Type识别概率值，【0,1】,代表判断正确的概率。
         * @type {number || null}
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * 检测出的人脸框的位置
 * @class
 */
class FaceRect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸框左上角横坐标。 
人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 
若需截取完整人脸，可以在完整分completess满足需求的情况下，将负值坐标取0。
         * @type {number || null}
         */
        this.X = null;

        /**
         * 人脸框左上角纵坐标。 
人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 
若需截取完整人脸，可以在完整分completess满足需求的情况下，将负值坐标取0。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 人脸宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 人脸高度
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
 * ModifyPersonGroupInfo返回参数结构体
 * @class
 */
class ModifyPersonGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateGroup返回参数结构体
 * @class
 */
class CreateGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸识别所用的算法模型版本。
         * @type {string || null}
         */
        this.FaceModelVersion = null;

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
        this.FaceModelVersion = 'FaceModelVersion' in params ? params.FaceModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    Eye: Eye,
    Candidate: Candidate,
    DetectFaceAttributesResponse: DetectFaceAttributesResponse,
    SearchPersonsReturnsByGroupResponse: SearchPersonsReturnsByGroupResponse,
    Hat: Hat,
    CreatePersonRequest: CreatePersonRequest,
    CreateFaceResponse: CreateFaceResponse,
    FaceHairAttributesInfo: FaceHairAttributesInfo,
    CreateFaceRequest: CreateFaceRequest,
    CreateGroupRequest: CreateGroupRequest,
    GetPersonGroupInfoRequest: GetPersonGroupInfoRequest,
    FaceInfo: FaceInfo,
    CheckSimilarPersonRequest: CheckSimilarPersonRequest,
    AnalyzeDenseLandmarksRequest: AnalyzeDenseLandmarksRequest,
    GetGroupListRequest: GetGroupListRequest,
    GetUpgradeGroupFaceModelVersionJobListRequest: GetUpgradeGroupFaceModelVersionJobListRequest,
    GetUpgradeGroupFaceModelVersionResultResponse: GetUpgradeGroupFaceModelVersionResultResponse,
    DetectLiveFaceAccurateResponse: DetectLiveFaceAccurateResponse,
    AnalyzeFaceRequest: AnalyzeFaceRequest,
    CreatePersonResponse: CreatePersonResponse,
    SearchFacesResponse: SearchFacesResponse,
    CopyPersonResponse: CopyPersonResponse,
    EstimateCheckSimilarPersonCostTimeResponse: EstimateCheckSimilarPersonCostTimeResponse,
    GroupCandidate: GroupCandidate,
    DeleteFaceResponse: DeleteFaceResponse,
    DeletePersonRequest: DeletePersonRequest,
    DetectLiveFaceResponse: DetectLiveFaceResponse,
    DeleteFaceRequest: DeleteFaceRequest,
    ModifyGroupRequest: ModifyGroupRequest,
    DeleteGroupRequest: DeleteGroupRequest,
    EstimateCheckSimilarPersonCostTimeRequest: EstimateCheckSimilarPersonCostTimeRequest,
    RevertGroupFaceModelVersionResponse: RevertGroupFaceModelVersionResponse,
    UpgradeGroupFaceModelVersionRequest: UpgradeGroupFaceModelVersionRequest,
    DetectLiveFaceRequest: DetectLiveFaceRequest,
    GetPersonBaseInfoResponse: GetPersonBaseInfoResponse,
    GetSimilarPersonResultRequest: GetSimilarPersonResultRequest,
    SearchPersonsResponse: SearchPersonsResponse,
    GetUpgradeGroupFaceModelVersionResultRequest: GetUpgradeGroupFaceModelVersionResultRequest,
    GroupInfo: GroupInfo,
    FaceQualityInfo: FaceQualityInfo,
    SearchFacesReturnsByGroupResponse: SearchFacesReturnsByGroupResponse,
    CopyPersonRequest: CopyPersonRequest,
    SearchPersonsReturnsByGroupRequest: SearchPersonsReturnsByGroupRequest,
    DeletePersonFromGroupResponse: DeletePersonFromGroupResponse,
    GetCheckSimilarPersonJobIdListResponse: GetCheckSimilarPersonJobIdListResponse,
    DenseFaceShape: DenseFaceShape,
    ResultsReturnsByGroup: ResultsReturnsByGroup,
    Point: Point,
    GetPersonListNumResponse: GetPersonListNumResponse,
    DeletePersonFromGroupRequest: DeletePersonFromGroupRequest,
    VerifyFaceRequest: VerifyFaceRequest,
    GetPersonListResponse: GetPersonListResponse,
    Hair: Hair,
    CheckSimilarPersonResponse: CheckSimilarPersonResponse,
    Result: Result,
    GetPersonGroupInfoResponse: GetPersonGroupInfoResponse,
    UpgradeGroupFaceModelVersionResponse: UpgradeGroupFaceModelVersionResponse,
    SearchFacesReturnsByGroupRequest: SearchFacesReturnsByGroupRequest,
    AnalyzeDenseLandmarksResponse: AnalyzeDenseLandmarksResponse,
    ModifyPersonBaseInfoResponse: ModifyPersonBaseInfoResponse,
    GetSimilarPersonResultResponse: GetSimilarPersonResultResponse,
    ModifyPersonGroupInfoRequest: ModifyPersonGroupInfoRequest,
    RevertGroupFaceModelVersionRequest: RevertGroupFaceModelVersionRequest,
    FaceQualityCompleteness: FaceQualityCompleteness,
    FaceAttributesInfo: FaceAttributesInfo,
    VerifyPersonRequest: VerifyPersonRequest,
    CompareMaskFaceResponse: CompareMaskFaceResponse,
    ModifyPersonBaseInfoRequest: ModifyPersonBaseInfoRequest,
    DetectLiveFaceAccurateRequest: DetectLiveFaceAccurateRequest,
    JobIdInfo: JobIdInfo,
    FaceDetailInfo: FaceDetailInfo,
    SearchFacesRequest: SearchFacesRequest,
    GetCheckSimilarPersonJobIdListRequest: GetCheckSimilarPersonJobIdListRequest,
    SearchPersonsRequest: SearchPersonsRequest,
    PersonInfo: PersonInfo,
    GroupExDescriptionInfo: GroupExDescriptionInfo,
    CompareMaskFaceRequest: CompareMaskFaceRequest,
    AnalyzeFaceResponse: AnalyzeFaceResponse,
    DetectFaceRequest: DetectFaceRequest,
    GetPersonBaseInfoRequest: GetPersonBaseInfoRequest,
    DeletePersonResponse: DeletePersonResponse,
    PersonExDescriptionInfo: PersonExDescriptionInfo,
    GetUpgradeGroupFaceModelVersionJobListResponse: GetUpgradeGroupFaceModelVersionJobListResponse,
    HeadPose: HeadPose,
    GetGroupListResponse: GetGroupListResponse,
    DetectFaceAttributesRequest: DetectFaceAttributesRequest,
    GetGroupInfoResponse: GetGroupInfoResponse,
    CompareFaceResponse: CompareFaceResponse,
    Mouth: Mouth,
    PersonGroupInfo: PersonGroupInfo,
    VerifyFaceResponse: VerifyFaceResponse,
    DeleteGroupResponse: DeleteGroupResponse,
    FaceShape: FaceShape,
    CompareFaceRequest: CompareFaceRequest,
    VerifyPersonResponse: VerifyPersonResponse,
    DetectFaceResponse: DetectFaceResponse,
    GetPersonListNumRequest: GetPersonListNumRequest,
    Eyebrow: Eyebrow,
    GetGroupInfoRequest: GetGroupInfoRequest,
    UpgradeJobInfo: UpgradeJobInfo,
    ModifyGroupResponse: ModifyGroupResponse,
    GetPersonListRequest: GetPersonListRequest,
    FaceDetailAttributesInfo: FaceDetailAttributesInfo,
    AttributeItem: AttributeItem,
    FaceRect: FaceRect,
    ModifyPersonGroupInfoResponse: ModifyPersonGroupInfoResponse,
    CreateGroupResponse: CreateGroupResponse,

}
