import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CopyCryptoColumnPolicyRequest, CopyCryptoColumnPolicyResponse } from "./casb_models";
/**
 * casb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 同region下 根据用户输入的CasbId,MetaDataId 复制策略到DstCasbId,MetaDataId中。
场景1：
相同CasbId，不同MetadataId 下策略复制
场景2：
不同Casbid,不同MetaDataId 下策略复制
场景3:
相同CasbId,相同MetaDataId 且 DatabaseName不同 策略复制

     */
    CopyCryptoColumnPolicy(req: CopyCryptoColumnPolicyRequest, cb?: (error: string, rep: CopyCryptoColumnPolicyResponse) => void): Promise<CopyCryptoColumnPolicyResponse>;
}
