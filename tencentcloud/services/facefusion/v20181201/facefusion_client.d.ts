import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { FaceFusionRequest, FaceFusionResponse, DescribeMaterialListResponse, FuseFaceResponse, FuseFaceRequest, DescribeMaterialListRequest } from "./facefusion_models";
/**
 * facefusion client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 通常通过腾讯云人脸融合的控制台可以查看到素材相关的参数数据，可以满足使用。本接口返回活动的素材数据，包括素材状态等。用于用户通过Api查看素材相关数据，方便使用。
     */
    DescribeMaterialList(req: DescribeMaterialListRequest, cb?: (error: string, rep: DescribeMaterialListResponse) => void): Promise<DescribeMaterialListResponse>;
    /**
     * 本接口用于人脸融合，用户上传人脸图片，获取与模板融合后的人脸图片。未发布的活动请求频率限制为1次/秒，已发布的活动请求频率限制50次/秒。如有需要提高活动的请求频率限制，请在控制台中申请。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    FaceFusion(req: FaceFusionRequest, cb?: (error: string, rep: FaceFusionResponse) => void): Promise<FaceFusionResponse>;
    /**
     * 本接口用于单脸、多脸融合，用户上传人脸图片，获取与模板融合后的人脸图片。查看 <a href="https://cloud.tencent.com/document/product/670/38247" target="_blank">选脸融合接入指引</a>。

未发布的活动请求频率限制为1次/秒，已发布的活动请求频率限制50次/秒。如有需要提高活动的请求频率限制，请在控制台中申请。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    FuseFace(req: FuseFaceRequest, cb?: (error: string, rep: FuseFaceResponse) => void): Promise<FuseFaceResponse>;
}
