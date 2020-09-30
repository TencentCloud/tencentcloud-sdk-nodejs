import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetLocalEngineResponse, ScanFileHashResponse, ScanFileHashRequest, ScanFileResponse, GetScanResultResponse, GetLocalEngineRequest, GetScanResultRequest, ScanFileRequest } from "./tav_models";
/**
 * tav client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * tav文件上传扫描结果查询
     */
    GetScanResult(req: GetScanResultRequest, cb?: (error: string, rep: GetScanResultResponse) => void): Promise<GetScanResultResponse>;
    /**
     * 通过文件哈希值获取文件黑白属性
     */
    ScanFileHash(req: ScanFileHashRequest, cb?: (error: string, rep: ScanFileHashResponse) => void): Promise<ScanFileHashResponse>;
    /**
     * 获取TAV本地引擎
     */
    GetLocalEngine(req: GetLocalEngineRequest, cb?: (error: string, rep: GetLocalEngineResponse) => void): Promise<GetLocalEngineResponse>;
    /**
     * tav文件上传扫描
     */
    ScanFile(req: ScanFileRequest, cb?: (error: string, rep: ScanFileResponse) => void): Promise<ScanFileResponse>;
}
