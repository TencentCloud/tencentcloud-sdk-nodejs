import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyMultiBizConfigResponse, CreateMultiBizAlertResponse, CreateServerStateResponse, CreateCaptureResponse, DescribeConfigRequest, DeleteTaskRequest, CreateCameraAlertsRequest, CreateCameraAlertsResponse, DeleteMultiBizAlertRequest, DescribeZonesRequest, SearchImageResponse, CreateProgramStateResponse, DescribeTasksRequest, SearchImageRequest, DeleteMultiBizAlertResponse, ReportServiceRegisterRequest, DescribeImageResponse, ReportServiceRegisterResponse, CreateCameraStateResponse, CreateMultiBizAlertRequest, CreateProgramStateRequest, DescribeMultiBizBaseImageRequest, DescribeTasksResponse, DescribeCamerasRequest, DescribeMultiBizBaseImageResponse, DescribeImageRequest, CreateCaptureRequest, CreateCameraStateRequest, DescribeCamerasResponse, DescribeConfigResponse, DeleteTaskResponse, DescribeZonesResponse, ModifyMultiBizConfigRequest, CreateServerStateRequest } from "./ump_models";
/**
 * ump client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 优mall产品启动下线流程

上报服务注册自身的服务地址作为回调地址, 用于信息回传。
     */
    ReportServiceRegister(req: ReportServiceRegisterRequest, cb?: (error: string, rep: ReportServiceRegisterResponse) => void): Promise<ReportServiceRegisterResponse>;
    /**
     * 优mall产品启动下线流程

集团广场的多经点位配置更新
     */
    ModifyMultiBizConfig(req: ModifyMultiBizConfigRequest, cb?: (error: string, rep: ModifyMultiBizConfigResponse) => void): Promise<ModifyMultiBizConfigResponse>;
    /**
     * 优mall产品启动下线流程

上报相机移动、遮挡等告警信息


     */
    CreateCameraAlerts(req: CreateCameraAlertsRequest, cb?: (error: string, rep: CreateCameraAlertsResponse) => void): Promise<CreateCameraAlertsResponse>;
    /**
     * 优mall产品启动下线流程

获取摄像头配置信息
mac不为空返回指定相机配置
mac为空返回对应GroupCode和MallId全量配置
     */
    DescribeConfig(req: DescribeConfigRequest, cb?: (error: string, rep: DescribeConfigResponse) => void): Promise<DescribeConfigResponse>;
    /**
     * 优mall产品启动下线流程

实时获取底图接口
     */
    DescribeImage(req: DescribeImageRequest, cb?: (error: string, rep: DescribeImageResponse) => void): Promise<DescribeImageResponse>;
    /**
     * 优mall产品启动下线流程

集团广场的多经点位消警
     */
    DeleteMultiBizAlert(req: DeleteMultiBizAlertRequest, cb?: (error: string, rep: DeleteMultiBizAlertResponse) => void): Promise<DeleteMultiBizAlertResponse>;
    /**
     * 优mall产品启动下线流程

获取集团广场对应的摄像头列表
     */
    DescribeCameras(req: DescribeCamerasRequest, cb?: (error: string, rep: DescribeCamerasResponse) => void): Promise<DescribeCamerasResponse>;
    /**
     * 优mall产品启动下线流程

获取集团广场的点位列表
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 优mall产品启动下线流程

删除集团广场对应的任务
     */
    DeleteTask(req: DeleteTaskRequest, cb?: (error: string, rep: DeleteTaskResponse) => void): Promise<DeleteTaskResponse>;
    /**
     * 优mall产品启动下线流程

上报所有进程监控信息
     */
    CreateProgramState(req: CreateProgramStateRequest, cb?: (error: string, rep: CreateProgramStateResponse) => void): Promise<CreateProgramStateResponse>;
    /**
     * 优mall产品启动下线流程

查询集团广场对应的任务列表
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 优mall产品启动下线流程

集团广场的多经点位告警
     */
    CreateMultiBizAlert(req: CreateMultiBizAlertRequest, cb?: (error: string, rep: CreateMultiBizAlertResponse) => void): Promise<CreateMultiBizAlertResponse>;
    /**
     * 优mall产品启动下线流程

以图搜图
     */
    SearchImage(req: SearchImageRequest, cb?: (error: string, rep: SearchImageResponse) => void): Promise<SearchImageResponse>;
    /**
     * 优mall产品启动下线流程

上报所有服务器硬件监控信息
     */
    CreateServerState(req: CreateServerStateRequest, cb?: (error: string, rep: CreateServerStateResponse) => void): Promise<CreateServerStateResponse>;
    /**
     * 优mall产品启动下线流程

获取多经点位底图
     */
    DescribeMultiBizBaseImage(req: DescribeMultiBizBaseImageRequest, cb?: (error: string, rep: DescribeMultiBizBaseImageResponse) => void): Promise<DescribeMultiBizBaseImageResponse>;
    /**
     * 优mall产品启动下线流程

上报当前场内所有相机的当前状态
     */
    CreateCameraState(req: CreateCameraStateRequest, cb?: (error: string, rep: CreateCameraStateResponse) => void): Promise<CreateCameraStateResponse>;
    /**
     * 优mall产品下线

场内抓拍上报接口
     */
    CreateCapture(req: CreateCaptureRequest, cb?: (error: string, rep: CreateCaptureResponse) => void): Promise<CreateCaptureResponse>;
}
