import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDomainInfoResponse, DescribeIpInfoRequest, DescribeThreatInfoResponse, DescribeDomainInfoRequest, DescribeFileInfoResponse, DescribeThreatInfoRequest, DescribeFileInfoRequest, DescribeIpInfoResponse } from "./tics_models";
/**
 * tics client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 提供文件相关的基础信息以及与攻击事件（团伙、家族）、恶意文件等相关联信息。
     */
    DescribeFileInfo(req: DescribeFileInfoRequest, cb?: (error: string, rep: DescribeFileInfoResponse) => void): Promise<DescribeFileInfoResponse>;
    /**
     * 提供IP相关的基础信息以及与攻击事件（团伙、家族）、恶意文件等相关联信息。
     */
    DescribeIpInfo(req: DescribeIpInfoRequest, cb?: (error: string, rep: DescribeIpInfoResponse) => void): Promise<DescribeIpInfoResponse>;
    /**
     * 提供域名相关的基础信息以及与攻击事件（团伙、家族）、恶意文件等相关联信息。
     */
    DescribeDomainInfo(req: DescribeDomainInfoRequest, cb?: (error: string, rep: DescribeDomainInfoResponse) => void): Promise<DescribeDomainInfoResponse>;
    /**
     * 提供IP和域名相关威胁情报信息查询，这些信息可以辅助检测失陷主机、帮助SIEM/SOC等系统做研判决策、帮助运营团队对设备报警的编排处理。
     */
    DescribeThreatInfo(req: DescribeThreatInfoRequest, cb?: (error: string, rep: DescribeThreatInfoResponse) => void): Promise<DescribeThreatInfoResponse>;
}
