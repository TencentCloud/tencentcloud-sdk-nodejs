import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { EnhanceTaDegreeRequest, SendTrafficSecuritySmsMessageRequest, DetectFraudKOLResponse, RecognizeCustomizedAudienceResponse, EnhanceTaDegreeResponse, SendTrafficSecuritySmsMessageResponse, DetectFraudKOLRequest, RecognizeCustomizedAudienceRequest, RecognizeTargetAudienceResponse, RecognizePreciseTargetAudienceRequest, RecognizeTargetAudienceRequest, RecognizePreciseTargetAudienceResponse } from "./taf_models";
/**
 * taf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 流量反欺诈-虚假TA识别
     */
    EnhanceTaDegree(req: EnhanceTaDegreeRequest, cb?: (error: string, rep: EnhanceTaDegreeResponse) => void): Promise<EnhanceTaDegreeResponse>;
    /**
     * 流量反欺诈-流量验准
     */
    RecognizeTargetAudience(req: RecognizeTargetAudienceRequest, cb?: (error: string, rep: RecognizeTargetAudienceResponse) => void): Promise<RecognizeTargetAudienceResponse>;
    /**
     * 流量反欺诈-流量验准定制版
     */
    RecognizeCustomizedAudience(req: RecognizeCustomizedAudienceRequest, cb?: (error: string, rep: RecognizeCustomizedAudienceResponse) => void): Promise<RecognizeCustomizedAudienceResponse>;
    /**
     * DetectFraudKOL
     */
    DetectFraudKOL(req: DetectFraudKOLRequest, cb?: (error: string, rep: DetectFraudKOLResponse) => void): Promise<DetectFraudKOLResponse>;
    /**
     * 流量反欺诈-流量验准高级版
     */
    RecognizePreciseTargetAudience(req: RecognizePreciseTargetAudienceRequest, cb?: (error: string, rep: RecognizePreciseTargetAudienceResponse) => void): Promise<RecognizePreciseTargetAudienceResponse>;
    /**
     * SendTrafficSecuritySmsMessage
     */
    SendTrafficSecuritySmsMessage(req: SendTrafficSecuritySmsMessageRequest, cb?: (error: string, rep: SendTrafficSecuritySmsMessageResponse) => void): Promise<SendTrafficSecuritySmsMessageResponse>;
}
