import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeWorkspaceUserListResponse, DescribeWorkspaceUserListRequest, DescribeInterfaceListRequest, DescribeApplicationListResponse, DescribeWorkspaceListResponse, DescribeApplicationListRequest, DescribeInterfaceListResponse, DescribeWorkspaceListRequest, DescribeEdgeApplicationTokenResponse, DescribeEdgeApplicationTokenRequest } from "./weilingwith_models";
/**
 * weilingwith client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询指定空间关联的应用列表
     */
    DescribeApplicationList(req?: DescribeApplicationListRequest, cb?: (error: string, rep: DescribeApplicationListResponse) => void): Promise<DescribeApplicationListResponse>;
    /**
     * 查询接口列表
     */
    DescribeInterfaceList(req?: DescribeInterfaceListRequest, cb?: (error: string, rep: DescribeInterfaceListResponse) => void): Promise<DescribeInterfaceListResponse>;
    /**
     * 查询项目空间人员列表
     */
    DescribeWorkspaceUserList(req: DescribeWorkspaceUserListRequest, cb?: (error: string, rep: DescribeWorkspaceUserListResponse) => void): Promise<DescribeWorkspaceUserListResponse>;
    /**
     * 查询边缘应用凭证
     */
    DescribeEdgeApplicationToken(req?: DescribeEdgeApplicationTokenRequest, cb?: (error: string, rep: DescribeEdgeApplicationTokenResponse) => void): Promise<DescribeEdgeApplicationTokenResponse>;
    /**
     * 获取租户下的空间列表
     */
    DescribeWorkspaceList(req?: DescribeWorkspaceListRequest, cb?: (error: string, rep: DescribeWorkspaceListResponse) => void): Promise<DescribeWorkspaceListResponse>;
}
