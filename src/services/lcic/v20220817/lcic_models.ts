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

/**
 * CreateRoom请求参数结构体
 */
export interface CreateRoomRequest {
  /**
   * 房间名称。
   */
  Name: string

  /**
   * 预定的房间开始时间，unix时间戳。
   */
  StartTime: number

  /**
   * 预定的房间结束时间，unix时间戳。
   */
  EndTime: number

  /**
   * 低代码互动课堂的SdkAppId。
   */
  SdkAppId: number

  /**
      * 分辨率。可以有如下取值：
1 标清
2 高清
3 全高清
      */
  Resolution: number

  /**
   * 最大连麦人数（不包括老师）。取值范围[0, 17)
   */
  MaxMicNumber: number

  /**
      * 房间子类型，可以有以下取值：
videodoc 文档+视频
video 纯视频
coteaching 双师
      */
  SubType: string

  /**
   * 老师ID。
   */
  TeacherId?: string

  /**
      * 进入房间时是否自动连麦。可以有以下取值：
0 不自动连麦（默认值）
1 自动连麦
      */
  AutoMic?: number

  /**
      * 高音质模式。可以有以下取值：
0 不开启高音质（默认值）
1 开启高音质
      */
  AudioQuality?: number

  /**
      * 禁止录制。可以有以下取值：
0 不禁止录制（默认值）
1 禁止录制
      */
  DisableRecord?: number

  /**
   * 助教Id列表。
   */
  Assistants?: Array<string>

  /**
   * 录制布局。
   */
  RecordLayout?: number
}

/**
 * SetAppCustomContent请求参数结构体
 */
export interface SetAppCustomContentRequest {
  /**
   * 自定义内容。
   */
  CustomContent: Array<AppCustomContent>

  /**
   * 应用ID。
   */
  SdkAppId: number
}

/**
 * CreateSupervisor请求参数结构体
 */
export type CreateSupervisorRequest = null

/**
 * DescribeRoom返回参数结构体
 */
export interface DescribeRoomResponse {
  /**
   * 房间名称。
   */
  Name: string

  /**
   * 预定的房间开始时间，unix时间戳。
   */
  StartTime: number

  /**
   * 预定的房间结束时间，unix时间戳。
   */
  EndTime: number

  /**
   * 老师ID。
   */
  TeacherId: string

  /**
   * 低代码互动课堂的SdkAppId。
   */
  SdkAppId: number

  /**
      * 分辨率。可以有如下取值：
1 标清
2 高清
3 全高清
      */
  Resolution: number

  /**
   * 最大连麦人数（不包括老师）。取值范围[0, 17)
   */
  MaxMicNumber: number

  /**
      * 进入房间时是否自动连麦。可以有以下取值：
0 不自动连麦（默认值）
1 自动连麦
      */
  AutoMic: number

  /**
      * 高音质模式。可以有以下取值：
0 不开启高音质（默认值）
1 开启高音质
      */
  AudioQuality: number

  /**
      * 房间子类型，可以有以下取值：
videodoc 文档+视频
video 纯视频
coteaching 双师
      */
  SubType: string

  /**
      * 禁止录制。可以有以下取值：
0 不禁止录制（默认值）
1 禁止录制
      */
  DisableRecord: number

  /**
      * 助教Id列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Assistants: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RegisterUser请求参数结构体
 */
export interface RegisterUserRequest {
  /**
   * 低代码互动课堂的SdkAppId。
   */
  SdkAppId: number

  /**
   * 用户名称。
   */
  Name?: string

  /**
   * 用户在客户系统的Id，需要在同一应用下唯一。
   */
  OriginId?: string

  /**
   * 用户头像。
   */
  Avatar?: string
}

/**
 * LoginOriginId请求参数结构体
 */
export interface LoginOriginIdRequest {
  /**
   * 低代码互动课堂的SdkAppId。
   */
  SdkAppId: number

  /**
   * 用户在客户系统的Id，需要在同一应用下唯一。
   */
  OriginId: string
}

/**
 * DescribeUser请求参数结构体
 */
export interface DescribeUserRequest {
  /**
   * 用户Id。
   */
  UserId: string
}

/**
 * RegisterUser返回参数结构体
 */
export interface RegisterUserResponse {
  /**
   * 用户Id。
   */
  UserId: string

  /**
   * 登录/注册成功后返回登录态token。有效期7天。
   */
  Token: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDocument返回参数结构体
 */
export interface CreateDocumentResponse {
  /**
   * 文档ID。
   */
  DocumentId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LoginUser请求参数结构体
 */
export interface LoginUserRequest {
  /**
   * 注册获取的用户id。
   */
  UserId: string
}

/**
 * CreateSupervisor返回参数结构体
 */
export interface CreateSupervisorResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDocument请求参数结构体
 */
export interface CreateDocumentRequest {
  /**
   * 低代码互动课堂的SdkAppId。
   */
  SdkAppId: number

  /**
   * 文档地址。
   */
  DocumentUrl: string

  /**
   * 文档名称。
   */
  DocumentName: string

  /**
   * 文档所有者的Id
   */
  Owner: string

  /**
      * 转码类型，可以有如下取值：
0 无需转码（默认）
1 需要转码的文档，ppt，pptx，pdf，doc，docx
2 需要转码的视频，mp4，3pg，mpeg，avi，flv，wmv，rm，h264等
2 需要转码的音频，mp3，wav，wma，aac，flac，opus
      */
  TranscodeType?: number

  /**
      * 权限，可以有如下取值：
0 私有文档（默认）
1 公共文档
      */
  Permission?: number

  /**
   * 文档后缀名。
   */
  DocumentType?: string

  /**
   * 文档大小，单位 字节
   */
  DocumentSize?: number
}

/**
 * CreateRoom返回参数结构体
 */
export interface CreateRoomResponse {
  /**
   * 房间ID。
   */
  RoomId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUser返回参数结构体
 */
export interface DescribeUserResponse {
  /**
   * 应用Id。
   */
  SdkAppId: number

  /**
   * 用户Id。
   */
  UserId: string

  /**
   * 用户昵称。
   */
  Name: string

  /**
   * 用户头像Url。
   */
  Avatar: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetAppCustomContent返回参数结构体
 */
export interface SetAppCustomContentResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRoom请求参数结构体
 */
export interface DescribeRoomRequest {
  /**
   * 房间Id。
   */
  RoomId: number
}

/**
 * LoginOriginId返回参数结构体
 */
export interface LoginOriginIdResponse {
  /**
   * 用户Id。
   */
  UserId: string

  /**
   * 登录/注册成功后返回登录态token。有效期7天。
   */
  Token: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LoginUser返回参数结构体
 */
export interface LoginUserResponse {
  /**
   * 用户Id。
   */
  UserId: string

  /**
   * 登录/注册成功后返回登录态token。有效期7天。
   */
  Token: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用自定义内容
 */
export interface AppCustomContent {
  /**
   * 场景参数，一个应用下可以设置多个不同场景。
   */
  Scene: string

  /**
   * logo地址。
   */
  LogoUrl?: string

  /**
   * 主页地址，可设置用于跳转。
   */
  HomeUrl?: string

  /**
   * 自定义的js。
   */
  JsUrl?: string

  /**
   * 自定义的css。
   */
  CssUrl?: string
}
