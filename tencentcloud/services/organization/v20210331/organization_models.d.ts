/**
 * BindOrganizationMemberAuthAccount请求参数结构体
 */
export interface BindOrganizationMemberAuthAccountRequest {
    /**
      * 成员Uin。
      */
    MemberUin: number;
    /**
      * 策略ID。
      */
    PolicyId: number;
    /**
      * 组织子账号Uin。
      */
    OrgSubAccountUins: Array<number>;
}
/**
 * BindOrganizationMemberAuthAccount返回参数结构体
 */
export interface BindOrganizationMemberAuthAccountResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateOrganizationMember返回参数结构体
 */
export interface CreateOrganizationMemberResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateOrganizationMember请求参数结构体
 */
export interface CreateOrganizationMemberRequest {
    /**
      * 名称
      */
    Name: string;
    /**
      * 关系策略
      */
    PolicyType: string;
    /**
      * 关系权限
      */
    PermissionIds: Array<number>;
    /**
      * 需要调节的节点
      */
    NodeId: number;
    /**
      * 账号名
      */
    AccountName: string;
    /**
      * 备注
      */
    Remark?: string;
    /**
      * 重试创建传记录ID
      */
    RecordId?: number;
}
