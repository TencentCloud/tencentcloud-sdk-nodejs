import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeAccountGroupsResponse, DescribeRootAccountGroupResponse, DescribeLocalAccountsRequest, DescribeDevicesResponse, DescribeDevicesRequest, DescribeLocalAccountsResponse, DescribeRootAccountGroupRequest, DescribeAccountGroupsRequest } from "./ioa_models";
/**
 * ioa client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询账户根分组详情，私有化调用path为：capi/Assets/DescribeRootAccountGroup
     */
    DescribeRootAccountGroup(req?: DescribeRootAccountGroupRequest, cb?: (error: string, rep: DescribeRootAccountGroupResponse) => void): Promise<DescribeRootAccountGroupResponse>;
    /**
     * 查询满足条件的终端数据详情，私有化调用path为：/capi/Assets/Device/DescribeDevices
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 以分页的方式查询账户目录列表,私有化调用path为：/capi/Assets/DescribeAccountGroups
     */
    DescribeAccountGroups(req: DescribeAccountGroupsRequest, cb?: (error: string, rep: DescribeAccountGroupsResponse) => void): Promise<DescribeAccountGroupsResponse>;
    /**
     * 获取账号列表，支持分页，模糊搜索，私有化调用path为：/capi/Assets/Account/DescribeLocalAccounts
     */
    DescribeLocalAccounts(req: DescribeLocalAccountsRequest, cb?: (error: string, rep: DescribeLocalAccountsResponse) => void): Promise<DescribeLocalAccountsResponse>;
}
