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
 * CreateRoom请求参数结构体
 * @class
 */
class CreateRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 预定的房间开始时间，unix时间戳。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 预定的房间结束时间，unix时间戳。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 低代码互动课堂的SdkAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 分辨率。可以有如下取值：
1 标清
2 高清
3 全高清
         * @type {number || null}
         */
        this.Resolution = null;

        /**
         * 最大连麦人数（不包括老师）。取值范围[0, 16]
         * @type {number || null}
         */
        this.MaxMicNumber = null;

        /**
         * 房间子类型，可以有以下取值：
videodoc 文档+视频
video 纯视频
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * 老师ID。通过[注册用户]接口获取的UserId。指定后该用户在房间内拥有老师权限。
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * 进入课堂时是否自动连麦。可以有以下取值：
0 不自动连麦（需要手动申请上麦，默认值）
1 自动连麦
         * @type {number || null}
         */
        this.AutoMic = null;

        /**
         * 高音质模式。可以有以下取值：
0 不开启高音质（默认值）
1 开启高音质
         * @type {number || null}
         */
        this.AudioQuality = null;

        /**
         * 上课后是否禁止自动录制。可以有以下取值：
0 不禁止录制（自动开启录制，默认值）
1 禁止录制
注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。
         * @type {number || null}
         */
        this.DisableRecord = null;

        /**
         * 助教Id列表。通过[注册用户]接口获取的UserId。指定后该用户在房间内拥有助教权限。
         * @type {Array.<string> || null}
         */
        this.Assistants = null;

        /**
         * 录制布局。
         * @type {number || null}
         */
        this.RecordLayout = null;

        /**
         * 房间绑定的群组ID,非空时限制组成员进入
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
        this.Name = 'Name' in params ? params.Name : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.MaxMicNumber = 'MaxMicNumber' in params ? params.MaxMicNumber : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.AutoMic = 'AutoMic' in params ? params.AutoMic : null;
        this.AudioQuality = 'AudioQuality' in params ? params.AudioQuality : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.Assistants = 'Assistants' in params ? params.Assistants : null;
        this.RecordLayout = 'RecordLayout' in params ? params.RecordLayout : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * ModifyRoom返回参数结构体
 * @class
 */
class ModifyRoomResponse extends  AbstractModel {
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
 * DescribeAppDetail返回参数结构体
 * @class
 */
class DescribeAppDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SDK 对应的AppId 
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 应用配置
         * @type {AppConfig || null}
         */
        this.AppConfig = null;

        /**
         * 场景配置
         * @type {Array.<SceneItem> || null}
         */
        this.SceneConfig = null;

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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.AppConfig) {
            let obj = new AppConfig();
            obj.deserialize(params.AppConfig)
            this.AppConfig = obj;
        }

        if (params.SceneConfig) {
            this.SceneConfig = new Array();
            for (let z in params.SceneConfig) {
                let obj = new SceneItem();
                obj.deserialize(params.SceneConfig[z]);
                this.SceneConfig.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchDeleteRecord请求参数结构体
 * @class
 */
class BatchDeleteRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间ID列表
         * @type {Array.<number> || null}
         */
        this.RoomIds = null;

        /**
         * 低代码互动课堂的SdkAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomIds = 'RoomIds' in params ? params.RoomIds : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * BatchRegister请求参数结构体
 * @class
 */
class BatchRegisterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量注册用户信息列表
         * @type {Array.<BatchUserRequest> || null}
         */
        this.Users = null;

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
                let obj = new BatchUserRequest();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }

    }
}

/**
 * DeleteRoom返回参数结构体
 * @class
 */
class DeleteRoomResponse extends  AbstractModel {
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
 * ModifyUserProfile请求参数结构体
 * @class
 */
class ModifyUserProfileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 待修改的用户名
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 待修改头像url
         * @type {string || null}
         */
        this.Avatar = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;

    }
}

/**
 * CreateGroupWithMembers请求参数结构体
 * @class
 */
class CreateGroupWithMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建群组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 默认绑定主讲老师ID
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * 群组成员列表,一次性最多200个
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

    }
}

/**
 * DescribeDocumentsByRoom请求参数结构体
 * @class
 */
class DescribeDocumentsByRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间ID。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 低代码互动课堂的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 分页查询当前页数，从1开始递增，默认值为1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页数据量，最大1000，默认值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 课件权限。
[0]：获取owner的私有课件；
[1]：获取owner的公开课件;
[0,1]：则获取owner的私有课件和公开课件；
[2]：获取owner的私有课件和所有人(包括owner)的公开课件。
默认值为[2]
         * @type {Array.<number> || null}
         */
        this.Permission = null;

        /**
         * 文档所有者的user_id，不填默认获取SdkAppId下所有课件
         * @type {string || null}
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.Owner = 'Owner' in params ? params.Owner : null;

    }
}

/**
 * BatchCreateGroupWithMembers返回参数结构体
 * @class
 */
class BatchCreateGroupWithMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新创建群组ID列表，与输入创建参数顺序一致
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

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
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateGroupWithMembers返回参数结构体
 * @class
 */
class CreateGroupWithMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功群组ID
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchAddGroupMember返回参数结构体
 * @class
 */
class BatchAddGroupMemberResponse extends  AbstractModel {
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
 * ModifyUserProfile返回参数结构体
 * @class
 */
class ModifyUserProfileResponse extends  AbstractModel {
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
 * ModifyApp返回参数结构体
 * @class
 */
class ModifyAppResponse extends  AbstractModel {
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
 * LoginOriginId请求参数结构体
 * @class
 */
class LoginOriginIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码互动课堂的SdkAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 用户在客户系统的Id，需要在同一应用下唯一。
         * @type {string || null}
         */
        this.OriginId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

    }
}

/**
 * BatchRegister返回参数结构体
 * @class
 */
class BatchRegisterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 注册成功的用户列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BatchUserInfo> || null}
         */
        this.Users = null;

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
                let obj = new BatchUserInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindDocumentToRoom返回参数结构体
 * @class
 */
class BindDocumentToRoomResponse extends  AbstractModel {
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
 * CreateGroupWithSubGroup请求参数结构体
 * @class
 */
class CreateGroupWithSubGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建的新群组名
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 子群组ID列表，子群组ID不能重复，最多40个
         * @type {Array.<string> || null}
         */
        this.SubGroupIds = null;

        /**
         * 群组默认主讲老师ID
         * @type {string || null}
         */
        this.TeacherId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.SubGroupIds = 'SubGroupIds' in params ? params.SubGroupIds : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;

    }
}

/**
 * SetWatermark请求参数结构体
 * @class
 */
class SetWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码互动课堂的SdkAppId。

         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 老师视频区域的水印参数地址，设置为空字符串表示删除
         * @type {string || null}
         */
        this.TeacherUrl = null;

        /**
         * 白板视频区域的水印参数地址，设置为空字符串表示删除
         * @type {string || null}
         */
        this.BoardUrl = null;

        /**
         * 视频默认图片（在没有视频流的时候显示），设置为空字符串表示删除
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * 白板区域水印的宽度，取值:0-100，默认为0，表示区域X方向的百分比
         * @type {number || null}
         */
        this.BoardW = null;

        /**
         * 白板区域水印的高度，取值:0-100，默认为0, 表示区域Y方向的百分比
         * @type {number || null}
         */
        this.BoardH = null;

        /**
         * 白板区域水印X偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间
         * @type {number || null}
         */
        this.BoardX = null;

        /**
         * 白板区域水印Y偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间
         * @type {number || null}
         */
        this.BoardY = null;

        /**
         * 老师视频区域水印的宽度，取值:0-100，默认为0，表示区域X方向的百分比
         * @type {number || null}
         */
        this.TeacherW = null;

        /**
         * 老师视频区域水印的高度，取值:0-100，默认为0, 表示区域Y方向的百分比
         * @type {number || null}
         */
        this.TeacherH = null;

        /**
         * 老师视频区域水印X偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间
         * @type {number || null}
         */
        this.TeacherX = null;

        /**
         * 老师视频区域水印Y偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间
         * @type {number || null}
         */
        this.TeacherY = null;

        /**
         * 文字水印内容，设置为空字符串表示删除
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 文字水印颜色
         * @type {string || null}
         */
        this.TextColor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TeacherUrl = 'TeacherUrl' in params ? params.TeacherUrl : null;
        this.BoardUrl = 'BoardUrl' in params ? params.BoardUrl : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.BoardW = 'BoardW' in params ? params.BoardW : null;
        this.BoardH = 'BoardH' in params ? params.BoardH : null;
        this.BoardX = 'BoardX' in params ? params.BoardX : null;
        this.BoardY = 'BoardY' in params ? params.BoardY : null;
        this.TeacherW = 'TeacherW' in params ? params.TeacherW : null;
        this.TeacherH = 'TeacherH' in params ? params.TeacherH : null;
        this.TeacherX = 'TeacherX' in params ? params.TeacherX : null;
        this.TeacherY = 'TeacherY' in params ? params.TeacherY : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.TextColor = 'TextColor' in params ? params.TextColor : null;

    }
}

/**
 * DescribeRoom请求参数结构体
 * @class
 */
class DescribeRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间Id。
         * @type {number || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * BatchCreateRoom返回参数结构体
 * @class
 */
class BatchCreateRoomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功课堂ID，与传入课堂信息顺序一致
         * @type {Array.<number> || null}
         */
        this.RoomIds = null;

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
        this.RoomIds = 'RoomIds' in params ? params.RoomIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindDocumentFromRoom返回参数结构体
 * @class
 */
class UnbindDocumentFromRoomResponse extends  AbstractModel {
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
 * CreateDocument返回参数结构体
 * @class
 */
class CreateDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文档ID。
         * @type {string || null}
         */
        this.DocumentId = null;

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
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGroup返回参数结构体
 * @class
 */
class DescribeGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 群组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 群主主讲人ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * 群组类型
0-基础群组
1-组合群组，若为1时会返回子群组ID
         * @type {number || null}
         */
        this.GroupType = null;

        /**
         * 子群组ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubGroupIds = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.SubGroupIds = 'SubGroupIds' in params ? params.SubGroupIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetAppCustomContent返回参数结构体
 * @class
 */
class SetAppCustomContentResponse extends  AbstractModel {
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
 * 用户注册请求信息
 * @class
 */
class BatchUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码互动课堂的SdkAppId。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 用户名称。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户在客户系统的Id，需要在同一应用下唯一。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * 用户头像。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Avatar = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;

    }
}

/**
 * LoginUser返回参数结构体
 * @class
 */
class LoginUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Id。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 登录/注册成功后返回登录态token。有效期7天。
         * @type {string || null}
         */
        this.Token = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 需要修改的群组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 默认绑定主讲老师ID
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * 待修改的群组名称
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * DescribeAppDetail请求参数结构体
 * @class
 */
class DescribeAppDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID。低代码互动课堂的SdkAppId。

         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 开发商ID
         * @type {string || null}
         */
        this.DeveloperId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.DeveloperId = 'DeveloperId' in params ? params.DeveloperId : null;

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
         * 待删除群组ID列表
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * AddGroupMember请求参数结构体
 * @class
 */
class AddGroupMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 成员列表，最大值200
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

    }
}

/**
 * DescribeGroupList请求参数结构体
 * @class
 */
class DescribeGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 分页查询当前页数，默认从1开始递增。
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页数据量，默认20，最大1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 主讲人ID筛选群组，与MemberId有且只有一个,都传时以此字段获取
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * 成员ID刷选群组，与TeacherId有且只有一个
         * @type {string || null}
         */
        this.MemberId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.MemberId = 'MemberId' in params ? params.MemberId : null;

    }
}

/**
 * GetRoomMessage请求参数结构体
 * @class
 */
class GetRoomMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码互动课堂的SdkAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间Id。	
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 消息序列。获取该序列以前前的消息(不包含该seq消息)
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 消息拉取的条数。最大数量不能超过套餐包限制。
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 文档信息
 * @class
 */
class DocumentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文档Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DocumentId = null;

        /**
         * 文档原址url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DocumentUrl = null;

        /**
         * 文档名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DocumentName = null;

        /**
         * 文档所有者UserId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 应用Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 文档权限，0：私有课件 1：公共课件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Permission = null;

        /**
         * 转码结果，无需转码为空，转码成功为结果url，转码失败为错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranscodeResult = null;

        /**
         * 转码类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TranscodeType = null;

        /**
         * 转码进度， 0 - 100 表示（0% - 100%）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TranscodeProgress = null;

        /**
         * 转码状态，0为无需转码，1为正在转码，2为转码失败，3为转码成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TranscodeState = null;

        /**
         * 转码失败后的错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranscodeInfo = null;

        /**
         * 文档类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DocumentType = null;

        /**
         * 文档大小，单位：字节
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DocumentSize = null;

        /**
         * 更新的UNIX时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;
        this.DocumentUrl = 'DocumentUrl' in params ? params.DocumentUrl : null;
        this.DocumentName = 'DocumentName' in params ? params.DocumentName : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.TranscodeResult = 'TranscodeResult' in params ? params.TranscodeResult : null;
        this.TranscodeType = 'TranscodeType' in params ? params.TranscodeType : null;
        this.TranscodeProgress = 'TranscodeProgress' in params ? params.TranscodeProgress : null;
        this.TranscodeState = 'TranscodeState' in params ? params.TranscodeState : null;
        this.TranscodeInfo = 'TranscodeInfo' in params ? params.TranscodeInfo : null;
        this.DocumentType = 'DocumentType' in params ? params.DocumentType : null;
        this.DocumentSize = 'DocumentSize' in params ? params.DocumentSize : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * GetWatermark返回参数结构体
 * @class
 */
class GetWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 老师视频区域的水印参数配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WatermarkConfig || null}
         */
        this.TeacherLogo = null;

        /**
         * 白板区域的水印参数配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WatermarkConfig || null}
         */
        this.BoardLogo = null;

        /**
         * 背景图片配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BackgroundPictureConfig || null}
         */
        this.BackgroundPicture = null;

        /**
         * 文字水印配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TextMarkConfig || null}
         */
        this.Text = null;

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

        if (params.TeacherLogo) {
            let obj = new WatermarkConfig();
            obj.deserialize(params.TeacherLogo)
            this.TeacherLogo = obj;
        }

        if (params.BoardLogo) {
            let obj = new WatermarkConfig();
            obj.deserialize(params.BoardLogo)
            this.BoardLogo = obj;
        }

        if (params.BackgroundPicture) {
            let obj = new BackgroundPictureConfig();
            obj.deserialize(params.BackgroundPicture)
            this.BackgroundPicture = obj;
        }

        if (params.Text) {
            let obj = new TextMarkConfig();
            obj.deserialize(params.Text)
            this.Text = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDocument返回参数结构体
 * @class
 */
class DeleteDocumentResponse extends  AbstractModel {
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
 * DeleteRecord请求参数结构体
 * @class
 */
class DeleteRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间Id。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 低代码互动课堂的SdkAppId。

         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * BatchDeleteGroupMember返回参数结构体
 * @class
 */
class BatchDeleteGroupMemberResponse extends  AbstractModel {
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
 * CreateGroupWithSubGroup返回参数结构体
 * @class
 */
class CreateGroupWithSubGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新创建群组ID
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取群组列表返回的群组信息
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 群组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 群组主讲人ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * 群组类型 
0-基础群组 
1-组合群组，若为1时会返回子群组ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupType = null;

        /**
         * 子群组ID列表，如有。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubGroupIds = null;

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
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.SubGroupIds = 'SubGroupIds' in params ? params.SubGroupIds : null;

    }
}

/**
 * DescribeDocument返回参数结构体
 * @class
 */
class DescribeDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文档Id
         * @type {string || null}
         */
        this.DocumentId = null;

        /**
         * 文档原址url
         * @type {string || null}
         */
        this.DocumentUrl = null;

        /**
         * 文档名称
         * @type {string || null}
         */
        this.DocumentName = null;

        /**
         * 文档所有者UserId
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 应用Id
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 文档权限
         * @type {number || null}
         */
        this.Permission = null;

        /**
         * 转码结果，无需转码为空，转码成功为结果url，转码失败为错误码
         * @type {string || null}
         */
        this.TranscodeResult = null;

        /**
         * 转码类型
         * @type {number || null}
         */
        this.TranscodeType = null;

        /**
         * 转码进度， 0 - 100 表示（0% - 100%）
         * @type {number || null}
         */
        this.TranscodeProgress = null;

        /**
         * 转码状态，0为无需转码，1为正在转码，2为转码失败，3为转码成功
         * @type {number || null}
         */
        this.TranscodeState = null;

        /**
         * 转码失败后的错误信息
         * @type {string || null}
         */
        this.TranscodeInfo = null;

        /**
         * 文档类型
         * @type {string || null}
         */
        this.DocumentType = null;

        /**
         * 文档大小，单位：字节
         * @type {number || null}
         */
        this.DocumentSize = null;

        /**
         * 更新的UNIX时间戳
         * @type {number || null}
         */
        this.UpdateTime = null;

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
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;
        this.DocumentUrl = 'DocumentUrl' in params ? params.DocumentUrl : null;
        this.DocumentName = 'DocumentName' in params ? params.DocumentName : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.TranscodeResult = 'TranscodeResult' in params ? params.TranscodeResult : null;
        this.TranscodeType = 'TranscodeType' in params ? params.TranscodeType : null;
        this.TranscodeProgress = 'TranscodeProgress' in params ? params.TranscodeProgress : null;
        this.TranscodeState = 'TranscodeState' in params ? params.TranscodeState : null;
        this.TranscodeInfo = 'TranscodeInfo' in params ? params.TranscodeInfo : null;
        this.DocumentType = 'DocumentType' in params ? params.DocumentType : null;
        this.DocumentSize = 'DocumentSize' in params ? params.DocumentSize : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteGroupMember返回参数结构体
 * @class
 */
class DeleteGroupMemberResponse extends  AbstractModel {
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
 * DescribeGroupMemberList返回参数结构体
 * @class
 */
class DescribeGroupMemberListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 查询成员列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

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
        this.Total = 'Total' in params ? params.Total : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 应用配置信息
 * @class
 */
class AppConfig extends  AbstractModel {
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
 * DeleteRecord返回参数结构体
 * @class
 */
class DeleteRecordResponse extends  AbstractModel {
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
 * BatchCreateRoom请求参数结构体
 * @class
 */
class BatchCreateRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码平台的SdkAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 创建房间ID列表
         * @type {Array.<RoomInfo> || null}
         */
        this.RoomInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.RoomInfos) {
            this.RoomInfos = new Array();
            for (let z in params.RoomInfos) {
                let obj = new RoomInfo();
                obj.deserialize(params.RoomInfos[z]);
                this.RoomInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeGroupMemberList请求参数结构体
 * @class
 */
class DescribeGroupMemberListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 分页值，默认1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页数据量，默认20，最大1000
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 用户信息结构体
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用Id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 用户Id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户昵称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户头像Url。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Avatar = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;

    }
}

/**
 * DescribeUser返回参数结构体
 * @class
 */
class DescribeUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用Id。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 用户Id。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户昵称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户头像Url。
         * @type {string || null}
         */
        this.Avatar = null;

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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDocument请求参数结构体
 * @class
 */
class DescribeDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文档Id（唯一id）
         * @type {string || null}
         */
        this.DocumentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;

    }
}

/**
 * BatchDeleteRecord返回参数结构体
 * @class
 */
class BatchDeleteRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次操作删除成功的房间ID列表。如果入参列表中某个房间ID的录制文件已经删除，则出参列表中无对应的房间ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.RoomIds = null;

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
        this.RoomIds = 'RoomIds' in params ? params.RoomIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 水印配置
 * @class
 */
class WatermarkConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印图片的url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 水印宽。为比例值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 水印高。为比例值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 水印X偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * 水印Y偏移, 取值:0-100, 表示区域Y方向的百分比。比如50，则表示位于Y轴中间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LocationY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;

    }
}

/**
 * SetAppCustomContent请求参数结构体
 * @class
 */
class SetAppCustomContentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义内容。
         * @type {Array.<AppCustomContent> || null}
         */
        this.CustomContent = null;

        /**
         * 应用ID。
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CustomContent) {
            this.CustomContent = new Array();
            for (let z in params.CustomContent) {
                let obj = new AppCustomContent();
                obj.deserialize(params.CustomContent[z]);
                this.CustomContent.push(obj);
            }
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * DescribeUser请求参数结构体
 * @class
 */
class DescribeUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Id。
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * RegisterUser返回参数结构体
 * @class
 */
class RegisterUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Id。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 登录/注册成功后返回登录态token。有效期7天。
         * @type {string || null}
         */
        this.Token = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindDocumentToRoom请求参数结构体
 * @class
 */
class BindDocumentToRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间ID。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 文档ID。
         * @type {string || null}
         */
        this.DocumentId = null;

        /**
         * 绑定类型。后台可透传到客户端，默认为0。客户端可以根据这个字段实现业务逻辑。
         * @type {number || null}
         */
        this.BindType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;
        this.BindType = 'BindType' in params ? params.BindType : null;

    }
}

/**
 * CreateDocument请求参数结构体
 * @class
 */
class CreateDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码互动课堂的SdkAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 文档地址。
         * @type {string || null}
         */
        this.DocumentUrl = null;

        /**
         * 文档名称。
         * @type {string || null}
         */
        this.DocumentName = null;

        /**
         * 文档所有者的Id
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 转码类型，可以有如下取值：
0 无需转码（默认）
1 需要转码的文档，ppt，pptx，pdf，doc，docx
2 需要转码的视频，mp4，3pg，mpeg，avi，flv，wmv，rm，h264等
2 需要转码的音频，mp3，wav，wma，aac，flac，opus
         * @type {number || null}
         */
        this.TranscodeType = null;

        /**
         * 权限，可以有如下取值：
0 私有文档（默认）
1 公共文档
         * @type {number || null}
         */
        this.Permission = null;

        /**
         * 文档后缀名。
         * @type {string || null}
         */
        this.DocumentType = null;

        /**
         * 文档大小，单位 字节
         * @type {number || null}
         */
        this.DocumentSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.DocumentUrl = 'DocumentUrl' in params ? params.DocumentUrl : null;
        this.DocumentName = 'DocumentName' in params ? params.DocumentName : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.TranscodeType = 'TranscodeType' in params ? params.TranscodeType : null;
        this.Permission = 'Permission' in params ? params.Permission : null;
        this.DocumentType = 'DocumentType' in params ? params.DocumentType : null;
        this.DocumentSize = 'DocumentSize' in params ? params.DocumentSize : null;

    }
}

/**
 * GetRoomMessage返回参数结构体
 * @class
 */
class GetRoomMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息列表
         * @type {Array.<MessageList> || null}
         */
        this.Messages = null;

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

        if (params.Messages) {
            this.Messages = new Array();
            for (let z in params.Messages) {
                let obj = new MessageList();
                obj.deserialize(params.Messages[z]);
                this.Messages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 批量注册用户信息
 * @class
 */
class BatchUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码互动课堂的SdkAppId。

         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 用户ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户在客户系统的Id。 若用户注册时该字段为空，则默认为 UserId 值一致。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

    }
}

/**
 * BatchAddGroupMember请求参数结构体
 * @class
 */
class BatchAddGroupMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待添加群组ID列表，最大值100
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 待添加成员列表，最大值200
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

    }
}

/**
 * DescribeRoom返回参数结构体
 * @class
 */
class DescribeRoomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 预定的房间开始时间，unix时间戳。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 预定的房间结束时间，unix时间戳。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 老师的UserId。
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * 低代码互动课堂的SdkAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 分辨率。可以有如下取值：
1 标清
2 高清
3 全高清
         * @type {number || null}
         */
        this.Resolution = null;

        /**
         * 最大连麦人数（不包括老师）。取值范围[0, 16]
         * @type {number || null}
         */
        this.MaxMicNumber = null;

        /**
         * 进入课堂时是否自动连麦。可以有以下取值：
0 不自动连麦（需要手动申请上麦，默认值）
1 自动连麦
         * @type {number || null}
         */
        this.AutoMic = null;

        /**
         * 高音质模式。可以有以下取值：
0 不开启高音质（默认值）
1 开启高音质
         * @type {number || null}
         */
        this.AudioQuality = null;

        /**
         * 房间子类型，可以有以下取值：
videodoc 文档+视频
video 纯视频
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * 上课后是否禁止自动录制。可以有以下取值：
0 不禁止录制（自动开启录制，默认值）
1 禁止录制
注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。
         * @type {number || null}
         */
        this.DisableRecord = null;

        /**
         * 助教UserId列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Assistants = null;

        /**
         * 录制地址。仅在房间结束后存在。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordUrl = null;

        /**
         * 课堂状态。0为未开始，1为已开始，2为已结束，3为已过期。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 房间绑定的群组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.MaxMicNumber = 'MaxMicNumber' in params ? params.MaxMicNumber : null;
        this.AutoMic = 'AutoMic' in params ? params.AutoMic : null;
        this.AudioQuality = 'AudioQuality' in params ? params.AudioQuality : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.Assistants = 'Assistants' in params ? params.Assistants : null;
        this.RecordUrl = 'RecordUrl' in params ? params.RecordUrl : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCurrentMemberList请求参数结构体
 * @class
 */
class DescribeCurrentMemberListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间Id。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 分页查询当前页数，从1开始递增。
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页数据量，最大1000。
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeSdkAppIdUsers返回参数结构体
 * @class
 */
class DescribeSdkAppIdUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 当前获取用户信息数组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserInfo> || null}
         */
        this.Users = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new UserInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoomStatistics返回参数结构体
 * @class
 */
class DescribeRoomStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 峰值在线成员人数。
         * @type {number || null}
         */
        this.PeakMemberNumber = null;

        /**
         * 累计在线人数。
         * @type {number || null}
         */
        this.MemberNumber = null;

        /**
         * 记录总数。包含进入房间或者应到未到的。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 成员记录列表。
         * @type {Array.<MemberRecord> || null}
         */
        this.MemberRecords = null;

        /**
         * 秒级unix时间戳，实际房间开始时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RealStartTime = null;

        /**
         * 秒级unix时间戳，实际房间结束时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RealEndTime = null;

        /**
         * 房间消息总数。
         * @type {number || null}
         */
        this.MessageCount = null;

        /**
         * 房间连麦总数。
         * @type {number || null}
         */
        this.MicCount = null;

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
        this.PeakMemberNumber = 'PeakMemberNumber' in params ? params.PeakMemberNumber : null;
        this.MemberNumber = 'MemberNumber' in params ? params.MemberNumber : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.MemberRecords) {
            this.MemberRecords = new Array();
            for (let z in params.MemberRecords) {
                let obj = new MemberRecord();
                obj.deserialize(params.MemberRecords[z]);
                this.MemberRecords.push(obj);
            }
        }
        this.RealStartTime = 'RealStartTime' in params ? params.RealStartTime : null;
        this.RealEndTime = 'RealEndTime' in params ? params.RealEndTime : null;
        this.MessageCount = 'MessageCount' in params ? params.MessageCount : null;
        this.MicCount = 'MicCount' in params ? params.MicCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDocument请求参数结构体
 * @class
 */
class DeleteDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文档ID。
         * @type {string || null}
         */
        this.DocumentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;

    }
}

/**
 * 历史消息列表
 * @class
 */
class MessageList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 消息发送者
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FromAccount = null;

        /**
         * 消息序列号，当前课堂内唯一且单调递增
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 历史消息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MessageItem> || null}
         */
        this.MessageBody = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.FromAccount = 'FromAccount' in params ? params.FromAccount : null;
        this.Seq = 'Seq' in params ? params.Seq : null;

        if (params.MessageBody) {
            this.MessageBody = new Array();
            for (let z in params.MessageBody) {
                let obj = new MessageItem();
                obj.deserialize(params.MessageBody[z]);
                this.MessageBody.push(obj);
            }
        }

    }
}

/**
 * DeleteGroupMember请求参数结构体
 * @class
 */
class DeleteGroupMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群组ID，联合群组无法删除群组成员
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 成员列表，最大值200
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

    }
}

/**
 * GetWatermark请求参数结构体
 * @class
 */
class GetWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码互动课堂的SdkAppId。

         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * 成员记录信息。
 * @class
 */
class MemberRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户名称。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 在线时长，单位秒。
         * @type {number || null}
         */
        this.PresentTime = null;

        /**
         * 是否开启摄像头。
         * @type {number || null}
         */
        this.Camera = null;

        /**
         * 是否开启麦克风。
         * @type {number || null}
         */
        this.Mic = null;

        /**
         * 是否禁言。
         * @type {number || null}
         */
        this.Silence = null;

        /**
         * 回答问题数量。
         * @type {number || null}
         */
        this.AnswerQuestions = null;

        /**
         * 举手数量。
         * @type {number || null}
         */
        this.HandUps = null;

        /**
         * 首次进入房间的unix时间戳。
         * @type {number || null}
         */
        this.FirstJoinTimestamp = null;

        /**
         * 最后一次退出房间的unix时间戳。
         * @type {number || null}
         */
        this.LastQuitTimestamp = null;

        /**
         * 奖励次数。
         * @type {number || null}
         */
        this.Rewords = null;

        /**
         * 用户IP。
         * @type {string || null}
         */
        this.IPAddress = null;

        /**
         * 用户位置信息。
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 用户设备平台信息。0:unknown  1:windows  2:mac  3:android  4:ios  5:web   6:h5   7:miniprogram （小程序）
         * @type {number || null}
         */
        this.Device = null;

        /**
         * 每个成员上麦次数。
         * @type {number || null}
         */
        this.PerMemberMicCount = null;

        /**
         * 每个成员发送消息数量。

         * @type {number || null}
         */
        this.PerMemberMessageCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PresentTime = 'PresentTime' in params ? params.PresentTime : null;
        this.Camera = 'Camera' in params ? params.Camera : null;
        this.Mic = 'Mic' in params ? params.Mic : null;
        this.Silence = 'Silence' in params ? params.Silence : null;
        this.AnswerQuestions = 'AnswerQuestions' in params ? params.AnswerQuestions : null;
        this.HandUps = 'HandUps' in params ? params.HandUps : null;
        this.FirstJoinTimestamp = 'FirstJoinTimestamp' in params ? params.FirstJoinTimestamp : null;
        this.LastQuitTimestamp = 'LastQuitTimestamp' in params ? params.LastQuitTimestamp : null;
        this.Rewords = 'Rewords' in params ? params.Rewords : null;
        this.IPAddress = 'IPAddress' in params ? params.IPAddress : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.PerMemberMicCount = 'PerMemberMicCount' in params ? params.PerMemberMicCount : null;
        this.PerMemberMessageCount = 'PerMemberMessageCount' in params ? params.PerMemberMessageCount : null;

    }
}

/**
 * BatchDeleteGroupMember请求参数结构体
 * @class
 */
class BatchDeleteGroupMemberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待添加群组ID列表，最大值100
         * @type {Array.<string> || null}
         */
        this.GroupIds = null;

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 待添加成员列表，最大值256
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

    }
}

/**
 * ModifyApp请求参数结构体
 * @class
 */
class ModifyAppRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码互动课堂的SdkAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 回调地址。
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * 回调key。
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * UnbindDocumentFromRoom请求参数结构体
 * @class
 */
class UnbindDocumentFromRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间ID。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 文档ID。
         * @type {string || null}
         */
        this.DocumentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.DocumentId = 'DocumentId' in params ? params.DocumentId : null;

    }
}

/**
 * RegisterUser请求参数结构体
 * @class
 */
class RegisterUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码互动课堂的SdkAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 用户名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户在客户系统的Id，需要在同一应用下唯一。
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * 用户头像。
         * @type {string || null}
         */
        this.Avatar = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;

    }
}

/**
 * 批量创建群组基础信息
 * @class
 */
class GroupBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建群组名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 群组主讲人ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TeacherId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;

    }
}

/**
 * LoginUser请求参数结构体
 * @class
 */
class LoginUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 注册获取的用户id。
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * SetWatermark返回参数结构体
 * @class
 */
class SetWatermarkResponse extends  AbstractModel {
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
 * 批量创建房间的房间信息
 * @class
 */
class RoomInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 预定的房间开始时间，unix时间戳。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 预定的房间结束时间，unix时间戳。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 分辨率。可以有如下取值： 1 标清 2 高清 3 全高清
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Resolution = null;

        /**
         * 最大连麦人数（不包括老师）。取值范围[0, 16]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMicNumber = null;

        /**
         * 房间子类型，可以有以下取值： videodoc 文档+视频 video 纯视频
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * 老师ID。通过[注册用户]接口获取的UserId。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * 进入课堂时是否自动连麦。可以有以下取值： 0 不自动连麦（需要手动申请上麦，默认值） 1 自动连麦
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoMic = null;

        /**
         * 释放音视频权限后是否自动取消连麦。可以有以下取值： 0 自动取消连麦（默认值） 1 保持连麦状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TurnOffMic = null;

        /**
         * 高音质模式。可以有以下取值： 0 不开启高音质（默认值） 1 开启高音质
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AudioQuality = null;

        /**
         * 上课后是否禁止自动录制。可以有以下取值： 0 不禁止录制（自动开启录制，默认值） 1 禁止录制 注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DisableRecord = null;

        /**
         * 助教Id列表。通过[注册用户]接口获取的UserId。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Assistants = null;

        /**
         * rtc人数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RTCAudienceNumber = null;

        /**
         * 观看类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AudienceType = null;

        /**
         * 录制布局。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordLayout = null;

        /**
         * 房间绑定的群组ID
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.MaxMicNumber = 'MaxMicNumber' in params ? params.MaxMicNumber : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.AutoMic = 'AutoMic' in params ? params.AutoMic : null;
        this.TurnOffMic = 'TurnOffMic' in params ? params.TurnOffMic : null;
        this.AudioQuality = 'AudioQuality' in params ? params.AudioQuality : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.Assistants = 'Assistants' in params ? params.Assistants : null;
        this.RTCAudienceNumber = 'RTCAudienceNumber' in params ? params.RTCAudienceNumber : null;
        this.AudienceType = 'AudienceType' in params ? params.AudienceType : null;
        this.RecordLayout = 'RecordLayout' in params ? params.RecordLayout : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeDocumentsByRoom返回参数结构体
 * @class
 */
class DescribeDocumentsByRoomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文档信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DocumentInfo> || null}
         */
        this.Documents = null;

        /**
         * 符合查询条件文档总数
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Documents) {
            this.Documents = new Array();
            for (let z in params.Documents) {
                let obj = new DocumentInfo();
                obj.deserialize(params.Documents[z]);
                this.Documents.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoomStatistics请求参数结构体
 * @class
 */
class DescribeRoomStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间Id。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 分页查询当前页数，从1开始递增。
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页数据量，最大1000。
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyRoom请求参数结构体
 * @class
 */
class ModifyRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间ID。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 低代码互动课堂的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 预定的房间开始时间，unix时间戳。直播开始后不允许修改。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 预定的房间结束时间，unix时间戳。直播开始后不允许修改。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 老师ID。直播开始后不允许修改。
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * 房间名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分辨率。可以有如下取值：
1 标清
2 高清
3 全高清
直播开始后不允许修改。
         * @type {number || null}
         */
        this.Resolution = null;

        /**
         * 最大连麦人数（不包括老师）。取值范围[0, 17)
直播开始后不允许修改。
         * @type {number || null}
         */
        this.MaxMicNumber = null;

        /**
         * 进入房间时是否自动连麦。可以有以下取值：
0 不自动连麦（默认值）
1 自动连麦
直播开始后不允许修改。
         * @type {number || null}
         */
        this.AutoMic = null;

        /**
         * 高音质模式。可以有以下取值：
0 不开启高音质（默认值）
1 开启高音质
直播开始后不允许修改。
         * @type {number || null}
         */
        this.AudioQuality = null;

        /**
         * 房间子类型，可以有以下取值：
videodoc 文档+视频
video 纯视频
coteaching 双师
直播开始后不允许修改。
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * 禁止录制。可以有以下取值：
0 不禁止录制（默认值）
1 禁止录制
直播开始后不允许修改。
         * @type {number || null}
         */
        this.DisableRecord = null;

        /**
         * 助教Id列表。直播开始后不允许修改。
         * @type {Array.<string> || null}
         */
        this.Assistants = null;

        /**
         * 房间绑定的群组ID
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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.MaxMicNumber = 'MaxMicNumber' in params ? params.MaxMicNumber : null;
        this.AutoMic = 'AutoMic' in params ? params.AutoMic : null;
        this.AudioQuality = 'AudioQuality' in params ? params.AudioQuality : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.Assistants = 'Assistants' in params ? params.Assistants : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * LoginOriginId返回参数结构体
 * @class
 */
class LoginOriginIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户Id。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 登录/注册成功后返回登录态token。有效期7天。
         * @type {string || null}
         */
        this.Token = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 应用自定义内容
 * @class
 */
class AppCustomContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景参数，一个应用下可以设置多个不同场景。
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * logo地址。
         * @type {string || null}
         */
        this.LogoUrl = null;

        /**
         * 主页地址，可设置用于跳转。
         * @type {string || null}
         */
        this.HomeUrl = null;

        /**
         * 自定义的js。
         * @type {string || null}
         */
        this.JsUrl = null;

        /**
         * 自定义的css。
         * @type {string || null}
         */
        this.CssUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.LogoUrl = 'LogoUrl' in params ? params.LogoUrl : null;
        this.HomeUrl = 'HomeUrl' in params ? params.HomeUrl : null;
        this.JsUrl = 'JsUrl' in params ? params.JsUrl : null;
        this.CssUrl = 'CssUrl' in params ? params.CssUrl : null;

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
 * DescribeSdkAppIdUsers请求参数结构体
 * @class
 */
class DescribeSdkAppIdUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 分页，默认值为1
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 分页数据限制，默认值为20
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 单条消息体内容
 * @class
 */
class MessageItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息类型。0表示文本消息，1表示图片消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MessageType = null;

        /**
         * 文本消息内容。message type为0时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TextMessage = null;

        /**
         * 图片消息URL。 message type为1时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MessageType = 'MessageType' in params ? params.MessageType : null;
        this.TextMessage = 'TextMessage' in params ? params.TextMessage : null;
        this.ImageMessage = 'ImageMessage' in params ? params.ImageMessage : null;

    }
}

/**
 * CreateSupervisor返回参数结构体
 * @class
 */
class CreateSupervisorResponse extends  AbstractModel {
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
 * 场景配置
 * @class
 */
class SceneItem extends  AbstractModel {
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
 * DeleteRoom请求参数结构体
 * @class
 */
class DeleteRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间ID。
         * @type {number || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * BatchCreateGroupWithMembers请求参数结构体
 * @class
 */
class BatchCreateGroupWithMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 批量创建群组基础信息，最大长度限制256
         * @type {Array.<GroupBaseInfo> || null}
         */
        this.GroupBaseInfos = null;

        /**
         * 群组绑定的成员列表，一次性最多200个
         * @type {Array.<string> || null}
         */
        this.MemberIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.GroupBaseInfos) {
            this.GroupBaseInfos = new Array();
            for (let z in params.GroupBaseInfos) {
                let obj = new GroupBaseInfo();
                obj.deserialize(params.GroupBaseInfos[z]);
                this.GroupBaseInfos.push(obj);
            }
        }
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;

    }
}

/**
 * DescribeGroup请求参数结构体
 * @class
 */
class DescribeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 群组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 低代码平台应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * CreateSupervisor请求参数结构体
 * @class
 */
class CreateSupervisorRequest extends  AbstractModel {
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
 * 背景图片配置
 * @class
 */
class BackgroundPictureConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 背景图片的url
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeCurrentMemberList返回参数结构体
 * @class
 */
class DescribeCurrentMemberListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数。当前房间的总人数。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 成员记录列表。
         * @type {Array.<MemberRecord> || null}
         */
        this.MemberRecords = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.MemberRecords) {
            this.MemberRecords = new Array();
            for (let z in params.MemberRecords) {
                let obj = new MemberRecord();
                obj.deserialize(params.MemberRecords[z]);
                this.MemberRecords.push(obj);
            }
        }
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
 * DescribeGroupList返回参数结构体
 * @class
 */
class DescribeGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数。当前匹配群组总数。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 群组信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupInfo> || null}
         */
        this.GroupInfos = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.GroupInfos) {
            this.GroupInfos = new Array();
            for (let z in params.GroupInfos) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupInfos[z]);
                this.GroupInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRoom返回参数结构体
 * @class
 */
class CreateRoomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间ID。
         * @type {number || null}
         */
        this.RoomId = null;

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
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddGroupMember返回参数结构体
 * @class
 */
class AddGroupMemberResponse extends  AbstractModel {
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
 * 文字水印配置
 * @class
 */
class TextMarkConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文字水印内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 文字水印颜色
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Text = 'Text' in params ? params.Text : null;
        this.Color = 'Color' in params ? params.Color : null;

    }
}

module.exports = {
    CreateRoomRequest: CreateRoomRequest,
    ModifyRoomResponse: ModifyRoomResponse,
    DescribeAppDetailResponse: DescribeAppDetailResponse,
    BatchDeleteRecordRequest: BatchDeleteRecordRequest,
    BatchRegisterRequest: BatchRegisterRequest,
    DeleteRoomResponse: DeleteRoomResponse,
    ModifyUserProfileRequest: ModifyUserProfileRequest,
    CreateGroupWithMembersRequest: CreateGroupWithMembersRequest,
    DescribeDocumentsByRoomRequest: DescribeDocumentsByRoomRequest,
    BatchCreateGroupWithMembersResponse: BatchCreateGroupWithMembersResponse,
    CreateGroupWithMembersResponse: CreateGroupWithMembersResponse,
    BatchAddGroupMemberResponse: BatchAddGroupMemberResponse,
    ModifyUserProfileResponse: ModifyUserProfileResponse,
    ModifyAppResponse: ModifyAppResponse,
    LoginOriginIdRequest: LoginOriginIdRequest,
    BatchRegisterResponse: BatchRegisterResponse,
    BindDocumentToRoomResponse: BindDocumentToRoomResponse,
    CreateGroupWithSubGroupRequest: CreateGroupWithSubGroupRequest,
    SetWatermarkRequest: SetWatermarkRequest,
    DescribeRoomRequest: DescribeRoomRequest,
    BatchCreateRoomResponse: BatchCreateRoomResponse,
    UnbindDocumentFromRoomResponse: UnbindDocumentFromRoomResponse,
    CreateDocumentResponse: CreateDocumentResponse,
    DescribeGroupResponse: DescribeGroupResponse,
    SetAppCustomContentResponse: SetAppCustomContentResponse,
    BatchUserRequest: BatchUserRequest,
    LoginUserResponse: LoginUserResponse,
    ModifyGroupRequest: ModifyGroupRequest,
    DescribeAppDetailRequest: DescribeAppDetailRequest,
    DeleteGroupRequest: DeleteGroupRequest,
    AddGroupMemberRequest: AddGroupMemberRequest,
    DescribeGroupListRequest: DescribeGroupListRequest,
    GetRoomMessageRequest: GetRoomMessageRequest,
    DocumentInfo: DocumentInfo,
    GetWatermarkResponse: GetWatermarkResponse,
    DeleteDocumentResponse: DeleteDocumentResponse,
    DeleteRecordRequest: DeleteRecordRequest,
    BatchDeleteGroupMemberResponse: BatchDeleteGroupMemberResponse,
    CreateGroupWithSubGroupResponse: CreateGroupWithSubGroupResponse,
    GroupInfo: GroupInfo,
    DescribeDocumentResponse: DescribeDocumentResponse,
    DeleteGroupMemberResponse: DeleteGroupMemberResponse,
    DescribeGroupMemberListResponse: DescribeGroupMemberListResponse,
    AppConfig: AppConfig,
    DeleteRecordResponse: DeleteRecordResponse,
    BatchCreateRoomRequest: BatchCreateRoomRequest,
    DescribeGroupMemberListRequest: DescribeGroupMemberListRequest,
    UserInfo: UserInfo,
    DescribeUserResponse: DescribeUserResponse,
    DescribeDocumentRequest: DescribeDocumentRequest,
    BatchDeleteRecordResponse: BatchDeleteRecordResponse,
    WatermarkConfig: WatermarkConfig,
    SetAppCustomContentRequest: SetAppCustomContentRequest,
    DescribeUserRequest: DescribeUserRequest,
    RegisterUserResponse: RegisterUserResponse,
    BindDocumentToRoomRequest: BindDocumentToRoomRequest,
    CreateDocumentRequest: CreateDocumentRequest,
    GetRoomMessageResponse: GetRoomMessageResponse,
    BatchUserInfo: BatchUserInfo,
    BatchAddGroupMemberRequest: BatchAddGroupMemberRequest,
    DescribeRoomResponse: DescribeRoomResponse,
    DescribeCurrentMemberListRequest: DescribeCurrentMemberListRequest,
    DescribeSdkAppIdUsersResponse: DescribeSdkAppIdUsersResponse,
    DescribeRoomStatisticsResponse: DescribeRoomStatisticsResponse,
    DeleteDocumentRequest: DeleteDocumentRequest,
    MessageList: MessageList,
    DeleteGroupMemberRequest: DeleteGroupMemberRequest,
    GetWatermarkRequest: GetWatermarkRequest,
    MemberRecord: MemberRecord,
    BatchDeleteGroupMemberRequest: BatchDeleteGroupMemberRequest,
    ModifyAppRequest: ModifyAppRequest,
    UnbindDocumentFromRoomRequest: UnbindDocumentFromRoomRequest,
    RegisterUserRequest: RegisterUserRequest,
    GroupBaseInfo: GroupBaseInfo,
    LoginUserRequest: LoginUserRequest,
    SetWatermarkResponse: SetWatermarkResponse,
    RoomInfo: RoomInfo,
    DescribeDocumentsByRoomResponse: DescribeDocumentsByRoomResponse,
    DescribeRoomStatisticsRequest: DescribeRoomStatisticsRequest,
    ModifyRoomRequest: ModifyRoomRequest,
    LoginOriginIdResponse: LoginOriginIdResponse,
    AppCustomContent: AppCustomContent,
    DeleteGroupResponse: DeleteGroupResponse,
    DescribeSdkAppIdUsersRequest: DescribeSdkAppIdUsersRequest,
    MessageItem: MessageItem,
    CreateSupervisorResponse: CreateSupervisorResponse,
    SceneItem: SceneItem,
    DeleteRoomRequest: DeleteRoomRequest,
    BatchCreateGroupWithMembersRequest: BatchCreateGroupWithMembersRequest,
    DescribeGroupRequest: DescribeGroupRequest,
    CreateSupervisorRequest: CreateSupervisorRequest,
    BackgroundPictureConfig: BackgroundPictureConfig,
    DescribeCurrentMemberListResponse: DescribeCurrentMemberListResponse,
    ModifyGroupResponse: ModifyGroupResponse,
    DescribeGroupListResponse: DescribeGroupListResponse,
    CreateRoomResponse: CreateRoomResponse,
    AddGroupMemberResponse: AddGroupMemberResponse,
    TextMarkConfig: TextMarkConfig,

}
