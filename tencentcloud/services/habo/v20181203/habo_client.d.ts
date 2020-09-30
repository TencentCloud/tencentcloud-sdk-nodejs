import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeStatusRequest, StartAnalyseResponse, StartAnalyseRequest, DescribeStatusResponse } from "./habo_models";
/**
 * habo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 上传样本到哈勃进行分析，异步生成分析日志。
     */
    StartAnalyse(req: StartAnalyseRequest, cb?: (error: string, rep: StartAnalyseResponse) => void): Promise<StartAnalyseResponse>;
    /**
     * 查询指定md5样本是否分析完成，并获取分析日志下载地址。
     */
    DescribeStatus(req: DescribeStatusRequest, cb?: (error: string, rep: DescribeStatusResponse) => void): Promise<DescribeStatusResponse>;
}
