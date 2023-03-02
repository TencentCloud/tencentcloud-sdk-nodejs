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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const ApplicationList = models.ApplicationList;
const ScanVoiceResponse = models.ScanVoiceResponse;
const AppStatisticsItem = models.AppStatisticsItem;
const ModifyAppStatusRequest = models.ModifyAppStatusRequest;
const CreateCustomizationResponse = models.CreateCustomizationResponse;
const DescribeScanResultListResponse = models.DescribeScanResultListResponse;
const DescribeApplicationDataRequest = models.DescribeApplicationDataRequest;
const UserMicStatus = models.UserMicStatus;
const DescribeApplicationListResponse = models.DescribeApplicationListResponse;
const CreateScanUserResponse = models.CreateScanUserResponse;
const DescribeRealtimeScanConfigResponse = models.DescribeRealtimeScanConfigResponse;
const ModifyUserMicStatusRequest = models.ModifyUserMicStatusRequest;
const CustomizationConfigs = models.CustomizationConfigs;
const VoiceMessageStatisticsItem = models.VoiceMessageStatisticsItem;
const DeleteRoomMemberRequest = models.DeleteRoomMemberRequest;
const RoomUser = models.RoomUser;
const CreateCustomizationRequest = models.CreateCustomizationRequest;
const DescribeRoomInfoRequest = models.DescribeRoomInfoRequest;
const StreamTextStatisticsItem = models.StreamTextStatisticsItem;
const UpdateScanRoomsRequest = models.UpdateScanRoomsRequest;
const ModifyCustomizationResponse = models.ModifyCustomizationResponse;
const DescribeRealtimeScanConfigRequest = models.DescribeRealtimeScanConfigRequest;
const DescribeScanResultListRequest = models.DescribeScanResultListRequest;
const ModifyCustomizationStateResponse = models.ModifyCustomizationStateResponse;
const CreateAgeDetectTaskRequest = models.CreateAgeDetectTaskRequest;
const RealTimeSpeechStatisticsItem = models.RealTimeSpeechStatisticsItem;
const DescribeAppStatisticsRequest = models.DescribeAppStatisticsRequest;
const CreateScanUserRequest = models.CreateScanUserRequest;
const ModifyCustomizationStateRequest = models.ModifyCustomizationStateRequest;
const Task = models.Task;
const Tag = models.Tag;
const DescribeAgeDetectTaskResponse = models.DescribeAgeDetectTaskResponse;
const GetCustomizationListResponse = models.GetCustomizationListResponse;
const AudioTextStatisticsItem = models.AudioTextStatisticsItem;
const ApplicationDataStatistics = models.ApplicationDataStatistics;
const DeleteScanUserRequest = models.DeleteScanUserRequest;
const ModifyAppStatusResp = models.ModifyAppStatusResp;
const DescribeAppStatisticsResponse = models.DescribeAppStatisticsResponse;
const UpdateScanRoomsResponse = models.UpdateScanRoomsResponse;
const UpdateScanUsersResponse = models.UpdateScanUsersResponse;
const DescribeApplicationDataResponse = models.DescribeApplicationDataResponse;
const DeleteRoomMemberResponse = models.DeleteRoomMemberResponse;
const DeleteScanUserResponse = models.DeleteScanUserResponse;
const ModifyCustomizationRequest = models.ModifyCustomizationRequest;
const VoiceMessageConf = models.VoiceMessageConf;
const VoiceFilterStatisticsItem = models.VoiceFilterStatisticsItem;
const CreateAppResp = models.CreateAppResp;
const DescribeRoomInfoResponse = models.DescribeRoomInfoResponse;
const DescribeAgeDetectTaskRequest = models.DescribeAgeDetectTaskRequest;
const DeleteCustomizationResponse = models.DeleteCustomizationResponse;
const ModifyUserMicStatusResponse = models.ModifyUserMicStatusResponse;
const DescribeApplicationListRequest = models.DescribeApplicationListRequest;
const GetCustomizationListRequest = models.GetCustomizationListRequest;
const DescribeUserInAndOutTimeResponse = models.DescribeUserInAndOutTimeResponse;
const UpdateScanUsersRequest = models.UpdateScanUsersRequest;
const DeleteResult = models.DeleteResult;
const AgeDetectTaskResult = models.AgeDetectTaskResult;
const DescribeScanResult = models.DescribeScanResult;
const AgeDetectTask = models.AgeDetectTask;
const Filter = models.Filter;
const ScanDetail = models.ScanDetail;
const CreateAgeDetectTaskResponse = models.CreateAgeDetectTaskResponse;
const CreateAppRequest = models.CreateAppRequest;
const RealtimeSpeechConf = models.RealtimeSpeechConf;
const DescribeAppStatisticsResp = models.DescribeAppStatisticsResp;
const ScanVoiceResult = models.ScanVoiceResult;
const CreateAppResponse = models.CreateAppResponse;
const OverseaTextStatisticsItem = models.OverseaTextStatisticsItem;
const StatusInfo = models.StatusInfo;
const DeleteCustomizationRequest = models.DeleteCustomizationRequest;
const ScanPiece = models.ScanPiece;
const ModifyAppStatusResponse = models.ModifyAppStatusResponse;
const InOutTimeInfo = models.InOutTimeInfo;
const VoiceFilterConf = models.VoiceFilterConf;
const RealtimeTextStatisticsItem = models.RealtimeTextStatisticsItem;
const ServiceStatus = models.ServiceStatus;
const StatisticsItem = models.StatisticsItem;
const ScanVoiceRequest = models.ScanVoiceRequest;
const DescribeUserInAndOutTimeRequest = models.DescribeUserInAndOutTimeRequest;


/**
 * gme client
 * @class
 */
class GmeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gme.tencentcloudapi.com", "2018-07-11", credential, region, profile);
    }
    
    /**
     * 获取房间内用户信息
     * @param {DescribeRoomInfoRequest} req
     * @param {function(string, DescribeRoomInfoResponse):void} cb
     * @public
     */
    DescribeRoomInfo(req, cb) {
        let resp = new DescribeRoomInfoResponse();
        this.request("DescribeRoomInfo", req, resp, cb);
    }

    /**
     * 删除自定义送检用户
     * @param {DeleteScanUserRequest} req
     * @param {function(string, DeleteScanUserResponse):void} cb
     * @public
     */
    DeleteScanUser(req, cb) {
        let resp = new DeleteScanUserResponse();
        this.request("DeleteScanUser", req, resp, cb);
    }

    /**
     * 更新自定义送检用户号
     * @param {UpdateScanUsersRequest} req
     * @param {function(string, UpdateScanUsersResponse):void} cb
     * @public
     */
    UpdateScanUsers(req, cb) {
        let resp = new UpdateScanUsersResponse();
        this.request("UpdateScanUsers", req, resp, cb);
    }

    /**
     * 查询语音消息转文本热句模型列表
     * @param {GetCustomizationListRequest} req
     * @param {function(string, GetCustomizationListResponse):void} cb
     * @public
     */
    GetCustomizationList(req, cb) {
        let resp = new GetCustomizationListResponse();
        this.request("GetCustomizationList", req, resp, cb);
    }

    /**
     * 拉取用户在房间得进出时间
     * @param {DescribeUserInAndOutTimeRequest} req
     * @param {function(string, DescribeUserInAndOutTimeResponse):void} cb
     * @public
     */
    DescribeUserInAndOutTime(req, cb) {
        let resp = new DescribeUserInAndOutTimeResponse();
        this.request("DescribeUserInAndOutTime", req, resp, cb);
    }

    /**
     * 获取用户自定义送检信息
     * @param {DescribeRealtimeScanConfigRequest} req
     * @param {function(string, DescribeRealtimeScanConfigResponse):void} cb
     * @public
     */
    DescribeRealtimeScanConfig(req, cb) {
        let resp = new DescribeRealtimeScanConfigResponse();
        this.request("DescribeRealtimeScanConfig", req, resp, cb);
    }

    /**
     * 用户使用该接口可以创建语音消息转文本热句模型，以供识别调用
     * @param {CreateCustomizationRequest} req
     * @param {function(string, CreateCustomizationResponse):void} cb
     * @public
     */
    CreateCustomization(req, cb) {
        let resp = new CreateCustomizationResponse();
        this.request("CreateCustomization", req, resp, cb);
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
     * @param {CreateAgeDetectTaskRequest} req
     * @param {function(string, CreateAgeDetectTaskResponse):void} cb
     * @public
     */
    CreateAgeDetectTask(req, cb) {
        let resp = new CreateAgeDetectTaskResponse();
        this.request("CreateAgeDetectTask", req, resp, cb);
    }

    /**
     * 本接口(DeleteRoomMember)用户删除房间或者剔除房间内用户
     * @param {DeleteRoomMemberRequest} req
     * @param {function(string, DeleteRoomMemberResponse):void} cb
     * @public
     */
    DeleteRoomMember(req, cb) {
        let resp = new DeleteRoomMemberResponse();
        this.request("DeleteRoomMember", req, resp, cb);
    }

    /**
     * 本接口(DescribeApplicationData)用于获取数据详情信息，最多可拉取最近90天的数据。
     * @param {DescribeApplicationDataRequest} req
     * @param {function(string, DescribeApplicationDataResponse):void} cb
     * @public
     */
    DescribeApplicationData(req, cb) {
        let resp = new DescribeApplicationDataResponse();
        this.request("DescribeApplicationData", req, resp, cb);
    }

    /**
     * 本接口(ScanVoice)用于提交语音检测任务，检测任务列表最多支持100个。使用前请您登录[控制台 - 服务配置](https://console.cloud.tencent.com/gamegme/conf)开启语音内容安全服务。
</br></br>

<h4><b>功能试用说明：</b></h4>
<li>打开前往<a href="https://console.cloud.tencent.com/gamegme/tryout">控制台 - 产品试用</a>免费试用语音内容安全服务。</li>
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
<p>illegal :违法</p>
<p>moan :呻吟</p>
<p>customized:自定义词库</p>
</td>
</tr>
</tbody>
</table>
</br>
<h4 id="Callback_Declare"><b>回调相关说明：</b></h4>
<li>如果在请求参数中指定了回调地址参数 Callback，即一个 HTTP(S) 协议接口的 URL，则需要支持 POST 方法，传输数据编码采用 UTF-8。</li>
<li>在推送回调数据后，接收到的 HTTP 状态码为 200 时，表示推送成功。</li>
<li>HTTP 请求参数（query）说明：</li>
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
		"OpenId": "111",
		"Info":"",
		"Offset": 0,
		"Duration": 3400,
		"PieceStartTime":1574684231,
		"ScanDetail": [{
			"EndTime": 1110,
			"KeyWord": "违规字",
			"Label": "abuse",
			"Rate": "90.00",
			"StartTime": 1110
		}, {
			"EndTime": 1380,
			"KeyWord": "违规字",
			"Label": "abuse",
			"Rate": "90.00",
			"StartTime": 930
		}, {
			"EndTime": 1560,
			"KeyWord": "违规字",
			"Label": "abuse",
			"Rate": "90.00",
			"StartTime": 930
		}, {
			"EndTime": 2820,
			"KeyWord": "违规字",
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
	"TaskId": "6330xxxx-9xx7-11ed-98e3-52xxxxe4ac3b",
	"Url": "https://xxx/xxx.m4a"
}
</code></pre>
     * @param {ScanVoiceRequest} req
     * @param {function(string, ScanVoiceResponse):void} cb
     * @public
     */
    ScanVoice(req, cb) {
        let resp = new ScanVoiceResponse();
        this.request("ScanVoice", req, resp, cb);
    }

    /**
     * 新增自定义送检用户
     * @param {CreateScanUserRequest} req
     * @param {function(string, CreateScanUserResponse):void} cb
     * @public
     */
    CreateScanUser(req, cb) {
        let resp = new CreateScanUserResponse();
        this.request("CreateScanUser", req, resp, cb);
    }

    /**
     * 本接口(DescribeAppStatistics)用于获取某个GME应用的用量数据。包括实时语音，语音消息及转文本，语音分析等。最长查询周期为最近60天。
     * @param {DescribeAppStatisticsRequest} req
     * @param {function(string, DescribeAppStatisticsResponse):void} cb
     * @public
     */
    DescribeAppStatistics(req, cb) {
        let resp = new DescribeAppStatisticsResponse();
        this.request("DescribeAppStatistics", req, resp, cb);
    }

    /**
     * 用户通过该接口可以更新语音消息转文本热句模型。
     * @param {ModifyCustomizationRequest} req
     * @param {function(string, ModifyCustomizationResponse):void} cb
     * @public
     */
    ModifyCustomization(req, cb) {
        let resp = new ModifyCustomizationResponse();
        this.request("ModifyCustomization", req, resp, cb);
    }

    /**
     * 更新自定义送检房间号
     * @param {UpdateScanRoomsRequest} req
     * @param {function(string, UpdateScanRoomsResponse):void} cb
     * @public
     */
    UpdateScanRooms(req, cb) {
        let resp = new UpdateScanRoomsResponse();
        this.request("UpdateScanRooms", req, resp, cb);
    }

    /**
     * 本接口(CreateApp)用于创建一个GME应用。
     * @param {CreateAppRequest} req
     * @param {function(string, CreateAppResponse):void} cb
     * @public
     */
    CreateApp(req, cb) {
        let resp = new CreateAppResponse();
        this.request("CreateApp", req, resp, cb);
    }

    /**
     * 本接口(DescribeScanResultList)用于查询语音检测结果，查询任务列表最多支持100个。
<p style="color:red">如果在提交语音检测任务时未设置 Callback 字段，则需要通过本接口获取检测结果</p>
     * @param {DescribeScanResultListRequest} req
     * @param {function(string, DescribeScanResultListResponse):void} cb
     * @public
     */
    DescribeScanResultList(req, cb) {
        let resp = new DescribeScanResultListResponse();
        this.request("DescribeScanResultList", req, resp, cb);
    }

    /**
     * 本接口(DescribeApplicationList)用于查询自己账号下的应用列表
     * @param {DescribeApplicationListRequest} req
     * @param {function(string, DescribeApplicationListResponse):void} cb
     * @public
     */
    DescribeApplicationList(req, cb) {
        let resp = new DescribeApplicationListResponse();
        this.request("DescribeApplicationList", req, resp, cb);
    }

    /**
     * 通过该接口，用户可以修改语音消息转文本热句模型状态，上下线热句模型
     * @param {ModifyCustomizationStateRequest} req
     * @param {function(string, ModifyCustomizationStateResponse):void} cb
     * @public
     */
    ModifyCustomizationState(req, cb) {
        let resp = new ModifyCustomizationStateResponse();
        this.request("ModifyCustomizationState", req, resp, cb);
    }

    /**
     * **接口作用**：此接口用于修改房间用户的麦克风状态，例如房间内用户麦克风为打开状态，可调用此接口将该用户麦克风进行关闭，关闭后即使该用户使用客户端接口 EnableMic 打开麦克风，依然无法与房间内成员通话，属于被禁言状态。该状态持续到此用户退房后失效，或者调用该接口重新打开此用户麦克风状态。
**接口应用场景**：此接口多用于游戏业务中台或者风控后台，对一些发表不当言论的玩家进行禁言处理。
**接口使用前提**：目前 ModifyUserMicStatus 接口通过白名单开放，如需使用，需要 [提交工单申请](https://console.cloud.tencent.com/workorder/category?level1_id=438&level2_id=445&source=0&data_title=%E6%B8%B8%E6%88%8F%E5%A4%9A%E5%AA%92%E4%BD%93%E5%BC%95%E6%93%8EGME&step=1)。
     * @param {ModifyUserMicStatusRequest} req
     * @param {function(string, ModifyUserMicStatusResponse):void} cb
     * @public
     */
    ModifyUserMicStatus(req, cb) {
        let resp = new ModifyUserMicStatusResponse();
        this.request("ModifyUserMicStatus", req, resp, cb);
    }

    /**
     * 用户通过该接口可以删除语音消息转文本热句模型
     * @param {DeleteCustomizationRequest} req
     * @param {function(string, DeleteCustomizationResponse):void} cb
     * @public
     */
    DeleteCustomization(req, cb) {
        let resp = new DeleteCustomizationResponse();
        this.request("DeleteCustomization", req, resp, cb);
    }

    /**
     * 本接口(ModifyAppStatus)用于修改应用总开关状态。
     * @param {ModifyAppStatusRequest} req
     * @param {function(string, ModifyAppStatusResponse):void} cb
     * @public
     */
    ModifyAppStatus(req, cb) {
        let resp = new ModifyAppStatusResponse();
        this.request("ModifyAppStatus", req, resp, cb);
    }

    /**
     * 查询年龄语音识别任务结果，请求频率10次/秒。该接口目前通过白名单开放试用，如有需求，请提交工单申请。
     * @param {DescribeAgeDetectTaskRequest} req
     * @param {function(string, DescribeAgeDetectTaskResponse):void} cb
     * @public
     */
    DescribeAgeDetectTask(req, cb) {
        let resp = new DescribeAgeDetectTaskResponse();
        this.request("DescribeAgeDetectTask", req, resp, cb);
    }


}
module.exports = GmeClient;
