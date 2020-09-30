import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { EvaluationRequest, EvaluationResponse } from "./hcm_models";
/**
 * hcm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 速算题目批改接口，根据用户上传的图片或图片的URL识别图片中的数学算式，进而给出算式的正确性评估。
     */
    Evaluation(req: EvaluationRequest, cb?: (error: string, rep: EvaluationResponse) => void): Promise<EvaluationResponse>;
}
