import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateDeviceVirtualGroupResponse, DescribeRootAccountGroupResponse, DescribeDevicesResponse, DescribeLocalAccountsResponse, DescribeRootAccountGroupRequest, DescribeAccountGroupsRequest, DescribeAccountGroupsResponse, CreateDeviceVirtualGroupRequest, DescribeDevicesRequest, DescribeLocalAccountsRequest } from "./ioa_models";
/**
 * ioa client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询账号根分组详情。对应“用户与授权管理”里内置不可见的全网根账号组，所有新建的目录，都挂在该全网根账号组下。
     */
    DescribeRootAccountGroup(req?: DescribeRootAccountGroupRequest, cb?: (error: string, rep: DescribeRootAccountGroupResponse) => void): Promise<DescribeRootAccountGroupResponse>;
    /**
     * 查询满足条件的终端数据详情，私有化调用path为：/capi/Assets/Device/DescribeDevices
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 创建终端自定义分组，私有化调用path为：/capi/Assets/Device/CreateDeviceVirtualGroup
     */
    CreateDeviceVirtualGroup(req: CreateDeviceVirtualGroupRequest, cb?: (error: string, rep: CreateDeviceVirtualGroupResponse) => void): Promise<CreateDeviceVirtualGroupResponse>;
    /**
     * 以分页的方式查询账号分组列表，私有化调用path为：/capi/Assets/DescribeAccountGroups
     */
    DescribeAccountGroups(req: DescribeAccountGroupsRequest, cb?: (error: string, rep: DescribeAccountGroupsResponse) => void): Promise<DescribeAccountGroupsResponse>;
    /**
     * 获取账号列表，支持分页，模糊搜索，私有化调用path为：/capi/Assets/Account/DescribeLocalAccounts
     */
    DescribeLocalAccounts(req: DescribeLocalAccountsRequest, cb?: (error: string, rep: DescribeLocalAccountsResponse) => void): Promise<DescribeLocalAccountsResponse>;
}
