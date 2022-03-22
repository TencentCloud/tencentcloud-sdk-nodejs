/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  ScanVoiceResponse,
  AppStatisticsItem,
  ModifyAppStatusRequest,
  InOutTimeInfo,
  DescribeScanResultListResponse,
  DescribeApplicationDataRequest,
  VoiceFilterRequest,
  CreateScanUserResponse,
  DescribeRealtimeScanConfigResponse,
  VoiceMessageStatisticsItem,
  RoomUser,
  DescribeRoomInfoRequest,
  UpdateScanRoomsRequest,
  DescribeFilterResultResponse,
  DescribeRealtimeScanConfigRequest,
  DescribeScanResultListRequest,
  CreateAgeDetectTaskRequest,
  RealTimeSpeechStatisticsItem,
  CreateScanUserRequest,
  VoiceFilterResponse,
  Tag,
  AgeDetectTask,
  DescribeAgeDetectTaskResponse,
  VoiceMessageConf,
  ApplicationDataStatistics,
  DeleteScanUserRequest,
  ModifyAppStatusResp,
  DescribeAppStatisticsResponse,
  UpdateScanRoomsResponse,
  DescribeApplicationDataResponse,
  Task,
  DeleteScanUserResponse,
  UpdateScanUsersResponse,
  VoiceFilterStatisticsItem,
  CreateAppResp,
  DescribeRoomInfoResponse,
  DescribeAgeDetectTaskRequest,
  ModifyRoomInfoRequest,
  DescribeUserInAndOutTimeResponse,
  VoiceFilterInfo,
  AgeDetectTaskResult,
  ModifyRoomInfoResponse,
  DescribeScanResult,
  DescribeFilterResultListRequest,
  VoiceFilter,
  ScanDetail,
  DescribeFilterResultListResponse,
  CreateAgeDetectTaskResponse,
  CreateAppRequest,
  RealtimeSpeechConf,
  DescribeAppStatisticsResp,
  ScanVoiceResult,
  CreateAppResponse,
  DescribeAppStatisticsRequest,
  ScanPiece,
  ModifyAppStatusResponse,
  ScanVoiceRequest,
  VoiceFilterConf,
  UpdateScanUsersRequest,
  StatisticsItem,
  DescribeFilterResultRequest,
  DescribeUserInAndOutTimeRequest,
} from "./gme_models"

/**
 * gme client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("gme.tencentcloudapi.com", "2018-07-11", clientConfig)
  }

  /**
   * 根据应用ID和文件ID查询识别结果
   */
  async DescribeFilterResult(
    req: DescribeFilterResultRequest,
    cb?: (error: string, rep: DescribeFilterResultResponse) => void
  ): Promise<DescribeFilterResultResponse> {
    return this.request("DescribeFilterResult", req, cb)
  }

  /**
   * 更新自定义送检房间号
   */
  async UpdateScanRooms(
    req: UpdateScanRoomsRequest,
    cb?: (error: string, rep: UpdateScanRoomsResponse) => void
  ): Promise<UpdateScanRoomsResponse> {
    return this.request("UpdateScanRooms", req, cb)
  }

  /**
   * 本接口(CreateApp)用于创建一个GME应用。
   */
  async CreateApp(
    req: CreateAppRequest,
    cb?: (error: string, rep: CreateAppResponse) => void
  ): Promise<CreateAppResponse> {
    return this.request("CreateApp", req, cb)
  }

  /**
     * 本接口(DescribeScanResultList)用于查询语音检测结果，查询任务列表最多支持100个。
<p style="color:red">如果在提交语音检测任务时未设置 Callback 字段，则需要通过本接口获取检测结果</p>
     */
  async DescribeScanResultList(
    req: DescribeScanResultListRequest,
    cb?: (error: string, rep: DescribeScanResultListResponse) => void
  ): Promise<DescribeScanResultListResponse> {
    return this.request("DescribeScanResultList", req, cb)
  }

  /**
     * 本接口用于识别涉黄等违规音频，成功会回调配置在应用的回调地址。回调示例如下：
{"BizId":0,"FileId":"test_file_id","FileName":"test_file_name","FileUrl":"test_file_url","OpenId":"test_open_id","TimeStamp":"0000-00-00 00:00:00","Data":[{"Type":1,"Word":"xx"}]}
Type表示过滤类型，1：色情，2：谩骂
     */
  async VoiceFilter(
    req: VoiceFilterRequest,
    cb?: (error: string, rep: VoiceFilterResponse) => void
  ): Promise<VoiceFilterResponse> {
    return this.request("VoiceFilter", req, cb)
  }

  /**
   * 本接口(DescribeApplicationData)用于获取数据详情信息，最多可拉取最近90天的数据。
   */
  async DescribeApplicationData(
    req: DescribeApplicationDataRequest,
    cb?: (error: string, rep: DescribeApplicationDataResponse) => void
  ): Promise<DescribeApplicationDataResponse> {
    return this.request("DescribeApplicationData", req, cb)
  }

  /**
   * 根据日期查询识别结果列表
   */
  async DescribeFilterResultList(
    req: DescribeFilterResultListRequest,
    cb?: (error: string, rep: DescribeFilterResultListResponse) => void
  ): Promise<DescribeFilterResultListResponse> {
    return this.request("DescribeFilterResultList", req, cb)
  }

  /**
   * 删除自定义送检用户
   */
  async DeleteScanUser(
    req: DeleteScanUserRequest,
    cb?: (error: string, rep: DeleteScanUserResponse) => void
  ): Promise<DeleteScanUserResponse> {
    return this.request("DeleteScanUser", req, cb)
  }

  /**
   * 更新自定义送检用户号
   */
  async UpdateScanUsers(
    req: UpdateScanUsersRequest,
    cb?: (error: string, rep: UpdateScanUsersResponse) => void
  ): Promise<UpdateScanUsersResponse> {
    return this.request("UpdateScanUsers", req, cb)
  }

  /**
   * 本接口(DescribeAppStatistics)用于获取某个GME应用的用量数据。包括实时语音，语音消息及转文本，语音分析等。最长查询周期为最近30天。
   */
  async DescribeAppStatistics(
    req: DescribeAppStatisticsRequest,
    cb?: (error: string, rep: DescribeAppStatisticsResponse) => void
  ): Promise<DescribeAppStatisticsResponse> {
    return this.request("DescribeAppStatistics", req, cb)
  }

  /**
     * 本接口(ScanVoice)用于提交语音检测任务，检测任务列表最多支持100个。使用前请您登录[控制台 - 服务配置](https://console.cloud.tencent.com/gamegme/conf)开启语音分析服务。
</br></br>

<h4><b>功能试用说明：</b></h4>
<li>打开前往<a href="https://console.cloud.tencent.com/gamegme/tryout">控制台 - 产品试用</a>免费试用语音分析服务。</li>
</br>

<h4><b>接口功能说明：</b></h4>
<li>支持对语音流或语音文件进行检测，判断其中是否包含违规内容。</li>
<li>支持设置回调地址 Callback 获取检测结果，同时支持通过接口(查询语音检测结果)主动轮询获取检测结果。</li>
<li>支持场景输入，包括：谩骂、色情等场景</li>
<li>支持批量提交检测任务。检测任务列表最多支持100个。</li>
</br>
<h4><b>音频文件限制说明：</b></h4>
<li>音频文件大小限制：100 M</li>
<li>音频文件时长限制：30分钟</li>
<li>音频文件格式支持的类型：.wav、.m4a、.amr、.mp3、.aac、.wma、.ogg</li>
</br>
<h4><b>语音流限制说明：</b></h4>
<li>语音流格式支持的类型：.m3u8、.flv</li>
<li>语音流支持的传输协议：RTMP、HTTP、HTTPS</li>
<li>语音流时长限制：4小时</li>
<li>支持音视频流分离并对音频流进行分析</li>
</br>
<h4 id="Label_Value"><b>Scenes 与 Label 参数说明：</b></h4>
<p>提交语音检测任务时，需要指定 Scenes 场景参数，<font color="red">目前要求您设置 Scenes 参数值为：["default"]</font>；而在检测结果中，则包含请求时指定的场景，以及对应类型的检测结果。</p>
<table>
<thread>
<tr>
<th>场景</th>
<th>描述</th>
<th>Label</th>
</tr>
</thread>
<tbody>
<tr>
<td>语音检测</td>
<td>语音检测的检测类型</td>
<td>
<p>normal:正常文本</p>
<p>porn:色情</p>
<p>abuse:谩骂</p>
<p>ad :广告</p>
<p>contraband :违禁</p>
<p>customized:自定义词库。目前白名单开放，如有需要请<a href="https://cloud.tencent.com/apply/p/8809fjcik56">联系我们</a>。</p>
</td>
</tr>
</tbody>
</table>
</br>
<h4 id="Callback_Declare"><b>回调相关说明：</b></h4>
<li>如果在请求参数中指定了回调地址参数 Callback，即一个 HTTP(S) 协议接口的 URL，则需要支持 POST 方法，传输数据编码采用 UTF-8。</li>
<li>在推送回调数据后，接收到的 HTTP 状态码为 200 时，表示推送成功。</li>
<li>HTTP 头参数说明：</li>
<table>
<thread>
<tr>
<th>名称</th>
<th>类型</th>
<th>是否必需</th>
<th>描述</th>
</tr>
</thread>
<tbody>
<tr>
<td>Signatue</td>
<td>string</td>
<td>是</td>
<td>签名，具体见<a href="#Callback_Signatue">签名生成说明</a></td>
</tr>
</tbody>
</table>
<ul  id="Callback_Signatue">
	<li>签名生成说明：</li>
	<ul>
		<li>使用 HMAC-SH1 算法, 最终结果做 BASE64 编码;</li>
		<li>签名原文串为 POST+body 的整个json内容(长度以 Content-Length 为准);</li>
		<li>签名key为应用的 SecretKey，可以通过控制台查看。</li>
	</ul>
</ul>

<li>回调示例如下<font color="red">（详细字段说明见结构：
<a href="https://cloud.tencent.com/document/api/607/35375#DescribeScanResult" target="_blank">DescribeScanResult</a>）</font>：</li>
<pre><code>{
	"Code": 0,
	"DataId": "1400000000_test_data_id",
	"ScanFinishTime": 1566720906,
	"HitFlag": true,
	"Live": false,
	"Msg": "",
	"ScanPiece": [{
		"DumpUrl": "",
		"HitFlag": true,
		"MainType": "abuse",
		"RoomId": "123",
		"OpenId": "xxx",
		"Info":"",
		"Offset": 0,
		"Duration": 3400,
		"PieceStartTime":1574684231,
		"ScanDetail": [{
			"EndTime": 1110,
			"KeyWord": "xxx",
			"Label": "abuse",
			"Rate": "90.00",
			"StartTime": 1110
		}, {
			"EndTime": 1380,
			"KeyWord": "xxx",
			"Label": "abuse",
			"Rate": "90.00",
			"StartTime": 930
		}, {
			"EndTime": 1560,
			"KeyWord": "xxx",
			"Label": "abuse",
			"Rate": "90.00",
			"StartTime": 930
		}, {
			"EndTime": 2820,
			"KeyWord": "xxx",
			"Label": "abuse",
			"Rate": "90.00",
			"StartTime": 2490
		}]
	}],
	"ScanStartTime": 1566720905,
	"Scenes": [
		"default"
	],
	"Status": "Success",
	"TaskId": "xxx",
	"Url": "https://xxx/xxx.m4a"
}
</code></pre>
     */
  async ScanVoice(
    req: ScanVoiceRequest,
    cb?: (error: string, rep: ScanVoiceResponse) => void
  ): Promise<ScanVoiceResponse> {
    return this.request("ScanVoice", req, cb)
  }

  /**
   * 修改房间信息
   */
  async ModifyRoomInfo(
    req: ModifyRoomInfoRequest,
    cb?: (error: string, rep: ModifyRoomInfoResponse) => void
  ): Promise<ModifyRoomInfoResponse> {
    return this.request("ModifyRoomInfo", req, cb)
  }

  /**
   * 新增自定义送检用户
   */
  async CreateScanUser(
    req: CreateScanUserRequest,
    cb?: (error: string, rep: CreateScanUserResponse) => void
  ): Promise<CreateScanUserResponse> {
    return this.request("CreateScanUser", req, cb)
  }

  /**
     * 用于创建年龄语音识别任务的接口，请求频率10次/秒。该接口目前通过白名单开放试用，如有需求，请提交工单申请。
</br>
<h4><b>接口功能说明：</b></h4>
<li>支持对语音文件进行检测，判断是否为未成年人。</li>
<li>支持批量提交检测子任务。检测子任务列表最多支持100个。</li>
</br>
<h4><b>音频文件限制说明：</b></h4>
<li>音频文件大小限制：10 M</li>
<li>音频文件时长限制：3分钟</li>
<li>音频文件格式支持的类型：.wav、.m4a、.amr、.mp3、.aac、.wma、.ogg</li>
</br>
     */
  async CreateAgeDetectTask(
    req: CreateAgeDetectTaskRequest,
    cb?: (error: string, rep: CreateAgeDetectTaskResponse) => void
  ): Promise<CreateAgeDetectTaskResponse> {
    return this.request("CreateAgeDetectTask", req, cb)
  }

  /**
   * 本接口(ModifyAppStatus)用于修改应用总开关状态。
   */
  async ModifyAppStatus(
    req: ModifyAppStatusRequest,
    cb?: (error: string, rep: ModifyAppStatusResponse) => void
  ): Promise<ModifyAppStatusResponse> {
    return this.request("ModifyAppStatus", req, cb)
  }

  /**
   * 获取用户自定义送检信息
   */
  async DescribeRealtimeScanConfig(
    req: DescribeRealtimeScanConfigRequest,
    cb?: (error: string, rep: DescribeRealtimeScanConfigResponse) => void
  ): Promise<DescribeRealtimeScanConfigResponse> {
    return this.request("DescribeRealtimeScanConfig", req, cb)
  }

  /**
   * 拉取用户在房间得进出时间
   */
  async DescribeUserInAndOutTime(
    req: DescribeUserInAndOutTimeRequest,
    cb?: (error: string, rep: DescribeUserInAndOutTimeResponse) => void
  ): Promise<DescribeUserInAndOutTimeResponse> {
    return this.request("DescribeUserInAndOutTime", req, cb)
  }

  /**
   * 获取房间内用户信息
   */
  async DescribeRoomInfo(
    req: DescribeRoomInfoRequest,
    cb?: (error: string, rep: DescribeRoomInfoResponse) => void
  ): Promise<DescribeRoomInfoResponse> {
    return this.request("DescribeRoomInfo", req, cb)
  }

  /**
   * 查询年龄语音识别任务结果，请求频率10次/秒。该接口目前通过白名单开放试用，如有需求，请提交工单申请。
   */
  async DescribeAgeDetectTask(
    req: DescribeAgeDetectTaskRequest,
    cb?: (error: string, rep: DescribeAgeDetectTaskResponse) => void
  ): Promise<DescribeAgeDetectTaskResponse> {
    return this.request("DescribeAgeDetectTask", req, cb)
  }
}
