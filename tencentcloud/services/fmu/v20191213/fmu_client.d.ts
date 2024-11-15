import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteModelRequest, BeautifyVideoRequest, CancelBeautifyVideoJobResponse, StyleImageProResponse, StyleImageRequest, CreateModelResponse, GetModelListResponse, BeautifyPicResponse, GetModelListRequest, BeautifyVideoResponse, TryLipstickPicResponse, DeleteModelResponse, CancelBeautifyVideoJobRequest, TryLipstickPicRequest, StyleImageProRequest, QueryBeautifyVideoJobResponse, StyleImageResponse, CreateModelRequest, BeautifyPicRequest, QueryBeautifyVideoJobRequest } from "./fmu_models";
/**
 * fmu client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 在使用LUT素材的modelid实现试唇色前，您需要先上传 LUT 格式的cube文件注册唇色ID。查看 [LUT文件的使用说明](https://cloud.tencent.com/document/product/1172/41701)。

注：您也可以直接使用 [试唇色接口](https://cloud.tencent.com/document/product/1172/40706)，通过输入RGBA模型数值的方式指定唇色，更简单易用。
     */
    CreateModel(req: CreateModelRequest, cb?: (error: string, rep: CreateModelResponse) => void): Promise<CreateModelResponse>;
    /**
     * 上传一张照片，输出滤镜处理后的图片。
     */
    StyleImage(req: StyleImageRequest, cb?: (error: string, rep: StyleImageResponse) => void): Promise<StyleImageResponse>;
    /**
     * 上传一张照片，输出滤镜处理后的图片。
     */
    StyleImagePro(req: StyleImageProRequest, cb?: (error: string, rep: StyleImageProResponse) => void): Promise<StyleImageProResponse>;
    /**
     * 产品不再维护，准备下线。

撤销视频美颜任务请求
     */
    CancelBeautifyVideoJob(req: CancelBeautifyVideoJobRequest, cb?: (error: string, rep: CancelBeautifyVideoJobResponse) => void): Promise<CancelBeautifyVideoJobResponse>;
    /**
     * 产品不再维护，准备下线。

查询视频美颜处理进度
     */
    QueryBeautifyVideoJob(req: QueryBeautifyVideoJobRequest, cb?: (error: string, rep: QueryBeautifyVideoJobResponse) => void): Promise<QueryBeautifyVideoJobResponse>;
    /**
     * 删除已注册的唇色素材。
     */
    DeleteModel(req: DeleteModelRequest, cb?: (error: string, rep: DeleteModelResponse) => void): Promise<DeleteModelResponse>;
    /**
     * 用户上传一张人脸图片（最多能处理一张图片中最大的五张人脸信息），精准定位五官，实现美肤、亮肤、祛痘等美颜功能。
     */
    BeautifyPic(req: BeautifyPicRequest, cb?: (error: string, rep: BeautifyPicResponse) => void): Promise<BeautifyPicResponse>;
    /**
     * 对图片中的人脸嘴唇进行着色，最多支持同时对一张图中的3张人脸进行试唇色。

您可以通过事先注册在腾讯云的唇色素材（LUT文件）改变图片中的人脸唇色，也可以输入RGBA模型数值。

为了更好的效果，建议您使用事先注册在腾讯云的唇色素材（LUT文件）。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    TryLipstickPic(req: TryLipstickPicRequest, cb?: (error: string, rep: TryLipstickPicResponse) => void): Promise<TryLipstickPicResponse>;
    /**
     * 查询已注册的唇色素材。
     */
    GetModelList(req: GetModelListRequest, cb?: (error: string, rep: GetModelListResponse) => void): Promise<GetModelListResponse>;
    /**
     * 产品不再维护，准备下线。

视频美颜(此接口目前已下线)
     */
    BeautifyVideo(req: BeautifyVideoRequest, cb?: (error: string, rep: BeautifyVideoResponse) => void): Promise<BeautifyVideoResponse>;
}
