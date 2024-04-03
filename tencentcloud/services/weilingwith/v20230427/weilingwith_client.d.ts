import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeWorkSpaceBuildingCountAndAreaRequest, SaveDeviceGroupRequest, DescribeAlarmTypeListResponse, DescribeDeviceStatusStatRequest, DescribeTenantBuildingCountAndAreaRequest, AddAlarmProcessRecordRequest, DescribeInterfaceListResponse, ModifyDeviceNameResponse, DescribeEdgeApplicationTokenResponse, DescribeWorkspaceListResponse, DescribeModelListResponse, DescribeRuleDetailRequest, BatchCreateDeviceResponse, CreateApplicationTokenResponse, DescribeTenantUserListRequest, BatchReportAppMessageResponse, DescribeDeviceStatusListResponse, ModifyDeviceNameRequest, DeleteDeviceGroupResponse, DescribeAlarmStatusListRequest, DescribeFileDownloadURLResponse, DescribeRuleDetailResponse, DescribeSpaceInfoByDeviceIdResponse, DescribeApplicationListRequest, DescribeSceneListRequest, DescribeDeviceListRequest, DescribeSpaceRelationByDeviceIdRequest, ChangeAlarmStatusResponse, DescribeBuildingModelResponse, DescribeDeviceGroupListResponse, DescribeElementProfilePageRequest, DescribePropertyListResponse, DescribeSpaceDeviceRelationListRequest, DescribeApplicationListResponse, DescribeFileDownloadURLRequest, StopVideoStreamingRequest, DescribeSpaceTypeListRequest, DescribeModelListRequest, DescribeBuildingListResponse, BatchDeleteDeviceResponse, DescribeWorkspaceUserListResponse, DescribePropertyListRequest, DescribeProductListRequest, ControlCameraPTZResponse, DescribeWorkspaceListRequest, ModifyDeviceFieldResponse, ControlDeviceRequest, DescribeDeviceTypeListResponse, DescribeVideoRecordStreamResponse, DescribeAlarmLevelListRequest, BatchReportAppMessageRequest, DescribeDeviceStatusStatResponse, DescribeBuildingModelRequest, ControlCameraPTZRequest, DescribeSpaceDeviceIdListResponse, DescribeElementProfileTreeResponse, DescribeTenantDepartmentListRequest, StopVideoStreamingResponse, DescribeBuildingProfileRequest, DescribeDeviceShadowListResponse, DescribeBuildingListRequest, DescribeWorkspaceUserListRequest, DescribeVideoCloudRecordResponse, DescribeSpaceDeviceRelationListResponse, UpdateWorkspaceParkAttributesRequest, ModifyDeviceTagRequest, ModifyDeviceGroupResponse, DescribeLinkRuleListResponse, DescribeSpaceTypeListResponse, DescribeAlarmLevelListResponse, BatchDeleteDeviceRequest, DescribeDeviceGroupListRequest, DescribeCityWorkspaceListRequest, UpdateWorkspaceParkAttributesResponse, DeleteDeviceGroupRequest, DescribeCityWorkspaceListResponse, BatchCreateDeviceRequest, BatchKillAlarmRequest, ModifyDeviceGroupRequest, DescribeElementProfileTreeRequest, DescribeLinkRuleListRequest, DescribeEventListResponse, DescribeDeviceTagListRequest, DescribeBuildingProfileResponse, ReportAppMessageRequest, DescribeFileUploadURLRequest, DescribeDeviceStatusListRequest, DescribeDeviceTagListResponse, DescribeVideoCloudRecordRequest, DescribeAdministrationByTagRequest, ControlDeviceResponse, DescribeAlarmListResponse, DescribeSpaceRelationByDeviceIdResponse, AddAlarmProcessRecordResponse, DescribeActionListResponse, DescribeInterfaceListRequest, DescribeProductListResponse, DescribeVideoRecordStreamRequest, DescribeAlarmStatusListResponse, CreateApplicationTokenRequest, DescribeFileUploadURLResponse, SaveDeviceGroupResponse, DescribeTenantDepartmentListResponse, DescribeWorkSpaceBuildingCountAndAreaResponse, ReportAppMessageResponse, DescribeAlarmListRequest, DescribeAdministrationByTagResponse, BatchKillAlarmResponse, DescribeDeviceTypeListRequest, DescribeDeviceShadowListRequest, DescribeSceneListResponse, DescribeDeviceListResponse, DescribeTenantBuildingCountAndAreaResponse, ModifyDeviceTagResponse, DescribeVideoLiveStreamRequest, ChangeAlarmStatusRequest, DescribeAlarmTypeListRequest, DescribeCameraExtendInfoResponse, DescribeSpaceInfoByDeviceIdRequest, DescribeCameraExtendInfoRequest, DescribeVideoLiveStreamResponse, DescribeTenantUserListResponse, DescribeEventListRequest, DescribeElementProfilePageResponse, DescribeSpaceDeviceIdListRequest, ModifyDeviceFieldRequest, DescribeActionListRequest, DescribeEdgeApplicationTokenRequest } from "./weilingwith_models";
/**
 * weilingwith client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 云录像接口
     */
    DescribeVideoCloudRecord(req: DescribeVideoCloudRecordRequest, cb?: (error: string, rep: DescribeVideoCloudRecordResponse) => void): Promise<DescribeVideoCloudRecordResponse>;
    /**
     * 查询建筑信息
     */
    DescribeBuildingProfile(req: DescribeBuildingProfileRequest, cb?: (error: string, rep: DescribeBuildingProfileResponse) => void): Promise<DescribeBuildingProfileResponse>;
    /**
     * 变更告警状态
     */
    ChangeAlarmStatus(req: ChangeAlarmStatusRequest, cb?: (error: string, rep: ChangeAlarmStatusResponse) => void): Promise<ChangeAlarmStatusResponse>;
    /**
     * 联动规则列表查询
     */
    DescribeLinkRuleList(req: DescribeLinkRuleListRequest, cb?: (error: string, rep: DescribeLinkRuleListResponse) => void): Promise<DescribeLinkRuleListResponse>;
    /**
     * 查询构件树
     */
    DescribeElementProfileTree(req: DescribeElementProfileTreeRequest, cb?: (error: string, rep: DescribeElementProfileTreeResponse) => void): Promise<DescribeElementProfileTreeResponse>;
    /**
     * 用来查询系统中的告警状态列表
     */
    DescribeAlarmStatusList(req: DescribeAlarmStatusListRequest, cb?: (error: string, rep: DescribeAlarmStatusListResponse) => void): Promise<DescribeAlarmStatusListResponse>;
    /**
     * 设备状态统计
     */
    DescribeDeviceStatusStat(req: DescribeDeviceStatusStatRequest, cb?: (error: string, rep: DescribeDeviceStatusStatResponse) => void): Promise<DescribeDeviceStatusStatResponse>;
    /**
     * 查询指定空间设备编号列表
     */
    DescribeSpaceDeviceIdList(req: DescribeSpaceDeviceIdListRequest, cb?: (error: string, rep: DescribeSpaceDeviceIdListResponse) => void): Promise<DescribeSpaceDeviceIdListResponse>;
    /**
     * 实时流接口
     */
    DescribeVideoLiveStream(req: DescribeVideoLiveStreamRequest, cb?: (error: string, rep: DescribeVideoLiveStreamResponse) => void): Promise<DescribeVideoLiveStreamResponse>;
    /**
     * 查询租户组织部门列表
     */
    DescribeTenantDepartmentList(req: DescribeTenantDepartmentListRequest, cb?: (error: string, rep: DescribeTenantDepartmentListResponse) => void): Promise<DescribeTenantDepartmentListResponse>;
    /**
     * 上报应用消息
     */
    ReportAppMessage(req: ReportAppMessageRequest, cb?: (error: string, rep: ReportAppMessageResponse) => void): Promise<ReportAppMessageResponse>;
    /**
     * 查询租户楼栋数量和楼栋建筑面积
     */
    DescribeTenantBuildingCountAndArea(req: DescribeTenantBuildingCountAndAreaRequest, cb?: (error: string, rep: DescribeTenantBuildingCountAndAreaResponse) => void): Promise<DescribeTenantBuildingCountAndAreaResponse>;
    /**
     * 查询项目空间楼栋数量与建筑面积
     */
    DescribeWorkSpaceBuildingCountAndArea(req: DescribeWorkSpaceBuildingCountAndAreaRequest, cb?: (error: string, rep: DescribeWorkSpaceBuildingCountAndAreaResponse) => void): Promise<DescribeWorkSpaceBuildingCountAndAreaResponse>;
    /**
     * 获取设备影子数据
     */
    DescribeDeviceShadowList(req: DescribeDeviceShadowListRequest, cb?: (error: string, rep: DescribeDeviceShadowListResponse) => void): Promise<DescribeDeviceShadowListResponse>;
    /**
     * 标签列表查询
     */
    DescribeDeviceTagList(req: DescribeDeviceTagListRequest, cb?: (error: string, rep: DescribeDeviceTagListResponse) => void): Promise<DescribeDeviceTagListResponse>;
    /**
     * 设备分组列表
     */
    DescribeDeviceGroupList(req: DescribeDeviceGroupListRequest, cb?: (error: string, rep: DescribeDeviceGroupListResponse) => void): Promise<DescribeDeviceGroupListResponse>;
    /**
     * 告警类型获取
     */
    DescribeAlarmTypeList(req: DescribeAlarmTypeListRequest, cb?: (error: string, rep: DescribeAlarmTypeListResponse) => void): Promise<DescribeAlarmTypeListResponse>;
    /**
     * 查询空间分类
     */
    DescribeSpaceTypeList(req: DescribeSpaceTypeListRequest, cb?: (error: string, rep: DescribeSpaceTypeListResponse) => void): Promise<DescribeSpaceTypeListResponse>;
    /**
     * 批量修改设备组
     */
    ModifyDeviceGroup(req: ModifyDeviceGroupRequest, cb?: (error: string, rep: ModifyDeviceGroupResponse) => void): Promise<ModifyDeviceGroupResponse>;
    /**
     * 拉取设备的设备类型列表
     */
    DescribeDeviceTypeList(req: DescribeDeviceTypeListRequest, cb?: (error: string, rep: DescribeDeviceTypeListResponse) => void): Promise<DescribeDeviceTypeListResponse>;
    /**
     * 查询设备绑定的空间信息
     */
    DescribeSpaceInfoByDeviceId(req: DescribeSpaceInfoByDeviceIdRequest, cb?: (error: string, rep: DescribeSpaceInfoByDeviceIdResponse) => void): Promise<DescribeSpaceInfoByDeviceIdResponse>;
    /**
     * 获取租户下的空间列表
     */
    DescribeWorkspaceList(req: DescribeWorkspaceListRequest, cb?: (error: string, rep: DescribeWorkspaceListResponse) => void): Promise<DescribeWorkspaceListResponse>;
    /**
     * 联动规则详情查询
     */
    DescribeRuleDetail(req: DescribeRuleDetailRequest, cb?: (error: string, rep: DescribeRuleDetailResponse) => void): Promise<DescribeRuleDetailResponse>;
    /**
     * 修改工作空间园区属性
     */
    UpdateWorkspaceParkAttributes(req: UpdateWorkspaceParkAttributesRequest, cb?: (error: string, rep: UpdateWorkspaceParkAttributesResponse) => void): Promise<UpdateWorkspaceParkAttributesResponse>;
    /**
     * 断流接口
     */
    StopVideoStreaming(req: StopVideoStreamingRequest, cb?: (error: string, rep: StopVideoStreamingResponse) => void): Promise<StopVideoStreamingResponse>;
    /**
     * 模型列表查询/单个查询（产品模型/标准模型）
     */
    DescribeModelList(req: DescribeModelListRequest, cb?: (error: string, rep: DescribeModelListResponse) => void): Promise<DescribeModelListResponse>;
    /**
     * 查询构件属性（详情）
     */
    DescribePropertyList(req: DescribePropertyListRequest, cb?: (error: string, rep: DescribePropertyListResponse) => void): Promise<DescribePropertyListResponse>;
    /**
     * 产品列表查询
     */
    DescribeProductList(req: DescribeProductListRequest, cb?: (error: string, rep: DescribeProductListResponse) => void): Promise<DescribeProductListResponse>;
    /**
     * 批量删除设备
     */
    BatchDeleteDevice(req: BatchDeleteDeviceRequest, cb?: (error: string, rep: BatchDeleteDeviceResponse) => void): Promise<BatchDeleteDeviceResponse>;
    /**
     * 动作列表查询
     */
    DescribeActionList(req: DescribeActionListRequest, cb?: (error: string, rep: DescribeActionListResponse) => void): Promise<DescribeActionListResponse>;
    /**
     * 查询场景列表
     */
    DescribeSceneList(req: DescribeSceneListRequest, cb?: (error: string, rep: DescribeSceneListResponse) => void): Promise<DescribeSceneListResponse>;
    /**
     * 查询设备绑定的空间层级关系
     */
    DescribeSpaceRelationByDeviceId(req: DescribeSpaceRelationByDeviceIdRequest, cb?: (error: string, rep: DescribeSpaceRelationByDeviceIdResponse) => void): Promise<DescribeSpaceRelationByDeviceIdResponse>;
    /**
     * 设备列表查询/单个查询（支持通过筛选条件查询，设备类型、标签、PID、空间）
     */
    DescribeDeviceList(req: DescribeDeviceListRequest, cb?: (error: string, rep: DescribeDeviceListResponse) => void): Promise<DescribeDeviceListResponse>;
    /**
     * 批量消警
     */
    BatchKillAlarm(req: BatchKillAlarmRequest, cb?: (error: string, rep: BatchKillAlarmResponse) => void): Promise<BatchKillAlarmResponse>;
    /**
     * 查询项目空间人员列表
     */
    DescribeWorkspaceUserList(req: DescribeWorkspaceUserListRequest, cb?: (error: string, rep: DescribeWorkspaceUserListResponse) => void): Promise<DescribeWorkspaceUserListResponse>;
    /**
     * 设备控制（单个、批量控制）
     */
    ControlDevice(req: ControlDeviceRequest, cb?: (error: string, rep: ControlDeviceResponse) => void): Promise<ControlDeviceResponse>;
    /**
     * 批量上报应用消息
     */
    BatchReportAppMessage(req: BatchReportAppMessageRequest, cb?: (error: string, rep: BatchReportAppMessageResponse) => void): Promise<BatchReportAppMessageResponse>;
    /**
     * 查询分页构件信息
     */
    DescribeElementProfilePage(req: DescribeElementProfilePageRequest, cb?: (error: string, rep: DescribeElementProfilePageResponse) => void): Promise<DescribeElementProfilePageResponse>;
    /**
     * 批量修改设备名字
     */
    ModifyDeviceName(req: ModifyDeviceNameRequest, cb?: (error: string, rep: ModifyDeviceNameResponse) => void): Promise<ModifyDeviceNameResponse>;
    /**
     * 事件列表查询
     */
    DescribeEventList(req: DescribeEventListRequest, cb?: (error: string, rep: DescribeEventListResponse) => void): Promise<DescribeEventListResponse>;
    /**
     * 根据标签获取行政区划列表
     */
    DescribeAdministrationByTag(req: DescribeAdministrationByTagRequest, cb?: (error: string, rep: DescribeAdministrationByTagResponse) => void): Promise<DescribeAdministrationByTagResponse>;
    /**
     * 单个/批量新增设备
     */
    BatchCreateDevice(req: BatchCreateDeviceRequest, cb?: (error: string, rep: BatchCreateDeviceResponse) => void): Promise<BatchCreateDeviceResponse>;
    /**
     * 批量修改设备标签
     */
    ModifyDeviceTag(req: ModifyDeviceTagRequest, cb?: (error: string, rep: ModifyDeviceTagResponse) => void): Promise<ModifyDeviceTagResponse>;
    /**
     * 获取视频扩展信息
     */
    DescribeCameraExtendInfo(req: DescribeCameraExtendInfoRequest, cb?: (error: string, rep: DescribeCameraExtendInfoResponse) => void): Promise<DescribeCameraExtendInfoResponse>;
    /**
     * 获取文件下载URL
     */
    DescribeFileDownloadURL(req: DescribeFileDownloadURLRequest, cb?: (error: string, rep: DescribeFileDownloadURLResponse) => void): Promise<DescribeFileDownloadURLResponse>;
    /**
     * 通过城市id查询工作空间列表
     */
    DescribeCityWorkspaceList(req: DescribeCityWorkspaceListRequest, cb?: (error: string, rep: DescribeCityWorkspaceListResponse) => void): Promise<DescribeCityWorkspaceListResponse>;
    /**
     * 查询边缘应用凭证
     */
    DescribeEdgeApplicationToken(req: DescribeEdgeApplicationTokenRequest, cb?: (error: string, rep: DescribeEdgeApplicationTokenResponse) => void): Promise<DescribeEdgeApplicationTokenResponse>;
    /**
     * 查询建筑三维模型
     */
    DescribeBuildingModel(req: DescribeBuildingModelRequest, cb?: (error: string, rep: DescribeBuildingModelResponse) => void): Promise<DescribeBuildingModelResponse>;
    /**
     * 删除设备分组
     */
    DeleteDeviceGroup(req: DeleteDeviceGroupRequest, cb?: (error: string, rep: DeleteDeviceGroupResponse) => void): Promise<DeleteDeviceGroupResponse>;
    /**
     * 查询指定空间下设备与构件绑定关系列表
     */
    DescribeSpaceDeviceRelationList(req: DescribeSpaceDeviceRelationListRequest, cb?: (error: string, rep: DescribeSpaceDeviceRelationListResponse) => void): Promise<DescribeSpaceDeviceRelationListResponse>;
    /**
     * 查询建筑列表
     */
    DescribeBuildingList(req: DescribeBuildingListRequest, cb?: (error: string, rep: DescribeBuildingListResponse) => void): Promise<DescribeBuildingListResponse>;
    /**
     * 设备分组新增/修改
     */
    SaveDeviceGroup(req: SaveDeviceGroupRequest, cb?: (error: string, rep: SaveDeviceGroupResponse) => void): Promise<SaveDeviceGroupResponse>;
    /**
     * 云台控制
     */
    ControlCameraPTZ(req: ControlCameraPTZRequest, cb?: (error: string, rep: ControlCameraPTZResponse) => void): Promise<ControlCameraPTZResponse>;
    /**
     * 查询接口列表
     */
    DescribeInterfaceList(req: DescribeInterfaceListRequest, cb?: (error: string, rep: DescribeInterfaceListResponse) => void): Promise<DescribeInterfaceListResponse>;
    /**
     * 历史流接口
     */
    DescribeVideoRecordStream(req: DescribeVideoRecordStreamRequest, cb?: (error: string, rep: DescribeVideoRecordStreamResponse) => void): Promise<DescribeVideoRecordStreamResponse>;
    /**
     * 告警列表查询
     */
    DescribeAlarmList(req: DescribeAlarmListRequest, cb?: (error: string, rep: DescribeAlarmListResponse) => void): Promise<DescribeAlarmListResponse>;
    /**
     * 查询指定空间关联的应用列表
     */
    DescribeApplicationList(req: DescribeApplicationListRequest, cb?: (error: string, rep: DescribeApplicationListResponse) => void): Promise<DescribeApplicationListResponse>;
    /**
     * 添加告警处理记录
     */
    AddAlarmProcessRecord(req: AddAlarmProcessRecordRequest, cb?: (error: string, rep: AddAlarmProcessRecordResponse) => void): Promise<AddAlarmProcessRecordResponse>;
    /**
     * 文件上传接口
     */
    DescribeFileUploadURL(req: DescribeFileUploadURLRequest, cb?: (error: string, rep: DescribeFileUploadURLResponse) => void): Promise<DescribeFileUploadURLResponse>;
    /**
     * 查询租户人员列表
     */
    DescribeTenantUserList(req: DescribeTenantUserListRequest, cb?: (error: string, rep: DescribeTenantUserListResponse) => void): Promise<DescribeTenantUserListResponse>;
    /**
     * 告警级别枚举获取
     */
    DescribeAlarmLevelList(req: DescribeAlarmLevelListRequest, cb?: (error: string, rep: DescribeAlarmLevelListResponse) => void): Promise<DescribeAlarmLevelListResponse>;
    /**
     * 调用方应用，创建调用租户API的授权令牌。
     */
    CreateApplicationToken(req: CreateApplicationTokenRequest, cb?: (error: string, rep: CreateApplicationTokenResponse) => void): Promise<CreateApplicationTokenResponse>;
    /**
     * 设备状态获取
     */
    DescribeDeviceStatusList(req: DescribeDeviceStatusListRequest, cb?: (error: string, rep: DescribeDeviceStatusListResponse) => void): Promise<DescribeDeviceStatusListResponse>;
    /**
     * 批量修改设备自定义字段值
     */
    ModifyDeviceField(req: ModifyDeviceFieldRequest, cb?: (error: string, rep: ModifyDeviceFieldResponse) => void): Promise<ModifyDeviceFieldResponse>;
}
