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
 * SegmentPortraitPic返回参数结构体
 * @class
 */
class SegmentPortraitPicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理后的图片 base64 数据，透明背景图
         * @type {string || null}
         */
        this.ResultImage = null;

        /**
         * 一个通过 Base64 编码的文件，解码后文件由 Float 型浮点数组成。这些浮点数代表原图从左上角开始的每一行的每一个像素点，每一个浮点数的值是原图相应像素点位于人体轮廓内的置信度（0-1）转化的灰度值（0-255）
         * @type {string || null}
         */
        this.ResultMask = null;

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
        this.ResultMask = 'ResultMask' in params ? params.ResultMask : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 识别出的最相似候选人。
 * @class
 */
class Candidate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID。
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人体轨迹ID。
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * 候选者的匹配得分。 
十万人体库下，误识率百分之五对应的分数为70分；误识率百分之二对应的分数为80分；误识率百分之一对应的分数为90分。
 
二十万人体库下，误识率百分之五对应的分数为80分；误识率百分之二对应的分数为90分；误识率百分之一对应的分数为95分。
 
通常情况建议使用分数80分（保召回）。若希望获得较高精度，建议使用分数90分（保准确）。
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.Score = 'Score' in params ? params.Score : null;

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
         * 人员ID。
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
 * GetGroupList返回参数结构体
 * @class
 */
class GetGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的人体库信息。
         * @type {Array.<GroupInfo> || null}
         */
        this.GroupInfos = null;

        /**
         * 人体库总数量。
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
 * 返回的人员库信息。
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人体库名称。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 人体库ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人体库信息备注。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 人体识别所用的算法模型版本。
         * @type {string || null}
         */
        this.BodyModelVersion = null;

        /**
         * Group的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。  
Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 。
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
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
        this.CreationTimestamp = 'CreationTimestamp' in params ? params.CreationTimestamp : null;

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
         * 人体库ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人体库名称。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 人体库信息备注。
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
        this.Tag = 'Tag' in params ? params.Tag : null;

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
         * 待加入的人员库ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人员名称。[1，60]个字符，可修改，可重复。
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * 人员ID，单个腾讯云账号下不可修改，不可重复。 
支持英文、数字、-%@#&_，，长度限制64B。
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人体轨迹信息。
         * @type {Trace || null}
         */
        this.Trace = null;

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

        if (params.Trace) {
            let obj = new Trace();
            obj.deserialize(params.Trace)
            this.Trace = obj;
        }

    }
}

/**
 * ModifyPersonInfo返回参数结构体
 * @class
 */
class ModifyPersonInfoResponse extends  AbstractModel {
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
 * 人体轨迹信息
 * @class
 */
class Trace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人体轨迹图片 Base64 数组。 
数组长度最小为1最大为5。 
单个图片 base64 编码后大小不可超过2M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * 人体轨迹图片 Url 数组。 
数组长度最小为1最大为5。 
单个图片 base64 编码后大小不可超过2M。 
Urls、Images必须提供一个，如果都提供，只使用 Urls。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 若输入的Images 和 Urls 是已经裁剪后的人体小图，则可以忽略本参数。 
若否，或图片中包含多个人体，则需要通过本参数来指定图片中的人体框。 
顺序对应 Images 或 Urls 中的顺序。  
当不输入本参数时，我们将认为输入图片已是经过裁剪后的人体小图，不会进行人体检测而直接进行特征提取处理。
         * @type {Array.<BodyRect> || null}
         */
        this.BodyRects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Images = 'Images' in params ? params.Images : null;
        this.Urls = 'Urls' in params ? params.Urls : null;

        if (params.BodyRects) {
            this.BodyRects = new Array();
            for (let z in params.BodyRects) {
                let obj = new BodyRect();
                obj.deserialize(params.BodyRects[z]);
                this.BodyRects.push(obj);
            }
        }

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
         * 人体库ID。
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
 * ModifyPersonInfo请求参数结构体
 * @class
 */
class ModifyPersonInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID。
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人员名称。
         * @type {string || null}
         */
        this.PersonName = null;

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
         * 人体库名称，[1,60]个字符，可修改，不可重复。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 人体库 ID，不可修改，不可重复。支持英文、数字、-%@#&_，长度限制64B。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人体库信息备注，[0，40]个字符。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 人体识别所用的算法模型版本。 
目前入参仅支持 “1.0”1个输入。 默认为"1.0"。  
不同算法模型版本对应的人体识别算法不同，新版本的整体效果会优于旧版本，后续我们将推出更新版本。
         * @type {string || null}
         */
        this.BodyModelVersion = null;

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
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;

    }
}

/**
 * 人体轨迹信息。
 * @class
 */
class TraceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人体轨迹ID。
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * 包含的人体轨迹图片Id列表。
         * @type {Array.<string> || null}
         */
        this.BodyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.BodyIds = 'BodyIds' in params ? params.BodyIds : null;

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
 * 人体框
 * @class
 */
class BodyRect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人体框左上角横坐标。
         * @type {number || null}
         */
        this.X = null;

        /**
         * 人体框左上角纵坐标。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 人体宽度。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 人体高度。
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
 * DetectBody请求参数结构体
 * @class
 */
class DetectBodyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人体图片 Base64 数据。
图片 base64 编码后大小不可超过5M。
图片分辨率不得超过 2048*2048。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 人体图片 Url 。
Url、Image必须提供一个，如果都提供，只使用 Url。
图片 base64 编码后大小不可超过5M。 
图片分辨率不得超过 2048*2048。
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 最多检测的人体数目，默认值为1（仅检测图片中面积最大的那个人体）； 最大值10 ，检测图片中面积最大的10个人体。
         * @type {number || null}
         */
        this.MaxBodyNum = null;

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
        this.MaxBodyNum = 'MaxBodyNum' in params ? params.MaxBodyNum : null;

    }
}

/**
 * SearchTrace请求参数结构体
 * @class
 */
class SearchTraceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 希望搜索的人体库ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 人体轨迹信息。
         * @type {Trace || null}
         */
        this.Trace = null;

        /**
         * 单张被识别的人体轨迹返回的最相似人员数量。
默认值为5，最大值为100。
 例，设MaxPersonNum为8，则返回Top8相似的人员信息。 值越大，需要处理的时间越长。建议不要超过10。
         * @type {number || null}
         */
        this.MaxPersonNum = null;

        /**
         * 出参Score中，只有超过TraceMatchThreshold值的结果才会返回。
默认为0。范围[0, 100.0]。
         * @type {number || null}
         */
        this.TraceMatchThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.Trace) {
            let obj = new Trace();
            obj.deserialize(params.Trace)
            this.Trace = obj;
        }
        this.MaxPersonNum = 'MaxPersonNum' in params ? params.MaxPersonNum : null;
        this.TraceMatchThreshold = 'TraceMatchThreshold' in params ? params.TraceMatchThreshold : null;

    }
}

/**
 * 人员信息。
 * @class
 */
class PersonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员名称。
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * 人员ID。
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 包含的人体轨迹图片信息列表。
         * @type {Array.<TraceInfo> || null}
         */
        this.TraceInfos = null;

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

        if (params.TraceInfos) {
            this.TraceInfos = new Array();
            for (let z in params.TraceInfos) {
                let obj = new TraceInfo();
                obj.deserialize(params.TraceInfos[z]);
                this.TraceInfos.push(obj);
            }
        }

    }
}

/**
 * DetectBody返回参数结构体
 * @class
 */
class DetectBodyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图中检测出来的人体框。
         * @type {Array.<BodyDetectResult> || null}
         */
        this.BodyDetectResults = null;

        /**
         * 人体识别所用的算法模型版本。
         * @type {string || null}
         */
        this.BodyModelVersion = null;

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

        if (params.BodyDetectResults) {
            this.BodyDetectResults = new Array();
            for (let z in params.BodyDetectResults) {
                let obj = new BodyDetectResult();
                obj.deserialize(params.BodyDetectResults[z]);
                this.BodyDetectResults.push(obj);
            }
        }
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchTrace返回参数结构体
 * @class
 */
class SearchTraceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的最相似候选人。
         * @type {Array.<Candidate> || null}
         */
        this.Candidates = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果。
只有为0时结果才有意义。
-1001: 输入图片不合法。-1002: 输入图片不能构成轨迹。
         * @type {number || null}
         */
        this.InputRetCode = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果详情。 
-1101:图片无效，-1102:url不合法。-1103:图片过大。-1104:图片下载失败。-1105:图片解码失败。-1109:图片分辨率过高。-2023:轨迹中有非同人图片。-2024: 轨迹提取失败。-2025: 人体检测失败。
         * @type {Array.<number> || null}
         */
        this.InputRetCodeDetails = null;

        /**
         * 人体识别所用的算法模型版本。
         * @type {string || null}
         */
        this.BodyModelVersion = null;

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

        if (params.Candidates) {
            this.Candidates = new Array();
            for (let z in params.Candidates) {
                let obj = new Candidate();
                obj.deserialize(params.Candidates[z]);
                this.Candidates.push(obj);
            }
        }
        this.InputRetCode = 'InputRetCode' in params ? params.InputRetCode : null;
        this.InputRetCodeDetails = 'InputRetCodeDetails' in params ? params.InputRetCodeDetails : null;
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SegmentPortraitPic请求参数结构体
 * @class
 */
class SegmentPortraitPicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
图片分辨率须小于2000*2000。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。
Url、Image必须提供一个，如果都提供，只使用 Url。
图片分辨率须小于2000*2000 ，图片 base64 编码后大小不可超过5M。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。  
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
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
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;

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
 * 图中检测出来的人体框。
 * @class
 */
class BodyDetectResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测出的人体置信度。 
误识率百分之十对应的阈值是0.14；误识率百分之五对应的阈值是0.32；误识率百分之二对应的阈值是0.62；误识率百分之一对应的阈值是0.81。 
通常情况建议使用阈值0.32，可适用大多数情况。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 图中检测出来的人体框
         * @type {BodyRect || null}
         */
        this.BodyRect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.BodyRect) {
            let obj = new BodyRect();
            obj.deserialize(params.BodyRect)
            this.BodyRect = obj;
        }

    }
}

/**
 * CreateTrace返回参数结构体
 * @class
 */
class CreateTraceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员轨迹唯一标识。
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * 人体识别所用的算法模型版本。
         * @type {string || null}
         */
        this.BodyModelVersion = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果。
只有为0时结果才有意义。
-1001: 输入图片不合法。-1002: 输入图片不能构成轨迹。
         * @type {number || null}
         */
        this.InputRetCode = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果详情。 
-1101:图片无效，-1102:url不合法。-1103:图片过大。-1104:图片下载失败。-1105:图片解码失败。-1109:图片分辨率过高。-2023:轨迹中有非同人图片。-2024: 轨迹提取失败。-2025: 人体检测失败。
         * @type {Array.<number> || null}
         */
        this.InputRetCodeDetails = null;

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
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
        this.InputRetCode = 'InputRetCode' in params ? params.InputRetCode : null;
        this.InputRetCodeDetails = 'InputRetCodeDetails' in params ? params.InputRetCodeDetails : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 人员轨迹唯一标识。
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * 人体识别所用的算法模型版本。
         * @type {string || null}
         */
        this.BodyModelVersion = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果。
只有为0时结果才有意义。
-1001: 输入图片不合法。-1002: 输入图片不能构成轨迹。
         * @type {number || null}
         */
        this.InputRetCode = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果详情。 
-1101:图片无效，-1102:url不合法。-1103:图片过大。-1104:图片下载失败。-1105:图片解码失败。-1109:图片分辨率过高。-2023:轨迹中有非同人图片。-2024: 轨迹提取失败。-2025: 人体检测失败。
RetCode 的顺序和入参中Images 或 Urls 的顺序一致。
         * @type {Array.<number> || null}
         */
        this.InputRetCodeDetails = null;

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
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
        this.InputRetCode = 'InputRetCode' in params ? params.InputRetCode : null;
        this.InputRetCodeDetails = 'InputRetCodeDetails' in params ? params.InputRetCodeDetails : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * GetPersonList返回参数结构体
 * @class
 */
class GetPersonListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的人员信息。
         * @type {Array.<PersonInfo> || null}
         */
        this.PersonInfos = null;

        /**
         * 该人体库的人员数量。
         * @type {number || null}
         */
        this.PersonNum = null;

        /**
         * 人体识别所用的算法模型版本。
         * @type {string || null}
         */
        this.BodyModelVersion = null;

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
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
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
         * 人体库ID。
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateTrace请求参数结构体
 * @class
 */
class CreateTraceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员ID。
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人体轨迹信息。
         * @type {Trace || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

        if (params.Trace) {
            let obj = new Trace();
            obj.deserialize(params.Trace)
            this.Trace = obj;
        }

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
 * CreateGroup返回参数结构体
 * @class
 */
class CreateGroupResponse extends  AbstractModel {
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

module.exports = {
    SegmentPortraitPicResponse: SegmentPortraitPicResponse,
    Candidate: Candidate,
    DeletePersonRequest: DeletePersonRequest,
    GetGroupListResponse: GetGroupListResponse,
    GroupInfo: GroupInfo,
    ModifyGroupRequest: ModifyGroupRequest,
    CreatePersonRequest: CreatePersonRequest,
    ModifyPersonInfoResponse: ModifyPersonInfoResponse,
    Trace: Trace,
    DeleteGroupRequest: DeleteGroupRequest,
    ModifyPersonInfoRequest: ModifyPersonInfoRequest,
    CreateGroupRequest: CreateGroupRequest,
    TraceInfo: TraceInfo,
    DeleteGroupResponse: DeleteGroupResponse,
    BodyRect: BodyRect,
    DetectBodyRequest: DetectBodyRequest,
    SearchTraceRequest: SearchTraceRequest,
    PersonInfo: PersonInfo,
    DetectBodyResponse: DetectBodyResponse,
    SearchTraceResponse: SearchTraceResponse,
    SegmentPortraitPicRequest: SegmentPortraitPicRequest,
    GetGroupListRequest: GetGroupListRequest,
    BodyDetectResult: BodyDetectResult,
    CreateTraceResponse: CreateTraceResponse,
    CreatePersonResponse: CreatePersonResponse,
    ModifyGroupResponse: ModifyGroupResponse,
    GetPersonListResponse: GetPersonListResponse,
    GetPersonListRequest: GetPersonListRequest,
    CreateTraceRequest: CreateTraceRequest,
    DeletePersonResponse: DeletePersonResponse,
    CreateGroupResponse: CreateGroupResponse,

}
