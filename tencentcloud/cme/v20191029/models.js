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
 * 音频流信息。
 * @class
 */
class AudioStreamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码率，单位：bps。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 采样率，单位：hz。
         * @type {number || null}
         */
        this.SamplingRate = null;

        /**
         * 编码格式。
         * @type {string || null}
         */
        this.Codec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SamplingRate = 'SamplingRate' in params ? params.SamplingRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;

    }
}

/**
 * 分类删除事件。
 * @class
 */
class ClassDeletedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除的分类归属。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 删除的分类路径列表。
         * @type {Array.<string> || null}
         */
        this.ClassPathSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.ClassPathSet = 'ClassPathSet' in params ? params.ClassPathSet : null;

    }
}

/**
 * ModifyMaterial返回参数结构体
 * @class
 */
class ModifyMaterialResponse extends  AbstractModel {
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
 * DeleteProject请求参数结构体
 * @class
 */
class DeleteProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 要删除的项目 Id。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以删除一切项目。如果指定操作者，则操作者必须为项目所有者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * ExportVideoByVideoSegmentationData返回参数结构体
 * @class
 */
class ExportVideoByVideoSegmentationDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 Id。
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
 * 媒体删除事件。
 * @class
 */
class MaterialDeletedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除的媒体 Id 列表。
         * @type {Array.<string> || null}
         */
        this.MaterialIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialIdSet = 'MaterialIdSet' in params ? params.MaterialIdSet : null;

    }
}

/**
 * ImportMaterial返回参数结构体
 * @class
 */
class ImportMaterialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体 Id。
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 媒体文预处理任务 ID，如果未指定发起预处理任务则为空。
         * @type {string || null}
         */
        this.PreProcessTaskId = null;

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
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.PreProcessTaskId = 'PreProcessTaskId' in params ? params.PreProcessTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 云转推项目输入信息。
 * @class
 */
class StreamConnectProjectInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云转推主输入源信息。
         * @type {StreamInputInfo || null}
         */
        this.MainInput = null;

        /**
         * 云转推备输入源信息。
         * @type {StreamInputInfo || null}
         */
        this.BackupInput = null;

        /**
         * 云转推输出源信息。
         * @type {Array.<StreamConnectOutput> || null}
         */
        this.Outputs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MainInput) {
            let obj = new StreamInputInfo();
            obj.deserialize(params.MainInput)
            this.MainInput = obj;
        }

        if (params.BackupInput) {
            let obj = new StreamInputInfo();
            obj.deserialize(params.BackupInput)
            this.BackupInput = obj;
        }

        if (params.Outputs) {
            this.Outputs = new Array();
            for (let z in params.Outputs) {
                let obj = new StreamConnectOutput();
                obj.deserialize(params.Outputs[z]);
                this.Outputs.push(obj);
            }
        }

    }
}

/**
 * DescribeAccounts请求参数结构体
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 手机号码。指定手机号获取账号信息，目前仅支持国内手机号，且号码不加地区码 `+86` 等。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 分页返回的起始偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回的记录条数，默认值：10，最大值：20。
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
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ExportVideoByVideoSegmentationData请求参数结构体
 * @class
 */
class ExportVideoByVideoSegmentationDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 视频拆条项目 Id 。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 指定需要导出的智能拆条片段的组 Id 。
         * @type {string || null}
         */
        this.SegmentGroupId = null;

        /**
         * 指定需要导出的智能拆条片段 Id  集合。
         * @type {Array.<string> || null}
         */
        this.SegmentIds = null;

        /**
         * 导出模板 Id，目前不支持自定义创建，只支持下面的预置模板 Id。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 导出目标，指定导出视频的目标媒资库，可取值有：
<li>CME：多媒体创作引擎，即导出为多媒体创作引擎媒资库，此导出目标在云点播媒资库依然可见；</li>
<li>VOD：云点播，即导出为云点播媒资库，此导出目标在多媒体创作引擎媒资库将不可见。</li>
         * @type {string || null}
         */
        this.ExportDestination = null;

        /**
         * 导出的多媒体创作引擎媒体信息。当导出目标为 CME 时必填。
         * @type {CMEExportInfo || null}
         */
        this.CMEExportInfo = null;

        /**
         * 导出的云点播媒资信息。当导出目标为 VOD 时必填。
         * @type {VODExportInfo || null}
         */
        this.VODExportInfo = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以操作任意智能拆条项目。如果指定操作者，则操作者必须为项目所有。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SegmentGroupId = 'SegmentGroupId' in params ? params.SegmentGroupId : null;
        this.SegmentIds = 'SegmentIds' in params ? params.SegmentIds : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ExportDestination = 'ExportDestination' in params ? params.ExportDestination : null;

        if (params.CMEExportInfo) {
            let obj = new CMEExportInfo();
            obj.deserialize(params.CMEExportInfo)
            this.CMEExportInfo = obj;
        }

        if (params.VODExportInfo) {
            let obj = new VODExportInfo();
            obj.deserialize(params.VODExportInfo)
            this.VODExportInfo = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 转场信息
 * @class
 */
class MediaTransitionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转场 Id 。暂只支持一个转场。
         * @type {string || null}
         */
        this.TransitionId = null;

        /**
         * 转场持续时间，单位为秒，默认为2秒。进行转场处理的两个媒体片段，第二个片段在轨道上的起始时间会自动进行调整，设置为前面一个片段的结束时间减去转场的持续时间。
         * @type {number || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransitionId = 'TransitionId' in params ? params.TransitionId : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * DescribeTeams返回参数结构体
 * @class
 */
class DescribeTeamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 团队列表。
         * @type {Array.<TeamInfo> || null}
         */
        this.TeamSet = null;

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

        if (params.TeamSet) {
            this.TeamSet = new Array();
            for (let z in params.TeamSet) {
                let obj = new TeamInfo();
                obj.deserialize(params.TeamSet[z]);
                this.TeamSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 任务状态，取值有：
<li>PROCESSING：处理中：</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务进度，取值为：0~100。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 错误码。
<li>0：成功；</li>
<li>其他值：失败。</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 任务类型，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：视频编辑项目导出。</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 导出项目输出信息。仅当 TaskType 为 VIDEO_EDIT_PROJECT_EXPORT 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoEditProjectOutput || null}
         */
        this.VideoEditProjectOutput = null;

        /**
         * 创建时间，格式按照 ISO 8601 标准表示。
         * @type {string || null}
         */
        this.CreateTime = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

        if (params.VideoEditProjectOutput) {
            let obj = new VideoEditProjectOutput();
            obj.deserialize(params.VideoEditProjectOutput)
            this.VideoEditProjectOutput = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportVideoEditProject请求参数结构体
 * @class
 */
class ExportVideoEditProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 项目 Id。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 视频编码配置 ID，支持自定义创建，推荐优先使用系统预置的导出配置。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 导出目标，指定导出视频的目标媒资库，可取值有：
<li>CME：多媒体创作引擎，即导出为多媒体创作引擎媒资库，此导出目标在云点播媒资库依然可见；</li>
<li>VOD：云点播，即导出为云点播媒资库，此导出目标在多媒体创作引擎媒资库将不可见。</li>
         * @type {string || null}
         */
        this.ExportDestination = null;

        /**
         * 视频封面图片文件（如 jpeg, png 等）进行 Base64 编码后的字符串，仅支持 gif、jpeg、png 三种图片格式，原图片文件不能超过2 M大 小。
         * @type {string || null}
         */
        this.CoverData = null;

        /**
         * 导出的多媒体创作引擎媒体信息。当导出目标为 CME 时必填。
         * @type {CMEExportInfo || null}
         */
        this.CMEExportInfo = null;

        /**
         * 导出的云点播媒资信息。当导出目标为 VOD 时必填。
         * @type {VODExportInfo || null}
         */
        this.VODExportInfo = null;

        /**
         * 视频导出扩展参数。可以覆盖导出模板中的参数，灵活的指定导出规格及参数。
         * @type {VideoExportExtensionArgs || null}
         */
        this.ExportExtensionArgs = null;

        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验项目导出权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ExportDestination = 'ExportDestination' in params ? params.ExportDestination : null;
        this.CoverData = 'CoverData' in params ? params.CoverData : null;

        if (params.CMEExportInfo) {
            let obj = new CMEExportInfo();
            obj.deserialize(params.CMEExportInfo)
            this.CMEExportInfo = obj;
        }

        if (params.VODExportInfo) {
            let obj = new VODExportInfo();
            obj.deserialize(params.VODExportInfo)
            this.VODExportInfo = obj;
        }

        if (params.ExportExtensionArgs) {
            let obj = new VideoExportExtensionArgs();
            obj.deserialize(params.ExportExtensionArgs)
            this.ExportExtensionArgs = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 云转推输入断流信息。
 * @class
 */
class StreamConnectInputInterruptInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云转推输入源标识，取值有：
<li>Main：主源；</li>
<li>Backup：备源。</li>
         * @type {string || null}
         */
        this.EndPoint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndPoint = 'EndPoint' in params ? params.EndPoint : null;

    }
}

/**
 * 团队信息
 * @class
 */
class TeamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 团队 ID。
         * @type {string || null}
         */
        this.TeamId = null;

        /**
         * 团队名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 团队成员个数
         * @type {number || null}
         */
        this.MemberCount = null;

        /**
         * 团队创建时间，格式按照 ISO 8601 标准表示。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 团队最后更新时间，格式按照 ISO 8601 标准表示。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MemberCount = 'MemberCount' in params ? params.MemberCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 分类信息
 * @class
 */
class ClassInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 分类路径。
         * @type {string || null}
         */
        this.ClassPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;

    }
}

/**
 * 点播转直播输出断流信息。
 * @class
 */
class MediaCastDestinationInterruptInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发生断流的输出源信息。
         * @type {MediaCastDestinationInfo || null}
         */
        this.DestinationInfo = null;

        /**
         * 输出源断流原因，取值有：
<li>SystemError：系统错误；</li>
<li>Unknown：未知错误。</li>
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DestinationInfo) {
            let obj = new MediaCastDestinationInfo();
            obj.deserialize(params.DestinationInfo)
            this.DestinationInfo = obj;
        }
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * 音频轨道上的音频片段信息。
 * @class
 */
class AudioTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频媒体来源类型，取值有：
<ul>
<li>VOD ：素材来源于云点播文件 ；</li>
<li>CME ：视频来源于制作云媒体文件 ；</li>
<li>EXTERNAL ：视频来源于媒资绑定，如果媒体不是存储在腾讯云点播中或者云创中，都需要使用媒资绑定。</li>
</ul>
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 音频媒体，可取值为：
<ul>
<li>当 SourceType 为 VOD 时，参数填云点播 FileId ；</li>
<li>当 SourceType 为 CME 时，参数填多媒体创作引擎媒体 Id；</li>
<li>当 SourceType 为 EXTERNAL 时，目前仅支持外部媒体 URL(如`https://www.example.com/a.mp3`)，参数填写规则请参见注意事项。</li>
</ul>

注意：
<li>当 SourceType 为 EXTERNAL 并且媒体 URL Scheme 为 `https` 时(如：`https://www.example.com/a.mp3`)，参数为：`1000000:www.example.com/a.mp3`。</li>
<li>当 SourceType 为 EXTERNAL 并且媒体 URL Scheme 为 `http` 时(如：`http://www.example.com/b.mp3`)，参数为：`1000001:www.example.com/b.mp3`。</li>
         * @type {string || null}
         */
        this.SourceMedia = null;

        /**
         * 音频片段取自媒体文件的起始时间，单位为秒。0 表示从媒体开始位置截取。默认为0。
         * @type {number || null}
         */
        this.SourceMediaStartTime = null;

        /**
         * 音频片段的时长，单位为秒。默认和媒体本身长度一致，表示截取全部媒体。
         * @type {number || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceMedia = 'SourceMedia' in params ? params.SourceMedia : null;
        this.SourceMediaStartTime = 'SourceMediaStartTime' in params ? params.SourceMediaStartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * 云转推项目信息，包含输入源、输出源、当前转推开始时间等信息。
 * @class
 */
class StreamConnectProjectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转推项目状态，取值有：
<li>Working ：转推中；</li>
<li>Idle ：空闲中。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 当前转推输入源，取值有：
<li>Main ：主输入源；</li>
<li>Backup ：备输入源。</li>
         * @type {string || null}
         */
        this.CurrentInputEndpoint = null;

        /**
         * 当前转推开始时间， 采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。仅 Status 取值 Working 时有效。
         * @type {string || null}
         */
        this.CurrentStartTime = null;

        /**
         * 当前转推计划结束时间， 采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。仅 Status 取值 Working 时有效。
         * @type {string || null}
         */
        this.CurrentStopTime = null;

        /**
         * 上一次转推结束时间， 采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。仅 Status 取值 Idle 时有效。
         * @type {string || null}
         */
        this.LastStopTime = null;

        /**
         * 云转推主输入源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StreamInputInfo || null}
         */
        this.MainInput = null;

        /**
         * 云转推备输入源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StreamInputInfo || null}
         */
        this.BackupInput = null;

        /**
         * 云转推输出源。
         * @type {Array.<StreamConnectOutputInfo> || null}
         */
        this.OutputSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.CurrentInputEndpoint = 'CurrentInputEndpoint' in params ? params.CurrentInputEndpoint : null;
        this.CurrentStartTime = 'CurrentStartTime' in params ? params.CurrentStartTime : null;
        this.CurrentStopTime = 'CurrentStopTime' in params ? params.CurrentStopTime : null;
        this.LastStopTime = 'LastStopTime' in params ? params.LastStopTime : null;

        if (params.MainInput) {
            let obj = new StreamInputInfo();
            obj.deserialize(params.MainInput)
            this.MainInput = obj;
        }

        if (params.BackupInput) {
            let obj = new StreamInputInfo();
            obj.deserialize(params.BackupInput)
            this.BackupInput = obj;
        }

        if (params.OutputSet) {
            this.OutputSet = new Array();
            for (let z in params.OutputSet) {
                let obj = new StreamConnectOutputInfo();
                obj.deserialize(params.OutputSet[z]);
                this.OutputSet.push(obj);
            }
        }

    }
}

/**
 * 视频编码配置中的音频设置更新信息
 * @class
 */
class VideoEncodingPresetAudioSettingForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频码率，单位：bps。
不填则不修改。
         * @type {string || null}
         */
        this.Bitrate = null;

        /**
         * 音频声道数，可选值： 
<li>1：单声道；</li>
<li>2：双声道。</li> 
不填则不修改。
         * @type {number || null}
         */
        this.Channels = null;

        /**
         * 音频流的采样率，目前仅支持： 16000； 32000； 44100； 48000。单位：Hz。
不填则不修改。
         * @type {number || null}
         */
        this.SampleRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Channels = 'Channels' in params ? params.Channels : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;

    }
}

/**
 * 视频编码配置中的音频设置
 * @class
 */
class VideoEncodingPresetAudioSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频流的编码格式，可选值：
AAC：AAC 编码。

默认值：AAC。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 音频码率，单位：bps。
默认值：64K。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 音频声道数，可选值： 
<li>1：单声道；</li>
<li>2：双声道。</li> 
默认值：2。
         * @type {number || null}
         */
        this.Channels = null;

        /**
         * 音频流的采样率，仅支持 16000； 32000； 44100； 48000。单位：Hz。 
默认值：16000。
         * @type {number || null}
         */
        this.SampleRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Channels = 'Channels' in params ? params.Channels : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;

    }
}

/**
 * 整型范围
 * @class
 */
class IntegerRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按整形代表值的下限检索。
         * @type {number || null}
         */
        this.LowerBound = null;

        /**
         * 按整形代表值的上限检索。
         * @type {number || null}
         */
        this.UpperBound = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LowerBound = 'LowerBound' in params ? params.LowerBound : null;
        this.UpperBound = 'UpperBound' in params ? params.UpperBound : null;

    }
}

/**
 * SearchMaterial请求参数结构体
 * @class
 */
class SearchMaterialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 指定搜索空间，数组长度不得超过5。
         * @type {Array.<SearchScope> || null}
         */
        this.SearchScopes = null;

        /**
         * 媒体类型，可取值有：
<li>AUDIO：音频；</li>
<li>VIDEO：视频 ；</li>
<li>IMAGE：图片；</li>
<li>VIDEO_EDIT_TEMPLATE：剪辑模板。</li>
         * @type {Array.<string> || null}
         */
        this.MaterialTypes = null;

        /**
         * 搜索文本，模糊匹配媒体名称或描述信息，匹配项越多，匹配度越高，排序越优先。长度限制：15个字符。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 按画质检索，取值为：LD/SD/HD/FHD/2K/4K。
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * 按媒体时长检索，单位s。
         * @type {IntegerRange || null}
         */
        this.DurationRange = null;

        /**
         * 按照媒体创建时间检索。
         * @type {TimeRange || null}
         */
        this.CreateTimeRange = null;

        /**
         * 按标签检索，填入检索的标签名。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 排序方式。Sort.Field 可选值：CreateTime。指定 Text 搜索时，将根据匹配度排序，该字段无效。
         * @type {SortBy || null}
         */
        this.Sort = null;

        /**
         * 偏移量。默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以搜索任意媒体的信息。如果指定操作者，则操作者必须对媒体有读权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;

        if (params.SearchScopes) {
            this.SearchScopes = new Array();
            for (let z in params.SearchScopes) {
                let obj = new SearchScope();
                obj.deserialize(params.SearchScopes[z]);
                this.SearchScopes.push(obj);
            }
        }
        this.MaterialTypes = 'MaterialTypes' in params ? params.MaterialTypes : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

        if (params.DurationRange) {
            let obj = new IntegerRange();
            obj.deserialize(params.DurationRange)
            this.DurationRange = obj;
        }

        if (params.CreateTimeRange) {
            let obj = new TimeRange();
            obj.deserialize(params.CreateTimeRange)
            this.CreateTimeRange = obj;
        }
        this.Tags = 'Tags' in params ? params.Tags : null;

        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 新文件生成事件
 * @class
 */
class StorageNewFileCreatedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云点播文件  Id。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 媒体 Id。
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 操作者 Id。（废弃，请勿使用）
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 操作类型，可取值有：
<li>Upload：本地上传；</li>
<li>PullUpload：拉取上传；</li>
<li>VideoEdit：视频剪辑；</li>
<li>LiveStreamClip：直播流剪辑；</li>
<li>LiveStreamRecord：直播流录制。</li>
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * 媒体归属。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 媒体分类路径。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 生成文件的任务 Id。当生成新文件是拉取上传、视频剪辑、直播流剪辑时为任务 Id。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 来源上下文信息。视频剪辑生成新文件时此字段为项目 Id；直播流剪辑或者直播流录制生成新文件则为原始流地址。
         * @type {string || null}
         */
        this.SourceContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.OperationType = 'OperationType' in params ? params.OperationType : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SourceContext = 'SourceContext' in params ? params.SourceContext : null;

    }
}

/**
 * DeleteTeam返回参数结构体
 * @class
 */
class DeleteTeamResponse extends  AbstractModel {
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
 * 云转推输出源。
 * @class
 */
class StreamConnectOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云转推输出源标识，转推项目级别唯一。若不填则由后端生成。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 云转推输出源名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 云转推输出源类型，取值：
<li>URL ：URL类型</li>
不填默认为URL类型。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 云转推推流地址。
         * @type {string || null}
         */
        this.PushUrl = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.PushUrl = 'PushUrl' in params ? params.PushUrl : null;

    }
}

/**
 * CopyProject请求参数结构体
 * @class
 */
class CopyProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 被复制的项目 ID。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 复制后的项目名称，不填为原项目名称+"(副本)"。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 复制后的项目归属者，不填为原项目归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 搜索空间
 * @class
 */
class SearchScope extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类路径归属。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 按分类路径检索。 不填则默认按根分类路径检索。
         * @type {string || null}
         */
        this.ClassPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;

    }
}

/**
 * 点播文件播放信息，包含当前在播地址和该地址已播时长 。
 * @class
 */
class VodPullInputPlayInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前正在播放文件 Url 。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 点播文件已播放时长，单位：秒。
         * @type {number || null}
         */
        this.TimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;

    }
}

/**
 * RevokeResourceAuthorization返回参数结构体
 * @class
 */
class RevokeResourceAuthorizationResponse extends  AbstractModel {
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
 * DescribeTasks返回参数结构体
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合搜索条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务基础信息列表。
         * @type {Array.<TaskBaseInfo> || null}
         */
        this.TaskBaseInfoSet = null;

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

        if (params.TaskBaseInfoSet) {
            this.TaskBaseInfoSet = new Array();
            for (let z in params.TaskBaseInfoSet) {
                let obj = new TaskBaseInfo();
                obj.deserialize(params.TaskBaseInfoSet[z]);
                this.TaskBaseInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 项目信息。
 * @class
 */
class ProjectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 Id。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 画布宽高比。
         * @type {string || null}
         */
        this.AspectRatio = null;

        /**
         * 项目类别，取值有：
<li>VIDEO_EDIT：视频编辑。</li>
<li>SWITCHER：导播台。</li>
<li>VIDEO_SEGMENTATION：视频拆条。</li>
<li>STREAM_CONNECT：云转推。</li>
<li>RECORD_REPLAY：录制回放。</li>
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 项目封面图片地址。
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * 云转推项目信息，仅当项目类别取值 STREAM_CONNECT 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StreamConnectProjectInfo || null}
         */
        this.StreamConnectProjectInfo = null;

        /**
         * 点播转直播项目信息，仅当项目类别取值为 MEDIA_CAST 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaCastProjectInfo || null}
         */
        this.MediaCastProjectInfo = null;

        /**
         * 项目更新时间，格式按照 ISO 8601 标准表示。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 项目创建时间，格式按照 ISO 8601 标准表示。
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;
        this.Category = 'Category' in params ? params.Category : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;

        if (params.StreamConnectProjectInfo) {
            let obj = new StreamConnectProjectInfo();
            obj.deserialize(params.StreamConnectProjectInfo)
            this.StreamConnectProjectInfo = obj;
        }

        if (params.MediaCastProjectInfo) {
            let obj = new MediaCastProjectInfo();
            obj.deserialize(params.MediaCastProjectInfo)
            this.MediaCastProjectInfo = obj;
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 视频轨的视频片段信息。
 * @class
 */
class VideoTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频媒体来源类型，取值有：
<ul>
<li>VOD ：媒体来源于云点播文件 。</li>
<li>CME ：视频来源制作云媒体文件。</li>
<li>EXTERNAL ：视频来源于媒资绑定，如果媒体不是存储在腾讯云点播中或者云创中，都需要使用媒资绑定。</li>
</ul>
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 视频媒体，可取值为：
<ul>
<li>当 SourceType 为 VOD 时，参数填云点播 FileId ；</li>
<li>当 SourceType 为 CME 时，参数填多媒体创作引擎媒体 Id；</li>
<li>当 SourceType 为 EXTERNAL 时，目前仅支持外部媒体 URL(如`https://www.example.com/a.mp4`)，参数填写规则请参见注意事项。</li>
</ul>

注意：
<li>当 SourceType 为 EXTERNAL 并且媒体 URL Scheme 为 `https` 时(如：`https://www.example.com/a.mp4`)，参数为：`1000000:www.example.com/a.mp4`。</li>
<li>当 SourceType 为 EXTERNAL 并且媒体 URL Scheme 为 `http` 时(如：`http://www.example.com/b.mp4`)，参数为：`1000001:www.example.com/b.mp4`。</li>
         * @type {string || null}
         */
        this.SourceMedia = null;

        /**
         * 视频片段取自媒体文件的起始时间，单位为秒。默认为0。
         * @type {number || null}
         */
        this.SourceMediaStartTime = null;

        /**
         * 视频片段时长，单位为秒。默认取视频媒体文件本身长度，表示截取全部媒体文件。如果源文件是图片，Duration需要大于0。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 视频片段原点距离画布原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布口宽度的 10%。</li>
<li>当字符串以 px 结尾，表示视频片段 XPos 单位为像素，如 100px 表示 XPos 为100像素。</li>
默认值：0px。
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * 视频片段原点距离画布原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示视频片段 YPos 单位为像素，如 100px 表示 YPos 为100像素。</li>
默认值：0px。
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * 视频原点位置，取值有：
<li>Center：坐标原点为中心位置，如画布中心。</li>
默认值 ：Center。
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * 视频片段的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%；</li>
<li>当字符串以 px 结尾，表示视频片段 Height 单位为像素，如 100px 表示 Height 为100像素；</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取视频媒体文件本身的 Width、Height；</li>
<li>当 Width 为空，Height 非空，则 Width 按比例缩放；</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
         * @type {string || null}
         */
        this.Height = null;

        /**
         * 视频片段的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%；</li>
<li>当字符串以 px 结尾，表示视频片段 Width 单位为像素，如 100px 表示 Width 为100像素；</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取视频媒体文件本身的 Width、Height；</li>
<li>当 Width 为空，Height 非空，则 Width 按比例缩放；</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
         * @type {string || null}
         */
        this.Width = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceMedia = 'SourceMedia' in params ? params.SourceMedia : null;
        this.SourceMediaStartTime = 'SourceMediaStartTime' in params ? params.SourceMediaStartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * DeleteTeam请求参数结构体
 * @class
 */
class DeleteTeamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 要删除的团队  ID。
         * @type {string || null}
         */
        this.TeamId = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以删除所有团队。如果指定操作者，则操作者必须为团队所有者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeTeams请求参数结构体
 * @class
 */
class DescribeTeamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 团队 ID 列表，限30个。若不填，则默认获取平台下所有团队。
         * @type {Array.<string> || null}
         */
        this.TeamIds = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：20，最大值：30。
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
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamIds = 'TeamIds' in params ? params.TeamIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 平台信息。
 * @class
 */
class PlatformInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台标识。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 平台描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 云点播子应用 Id。
         * @type {number || null}
         */
        this.VodSubAppId = null;

        /**
         * 平台绑定的 license Id。
         * @type {string || null}
         */
        this.LicenseId = null;

        /**
         * 平台状态，可取值为：
<li>Normal：正常，可使用。；</li>
<li>Stopped：已停用，暂无法使用；</li>
<li>Expired：已过期，需要重新购买会员包。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 创建时间，格式按照 ISO 8601 标准表示。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间，格式按照 ISO 8601 标准表示。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VodSubAppId = 'VodSubAppId' in params ? params.VodSubAppId : null;
        this.LicenseId = 'LicenseId' in params ? params.LicenseId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 链接类型的素材信息
 * @class
 */
class LinkMaterial extends  AbstractModel {
    constructor(){
        super();

        /**
         * 链接类型取值:
<li>CLASS: 分类链接;</li>
<li> MATERIAL：素材链接。</li>
         * @type {string || null}
         */
        this.LinkType = null;

        /**
         * 链接状态取值：
<li> Normal：正常 ；</li>
<li>NotFound：链接目标不存在；</li> <li>Forbidden：无权限。</li>
         * @type {string || null}
         */
        this.LinkStatus = null;

        /**
         * 素材链接详细信息，当LinkType="MATERIAL"时有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LinkMaterialInfo || null}
         */
        this.LinkMaterialInfo = null;

        /**
         * 分类链接目标信息，当LinkType=“CLASS”时有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClassInfo || null}
         */
        this.LinkClassInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LinkType = 'LinkType' in params ? params.LinkType : null;
        this.LinkStatus = 'LinkStatus' in params ? params.LinkStatus : null;

        if (params.LinkMaterialInfo) {
            let obj = new LinkMaterialInfo();
            obj.deserialize(params.LinkMaterialInfo)
            this.LinkMaterialInfo = obj;
        }

        if (params.LinkClassInfo) {
            let obj = new ClassInfo();
            obj.deserialize(params.LinkClassInfo)
            this.LinkClassInfo = obj;
        }

    }
}

/**
 * 导播台项目输入信息
 * @class
 */
class SwitcherProjectInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导播台停止时间，格式按照 ISO 8601 标准表示。若不填，该值默认为当前时间加七天。
         * @type {string || null}
         */
        this.StopTime = null;

        /**
         * 导播台主监输出配置信息。若不填，默认输出 720P。
         * @type {SwitcherPgmOutputConfig || null}
         */
        this.PgmOutputConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StopTime = 'StopTime' in params ? params.StopTime : null;

        if (params.PgmOutputConfig) {
            let obj = new SwitcherPgmOutputConfig();
            obj.deserialize(params.PgmOutputConfig)
            this.PgmOutputConfig = obj;
        }

    }
}

/**
 * FlattenListMedia请求参数结构体
 * @class
 */
class FlattenListMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 媒体分类路径，例如填写"/a/b"，则代表平铺该分类路径下及其子分类路径下的媒体信息。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 媒体分类的归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以平铺查询任意分类下的媒体信息。如果指定操作者，则操作者必须对当前分类有读权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 直播推流信息，包括推流地址有效时长，多媒体创作引擎后端生成直播推流地址。
 * @class
 */
class RtmpPushInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播推流地址有效期，单位：秒 。
         * @type {number || null}
         */
        this.ExpiredSecond = null;

        /**
         * 直播推流地址，入参不填默认由多媒体创作引擎生成。
         * @type {string || null}
         */
        this.PushUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExpiredSecond = 'ExpiredSecond' in params ? params.ExpiredSecond : null;
        this.PushUrl = 'PushUrl' in params ? params.PushUrl : null;

    }
}

/**
 * 音频素材信息
 * @class
 */
class AudioMaterial extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材元信息。
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * 素材媒体文件的播放 URL 地址。
         * @type {string || null}
         */
        this.MaterialUrl = null;

        /**
         * 素材媒体文件的封面图片地址。
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * 素材状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaterialStatus || null}
         */
        this.MaterialStatus = null;

        /**
         * 素材媒体文件的原始 URL 地址。
         * @type {string || null}
         */
        this.OriginalUrl = null;

        /**
         * 云点播媒资 FileId。
         * @type {string || null}
         */
        this.VodFileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.MaterialUrl = 'MaterialUrl' in params ? params.MaterialUrl : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;

        if (params.MaterialStatus) {
            let obj = new MaterialStatus();
            obj.deserialize(params.MaterialStatus)
            this.MaterialStatus = obj;
        }
        this.OriginalUrl = 'OriginalUrl' in params ? params.OriginalUrl : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;

    }
}

/**
 * 添加的团队成员信息
 * @class
 */
class AddMemberInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 团队成员 ID。
         * @type {string || null}
         */
        this.MemberId = null;

        /**
         * 团队成员备注。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 团队成员角色，不填则默认添加普通成员。可选值：
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * 用于描述资源的归属，归属者为个人或者团队。
 * @class
 */
class Entity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型，取值有：
<li>PERSON：个人。</li>
<li>TEAM：团队。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Id，当 Type=PERSON，取值为用户 Id，当 Type=TEAM，取值为团队 Id。
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 点播转直播视频配置
 * @class
 */
class MediaCastVideoSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频宽度，单位：px，默认值为1280。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频高度，单位：px，默认值为720。支持的视频分辨率最大为1920*1080。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频码率，单位：kbps，默认值为2500。最大值为10000 kbps。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 视频帧率，单位：Hz，默认值为25。最大值为60。
         * @type {number || null}
         */
        this.FrameRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.FrameRate = 'FrameRate' in params ? params.FrameRate : null;

    }
}

/**
 * ExportVideoByEditorTrackData请求参数结构体
 * @class
 */
class ExportVideoByEditorTrackDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 导出视频预设配置 Id，推荐优先使用下面的默认预设配置 Id，有其他需求可通过接口定制预设配置。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 导出目标，指定导出视频的目标媒资库，可取值有：
<li>CME：多媒体创建引擎，即导出到多媒体创作引擎媒资库，此导出目标在云点播媒资库依然可见；</li>
<li>VOD：云点播，即导出为云点播媒资库，此导出目标在多媒体创作引擎媒资库将不可见。</li>
         * @type {string || null}
         */
        this.ExportDestination = null;

        /**
         * 轨道数据，用于描述待导出视频的内容。关于轨道数据的格式请查看 [视频合成协议](https://cloud.tencent.com/document/product/1156/51225)。文档中也描述了如何在页面上查看一个剪辑项目的轨道数据，该能力可以帮助开发者更方便地构造自己的轨道数据。
         * @type {string || null}
         */
        this.TrackData = null;

        /**
         * 轨道数据对应的画布宽高比，配合预设配置中的视频短边尺寸，可决定导出画面的尺寸。例：
<li>如果 AspectRatio 取值 16:9，预设配置选为12（短边1080），则导出尺寸为 1920 * 1080；</li>
<li>如果 AspectRatio 取值 9:16，预设配置选为11（短边720），则导出尺寸为 720 *1280。</li>
         * @type {string || null}
         */
        this.AspectRatio = null;

        /**
         * 视频封面图片文件（如 jpeg, png 等）进行 Base64 编码后的字符串，仅支持 gif、jpeg、png 三种图片格式，原图片文件不能超过2 M大 小。
         * @type {string || null}
         */
        this.CoverData = null;

        /**
         * 导出的多媒体创作引擎媒体信息。当导出目标为 CME 时必填。
         * @type {CMEExportInfo || null}
         */
        this.CMEExportInfo = null;

        /**
         * 导出的云点播媒资信息。当导出目标为 VOD 时必填。
         * @type {VODExportInfo || null}
         */
        this.VODExportInfo = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，无权限限制。如果指定操作者，轨道数据中使的媒资该操作者需要拥有使用权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ExportDestination = 'ExportDestination' in params ? params.ExportDestination : null;
        this.TrackData = 'TrackData' in params ? params.TrackData : null;
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;
        this.CoverData = 'CoverData' in params ? params.CoverData : null;

        if (params.CMEExportInfo) {
            let obj = new CMEExportInfo();
            obj.deserialize(params.CMEExportInfo)
            this.CMEExportInfo = obj;
        }

        if (params.VODExportInfo) {
            let obj = new VODExportInfo();
            obj.deserialize(params.VODExportInfo)
            this.VODExportInfo = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 素材标签信息
 * @class
 */
class MaterialTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签类型，取值为：
<li>PRESET：预置标签；</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 标签 Id 。当标签类型为 PRESET 时，标签 Id 为预置标签 Id 。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 标签名称。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 项目导出信息。
 * @class
 */
class VideoEditProjectOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出的多媒体创作引擎媒体 Id，仅当导出目标为多媒体创作引擎媒体时有效。
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 云点播媒资 FileId。
         * @type {string || null}
         */
        this.VodFileId = null;

        /**
         * 导出的媒资 URL。
         * @type {string || null}
         */
        this.URL = null;

        /**
         * 元信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;
        this.URL = 'URL' in params ? params.URL : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

    }
}

/**
 * CreateProject请求参数结构体
 * @class
 */
class CreateProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 项目名称，不可超过30个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项目归属者，即项目的所有者，后续操作只有该所有者有权限操作。

注：目前所有项目只能设置归属个人，暂不支持团队项目。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 项目类别，取值有：
<li>VIDEO_EDIT：视频编辑。</li>
<li>SWITCHER：导播台。</li>
<li>VIDEO_SEGMENTATION：视频拆条。</li>
<li>STREAM_CONNECT：云转推。</li>
<li>RECORD_REPLAY：录制回放。</li>
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 项目模式，一个项目可以有多种模式并相互切换。
当 Category 为 VIDEO_EDIT 时，可选模式有：
<li>Default：默认模式，即普通视频编辑项目。</li>
<li>VideoEditTemplate：剪辑模板制作模式，用于制作剪辑模板。</li>

注：不填则为默认模式。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 画布宽高比。
该字段已经废弃，请使用具体项目输入中的 AspectRatio 字段。
         * @type {string || null}
         */
        this.AspectRatio = null;

        /**
         * 项目描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 导播台项目输入信息，仅当项目类型为 SWITCHER 时必填。
         * @type {SwitcherProjectInput || null}
         */
        this.SwitcherProjectInput = null;

        /**
         * 直播剪辑项目输入信息，暂未开放，请勿使用。
         * @type {LiveStreamClipProjectInput || null}
         */
        this.LiveStreamClipProjectInput = null;

        /**
         * 视频编辑项目输入信息，仅当项目类型为 VIDEO_EDIT 时必填。
         * @type {VideoEditProjectInput || null}
         */
        this.VideoEditProjectInput = null;

        /**
         * 视频拆条项目输入信息，仅当项目类型为 VIDEO_SEGMENTATION  时必填。
         * @type {VideoSegmentationProjectInput || null}
         */
        this.VideoSegmentationProjectInput = null;

        /**
         * 云转推项目输入信息，仅当项目类型为 STREAM_CONNECT 时必填。
         * @type {StreamConnectProjectInput || null}
         */
        this.StreamConnectProjectInput = null;

        /**
         * 录制回放项目输入信息，仅当项目类型为 RECORD_REPLAY 时必填。
         * @type {RecordReplayProjectInput || null}
         */
        this.RecordReplayProjectInput = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Category = 'Category' in params ? params.Category : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.SwitcherProjectInput) {
            let obj = new SwitcherProjectInput();
            obj.deserialize(params.SwitcherProjectInput)
            this.SwitcherProjectInput = obj;
        }

        if (params.LiveStreamClipProjectInput) {
            let obj = new LiveStreamClipProjectInput();
            obj.deserialize(params.LiveStreamClipProjectInput)
            this.LiveStreamClipProjectInput = obj;
        }

        if (params.VideoEditProjectInput) {
            let obj = new VideoEditProjectInput();
            obj.deserialize(params.VideoEditProjectInput)
            this.VideoEditProjectInput = obj;
        }

        if (params.VideoSegmentationProjectInput) {
            let obj = new VideoSegmentationProjectInput();
            obj.deserialize(params.VideoSegmentationProjectInput)
            this.VideoSegmentationProjectInput = obj;
        }

        if (params.StreamConnectProjectInput) {
            let obj = new StreamConnectProjectInput();
            obj.deserialize(params.StreamConnectProjectInput)
            this.StreamConnectProjectInput = obj;
        }

        if (params.RecordReplayProjectInput) {
            let obj = new RecordReplayProjectInput();
            obj.deserialize(params.RecordReplayProjectInput)
            this.RecordReplayProjectInput = obj;
        }

    }
}

/**
 * ModifyMaterial请求参数结构体
 * @class
 */
class ModifyMaterialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 要修改的媒体 Id。
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 媒体归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 媒体名称，不能超过30个字符，不填则不修改。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 媒体分类路径，例如填写"/a/b"，则代表该媒体存储的路径为"/a/b"。若修改分类路径，则 Owner 字段必填。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以修改任意媒体的信息。如果指定操作者，则操作者必须对媒体有写权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 授权者
 * @class
 */
class Authorizer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权者类型，取值有：
<li>PERSON：个人。</li>
<li>TEAM：团队。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Id，当 Type=PERSON，取值为用户 Id。当Type=TEAM，取值为团队 ID。
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribePlatforms返回参数结构体
 * @class
 */
class DescribePlatformsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 平台信息列表。
         * @type {Array.<PlatformInfo> || null}
         */
        this.PlatformInfoSet = null;

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

        if (params.PlatformInfoSet) {
            this.PlatformInfoSet = new Array();
            for (let z in params.PlatformInfoSet) {
                let obj = new PlatformInfo();
                obj.deserialize(params.PlatformInfoSet[z]);
                this.PlatformInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 项目 Id，使用项目 Id 进行过滤。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 任务类型集合，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：视频编辑项目导出。</li>

注：不填不使用任务类型进行过滤。
         * @type {Array.<string> || null}
         */
        this.TaskTypeSet = null;

        /**
         * 任务状态集合，取值有：
<li>PROCESSING：处理中；</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>

注：不填则不使用任务状态进行过滤。
         * @type {Array.<string> || null}
         */
        this.StatusSet = null;

        /**
         * 分页返回的起始偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回的记录条数，默认值：10。最大值：20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以获取所有任务信息。如果指定操作者，则操作者需要是任务发起者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskTypeSet = 'TaskTypeSet' in params ? params.TaskTypeSet : null;
        this.StatusSet = 'StatusSet' in params ? params.StatusSet : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 *  点播转直播项目状态变更事件。
 * @class
 */
class ProjectMediaCastStatusChangedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 Id。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目状态，取值有：
<li>Started：点播转直播开始；</li>
<li>Stopped：点播转直播结束；</li>
<li>SourceInterrupted：点播转直播输入断流；</li>
<li>DestinationInterrupted：点播转直播输出断流。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 点播转直播输入断流信息，仅当 Status 取值 SourceInterrupted 时有效。
         * @type {MediaCastSourceInterruptInfo || null}
         */
        this.SourceInterruptInfo = null;

        /**
         * 点播转直播输出断流信息，仅当 Status 取值 DestinationInterrupted 时有效。
         * @type {MediaCastDestinationInterruptInfo || null}
         */
        this.DestinationInterruptInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.SourceInterruptInfo) {
            let obj = new MediaCastSourceInterruptInfo();
            obj.deserialize(params.SourceInterruptInfo)
            this.SourceInterruptInfo = obj;
        }

        if (params.DestinationInterruptInfo) {
            let obj = new MediaCastDestinationInterruptInfo();
            obj.deserialize(params.DestinationInterruptInfo)
            this.DestinationInterruptInfo = obj;
        }

    }
}

/**
 * 媒体轨道的片段信息
 * @class
 */
class MediaTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 片段类型。取值有：
<li>Video：视频片段；</li>
<li>Audio：音频片段；</li>
<li>Empty：空白片段；</li>
<li>Transition：转场。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 视频片段，当 Type = Video 时有效。
         * @type {VideoTrackItem || null}
         */
        this.VideoItem = null;

        /**
         * 音频片段，当 Type = Audio 时有效。
         * @type {AudioTrackItem || null}
         */
        this.AudioItem = null;

        /**
         * 空白片段，当 Type = Empty 时有效。空片段用于时间轴的占位。<li>如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。</li>
<li>使用 EmptyTrackItem 进行占位，来定位某个Item。</li>
         * @type {EmptyTrackItem || null}
         */
        this.EmptyItem = null;

        /**
         * 转场，当 Type = Transition 时有效。
         * @type {MediaTransitionItem || null}
         */
        this.TransitionItem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VideoItem) {
            let obj = new VideoTrackItem();
            obj.deserialize(params.VideoItem)
            this.VideoItem = obj;
        }

        if (params.AudioItem) {
            let obj = new AudioTrackItem();
            obj.deserialize(params.AudioItem)
            this.AudioItem = obj;
        }

        if (params.EmptyItem) {
            let obj = new EmptyTrackItem();
            obj.deserialize(params.EmptyItem)
            this.EmptyItem = obj;
        }

        if (params.TransitionItem) {
            let obj = new MediaTransitionItem();
            obj.deserialize(params.TransitionItem)
            this.TransitionItem = obj;
        }

    }
}

/**
 * 点播转直播输出信息。
 * @class
 */
class MediaCastDestinationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输出源序号。由系统进行分配。
         * @type {number || null}
         */
        this.Index = null;

        /**
         * 输出源的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 输出直播流地址。支持的直播流类型为 RTMP 和 SRT。
         * @type {string || null}
         */
        this.PushUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PushUrl = 'PushUrl' in params ? params.PushUrl : null;

    }
}

/**
 * DescribeLoginStatus请求参数结构体
 * @class
 */
class DescribeLoginStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 用户 Id 列表，N 从0开始取值，最大19。
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * 轨道信息
 * @class
 */
class MediaTrack extends  AbstractModel {
    constructor(){
        super();

        /**
         * 轨道类型，取值有：
<ul>
<li>Video ：视频轨道。视频轨道由以下 Item 组成：<ul><li>VideoTrackItem</li><li>EmptyTrackItem</li><li>MediaTransitionItem</li></ul> </li>
<li>Audio ：音频轨道。音频轨道由以下 Item 组成：<ul><li>AudioTrackItem</li><li>EmptyTrackItem</li></ul> </li>
</ul>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 轨道上的媒体片段列表。
         * @type {Array.<MediaTrackItem> || null}
         */
        this.TrackItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TrackItems) {
            this.TrackItems = new Array();
            for (let z in params.TrackItems) {
                let obj = new MediaTrackItem();
                obj.deserialize(params.TrackItems[z]);
                this.TrackItems.push(obj);
            }
        }

    }
}

/**
 * DeleteLoginStatus返回参数结构体
 * @class
 */
class DeleteLoginStatusResponse extends  AbstractModel {
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
 * 微博发布信息。
 * @class
 */
class WeiboPublishInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频发布标题。
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 视频发布描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 微博可见性，可取值为：
<li>Public：公开，所有人可见；</li>
<li>Private：私有，仅自己可见。</li>

默认为 Public，所有人可见。
         * @type {string || null}
         */
        this.Visible = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Visible = 'Visible' in params ? params.Visible : null;

    }
}

/**
 * 点播转直播输入源信息。
 * @class
 */
class MediaCastSourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入源的媒体类型，取值有：
<li>CME：多媒体创作引擎的媒体文件；</li>
<li>VOD：云点播的媒资文件。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 多媒体创作引擎的媒体 ID。当 Type = CME  时必填。
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 云点播媒体文件 ID。当 Type = VOD 时必填。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 序号，位于输入源列表中的序号，由系统分配。
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
        this.Type = 'Type' in params ? params.Type : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * CreateLink返回参数结构体
 * @class
 */
class CreateLinkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建链接的媒体 Id。
         * @type {string || null}
         */
        this.MaterialId = null;

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
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportVideoByTemplate返回参数结构体
 * @class
 */
class ExportVideoByTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出任务 Id。
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
 * 输入流信息。
 * @class
 */
class StreamInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流输入类型，取值：
<li>VodPull ： 点播拉流；</li>
<li>LivePull ：直播拉流；</li>
<li>RtmpPush ： 直播推流。</li>
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * 点播拉流信息，当 InputType = VodPull 时必填。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VodPullInputInfo || null}
         */
        this.VodPullInputInfo = null;

        /**
         * 直播拉流信息，当 InputType = LivePull  时必填。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LivePullInputInfo || null}
         */
        this.LivePullInputInfo = null;

        /**
         * 直播推流信息，当 InputType = RtmpPush 时必填。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RtmpPushInputInfo || null}
         */
        this.RtmpPushInputInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputType = 'InputType' in params ? params.InputType : null;

        if (params.VodPullInputInfo) {
            let obj = new VodPullInputInfo();
            obj.deserialize(params.VodPullInputInfo)
            this.VodPullInputInfo = obj;
        }

        if (params.LivePullInputInfo) {
            let obj = new LivePullInputInfo();
            obj.deserialize(params.LivePullInputInfo)
            this.LivePullInputInfo = obj;
        }

        if (params.RtmpPushInputInfo) {
            let obj = new RtmpPushInputInfo();
            obj.deserialize(params.RtmpPushInputInfo)
            this.RtmpPushInputInfo = obj;
        }

    }
}

/**
 * ListMedia返回参数结构体
 * @class
 */
class ListMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的媒体记录总数。
         * @type {number || null}
         */
        this.MaterialTotalCount = null;

        /**
         * 浏览分类路径下的媒体列表信息。
         * @type {Array.<MaterialInfo> || null}
         */
        this.MaterialInfoSet = null;

        /**
         * 浏览分类路径下的一级子类。
         * @type {Array.<ClassInfo> || null}
         */
        this.ClassInfoSet = null;

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
        this.MaterialTotalCount = 'MaterialTotalCount' in params ? params.MaterialTotalCount : null;

        if (params.MaterialInfoSet) {
            this.MaterialInfoSet = new Array();
            for (let z in params.MaterialInfoSet) {
                let obj = new MaterialInfo();
                obj.deserialize(params.MaterialInfoSet[z]);
                this.MaterialInfoSet.push(obj);
            }
        }

        if (params.ClassInfoSet) {
            this.ClassInfoSet = new Array();
            for (let z in params.ClassInfoSet) {
                let obj = new ClassInfo();
                obj.deserialize(params.ClassInfoSet[z]);
                this.ClassInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchMaterial返回参数结构体
 * @class
 */
class SearchMaterialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合记录总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 媒体信息，仅返回基础信息。
         * @type {Array.<MaterialInfo> || null}
         */
        this.MaterialInfoSet = null;

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

        if (params.MaterialInfoSet) {
            this.MaterialInfoSet = new Array();
            for (let z in params.MaterialInfoSet) {
                let obj = new MaterialInfo();
                obj.deserialize(params.MaterialInfoSet[z]);
                this.MaterialInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 云转推输出源信息，包含输出源和输出源转推状态。
 * @class
 */
class StreamConnectOutputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输出源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StreamConnectOutput || null}
         */
        this.StreamConnectOutput = null;

        /**
         * 输出流状态：
<li>On ：开；</li>
<li>Off ：关 。</li>
         * @type {string || null}
         */
        this.PushSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.StreamConnectOutput) {
            let obj = new StreamConnectOutput();
            obj.deserialize(params.StreamConnectOutput)
            this.StreamConnectOutput = obj;
        }
        this.PushSwitch = 'PushSwitch' in params ? params.PushSwitch : null;

    }
}

/**
 * ParseEvent请求参数结构体
 * @class
 */
class ParseEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 回调事件内容。
         * @type {string || null}
         */
        this.EventContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.EventContent = 'EventContent' in params ? params.EventContent : null;

    }
}

/**
 * 空的轨道片段，用来进行时间轴的占位。如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。
 * @class
 */
class EmptyTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 持续时间，单位为秒。
         * @type {number || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * 分类移动事件。
 * @class
 */
class ClassMovedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源分类归属。
         * @type {Entity || null}
         */
        this.SourceOwner = null;

        /**
         * 源分类路径列表。
         * @type {Array.<string> || null}
         */
        this.SourceClassPathSet = null;

        /**
         * 目标分类归属。
         * @type {Entity || null}
         */
        this.DestinationOwner = null;

        /**
         * 目标分类归属。
         * @type {string || null}
         */
        this.DestinationClassPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SourceOwner) {
            let obj = new Entity();
            obj.deserialize(params.SourceOwner)
            this.SourceOwner = obj;
        }
        this.SourceClassPathSet = 'SourceClassPathSet' in params ? params.SourceClassPathSet : null;

        if (params.DestinationOwner) {
            let obj = new Entity();
            obj.deserialize(params.DestinationOwner)
            this.DestinationOwner = obj;
        }
        this.DestinationClassPath = 'DestinationClassPath' in params ? params.DestinationClassPath : null;

    }
}

/**
 * DeleteVideoEncodingPreset请求参数结构体
 * @class
 */
class DeleteVideoEncodingPresetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 要删除的视频编码配置 ID。
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 媒体导入事件
 * @class
 */
class MaterialImportedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导入的媒体信息列表。
         * @type {Array.<ImportMediaInfo> || null}
         */
        this.MediaInfoSet = null;

        /**
         * 媒体归属。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 媒体分类路径。
         * @type {string || null}
         */
        this.ClassPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MediaInfoSet) {
            this.MediaInfoSet = new Array();
            for (let z in params.MediaInfoSet) {
                let obj = new ImportMediaInfo();
                obj.deserialize(params.MediaInfoSet[z]);
                this.MediaInfoSet.push(obj);
            }
        }

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;

    }
}

/**
 * ModifyVideoEncodingPreset返回参数结构体
 * @class
 */
class ModifyVideoEncodingPresetResponse extends  AbstractModel {
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
 * DescribeJoinTeams请求参数结构体
 * @class
 */
class DescribeJoinTeamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 团队成员　ID。
         * @type {string || null}
         */
        this.MemberId = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：30，最大值：30。
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
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 点播转直播输入断流信息。
 * @class
 */
class MediaCastSourceInterruptInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发生断流的输入源信息。
         * @type {MediaCastSourceInfo || null}
         */
        this.SourceInfo = null;

        /**
         * 输入源断开原因。取值有：
<li>SystemError：系统错误；</li>
<li>Unknown：未知错误。</li>
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SourceInfo) {
            let obj = new MediaCastSourceInfo();
            obj.deserialize(params.SourceInfo)
            this.SourceInfo = obj;
        }
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * 视频拆条项目的输入信息。
 * @class
 */
class VideoSegmentationProjectInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画布宽高比，取值有：
<li>16:9；</li>
<li>9:16；</li>
<li>2:1。</li>
默认值 16:9 。
         * @type {string || null}
         */
        this.AspectRatio = null;

        /**
         * 视频拆条处理模型，不填则默认为手工分割视频。取值 ：
<li>AI.GameHighlights.PUBG：和平精英集锦 ;</li>
<li>AI.GameHighlights.Honor OfKings：王者荣耀集锦 ;</li>
<li>AI.SportHighlights.Football：足球集锦 </li>
<li>AI.SportHighlights.Basketball：篮球集锦 ；</li>
<li>AI.PersonSegmentation：人物集锦  ;</li>
<li>AI.NewsSegmentation：新闻拆条。</li>
         * @type {string || null}
         */
        this.ProcessModel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;
        this.ProcessModel = 'ProcessModel' in params ? params.ProcessModel : null;

    }
}

/**
 * DeleteMaterial请求参数结构体
 * @class
 */
class DeleteMaterialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 媒体 Id。
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验媒体删除权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * ModifyProject返回参数结构体
 * @class
 */
class ModifyProjectResponse extends  AbstractModel {
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
 * CreateProject返回参数结构体
 * @class
 */
class CreateProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 Id。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * <li> 当 Catagory 为 STREAM_CONNECT 时，数组返回长度为2 ，第0个代表主输入源推流信息，第1个代表备输入源推流信息。只有当各自输入源类型为推流时才有有效内容。</li>
         * @type {Array.<RtmpPushInputInfo> || null}
         */
        this.RtmpPushInputInfoSet = null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.RtmpPushInputInfoSet) {
            this.RtmpPushInputInfoSet = new Array();
            for (let z in params.RtmpPushInputInfoSet) {
                let obj = new RtmpPushInputInfo();
                obj.deserialize(params.RtmpPushInputInfoSet[z]);
                this.RtmpPushInputInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 视频编辑项目输入参数
 * @class
 */
class VideoEditProjectInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画布宽高比，取值有：
<li>16:9；</li>
<li>9:16；</li>
<li>2:1。</li>
默认值 16:9 。
         * @type {string || null}
         */
        this.AspectRatio = null;

        /**
         * 视频编辑模板媒体 ID ，通过模板媒体导入项目轨道数据时填写。
         * @type {string || null}
         */
        this.VideoEditTemplateId = null;

        /**
         * 输入的媒体轨道列表，包括视频、音频，等媒体组成的多个轨道信息。其中：<li>输入的多个轨道在时间轴上和输出媒体文件的时间轴对齐；</li><li>时间轴上相同时间点的各个轨道的素材进行重叠，视频或者图片按轨道顺序进行图像的叠加，轨道顺序高的素材叠加在上面，音频素材进行混音；</li><li>视频、音频，每一种类型的轨道最多支持10个。</li>
注：当从模板导入项目时（即 VideoEditTemplateId 不为空时），该参数无效。
         * @type {Array.<MediaTrack> || null}
         */
        this.InitTracks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;
        this.VideoEditTemplateId = 'VideoEditTemplateId' in params ? params.VideoEditTemplateId : null;

        if (params.InitTracks) {
            this.InitTracks = new Array();
            for (let z in params.InitTracks) {
                let obj = new MediaTrack();
                obj.deserialize(params.InitTracks[z]);
                this.InitTracks.push(obj);
            }
        }

    }
}

/**
 * DeleteProject返回参数结构体
 * @class
 */
class DeleteProjectResponse extends  AbstractModel {
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
 * 视频编码配置中的视频设置信息
 * @class
 */
class VideoEncodingPresetVideoSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频流的编码格式，可选值：
<li>H264：H.264 编码。</li>
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 视频短边尺寸，取值范围： [128, 4096]，单位：px。
视频最后的分辨率，根据短边尺寸和宽高比进行计算。
例：如果项目的宽高比是 16：9 ：
<li>短边尺寸为 1080，则导出视频的分辨率为 1920 * 1080。</li>
<li>短边尺寸为 720，则导出视频的分辨率为 1280 * 720。</li>
如果项目的宽高比是 9：16 ：
<li>短边尺寸为 1080，则导出视频的分辨率为 1080 * 1920。</li>
<li>短边尺寸为 720，则导出视频的分辨率为 720 * 1280。</li>
默认值：1080。
         * @type {number || null}
         */
        this.ShortEdge = null;

        /**
         * 指定码率，单位 bps。当该参数为'0'时则不强制限定码率。
默认值：0。
         * @type {number || null}
         */
        this.Bitrate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.ShortEdge = 'ShortEdge' in params ? params.ShortEdge : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;

    }
}

/**
 * 雪碧图
 * @class
 */
class MediaImageSpriteInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 雪碧图小图的高度。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 雪碧图小图的宽度。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 雪碧图小图的总数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 截取雪碧图输出的地址。
         * @type {Array.<string> || null}
         */
        this.ImageUrlSet = null;

        /**
         * 雪碧图子图位置与时间关系的 WebVtt 文件地址。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。
         * @type {string || null}
         */
        this.WebVttUrl = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ImageUrlSet = 'ImageUrlSet' in params ? params.ImageUrlSet : null;
        this.WebVttUrl = 'WebVttUrl' in params ? params.WebVttUrl : null;

    }
}

/**
 * DeleteClass请求参数结构体
 * @class
 */
class DeleteClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 分类路径。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * CreateLink请求参数结构体
 * @class
 */
class CreateLinkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 链接类型，可取值有:
<li>CLASS: 分类链接；</li>
<li> MATERIAL：媒体文件链接。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 链接名称，不能超过30个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 链接归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 目标资源Id。可取值有：
<li>当 Type 为 MATERIAL 时填媒体 ID；</li>
<li>当 Type 为 CLASS 时填写分类路径。</li>
         * @type {string || null}
         */
        this.DestinationId = null;

        /**
         * 目标资源归属者。
         * @type {Entity || null}
         */
        this.DestinationOwner = null;

        /**
         * 链接的分类路径，如填"/a/b"则代表链接属于该分类路径，不填则默认为根路径。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以创建任意源及目标资源的链接。如果指定操作者，则操作者必须对源资源有读权限，对目标媒体有写权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.DestinationId = 'DestinationId' in params ? params.DestinationId : null;

        if (params.DestinationOwner) {
            let obj = new Entity();
            obj.deserialize(params.DestinationOwner)
            this.DestinationOwner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * CreateClass请求参数结构体
 * @class
 */
class CreateClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 分类路径。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验分类创建权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeMaterials返回参数结构体
 * @class
 */
class DescribeMaterialsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体列表信息。
         * @type {Array.<MaterialInfo> || null}
         */
        this.MaterialInfoSet = null;

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

        if (params.MaterialInfoSet) {
            this.MaterialInfoSet = new Array();
            for (let z in params.MaterialInfoSet) {
                let obj = new MaterialInfo();
                obj.deserialize(params.MaterialInfoSet[z]);
                this.MaterialInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateVideoEncodingPreset返回参数结构体
 * @class
 */
class CreateVideoEncodingPresetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板 ID。
         * @type {number || null}
         */
        this.Id = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 视频编码配置的视频设置更新信息
 * @class
 */
class VideoEncodingPresetVideoSettingForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频短边尺寸，取值范围： [128, 4096]，单位：px。
视频最后的分辨率，根据短边尺寸和宽高比进行计算。
例：如果项目的宽高比是 16：9 ：
<li>短边尺寸为 1080，则导出视频的分辨率为 1920 * 1080。</li>
<li>短边尺寸为 720，则导出视频的分辨率为 1280 * 720。</li>
如果项目的宽高比是 9：16 ：
<li>短边尺寸为 1080，则导出视频的分辨率为 1080 * 1920。</li>
<li>短边尺寸为 720，则导出视频的分辨率为 720 * 1280。</li>
不填则不修改。
         * @type {number || null}
         */
        this.ShortEdge = null;

        /**
         * 指定码率，单位 bps。当该参数为'0' 时则不强制限定码率。
不填则不修改。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 指定帧率。单位 Hz。
不填则不修改。
         * @type {number || null}
         */
        this.FrameRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShortEdge = 'ShortEdge' in params ? params.ShortEdge : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.FrameRate = 'FrameRate' in params ? params.FrameRate : null;

    }
}

/**
 * GrantResourceAuthorization返回参数结构体
 * @class
 */
class GrantResourceAuthorizationResponse extends  AbstractModel {
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
 * 导播台主监输出配置信息
 * @class
 */
class SwitcherPgmOutputConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导播台输出模板 ID，可取值：
<li>10001：分辨率为1080 P；</li>
<li>10002：分辨率为720 P；</li>
<li>10003：分辨率为480 P。</li>
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 导播台输出宽，单位：像素。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 导播台输出高，单位：像素。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 导播台输出帧率，单位：帧/秒
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 导播台输出码率， 单位：bit/s。
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.BitRate = 'BitRate' in params ? params.BitRate : null;

    }
}

/**
 * 用于描述资源
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型，取值有：
<li>MATERIAL：素材。</li>
<li>CLASS：分类。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 资源 Id，当 Type 为 MATERIAL 时，取值为素材 Id；当 Type 为 CLASS 时，取值为分类路径 ClassPath。
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 多媒体创作引擎导出信息。
 * @class
 */
class CMEExportInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出媒体归属，个人或团队。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 导出的媒体名称，不得超过30个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 导出的媒体信息，不得超过50个字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 导出的媒体分类路径，长度不能超过15字符。不存在默认创建。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 导出的媒体标签，单个标签不得超过10个字符。
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * 第三方平台发布信息列表。暂未正式对外，请勿使用。
         * @type {Array.<ThirdPartyPublishInfo> || null}
         */
        this.ThirdPartyPublishInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;

        if (params.ThirdPartyPublishInfos) {
            this.ThirdPartyPublishInfos = new Array();
            for (let z in params.ThirdPartyPublishInfos) {
                let obj = new ThirdPartyPublishInfo();
                obj.deserialize(params.ThirdPartyPublishInfos[z]);
                this.ThirdPartyPublishInfos.push(obj);
            }
        }

    }
}

/**
 * MoveResource请求参数结构体
 * @class
 */
class MoveResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 待移动的原始资源信息，包含原始媒体或分类资源，以及资源归属。
         * @type {ResourceInfo || null}
         */
        this.SourceResource = null;

        /**
         * 目标信息，包含分类及归属，仅支持移动资源到分类。
         * @type {ResourceInfo || null}
         */
        this.DestinationResource = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以移动任务资源。如果指定操作者，则操作者必须对源及目标资源有写权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;

        if (params.SourceResource) {
            let obj = new ResourceInfo();
            obj.deserialize(params.SourceResource)
            this.SourceResource = obj;
        }

        if (params.DestinationResource) {
            let obj = new ResourceInfo();
            obj.deserialize(params.DestinationResource)
            this.DestinationResource = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 直播拉流信息
 * @class
 */
class LivePullInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播拉流地址。
         * @type {string || null}
         */
        this.InputUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputUrl = 'InputUrl' in params ? params.InputUrl : null;

    }
}

/**
 * ImportMediaToProject请求参数结构体
 * @class
 */
class ImportMediaToProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 项目 Id。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 导入媒资类型，取值：
<li>VOD：云点播文件；</li>
<li>EXTERNAL：媒资绑定。</li>

注意：如果不填默认为云点播文件，如果媒体存储在非腾讯云点播中，都需要使用媒资绑定。
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 云点播媒资文件 Id，当 SourceType 取值 VOD 或者缺省的时候必填。
         * @type {string || null}
         */
        this.VodFileId = null;

        /**
         * 原始媒资文件信息，当 SourceType 取值 EXTERNAL 的时候必填。
         * @type {ExternalMediaInfo || null}
         */
        this.ExternalMediaInfo = null;

        /**
         * 媒体名称，不能超过30个字符。如果不填，则媒体名称为点播媒资文件名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 媒体预处理配置 ID，取值：
<li>10：进行视频编辑预处理。</li>

注意：如果填0或者不填则不进行处理，如果原始视频不可在浏览器直接播放将无法在编辑页面编辑。
         * @type {number || null}
         */
        this.PreProcessDefinition = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以向所有视频编辑项目导入媒体；如果指定操作者，则操作者必须为项目所有者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;

        if (params.ExternalMediaInfo) {
            let obj = new ExternalMediaInfo();
            obj.deserialize(params.ExternalMediaInfo)
            this.ExternalMediaInfo = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.PreProcessDefinition = 'PreProcessDefinition' in params ? params.PreProcessDefinition : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 云点播导出信息。
 * @class
 */
class VODExportInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出的媒资名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 导出的媒资分类 Id。
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * 第三方平台发布信息列表。暂未正式对外，请勿使用。
         * @type {Array.<ThirdPartyPublishInfo> || null}
         */
        this.ThirdPartyPublishInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;

        if (params.ThirdPartyPublishInfos) {
            this.ThirdPartyPublishInfos = new Array();
            for (let z in params.ThirdPartyPublishInfos) {
                let obj = new ThirdPartyPublishInfo();
                obj.deserialize(params.ThirdPartyPublishInfos[z]);
                this.ThirdPartyPublishInfos.push(obj);
            }
        }

    }
}

/**
 * 排序
 * @class
 */
class SortBy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段。
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 排序方式，可选值：Asc（升序）、Desc（降序），默认降序。
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 企鹅号发布信息。
 * @class
 */
class PenguinMediaPlatformPublishInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频发布标题。
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 视频发布描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 视频标签。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 视频分类，详见[企鹅号官网](https://open.om.qq.com/resources/resourcesCenter)视频分类。
         * @type {number || null}
         */
        this.Category = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Category = 'Category' in params ? params.Category : null;

    }
}

/**
 * 图片素材信息
 * @class
 */
class ImageMaterial extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片高度，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 图片宽度，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 素材媒体文件的展示 URL 地址。
         * @type {string || null}
         */
        this.MaterialUrl = null;

        /**
         * 图片大小，单位：字节。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 素材媒体文件的原始 URL 地址。
         * @type {string || null}
         */
        this.OriginalUrl = null;

        /**
         * 云点播媒资 FileId。
         * @type {string || null}
         */
        this.VodFileId = null;

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
        this.MaterialUrl = 'MaterialUrl' in params ? params.MaterialUrl : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.OriginalUrl = 'OriginalUrl' in params ? params.OriginalUrl : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;

    }
}

/**
 * DescribeClass请求参数结构体
 * @class
 */
class DescribeClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeSharedSpace返回参数结构体
 * @class
 */
class DescribeSharedSpaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询到的共享空间总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 各个共享空间对应的授权者信息。
         * @type {Array.<Authorizer> || null}
         */
        this.AuthorizerSet = null;

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

        if (params.AuthorizerSet) {
            this.AuthorizerSet = new Array();
            for (let z in params.AuthorizerSet) {
                let obj = new Authorizer();
                obj.deserialize(params.AuthorizerSet[z]);
                this.AuthorizerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccounts返回参数结构体
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合搜索条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 账号信息列表。
         * @type {Array.<AccountInfo> || null}
         */
        this.AccountInfoSet = null;

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

        if (params.AccountInfoSet) {
            this.AccountInfoSet = new Array();
            for (let z in params.AccountInfoSet) {
                let obj = new AccountInfo();
                obj.deserialize(params.AccountInfoSet[z]);
                this.AccountInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MoveResource返回参数结构体
 * @class
 */
class MoveResourceResponse extends  AbstractModel {
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
 * MoveClass请求参数结构体
 * @class
 */
class MoveClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 源分类路径。
         * @type {string || null}
         */
        this.SourceClassPath = null;

        /**
         * 目标分类路径。
         * @type {string || null}
         */
        this.DestinationClassPath = null;

        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.SourceClassPath = 'SourceClassPath' in params ? params.SourceClassPath : null;
        this.DestinationClassPath = 'DestinationClassPath' in params ? params.DestinationClassPath : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 文本类型卡槽信息。
 * @class
 */
class TextSlotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本内容。
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
 * DeleteTeamMembers返回参数结构体
 * @class
 */
class DeleteTeamMembersResponse extends  AbstractModel {
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
 * MoveClass返回参数结构体
 * @class
 */
class MoveClassResponse extends  AbstractModel {
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
 * ImportMediaToProject返回参数结构体
 * @class
 */
class ImportMediaToProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体 Id。
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 媒体预处理任务 ID，如果未指定发起预处理任务则为空。
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
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTeamMember返回参数结构体
 * @class
 */
class ModifyTeamMemberResponse extends  AbstractModel {
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
 * DescribeTeamMembers返回参数结构体
 * @class
 */
class DescribeTeamMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 团队成员列表。
         * @type {Array.<TeamMemberInfo> || null}
         */
        this.MemberSet = null;

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

        if (params.MemberSet) {
            this.MemberSet = new Array();
            for (let z in params.MemberSet) {
                let obj = new TeamMemberInfo();
                obj.deserialize(params.MemberSet[z]);
                this.MemberSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddTeamMember返回参数结构体
 * @class
 */
class AddTeamMemberResponse extends  AbstractModel {
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
 * CreateTeam返回参数结构体
 * @class
 */
class CreateTeamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的团队 ID。
         * @type {string || null}
         */
        this.TeamId = null;

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
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTeam请求参数结构体
 * @class
 */
class ModifyTeamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 团队 ID。
         * @type {string || null}
         */
        this.TeamId = null;

        /**
         * 团队名称。团队名称不能置空，并且不能超过30个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以修改所有团队的信息。如果指定操作者，则操作者必须为团队管理员或者所有者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * ModifyTeamMember请求参数结构体
 * @class
 */
class ModifyTeamMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 团队 ID。
         * @type {string || null}
         */
        this.TeamId = null;

        /**
         * 团队成员 ID。
         * @type {string || null}
         */
        this.MemberId = null;

        /**
         * 成员备注，长度不能超过15个字符。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 成员角色，可取值有：
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以个改任意团队成员的信息。如果指定操作者，则操作者必须为团队的管理员或者所有者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 媒体移动事件
 * @class
 */
class MaterialMovedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要移动的媒体 Id 列表。
         * @type {Array.<string> || null}
         */
        this.MaterialIdSet = null;

        /**
         * 源媒体归属。
         * @type {Entity || null}
         */
        this.SourceOwner = null;

        /**
         * 源媒体分类路径。
         * @type {string || null}
         */
        this.SourceClassPath = null;

        /**
         * 目标媒体分类归属。
         * @type {Entity || null}
         */
        this.DestinationOwner = null;

        /**
         * 目标媒体分类路径。
         * @type {string || null}
         */
        this.DestinationClassPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialIdSet = 'MaterialIdSet' in params ? params.MaterialIdSet : null;

        if (params.SourceOwner) {
            let obj = new Entity();
            obj.deserialize(params.SourceOwner)
            this.SourceOwner = obj;
        }
        this.SourceClassPath = 'SourceClassPath' in params ? params.SourceClassPath : null;

        if (params.DestinationOwner) {
            let obj = new Entity();
            obj.deserialize(params.DestinationOwner)
            this.DestinationOwner = obj;
        }
        this.DestinationClassPath = 'DestinationClassPath' in params ? params.DestinationClassPath : null;

    }
}

/**
 * CreateTeam请求参数结构体
 * @class
 */
class CreateTeamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 团队名称，限30个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 团队所有者，指定用户 ID。
         * @type {string || null}
         */
        this.OwnerId = null;

        /**
         * 团队所有者的备注，限30个字符。
         * @type {string || null}
         */
        this.OwnerRemark = null;

        /**
         * 自定义团队 ID。创建后不可修改，限20个英文字符及"-"。同时不能以 cmetid_开头。不填会生成默认团队 ID。
         * @type {string || null}
         */
        this.TeamId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OwnerId = 'OwnerId' in params ? params.OwnerId : null;
        this.OwnerRemark = 'OwnerRemark' in params ? params.OwnerRemark : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;

    }
}

/**
 * 媒体基本信息。
 * @class
 */
class MaterialBasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体 Id。
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 媒体类型，取值为：
<li> AUDIO :音频;</li>
<li> VIDEO :视频;</li>
<li> IMAGE :图片;</li>
<li> LINK  :链接.</li>
<li> OTHER : 其他.</li>
         * @type {string || null}
         */
        this.MaterialType = null;

        /**
         * 媒体归属实体。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 媒体名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 媒体文件的创建时间，使用 ISO 日期格式。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 媒体文件的最近更新时间（如修改视频属性、发起视频处理等会触发更新媒体文件信息的操作），使用 ISO 日期格式。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 媒体的分类路径。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 预置标签列表。
         * @type {Array.<PresetTagInfo> || null}
         */
        this.PresetTagSet = null;

        /**
         * 人工标签列表。
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * 媒体文件的预览图。
         * @type {string || null}
         */
        this.PreviewUrl = null;

        /**
         * 媒体绑定的标签信息列表 。
该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MaterialTagInfo> || null}
         */
        this.TagInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.MaterialType = 'MaterialType' in params ? params.MaterialType : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;

        if (params.PresetTagSet) {
            this.PresetTagSet = new Array();
            for (let z in params.PresetTagSet) {
                let obj = new PresetTagInfo();
                obj.deserialize(params.PresetTagSet[z]);
                this.PresetTagSet.push(obj);
            }
        }
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.PreviewUrl = 'PreviewUrl' in params ? params.PreviewUrl : null;

        if (params.TagInfoSet) {
            this.TagInfoSet = new Array();
            for (let z in params.TagInfoSet) {
                let obj = new MaterialTagInfo();
                obj.deserialize(params.TagInfoSet[z]);
                this.TagInfoSet.push(obj);
            }
        }

    }
}

/**
 * 视频导出完成事件。
 * @class
 */
class VideoExportCompletedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 Id。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务状态，取值有：
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，取值有：
<li>0：成功；</li>
<li>其他值：失败。</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoEditProjectOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.Output) {
            let obj = new VideoEditProjectOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 资源信息，包含资源以及归属信息
 * @class
 */
class ResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒资和分类资源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Resource || null}
         */
        this.Resource = null;

        /**
         * 资源归属，个人或团队。
         * @type {Entity || null}
         */
        this.Owner = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Resource) {
            let obj = new Resource();
            obj.deserialize(params.Resource)
            this.Resource = obj;
        }

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }

    }
}

/**
 * 媒体处理视频合成任务的预处理操作。
 * @class
 */
class MediaPreprocessOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预处理操作的类型，取值范围：
<li>ImageTextMask：图片文字遮罩。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 预处理操作参数。
当 Type 取值 ImageTextMask 时，参数为要保留的文字。
         * @type {Array.<string> || null}
         */
        this.Args = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Args = 'Args' in params ? params.Args : null;

    }
}

/**
 * 云转推输出断流信息
 * @class
 */
class StreamConnectOutputInterruptInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云转推输出标识。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 云转推输出名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 云转推输出地址。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 加入的团队信息
 * @class
 */
class JoinTeamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 团队 ID。
         * @type {string || null}
         */
        this.TeamId = null;

        /**
         * 团队名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 团队成员个数。
         * @type {number || null}
         */
        this.MemberCount = null;

        /**
         * 成员在团队中的角色，取值有：
<li>Owner：团队所有者，添加团队成员及修改团队成员解决时不能填此角色；</li>
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MemberCount = 'MemberCount' in params ? params.MemberCount : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DescribeResourceAuthorization请求参数结构体
 * @class
 */
class DescribeResourceAuthorizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 资源。
         * @type {Resource || null}
         */
        this.Resource = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以查询任意资源的被授权情况。如果指定操作者，则操作者必须对被授权资源有读权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }

        if (params.Resource) {
            let obj = new Resource();
            obj.deserialize(params.Resource)
            this.Resource = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * CreateClass返回参数结构体
 * @class
 */
class CreateClassResponse extends  AbstractModel {
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
 * 卡槽信息。
 * @class
 */
class SlotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卡槽 Id。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 卡槽类型，可取值有：
<li> AUDIO：音频卡槽，可替换素材类型为 AUDIO 的音频素材;</li>
<li> VIDEO：视频卡槽，可替换素材类型为 VIDEO 的视频素材;</li>
<li> IMAGE：图片卡槽，可替换素材类型为 IMAGE 的图片素材;</li>
<li> TEXT：文本卡槽，可替换文本内容。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 默认素材ID。当卡槽类型为 AUDIO，VIDEO，或 IMAGE 中的一种时有效。
         * @type {string || null}
         */
        this.DefaultMaterialId = null;

        /**
         * 默认文本卡槽信息。当卡槽类型为 TEXT 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TextSlotInfo || null}
         */
        this.DefaultTextSlotInfo = null;

        /**
         * 素材时长，单位秒。
         * @type {number || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DefaultMaterialId = 'DefaultMaterialId' in params ? params.DefaultMaterialId : null;

        if (params.DefaultTextSlotInfo) {
            let obj = new TextSlotInfo();
            obj.deserialize(params.DefaultTextSlotInfo)
            this.DefaultTextSlotInfo = obj;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * 媒体替换信息。
 * @class
 */
class MediaReplacementInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 替换的媒体类型，取值有：
<li>CMEMaterialId：替换的媒体类型为媒体 ID；</li>
<li>ImageUrl：替换的媒体类型为图片 URL；</li>

注：默认为 CMEMaterialId 。
         * @type {string || null}
         */
        this.MediaType = null;

        /**
         * 媒体 ID。
当媒体类型取值为 CMEMaterialId 时有效。
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 媒体 URL。
当媒体类型取值为 ImageUrl 时有效，
图片仅支持 jpg、png 格式，且大小不超过 2M 。
         * @type {string || null}
         */
        this.MediaUrl = null;

        /**
         * 替换媒体选取的开始时间，单位为秒，默认为 0。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 预处理操作。
注：目前该功能暂不支持，请勿使用。
         * @type {MediaPreprocessOperation || null}
         */
        this.PreprocessOperation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaType = 'MediaType' in params ? params.MediaType : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.MediaUrl = 'MediaUrl' in params ? params.MediaUrl : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;

        if (params.PreprocessOperation) {
            let obj = new MediaPreprocessOperation();
            obj.deserialize(params.PreprocessOperation)
            this.PreprocessOperation = obj;
        }

    }
}

/**
 * 任务基础信息。
 * @class
 */
class TaskBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 Id。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务类型，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：项目导出。</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务状态，取值有：
<li>PROCESSING：处理中：</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务进度，取值为：0~100。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 错误码。
<li>0：成功；</li>
<li>其他值：失败。</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 创建时间，格式按照 ISO 8601 标准表示。
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 录制回放项目输入信息。
 * @class
 */
class RecordReplayProjectInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制拉流地址。
         * @type {string || null}
         */
        this.PullStreamUrl = null;

        /**
         * 录制文件归属者。
         * @type {Entity || null}
         */
        this.MaterialOwner = null;

        /**
         * 录制文件存储分类路径。
         * @type {string || null}
         */
        this.MaterialClassPath = null;

        /**
         * 回放推流地址。
         * @type {string || null}
         */
        this.PushStreamUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PullStreamUrl = 'PullStreamUrl' in params ? params.PullStreamUrl : null;

        if (params.MaterialOwner) {
            let obj = new Entity();
            obj.deserialize(params.MaterialOwner)
            this.MaterialOwner = obj;
        }
        this.MaterialClassPath = 'MaterialClassPath' in params ? params.MaterialClassPath : null;
        this.PushStreamUrl = 'PushStreamUrl' in params ? params.PushStreamUrl : null;

    }
}

/**
 * 视频流信息。
 * @class
 */
class VideoStreamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码率，单位：bps。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 高度，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 宽度，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 编码格式。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 帧率，单位：hz。
         * @type {number || null}
         */
        this.Fps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

    }
}

/**
 * AddTeamMember请求参数结构体
 * @class
 */
class AddTeamMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 团队 ID。
         * @type {string || null}
         */
        this.TeamId = null;

        /**
         * 要添加的成员列表，一次最多添加30个成员。
         * @type {Array.<AddMemberInfo> || null}
         */
        this.TeamMembers = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以向任意团队中添加成员。如果指定操作者，则操作者必须为管理员或者团队所有者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;

        if (params.TeamMembers) {
            this.TeamMembers = new Array();
            for (let z in params.TeamMembers) {
                let obj = new AddMemberInfo();
                obj.deserialize(params.TeamMembers[z]);
                this.TeamMembers.push(obj);
            }
        }
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * GrantResourceAuthorization请求参数结构体
 * @class
 */
class GrantResourceAuthorizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 资源归属者，个人或者团队。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 被授权资源。
         * @type {Array.<Resource> || null}
         */
        this.Resources = null;

        /**
         * 被授权目标，个人或者团队。
         * @type {Array.<Entity> || null}
         */
        this.Authorizees = null;

        /**
         * 详细授权值。 取值有：
<li>R：可读，可以浏览媒体，但不能使用该媒体文件（将其添加到 Project），或复制到自己的媒资库中</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
         * @type {Array.<string> || null}
         */
        this.Permissions = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以授权任意归属者的资源。如果指定操作者，则操作者必须对资源拥有写权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new Resource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }

        if (params.Authorizees) {
            this.Authorizees = new Array();
            for (let z in params.Authorizees) {
                let obj = new Entity();
                obj.deserialize(params.Authorizees[z]);
                this.Authorizees.push(obj);
            }
        }
        this.Permissions = 'Permissions' in params ? params.Permissions : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 时间范围
 * @class
 */
class TimeRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 第三方平台视频发布信息。
 * @class
 */
class ThirdPartyPublishInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布通道  ID。
         * @type {string || null}
         */
        this.ChannelMaterialId = null;

        /**
         * 企鹅号发布信息，如果使用的发布通道为企鹅号时必填。
         * @type {PenguinMediaPlatformPublishInfo || null}
         */
        this.PenguinMediaPlatformPublishInfo = null;

        /**
         * 新浪微博发布信息，如果使用的发布通道为新浪微博时必填。
         * @type {WeiboPublishInfo || null}
         */
        this.WeiboPublishInfo = null;

        /**
         * 快手发布信息，如果使用的发布通道为快手时必填。
         * @type {KuaishouPublishInfo || null}
         */
        this.KuaishouPublishInfo = null;

        /**
         * 腾讯云对象存储发布信息， 如果使用的发布通道为腾讯云对象存储时必填。
         * @type {CosPublishInputInfo || null}
         */
        this.CosPublishInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMaterialId = 'ChannelMaterialId' in params ? params.ChannelMaterialId : null;

        if (params.PenguinMediaPlatformPublishInfo) {
            let obj = new PenguinMediaPlatformPublishInfo();
            obj.deserialize(params.PenguinMediaPlatformPublishInfo)
            this.PenguinMediaPlatformPublishInfo = obj;
        }

        if (params.WeiboPublishInfo) {
            let obj = new WeiboPublishInfo();
            obj.deserialize(params.WeiboPublishInfo)
            this.WeiboPublishInfo = obj;
        }

        if (params.KuaishouPublishInfo) {
            let obj = new KuaishouPublishInfo();
            obj.deserialize(params.KuaishouPublishInfo)
            this.KuaishouPublishInfo = obj;
        }

        if (params.CosPublishInfo) {
            let obj = new CosPublishInputInfo();
            obj.deserialize(params.CosPublishInfo)
            this.CosPublishInfo = obj;
        }

    }
}

/**
 * ListMedia请求参数结构体
 * @class
 */
class ListMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 媒体分类路径，例如填写"/a/b"，则代表浏览该分类路径下的媒体和子分类信息。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 媒体和分类的归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以浏览任意分类的信息。如果指定操作者，则操作者必须对分类有读权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DeleteVideoEncodingPreset返回参数结构体
 * @class
 */
class DeleteVideoEncodingPresetResponse extends  AbstractModel {
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
 * 点播拉流信息，包括输入拉流地址和播放次数。
 * @class
 */
class VodPullInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点播输入拉流 URL 。
         * @type {Array.<string> || null}
         */
        this.InputUrls = null;

        /**
         * 播放次数，取值有：
<li>-1 : 循环播放，直到转推结束；</li>
<li>0 : 不循环；</li>
<li>大于0 : 具体循环次数，次数和时间以先结束的为准。</li>
默认不循环。
         * @type {number || null}
         */
        this.LoopTimes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputUrls = 'InputUrls' in params ? params.InputUrls : null;
        this.LoopTimes = 'LoopTimes' in params ? params.LoopTimes : null;

    }
}

/**
 * ModifyTeam返回参数结构体
 * @class
 */
class ModifyTeamResponse extends  AbstractModel {
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
 * DeleteLoginStatus请求参数结构体
 * @class
 */
class DeleteLoginStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 用户 Id 列表，N 从 0 开始取值，最大 19。
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * GenerateVideoSegmentationSchemeByAi请求参数结构体
 * @class
 */
class GenerateVideoSegmentationSchemeByAiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 视频拆条项目 Id 。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以对任务视频拆条项目发起拆条任务。如果指定操作者，则操作者必须为项目所有者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 直播剪辑项目输入参数。
 * @class
 */
class LiveStreamClipProjectInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播流播放地址，目前仅支持 HLS 和 FLV 格式。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 直播流录制时长，单位为秒，最大值为 7200。
         * @type {number || null}
         */
        this.StreamRecordDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.StreamRecordDuration = 'StreamRecordDuration' in params ? params.StreamRecordDuration : null;

    }
}

/**
 * 媒体更新事件。
 * @class
 */
class MaterialModifiedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体 Id。
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 更新后的媒体名称。如未更新则为空。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 更新后的媒体预置标签列表。如未更新媒体预置标签，则该字段为空数组。
         * @type {Array.<string> || null}
         */
        this.PresetTagIdSet = null;

        /**
         * 更新后的媒体自定义标签列表。如未更新媒体自定义标签，则该字段为空数组。
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PresetTagIdSet = 'PresetTagIdSet' in params ? params.PresetTagIdSet : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;

    }
}

/**
 * HandleStreamConnectProject返回参数结构体
 * @class
 */
class HandleStreamConnectProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入源推流地址，当 Operation 取值 AddInput 且 InputType 为 RtmpPush 类型时有效。
         * @type {string || null}
         */
        this.StreamInputRtmpPushUrl = null;

        /**
         * 点播输入源播放进度信息，当 Operation 取值 DescribeInputPlayInfo 且 InputType 为 VodPull 类型时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VodPullInputPlayInfo || null}
         */
        this.VodPullInputPlayInfo = null;

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
        this.StreamInputRtmpPushUrl = 'StreamInputRtmpPushUrl' in params ? params.StreamInputRtmpPushUrl : null;

        if (params.VodPullInputPlayInfo) {
            let obj = new VodPullInputPlayInfo();
            obj.deserialize(params.VodPullInputPlayInfo)
            this.VodPullInputPlayInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTeamMembers请求参数结构体
 * @class
 */
class DeleteTeamMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 团队 ID。
         * @type {string || null}
         */
        this.TeamId = null;

        /**
         * 要删除的成员列表。
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以删除所有团队的成员。如果指定操作者，则操作者必须为团队管理员或者所有者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 点播转直播项目信息。
 * @class
 */
class MediaCastProjectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点播转直播项目状态，取值有：
<li>Working ：运行中；</li>
<li>Idle ：空闲。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 输入源列表。
         * @type {Array.<MediaCastSourceInfo> || null}
         */
        this.SourceInfos = null;

        /**
         * 输出源列表。
         * @type {Array.<MediaCastDestinationInfo> || null}
         */
        this.DestinationInfos = null;

        /**
         * 输出媒体配置。
         * @type {MediaCastOutputMediaSetting || null}
         */
        this.OutputMediaSetting = null;

        /**
         * 播放参数。
         * @type {MediaCastPlaySetting || null}
         */
        this.PlaySetting = null;

        /**
         * 项目启动时间。采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 项目结束时间。采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。如果项目还在运行中，改字段为空。
         * @type {string || null}
         */
        this.StopTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.SourceInfos) {
            this.SourceInfos = new Array();
            for (let z in params.SourceInfos) {
                let obj = new MediaCastSourceInfo();
                obj.deserialize(params.SourceInfos[z]);
                this.SourceInfos.push(obj);
            }
        }

        if (params.DestinationInfos) {
            this.DestinationInfos = new Array();
            for (let z in params.DestinationInfos) {
                let obj = new MediaCastDestinationInfo();
                obj.deserialize(params.DestinationInfos[z]);
                this.DestinationInfos.push(obj);
            }
        }

        if (params.OutputMediaSetting) {
            let obj = new MediaCastOutputMediaSetting();
            obj.deserialize(params.OutputMediaSetting)
            this.OutputMediaSetting = obj;
        }

        if (params.PlaySetting) {
            let obj = new MediaCastPlaySetting();
            obj.deserialize(params.PlaySetting)
            this.PlaySetting = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.StopTime = 'StopTime' in params ? params.StopTime : null;

    }
}

/**
 * ExportVideoByTemplate请求参数结构体
 * @class
 */
class ExportVideoByTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 视频编辑模板  Id。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 导出视频预设配置 Id，推荐优先使用下面的默认预设配置 Id，有其他需求可通过接口定制预设配置。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 导出目标，指定导出视频的目标媒资库，可取值有：
<li>CME：多媒体创作引擎，即导出为多媒体创作引擎媒资库，此导出目标在云点播媒资库依然可见；</li>
<li>VOD：云点播，即导出为云点播媒资库，此导出目标在多媒体创作引擎媒资库将不可见。</li>
         * @type {string || null}
         */
        this.ExportDestination = null;

        /**
         * 需要替换的素材信息。
         * @type {Array.<SlotReplacementInfo> || null}
         */
        this.SlotReplacements = null;

        /**
         * 导出的多媒体创作引擎媒资信息。当导出目标为 CME 时必填。
         * @type {CMEExportInfo || null}
         */
        this.CMEExportInfo = null;

        /**
         * 导出的云点播媒资信息。当导出目标为 VOD 时必填。
         * @type {VODExportInfo || null}
         */
        this.VODExportInfo = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，无权限限制。如果指定操作者，则操作者需要有替换媒体及剪辑模板的权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ExportDestination = 'ExportDestination' in params ? params.ExportDestination : null;

        if (params.SlotReplacements) {
            this.SlotReplacements = new Array();
            for (let z in params.SlotReplacements) {
                let obj = new SlotReplacementInfo();
                obj.deserialize(params.SlotReplacements[z]);
                this.SlotReplacements.push(obj);
            }
        }

        if (params.CMEExportInfo) {
            let obj = new CMEExportInfo();
            obj.deserialize(params.CMEExportInfo)
            this.CMEExportInfo = obj;
        }

        if (params.VODExportInfo) {
            let obj = new VODExportInfo();
            obj.deserialize(params.VODExportInfo)
            this.VODExportInfo = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribePlatforms请求参数结构体
 * @class
 */
class DescribePlatformsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id 列表。如果不填，则不按平台 Id 进行过滤。
         * @type {Array.<string> || null}
         */
        this.Platforms = null;

        /**
         * 平台绑定的 License Id 列表。如果不填，则不按平台绑定的 License Id 进行过滤。
         * @type {Array.<string> || null}
         */
        this.LicenseIds = null;

        /**
         * 分页返回的起始偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回的记录条数，默认值：10，最大值：20。
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
        this.Platforms = 'Platforms' in params ? params.Platforms : null;
        this.LicenseIds = 'LicenseIds' in params ? params.LicenseIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 其他类型素材
 * @class
 */
class OtherMaterial extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材媒体文件的播放 URL 地址。
         * @type {string || null}
         */
        this.MaterialUrl = null;

        /**
         * 云点播媒资 FileId。
         * @type {string || null}
         */
        this.VodFileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialUrl = 'MaterialUrl' in params ? params.MaterialUrl : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;

    }
}

/**
 * 回调事件内容。
 * @class
 */
class EventContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件类型，可取值有：
<li>Storage.NewFileCreated：新文件产生事件；</li>
<li>Project.StreamConnect.StatusChanged：云转推项目状态变更事件；</li>
<li>Project.Switcher.StatusChanged：导播台项目状态变更事件；</li>
<li>Material.Imported：媒体导入事件；</li>
<li>Material.Added：媒体添加事件；</li>
<li>Material.Moved：媒体移动事件；</li>
<li>Material.Modified：媒体变更事件；</li>
<li>Material.Deleted：媒体删除事件；</li>
<li>Class.Created：分类新增事件；</li>
<li>Class.Moved：分类移动事件；</li>
<li>Class.Deleted：分类删除事件；</li>
<li>Task.VideoExportCompleted：视频导出完成事件； </li>
<li>Project.MediaCast.StatusChanged：点播转直播项目状态变更事件。 </li>
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * 操作者，表示触发事件的操作者。如果是 `cmeid_system` 表示平台管理员操作。
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 新文件产生事件。仅当 EventType 为 Storage.NewFileCreated 时有效。
         * @type {StorageNewFileCreatedEvent || null}
         */
        this.StorageNewFileCreatedEvent = null;

        /**
         * 云转推项目状态变更事件。仅当 EventType 为 Project.StreamConnect.StatusChanged 时有效。
         * @type {ProjectStreamConnectStatusChangedEvent || null}
         */
        this.ProjectStreamConnectStatusChangedEvent = null;

        /**
         * 导播台项目状态变更事件。仅当 EventType 为 Project.Switcher.StatusChanged 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProjectSwitcherStatusChangedEvent || null}
         */
        this.ProjectSwitcherStatusChangedEvent = null;

        /**
         * 媒体导入事件。仅当 EventType 为 Material.Imported 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaterialImportedEvent || null}
         */
        this.MaterialImportedEvent = null;

        /**
         * 媒体添加事件。仅当 EventType 为 Material.Added 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaterialAddedEvent || null}
         */
        this.MaterialAddedEvent = null;

        /**
         * 媒体移动事件。仅当 EventType 为 Material.Moved 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaterialMovedEvent || null}
         */
        this.MaterialMovedEvent = null;

        /**
         * 媒体更新事件。仅当 EventType 为 Material.Modified 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaterialModifiedEvent || null}
         */
        this.MaterialModifiedEvent = null;

        /**
         * 媒体删除事件。仅当 EventType 为 Material.Deleted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaterialDeletedEvent || null}
         */
        this.MaterialDeletedEvent = null;

        /**
         * 分类创建事件。仅当 EventType 为 Class.Created 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClassCreatedEvent || null}
         */
        this.ClassCreatedEvent = null;

        /**
         * 分类移动事件。仅当 EventType 为 Class.Moved 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClassMovedEvent || null}
         */
        this.ClassMovedEvent = null;

        /**
         * 分类删除事件。仅当 EventType 为 Class.Deleted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClassDeletedEvent || null}
         */
        this.ClassDeletedEvent = null;

        /**
         * 视频导出完成事件。仅当 EventType 为 Task.VideoExportCompleted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoExportCompletedEvent || null}
         */
        this.VideoExportCompletedEvent = null;

        /**
         * 点播转直播项目状态变更事件。仅当 EventType 为 Project.MediaCast.StatusChanged 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProjectMediaCastStatusChangedEvent || null}
         */
        this.ProjectMediaCastStatusChangedEvent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

        if (params.StorageNewFileCreatedEvent) {
            let obj = new StorageNewFileCreatedEvent();
            obj.deserialize(params.StorageNewFileCreatedEvent)
            this.StorageNewFileCreatedEvent = obj;
        }

        if (params.ProjectStreamConnectStatusChangedEvent) {
            let obj = new ProjectStreamConnectStatusChangedEvent();
            obj.deserialize(params.ProjectStreamConnectStatusChangedEvent)
            this.ProjectStreamConnectStatusChangedEvent = obj;
        }

        if (params.ProjectSwitcherStatusChangedEvent) {
            let obj = new ProjectSwitcherStatusChangedEvent();
            obj.deserialize(params.ProjectSwitcherStatusChangedEvent)
            this.ProjectSwitcherStatusChangedEvent = obj;
        }

        if (params.MaterialImportedEvent) {
            let obj = new MaterialImportedEvent();
            obj.deserialize(params.MaterialImportedEvent)
            this.MaterialImportedEvent = obj;
        }

        if (params.MaterialAddedEvent) {
            let obj = new MaterialAddedEvent();
            obj.deserialize(params.MaterialAddedEvent)
            this.MaterialAddedEvent = obj;
        }

        if (params.MaterialMovedEvent) {
            let obj = new MaterialMovedEvent();
            obj.deserialize(params.MaterialMovedEvent)
            this.MaterialMovedEvent = obj;
        }

        if (params.MaterialModifiedEvent) {
            let obj = new MaterialModifiedEvent();
            obj.deserialize(params.MaterialModifiedEvent)
            this.MaterialModifiedEvent = obj;
        }

        if (params.MaterialDeletedEvent) {
            let obj = new MaterialDeletedEvent();
            obj.deserialize(params.MaterialDeletedEvent)
            this.MaterialDeletedEvent = obj;
        }

        if (params.ClassCreatedEvent) {
            let obj = new ClassCreatedEvent();
            obj.deserialize(params.ClassCreatedEvent)
            this.ClassCreatedEvent = obj;
        }

        if (params.ClassMovedEvent) {
            let obj = new ClassMovedEvent();
            obj.deserialize(params.ClassMovedEvent)
            this.ClassMovedEvent = obj;
        }

        if (params.ClassDeletedEvent) {
            let obj = new ClassDeletedEvent();
            obj.deserialize(params.ClassDeletedEvent)
            this.ClassDeletedEvent = obj;
        }

        if (params.VideoExportCompletedEvent) {
            let obj = new VideoExportCompletedEvent();
            obj.deserialize(params.VideoExportCompletedEvent)
            this.VideoExportCompletedEvent = obj;
        }

        if (params.ProjectMediaCastStatusChangedEvent) {
            let obj = new ProjectMediaCastStatusChangedEvent();
            obj.deserialize(params.ProjectMediaCastStatusChangedEvent)
            this.ProjectMediaCastStatusChangedEvent = obj;
        }

    }
}

/**
 * 视频素材信息
 * @class
 */
class VideoMaterial extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材元信息。
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * 雪碧图信息。
         * @type {MediaImageSpriteInfo || null}
         */
        this.ImageSpriteInfo = null;

        /**
         * 素材媒体文件的播放 URL 地址。
         * @type {string || null}
         */
        this.MaterialUrl = null;

        /**
         * 素材媒体文件的封面图片地址。
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * 媒体文件分辨率。取值为：LD/SD/HD/FHD/2K/4K。
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * 素材状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaterialStatus || null}
         */
        this.MaterialStatus = null;

        /**
         * 素材媒体文件的原始 URL 地址。
         * @type {string || null}
         */
        this.OriginalUrl = null;

        /**
         * 云点播媒资 FileId。
         * @type {string || null}
         */
        this.VodFileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

        if (params.ImageSpriteInfo) {
            let obj = new MediaImageSpriteInfo();
            obj.deserialize(params.ImageSpriteInfo)
            this.ImageSpriteInfo = obj;
        }
        this.MaterialUrl = 'MaterialUrl' in params ? params.MaterialUrl : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

        if (params.MaterialStatus) {
            let obj = new MaterialStatus();
            obj.deserialize(params.MaterialStatus)
            this.MaterialStatus = obj;
        }
        this.OriginalUrl = 'OriginalUrl' in params ? params.OriginalUrl : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;

    }
}

/**
 * DescribeVideoEncodingPresets返回参数结构体
 * @class
 */
class DescribeVideoEncodingPresetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的编码配置总个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 视频编码配置信息。
         * @type {Array.<VideoEncodingPreset> || null}
         */
        this.VideoEncodingPresetSet = null;

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

        if (params.VideoEncodingPresetSet) {
            this.VideoEncodingPresetSet = new Array();
            for (let z in params.VideoEncodingPresetSet) {
                let obj = new VideoEncodingPreset();
                obj.deserialize(params.VideoEncodingPresetSet[z]);
                this.VideoEncodingPresetSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceAuthorization返回参数结构体
 * @class
 */
class DescribeResourceAuthorizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的资源授权记录总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 授权信息列表。
         * @type {Array.<AuthorizationInfo> || null}
         */
        this.AuthorizationInfoSet = null;

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

        if (params.AuthorizationInfoSet) {
            this.AuthorizationInfoSet = new Array();
            for (let z in params.AuthorizationInfoSet) {
                let obj = new AuthorizationInfo();
                obj.deserialize(params.AuthorizationInfoSet[z]);
                this.AuthorizationInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FlattenListMedia返回参数结构体
 * @class
 */
class FlattenListMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 该分类路径下及其子分类下的所有媒体基础信息列表。
         * @type {Array.<MaterialInfo> || null}
         */
        this.MaterialInfoSet = null;

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

        if (params.MaterialInfoSet) {
            this.MaterialInfoSet = new Array();
            for (let z in params.MaterialInfoSet) {
                let obj = new MaterialInfo();
                obj.deserialize(params.MaterialInfoSet[z]);
                this.MaterialInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 制作云用户账号信息。
 * @class
 */
class AccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户 Id。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户手机号码。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 用户昵称。
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * 账号状态，取值：
<li>Normal：有效；</li>
<li>Stopped：无效。</li>
         * @type {string || null}
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeProjects请求参数结构体
 * @class
 */
class DescribeProjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 项目 Id 过滤参数列表，最大支持20个项目 Id 过滤。如果不填不需要项目 Id 进行过滤。
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * 画布宽高比过滤参数列表。如果不填则不用画布宽高比进行过滤。
         * @type {Array.<string> || null}
         */
        this.AspectRatioSet = null;

        /**
         * 项目类型过滤参数列表，取值有：
<li>VIDEO_EDIT：视频编辑。</li>
<li>SWITCHER：导播台。</li>
<li>VIDEO_SEGMENTATION：视频拆条。</li>
<li>STREAM_CONNECT：云转推。</li>
<li>RECORD_REPLAY：录制回放。</li>

注：如果不填则不使用项目类型进行过滤。
         * @type {Array.<string> || null}
         */
        this.CategorySet = null;

        /**
         * 项目模式过滤参数列表，一个项目可以有多种模式并相互切换。
当 Category 为 VIDEO_EDIT 时，可选模式有：
<li>Default：默认模式。</li>
<li>VideoEditTemplate：视频编辑模板制作模式。</li>

注：不填不使用项目模式进行过滤。
         * @type {Array.<string> || null}
         */
        this.Modes = null;

        /**
         * 结果排序方式，支持下列排序字段：
<li>CreateTime：创建时间；</li>
<li>UpdateTime：更新时间。</li>

注：如不填，则使用项目创建时间倒序排列。
         * @type {SortBy || null}
         */
        this.Sort = null;

        /**
         * 项目所有者，目前仅支持个人项目过滤。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 分页返回的起始偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回的记录条数，默认值：10。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以查询一切用户项目信息。如果指定操作者，则操作者必须为项目所有者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.AspectRatioSet = 'AspectRatioSet' in params ? params.AspectRatioSet : null;
        this.CategorySet = 'CategorySet' in params ? params.CategorySet : null;
        this.Modes = 'Modes' in params ? params.Modes : null;

        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * DescribeLoginStatus返回参数结构体
 * @class
 */
class DescribeLoginStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户登录状态列表。
         * @type {Array.<LoginStatusInfo> || null}
         */
        this.LoginStatusInfoSet = null;

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

        if (params.LoginStatusInfoSet) {
            this.LoginStatusInfoSet = new Array();
            for (let z in params.LoginStatusInfoSet) {
                let obj = new LoginStatusInfo();
                obj.deserialize(params.LoginStatusInfoSet[z]);
                this.LoginStatusInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 播放控制参数。
 * @class
 */
class MediaCastPlaySetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 循环播放次数。LoopCount 和 EndTime 同时只能有一个生效。默认循环播放次数为一次。如果同时设置了 LoopCount 和 EndTime 参数，优先使用 LoopCount 参数。
         * @type {number || null}
         */
        this.LoopCount = null;

        /**
         * 结束时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoopCount = 'LoopCount' in params ? params.LoopCount : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 媒体添加事件。
 * @class
 */
class MaterialAddedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加的媒体 Id 列表。
         * @type {Array.<string> || null}
         */
        this.MaterialIdSet = null;

        /**
         * 添加的媒体归属。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 添加的媒体分类路径。
         * @type {string || null}
         */
        this.ClassPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialIdSet = 'MaterialIdSet' in params ? params.MaterialIdSet : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;

    }
}

/**
 * CreateVideoEncodingPreset请求参数结构体
 * @class
 */
class CreateVideoEncodingPresetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 配置名，可用来简单描述该配置的作用。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 封装格式，可选值：
<li>mp4 ；</li>
<li>mov 。</li>
默认值：mp4。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 是否去除视频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * 编码配置的视频设置。默认值参考VideoEncodingPresetVideoSetting 定义。
         * @type {VideoEncodingPresetVideoSetting || null}
         */
        this.VideoSetting = null;

        /**
         * 编码配置的音频设置。默认值参考VideoEncodingPresetAudioSetting 定义。
         * @type {VideoEncodingPresetAudioSetting || null}
         */
        this.AudioSetting = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoSetting) {
            let obj = new VideoEncodingPresetVideoSetting();
            obj.deserialize(params.VideoSetting)
            this.VideoSetting = obj;
        }

        if (params.AudioSetting) {
            let obj = new VideoEncodingPresetAudioSetting();
            obj.deserialize(params.AudioSetting)
            this.AudioSetting = obj;
        }

    }
}

/**
 * 云转推项目状态变更事件。
 * @class
 */
class ProjectStreamConnectStatusChangedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目 Id。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目状态，取值有：
<li>Working：云转推推流开始；</li>
<li>Stopped：云转推推流结束；</li>
<li>InputInterrupted：云转推输入断流；</li>
<li>OutputInterrupted：云转推输出断流。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 云转推输入断流信息，仅当 Status 取值 InputInterrupted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StreamConnectInputInterruptInfo || null}
         */
        this.InputInterruptInfo = null;

        /**
         * 云转推输出断流信息，仅当 Status 取值 OutputInterrupted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StreamConnectOutputInterruptInfo || null}
         */
        this.OutputInterruptInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.InputInterruptInfo) {
            let obj = new StreamConnectInputInterruptInfo();
            obj.deserialize(params.InputInterruptInfo)
            this.InputInterruptInfo = obj;
        }

        if (params.OutputInterruptInfo) {
            let obj = new StreamConnectOutputInterruptInfo();
            obj.deserialize(params.OutputInterruptInfo)
            this.OutputInterruptInfo = obj;
        }

    }
}

/**
 * DescribeJoinTeams返回参数结构体
 * @class
 */
class DescribeJoinTeamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 团队列表。
         * @type {Array.<JoinTeamInfo> || null}
         */
        this.TeamSet = null;

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

        if (params.TeamSet) {
            this.TeamSet = new Array();
            for (let z in params.TeamSet) {
                let obj = new JoinTeamInfo();
                obj.deserialize(params.TeamSet[z]);
                this.TeamSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTeamMembers请求参数结构体
 * @class
 */
class DescribeTeamMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 团队 ID。
         * @type {string || null}
         */
        this.TeamId = null;

        /**
         * 成员 ID 列表，限指定30个指定成员。如不填，则返回指定团队下的所有成员。
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

        /**
         * 分页偏移量，默认值：0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：30，最大值：30。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以拉取任意团队成员的信息。如果指定操作者，则操作者必须为团队成员。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 素材的状态，目前仅包含素材编辑可用状态。
 * @class
 */
class MaterialStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材编辑可用状态，取值有：
<li>NORMAL：正常，可直接用于编辑；</li>
<li>ABNORMAL : 异常，不可用于编辑；</li>
<li>PROCESSING：处理中，暂不可用于编辑。</li>
         * @type {string || null}
         */
        this.EditorUsableStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EditorUsableStatus = 'EditorUsableStatus' in params ? params.EditorUsableStatus : null;

    }
}

/**
 * DescribeProjects返回参数结构体
 * @class
 */
class DescribeProjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 项目信息列表。
         * @type {Array.<ProjectInfo> || null}
         */
        this.ProjectInfoSet = null;

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

        if (params.ProjectInfoSet) {
            this.ProjectInfoSet = new Array();
            for (let z in params.ProjectInfoSet) {
                let obj = new ProjectInfo();
                obj.deserialize(params.ProjectInfoSet[z]);
                this.ProjectInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源权限信息
 * @class
 */
class AuthorizationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被授权者实体。
         * @type {Entity || null}
         */
        this.Authorizee = null;

        /**
         * 详细授权值。 取值有：
<li>R：可读，可以浏览素材，但不能使用该素材（将其添加到 Project），或复制到自己的媒资库中</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
         * @type {Array.<string> || null}
         */
        this.PermissionSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Authorizee) {
            let obj = new Entity();
            obj.deserialize(params.Authorizee)
            this.Authorizee = obj;
        }
        this.PermissionSet = 'PermissionSet' in params ? params.PermissionSet : null;

    }
}

/**
 * 视频编辑模板素材信息。
 * @class
 */
class VideoEditTemplateMaterial extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频编辑模板宽高比。
         * @type {string || null}
         */
        this.AspectRatio = null;

        /**
         * 卡槽信息。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotSet = null;

        /**
         * 模板预览视频 URL 地址 。
         * @type {string || null}
         */
        this.PreviewVideoUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;

        if (params.SlotSet) {
            this.SlotSet = new Array();
            for (let z in params.SlotSet) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotSet[z]);
                this.SlotSet.push(obj);
            }
        }
        this.PreviewVideoUrl = 'PreviewVideoUrl' in params ? params.PreviewVideoUrl : null;

    }
}

/**
 * 视频导出扩展参数
 * @class
 */
class VideoExportExtensionArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * 封装格式，可选值：
<li>mp4 </li>
<li>mov </li>
不填则使用视频导出编码配置。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 视频短边尺寸，取值范围： [128, 4096]，单位：px。
视频最后的分辨率，根据短边尺寸和宽高比进行计算。
例如：项目的宽高比是 16：9 ：
<li>短边尺寸为 1080，则导出视频的分辨率为 1920 * 1080。</li>
<li>短边尺寸为 720，则导出视频的分辨率为 1280 * 720</li>
不填则使用视频导出编码配置。
         * @type {number || null}
         */
        this.ShortEdge = null;

        /**
         * 指定码率，单位 bps。当该参数为 0 时则不强制限定码率。
不填则使用视频导出编码配置。
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * 帧率。取值范围：[15, 60]，不填默认值为 25。
         * @type {number || null}
         */
        this.FrameRate = null;

        /**
         * 是否去除视频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
不填则使用视频导出编码配置。
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
不填则使用视频导出编码配置。
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * 片段起始时间，单位：毫秒。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 片段结束时间，单位：毫秒。
         * @type {number || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Container = 'Container' in params ? params.Container : null;
        this.ShortEdge = 'ShortEdge' in params ? params.ShortEdge : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.FrameRate = 'FrameRate' in params ? params.FrameRate : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 卡槽替换信息。
 * @class
 */
class SlotReplacementInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卡槽 Id。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 替换类型，可取值有：
<li> AUDIO ：音频；</li>
<li> VIDEO ：视频；</li>
<li> IMAGE ：图片；</li>
<li> TEXT ：文本。</li>
注意：这里必须保证替换的素材类型与模板轨道数据的素材类型一致。如果替换的类型为Text,，则必须保证模板轨道数据中相应卡槽的位置标记的是文本。
         * @type {string || null}
         */
        this.ReplacementType = null;

        /**
         * 媒体替换信息，仅当要替换的媒体类型为音频、视频、图片时有效。
         * @type {MediaReplacementInfo || null}
         */
        this.MediaReplacementInfo = null;

        /**
         * 文本替换信息，仅当要替换的卡槽类型为文本时有效。
         * @type {TextReplacementInfo || null}
         */
        this.TextReplacementInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ReplacementType = 'ReplacementType' in params ? params.ReplacementType : null;

        if (params.MediaReplacementInfo) {
            let obj = new MediaReplacementInfo();
            obj.deserialize(params.MediaReplacementInfo)
            this.MediaReplacementInfo = obj;
        }

        if (params.TextReplacementInfo) {
            let obj = new TextReplacementInfo();
            obj.deserialize(params.TextReplacementInfo)
            this.TextReplacementInfo = obj;
        }

    }
}

/**
 * ParseEvent返回参数结构体
 * @class
 */
class ParseEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件内容。
         * @type {EventContent || null}
         */
        this.EventContent = null;

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

        if (params.EventContent) {
            let obj = new EventContent();
            obj.deserialize(params.EventContent)
            this.EventContent = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteMaterial返回参数结构体
 * @class
 */
class DeleteMaterialResponse extends  AbstractModel {
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
 * RevokeResourceAuthorization请求参数结构体
 * @class
 */
class RevokeResourceAuthorizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 资源所属实体。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 被授权资源。
         * @type {Array.<Resource> || null}
         */
        this.Resources = null;

        /**
         * 被授权目标实体。
         * @type {Array.<Entity> || null}
         */
        this.Authorizees = null;

        /**
         * 详细授权值。 取值有：
<li>R：可读，可以浏览素材，但不能使用该素材（将其添加到 Project），或复制到自己的媒资库中</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
         * @type {Array.<string> || null}
         */
        this.Permissions = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，撤销任意资源的授权权限。如果指定操作者，则操作者必须对被授权资源有写权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new Resource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }

        if (params.Authorizees) {
            this.Authorizees = new Array();
            for (let z in params.Authorizees) {
                let obj = new Entity();
                obj.deserialize(params.Authorizees[z]);
                this.Authorizees.push(obj);
            }
        }
        this.Permissions = 'Permissions' in params ? params.Permissions : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

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
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 任务 Id。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以获取任意任务信息。如果指定操作者，则操作者需要是任务发起者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * ModifyVideoEncodingPreset请求参数结构体
 * @class
 */
class ModifyVideoEncodingPresetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 配置 ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 更改后的视频编码配置名，不填则不修改。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否去除视频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * 更改后的编码配置的视频设置。
         * @type {VideoEncodingPresetVideoSettingForUpdate || null}
         */
        this.VideoSetting = null;

        /**
         * 更改后的编码配置的音频设置。
         * @type {VideoEncodingPresetAudioSettingForUpdate || null}
         */
        this.AudioSetting = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoSetting) {
            let obj = new VideoEncodingPresetVideoSettingForUpdate();
            obj.deserialize(params.VideoSetting)
            this.VideoSetting = obj;
        }

        if (params.AudioSetting) {
            let obj = new VideoEncodingPresetAudioSettingForUpdate();
            obj.deserialize(params.AudioSetting)
            this.AudioSetting = obj;
        }

    }
}

/**
 * 团队成员信息
 * @class
 */
class TeamMemberInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 团队成员 ID。
         * @type {string || null}
         */
        this.MemberId = null;

        /**
         * 团队成员备注。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 团队成员角色，取值：
<li>Owner：团队所有者，添加团队成员及修改团队成员解决时不能填此角色；</li>
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * COS 发布信息。
 * @class
 */
class CosPublishInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布生成的对象存储文件所在的 COS Bucket 名，如 TopRankVideo-125xxx88。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 发布生成的对象存储文件所在的 COS Bucket 所属园区，如 ap-chongqing。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 发布生成的视频在 COS 存储的对象键。对象键（ObjectKey）是对象（Object）在存储桶（Bucket）中的唯一标识。
         * @type {string || null}
         */
        this.VideoKey = null;

        /**
         * 发布生成的封面在 COS 存储的对象键。
         * @type {string || null}
         */
        this.CoverKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VideoKey = 'VideoKey' in params ? params.VideoKey : null;
        this.CoverKey = 'CoverKey' in params ? params.CoverKey : null;

    }
}

/**
 * HandleStreamConnectProject请求参数结构体
 * @class
 */
class HandleStreamConnectProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 云转推项目 Id 。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 请参考 [操作类型](#Operation)
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 转推输入源操作参数。具体操作方式详见 [操作类型](#Operation) 及下文示例。
         * @type {StreamInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 主备输入源标识，取值有：
<li> Main ：主源；</li>
<li> Backup ：备源。</li>
         * @type {string || null}
         */
        this.InputEndpoint = null;

        /**
         * 转推输出源操作参数。具体操作方式详见 [操作类型](#Operation) 及下文示例。
         * @type {StreamConnectOutput || null}
         */
        this.OutputInfo = null;

        /**
         * 云转推当前预计结束时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。具体操作方式详见 [操作类型](#Operation) 及下文示例。
         * @type {string || null}
         */
        this.CurrentStopTime = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以操作所有云转推项目。如果指定操作者，则操作者必须为项目所有者。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

        if (params.InputInfo) {
            let obj = new StreamInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }
        this.InputEndpoint = 'InputEndpoint' in params ? params.InputEndpoint : null;

        if (params.OutputInfo) {
            let obj = new StreamConnectOutput();
            obj.deserialize(params.OutputInfo)
            this.OutputInfo = obj;
        }
        this.CurrentStopTime = 'CurrentStopTime' in params ? params.CurrentStopTime : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * ModifyProject请求参数结构体
 * @class
 */
class ModifyProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 项目 Id。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称，不可超过30个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 画布宽高比，值为视频编辑项目画布宽与高的像素值的比值，如 16:9、9:16 等。
         * @type {string || null}
         */
        this.AspectRatio = null;

        /**
         * 项目所有者。目前仅支持个人项目，不支持团队项目。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 项目模式，一个项目可以有多种模式并相互切换。
当 Category 为 VIDEO_EDIT 时，可选模式有：
<li>Default：默认模式，即普通视频编辑项目。</li>
<li>VideoEditTemplate：剪辑模板制作模式，用于制作剪辑模板。</li>
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * 媒体详情信息
 * @class
 */
class MaterialInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体基本信息。
         * @type {MaterialBasicInfo || null}
         */
        this.BasicInfo = null;

        /**
         * 视频媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoMaterial || null}
         */
        this.VideoMaterial = null;

        /**
         * 音频媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AudioMaterial || null}
         */
        this.AudioMaterial = null;

        /**
         * 图片媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageMaterial || null}
         */
        this.ImageMaterial = null;

        /**
         * 链接媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LinkMaterial || null}
         */
        this.LinkMaterial = null;

        /**
         * 模板媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoEditTemplateMaterial || null}
         */
        this.VideoEditTemplateMaterial = null;

        /**
         * 其他类型媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OtherMaterial || null}
         */
        this.OtherMaterial = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BasicInfo) {
            let obj = new MaterialBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }

        if (params.VideoMaterial) {
            let obj = new VideoMaterial();
            obj.deserialize(params.VideoMaterial)
            this.VideoMaterial = obj;
        }

        if (params.AudioMaterial) {
            let obj = new AudioMaterial();
            obj.deserialize(params.AudioMaterial)
            this.AudioMaterial = obj;
        }

        if (params.ImageMaterial) {
            let obj = new ImageMaterial();
            obj.deserialize(params.ImageMaterial)
            this.ImageMaterial = obj;
        }

        if (params.LinkMaterial) {
            let obj = new LinkMaterial();
            obj.deserialize(params.LinkMaterial)
            this.LinkMaterial = obj;
        }

        if (params.VideoEditTemplateMaterial) {
            let obj = new VideoEditTemplateMaterial();
            obj.deserialize(params.VideoEditTemplateMaterial)
            this.VideoEditTemplateMaterial = obj;
        }

        if (params.OtherMaterial) {
            let obj = new OtherMaterial();
            obj.deserialize(params.OtherMaterial)
            this.OtherMaterial = obj;
        }

    }
}

/**
 * DescribeVideoEncodingPresets请求参数结构体
 * @class
 */
class DescribeVideoEncodingPresetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 要查询的配置 ID 列表。填写该参数则按照配置 ID 进行查询。
         * @type {Array.<number> || null}
         */
        this.Ids = null;

        /**
         * 分页大小，默认20。最大值50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页起始，默认0。
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
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 登录态信息
 * @class
 */
class LoginStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户 Id。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户登录状态。
<li>Online：在线；</li>
<li>Offline：离线。</li>
         * @type {string || null}
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeClass返回参数结构体
 * @class
 */
class DescribeClassResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类信息列表。
         * @type {Array.<ClassInfo> || null}
         */
        this.ClassInfoSet = null;

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

        if (params.ClassInfoSet) {
            this.ClassInfoSet = new Array();
            for (let z in params.ClassInfoSet) {
                let obj = new ClassInfo();
                obj.deserialize(params.ClassInfoSet[z]);
                this.ClassInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenerateVideoSegmentationSchemeByAi返回参数结构体
 * @class
 */
class GenerateVideoSegmentationSchemeByAiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能拆条任务 Id 。
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
 * 预置标签信息
 * @class
 */
class PresetTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签 Id 。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 标签名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 父级预设 Id。
         * @type {string || null}
         */
        this.ParentTagId = null;

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
        this.ParentTagId = 'ParentTagId' in params ? params.ParentTagId : null;

    }
}

/**
 * DescribeSharedSpace请求参数结构体
 * @class
 */
class DescribeSharedSpaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 被授权目标，个人或团队。
         * @type {Entity || null}
         */
        this.Authorizee = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以查询任意个人或者团队的共享空间。如果指定操作者，则操作者必须本人或者团队成员。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;

        if (params.Authorizee) {
            let obj = new Entity();
            obj.deserialize(params.Authorizee)
            this.Authorizee = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 快手视频发布信息。
 * @class
 */
class KuaishouPublishInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频发布标题，限30个字符。
         * @type {string || null}
         */
        this.Title = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;

    }
}

/**
 * CopyProject返回参数结构体
 * @class
 */
class CopyProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 复制后的项目 ID。
         * @type {string || null}
         */
        this.ProjectId = null;

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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteClass返回参数结构体
 * @class
 */
class DeleteClassResponse extends  AbstractModel {
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
 * ExportVideoEditProject返回参数结构体
 * @class
 */
class ExportVideoEditProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 Id。
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
 * 文件元信息。
 * @class
 */
class MediaMetaData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大小。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 容器类型。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 视频流码率平均值与音频流码率平均值之和，单位：bps。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 视频流高度的最大值，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频流宽度的最大值，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 时长，单位：秒。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 视频拍摄时的选择角度，单位：度
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * 视频流信息。
         * @type {Array.<VideoStreamInfo> || null}
         */
        this.VideoStreamInfoSet = null;

        /**
         * 音频流信息。
         * @type {Array.<AudioStreamInfo> || null}
         */
        this.AudioStreamInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Size = 'Size' in params ? params.Size : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;

        if (params.VideoStreamInfoSet) {
            this.VideoStreamInfoSet = new Array();
            for (let z in params.VideoStreamInfoSet) {
                let obj = new VideoStreamInfo();
                obj.deserialize(params.VideoStreamInfoSet[z]);
                this.VideoStreamInfoSet.push(obj);
            }
        }

        if (params.AudioStreamInfoSet) {
            this.AudioStreamInfoSet = new Array();
            for (let z in params.AudioStreamInfoSet) {
                let obj = new AudioStreamInfo();
                obj.deserialize(params.AudioStreamInfoSet[z]);
                this.AudioStreamInfoSet.push(obj);
            }
        }

    }
}

/**
 * 导播台项目状态变更事件
 * @class
 */
class ProjectSwitcherStatusChangedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导播台项目 Id。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 导播台项目状态，可取值有：
<li>Started：导播台启动；</li>
<li>Stopped：导播台停止；</li>
<li>PvwStarted：导播台 PVW 开启；</li>
<li>PgmStarted：导播台 PGM 开启，输出推流开始；</li>
<li>PvwStopped：导播台 PVW 停止；</li>
<li>PgmStopped：导播台 PGM 停止，输出推流结束。</li>
         * @type {string || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 媒资绑定资源信息，包含媒资绑定模板 ID 和文件信息。
 * @class
 */
class ExternalMediaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目前仅支持绑定 COS 桶的媒体，请填写存储对象 Key 值，例如：`example-folder/example.mp4`。
         * @type {string || null}
         */
        this.MediaKey = null;

        /**
         * 该字段废弃，请勿使用。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 媒资挂载的存储 Id。
         * @type {string || null}
         */
        this.StorageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaKey = 'MediaKey' in params ? params.MediaKey : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.StorageId = 'StorageId' in params ? params.StorageId : null;

    }
}

/**
 * 链接素材信息
 * @class
 */
class LinkMaterialInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材基本信息。
         * @type {MaterialBasicInfo || null}
         */
        this.BasicInfo = null;

        /**
         * 视频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoMaterial || null}
         */
        this.VideoMaterial = null;

        /**
         * 音频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AudioMaterial || null}
         */
        this.AudioMaterial = null;

        /**
         * 图片素材信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageMaterial || null}
         */
        this.ImageMaterial = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BasicInfo) {
            let obj = new MaterialBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }

        if (params.VideoMaterial) {
            let obj = new VideoMaterial();
            obj.deserialize(params.VideoMaterial)
            this.VideoMaterial = obj;
        }

        if (params.AudioMaterial) {
            let obj = new AudioMaterial();
            obj.deserialize(params.AudioMaterial)
            this.AudioMaterial = obj;
        }

        if (params.ImageMaterial) {
            let obj = new ImageMaterial();
            obj.deserialize(params.ImageMaterial)
            this.ImageMaterial = obj;
        }

    }
}

/**
 * ExportVideoByEditorTrackData返回参数结构体
 * @class
 */
class ExportVideoByEditorTrackDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 Id。
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
 * 点播转直播输出媒体配置。
 * @class
 */
class MediaCastOutputMediaSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频配置。
         * @type {MediaCastVideoSetting || null}
         */
        this.VideoSetting = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VideoSetting) {
            let obj = new MediaCastVideoSetting();
            obj.deserialize(params.VideoSetting)
            this.VideoSetting = obj;
        }

    }
}

/**
 * 分类创建事件。
 * @class
 */
class ClassCreatedEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类归属。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 分类路径。
         * @type {string || null}
         */
        this.ClassPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;

    }
}

/**
 * 视频编码配置
 * @class
 */
class VideoEncodingPreset extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置 ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 配置名。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 封装格式，可选值：
<li>mp4 ；</li>
<li>mov 。</li>
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 是否去除视频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * 视频编码配置中的视频设置。
         * @type {VideoEncodingPresetVideoSetting || null}
         */
        this.VideoSetting = null;

        /**
         * 视频编码配置中的音频设置。
         * @type {VideoEncodingPresetAudioSetting || null}
         */
        this.AudioSetting = null;

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
        this.Container = 'Container' in params ? params.Container : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoSetting) {
            let obj = new VideoEncodingPresetVideoSetting();
            obj.deserialize(params.VideoSetting)
            this.VideoSetting = obj;
        }

        if (params.AudioSetting) {
            let obj = new VideoEncodingPresetAudioSetting();
            obj.deserialize(params.AudioSetting)
            this.AudioSetting = obj;
        }

    }
}

/**
 * ImportMaterial请求参数结构体
 * @class
 */
class ImportMaterialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 媒体归属者，可支持归属团队或个人。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 媒体名称，不能超过30个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 导入媒资类型，取值：
<li>VOD：云点播文件；</li>
<li>EXTERNAL：媒资绑定。</li>

注意：如果不填默认为云点播文件，如果媒体存储在非腾讯云点播中，都需要使用媒资绑定。另外，导入云点播的文件，使用云点播的子应用 Id 必须与创建多媒体创作引擎平台时使用的云点播子应用一致。
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 云点播媒资 FileId，仅当 SourceType 为 VOD 时有效。
         * @type {string || null}
         */
        this.VodFileId = null;

        /**
         * 原始媒资文件信息，当 SourceType 取值 EXTERNAL 的时候必填。
         * @type {ExternalMediaInfo || null}
         */
        this.ExternalMediaInfo = null;

        /**
         * 媒体分类路径，形如："/a/b"，层级数不能超过10，每个层级长度不能超过15字符。若不填则默认为根路径。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 媒体预处理任务参数 ID。可取值有：
<li>10：进行编辑预处理。</li>
         * @type {number || null}
         */
        this.PreProcessDefinition = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以向任意团队或者个人导入媒体。如果指定操作者，如果媒体归属为个人，则操作者必须与归属者一致；如果媒体归属为团队，则必须为团队可导入媒体的团队成员(如果没有特殊设置，所有团队成员可导入媒体)。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;

        if (params.ExternalMediaInfo) {
            let obj = new ExternalMediaInfo();
            obj.deserialize(params.ExternalMediaInfo)
            this.ExternalMediaInfo = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.PreProcessDefinition = 'PreProcessDefinition' in params ? params.PreProcessDefinition : null;
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

/**
 * 模板插槽文本替换信息。
 * @class
 */
class TextReplacementInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 替换的文本信息。
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
 * 导入媒资信息
 * @class
 */
class ImportMediaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云点播文件 FileId。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 媒体 Id。
         * @type {string || null}
         */
        this.MaterialId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;

    }
}

/**
 * DescribeMaterials请求参数结构体
 * @class
 */
class DescribeMaterialsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 媒体 ID 列表，一次最多可拉取20个媒体的信息。
         * @type {Array.<string> || null}
         */
        this.MaterialIds = null;

        /**
         * 列表排序，支持下列排序字段：
<li>CreateTime：创建时间；</li>
<li>UpdateTime：更新时间。</li>
         * @type {SortBy || null}
         */
        this.Sort = null;

        /**
         * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以获取任意媒体的信息。如果指定操作者，则操作者必须对媒体有读权限。
         * @type {string || null}
         */
        this.Operator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.MaterialIds = 'MaterialIds' in params ? params.MaterialIds : null;

        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;

    }
}

module.exports = {
    AudioStreamInfo: AudioStreamInfo,
    ClassDeletedEvent: ClassDeletedEvent,
    ModifyMaterialResponse: ModifyMaterialResponse,
    DeleteProjectRequest: DeleteProjectRequest,
    ExportVideoByVideoSegmentationDataResponse: ExportVideoByVideoSegmentationDataResponse,
    MaterialDeletedEvent: MaterialDeletedEvent,
    ImportMaterialResponse: ImportMaterialResponse,
    StreamConnectProjectInput: StreamConnectProjectInput,
    DescribeAccountsRequest: DescribeAccountsRequest,
    ExportVideoByVideoSegmentationDataRequest: ExportVideoByVideoSegmentationDataRequest,
    MediaTransitionItem: MediaTransitionItem,
    DescribeTeamsResponse: DescribeTeamsResponse,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    ExportVideoEditProjectRequest: ExportVideoEditProjectRequest,
    StreamConnectInputInterruptInfo: StreamConnectInputInterruptInfo,
    TeamInfo: TeamInfo,
    ClassInfo: ClassInfo,
    MediaCastDestinationInterruptInfo: MediaCastDestinationInterruptInfo,
    AudioTrackItem: AudioTrackItem,
    StreamConnectProjectInfo: StreamConnectProjectInfo,
    VideoEncodingPresetAudioSettingForUpdate: VideoEncodingPresetAudioSettingForUpdate,
    VideoEncodingPresetAudioSetting: VideoEncodingPresetAudioSetting,
    IntegerRange: IntegerRange,
    SearchMaterialRequest: SearchMaterialRequest,
    StorageNewFileCreatedEvent: StorageNewFileCreatedEvent,
    DeleteTeamResponse: DeleteTeamResponse,
    StreamConnectOutput: StreamConnectOutput,
    CopyProjectRequest: CopyProjectRequest,
    SearchScope: SearchScope,
    VodPullInputPlayInfo: VodPullInputPlayInfo,
    RevokeResourceAuthorizationResponse: RevokeResourceAuthorizationResponse,
    DescribeTasksResponse: DescribeTasksResponse,
    ProjectInfo: ProjectInfo,
    VideoTrackItem: VideoTrackItem,
    DeleteTeamRequest: DeleteTeamRequest,
    DescribeTeamsRequest: DescribeTeamsRequest,
    PlatformInfo: PlatformInfo,
    LinkMaterial: LinkMaterial,
    SwitcherProjectInput: SwitcherProjectInput,
    FlattenListMediaRequest: FlattenListMediaRequest,
    RtmpPushInputInfo: RtmpPushInputInfo,
    AudioMaterial: AudioMaterial,
    AddMemberInfo: AddMemberInfo,
    Entity: Entity,
    MediaCastVideoSetting: MediaCastVideoSetting,
    ExportVideoByEditorTrackDataRequest: ExportVideoByEditorTrackDataRequest,
    MaterialTagInfo: MaterialTagInfo,
    VideoEditProjectOutput: VideoEditProjectOutput,
    CreateProjectRequest: CreateProjectRequest,
    ModifyMaterialRequest: ModifyMaterialRequest,
    Authorizer: Authorizer,
    DescribePlatformsResponse: DescribePlatformsResponse,
    DescribeTasksRequest: DescribeTasksRequest,
    ProjectMediaCastStatusChangedEvent: ProjectMediaCastStatusChangedEvent,
    MediaTrackItem: MediaTrackItem,
    MediaCastDestinationInfo: MediaCastDestinationInfo,
    DescribeLoginStatusRequest: DescribeLoginStatusRequest,
    MediaTrack: MediaTrack,
    DeleteLoginStatusResponse: DeleteLoginStatusResponse,
    WeiboPublishInfo: WeiboPublishInfo,
    MediaCastSourceInfo: MediaCastSourceInfo,
    CreateLinkResponse: CreateLinkResponse,
    ExportVideoByTemplateResponse: ExportVideoByTemplateResponse,
    StreamInputInfo: StreamInputInfo,
    ListMediaResponse: ListMediaResponse,
    SearchMaterialResponse: SearchMaterialResponse,
    StreamConnectOutputInfo: StreamConnectOutputInfo,
    ParseEventRequest: ParseEventRequest,
    EmptyTrackItem: EmptyTrackItem,
    ClassMovedEvent: ClassMovedEvent,
    DeleteVideoEncodingPresetRequest: DeleteVideoEncodingPresetRequest,
    MaterialImportedEvent: MaterialImportedEvent,
    ModifyVideoEncodingPresetResponse: ModifyVideoEncodingPresetResponse,
    DescribeJoinTeamsRequest: DescribeJoinTeamsRequest,
    MediaCastSourceInterruptInfo: MediaCastSourceInterruptInfo,
    VideoSegmentationProjectInput: VideoSegmentationProjectInput,
    DeleteMaterialRequest: DeleteMaterialRequest,
    ModifyProjectResponse: ModifyProjectResponse,
    CreateProjectResponse: CreateProjectResponse,
    VideoEditProjectInput: VideoEditProjectInput,
    DeleteProjectResponse: DeleteProjectResponse,
    VideoEncodingPresetVideoSetting: VideoEncodingPresetVideoSetting,
    MediaImageSpriteInfo: MediaImageSpriteInfo,
    DeleteClassRequest: DeleteClassRequest,
    CreateLinkRequest: CreateLinkRequest,
    CreateClassRequest: CreateClassRequest,
    DescribeMaterialsResponse: DescribeMaterialsResponse,
    CreateVideoEncodingPresetResponse: CreateVideoEncodingPresetResponse,
    VideoEncodingPresetVideoSettingForUpdate: VideoEncodingPresetVideoSettingForUpdate,
    GrantResourceAuthorizationResponse: GrantResourceAuthorizationResponse,
    SwitcherPgmOutputConfig: SwitcherPgmOutputConfig,
    Resource: Resource,
    CMEExportInfo: CMEExportInfo,
    MoveResourceRequest: MoveResourceRequest,
    LivePullInputInfo: LivePullInputInfo,
    ImportMediaToProjectRequest: ImportMediaToProjectRequest,
    VODExportInfo: VODExportInfo,
    SortBy: SortBy,
    PenguinMediaPlatformPublishInfo: PenguinMediaPlatformPublishInfo,
    ImageMaterial: ImageMaterial,
    DescribeClassRequest: DescribeClassRequest,
    DescribeSharedSpaceResponse: DescribeSharedSpaceResponse,
    DescribeAccountsResponse: DescribeAccountsResponse,
    MoveResourceResponse: MoveResourceResponse,
    MoveClassRequest: MoveClassRequest,
    TextSlotInfo: TextSlotInfo,
    DeleteTeamMembersResponse: DeleteTeamMembersResponse,
    MoveClassResponse: MoveClassResponse,
    ImportMediaToProjectResponse: ImportMediaToProjectResponse,
    ModifyTeamMemberResponse: ModifyTeamMemberResponse,
    DescribeTeamMembersResponse: DescribeTeamMembersResponse,
    AddTeamMemberResponse: AddTeamMemberResponse,
    CreateTeamResponse: CreateTeamResponse,
    ModifyTeamRequest: ModifyTeamRequest,
    ModifyTeamMemberRequest: ModifyTeamMemberRequest,
    MaterialMovedEvent: MaterialMovedEvent,
    CreateTeamRequest: CreateTeamRequest,
    MaterialBasicInfo: MaterialBasicInfo,
    VideoExportCompletedEvent: VideoExportCompletedEvent,
    ResourceInfo: ResourceInfo,
    MediaPreprocessOperation: MediaPreprocessOperation,
    StreamConnectOutputInterruptInfo: StreamConnectOutputInterruptInfo,
    JoinTeamInfo: JoinTeamInfo,
    DescribeResourceAuthorizationRequest: DescribeResourceAuthorizationRequest,
    CreateClassResponse: CreateClassResponse,
    SlotInfo: SlotInfo,
    MediaReplacementInfo: MediaReplacementInfo,
    TaskBaseInfo: TaskBaseInfo,
    RecordReplayProjectInput: RecordReplayProjectInput,
    VideoStreamInfo: VideoStreamInfo,
    AddTeamMemberRequest: AddTeamMemberRequest,
    GrantResourceAuthorizationRequest: GrantResourceAuthorizationRequest,
    TimeRange: TimeRange,
    ThirdPartyPublishInfo: ThirdPartyPublishInfo,
    ListMediaRequest: ListMediaRequest,
    DeleteVideoEncodingPresetResponse: DeleteVideoEncodingPresetResponse,
    VodPullInputInfo: VodPullInputInfo,
    ModifyTeamResponse: ModifyTeamResponse,
    DeleteLoginStatusRequest: DeleteLoginStatusRequest,
    GenerateVideoSegmentationSchemeByAiRequest: GenerateVideoSegmentationSchemeByAiRequest,
    LiveStreamClipProjectInput: LiveStreamClipProjectInput,
    MaterialModifiedEvent: MaterialModifiedEvent,
    HandleStreamConnectProjectResponse: HandleStreamConnectProjectResponse,
    DeleteTeamMembersRequest: DeleteTeamMembersRequest,
    MediaCastProjectInfo: MediaCastProjectInfo,
    ExportVideoByTemplateRequest: ExportVideoByTemplateRequest,
    DescribePlatformsRequest: DescribePlatformsRequest,
    OtherMaterial: OtherMaterial,
    EventContent: EventContent,
    VideoMaterial: VideoMaterial,
    DescribeVideoEncodingPresetsResponse: DescribeVideoEncodingPresetsResponse,
    DescribeResourceAuthorizationResponse: DescribeResourceAuthorizationResponse,
    FlattenListMediaResponse: FlattenListMediaResponse,
    AccountInfo: AccountInfo,
    DescribeProjectsRequest: DescribeProjectsRequest,
    DescribeLoginStatusResponse: DescribeLoginStatusResponse,
    MediaCastPlaySetting: MediaCastPlaySetting,
    MaterialAddedEvent: MaterialAddedEvent,
    CreateVideoEncodingPresetRequest: CreateVideoEncodingPresetRequest,
    ProjectStreamConnectStatusChangedEvent: ProjectStreamConnectStatusChangedEvent,
    DescribeJoinTeamsResponse: DescribeJoinTeamsResponse,
    DescribeTeamMembersRequest: DescribeTeamMembersRequest,
    MaterialStatus: MaterialStatus,
    DescribeProjectsResponse: DescribeProjectsResponse,
    AuthorizationInfo: AuthorizationInfo,
    VideoEditTemplateMaterial: VideoEditTemplateMaterial,
    VideoExportExtensionArgs: VideoExportExtensionArgs,
    SlotReplacementInfo: SlotReplacementInfo,
    ParseEventResponse: ParseEventResponse,
    DeleteMaterialResponse: DeleteMaterialResponse,
    RevokeResourceAuthorizationRequest: RevokeResourceAuthorizationRequest,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    ModifyVideoEncodingPresetRequest: ModifyVideoEncodingPresetRequest,
    TeamMemberInfo: TeamMemberInfo,
    CosPublishInputInfo: CosPublishInputInfo,
    HandleStreamConnectProjectRequest: HandleStreamConnectProjectRequest,
    ModifyProjectRequest: ModifyProjectRequest,
    MaterialInfo: MaterialInfo,
    DescribeVideoEncodingPresetsRequest: DescribeVideoEncodingPresetsRequest,
    LoginStatusInfo: LoginStatusInfo,
    DescribeClassResponse: DescribeClassResponse,
    GenerateVideoSegmentationSchemeByAiResponse: GenerateVideoSegmentationSchemeByAiResponse,
    PresetTagInfo: PresetTagInfo,
    DescribeSharedSpaceRequest: DescribeSharedSpaceRequest,
    KuaishouPublishInfo: KuaishouPublishInfo,
    CopyProjectResponse: CopyProjectResponse,
    DeleteClassResponse: DeleteClassResponse,
    ExportVideoEditProjectResponse: ExportVideoEditProjectResponse,
    MediaMetaData: MediaMetaData,
    ProjectSwitcherStatusChangedEvent: ProjectSwitcherStatusChangedEvent,
    ExternalMediaInfo: ExternalMediaInfo,
    LinkMaterialInfo: LinkMaterialInfo,
    ExportVideoByEditorTrackDataResponse: ExportVideoByEditorTrackDataResponse,
    MediaCastOutputMediaSetting: MediaCastOutputMediaSetting,
    ClassCreatedEvent: ClassCreatedEvent,
    VideoEncodingPreset: VideoEncodingPreset,
    ImportMaterialRequest: ImportMaterialRequest,
    TextReplacementInfo: TextReplacementInfo,
    ImportMediaInfo: ImportMediaInfo,
    DescribeMaterialsRequest: DescribeMaterialsRequest,

}
