import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribePSTNActiveSessionListRequest, CreateSDKLoginTokenResponse, DescribeStaffInfoListResponse, CreateStaffResponse, DescribeTelCdrResponse, DescribeIMCdrsResponse, DescribeIMCdrsRequest, DescribeSkillGroupInfoListRequest, DescribeTelCallInfoRequest, DescribeChatMessagesResponse, DescribePSTNActiveSessionListResponse, DescribeChatMessagesRequest, DescribeStaffInfoListRequest, DescribeSeatUserListResponse, DescribeSeatUserListRequest, DescribeTelCallInfoResponse, CreateStaffRequest, DescribeTelCdrRequest, CreateSDKLoginTokenRequest, DescribeSkillGroupInfoListResponse } from "./ccc_models";
/**
 * ccc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 包括具体聊天内容
     */
    DescribeChatMessages(req: DescribeChatMessagesRequest, cb?: (error: string, rep: DescribeChatMessagesResponse) => void): Promise<DescribeChatMessagesResponse>;
    /**
     * 包括全媒体和文本两种类型
     */
    DescribeIMCdrs(req: DescribeIMCdrsRequest, cb?: (error: string, rep: DescribeIMCdrsResponse) => void): Promise<DescribeIMCdrsResponse>;
    /**
     * 获取技能组信息列表
     */
    DescribeSkillGroupInfoList(req: DescribeSkillGroupInfoListRequest, cb?: (error: string, rep: DescribeSkillGroupInfoListResponse) => void): Promise<DescribeSkillGroupInfoListResponse>;
    /**
     * 获取坐席信息列表
     */
    DescribeStaffInfoList(req: DescribeStaffInfoListRequest, cb?: (error: string, rep: DescribeStaffInfoListResponse) => void): Promise<DescribeStaffInfoListResponse>;
    /**
     * 按实例获取电话消耗统计
     */
    DescribeTelCallInfo(req: DescribeTelCallInfoRequest, cb?: (error: string, rep: DescribeTelCallInfoResponse) => void): Promise<DescribeTelCallInfoResponse>;
    /**
     * 创建 SDK 登录 Token。
     */
    CreateSDKLoginToken(req: CreateSDKLoginTokenRequest, cb?: (error: string, rep: CreateSDKLoginTokenResponse) => void): Promise<CreateSDKLoginTokenResponse>;
    /**
     * 获取坐席用户列表
     */
    DescribeSeatUserList(req: DescribeSeatUserListRequest, cb?: (error: string, rep: DescribeSeatUserListResponse) => void): Promise<DescribeSeatUserListResponse>;
    /**
     * 获取 PSTN 活动会话列表。
     */
    DescribePSTNActiveSessionList(req: DescribePSTNActiveSessionListRequest, cb?: (error: string, rep: DescribePSTNActiveSessionListResponse) => void): Promise<DescribePSTNActiveSessionListResponse>;
    /**
     * 创建客服账号。
     */
    CreateStaff(req: CreateStaffRequest, cb?: (error: string, rep: CreateStaffResponse) => void): Promise<CreateStaffResponse>;
    /**
     * 获取电话服务记录与录音
     */
    DescribeTelCdr(req: DescribeTelCdrRequest, cb?: (error: string, rep: DescribeTelCdrResponse) => void): Promise<DescribeTelCdrResponse>;
}
