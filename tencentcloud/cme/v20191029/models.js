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
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
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
         * 任务类型集合，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：视频编辑项目导出。</li>
         * @type {Array.<string> || null}
         */
        this.TaskTypeSet = null;

        /**
         * 任务状态集合，取值有：
<li>PROCESSING：处理中；</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
         * @type {Array.<string> || null}
         */
        this.StatusSet = null;

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
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 项目 Id。
         * @type {string || null}
         */
        this.ProjectId = null;

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
         * 素材 Id。
         * @type {string || null}
         */
        this.MaterialId = null;

        /**
         * 素材预处理任务 ID，如果未指定发起预处理任务则为空。
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
 * DescribeLoginStatus请求参数结构体
 * @class
 */
class DescribeLoginStatusRequest extends  AbstractModel {
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
 * DescribeProjects请求参数结构体
 * @class
 */
class DescribeProjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 项目 Id 列表，N 从 0 开始取值，最大 19。
         * @type {Array.<string> || null}
         */
        this.ProjectIds = null;

        /**
         * 画布宽高比集合。
         * @type {Array.<string> || null}
         */
        this.AspectRatioSet = null;

        /**
         * 项目类别集合。
         * @type {Array.<string> || null}
         */
        this.CategorySet = null;

        /**
         * 项目归属者。
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

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * 素材基础信息。
 * @class
 */
class MaterialBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 分类路径。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 标签集合。
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * 归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 素材类型。
         * @type {string || null}
         */
        this.MaterialType = null;

        /**
         * 素材 URL。
         * @type {string || null}
         */
        this.MaterialUrl = null;

        /**
         * 云点播媒资 FileId。
         * @type {string || null}
         */
        this.VodFileId = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.MaterialType = 'MaterialType' in params ? params.MaterialType : null;
        this.MaterialUrl = 'MaterialUrl' in params ? params.MaterialUrl : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
         * 导出项目输出信息。
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
         * 导出模板 Id，目前不支持自定义创建，只支持下面的预置模板 Id。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 导出目标。
<li>CME：云剪，即导出为云剪素材；</li>
<li>VOD：云点播，即导出为云点播媒资。</li>
         * @type {string || null}
         */
        this.ExportDestination = null;

        /**
         * 导出的云剪素材信息。指定 ExportDestination = CME 时有效。
         * @type {CMEExportInfo || null}
         */
        this.CMEExportInfo = null;

        /**
         * 导出的云点播媒资信息。指定 ExportDestination = VOD 时有效。
         * @type {VODExportInfo || null}
         */
        this.VODExportInfo = null;

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
 * DescribeTaskDetail请求参数结构体
 * @class
 */
class DescribeTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 任务 Id。
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
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
         * 项目名称，不可超过30个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 归属者。
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
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }

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
         * 项目类别。
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 归属者。
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;
        this.Category = 'Category' in params ? params.Category : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }

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
 * 云剪导出信息。
 * @class
 */
class CMEExportInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出的归属者。
         * @type {Entity || null}
         */
        this.Owner = null;

        /**
         * 导出的素材名称，不得超过30个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 导出的素材信息，不得超过50个字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 导出的素材分类路径，长度不能超过15字符。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 导出的素材标签，单个标签不得超过10个字符。
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

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;

    }
}

/**
 * 用于描述资源的归属实体。
 * @class
 */
class Entity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型，取值有：
<li>PERSON：个人。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Id，当 Type=PERSON，取值为用户 Id。
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
 * ImportMediaToProject请求参数结构体
 * @class
 */
class ImportMediaToProjectRequest extends  AbstractModel {
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
         * 云点播媒资 FileId。
         * @type {string || null}
         */
        this.VodFileId = null;

        /**
         * 素材名称，不能超过30个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 素材预处理任务模板 ID，取值：
<li>10：进行编辑预处理。</li>
注意：如果填0则不进行处理。
         * @type {number || null}
         */
        this.PreProcessDefinition = null;

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
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PreProcessDefinition = 'PreProcessDefinition' in params ? params.PreProcessDefinition : null;

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
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * 素材基础信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaterialBaseInfo || null}
         */
        this.MaterialBaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;
        this.URL = 'URL' in params ? params.URL : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

        if (params.MaterialBaseInfo) {
            let obj = new MaterialBaseInfo();
            obj.deserialize(params.MaterialBaseInfo)
            this.MaterialBaseInfo = obj;
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
         * 平台名称，指定访问的平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 项目类别，取值有：
<li>VIDEO_EDIT：视频编辑。</li>
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 项目名称，不可超过30个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 画布宽高比，取值有：
<li>16:9；</li>
<li>9:16。</li>
         * @type {string || null}
         */
        this.AspectRatio = null;

        /**
         * 归属者。
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
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;

        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner)
            this.Owner = obj;
        }

    }
}

module.exports = {
    AudioStreamInfo: AudioStreamInfo,
    DescribeTasksRequest: DescribeTasksRequest,
    DeleteProjectRequest: DeleteProjectRequest,
    ImportMediaToProjectResponse: ImportMediaToProjectResponse,
    DescribeLoginStatusRequest: DescribeLoginStatusRequest,
    DescribeProjectsRequest: DescribeProjectsRequest,
    DescribeLoginStatusResponse: DescribeLoginStatusResponse,
    DeleteLoginStatusResponse: DeleteLoginStatusResponse,
    MaterialBaseInfo: MaterialBaseInfo,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    ExportVideoEditProjectRequest: ExportVideoEditProjectRequest,
    DescribeProjectsResponse: DescribeProjectsResponse,
    ModifyProjectResponse: ModifyProjectResponse,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    ModifyProjectRequest: ModifyProjectRequest,
    VideoStreamInfo: VideoStreamInfo,
    DescribeTasksResponse: DescribeTasksResponse,
    ProjectInfo: ProjectInfo,
    LoginStatusInfo: LoginStatusInfo,
    ExportVideoEditProjectResponse: ExportVideoEditProjectResponse,
    CreateProjectResponse: CreateProjectResponse,
    MediaMetaData: MediaMetaData,
    DeleteProjectResponse: DeleteProjectResponse,
    TaskBaseInfo: TaskBaseInfo,
    DeleteLoginStatusRequest: DeleteLoginStatusRequest,
    CMEExportInfo: CMEExportInfo,
    Entity: Entity,
    ImportMediaToProjectRequest: ImportMediaToProjectRequest,
    VODExportInfo: VODExportInfo,
    VideoEditProjectOutput: VideoEditProjectOutput,
    CreateProjectRequest: CreateProjectRequest,

}
