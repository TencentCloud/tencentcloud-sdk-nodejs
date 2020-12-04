import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeTeamsRequest, DeleteProjectRequest, ImportMaterialResponse, DescribeTeamsResponse, DescribeTaskDetailResponse, ExportVideoEditProjectRequest, ModifyProjectResponse, SearchMaterialRequest, DeleteTeamResponse, RevokeResourceAuthorizationResponse, DescribeTasksResponse, DeleteTeamRequest, ModifyMaterialResponse, FlattenListMediaRequest, ExportVideoByEditorTrackDataRequest, CreateProjectRequest, ModifyMaterialRequest, DescribeTasksRequest, DescribeLoginStatusRequest, DeleteLoginStatusResponse, CreateLinkResponse, ListMediaResponse, SearchMaterialResponse, DescribeJoinTeamsRequest, DeleteMaterialRequest, CreateProjectResponse, DeleteProjectResponse, DeleteClassRequest, CreateLinkRequest, CreateClassRequest, DescribeMaterialsResponse, GrantResourceAuthorizationResponse, ImportMediaToProjectRequest, DescribeClassRequest, MoveClassRequest, DeleteTeamMembersResponse, MoveClassResponse, ImportMediaToProjectResponse, ModifyTeamMemberResponse, DescribeTeamMembersResponse, AddTeamMemberResponse, CreateTeamResponse, ModifyTeamRequest, ModifyTeamMemberRequest, CreateTeamRequest, DescribeResourceAuthorizationRequest, CreateClassResponse, AddTeamMemberRequest, ExportVideoEditProjectResponse, ListMediaRequest, ModifyTeamResponse, DeleteLoginStatusRequest, DeleteTeamMembersRequest, DescribeSharedSpaceResponse, DescribeResourceAuthorizationResponse, FlattenListMediaResponse, DescribeProjectsRequest, DescribeLoginStatusResponse, DescribeJoinTeamsResponse, DescribeTeamMembersRequest, DeleteMaterialResponse, RevokeResourceAuthorizationRequest, DescribeTaskDetailRequest, ModifyProjectRequest, DescribeClassResponse, DescribeSharedSpaceRequest, DeleteClassResponse, ExportVideoByEditorTrackDataResponse, GrantResourceAuthorizationRequest, DescribeProjectsResponse, ImportMaterialRequest, DescribeMaterialsRequest } from "./cme_models";
/**
 * cme client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据素材 Id 批量获取素材详情。
     */
    DescribeMaterials(req: DescribeMaterialsRequest, cb?: (error: string, rep: DescribeMaterialsResponse) => void): Promise<DescribeMaterialsResponse>;
    /**
     * 获取指定团队的信息。
     */
    DescribeTeams(req: DescribeTeamsRequest, cb?: (error: string, rep: DescribeTeamsResponse) => void): Promise<DescribeTeamsResponse>;
    /**
     * 导出视频编辑项目，支持指定输出的模板。
     */
    ExportVideoEditProject(req: ExportVideoEditProjectRequest, cb?: (error: string, rep: ExportVideoEditProjectResponse) => void): Promise<ExportVideoEditProjectResponse>;
    /**
     * 获取共享空间。当实体A对实体B授权某资源以后，实体B的共享空间就会增加实体A。
     */
    DescribeSharedSpace(req: DescribeSharedSpaceRequest, cb?: (error: string, rep: DescribeSharedSpaceResponse) => void): Promise<DescribeSharedSpaceResponse>;
    /**
     * 资源所属实体对目标实体授予目标资源的相应权限。
     */
    GrantResourceAuthorization(req: GrantResourceAuthorizationRequest, cb?: (error: string, rep: GrantResourceAuthorizationResponse) => void): Promise<GrantResourceAuthorizationResponse>;
    /**
     * 根据检索条件搜索素材，返回素材的基本信息。
     */
    SearchMaterial(req: SearchMaterialRequest, cb?: (error: string, rep: SearchMaterialResponse) => void): Promise<SearchMaterialResponse>;
    /**
     *  资源所属实体对目标实体回收目标资源的相应权限，若原本没有相应权限则不产生变更。
     */
    RevokeResourceAuthorization(req: RevokeResourceAuthorizationRequest, cb?: (error: string, rep: RevokeResourceAuthorizationResponse) => void): Promise<RevokeResourceAuthorizationResponse>;
    /**
     * 获取指定的团队成员所加入的团队列表。
     */
    DescribeJoinTeams(req: DescribeJoinTeamsRequest, cb?: (error: string, rep: DescribeJoinTeamsResponse) => void): Promise<DescribeJoinTeamsResponse>;
    /**
     * 查询指定资源的授权列表。
     */
    DescribeResourceAuthorization(req: DescribeResourceAuthorizationRequest, cb?: (error: string, rep: DescribeResourceAuthorizationResponse) => void): Promise<DescribeResourceAuthorizationResponse>;
    /**
     * 将云点播媒资文件导入到云剪素材库。
     */
    ImportMaterial(req: ImportMaterialRequest, cb?: (error: string, rep: ImportMaterialResponse) => void): Promise<ImportMaterialResponse>;
    /**
     * 使用在线编辑轨道数据直接导出视频。
     */
    ExportVideoByEditorTrackData(req: ExportVideoByEditorTrackDataRequest, cb?: (error: string, rep: ExportVideoByEditorTrackDataResponse) => void): Promise<ExportVideoByEditorTrackDataResponse>;
    /**
     * 获取任务详情信息，包含下面几个部分：
<li>任务基础信息：包括任务状态、错误信息、创建时间等；</li>
<li>导出项目输出信息：包括输出的素材 Id 等。</li>
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     *  创建素材链接或分类路径链接，将源资源信息链接到目标。
     */
    CreateLink(req: CreateLinkRequest, cb?: (error: string, rep: CreateLinkResponse) => void): Promise<CreateLinkResponse>;
    /**
     * 修改团队信息，目前支持修改的操作有：
<li>修改团队名称。</li>
     */
    ModifyTeam(req: ModifyTeamRequest, cb?: (error: string, rep: ModifyTeamResponse) => void): Promise<ModifyTeamResponse>;
    /**
     * 根据素材 Id 删除素材。
     */
    DeleteMaterial(req: DeleteMaterialRequest, cb?: (error: string, rep: DeleteMaterialResponse) => void): Promise<DeleteMaterialResponse>;
    /**
     * 修改素材信息，支持修改素材名称、分类路径、标签等信息。
     */
    ModifyMaterial(req: ModifyMaterialRequest, cb?: (error: string, rep: ModifyMaterialResponse) => void): Promise<ModifyMaterialResponse>;
    /**
     * 删除一个团队。
<li>要删除的团队必须没有归属的素材；</li>
<li>要删除的团队必须没有归属的分类。</li>
     */
    DeleteTeam(req: DeleteTeamRequest, cb?: (error: string, rep: DeleteTeamResponse) => void): Promise<DeleteTeamResponse>;
    /**
     * 向一个团队中团队成员，并且指定成员的角色。
     */
    AddTeamMember(req: AddTeamMemberRequest, cb?: (error: string, rep: AddTeamMemberResponse) => void): Promise<AddTeamMemberResponse>;
    /**
     * 移动某一个分类到另外一个分类下，也可用于分类重命名。
<li>如果 SourceClassPath = /素材/视频/NBA，DestinationClassPath = /素材/视频/篮球，当 DestinationClassPath 不存在时候，操作结果为重命名 ClassPath，如果 DestinationClassPath 存在时候，操作结果为产生新目录 /素材/视频/篮球/NBA。</li>
     */
    MoveClass(req: MoveClassRequest, cb?: (error: string, rep: MoveClassResponse) => void): Promise<MoveClassResponse>;
    /**
     * 修改团队成员信息，包括成员备注、角色等。
     */
    ModifyTeamMember(req: ModifyTeamMemberRequest, cb?: (error: string, rep: ModifyTeamMemberResponse) => void): Promise<ModifyTeamMemberResponse>;
    /**
     * 将团队成员从团队中删除，默认只有 Owner 及管理员才有此权限。
     */
    DeleteTeamMembers(req: DeleteTeamMembersRequest, cb?: (error: string, rep: DeleteTeamMembersResponse) => void): Promise<DeleteTeamMembersResponse>;
    /**
     * 删除用户登录态，使用户登出云剪平台。
     */
    DeleteLoginStatus(req: DeleteLoginStatusRequest, cb?: (error: string, rep: DeleteLoginStatusResponse) => void): Promise<DeleteLoginStatusResponse>;
    /**
     * 支持根据多种条件过滤出项目列表。
     */
    DescribeProjects(req: DescribeProjectsRequest, cb?: (error: string, rep: DescribeProjectsResponse) => void): Promise<DescribeProjectsResponse>;
    /**
     * 查询指定用户的登录态。
     */
    DescribeLoginStatus(req: DescribeLoginStatusRequest, cb?: (error: string, rep: DescribeLoginStatusResponse) => void): Promise<DescribeLoginStatusResponse>;
    /**
     * 获取任务列表，支持条件筛选，返回对应的任务基础信息列表。
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 获取指定归属者下所有的分类信息。
     */
    DescribeClass(req: DescribeClassRequest, cb?: (error: string, rep: DescribeClassResponse) => void): Promise<DescribeClassResponse>;
    /**
     * 创建一个团队。
     */
    CreateTeam(req: CreateTeamRequest, cb?: (error: string, rep: CreateTeamResponse) => void): Promise<CreateTeamResponse>;
    /**
     * 修改云剪编辑项目的信息。
     */
    ModifyProject(req: ModifyProjectRequest, cb?: (error: string, rep: ModifyProjectResponse) => void): Promise<ModifyProjectResponse>;
    /**
     * 新增分类，用于管理素材。
<li>分类层数不能超过10；</li>
<li>子分类数不能超过10。</li>
     */
    CreateClass(req: CreateClassRequest, cb?: (error: string, rep: CreateClassResponse) => void): Promise<CreateClassResponse>;
    /**
     * 将云点播中的媒资添加到素材库中，供后续视频编辑使用。
     */
    ImportMediaToProject(req: ImportMediaToProjectRequest, cb?: (error: string, rep: ImportMediaToProjectResponse) => void): Promise<ImportMediaToProjectResponse>;
    /**
     *  浏览当前分类路径下的资源，包括素材和子分类。
     */
    ListMedia(req: ListMediaRequest, cb?: (error: string, rep: ListMediaResponse) => void): Promise<ListMediaResponse>;
    /**
     * 创建云剪的编辑项目，支持创建视频剪辑、直播剪辑、导播台项目以及视频拆条项目。

     */
    CreateProject(req: CreateProjectRequest, cb?: (error: string, rep: CreateProjectResponse) => void): Promise<CreateProjectResponse>;
    /**
     * 删除分类信息，删除时检验下述限制：
<li>分类路径必须存在；</li>
<li>分类下没有绑定素材。</li>
     */
    DeleteClass(req: DeleteClassRequest, cb?: (error: string, rep: DeleteClassResponse) => void): Promise<DeleteClassResponse>;
    /**
     * 删除云剪编辑项目。
     */
    DeleteProject(req: DeleteProjectRequest, cb?: (error: string, rep: DeleteProjectResponse) => void): Promise<DeleteProjectResponse>;
    /**
     * 平铺分类路径下及其子分类下的所有素材。
     */
    FlattenListMedia(req: FlattenListMediaRequest, cb?: (error: string, rep: FlattenListMediaResponse) => void): Promise<FlattenListMediaResponse>;
    /**
     * 获取指定成员 ID 的信息，同时支持拉取所有团队成员信息。
     */
    DescribeTeamMembers(req: DescribeTeamMembersRequest, cb?: (error: string, rep: DescribeTeamMembersResponse) => void): Promise<DescribeTeamMembersResponse>;
}
