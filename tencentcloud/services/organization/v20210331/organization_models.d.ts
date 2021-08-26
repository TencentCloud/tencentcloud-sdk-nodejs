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
