import { Credential, DynamicCredential } from "./interface";
interface CvmRoleCredentialResult {
    TmpSecretId: string;
    TmpSecretKey: string;
    ExpiredTime: 1671330188;
    Expiration: string;
    Token: string;
    Code: string;
}
export default class CvmRoleCredential implements DynamicCredential {
    protected roleNameTask: Promise<string>;
    protected credentialTask: Promise<CvmRoleCredentialResult>;
    protected getRoleName(): Promise<string>;
    protected getRoleCredential(roleName: string): Promise<CvmRoleCredentialResult>;
    getCredential(): Promise<Credential>;
}
export {};
