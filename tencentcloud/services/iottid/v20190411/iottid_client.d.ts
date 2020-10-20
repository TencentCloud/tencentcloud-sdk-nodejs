import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribePermissionRequest, VerifyChipBurnInfoResponse, DeliverTidsResponse, BurnTidNotifyResponse, DescribeAvailableLibCountResponse, UploadDeviceUniqueCodeResponse, AuthTestTidResponse, DeliverTidNotifyResponse, AuthTestTidRequest, BurnTidNotifyRequest, VerifyChipBurnInfoRequest, UploadDeviceUniqueCodeRequest, DescribeAvailableLibCountRequest, DeliverTidsRequest, DeliverTidNotifyRequest, DescribePermissionResponse, DownloadTidsRequest, DownloadTidsResponse } from "./iottid_models";
/**
 * iottid client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 单向认证测试TID
     */
    AuthTestTid(req: AuthTestTidRequest, cb?: (error: string, rep: AuthTestTidResponse) => void): Promise<AuthTestTidResponse>;
    /**
     * 上传硬件唯一标识码，是软加固设备身份参数。本接口如遇到错误数据，则所有当次上传数据失效。
     */
    UploadDeviceUniqueCode(req: UploadDeviceUniqueCodeRequest, cb?: (error: string, rep: UploadDeviceUniqueCodeResponse) => void): Promise<UploadDeviceUniqueCodeResponse>;
    /**
     * 下载控制台验证芯片烧录信息，保证TID与中心信息一致
     */
    VerifyChipBurnInfo(req: VerifyChipBurnInfoRequest, cb?: (error: string, rep: VerifyChipBurnInfoResponse) => void): Promise<VerifyChipBurnInfoResponse>;
    /**
     * 设备服务商请求空发产品订单的TID信息
     */
    DeliverTids(req: DeliverTidsRequest, cb?: (error: string, rep: DeliverTidsResponse) => void): Promise<DeliverTidsResponse>;
    /**
     * 安全芯片TID烧录回执
     */
    BurnTidNotify(req: BurnTidNotifyRequest, cb?: (error: string, rep: BurnTidNotifyResponse) => void): Promise<BurnTidNotifyResponse>;
    /**
     * 查询企业用户TID平台控制台权限
     */
    DescribePermission(req?: DescribePermissionRequest, cb?: (error: string, rep: DescribePermissionResponse) => void): Promise<DescribePermissionResponse>;
    /**
     * 安全芯片为载体的TID空发回执，绑定TID与订单号。
     */
    DeliverTidNotify(req: DeliverTidNotifyRequest, cb?: (error: string, rep: DeliverTidNotifyResponse) => void): Promise<DeliverTidNotifyResponse>;
    /**
     * 下载芯片订单的TID
     */
    DownloadTids(req: DownloadTidsRequest, cb?: (error: string, rep: DownloadTidsResponse) => void): Promise<DownloadTidsResponse>;
    /**
     * 查询指定订单的可空发的白盒密钥数量
     */
    DescribeAvailableLibCount(req: DescribeAvailableLibCountRequest, cb?: (error: string, rep: DescribeAvailableLibCountResponse) => void): Promise<DescribeAvailableLibCountResponse>;
}
