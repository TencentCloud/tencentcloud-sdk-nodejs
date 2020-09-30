import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { MoveOrganizationMembersToNodeRequest, GetOrganizationRequest, ListOrganizationMembersRequest, DeleteOrganizationMemberFromNodeRequest, UpdateOrganizationNodeResponse, GetOrganizationMemberResponse, CreateOrganizationRequest, DeleteOrganizationRequest, QuitOrganizationResponse, UpdateOrganizationMemberResponse, DeleteOrganizationMembersRequest, CreateOrganizationResponse, DeleteOrganizationNodesRequest, AddOrganizationNodeResponse, ListOrganizationInvitationsResponse, AcceptOrganizationInvitationRequest, ListOrganizationNodeMembersResponse, GetOrganizationMemberRequest, DenyOrganizationInvitationResponse, SendOrganizationInvitationResponse, UpdateOrganizationMemberRequest, QuitOrganizationRequest, ListOrganizationInvitationsRequest, AddOrganizationNodeRequest, ListOrganizationNodeMembersRequest, UpdateOrganizationNodeRequest, CancelOrganizationInvitationRequest, DeleteOrganizationMemberFromNodeResponse, DenyOrganizationInvitationRequest, DeleteOrganizationNodesResponse, DeleteOrganizationResponse, CancelOrganizationInvitationResponse, AcceptOrganizationInvitationResponse, ListOrganizationNodesRequest, SendOrganizationInvitationRequest, DeleteOrganizationMembersResponse, GetOrganizationResponse, ListOrganizationMembersResponse, ListOrganizationNodesResponse, MoveOrganizationMembersToNodeResponse } from "./organization_models";
/**
 * organization client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 拒绝企业组织邀请
     */
    DenyOrganizationInvitation(req: DenyOrganizationInvitationRequest, cb?: (error: string, rep: DenyOrganizationInvitationResponse) => void): Promise<DenyOrganizationInvitationResponse>;
    /**
     * 获取邀请信息列表
     */
    ListOrganizationInvitations(req: ListOrganizationInvitationsRequest, cb?: (error: string, rep: ListOrganizationInvitationsResponse) => void): Promise<ListOrganizationInvitationsResponse>;
    /**
     * 更新企业组织单元
     */
    UpdateOrganizationNode(req: UpdateOrganizationNodeRequest, cb?: (error: string, rep: UpdateOrganizationNodeResponse) => void): Promise<UpdateOrganizationNodeResponse>;
    /**
     * 接受加入企业组织邀请
     */
    AcceptOrganizationInvitation(req: AcceptOrganizationInvitationRequest, cb?: (error: string, rep: AcceptOrganizationInvitationResponse) => void): Promise<AcceptOrganizationInvitationResponse>;
    /**
     * 获取企业组织成员
     */
    GetOrganizationMember(req: GetOrganizationMemberRequest, cb?: (error: string, rep: GetOrganizationMemberResponse) => void): Promise<GetOrganizationMemberResponse>;
    /**
     * 获取企业组织信息
     */
    GetOrganization(req?: GetOrganizationRequest, cb?: (error: string, rep: GetOrganizationResponse) => void): Promise<GetOrganizationResponse>;
    /**
     * 获取企业组织单元列表
     */
    ListOrganizationNodes(req?: ListOrganizationNodesRequest, cb?: (error: string, rep: ListOrganizationNodesResponse) => void): Promise<ListOrganizationNodesResponse>;
    /**
     * 更新企业成员信息
     */
    UpdateOrganizationMember(req: UpdateOrganizationMemberRequest, cb?: (error: string, rep: UpdateOrganizationMemberResponse) => void): Promise<UpdateOrganizationMemberResponse>;
    /**
     * 退出企业组织
     */
    QuitOrganization(req: QuitOrganizationRequest, cb?: (error: string, rep: QuitOrganizationResponse) => void): Promise<QuitOrganizationResponse>;
    /**
     * 批量删除企业组织单元
     */
    DeleteOrganizationNodes(req: DeleteOrganizationNodesRequest, cb?: (error: string, rep: DeleteOrganizationNodesResponse) => void): Promise<DeleteOrganizationNodesResponse>;
    /**
     * 获取企业组织成员列表
     */
    ListOrganizationMembers(req: ListOrganizationMembersRequest, cb?: (error: string, rep: ListOrganizationMembersResponse) => void): Promise<ListOrganizationMembersResponse>;
    /**
     * 删除企业组织成员
     */
    DeleteOrganizationMemberFromNode(req: DeleteOrganizationMemberFromNodeRequest, cb?: (error: string, rep: DeleteOrganizationMemberFromNodeResponse) => void): Promise<DeleteOrganizationMemberFromNodeResponse>;
    /**
     * 添加企业组织单元
     */
    AddOrganizationNode(req: AddOrganizationNodeRequest, cb?: (error: string, rep: AddOrganizationNodeResponse) => void): Promise<AddOrganizationNodeResponse>;
    /**
     * 发送企业组织邀请
     */
    SendOrganizationInvitation(req: SendOrganizationInvitationRequest, cb?: (error: string, rep: SendOrganizationInvitationResponse) => void): Promise<SendOrganizationInvitationResponse>;
    /**
     * 取消企业组织邀请
     */
    CancelOrganizationInvitation(req: CancelOrganizationInvitationRequest, cb?: (error: string, rep: CancelOrganizationInvitationResponse) => void): Promise<CancelOrganizationInvitationResponse>;
    /**
     * 删除企业组织
     */
    DeleteOrganization(req?: DeleteOrganizationRequest, cb?: (error: string, rep: DeleteOrganizationResponse) => void): Promise<DeleteOrganizationResponse>;
    /**
     * 批量删除企业组织成员
     */
    DeleteOrganizationMembers(req: DeleteOrganizationMembersRequest, cb?: (error: string, rep: DeleteOrganizationMembersResponse) => void): Promise<DeleteOrganizationMembersResponse>;
    /**
     * 获取企业组织单元成员列表
     */
    ListOrganizationNodeMembers(req: ListOrganizationNodeMembersRequest, cb?: (error: string, rep: ListOrganizationNodeMembersResponse) => void): Promise<ListOrganizationNodeMembersResponse>;
    /**
     * 创建企业组织
     */
    CreateOrganization(req: CreateOrganizationRequest, cb?: (error: string, rep: CreateOrganizationResponse) => void): Promise<CreateOrganizationResponse>;
    /**
     * 移动成员到指定企业组织单元
     */
    MoveOrganizationMembersToNode(req: MoveOrganizationMembersToNodeRequest, cb?: (error: string, rep: MoveOrganizationMembersToNodeResponse) => void): Promise<MoveOrganizationMembersToNodeResponse>;
}
