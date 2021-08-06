import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeUserCmdTasksResponse, RunUserCmdRequest, CreatePsaRegulationRequest, DescribeDeviceInventoryResponse, DescribeOsInfoResponse, DescribeOsInfoRequest, DescribeTaskOperationLogResponse, CreateCustomImageRequest, DescribeCustomImagesRequest, DescribeUserCmdTaskInfoResponse, DescribeDevicesResponse, ModifyLanIpRequest, DescribeRepairTaskConstantRequest, DeletePsaRegulationRequest, DescribeCustomImageProcessRequest, ModifyDeviceAutoRenewFlagRequest, StartDevicesResponse, BindPsaTagRequest, DescribeRegionsResponse, OfflineDevicesResponse, ModifyPsaRegulationRequest, RecoverDevicesRequest, DescribeDeviceClassPartitionRequest, CreateSpotDeviceResponse, BuyDevicesRequest, DescribeHardwareSpecificationRequest, CreateCustomImageResponse, ReturnDevicesRequest, ModifyDeviceAliasesResponse, DescribeDevicePartitionResponse, DescribeHostedDeviceOutBandInfoRequest, RebootDevicesResponse, ResetDevicePasswordRequest, DescribeDeviceInventoryRequest, DescribeCustomImagesResponse, DeleteCustomImagesRequest, DescribeDevicePositionRequest, ShutdownDevicesResponse, DeleteUserCmdsRequest, AttachCamRoleRequest, DescribeDeviceClassResponse, DescribeDeviceHardwareInfoResponse, ModifyUserCmdRequest, DescribeDevicePriceInfoResponse, ReloadDeviceOsResponse, RunUserCmdResponse, ReloadDeviceOsRequest, DescribeUserCmdsRequest, DescribeTaskInfoRequest, RepairTaskControlResponse, DescribeRegionsRequest, DescribePsaRegulationsRequest, UnbindPsaTagResponse, DescribeDevicePriceInfoRequest, DescribeDevicePartitionRequest, ModifyPsaRegulationResponse, DescribeDevicePositionResponse, DeleteUserCmdsResponse, ModifyDeviceAliasesRequest, ModifyPayModePre2PostResponse, SetOutBandVpnAuthPasswordRequest, OfflineDevicesRequest, SetOutBandVpnAuthPasswordResponse, DescribeTaskInfoResponse, DescribeUserCmdTaskInfoRequest, CreateUserCmdResponse, ModifyUserCmdResponse, ModifyPayModePre2PostRequest, DescribeRepairTaskConstantResponse, BuyDevicesResponse, ModifyLanIpResponse, DescribePsaRegulationsResponse, StartDevicesRequest, DescribeUserCmdsResponse, ModifyDeviceAutoRenewFlagResponse, DescribeOperationResultResponse, DescribeDeviceClassRequest, ModifyCustomImageAttributeRequest, DeletePsaRegulationResponse, DescribeTaskOperationLogRequest, DescribeDeviceOperationLogRequest, DescribeOperationResultRequest, AttachCamRoleResponse, RecoverDevicesResponse, DetachCamRoleResponse, ShutdownDevicesRequest, UnbindPsaTagRequest, ModifyCustomImageAttributeResponse, CreateSpotDeviceRequest, CreateUserCmdRequest, ReturnDevicesResponse, BindPsaTagResponse, DescribeHostedDeviceOutBandInfoResponse, RebootDevicesRequest, DeleteCustomImagesResponse, DescribeDevicesRequest, DescribeHardwareSpecificationResponse, CreatePsaRegulationResponse, DescribeCustomImageProcessResponse, DescribeDeviceHardwareInfoRequest, DescribeDeviceOperationLogResponse, RepairTaskControlRequest, ResetDevicePasswordResponse, DescribeUserCmdTasksRequest, DetachCamRoleRequest, DescribeDeviceClassPartitionResponse } from "./bm_models";
/**
 * bm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取自定义脚本信息列表
     */
    DescribeUserCmds(req: DescribeUserCmdsRequest, cb?: (error: string, rep: DescribeUserCmdsResponse) => void): Promise<DescribeUserCmdsResponse>;
    /**
     * 重启机器
     */
    RebootDevices(req: RebootDevicesRequest, cb?: (error: string, rep: RebootDevicesResponse) => void): Promise<RebootDevicesResponse>;
    /**
     * 允许修改规则信息及关联故障类型
     */
    ModifyPsaRegulation(req: ModifyPsaRegulationRequest, cb?: (error: string, rep: ModifyPsaRegulationResponse) => void): Promise<ModifyPsaRegulationResponse>;
    /**
     * 获取预授权规则列表
     */
    DescribePsaRegulations(req: DescribePsaRegulationsRequest, cb?: (error: string, rep: DescribePsaRegulationsResponse) => void): Promise<DescribePsaRegulationsResponse>;
    /**
     * 修改物理机服务器自动续费标志
     */
    ModifyDeviceAutoRenewFlag(req: ModifyDeviceAutoRenewFlagRequest, cb?: (error: string, rep: ModifyDeviceAutoRenewFlagResponse) => void): Promise<ModifyDeviceAutoRenewFlagResponse>;
    /**
     * 销毁黑石物理机实例：可以销毁物理机列表中的竞价实例，或回收站列表中所有计费模式的实例
     */
    OfflineDevices(req: OfflineDevicesRequest, cb?: (error: string, rep: OfflineDevicesResponse) => void): Promise<OfflineDevicesResponse>;
    /**
     * 修改物理机内网IP（不重装系统）
     */
    ModifyLanIp(req: ModifyLanIpRequest, cb?: (error: string, rep: ModifyLanIpResponse) => void): Promise<ModifyLanIpResponse>;
    /**
     * 运行自定义脚本
     */
    RunUserCmd(req: RunUserCmdRequest, cb?: (error: string, rep: RunUserCmdResponse) => void): Promise<RunUserCmdResponse>;
    /**
     * 查询自定义镜像制作进度
     */
    DescribeCustomImageProcess(req: DescribeCustomImageProcessRequest, cb?: (error: string, rep: DescribeCustomImageProcessResponse) => void): Promise<DescribeCustomImageProcessResponse>;
    /**
     * 开启服务器
     */
    StartDevices(req: StartDevicesRequest, cb?: (error: string, rep: StartDevicesResponse) => void): Promise<StartDevicesResponse>;
    /**
     * 重装操作系统
     */
    ReloadDeviceOs(req: ReloadDeviceOsRequest, cb?: (error: string, rep: ReloadDeviceOsResponse) => void): Promise<ReloadDeviceOsResponse>;
    /**
     * 查询设备硬件配置信息，如 CPU 型号，内存大小，磁盘大小和数量
     */
    DescribeDeviceHardwareInfo(req: DescribeDeviceHardwareInfoRequest, cb?: (error: string, rep: DescribeDeviceHardwareInfoResponse) => void): Promise<DescribeDeviceHardwareInfoResponse>;
    /**
     * 获取自定义脚本任务列表
     */
    DescribeUserCmdTasks(req: DescribeUserCmdTasksRequest, cb?: (error: string, rep: DescribeUserCmdTasksResponse) => void): Promise<DescribeUserCmdTasksResponse>;
    /**
     * 创建预授权规则
     */
    CreatePsaRegulation(req: CreatePsaRegulationRequest, cb?: (error: string, rep: CreatePsaRegulationResponse) => void): Promise<CreatePsaRegulationResponse>;
    /**
     * 获取设备类型
     */
    DescribeDeviceClass(req: DescribeDeviceClassRequest, cb?: (error: string, rep: DescribeDeviceClassResponse) => void): Promise<DescribeDeviceClassResponse>;
    /**
     * 购买黑石物理机
     */
    BuyDevices(req: BuyDevicesRequest, cb?: (error: string, rep: BuyDevicesResponse) => void): Promise<BuyDevicesResponse>;
    /**
     * 修改自定义脚本
     */
    ModifyUserCmd(req: ModifyUserCmdRequest, cb?: (error: string, rep: ModifyUserCmdResponse) => void): Promise<ModifyUserCmdResponse>;
    /**
     * 删除自定义脚本
     */
    DeleteUserCmds(req: DeleteUserCmdsRequest, cb?: (error: string, rep: DeleteUserCmdsResponse) => void): Promise<DeleteUserCmdsResponse>;
    /**
     * 查询托管设备带外信息
     */
    DescribeHostedDeviceOutBandInfo(req: DescribeHostedDeviceOutBandInfoRequest, cb?: (error: string, rep: DescribeHostedDeviceOutBandInfoResponse) => void): Promise<DescribeHostedDeviceOutBandInfoResponse>;
    /**
     * 为预授权规则绑定标签
     */
    BindPsaTag(req: BindPsaTagRequest, cb?: (error: string, rep: BindPsaTagResponse) => void): Promise<BindPsaTagResponse>;
    /**
     * 删除自定义镜像<br>
正用于部署或重装中的镜像被删除后，镜像文件将保留一段时间，直到部署或重装结束
     */
    DeleteCustomImages(req: DeleteCustomImagesRequest, cb?: (error: string, rep: DeleteCustomImagesResponse) => void): Promise<DeleteCustomImagesResponse>;
    /**
     * 删除预授权规则
     */
    DeletePsaRegulation(req: DeletePsaRegulationRequest, cb?: (error: string, rep: DeletePsaRegulationResponse) => void): Promise<DeletePsaRegulationResponse>;
    /**
     * 创建自定义脚本
     */
    CreateUserCmd(req: CreateUserCmdRequest, cb?: (error: string, rep: CreateUserCmdResponse) => void): Promise<CreateUserCmdResponse>;
    /**
     * 查询自定义机型部件信息，包括CpuId对应的型号，DiskTypeId对应的磁盘类型
     */
    DescribeHardwareSpecification(req?: DescribeHardwareSpecificationRequest, cb?: (error: string, rep: DescribeHardwareSpecificationResponse) => void): Promise<DescribeHardwareSpecificationResponse>;
    /**
     * 服务器绑定CAM角色
     */
    DetachCamRole(req: DetachCamRoleRequest, cb?: (error: string, rep: DetachCamRoleResponse) => void): Promise<DetachCamRoleResponse>;
    /**
     * 服务器绑定CAM角色，该角色授权访问黑石物理服务器服务，为黑石物理服务器提供了访问资源的权限，如请求服务器的临时证书
     */
    AttachCamRole(req: AttachCamRoleRequest, cb?: (error: string, rep: AttachCamRoleResponse) => void): Promise<AttachCamRoleResponse>;
    /**
     * 查询指定机型所支持的操作系统
     */
    DescribeOsInfo(req: DescribeOsInfoRequest, cb?: (error: string, rep: DescribeOsInfoResponse) => void): Promise<DescribeOsInfoResponse>;
    /**
     * 获取异步操作状态的完成状态
     */
    DescribeOperationResult(req: DescribeOperationResultRequest, cb?: (error: string, rep: DescribeOperationResultResponse) => void): Promise<DescribeOperationResultResponse>;
    /**
     * 用于修改自定义镜像名或描述
     */
    ModifyCustomImageAttribute(req: ModifyCustomImageAttributeRequest, cb?: (error: string, rep: ModifyCustomImageAttributeResponse) => void): Promise<ModifyCustomImageAttributeResponse>;
    /**
     * 查询服务器所在的位置，如机架，上联交换机等信息
     */
    DescribeDevicePosition(req: DescribeDevicePositionRequest, cb?: (error: string, rep: DescribeDevicePositionResponse) => void): Promise<DescribeDevicePositionResponse>;
    /**
     * 查询地域以及可用区
     */
    DescribeRegions(req: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 获取自定义脚本任务详细信息
     */
    DescribeUserCmdTaskInfo(req: DescribeUserCmdTaskInfoRequest, cb?: (error: string, rep: DescribeUserCmdTaskInfoResponse) => void): Promise<DescribeUserCmdTaskInfoResponse>;
    /**
     * 查询服务器价格信息，支持设备的批量查找，支持标准机型和弹性机型的混合查找
     */
    DescribeDevicePriceInfo(req: DescribeDevicePriceInfoRequest, cb?: (error: string, rep: DescribeDevicePriceInfoResponse) => void): Promise<DescribeDevicePriceInfoResponse>;
    /**
     * 退回物理机至回收站，支持批量退还不同计费模式的物理机（包括预付费、后付费、预付费转后付费）
     */
    ReturnDevices(req: ReturnDevicesRequest, cb?: (error: string, rep: ReturnDevicesResponse) => void): Promise<ReturnDevicesResponse>;
    /**
     * 获取维修任务操作日志
     */
    DescribeTaskOperationLog(req: DescribeTaskOperationLogRequest, cb?: (error: string, rep: DescribeTaskOperationLogResponse) => void): Promise<DescribeTaskOperationLogResponse>;
    /**
     * 将设备的预付费模式修改为后付费计费模式，支持批量转换。（前提是客户要加入黑石物理机后付费计费的白名单，申请黑石物理机后付费可以联系腾讯云客服）
     */
    ModifyPayModePre2Post(req: ModifyPayModePre2PostRequest, cb?: (error: string, rep: ModifyPayModePre2PostResponse) => void): Promise<ModifyPayModePre2PostResponse>;
    /**
     * 解除标签与预授权规则的绑定
     */
    UnbindPsaTag(req: UnbindPsaTagRequest, cb?: (error: string, rep: UnbindPsaTagResponse) => void): Promise<UnbindPsaTagResponse>;
    /**
     * 创建黑石竞价实例
     */
    CreateSpotDevice(req: CreateSpotDeviceRequest, cb?: (error: string, rep: CreateSpotDeviceResponse) => void): Promise<CreateSpotDeviceResponse>;
    /**
     * 修改服务器名称
     */
    ModifyDeviceAliases(req: ModifyDeviceAliasesRequest, cb?: (error: string, rep: ModifyDeviceAliasesResponse) => void): Promise<ModifyDeviceAliasesResponse>;
    /**
     * 查询设备库存
     */
    DescribeDeviceInventory(req: DescribeDeviceInventoryRequest, cb?: (error: string, rep: DescribeDeviceInventoryResponse) => void): Promise<DescribeDeviceInventoryResponse>;
    /**
     * 查询设备操作日志， 如设备重启，重装，设置密码等操作
     */
    DescribeDeviceOperationLog(req: DescribeDeviceOperationLogRequest, cb?: (error: string, rep: DescribeDeviceOperationLogResponse) => void): Promise<DescribeDeviceOperationLogResponse>;
    /**
     * 获取用户维修任务列表及详细信息<br>
<br>
TaskStatus（任务状态ID）与状态中文名的对应关系如下：<br>
1：未授权<br>
2：处理中<br>
3：待确认<br>
4：未授权-暂不处理<br>
5：已恢复<br>
6：待确认-未恢复<br>
     */
    DescribeTaskInfo(req: DescribeTaskInfoRequest, cb?: (error: string, rep: DescribeTaskInfoResponse) => void): Promise<DescribeTaskInfoResponse>;
    /**
     * 此接口用于操作维修任务<br>
入参TaskId为维修任务ID<br>
入参Operate表示对维修任务的操作，支持如下取值：<br>
AuthorizeRepair（授权维修）<br>
Ignore（暂不提醒）<br>
ConfirmRecovered（维修完成后，确认故障恢复）<br>
ConfirmUnRecovered（维修完成后，确认故障未恢复，该操作已不推荐用）<br>
NeedRepairAgain（维修完成后，故障未恢复，需要重新维修，推荐用此操作打回）<br>
入参OperateRemark仅在Operate为NeedRepairAgain时有效，表示打回重修原因，建议给出打回的具体原因。<br>
<br>
操作约束（当前任务状态(TaskStatus)->对应可执行的操作）：<br>
未授权(1)->授权维修；暂不处理<br>
暂不处理(4)->授权维修<br>
待确认(3)->确认故障恢复；确认故障未恢复；需要重新维修<br>
未恢复(6)->确认故障恢复<br>
<br>
对于Ping不可达故障的任务，还允许：<br>
未授权->确认故障恢复<br>
暂不处理->确认故障恢复<br>
<br>
处理中与已恢复状态的任务不允许进行操作。<br>
<br>
详细信息请访问：https://cloud.tencent.com/document/product/386/18190
     */
    RepairTaskControl(req: RepairTaskControlRequest, cb?: (error: string, rep: RepairTaskControlResponse) => void): Promise<RepairTaskControlResponse>;
    /**
     * 查询物理服务器，可以按照实例，业务IP等过滤
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 维修任务配置获取
     */
    DescribeRepairTaskConstant(req?: DescribeRepairTaskConstantRequest, cb?: (error: string, rep: DescribeRepairTaskConstantResponse) => void): Promise<DescribeRepairTaskConstantResponse>;
    /**
     * 设置带外VPN认证用户密码
     */
    SetOutBandVpnAuthPassword(req: SetOutBandVpnAuthPasswordRequest, cb?: (error: string, rep: SetOutBandVpnAuthPasswordResponse) => void): Promise<SetOutBandVpnAuthPasswordResponse>;
    /**
     * 查看自定义镜像列表
     */
    DescribeCustomImages(req: DescribeCustomImagesRequest, cb?: (error: string, rep: DescribeCustomImagesResponse) => void): Promise<DescribeCustomImagesResponse>;
    /**
     * 恢复回收站中的物理机（仅限后付费的物理机）
     */
    RecoverDevices(req: RecoverDevicesRequest, cb?: (error: string, rep: RecoverDevicesResponse) => void): Promise<RecoverDevicesResponse>;
    /**
     * 获取物理机的分区格式
     */
    DescribeDevicePartition(req: DescribeDevicePartitionRequest, cb?: (error: string, rep: DescribeDevicePartitionResponse) => void): Promise<DescribeDevicePartitionResponse>;
    /**
     * 关闭服务器
     */
    ShutdownDevices(req: ShutdownDevicesRequest, cb?: (error: string, rep: ShutdownDevicesResponse) => void): Promise<ShutdownDevicesResponse>;
    /**
     * 重置服务器密码
     */
    ResetDevicePassword(req: ResetDevicePasswordRequest, cb?: (error: string, rep: ResetDevicePasswordResponse) => void): Promise<ResetDevicePasswordResponse>;
    /**
     * 查询机型支持的RAID方式， 并返回系统盘的分区和逻辑盘的列表
     */
    DescribeDeviceClassPartition(req: DescribeDeviceClassPartitionRequest, cb?: (error: string, rep: DescribeDeviceClassPartitionResponse) => void): Promise<DescribeDeviceClassPartitionResponse>;
    /**
     * 创建自定义镜像<br>
每个AppId在每个可用区最多保留20个自定义镜像
     */
    CreateCustomImage(req: CreateCustomImageRequest, cb?: (error: string, rep: CreateCustomImageResponse) => void): Promise<CreateCustomImageResponse>;
}
