/**
 * DescribeWorkSpaceBuildingCountAndArea请求参数结构体
 */
export declare type DescribeWorkSpaceBuildingCountAndAreaRequest = null;
/**
 * 应用列表
 */
export interface ApplicationList {
    /**
     * 应用列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationInfoList?: Array<ApplicationInfo>;
    /**
     * 当前查询条件命中的数据总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: string;
}
/**
 * DescribeSpaceDeviceRelationList请求参数结构体
 */
export declare type DescribeSpaceDeviceRelationListRequest = null;
/**
 * DescribeAlarmTypeList返回参数结构体
 */
export interface DescribeAlarmTypeListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceStatusStat请求参数结构体
 */
export declare type DescribeDeviceStatusStatRequest = null;
/**
 * DescribeVideoLiveStream返回参数结构体
 */
export interface DescribeVideoLiveStreamResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTenantBuildingCountAndArea请求参数结构体
 */
export declare type DescribeTenantBuildingCountAndAreaRequest = null;
/**
 * AddAlarmProcessRecord请求参数结构体
 */
export declare type AddAlarmProcessRecordRequest = null;
/**
 * DescribeInterfaceList返回参数结构体
 */
export interface DescribeInterfaceListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDeviceName返回参数结构体
 */
export interface ModifyDeviceNameResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEdgeApplicationToken返回参数结构体
 */
export interface DescribeEdgeApplicationTokenResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 租户人员结果
 */
export interface SsoUserResult {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 租户人员数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Users?: Array<SsoUser>;
}
/**
 * 部门用户
 */
export interface SsoTeamUser {
    /**
     * 用户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 用户名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealName?: string;
    /**
     * 用户类型，1-超级管理员；2-1号管理员；3-普通管理员；99-普通用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserType?: string;
    /**
     * 所属租户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 邮箱
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Email?: string;
    /**
     * 电话
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Phone?: string;
    /**
     * 用户状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateAt?: number;
    /**
     * 部门ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DepartmentId?: string;
    /**
     * 部门名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DepartmentName?: string;
    /**
     * 是否关联权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LinkFilter?: number;
}
/**
 * DescribeWorkspaceList返回参数结构体
 */
export interface DescribeWorkspaceListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeModelList返回参数结构体
 */
export interface DescribeModelListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleDetail请求参数结构体
 */
export declare type DescribeRuleDetailRequest = null;
/**
 * BatchCreateDevice返回参数结构体
 */
export interface BatchCreateDeviceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateApplicationToken返回参数结构体
 */
export interface CreateApplicationTokenResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTenantUserList请求参数结构体
 */
export interface DescribeTenantUserListRequest {
    /**
     * 翻页页码
     */
    Offset: number;
    /**
     * 翻页大小
     */
    Limit: number;
    /**
     * token
     */
    ApplicationToken: string;
    /**
     * 租户ID
     */
    TenantId?: string;
    /**
     * 更新时间戳，单位秒
     */
    UpdateAt?: number;
    /**
     * 部门ID
     */
    DepartmentId?: string;
    /**
     * 用户id
     */
    Cursor?: string;
    /**
     * 状态，0，获取所有数据，1正常启用，2禁用
     */
    Status?: number;
    /**
     * 项目空间id
     */
    WorkspaceId?: string;
    /**
     * 关键词
     */
    Keyword?: string;
    /**
     * 是否递归获取子级数据，0需要，1不需要，默认为0
     */
    NoRecursive?: string;
}
/**
 * StopVideoStreaming返回参数结构体
 */
export interface StopVideoStreamingResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceStatusList返回参数结构体
 */
export interface DescribeDeviceStatusListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDeviceName请求参数结构体
 */
export declare type ModifyDeviceNameRequest = null;
/**
 * DescribeFileUploadURL返回参数结构体
 */
export interface DescribeFileUploadURLResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFileDownloadURL返回参数结构体
 */
export interface DescribeFileDownloadURLResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleDetail返回参数结构体
 */
export interface DescribeRuleDetailResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSpaceInfoByDeviceId返回参数结构体
 */
export interface DescribeSpaceInfoByDeviceIdResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeApplicationList请求参数结构体
 */
export interface DescribeApplicationListRequest {
    /**
     * 项目空间id，本次查询返回的应用均关联至该空间
     */
    WorkspaceId: number;
    /**
     * 应用token
     */
    ApplicationToken: string;
    /**
     * 应用id数组，可选，填了则表示根据id批量查询
     */
    ApplicationId?: Array<number | bigint>;
    /**
     * 请求页号
     */
    PageNumber?: number;
    /**
     * 页容量，默认为10
     */
    PageSize?: number;
}
/**
 * DescribeSceneList请求参数结构体
 */
export declare type DescribeSceneListRequest = null;
/**
 * DescribeDeviceList请求参数结构体
 */
export declare type DescribeDeviceListRequest = null;
/**
 * DescribeSpaceRelationByDeviceId请求参数结构体
 */
export declare type DescribeSpaceRelationByDeviceIdRequest = null;
/**
 * ChangeAlarmStatus返回参数结构体
 */
export interface ChangeAlarmStatusResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBuildingModel返回参数结构体
 */
export interface DescribeBuildingModelResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchReportAppMessage返回参数结构体
 */
export interface BatchReportAppMessageResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeElementProfilePage请求参数结构体
 */
export declare type DescribeElementProfilePageRequest = null;
/**
 * DescribePropertyList返回参数结构体
 */
export interface DescribePropertyListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeApplicationList返回参数结构体
 */
export interface DescribeApplicationListResponse {
    /**
     * 应用列表
     */
    Result?: ApplicationList;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFileDownloadURL请求参数结构体
 */
export declare type DescribeFileDownloadURLRequest = null;
/**
 * StopVideoStreaming请求参数结构体
 */
export declare type StopVideoStreamingRequest = null;
/**
 * DescribeSpaceTypeList请求参数结构体
 */
export declare type DescribeSpaceTypeListRequest = null;
/**
 * DescribeModelList请求参数结构体
 */
export declare type DescribeModelListRequest = null;
/**
 * 部门用户结果
 */
export interface SsoDepartmentsResult {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 部门列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Departments?: Array<SsoDepartment>;
}
/**
 * DescribeBuildingList返回参数结构体
 */
export interface DescribeBuildingListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 空间用户结果
 */
export interface SsoTeamUserResult {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 部门用户列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Users?: Array<SsoTeamUser>;
}
/**
 * DescribeWorkspaceUserList返回参数结构体
 */
export interface DescribeWorkspaceUserListResponse {
    /**
     * 返回数据
     */
    Result?: SsoTeamUserResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePropertyList请求参数结构体
 */
export declare type DescribePropertyListRequest = null;
/**
 * DescribeProductList请求参数结构体
 */
export declare type DescribeProductListRequest = null;
/**
 * 应用logo
 */
export interface ApplicationLogo {
    /**
     * logo图片对应的fileId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileId?: string;
    /**
     * logo图片地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Url?: string;
}
/**
 * ControlCameraPTZ返回参数结构体
 */
export interface ControlCameraPTZResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkspaceList请求参数结构体
 */
export declare type DescribeWorkspaceListRequest = null;
/**
 * DescribeDeviceTypeList返回参数结构体
 */
export interface DescribeDeviceTypeListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVideoRecordStream返回参数结构体
 */
export interface DescribeVideoRecordStreamResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAlarmLevelList请求参数结构体
 */
export declare type DescribeAlarmLevelListRequest = null;
/**
 * BatchReportAppMessage请求参数结构体
 */
export declare type BatchReportAppMessageRequest = null;
/**
 * DescribeDeviceStatusStat返回参数结构体
 */
export interface DescribeDeviceStatusStatResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 设备影子查询列表
 */
export interface DeviceShadowRes {
    /**
     * 第几页
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNumber?: number;
    /**
     * 每页条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 总页数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPage?: number;
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalRow?: number;
    /**
     * 设备影子列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Set?: Array<DeviceShadowInfo>;
}
/**
 * DescribeBuildingModel请求参数结构体
 */
export declare type DescribeBuildingModelRequest = null;
/**
 * AddAlarmProcessRecord返回参数结构体
 */
export interface AddAlarmProcessRecordResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSpaceDeviceIdList返回参数结构体
 */
export interface DescribeSpaceDeviceIdListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeElementProfileTree返回参数结构体
 */
export interface DescribeElementProfileTreeResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTenantDepartmentList请求参数结构体
 */
export interface DescribeTenantDepartmentListRequest {
    /**
     * 翻页页码
     */
    Offset: number;
    /**
     * 翻页大小
     */
    Limit: number;
    /**
     * token
     */
    ApplicationToken: string;
    /**
     * 租户ID
     */
    TenantId?: string;
    /**
     * 更新时间戳，单位秒
     */
    UpdateAt?: number;
    /**
     * 部门ID
     */
    DepartmentId?: string;
    /**
     * 用户id
     */
    Cursor?: string;
}
/**
 * DescribeBuildingProfile请求参数结构体
 */
export declare type DescribeBuildingProfileRequest = null;
/**
 * DescribeDeviceShadowList返回参数结构体
 */
export interface DescribeDeviceShadowListResponse {
    /**
     * 获取设备影子结果
     */
    Result?: DeviceShadowRes;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBuildingList请求参数结构体
 */
export declare type DescribeBuildingListRequest = null;
/**
 * DescribeWorkspaceUserList请求参数结构体
 */
export interface DescribeWorkspaceUserListRequest {
    /**
     * 翻页页码
     */
    Offset: number;
    /**
     * 翻页大小
     */
    Limit: number;
    /**
     * 工作空间ID
     */
    WorkspaceId: string;
    /**
     * token
     */
    ApplicationToken: string;
    /**
     * 租户ID
     */
    TenantId?: string;
    /**
     * 更新时间戳，单位秒
     */
    UpdateAt?: number;
}
/**
 * DescribeVideoCloudRecord返回参数结构体
 */
export interface DescribeVideoCloudRecordResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSpaceDeviceRelationList返回参数结构体
 */
export interface DescribeSpaceDeviceRelationListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateWorkspaceParkAttributes请求参数结构体
 */
export declare type UpdateWorkspaceParkAttributesRequest = null;
/**
 * DescribeLinkRuleList返回参数结构体
 */
export interface DescribeLinkRuleListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSpaceTypeList返回参数结构体
 */
export interface DescribeSpaceTypeListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ControlDevice请求参数结构体
 */
export declare type ControlDeviceRequest = null;
/**
 * DescribeAlarmLevelList返回参数结构体
 */
export interface DescribeAlarmLevelListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCityWorkspaceList请求参数结构体
 */
export declare type DescribeCityWorkspaceListRequest = null;
/**
 * DescribeDeviceTagList返回参数结构体
 */
export interface DescribeDeviceTagListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeActionList返回参数结构体
 */
export interface DescribeActionListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchCreateDevice请求参数结构体
 */
export declare type BatchCreateDeviceRequest = null;
/**
 * BatchKillAlarm请求参数结构体
 */
export declare type BatchKillAlarmRequest = null;
/**
 * DescribeElementProfileTree请求参数结构体
 */
export declare type DescribeElementProfileTreeRequest = null;
/**
 * DescribeLinkRuleList请求参数结构体
 */
export declare type DescribeLinkRuleListRequest = null;
/**
 * DescribeEventList返回参数结构体
 */
export interface DescribeEventListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceTagList请求参数结构体
 */
export declare type DescribeDeviceTagListRequest = null;
/**
 * DescribeBuildingProfile返回参数结构体
 */
export interface DescribeBuildingProfileResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReportAppMessage请求参数结构体
 */
export declare type ReportAppMessageRequest = null;
/**
 * 应用描述
 */
export interface ApplicationInfo {
    /**
     * 应用分配的appId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用中文名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 应用地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Address?: string;
    /**
     * 应用logo
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationLogo?: ApplicationLogo;
    /**
     * 应用类型，0:saas应用 1:平台应用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: number;
    /**
     * engine
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnglishName?: string;
    /**
     * 能源管理应用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
}
/**
 * DescribeFileUploadURL请求参数结构体
 */
export declare type DescribeFileUploadURLRequest = null;
/**
 * DescribeDeviceStatusList请求参数结构体
 */
export declare type DescribeDeviceStatusListRequest = null;
/**
 * DescribeVideoCloudRecord请求参数结构体
 */
export declare type DescribeVideoCloudRecordRequest = null;
/**
 * DescribeAdministrationByTag请求参数结构体
 */
export declare type DescribeAdministrationByTagRequest = null;
/**
 * DescribeCityWorkspaceList返回参数结构体
 */
export interface DescribeCityWorkspaceListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ControlDevice返回参数结构体
 */
export interface ControlDeviceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAlarmList返回参数结构体
 */
export interface DescribeAlarmListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSpaceRelationByDeviceId返回参数结构体
 */
export interface DescribeSpaceRelationByDeviceIdResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ControlCameraPTZ请求参数结构体
 */
export declare type ControlCameraPTZRequest = null;
/**
 * DescribeSpaceInfoByDeviceId请求参数结构体
 */
export declare type DescribeSpaceInfoByDeviceIdRequest = null;
/**
 * DescribeInterfaceList请求参数结构体
 */
export declare type DescribeInterfaceListRequest = null;
/**
 * DescribeProductList返回参数结构体
 */
export interface DescribeProductListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVideoRecordStream请求参数结构体
 */
export interface DescribeVideoRecordStreamRequest {
    /**
     * 设备唯一标识
     */
    WID: string;
    /**
     * 枚举如下：
  flvsh
  rtmp
  hls
  webrtc
  raw (视频原始帧)
     */
    Protocol: string;
    /**
     * 开始时间（精确到毫秒）
     */
    StartTime: number;
    /**
     * 结束时间（精确到毫秒）
     */
    EndTime: number;
    /**
     * 倍速 0.5、1、2、4
     */
    PlayBackRate: number;
    /**
     * 工作空间id
     */
    WorkspaceId: number;
    /**
     * 应用token
     */
    ApplicationToken: string;
    /**
     * 流的唯一标识，播放链接尾缀
     */
    Stream?: string;
    /**
     * 公有云私有化项目传0或者不传；混合云项目一般传空间id
     */
    Env?: string;
}
/**
 * DescribeAlarmStatusList返回参数结构体
 */
export interface DescribeAlarmStatusListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateApplicationToken请求参数结构体
 */
export declare type CreateApplicationTokenRequest = null;
/**
 * DescribeAlarmStatusList请求参数结构体
 */
export declare type DescribeAlarmStatusListRequest = null;
/**
 * UpdateWorkspaceParkAttributes返回参数结构体
 */
export interface UpdateWorkspaceParkAttributesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTenantDepartmentList返回参数结构体
 */
export interface DescribeTenantDepartmentListResponse {
    /**
     * 返回数据
     */
    Result?: SsoDepartmentsResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWorkSpaceBuildingCountAndArea返回参数结构体
 */
export interface DescribeWorkSpaceBuildingCountAndAreaResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReportAppMessage返回参数结构体
 */
export interface ReportAppMessageResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAlarmList请求参数结构体
 */
export declare type DescribeAlarmListRequest = null;
/**
 * DescribeAdministrationByTag返回参数结构体
 */
export interface DescribeAdministrationByTagResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 部门用户
 */
export interface SsoDepartment {
    /**
     * 部门ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DepartmentId?: string;
    /**
     * 部门名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 父级部门ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentDepartmentId?: string;
}
/**
 * BatchKillAlarm返回参数结构体
 */
export interface BatchKillAlarmResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 设备影子信息
 */
export interface DeviceShadowInfo {
    /**
     * 设备ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WID?: string;
    /**
     * 设备影子数据,返回有效数据为"x-json:"后字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceShadow?: string;
    /**
     * 设备影子更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceShadowUpdateTime?: string;
}
/**
 * DescribeDeviceTypeList请求参数结构体
 */
export declare type DescribeDeviceTypeListRequest = null;
/**
 * DescribeDeviceShadowList请求参数结构体
 */
export interface DescribeDeviceShadowListRequest {
    /**
     * 工作空间id
     */
    WorkspaceId: number;
    /**
     * WID
     */
    WIDSet: Array<string>;
    /**
     * 分页查询，第几页
     */
    PageNumber: number;
    /**
     * 每页条数
     */
    PageSize: number;
    /**
     * 应用token
     */
    ApplicationToken: string;
    /**
     * 设备类型code
     */
    DeviceTypeSet?: Array<string>;
    /**
     * 产品 pid
     */
    ProductIdSet?: Array<number | bigint>;
    /**
     * 空间层级，（支持空间多层，比如具体建筑、具体楼层）
     */
    SpaceCodeSet?: Array<string>;
    /**
     * 设备标签名
     */
    DeviceTagSet?: Array<string>;
}
/**
 * DescribeSceneList返回参数结构体
 */
export interface DescribeSceneListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceList返回参数结构体
 */
export interface DescribeDeviceListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTenantBuildingCountAndArea返回参数结构体
 */
export interface DescribeTenantBuildingCountAndAreaResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVideoLiveStream请求参数结构体
 */
export declare type DescribeVideoLiveStreamRequest = null;
/**
 * 用户结果
 */
export interface SsoUser {
    /**
     * 用户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * 用户名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealName?: string;
    /**
     * 用户类型，1-超级管理员；2-1号管理员；3-普通管理员；99-普通用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserType?: string;
    /**
     * 所属租户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 所属组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserGroup?: string;
    /**
     * 邮箱
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Email?: string;
    /**
     * 电话
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Phone?: string;
    /**
     * 用户状态，0待审核，1正常启用，2禁用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateAt?: number;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateAt?: number;
    /**
     * 是否属于团队，0不可用，1属于，2不属
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BelongTeam?: number;
    /**
     * 部门ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DepartmentId?: string;
    /**
     * 部门名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DepartmentName?: string;
    /**
     * 子账户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DepartmentUserId?: number;
    /**
     * 密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
}
/**
 * ChangeAlarmStatus请求参数结构体
 */
export declare type ChangeAlarmStatusRequest = null;
/**
 * DescribeAlarmTypeList请求参数结构体
 */
export declare type DescribeAlarmTypeListRequest = null;
/**
 * DescribeCameraExtendInfo返回参数结构体
 */
export interface DescribeCameraExtendInfoResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCameraExtendInfo请求参数结构体
 */
export declare type DescribeCameraExtendInfoRequest = null;
/**
 * DescribeTenantUserList返回参数结构体
 */
export interface DescribeTenantUserListResponse {
    /**
     * 返回数据
     */
    Result?: SsoUserResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEventList请求参数结构体
 */
export declare type DescribeEventListRequest = null;
/**
 * DescribeElementProfilePage返回参数结构体
 */
export interface DescribeElementProfilePageResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSpaceDeviceIdList请求参数结构体
 */
export declare type DescribeSpaceDeviceIdListRequest = null;
/**
 * DescribeActionList请求参数结构体
 */
export declare type DescribeActionListRequest = null;
/**
 * DescribeEdgeApplicationToken请求参数结构体
 */
export declare type DescribeEdgeApplicationTokenRequest = null;
