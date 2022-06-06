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
 * 一级标签信息

请注意，一级标签信息可能不包含二级标签(此时L2TagSet为空)。在这种情况下，一级标签可直接包含出现信息。
 * @class
 */
class L1Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一级标签名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 二级标签数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<L2Tag> || null}
         */
        this.L2TagSet = null;

        /**
         * 一级标签出现信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AppearIndexPair> || null}
         */
        this.AppearIndexPairSet = null;

        /**
         * 一级标签首次出现信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstAppear = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.L2TagSet) {
            this.L2TagSet = new Array();
            for (let z in params.L2TagSet) {
                let obj = new L2Tag();
                obj.deserialize(params.L2TagSet[z]);
                this.L2TagSet.push(obj);
            }
        }

        if (params.AppearIndexPairSet) {
            this.AppearIndexPairSet = new Array();
            for (let z in params.AppearIndexPairSet) {
                let obj = new AppearIndexPair();
                obj.deserialize(params.AppearIndexPairSet[z]);
                this.AppearIndexPairSet.push(obj);
            }
        }
        this.FirstAppear = 'FirstAppear' in params ? params.FirstAppear : null;

    }
}

/**
 * DeleteMedia返回参数结构体
 * @class
 */
class DeleteMediaResponse extends  AbstractModel {
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
 * UpdateCustomPerson请求参数结构体
 * @class
 */
class UpdateCustomPersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待更新的自定义人物Id
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 更新后的自定义人物名称，如为空则不更新
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 更新后的自定义人物简介，如为空则不更新
         * @type {string || null}
         */
        this.BasicInfo = null;

        /**
         * 更新后的分类信息，如为空则不更新
         * @type {string || null}
         */
        this.CategoryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BasicInfo = 'BasicInfo' in params ? params.BasicInfo : null;
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;

    }
}

/**
 * 视频结构化结果
 * @class
 */
class ShowInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节目日期(只在新闻有效)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 台标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Logo = null;

        /**
         * 节目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Column = null;

        /**
         * 来源信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 节目封面
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CoverImageURL = null;

        /**
         * 节目内容概要列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SummarySet = null;

        /**
         * 节目片段标题列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TitleSet = null;

        /**
         * 音频识别结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioInfo> || null}
         */
        this.AudioInfoSet = null;

        /**
         * 可视文字识别结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TextInfo> || null}
         */
        this.TextInfoSet = null;

        /**
         * 已分类人物信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClassifiedPersonInfo> || null}
         */
        this.ClassifiedPersonInfoSet = null;

        /**
         * 文本标签列表，包含标签内容和出现信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MultiLevelTag || null}
         */
        this.TextTagSet = null;

        /**
         * 帧标签列表，包括人物信息，场景信息等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MultiLevelTag || null}
         */
        this.FrameTagSet = null;

        /**
         * 视频下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebMediaURL = null;

        /**
         * 媒资分类信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.MediaClassifierSet = null;

        /**
         * 概要标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SummaryTagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.Logo = 'Logo' in params ? params.Logo : null;
        this.Column = 'Column' in params ? params.Column : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.CoverImageURL = 'CoverImageURL' in params ? params.CoverImageURL : null;
        this.SummarySet = 'SummarySet' in params ? params.SummarySet : null;
        this.TitleSet = 'TitleSet' in params ? params.TitleSet : null;

        if (params.AudioInfoSet) {
            this.AudioInfoSet = new Array();
            for (let z in params.AudioInfoSet) {
                let obj = new AudioInfo();
                obj.deserialize(params.AudioInfoSet[z]);
                this.AudioInfoSet.push(obj);
            }
        }

        if (params.TextInfoSet) {
            this.TextInfoSet = new Array();
            for (let z in params.TextInfoSet) {
                let obj = new TextInfo();
                obj.deserialize(params.TextInfoSet[z]);
                this.TextInfoSet.push(obj);
            }
        }

        if (params.ClassifiedPersonInfoSet) {
            this.ClassifiedPersonInfoSet = new Array();
            for (let z in params.ClassifiedPersonInfoSet) {
                let obj = new ClassifiedPersonInfo();
                obj.deserialize(params.ClassifiedPersonInfoSet[z]);
                this.ClassifiedPersonInfoSet.push(obj);
            }
        }

        if (params.TextTagSet) {
            let obj = new MultiLevelTag();
            obj.deserialize(params.TextTagSet)
            this.TextTagSet = obj;
        }

        if (params.FrameTagSet) {
            let obj = new MultiLevelTag();
            obj.deserialize(params.FrameTagSet)
            this.FrameTagSet = obj;
        }
        this.WebMediaURL = 'WebMediaURL' in params ? params.WebMediaURL : null;
        this.MediaClassifierSet = 'MediaClassifierSet' in params ? params.MediaClassifierSet : null;
        this.SummaryTagSet = 'SummaryTagSet' in params ? params.SummaryTagSet : null;

    }
}

/**
 * 标签信息结构体

包含多级(最多三级)标签结果，以及这些标签在识别结果中的出现位置
 * @class
 */
class MultiLevelTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 树状标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<L1Tag> || null}
         */
        this.TagSet = null;

        /**
         * 标签在识别结果中的定位信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AppearInfo || null}
         */
        this.AppearInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new L1Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

        if (params.AppearInfo) {
            let obj = new AppearInfo();
            obj.deserialize(params.AppearInfo)
            this.AppearInfo = obj;
        }

    }
}

/**
 * 媒资过滤条件


 * @class
 */
class MediaFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒资名称过滤条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.MediaNameSet = null;

        /**
         * 媒资状态数组，媒资状态可选值参见MediaInfo
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.StatusSet = null;

        /**
         * 媒资ID数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.MediaIdSet = null;

        /**
         * 媒资自定义标签数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaNameSet = 'MediaNameSet' in params ? params.MediaNameSet : null;
        this.StatusSet = 'StatusSet' in params ? params.StatusSet : null;
        this.MediaIdSet = 'MediaIdSet' in params ? params.MediaIdSet : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * AddCustomPersonImage请求参数结构体
 * @class
 */
class AddCustomPersonImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物Id
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 自定义人物图片地址
         * @type {string || null}
         */
        this.ImageURL = null;

        /**
         * 图片数据base64之后的结果
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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.ImageURL = 'ImageURL' in params ? params.ImageURL : null;
        this.Image = 'Image' in params ? params.Image : null;

    }
}

/**
 * ModifyCallback请求参数结构体
 * @class
 */
class ModifyCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务分析完成后回调地址
         * @type {string || null}
         */
        this.TaskFinishNotifyURL = null;

        /**
         * 媒体导入完成后回调地址
         * @type {string || null}
         */
        this.MediaFinishNotifyURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskFinishNotifyURL = 'TaskFinishNotifyURL' in params ? params.TaskFinishNotifyURL : null;
        this.MediaFinishNotifyURL = 'MediaFinishNotifyURL' in params ? params.MediaFinishNotifyURL : null;

    }
}

/**
 * DeleteCustomPerson返回参数结构体
 * @class
 */
class DeleteCustomPersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已删除的自定义人物Id
         * @type {string || null}
         */
        this.PersonId = null;

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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 二级标签信息

请注意，二级标签信息可能不包含三级标签(此时L3TagSet为空)。

 * @class
 */
class L2Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 二级标签名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 从属于此二级标签的三级标签数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<L3Tag> || null}
         */
        this.L3TagSet = null;

        /**
         * 二级标签出现信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AppearIndexPair> || null}
         */
        this.AppearIndexPairSet = null;

        /**
         * 二级标签首次出现信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstAppear = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.L3TagSet) {
            this.L3TagSet = new Array();
            for (let z in params.L3TagSet) {
                let obj = new L3Tag();
                obj.deserialize(params.L3TagSet[z]);
                this.L3TagSet.push(obj);
            }
        }

        if (params.AppearIndexPairSet) {
            this.AppearIndexPairSet = new Array();
            for (let z in params.AppearIndexPairSet) {
                let obj = new AppearIndexPair();
                obj.deserialize(params.AppearIndexPairSet[z]);
                this.AppearIndexPairSet.push(obj);
            }
        }
        this.FirstAppear = 'FirstAppear' in params ? params.FirstAppear : null;

    }
}

/**
 * DeleteTask请求参数结构体
 * @class
 */
class DeleteTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeCustomCategories请求参数结构体
 * @class
 */
class DescribeCustomCategoriesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * ImportMedia请求参数结构体
 * @class
 */
class ImportMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待分析视频的URL，目前只支持*不带签名的*COS地址，长度最长1KB
         * @type {string || null}
         */
        this.URL = null;

        /**
         * 待分析视频的MD5，为空时不做校验，否则会做MD5校验，长度必须为32B
         * @type {string || null}
         */
        this.MD5 = null;

        /**
         * 待分析视频的名称，指定后可支持筛选，最多100个中文字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 当非本人外部视频地址导入时，该字段为转存的cos桶地址且不可为空; 示例：https://${Bucket}-${AppId}.cos.${Region}.myqcloud.com/${PathPrefix}/  (注意，cos路径需要以/分隔符结尾)。
推荐采用本主帐号COS桶，如果使用其他帐号COS桶，请确保COS桶可写，否则可导致分析失败
         * @type {string || null}
         */
        this.WriteBackCosPath = null;

        /**
         * 自定义标签，可用于查询
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 媒资导入完成的回调地址，该设置优先级高于控制台全局的设置；
         * @type {string || null}
         */
        this.CallbackURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.URL = 'URL' in params ? params.URL : null;
        this.MD5 = 'MD5' in params ? params.MD5 : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.WriteBackCosPath = 'WriteBackCosPath' in params ? params.WriteBackCosPath : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.CallbackURL = 'CallbackURL' in params ? params.CallbackURL : null;

    }
}

/**
 * CreateCustomCategory请求参数结构体
 * @class
 */
class CreateCustomCategoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义一级类型
         * @type {string || null}
         */
        this.L1Category = null;

        /**
         * 自定义二级类型
         * @type {string || null}
         */
        this.L2Category = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.L1Category = 'L1Category' in params ? params.L1Category : null;
        this.L2Category = 'L2Category' in params ? params.L2Category : null;

    }
}

/**
 * DescribeMedia请求参数结构体
 * @class
 */
class DescribeMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导入媒资返回的媒资ID，最长32B
         * @type {string || null}
         */
        this.MediaId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaId = 'MediaId' in params ? params.MediaId : null;

    }
}

/**
 * DescribeMedias请求参数结构体
 * @class
 */
class DescribeMediasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页序号，从1开始
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每个分页所包含的元素数量，最大为50
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 列举过滤条件，相关限制相见MediaFilter
         * @type {MediaFilter || null}
         */
        this.MediaFilter = null;

        /**
         * 返回结果排序信息，By字段只支持CreateTime
         * @type {SortBy || null}
         */
        this.SortBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.MediaFilter) {
            let obj = new MediaFilter();
            obj.deserialize(params.MediaFilter)
            this.MediaFilter = obj;
        }

        if (params.SortBy) {
            let obj = new SortBy();
            obj.deserialize(params.SortBy)
            this.SortBy = obj;
        }

    }
}

/**
 * 关键词在视觉结果中的定位信息
 * @class
 */
class VideoAppearInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视觉信息起始时间戳，从0开始
         * @type {number || null}
         */
        this.StartTimeStamp = null;

        /**
         * 视觉信息终止时间戳，从0开始
关键词在视觉信息中的区间为[StartTimeStamp, EndTimeStamp)
         * @type {number || null}
         */
        this.EndTimeStamp = null;

        /**
         * 关键词在视觉信息中的封面图片
         * @type {string || null}
         */
        this.ImageURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;
        this.ImageURL = 'ImageURL' in params ? params.ImageURL : null;

    }
}

/**
 * DescribeTask返回参数结构体
 * @class
 */
class DescribeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务信息，详情参见TaskInfo的定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskInfo || null}
         */
        this.TaskInfo = null;

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

        if (params.TaskInfo) {
            let obj = new TaskInfo();
            obj.deserialize(params.TaskInfo)
            this.TaskInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDefaultCategories返回参数结构体
 * @class
 */
class CreateDefaultCategoriesResponse extends  AbstractModel {
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
 * 出现信息索引对

AppearIndex可选值定义如下：

| AppearIndex名称 | AppearIndex取值 | AppearIndex描述 |
|---|---|---|
| APPEAR_INDEX_INVALID | 0 | 非法的任务状态 |
| APPEAR_INDEX_AUDIO | 1 | 音频出现信息|
| APPEAR_INDEX_TEXT | 2 | 可视文本出现信息|
| APPEAR_INDEX_VIDEO | 3 | 视频出现信息|

例如，当AppearIndex=1，Index=15，则意味着目标关键词出现在第16个(Index计数从0开始)音频文字识别结果之中
 * @class
 */
class AppearIndexPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出现信息，取值范围为[1，3]
         * @type {number || null}
         */
        this.AppearIndex = null;

        /**
         * AppearInfo中AppearIndex对应元素的第Index元素，从0开始技术
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppearIndex = 'AppearIndex' in params ? params.AppearIndex : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * CreateTask返回参数结构体
 * @class
 */
class CreateTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能标签视频分析任务ID
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCustomCategory请求参数结构体
 * @class
 */
class DeleteCustomCategoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义分类ID
         * @type {string || null}
         */
        this.CategoryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;

    }
}

/**
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页序号，从1开始
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每个分页所包含的元素数量，最大为50
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 任务过滤条件，相关限制参见TaskFilter
         * @type {TaskFilter || null}
         */
        this.TaskFilter = null;

        /**
         * 返回结果排序信息，By字段只支持CreateTimeStamp
         * @type {SortBy || null}
         */
        this.SortBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.TaskFilter) {
            let obj = new TaskFilter();
            obj.deserialize(params.TaskFilter)
            this.TaskFilter = obj;
        }

        if (params.SortBy) {
            let obj = new SortBy();
            obj.deserialize(params.SortBy)
            this.SortBy = obj;
        }

    }
}

/**
 * DescribeTaskDetail返回参数结构体
 * @class
 */
class DescribeTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务信息，不包含任务结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskInfo || null}
         */
        this.TaskInfo = null;

        /**
         * 任务结果数据，只在任务结束时返回
         * @type {Data || null}
         */
        this.TaskData = null;

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

        if (params.TaskInfo) {
            let obj = new TaskInfo();
            obj.deserialize(params.TaskInfo)
            this.TaskInfo = obj;
        }

        if (params.TaskData) {
            let obj = new Data();
            obj.deserialize(params.TaskData)
            this.TaskData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 自定义人物人脸图片信息
 * @class
 */
class PersonImageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸图片ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 自定义人脸图片的URL，存储在IVLDCustomPreson存储桶内
         * @type {string || null}
         */
        this.ImageURL = null;

        /**
         * 自定义人脸图片处理错误码
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 自定义人脸图片处理错误信息
         * @type {string || null}
         */
        this.ErrorMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageURL = 'ImageURL' in params ? params.ImageURL : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

    }
}

/**
 * 已分类的人物信息
 * @class
 */
class ClassifiedPersonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人物分类名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClassifyName = null;

        /**
         * 符合特定分类的人物信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PersonInfo> || null}
         */
        this.PersonInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClassifyName = 'ClassifyName' in params ? params.ClassifyName : null;

        if (params.PersonInfoSet) {
            this.PersonInfoSet = new Array();
            for (let z in params.PersonInfoSet) {
                let obj = new PersonInfo();
                obj.deserialize(params.PersonInfoSet[z]);
                this.PersonInfoSet.push(obj);
            }
        }

    }
}

/**
 * CreateCustomGroup请求参数结构体
 * @class
 */
class CreateCustomGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸图片COS存储桶Host地址
         * @type {string || null}
         */
        this.Bucket = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;

    }
}

/**
 * DescribeCustomPersons返回参数结构体
 * @class
 */
class DescribeCustomPersonsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 满足过滤条件的自定义人物数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 自定义人物信息
         * @type {Array.<CustomPersonInfo> || null}
         */
        this.PersonInfoSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.PersonInfoSet) {
            this.PersonInfoSet = new Array();
            for (let z in params.PersonInfoSet) {
                let obj = new CustomPersonInfo();
                obj.deserialize(params.PersonInfoSet[z]);
                this.PersonInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddCustomPersonImage返回参数结构体
 * @class
 */
class AddCustomPersonImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物Id
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 自定义人脸图片信息
         * @type {PersonImageInfo || null}
         */
        this.ImageInfo = null;

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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

        if (params.ImageInfo) {
            let obj = new PersonImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDefaultCategories请求参数结构体
 * @class
 */
class CreateDefaultCategoriesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * 任务筛选条件结构体
 * @class
 */
class TaskFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒资文件类型
         * @type {Array.<number> || null}
         */
        this.MediaTypeSet = null;

        /**
         * 待筛选的任务状态列表
         * @type {Array.<number> || null}
         */
        this.TaskStatusSet = null;

        /**
         * 待筛选的任务名称数组
         * @type {Array.<string> || null}
         */
        this.TaskNameSet = null;

        /**
         * TaskId数组
         * @type {Array.<string> || null}
         */
        this.TaskIdSet = null;

        /**
         * 媒资文件名数组
         * @type {Array.<string> || null}
         */
        this.MediaNameSet = null;

        /**
         * 媒资语言类型
         * @type {Array.<number> || null}
         */
        this.MediaLangSet = null;

        /**
         * 媒资素材一级类型
         * @type {Array.<number> || null}
         */
        this.MediaLabelSet = null;

        /**
         * 媒资自定义标签数组
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaTypeSet = 'MediaTypeSet' in params ? params.MediaTypeSet : null;
        this.TaskStatusSet = 'TaskStatusSet' in params ? params.TaskStatusSet : null;
        this.TaskNameSet = 'TaskNameSet' in params ? params.TaskNameSet : null;
        this.TaskIdSet = 'TaskIdSet' in params ? params.TaskIdSet : null;
        this.MediaNameSet = 'MediaNameSet' in params ? params.MediaNameSet : null;
        this.MediaLangSet = 'MediaLangSet' in params ? params.MediaLangSet : null;
        this.MediaLabelSet = 'MediaLabelSet' in params ? params.MediaLabelSet : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * 关键词在文本中的定位信息

Position为关键词在文本中的偏移量，从0开始。例如，给定文本结果"欢迎收看新闻三十分”，以及关键词"新闻三十分"，那么StartPosition的值为4，EndPosition的值为9
 * @class
 */
class TextAppearInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本结果数组中的下标
         * @type {number || null}
         */
        this.Index = null;

        /**
         * 关键词在文本中出现的起始偏移量(包含)
         * @type {number || null}
         */
        this.StartPosition = null;

        /**
         * 关键词在文本中出现的结束偏移量(不包含)
         * @type {number || null}
         */
        this.EndPosition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.StartPosition = 'StartPosition' in params ? params.StartPosition : null;
        this.EndPosition = 'EndPosition' in params ? params.EndPosition : null;

    }
}

/**
 * DescribeMedia返回参数结构体
 * @class
 */
class DescribeMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒资信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaInfo || null}
         */
        this.MediaInfo = null;

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

        if (params.MediaInfo) {
            let obj = new MediaInfo();
            obj.deserialize(params.MediaInfo)
            this.MediaInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 自定义分类信息
 * @class
 */
class CustomCategory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义分类ID
         * @type {string || null}
         */
        this.CategoryId = null;

        /**
         * 一级自定义类型
         * @type {string || null}
         */
        this.L1Category = null;

        /**
         * 二级自定义类型
         * @type {string || null}
         */
        this.L2Category = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.L1Category = 'L1Category' in params ? params.L1Category : null;
        this.L2Category = 'L2Category' in params ? params.L2Category : null;

    }
}

/**
 * 任务结果数据
 * @class
 */
class Data extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节目粒度结构化结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ShowInfo || null}
         */
        this.ShowInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ShowInfo) {
            let obj = new ShowInfo();
            obj.deserialize(params.ShowInfo)
            this.ShowInfo = obj;
        }

    }
}

/**
 * DeleteTask返回参数结构体
 * @class
 */
class DeleteTaskResponse extends  AbstractModel {
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
 * DescribeTask请求参数结构体
 * @class
 */
class DescribeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CreateTask返回的任务ID，最长32B
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeCustomPersonDetail请求参数结构体
 * @class
 */
class DescribeCustomPersonDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物Id
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
 * 自定义人物信息
 * @class
 */
class CustomPersonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物Id
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 自定义人物姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 自定义人物简介信息
         * @type {string || null}
         */
        this.BasicInfo = null;

        /**
         * 一级自定义人物类型
         * @type {string || null}
         */
        this.L1Category = null;

        /**
         * 二级自定义人物类型
         * @type {string || null}
         */
        this.L2Category = null;

        /**
         * 自定义人物图片信息
         * @type {Array.<PersonImageInfo> || null}
         */
        this.ImageInfoSet = null;

        /**
         * 自定义人物创建时间
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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BasicInfo = 'BasicInfo' in params ? params.BasicInfo : null;
        this.L1Category = 'L1Category' in params ? params.L1Category : null;
        this.L2Category = 'L2Category' in params ? params.L2Category : null;

        if (params.ImageInfoSet) {
            this.ImageInfoSet = new Array();
            for (let z in params.ImageInfoSet) {
                let obj = new PersonImageInfo();
                obj.deserialize(params.ImageInfoSet[z]);
                this.ImageInfoSet.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * UpdateCustomPerson返回参数结构体
 * @class
 */
class UpdateCustomPersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功更新的自定义人物Id
         * @type {string || null}
         */
        this.PersonId = null;

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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomGroup返回参数结构体
 * @class
 */
class DescribeCustomGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物库所包含的人物个数
         * @type {number || null}
         */
        this.GroupSize = null;

        /**
         * 自定义人物库图片后续所在的存储桶
         * @type {string || null}
         */
        this.Bucket = null;

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
        this.GroupSize = 'GroupSize' in params ? params.GroupSize : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCallback返回参数结构体
 * @class
 */
class ModifyCallbackResponse extends  AbstractModel {
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
 * DescribeCustomPersons请求参数结构体
 * @class
 */
class DescribeCustomPersonsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页序号，从1开始
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页数据行数，最多50
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 排序信息，默认倒序
         * @type {SortBy || null}
         */
        this.SortBy = null;

        /**
         * 自定义人物过滤条件
         * @type {CustomPersonFilter || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.SortBy) {
            let obj = new SortBy();
            obj.deserialize(params.SortBy)
            this.SortBy = obj;
        }

        if (params.Filter) {
            let obj = new CustomPersonFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }

    }
}

/**
 * DescribeTasks返回参数结构体
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 满足过滤条件的任务总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 满足过滤条件的任务数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskInfo> || null}
         */
        this.TaskInfoSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TaskInfoSet) {
            this.TaskInfoSet = new Array();
            for (let z in params.TaskInfoSet) {
                let obj = new TaskInfo();
                obj.deserialize(params.TaskInfoSet[z]);
                this.TaskInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人物信息
 * @class
 */
class PersonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公众人物姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 公众人物职务
         * @type {string || null}
         */
        this.Job = null;

        /**
         * 首次出现模态，可选值为[1,3]，详细参见AppearIndex定义
         * @type {number || null}
         */
        this.FirstAppear = null;

        /**
         * 人物出现信息
         * @type {AppearInfo || null}
         */
        this.AppearInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Job = 'Job' in params ? params.Job : null;
        this.FirstAppear = 'FirstAppear' in params ? params.FirstAppear : null;

        if (params.AppearInfo) {
            let obj = new AppearInfo();
            obj.deserialize(params.AppearInfo)
            this.AppearInfo = obj;
        }

    }
}

/**
 * 可视文本识别结果信息(OCR)
 * @class
 */
class TextInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * OCR提取的内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * OCR起始时间戳，从0开始
         * @type {number || null}
         */
        this.StartTimeStamp = null;

        /**
         * OCR结束时间戳，从0开始
         * @type {number || null}
         */
        this.EndTimeStamp = null;

        /**
         * OCR标签信息
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
        this.Content = 'Content' in params ? params.Content : null;
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * 音频识别结果信息
 * @class
 */
class AudioInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ASR提取的文字信息
         * @type {string || null}
         */
        this.Content = null;

        /**
         * ASR起始时间戳，从0开始
         * @type {number || null}
         */
        this.StartTimeStamp = null;

        /**
         * ASR结束时间戳，从0开始
         * @type {number || null}
         */
        this.EndTimeStamp = null;

        /**
         * ASR提取的音频标签
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
        this.Content = 'Content' in params ? params.Content : null;
        this.StartTimeStamp = 'StartTimeStamp' in params ? params.StartTimeStamp : null;
        this.EndTimeStamp = 'EndTimeStamp' in params ? params.EndTimeStamp : null;
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * 自定义人物批量查询过滤条件
 * @class
 */
class CustomPersonFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的人物姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 待过滤的自定义类型Id数组
         * @type {Array.<string> || null}
         */
        this.CategoryIdSet = null;

        /**
         * 待过滤的自定义人物Id数组
         * @type {Array.<string> || null}
         */
        this.PersonIdSet = null;

        /**
         * 一级自定义人物类型数组
         * @type {Array.<string> || null}
         */
        this.L1CategorySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CategoryIdSet = 'CategoryIdSet' in params ? params.CategoryIdSet : null;
        this.PersonIdSet = 'PersonIdSet' in params ? params.PersonIdSet : null;
        this.L1CategorySet = 'L1CategorySet' in params ? params.L1CategorySet : null;

    }
}

/**
 * CreateTask请求参数结构体
 * @class
 */
class CreateTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒资文件ID，最长32B
         * @type {string || null}
         */
        this.MediaId = null;

        /**
         * 媒资素材先验知识，相关限制参考MediaPreknownInfo
         * @type {MediaPreknownInfo || null}
         */
        this.MediaPreknownInfo = null;

        /**
         * 任务名称，最长100个中文字符
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 是否上传转码后的视频，仅设置true时上传，默认为false
         * @type {boolean || null}
         */
        this.UploadVideo = null;

        /**
         * 自定义标签，可用于查询
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 任务分析完成的回调地址，该设置优先级高于控制台全局的设置；
         * @type {string || null}
         */
        this.CallbackURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaId = 'MediaId' in params ? params.MediaId : null;

        if (params.MediaPreknownInfo) {
            let obj = new MediaPreknownInfo();
            obj.deserialize(params.MediaPreknownInfo)
            this.MediaPreknownInfo = obj;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.UploadVideo = 'UploadVideo' in params ? params.UploadVideo : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.CallbackURL = 'CallbackURL' in params ? params.CallbackURL : null;

    }
}

/**
 * 三级标签信息。

三级标签不再包含任何子标签。所有三级标签都对应着识别结果中的出现信息，出现信息使用AppearIndexPairSet定位。
 * @class
 */
class L3Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 三级标签名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 三级标签出现信息索引数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AppearIndexPair> || null}
         */
        this.AppearIndexPairSet = null;

        /**
         * 三级标签首次出现信息，可选值为[1,3]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstAppear = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.AppearIndexPairSet) {
            this.AppearIndexPairSet = new Array();
            for (let z in params.AppearIndexPairSet) {
                let obj = new AppearIndexPair();
                obj.deserialize(params.AppearIndexPairSet[z]);
                this.AppearIndexPairSet.push(obj);
            }
        }
        this.FirstAppear = 'FirstAppear' in params ? params.FirstAppear : null;

    }
}

/**
 * QueryCallback返回参数结构体
 * @class
 */
class QueryCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务分析完成后回调地址
         * @type {string || null}
         */
        this.TaskFinishNotifyURL = null;

        /**
         * 媒体导入完成后回调地址
         * @type {string || null}
         */
        this.MediaFinishNotifyURL = null;

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
        this.TaskFinishNotifyURL = 'TaskFinishNotifyURL' in params ? params.TaskFinishNotifyURL : null;
        this.MediaFinishNotifyURL = 'MediaFinishNotifyURL' in params ? params.MediaFinishNotifyURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomPersonDetail返回参数结构体
 * @class
 */
class DescribeCustomPersonDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物信息
         * @type {CustomPersonInfo || null}
         */
        this.PersonInfo = null;

        /**
         * 出现该自定义人物的所有分析人物Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TaskIdSet = null;

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

        if (params.PersonInfo) {
            let obj = new CustomPersonInfo();
            obj.deserialize(params.PersonInfo)
            this.PersonInfo = obj;
        }
        this.TaskIdSet = 'TaskIdSet' in params ? params.TaskIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCustomPersonImage返回参数结构体
 * @class
 */
class DeleteCustomPersonImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物Id
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 已删除的人物图片Id
         * @type {string || null}
         */
        this.ImageId = null;

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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述输入媒资的先验知识，例如文件类型(视频)，媒体类型(新闻/综艺等)

MediaPreknownInfo.MediaType:

| MediaType 名称|  MediaType取值 | MediaType描述 |
|---|---|---|
| MEDIA_TYPE_INVALID | 0 | 非法的媒资文件类型 | 
| MEDIA_TYPE_IMAGE | 1 | 图片，当前不支持 |
| MEDIA_TYPE_VIDEO | 2 | 视频，当前只支持此类型媒资文件 |

MediaPreknownInfo.MediaLabel:

| MediaLabel名称 | MediaLabel取值 | MediaLabel描述 |
|---|---|---|
| MEDIA_LABEL_INVALID | 0 | 非法的一级媒资素材类型 |
| MEDIA_LABEL_NEWS | 1 | 新闻 |
| MEDIA_LABEL_ENTERTAINMENT | 2 | 综艺|
| MEDIA_LABEL_INTERNET_INFO | 3 | 互联网资讯 | 
| MEDIA_LABEL_MOVIE | 4 | 电影 |
| MEDIA_LABEL_SERIES | 5 | 电视连续剧 |
| MEDIA_LABEL_SPECIAL | 6 | 专题 |
| MEDIA_LABEL_SPORT | 7 | 体育 |

MediaPreknownInfo.MediaSecondLabel
请注意：**当且仅当MediaLabel=2(综艺)时MediaSecondLabel才有意义**

| MediaSecondLabel名称 | MediaSecondLabel取值 | MediaSecondLabel 描述|
|---|---|---|
| MEDIA_SECOND_LABEL_INVALID |  0  | 非法的MediaSecondLabel |
| MEDIA_SECOND_LABEL_EVENING | 1 | 综艺晚会 |
| MEDIA_SECOND_LABEL_OTHERS | 2 | 其他 |

MediaMeta.MediaLang

| MediaLang名称 | MediaLang取值 | MediaLang描述 |
|---|---|---|
| MEDIA_LANG_INVALID | 0 | 非法的MediaLang |
| MEDIA_LANG_MANDARIN | 1 | 普通话 |
| MEDIA_LANG_CANTONESE | 2 | 粤语 | 
 * @class
 */
class MediaPreknownInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒资文件类型，参见MediaPreknownInfo结构体定义
         * @type {number || null}
         */
        this.MediaType = null;

        /**
         * 媒资素材一级类型，参见MediaPreknownInfo结构体定义
         * @type {number || null}
         */
        this.MediaLabel = null;

        /**
         * 媒资素材二级类型，参见MediaPreknownInfo结构体定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MediaSecondLabel = null;

        /**
         * 媒资音频类型，参见MediaPreknownInfo结构体定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MediaLang = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaType = 'MediaType' in params ? params.MediaType : null;
        this.MediaLabel = 'MediaLabel' in params ? params.MediaLabel : null;
        this.MediaSecondLabel = 'MediaSecondLabel' in params ? params.MediaSecondLabel : null;
        this.MediaLang = 'MediaLang' in params ? params.MediaLang : null;

    }
}

/**
 * DescribeCustomCategories返回参数结构体
 * @class
 */
class DescribeCustomCategoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物类型数组
         * @type {Array.<CustomCategory> || null}
         */
        this.CategorySet = null;

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

        if (params.CategorySet) {
            this.CategorySet = new Array();
            for (let z in params.CategorySet) {
                let obj = new CustomCategory();
                obj.deserialize(params.CategorySet[z]);
                this.CategorySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCustomCategory返回参数结构体
 * @class
 */
class CreateCustomCategoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义分类信息ID
         * @type {string || null}
         */
        this.CategoryId = null;

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
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCustomPerson返回参数结构体
 * @class
 */
class CreateCustomPersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物Id
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 自定义人脸信息
         * @type {PersonImageInfo || null}
         */
        this.ImageInfo = null;

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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

        if (params.ImageInfo) {
            let obj = new PersonImageInfo();
            obj.deserialize(params.ImageInfo)
            this.ImageInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 出现信息结构

包含关键词在音频转文字(ASR)，图片转文字(OCR)以及视频结果中的出现信息

 * @class
 */
class AppearInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键词在音频文本结果中的出现位置数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TextAppearInfo> || null}
         */
        this.AudioAppearSet = null;

        /**
         * 关键词在可视文本结果中的出现位置数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TextAppearInfo> || null}
         */
        this.TextAppearSet = null;

        /**
         * 关键词在视频信息中的出现位置数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VideoAppearInfo> || null}
         */
        this.VideoAppearSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AudioAppearSet) {
            this.AudioAppearSet = new Array();
            for (let z in params.AudioAppearSet) {
                let obj = new TextAppearInfo();
                obj.deserialize(params.AudioAppearSet[z]);
                this.AudioAppearSet.push(obj);
            }
        }

        if (params.TextAppearSet) {
            this.TextAppearSet = new Array();
            for (let z in params.TextAppearSet) {
                let obj = new TextAppearInfo();
                obj.deserialize(params.TextAppearSet[z]);
                this.TextAppearSet.push(obj);
            }
        }

        if (params.VideoAppearSet) {
            this.VideoAppearSet = new Array();
            for (let z in params.VideoAppearSet) {
                let obj = new VideoAppearInfo();
                obj.deserialize(params.VideoAppearSet[z]);
                this.VideoAppearSet.push(obj);
            }
        }

    }
}

/**
 * UpdateCustomCategory请求参数结构体
 * @class
 */
class UpdateCustomCategoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物类型Id
         * @type {string || null}
         */
        this.CategoryId = null;

        /**
         * 一级自定义人物类型
         * @type {string || null}
         */
        this.L1Category = null;

        /**
         * 二级自定义人物类型
         * @type {string || null}
         */
        this.L2Category = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.L1Category = 'L1Category' in params ? params.L1Category : null;
        this.L2Category = 'L2Category' in params ? params.L2Category : null;

    }
}

/**
 * DescribeCustomGroup请求参数结构体
 * @class
 */
class DescribeCustomGroupRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * UpdateCustomCategory返回参数结构体
 * @class
 */
class UpdateCustomCategoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功更新的自定义人物类型Id
         * @type {string || null}
         */
        this.CategoryId = null;

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
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMedia请求参数结构体
 * @class
 */
class DeleteMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒资文件在系统中的ID
         * @type {string || null}
         */
        this.MediaId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaId = 'MediaId' in params ? params.MediaId : null;

    }
}

/**
 * CreateCustomGroup返回参数结构体
 * @class
 */
class CreateCustomGroupResponse extends  AbstractModel {
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
 * ImportMedia返回参数结构体
 * @class
 */
class ImportMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒资文件在系统中的ID
         * @type {string || null}
         */
        this.MediaId = null;

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
        this.MediaId = 'MediaId' in params ? params.MediaId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskDetail请求参数结构体
 * @class
 */
class DescribeTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建任务返回的TaskId
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeMedias返回参数结构体
 * @class
 */
class DescribeMediasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 满足过滤条件的媒资视频总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 满足过滤条件的媒资信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaInfo> || null}
         */
        this.MediaInfoSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.MediaInfoSet) {
            this.MediaInfoSet = new Array();
            for (let z in params.MediaInfoSet) {
                let obj = new MediaInfo();
                obj.deserialize(params.MediaInfoSet[z]);
                this.MediaInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 媒资信息结构体

媒资状态定义如下：

| 状态名 | 状态值 | 状态描述 | 
|---|---|---|
| MEDIA_STATUS_INVALID | 0 | 非法状态|
| MEDIA_STATUS_WAITING| 1 | 等待中 |
| MEDIA_STATUS_DOWNLOADING | 2 | 下载中 |
| MEDIA_STATUS_DOWNLOADED | 3 | 下载完成 |
| MEDIA_STATUS_DOWNLOAD_FAILED | 4 | 下载失败 |
| MEDIA_STATUS_TRANSCODING | 5 | 转码中 |
| MEDIA_STATUS_TRANSCODED | 6 | 转码完成 | 
| MEDIA_STATUS_TRANCODE_FAILED | 7 | 转码失败 |
| MEDIA_STATUS_SUCCESS | 8 | 媒资文件状态就绪，可发起任务 |
| MEDIA_STATUS_EXPIRED | 9 | 媒资文件已过期 |

 * @class
 */
class MediaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒资ID
         * @type {string || null}
         */
        this.MediaId = null;

        /**
         * 媒资名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 媒资下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownLoadURL = null;

        /**
         * 媒资状态，取值参看上方表格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 若状态为失败，表示失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailedReason = null;

        /**
         * 媒资视频元信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaMetadata || null}
         */
        this.Metadata = null;

        /**
         * 导入视频进度，取值范围为[0,100]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 媒资自定义标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 媒资导入完成后的回调地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallbackURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaId = 'MediaId' in params ? params.MediaId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DownLoadURL = 'DownLoadURL' in params ? params.DownLoadURL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;

        if (params.Metadata) {
            let obj = new MediaMetadata();
            obj.deserialize(params.Metadata)
            this.Metadata = obj;
        }
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.CallbackURL = 'CallbackURL' in params ? params.CallbackURL : null;

    }
}

/**
 * QueryCallback请求参数结构体
 * @class
 */
class QueryCallbackRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * 排序条件
 * @class
 */
class SortBy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段，默认为CreateTime
         * @type {string || null}
         */
        this.By = null;

        /**
         * true表示降序，false表示升序
         * @type {boolean || null}
         */
        this.Descend = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.By = 'By' in params ? params.By : null;
        this.Descend = 'Descend' in params ? params.Descend : null;

    }
}

/**
 * 媒资文件视频元信息，包括分辨率，帧率，码率等
 * @class
 */
class MediaMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒资视频文件大小
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 媒资视频文件MD5
         * @type {string || null}
         */
        this.MD5 = null;

        /**
         * 媒资视频时长，单位为秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 媒资视频总帧数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NumFrames = null;

        /**
         * 媒资视频宽度，单位为像素
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 媒资视频高度，单位为像素
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 媒资视频帧率，单位为Hz
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FPS = null;

        /**
         * 媒资视频比特率，单位为kbps
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BitRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.MD5 = 'MD5' in params ? params.MD5 : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.NumFrames = 'NumFrames' in params ? params.NumFrames : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.FPS = 'FPS' in params ? params.FPS : null;
        this.BitRate = 'BitRate' in params ? params.BitRate : null;

    }
}

/**
 * DeleteCustomPerson请求参数结构体
 * @class
 */
class DeleteCustomPersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的自定义人物ID
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
 * DeleteCustomCategory返回参数结构体
 * @class
 */
class DeleteCustomCategoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 123
         * @type {string || null}
         */
        this.CategoryId = null;

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
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCustomPersonImage请求参数结构体
 * @class
 */
class DeleteCustomPersonImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物Id
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 自定义人脸图片Id
         * @type {string || null}
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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

    }
}

/**
 * CreateCustomPerson请求参数结构体
 * @class
 */
class CreateCustomPersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义人物姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 自定义人物简要信息(仅用于标记，不支持检索)
         * @type {string || null}
         */
        this.BasicInfo = null;

        /**
         * 自定义分类ID，如不存在接口会报错
         * @type {string || null}
         */
        this.CategoryId = null;

        /**
         * 自定义人物图片URL，可支持任意地址，推荐使用COS
         * @type {string || null}
         */
        this.ImageURL = null;

        /**
         * 原始图片base64编码后的数据
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
        this.Name = 'Name' in params ? params.Name : null;
        this.BasicInfo = 'BasicInfo' in params ? params.BasicInfo : null;
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.ImageURL = 'ImageURL' in params ? params.ImageURL : null;
        this.Image = 'Image' in params ? params.Image : null;

    }
}

/**
 * 任务信息

TaskStatus定义如下:

| TaskStatus名称 | TaskStatus取值 | TaskStatus描述 |
|---|---|---|
| TASK_STATUS_INVALID | 0 | 非法的任务状态 |
| TASK_STATUS_WAITING | 1 | 排队中 |
| TASK_STATUS_ANALYSING | 2 | 任务分析中 |
| TASK_STATUS_ANALYSED | 3 | 任务分析完成 |
| TASK_STATUS_SNAPSHOT_CREATING | 4 | 任务结果快照生成中 |
| TASK_STATUS_SNAPSHOT_CREATED | 5 | 任务结果快照生成完成 |
| TASK_STATUS_RESULT_UPLOADING | 6 | 任务结果快照上传中 |
| TASK_STATUS_RESULT_UPLOADED | 7 | 任务结果快照上传完成 |
| TASK_STATUS_SUCCESS | 8 | 任务执行完成 |
| TASK_STATUS_FAILED | 9 | 任务执行失败 |
 * @class
 */
class TaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 描述任务名称，指定后可根据名称筛选
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 媒资文件ID
         * @type {string || null}
         */
        this.MediaId = null;

        /**
         * 任务执行状态
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 任务进度，范围为[0，100]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskProgress = null;

        /**
         * 任务执行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskTimeCost = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.TaskCreateTime = null;

        /**
         * 任务开始执行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskStartTime = null;

        /**
         * 任务失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailedReason = null;

        /**
         * 任务执行时指定的先验知识
         * @type {MediaPreknownInfo || null}
         */
        this.MediaPreknownInfo = null;

        /**
         * 媒资文件名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MediaName = null;

        /**
         * 媒资自定义标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 任务分析完成后的后调地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CallbackURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.MediaId = 'MediaId' in params ? params.MediaId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskProgress = 'TaskProgress' in params ? params.TaskProgress : null;
        this.TaskTimeCost = 'TaskTimeCost' in params ? params.TaskTimeCost : null;
        this.TaskCreateTime = 'TaskCreateTime' in params ? params.TaskCreateTime : null;
        this.TaskStartTime = 'TaskStartTime' in params ? params.TaskStartTime : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;

        if (params.MediaPreknownInfo) {
            let obj = new MediaPreknownInfo();
            obj.deserialize(params.MediaPreknownInfo)
            this.MediaPreknownInfo = obj;
        }
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.CallbackURL = 'CallbackURL' in params ? params.CallbackURL : null;

    }
}

module.exports = {
    L1Tag: L1Tag,
    DeleteMediaResponse: DeleteMediaResponse,
    UpdateCustomPersonRequest: UpdateCustomPersonRequest,
    ShowInfo: ShowInfo,
    MultiLevelTag: MultiLevelTag,
    MediaFilter: MediaFilter,
    AddCustomPersonImageRequest: AddCustomPersonImageRequest,
    ModifyCallbackRequest: ModifyCallbackRequest,
    DeleteCustomPersonResponse: DeleteCustomPersonResponse,
    L2Tag: L2Tag,
    DeleteTaskRequest: DeleteTaskRequest,
    DescribeCustomCategoriesRequest: DescribeCustomCategoriesRequest,
    ImportMediaRequest: ImportMediaRequest,
    CreateCustomCategoryRequest: CreateCustomCategoryRequest,
    DescribeMediaRequest: DescribeMediaRequest,
    DescribeMediasRequest: DescribeMediasRequest,
    VideoAppearInfo: VideoAppearInfo,
    DescribeTaskResponse: DescribeTaskResponse,
    CreateDefaultCategoriesResponse: CreateDefaultCategoriesResponse,
    AppearIndexPair: AppearIndexPair,
    CreateTaskResponse: CreateTaskResponse,
    DeleteCustomCategoryRequest: DeleteCustomCategoryRequest,
    DescribeTasksRequest: DescribeTasksRequest,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    PersonImageInfo: PersonImageInfo,
    ClassifiedPersonInfo: ClassifiedPersonInfo,
    CreateCustomGroupRequest: CreateCustomGroupRequest,
    DescribeCustomPersonsResponse: DescribeCustomPersonsResponse,
    AddCustomPersonImageResponse: AddCustomPersonImageResponse,
    CreateDefaultCategoriesRequest: CreateDefaultCategoriesRequest,
    TaskFilter: TaskFilter,
    TextAppearInfo: TextAppearInfo,
    DescribeMediaResponse: DescribeMediaResponse,
    CustomCategory: CustomCategory,
    Data: Data,
    DeleteTaskResponse: DeleteTaskResponse,
    DescribeTaskRequest: DescribeTaskRequest,
    DescribeCustomPersonDetailRequest: DescribeCustomPersonDetailRequest,
    CustomPersonInfo: CustomPersonInfo,
    UpdateCustomPersonResponse: UpdateCustomPersonResponse,
    DescribeCustomGroupResponse: DescribeCustomGroupResponse,
    ModifyCallbackResponse: ModifyCallbackResponse,
    DescribeCustomPersonsRequest: DescribeCustomPersonsRequest,
    DescribeTasksResponse: DescribeTasksResponse,
    PersonInfo: PersonInfo,
    TextInfo: TextInfo,
    AudioInfo: AudioInfo,
    CustomPersonFilter: CustomPersonFilter,
    CreateTaskRequest: CreateTaskRequest,
    L3Tag: L3Tag,
    QueryCallbackResponse: QueryCallbackResponse,
    DescribeCustomPersonDetailResponse: DescribeCustomPersonDetailResponse,
    DeleteCustomPersonImageResponse: DeleteCustomPersonImageResponse,
    MediaPreknownInfo: MediaPreknownInfo,
    DescribeCustomCategoriesResponse: DescribeCustomCategoriesResponse,
    CreateCustomCategoryResponse: CreateCustomCategoryResponse,
    CreateCustomPersonResponse: CreateCustomPersonResponse,
    AppearInfo: AppearInfo,
    UpdateCustomCategoryRequest: UpdateCustomCategoryRequest,
    DescribeCustomGroupRequest: DescribeCustomGroupRequest,
    UpdateCustomCategoryResponse: UpdateCustomCategoryResponse,
    DeleteMediaRequest: DeleteMediaRequest,
    CreateCustomGroupResponse: CreateCustomGroupResponse,
    ImportMediaResponse: ImportMediaResponse,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    DescribeMediasResponse: DescribeMediasResponse,
    MediaInfo: MediaInfo,
    QueryCallbackRequest: QueryCallbackRequest,
    SortBy: SortBy,
    MediaMetadata: MediaMetadata,
    DeleteCustomPersonRequest: DeleteCustomPersonRequest,
    DeleteCustomCategoryResponse: DeleteCustomCategoryResponse,
    DeleteCustomPersonImageRequest: DeleteCustomPersonImageRequest,
    CreateCustomPersonRequest: CreateCustomPersonRequest,
    TaskInfo: TaskInfo,

}
