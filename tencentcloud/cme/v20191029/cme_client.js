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
const AudioStreamInfo = models.AudioStreamInfo;
const ModifyMaterialResponse = models.ModifyMaterialResponse;
const DeleteProjectRequest = models.DeleteProjectRequest;
const ExportVideoByVideoSegmentationDataResponse = models.ExportVideoByVideoSegmentationDataResponse;
const ImportMaterialResponse = models.ImportMaterialResponse;
const StreamConnectProjectInput = models.StreamConnectProjectInput;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const ExportVideoByVideoSegmentationDataRequest = models.ExportVideoByVideoSegmentationDataRequest;
const MediaTransitionItem = models.MediaTransitionItem;
const DescribeTeamsResponse = models.DescribeTeamsResponse;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const ExportVideoEditProjectRequest = models.ExportVideoEditProjectRequest;
const ClassInfo = models.ClassInfo;
const ModifyProjectResponse = models.ModifyProjectResponse;
const AudioTrackItem = models.AudioTrackItem;
const StreamConnectProjectInfo = models.StreamConnectProjectInfo;
const IntegerRange = models.IntegerRange;
const SearchMaterialRequest = models.SearchMaterialRequest;
const DeleteTeamResponse = models.DeleteTeamResponse;
const StreamConnectOutput = models.StreamConnectOutput;
const VideoSegmentationProjectInput = models.VideoSegmentationProjectInput;
const SearchScope = models.SearchScope;
const RevokeResourceAuthorizationResponse = models.RevokeResourceAuthorizationResponse;
const HandleStreamConnectProjectRequest = models.HandleStreamConnectProjectRequest;
const ProjectInfo = models.ProjectInfo;
const VideoTrackItem = models.VideoTrackItem;
const DeleteTeamRequest = models.DeleteTeamRequest;
const DescribeTeamsRequest = models.DescribeTeamsRequest;
const LinkMaterial = models.LinkMaterial;
const SwitcherProjectInput = models.SwitcherProjectInput;
const FlattenListMediaRequest = models.FlattenListMediaRequest;
const RtmpPushInputInfo = models.RtmpPushInputInfo;
const AudioMaterial = models.AudioMaterial;
const AddMemberInfo = models.AddMemberInfo;
const Entity = models.Entity;
const TeamInfo = models.TeamInfo;
const ExportVideoByEditorTrackDataRequest = models.ExportVideoByEditorTrackDataRequest;
const MaterialTagInfo = models.MaterialTagInfo;
const VideoEditProjectOutput = models.VideoEditProjectOutput;
const CreateProjectRequest = models.CreateProjectRequest;
const ModifyMaterialRequest = models.ModifyMaterialRequest;
const Authorizer = models.Authorizer;
const DescribePlatformsResponse = models.DescribePlatformsResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const MediaTrackItem = models.MediaTrackItem;
const StorageNewFileCreatedEvent = models.StorageNewFileCreatedEvent;
const DescribeLoginStatusRequest = models.DescribeLoginStatusRequest;
const MediaTrack = models.MediaTrack;
const DeleteLoginStatusResponse = models.DeleteLoginStatusResponse;
const WeiboPublishInfo = models.WeiboPublishInfo;
const Resource = models.Resource;
const CreateLinkResponse = models.CreateLinkResponse;
const ExportVideoByTemplateResponse = models.ExportVideoByTemplateResponse;
const StreamInputInfo = models.StreamInputInfo;
const ListMediaResponse = models.ListMediaResponse;
const SearchMaterialResponse = models.SearchMaterialResponse;
const StreamConnectOutputInfo = models.StreamConnectOutputInfo;
const ParseEventRequest = models.ParseEventRequest;
const EmptyTrackItem = models.EmptyTrackItem;
const PlatformInfo = models.PlatformInfo;
const DescribeJoinTeamsRequest = models.DescribeJoinTeamsRequest;
const DeleteMaterialRequest = models.DeleteMaterialRequest;
const CreateProjectResponse = models.CreateProjectResponse;
const VideoEditProjectInput = models.VideoEditProjectInput;
const DeleteProjectResponse = models.DeleteProjectResponse;
const DeleteClassRequest = models.DeleteClassRequest;
const CreateLinkRequest = models.CreateLinkRequest;
const CreateClassRequest = models.CreateClassRequest;
const DescribeMaterialsResponse = models.DescribeMaterialsResponse;
const HandleStreamConnectProjectResponse = models.HandleStreamConnectProjectResponse;
const GrantResourceAuthorizationResponse = models.GrantResourceAuthorizationResponse;
const SwitcherPgmOutputConfig = models.SwitcherPgmOutputConfig;
const CMEExportInfo = models.CMEExportInfo;
const MoveResourceRequest = models.MoveResourceRequest;
const LivePullInputInfo = models.LivePullInputInfo;
const ImportMediaToProjectRequest = models.ImportMediaToProjectRequest;
const VODExportInfo = models.VODExportInfo;
const SortBy = models.SortBy;
const PenguinMediaPlatformPublishInfo = models.PenguinMediaPlatformPublishInfo;
const ImageMaterial = models.ImageMaterial;
const DescribeClassRequest = models.DescribeClassRequest;
const DescribeSharedSpaceResponse = models.DescribeSharedSpaceResponse;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const MoveResourceResponse = models.MoveResourceResponse;
const MoveClassRequest = models.MoveClassRequest;
const TimeRange = models.TimeRange;
const DeleteTeamMembersResponse = models.DeleteTeamMembersResponse;
const MoveClassResponse = models.MoveClassResponse;
const ImportMediaToProjectResponse = models.ImportMediaToProjectResponse;
const ModifyTeamMemberResponse = models.ModifyTeamMemberResponse;
const DescribeTeamMembersResponse = models.DescribeTeamMembersResponse;
const AddTeamMemberResponse = models.AddTeamMemberResponse;
const CreateTeamResponse = models.CreateTeamResponse;
const ModifyTeamRequest = models.ModifyTeamRequest;
const ModifyTeamMemberRequest = models.ModifyTeamMemberRequest;
const CreateTeamRequest = models.CreateTeamRequest;
const MaterialBasicInfo = models.MaterialBasicInfo;
const ResourceInfo = models.ResourceInfo;
const JoinTeamInfo = models.JoinTeamInfo;
const DescribeResourceAuthorizationRequest = models.DescribeResourceAuthorizationRequest;
const CreateClassResponse = models.CreateClassResponse;
const SlotInfo = models.SlotInfo;
const MediaReplacementInfo = models.MediaReplacementInfo;
const RecordReplayProjectInput = models.RecordReplayProjectInput;
const VideoStreamInfo = models.VideoStreamInfo;
const AddTeamMemberRequest = models.AddTeamMemberRequest;
const ExportVideoEditProjectResponse = models.ExportVideoEditProjectResponse;
const ThirdPartyPublishInfo = models.ThirdPartyPublishInfo;
const ListMediaRequest = models.ListMediaRequest;
const VodPullInputInfo = models.VodPullInputInfo;
const ModifyTeamResponse = models.ModifyTeamResponse;
const DeleteLoginStatusRequest = models.DeleteLoginStatusRequest;
const GenerateVideoSegmentationSchemeByAiRequest = models.GenerateVideoSegmentationSchemeByAiRequest;
const LiveStreamClipProjectInput = models.LiveStreamClipProjectInput;
const DeleteTeamMembersRequest = models.DeleteTeamMembersRequest;
const ExportVideoByTemplateRequest = models.ExportVideoByTemplateRequest;
const DescribePlatformsRequest = models.DescribePlatformsRequest;
const OtherMaterial = models.OtherMaterial;
const EventContent = models.EventContent;
const VideoMaterial = models.VideoMaterial;
const DescribeResourceAuthorizationResponse = models.DescribeResourceAuthorizationResponse;
const FlattenListMediaResponse = models.FlattenListMediaResponse;
const AccountInfo = models.AccountInfo;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const DescribeLoginStatusResponse = models.DescribeLoginStatusResponse;
const TeamMemberInfo = models.TeamMemberInfo;
const DescribeJoinTeamsResponse = models.DescribeJoinTeamsResponse;
const DescribeTeamMembersRequest = models.DescribeTeamMembersRequest;
const MaterialStatus = models.MaterialStatus;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const AuthorizationInfo = models.AuthorizationInfo;
const VideoEditTemplateMaterial = models.VideoEditTemplateMaterial;
const SlotReplacementInfo = models.SlotReplacementInfo;
const ParseEventResponse = models.ParseEventResponse;
const DeleteMaterialResponse = models.DeleteMaterialResponse;
const RevokeResourceAuthorizationRequest = models.RevokeResourceAuthorizationRequest;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const CosPublishInputInfo = models.CosPublishInputInfo;
const DescribeTasksResponse = models.DescribeTasksResponse;
const ModifyProjectRequest = models.ModifyProjectRequest;
const MaterialInfo = models.MaterialInfo;
const LoginStatusInfo = models.LoginStatusInfo;
const DescribeClassResponse = models.DescribeClassResponse;
const GenerateVideoSegmentationSchemeByAiResponse = models.GenerateVideoSegmentationSchemeByAiResponse;
const PresetTagInfo = models.PresetTagInfo;
const DescribeSharedSpaceRequest = models.DescribeSharedSpaceRequest;
const KuaishouPublishInfo = models.KuaishouPublishInfo;
const TaskBaseInfo = models.TaskBaseInfo;
const DeleteClassResponse = models.DeleteClassResponse;
const GrantResourceAuthorizationRequest = models.GrantResourceAuthorizationRequest;
const MediaMetaData = models.MediaMetaData;
const ExternalMediaInfo = models.ExternalMediaInfo;
const LinkMaterialInfo = models.LinkMaterialInfo;
const ExportVideoByEditorTrackDataResponse = models.ExportVideoByEditorTrackDataResponse;
const MediaImageSpriteInfo = models.MediaImageSpriteInfo;
const ImportMaterialRequest = models.ImportMaterialRequest;
const DescribeMaterialsRequest = models.DescribeMaterialsRequest;


/**
 * cme client
 * @class
 */
class CmeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cme.tencentcloudapi.com", "2019-10-29", credential, region, profile);
    }
    
    /**
     * 根据媒体 Id 批量获取媒体详情。
     * @param {DescribeMaterialsRequest} req
     * @param {function(string, DescribeMaterialsResponse):void} cb
     * @public
     */
    DescribeMaterials(req, cb) {
        let resp = new DescribeMaterialsResponse();
        this.request("DescribeMaterials", req, resp, cb);
    }

    /**
     * 获取指定团队的信息，拉取团队信息列表。
     * @param {DescribeTeamsRequest} req
     * @param {function(string, DescribeTeamsResponse):void} cb
     * @public
     */
    DescribeTeams(req, cb) {
        let resp = new DescribeTeamsResponse();
        this.request("DescribeTeams", req, resp, cb);
    }

    /**
     * 导出视频编辑项目，支持指定输出的模板。
     * @param {ExportVideoEditProjectRequest} req
     * @param {function(string, ExportVideoEditProjectResponse):void} cb
     * @public
     */
    ExportVideoEditProject(req, cb) {
        let resp = new ExportVideoEditProjectResponse();
        this.request("ExportVideoEditProject", req, resp, cb);
    }

    /**
     * 获取共享空间。当个人或团队A对个人或团队B授权某资源以后，个人或团队B的共享空间就会增加个人或团队A。
     * @param {DescribeSharedSpaceRequest} req
     * @param {function(string, DescribeSharedSpaceResponse):void} cb
     * @public
     */
    DescribeSharedSpace(req, cb) {
        let resp = new DescribeSharedSpaceResponse();
        this.request("DescribeSharedSpace", req, resp, cb);
    }

    /**
     * <li>发起视频智能拆条任务，支持智能生成和平精英集锦、王者荣耀集锦、足球集锦、篮球集锦 、人物集锦、新闻拆条等任务。</li>
<li>和平精英集锦和王者荣耀集锦根据击杀场景进行拆条，足球集锦和篮球集锦根据进球场景进行拆条，人物集锦根据人物人脸特征进行拆条，新闻拆条根据导播进行拆条。</li>
<li>【本接口内测中，暂不建议使用】</li>
     * @param {GenerateVideoSegmentationSchemeByAiRequest} req
     * @param {function(string, GenerateVideoSegmentationSchemeByAiResponse):void} cb
     * @public
     */
    GenerateVideoSegmentationSchemeByAi(req, cb) {
        let resp = new GenerateVideoSegmentationSchemeByAiResponse();
        this.request("GenerateVideoSegmentationSchemeByAi", req, resp, cb);
    }

    /**
     * 使用视频智能拆条数据导出视频，将指定的视频拆条片段导出为一个视频。
     * @param {ExportVideoByVideoSegmentationDataRequest} req
     * @param {function(string, ExportVideoByVideoSegmentationDataResponse):void} cb
     * @public
     */
    ExportVideoByVideoSegmentationData(req, cb) {
        let resp = new ExportVideoByVideoSegmentationDataResponse();
        this.request("ExportVideoByVideoSegmentationData", req, resp, cb);
    }

    /**
     * 资源归属者对目标个人或团队授予目标资源的相应权限。
     * @param {GrantResourceAuthorizationRequest} req
     * @param {function(string, GrantResourceAuthorizationResponse):void} cb
     * @public
     */
    GrantResourceAuthorization(req, cb) {
        let resp = new GrantResourceAuthorizationResponse();
        this.request("GrantResourceAuthorization", req, resp, cb);
    }

    /**
     * 根据检索条件搜索媒体，返回媒体的基本信息。
     * @param {SearchMaterialRequest} req
     * @param {function(string, SearchMaterialResponse):void} cb
     * @public
     */
    SearchMaterial(req, cb) {
        let resp = new SearchMaterialResponse();
        this.request("SearchMaterial", req, resp, cb);
    }

    /**
     * 该接口接受制作云回调给客户的事件内容，将其转化为对应的 EventContent 结构，请不要实际调用该接口，只需要将接收到的事件内容直接使用 JSON 解析到 EventContent  即可使用。
     * @param {ParseEventRequest} req
     * @param {function(string, ParseEventResponse):void} cb
     * @public
     */
    ParseEvent(req, cb) {
        let resp = new ParseEventResponse();
        this.request("ParseEvent", req, resp, cb);
    }

    /**
     * 获取指定的团队成员所加入的团队列表。
     * @param {DescribeJoinTeamsRequest} req
     * @param {function(string, DescribeJoinTeamsResponse):void} cb
     * @public
     */
    DescribeJoinTeams(req, cb) {
        let resp = new DescribeJoinTeamsResponse();
        this.request("DescribeJoinTeams", req, resp, cb);
    }

    /**
     * 查询指定资源的授权列表。
     * @param {DescribeResourceAuthorizationRequest} req
     * @param {function(string, DescribeResourceAuthorizationResponse):void} cb
     * @public
     */
    DescribeResourceAuthorization(req, cb) {
        let resp = new DescribeResourceAuthorizationResponse();
        this.request("DescribeResourceAuthorization", req, resp, cb);
    }

    /**
     * 将云点播媒资文件导入到云剪媒体资源库。
     * @param {ImportMaterialRequest} req
     * @param {function(string, ImportMaterialResponse):void} cb
     * @public
     */
    ImportMaterial(req, cb) {
        let resp = new ImportMaterialResponse();
        this.request("ImportMaterial", req, resp, cb);
    }

    /**
     * 使用视频合成协议导出视频，支持导出到CME云媒资和VOD云媒资。
     * @param {ExportVideoByEditorTrackDataRequest} req
     * @param {function(string, ExportVideoByEditorTrackDataResponse):void} cb
     * @public
     */
    ExportVideoByEditorTrackData(req, cb) {
        let resp = new ExportVideoByEditorTrackDataResponse();
        this.request("ExportVideoByEditorTrackData", req, resp, cb);
    }

    /**
     * <li>支持获取所创建的所有平台列表信息；</li>
<li>支持获取指定的平台列表信息。</li>


     * @param {DescribePlatformsRequest} req
     * @param {function(string, DescribePlatformsResponse):void} cb
     * @public
     */
    DescribePlatforms(req, cb) {
        let resp = new DescribePlatformsResponse();
        this.request("DescribePlatforms", req, resp, cb);
    }

    /**
     * 获取任务详情信息，包含下面几个部分：
<li>任务基础信息：包括任务状态、错误信息、创建时间等；</li>
<li>导出项目输出信息：包括输出的素材 Id 等。</li>
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }

    /**
     *  创建媒体链接或分类路径链接，将源资源信息链接到目标。
     * @param {CreateLinkRequest} req
     * @param {function(string, CreateLinkResponse):void} cb
     * @public
     */
    CreateLink(req, cb) {
        let resp = new CreateLinkResponse();
        this.request("CreateLink", req, resp, cb);
    }

    /**
     * 修改团队信息，目前支持修改的操作有：
<li>修改团队名称。</li>
     * @param {ModifyTeamRequest} req
     * @param {function(string, ModifyTeamResponse):void} cb
     * @public
     */
    ModifyTeam(req, cb) {
        let resp = new ModifyTeamResponse();
        this.request("ModifyTeam", req, resp, cb);
    }

    /**
     * 根据媒体 Id 删除媒体。
     * @param {DeleteMaterialRequest} req
     * @param {function(string, DeleteMaterialResponse):void} cb
     * @public
     */
    DeleteMaterial(req, cb) {
        let resp = new DeleteMaterialResponse();
        this.request("DeleteMaterial", req, resp, cb);
    }

    /**
     * 修改媒体信息，支持修改媒体名称、分类路径、标签等信息。
     * @param {ModifyMaterialRequest} req
     * @param {function(string, ModifyMaterialResponse):void} cb
     * @public
     */
    ModifyMaterial(req, cb) {
        let resp = new ModifyMaterialResponse();
        this.request("ModifyMaterial", req, resp, cb);
    }

    /**
     * 删除一个团队。
<li>要删除的团队必须没有归属的素材；</li>
<li>要删除的团队必须没有归属的分类。</li>
     * @param {DeleteTeamRequest} req
     * @param {function(string, DeleteTeamResponse):void} cb
     * @public
     */
    DeleteTeam(req, cb) {
        let resp = new DeleteTeamResponse();
        this.request("DeleteTeam", req, resp, cb);
    }

    /**
     * 向一个团队中团队成员，并且指定成员的角色。
     * @param {AddTeamMemberRequest} req
     * @param {function(string, AddTeamMemberResponse):void} cb
     * @public
     */
    AddTeamMember(req, cb) {
        let resp = new AddTeamMemberResponse();
        this.request("AddTeamMember", req, resp, cb);
    }

    /**
     * 移动某一个分类到另外一个分类下，也可用于分类重命名。
如果 SourceClassPath = /素材/视频/NBA，DestinationClassPath = /素材/视频/篮球
<li>当 DestinationClassPath 不存在时候，操作结果为重命名 ClassPath；</li>
<li>当 DestinationClassPath 存在时候，操作结果为产生新目录 /素材/视频/篮球/NBA</li>
     * @param {MoveClassRequest} req
     * @param {function(string, MoveClassResponse):void} cb
     * @public
     */
    MoveClass(req, cb) {
        let resp = new MoveClassResponse();
        this.request("MoveClass", req, resp, cb);
    }

    /**
     * 修改团队成员信息，包括成员备注、角色等。
     * @param {ModifyTeamMemberRequest} req
     * @param {function(string, ModifyTeamMemberResponse):void} cb
     * @public
     */
    ModifyTeamMember(req, cb) {
        let resp = new ModifyTeamMemberResponse();
        this.request("ModifyTeamMember", req, resp, cb);
    }

    /**
     * 将团队成员从团队中删除，默认只有 Owner 及管理员才有此权限。
     * @param {DeleteTeamMembersRequest} req
     * @param {function(string, DeleteTeamMembersResponse):void} cb
     * @public
     */
    DeleteTeamMembers(req, cb) {
        let resp = new DeleteTeamMembersResponse();
        this.request("DeleteTeamMembers", req, resp, cb);
    }

    /**
     * 删除用户登录态，使用户登出云剪平台。
     * @param {DeleteLoginStatusRequest} req
     * @param {function(string, DeleteLoginStatusResponse):void} cb
     * @public
     */
    DeleteLoginStatus(req, cb) {
        let resp = new DeleteLoginStatusResponse();
        this.request("DeleteLoginStatus", req, resp, cb);
    }

    /**
     * 支持根据多种条件过滤出项目列表。
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }

    /**
     * 查询指定用户的登录态。
     * @param {DescribeLoginStatusRequest} req
     * @param {function(string, DescribeLoginStatusResponse):void} cb
     * @public
     */
    DescribeLoginStatus(req, cb) {
        let resp = new DescribeLoginStatusResponse();
        this.request("DescribeLoginStatus", req, resp, cb);
    }

    /**
     * 获取任务列表，支持条件筛选，返回对应的任务基础信息列表。
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 获取用户账号信息。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * 获取指定归属者下所有的分类信息。
     * @param {DescribeClassRequest} req
     * @param {function(string, DescribeClassResponse):void} cb
     * @public
     */
    DescribeClass(req, cb) {
        let resp = new DescribeClassResponse();
        this.request("DescribeClass", req, resp, cb);
    }

    /**
     * 创建一个团队。
     * @param {CreateTeamRequest} req
     * @param {function(string, CreateTeamResponse):void} cb
     * @public
     */
    CreateTeam(req, cb) {
        let resp = new CreateTeamResponse();
        this.request("CreateTeam", req, resp, cb);
    }

    /**
     * 修改云剪编辑项目的信息。
     * @param {ModifyProjectRequest} req
     * @param {function(string, ModifyProjectResponse):void} cb
     * @public
     */
    ModifyProject(req, cb) {
        let resp = new ModifyProjectResponse();
        this.request("ModifyProject", req, resp, cb);
    }

    /**
     * 新增分类，用于管理素材。
<li>分类层数不能超过10；</li>
<li>子分类数不能超过10。</li>
     * @param {CreateClassRequest} req
     * @param {function(string, CreateClassResponse):void} cb
     * @public
     */
    CreateClass(req, cb) {
        let resp = new CreateClassResponse();
        this.request("CreateClass", req, resp, cb);
    }

    /**
     *  资源所属实体对目标实体回收目标资源的相应权限，若原本没有相应权限则不产生变更。
     * @param {RevokeResourceAuthorizationRequest} req
     * @param {function(string, RevokeResourceAuthorizationResponse):void} cb
     * @public
     */
    RevokeResourceAuthorization(req, cb) {
        let resp = new RevokeResourceAuthorizationResponse();
        this.request("RevokeResourceAuthorization", req, resp, cb);
    }

    /**
     * 将云点播中的媒资或者用户自有媒资文件添加到媒体库中，跟项目关联，供后续视频编辑使用。目前仅普通编辑项目和智能视频拆条项目有效。
     * @param {ImportMediaToProjectRequest} req
     * @param {function(string, ImportMediaToProjectResponse):void} cb
     * @public
     */
    ImportMediaToProject(req, cb) {
        let resp = new ImportMediaToProjectResponse();
        this.request("ImportMediaToProject", req, resp, cb);
    }

    /**
     *  浏览当前分类路径下的资源，包括媒体文件和子分类，返回媒资基础信息和分类信息。
     * @param {ListMediaRequest} req
     * @param {function(string, ListMediaResponse):void} cb
     * @public
     */
    ListMedia(req, cb) {
        let resp = new ListMediaResponse();
        this.request("ListMedia", req, resp, cb);
    }

    /**
     * 创建云剪的编辑项目，支持创建视频剪辑、直播剪辑、导播台、视频拆条、录制回放以及云转推项目。

<b>若需使用云转推功能，请先咨询 [智能客服](https://cloud.tencent.com/act/event/smarty-service?from=doc_1138) 或 [提交工单](https://console.cloud.tencent.com/workorder/category) 。</b>

     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * 使用视频编辑模板直接导出视频。
     * @param {ExportVideoByTemplateRequest} req
     * @param {function(string, ExportVideoByTemplateResponse):void} cb
     * @public
     */
    ExportVideoByTemplate(req, cb) {
        let resp = new ExportVideoByTemplateResponse();
        this.request("ExportVideoByTemplate", req, resp, cb);
    }

    /**
     * 移动资源，支持跨个人或团队移动媒体以及分类。如果填写了Operator，则需要校验用户对媒体和分类资源的访问以及写权限。
<li>当原始资源为媒体时，该接口效果为将该媒体移动到目标分类下面；</li>
<li>当原始资源为分类时，该接口效果为将原始分类移动到目标分类或者是重命名。</li>
 如果 SourceResource.Resource.Id = /素材/视频/NBA，DestinationResource.Resource.Id= /素材/视频/篮球 
<li>当 DestinationResource.Resource.Id 不存在时候且原始资源与目标资源归属相同，操作结果为重命名原始分类；</li>
<li>当 DestinationResource.Resource.Id 存在时候，操作结果为产生新目录 /素材/视频/篮球/NBA</li>

     * @param {MoveResourceRequest} req
     * @param {function(string, MoveResourceResponse):void} cb
     * @public
     */
    MoveResource(req, cb) {
        let resp = new MoveResourceResponse();
        this.request("MoveResource", req, resp, cb);
    }

    /**
     * 删除分类信息，删除时检验下述限制：
<li>分类路径必须存在；</li>
<li>分类下没有绑定素材。</li>
     * @param {DeleteClassRequest} req
     * @param {function(string, DeleteClassResponse):void} cb
     * @public
     */
    DeleteClass(req, cb) {
        let resp = new DeleteClassResponse();
        this.request("DeleteClass", req, resp, cb);
    }

    /**
     * 删除云剪编辑项目。
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        let resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }

    /**
     * 平铺分类路径下及其子分类下的所有媒体基础信息。
     * @param {FlattenListMediaRequest} req
     * @param {function(string, FlattenListMediaResponse):void} cb
     * @public
     */
    FlattenListMedia(req, cb) {
        let resp = new FlattenListMediaResponse();
        this.request("FlattenListMedia", req, resp, cb);
    }

    /**
     * 对云转推项目进行操作。
### 操作类型<a id="Operation"></a>
- `AddInput`（添加输入源），包括：
	- 添加直播拉流输入源，参见 [示例1](#.E7.A4.BA.E4.BE.8B1-.E6.B7.BB.E5.8A.A0.E7.9B.B4.E6.92.AD.E6.8B.89.E6.B5.81.E8.BE.93.E5.85.A5.E6.BA.90)；
	- 添加直播推流输入源，参见 [示例2](#.E7.A4.BA.E4.BE.8B2-.E6.B7.BB.E5.8A.A0.E7.9B.B4.E6.92.AD.E6.8E.A8.E6.B5.81.E8.BE.93.E5.85.A5.E6.BA.90)；
	- 添加点播拉流输入源，参见 [示例3](#.E7.A4.BA.E4.BE.8B3-.E6.B7.BB.E5.8A.A0.E7.82.B9.E6.92.AD.E6.8B.89.E6.B5.81.E8.BE.93.E5.85.A5.E6.BA.90.E4.B8.94.E5.BE.AA.E7.8E.AF.E6.92.AD.E6.94.BE)、[示例4](#.E7.A4.BA.E4.BE.8B4-.E6.B7.BB.E5.8A.A0.E7.82.B9.E6.92.AD.E6.8B.89.E6.B5.81.E8.BE.93.E5.85.A5.E6.BA.90.E4.B8.94.E5.8D.95.E6.AC.A1.E6.92.AD.E6.94.BE)；
- `DeleteInput`（删除输入源），参见 [示例5](#.E7.A4.BA.E4.BE.8B5-.E5.88.A0.E9.99.A4.E8.BE.93.E5.85.A5.E6.BA.90)；
- `ModifyInput`（修改输入源），参见 [示例6](#.E7.A4.BA.E4.BE.8B6-.E4.BF.AE.E6.94.B9.E8.BE.93.E5.85.A5.E6.BA.90)；
- `AddOutput`（ 添加输出源），参见 [示例7](#.E7.A4.BA.E4.BE.8B7-.E6.B7.BB.E5.8A.A0.E8.BE.93.E5.87.BA.E6.BA.90)；
- `DeleteOutput`（删除输出源），参见 [示例8](#.E7.A4.BA.E4.BE.8B8-.E5.88.A0.E9.99.A4.E8.BE.93.E5.87.BA.E6.BA.90)；
- `ModifyOutput`（修改输出源），参见 [示例9](#.E7.A4.BA.E4.BE.8B9-.E4.BF.AE.E6.94.B9.E8.BE.93.E5.87.BA.E6.BA.90)；
- `Start`（开启转推），参见 [示例10](#.E7.A4.BA.E4.BE.8B10-.E5.BC.80.E5.90.AF.E4.BA.91.E8.BD.AC.E6.8E.A8)；
- `Stop`（停止转推），参见 [示例11](#.E7.A4.BA.E4.BE.8B11-.E5.81.9C.E6.AD.A2.E4.BA.91.E8.BD.AC.E6.8E.A8)；
- `SwitchInput`（切换输入源），参见 [示例12](#.E7.A4.BA.E4.BE.8B12-.E5.88.87.E6.8D.A2.E8.BE.93.E5.85.A5.E6.BA.90)；
- `ModifyCurrentStopTime`（修改当前计划结束时间），参见 [示例13](#.E7.A4.BA.E4.BE.8B13-.E4.BF.AE.E6.94.B9.E8.BD.AC.E6.8E.A8.E7.BB.93.E6.9D.9F.E6.97.B6.E9.97.B4)。
     * @param {HandleStreamConnectProjectRequest} req
     * @param {function(string, HandleStreamConnectProjectResponse):void} cb
     * @public
     */
    HandleStreamConnectProject(req, cb) {
        let resp = new HandleStreamConnectProjectResponse();
        this.request("HandleStreamConnectProject", req, resp, cb);
    }

    /**
     * 获取指定成员 ID 的信息，同时支持拉取所有团队成员信息。
     * @param {DescribeTeamMembersRequest} req
     * @param {function(string, DescribeTeamMembersResponse):void} cb
     * @public
     */
    DescribeTeamMembers(req, cb) {
        let resp = new DescribeTeamMembersResponse();
        this.request("DescribeTeamMembers", req, resp, cb);
    }


}
module.exports = CmeClient;
