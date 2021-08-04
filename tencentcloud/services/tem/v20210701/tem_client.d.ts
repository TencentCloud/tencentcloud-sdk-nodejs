import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ResumeDeployApplicationRequest, ResumeDeployApplicationResponse, RevertDeployApplicationResponse, RevertDeployApplicationRequest, DescribeDeployApplicationDetailRequest, DescribeDeployApplicationDetailResponse } from "./tem_models";
/**
 * tem client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 回滚分批发布
     */
    RevertDeployApplication(req: RevertDeployApplicationRequest, cb?: (error: string, rep: RevertDeployApplicationResponse) => void): Promise<RevertDeployApplicationResponse>;
    /**
     * 获取分批发布详情
     */
    DescribeDeployApplicationDetail(req: DescribeDeployApplicationDetailRequest, cb?: (error: string, rep: DescribeDeployApplicationDetailResponse) => void): Promise<DescribeDeployApplicationDetailResponse>;
    /**
     * 开始下一批次发布
     */
    ResumeDeployApplication(req: ResumeDeployApplicationRequest, cb?: (error: string, rep: ResumeDeployApplicationResponse) => void): Promise<ResumeDeployApplicationResponse>;
}
