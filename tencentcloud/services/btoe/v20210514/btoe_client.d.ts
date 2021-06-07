import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetDepositFileResponse, CreateImageDepositRequest, CreateVideoDepositRequest, CreateDocDepositRequest, CreateHashDepositNoSealRequest, CreateHashDepositRequest, VerifyEvidenceHashResponse, CreateDataDepositResponse, GetDepositCertRequest, CreateAudioDepositRequest, GetDepositFileRequest, VerifyEvidenceBlockChainTxHashRequest, VerifyEvidenceHashRequest, CreateHashDepositNoCertResponse, VerifyEvidenceBlockChainTxHashResponse, CreateAudioDepositResponse, GetDepositInfoResponse, CreateHashDepositNoCertRequest, CreateHashDepositNoSealResponse, CreateDocDepositResponse, GetDepositInfoRequest, CreateVideoDepositResponse, CreateDataDepositRequest, GetDepositCertResponse, CreateImageDepositResponse, CreateHashDepositResponse } from "./btoe_models";
/**
 * btoe client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用户通过存证编码向BTOE查询存证电子凭证信息。
     */
    GetDepositCert(req: GetDepositCertRequest, cb?: (error: string, rep: GetDepositCertResponse) => void): Promise<GetDepositCertResponse>;
    /**
     * 用户通过本接口向BTOE写入待存证的原文数据Hash值，BTOE对业务数据Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。
     */
    CreateHashDeposit(req: CreateHashDepositRequest, cb?: (error: string, rep: CreateHashDepositResponse) => void): Promise<CreateHashDepositResponse>;
    /**
     * 用户通过存证编码向BTOE获取存证文件的下载URL。
-注：Hash类存证、业务数据明文存证不产生存证文件。
     */
    GetDepositFile(req: GetDepositFileRequest, cb?: (error: string, rep: GetDepositFileResponse) => void): Promise<GetDepositFileResponse>;
    /**
     * 用户通过本接口向BTOE写入待存证的视频的原文件或下载URL，BTOE对视频原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。视频文件支持格式：mp4、avi、mkv、mov、flv,wmv,rmvb,3gp；文件大小限制：直接上传原文件不大于5MB，下载URL文件大小不大于200 MB。
     */
    CreateVideoDeposit(req: CreateVideoDepositRequest, cb?: (error: string, rep: CreateVideoDepositResponse) => void): Promise<CreateVideoDepositResponse>;
    /**
     * 用户通过本接口向BTOE写入待存证的文档原文件或下载URL，BTOE对文档原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。文档类型支持格式：doc、docx、xls、xlsx、ppt、pptx、 pdf、html、txt、md、csv；原文件上传大小不超过5 MB，下载URL文件大小不超过10 MB。
     */
    CreateDocDeposit(req: CreateDocDepositRequest, cb?: (error: string, rep: CreateDocDepositResponse) => void): Promise<CreateDocDepositResponse>;
    /**
     * 用户通过本接口向BTOE写入待存证的原文数据Hash值，BTOE对业务数据Hash值存证上链，本接口不生成区块链存证电子凭证。
     */
    CreateHashDepositNoCert(req: CreateHashDepositNoCertRequest, cb?: (error: string, rep: CreateHashDepositNoCertResponse) => void): Promise<CreateHashDepositNoCertResponse>;
    /**
     * 用户通过本接口向BTOE写入待存证的图片原文件或下载URL，BTOE对图片原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。图片类型支持格式：png、jpg、jpeg、bmp、gif、svg；原文件上传大小不超过5 MB，下载URL文件大小不超过10 MB。
     */
    CreateImageDeposit(req: CreateImageDepositRequest, cb?: (error: string, rep: CreateImageDepositResponse) => void): Promise<CreateImageDepositResponse>;
    /**
     * 用户通过本接口向BTOE写入待存证的音频原文件或下载URL，BTOE对音频原文件存储后，将其Hash值存证上链，并生成含有电子签章的区块链存证电子凭证。音频类型支持格式：mp3、wav、wma、midi、flac；原文件上传大小不超过5 MB，下载URL文件大小不超过25 MB。
     */
    CreateAudioDeposit(req: CreateAudioDepositRequest, cb?: (error: string, rep: CreateAudioDepositResponse) => void): Promise<CreateAudioDepositResponse>;
    /**
     * 用户通过本接口向BTOE写入待存证的原文数据Hash值，BTOE对业务数据Hash值存证上链，并生成无电子签章的区块链存证电子凭证。
     */
    CreateHashDepositNoSeal(req: CreateHashDepositNoSealRequest, cb?: (error: string, rep: CreateHashDepositNoSealResponse) => void): Promise<CreateHashDepositNoSealResponse>;
    /**
     * 用户向BTOE核验存证结果中的区块链交易hash的真实性
     */
    VerifyEvidenceBlockChainTxHash(req: VerifyEvidenceBlockChainTxHashRequest, cb?: (error: string, rep: VerifyEvidenceBlockChainTxHashResponse) => void): Promise<VerifyEvidenceBlockChainTxHashResponse>;
    /**
     * 用户存证内容hash向BTOE核验存证记录的真实性。
     */
    VerifyEvidenceHash(req: VerifyEvidenceHashRequest, cb?: (error: string, rep: VerifyEvidenceHashResponse) => void): Promise<VerifyEvidenceHashResponse>;
    /**
     * 用户通过存证编码向BTOE查询存证基本信息。
     */
    GetDepositInfo(req: GetDepositInfoRequest, cb?: (error: string, rep: GetDepositInfoResponse) => void): Promise<GetDepositInfoResponse>;
    /**
     * 用户通过本接口向BTOE写入待存证的业务数据明文，业务数据明文存证写入后不可修改，BTOE对业务数据明文存证生成含有电子签章的区块链存证电子凭证。
     */
    CreateDataDeposit(req: CreateDataDepositRequest, cb?: (error: string, rep: CreateDataDepositResponse) => void): Promise<CreateDataDepositResponse>;
}
