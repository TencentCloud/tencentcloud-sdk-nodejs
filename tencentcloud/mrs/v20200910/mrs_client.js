/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const Indicator = models.Indicator;
const Template = models.Template;
const Elastic = models.Elastic;
const Vaccination = models.Vaccination;
const ReportInfo = models.ReportInfo;
const Endoscopy = models.Endoscopy;
const IHCInfo = models.IHCInfo;
const SurgeryHistory = models.SurgeryHistory;
const Medicine = models.Medicine;
const HandleParam = models.HandleParam;
const ImageToObjectRequest = models.ImageToObjectRequest;
const TextToObjectRequest = models.TextToObjectRequest;
const AspectRatio = models.AspectRatio;
const SymptomInfo = models.SymptomInfo;
const TuberInfo = models.TuberInfo;
const ObstericalMedicalHistory = models.ObstericalMedicalHistory;
const Multiple = models.Multiple;
const Hospitalization = models.Hospitalization;
const FamilyMedicalHistory = models.FamilyMedicalHistory;
const Advice = models.Advice;
const TextToObjectResponse = models.TextToObjectResponse;
const MedicalRecordInfo = models.MedicalRecordInfo;
const Part = models.Part;
const ImageToClassResponse = models.ImageToClassResponse;
const Lymph = models.Lymph;
const Invas = models.Invas;
const EcgItem = models.EcgItem;
const NormPart = models.NormPart;
const MedDoc = models.MedDoc;
const EndoscopyOrgan = models.EndoscopyOrgan;
const PatientInfo = models.PatientInfo;
const HistologyLevel = models.HistologyLevel;
const ImageToObjectResponse = models.ImageToObjectResponse;
const Prescription = models.Prescription;
const PersonalMedicalHistory = models.PersonalMedicalHistory;
const Organ = models.Organ;
const DiagCert = models.DiagCert;
const TreatmentRecord = models.TreatmentRecord;
const VaccineCertificate = models.VaccineCertificate;
const Value = models.Value;
const Summary = models.Summary;
const DiseaseMedicalHistory = models.DiseaseMedicalHistory;
const PathologyReport = models.PathologyReport;
const TextToClassResponse = models.TextToClassResponse;
const HistologyType = models.HistologyType;
const BlockInfo = models.BlockInfo;
const SurgeryAttr = models.SurgeryAttr;
const TextType = models.TextType;
const EndoscopyDesc = models.EndoscopyDesc;
const EcgDescription = models.EcgDescription;
const IndicatorItem = models.IndicatorItem;
const ImageInfo = models.ImageInfo;
const DiagCertItem = models.DiagCertItem;
const BiopsyPart = models.BiopsyPart;
const MenstrualMedicalHistory = models.MenstrualMedicalHistory;
const ImageToClassRequest = models.ImageToClassRequest;
const NormSize = models.NormSize;
const FirstPage = models.FirstPage;
const Check = models.Check;
const EcgDiagnosis = models.EcgDiagnosis;
const TextToClassRequest = models.TextToClassRequest;
const Surgery = models.Surgery;
const Desc = models.Desc;
const DischargeDiagnosis = models.DischargeDiagnosis;
const Electrocardiogram = models.Electrocardiogram;
const Size = models.Size;


/**
 * mrs client
 * @class
 */
class MrsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mrs.tencentcloudapi.com", "2020-09-10", credential, region, profile);
    }
    
    /**
     * 图片分类
     * @param {ImageToClassRequest} req
     * @param {function(string, ImageToClassResponse):void} cb
     * @public
     */
    ImageToClass(req, cb) {
        let resp = new ImageToClassResponse();
        this.request("ImageToClass", req, resp, cb);
    }

    /**
     * 图片转结构化对象
     * @param {ImageToObjectRequest} req
     * @param {function(string, ImageToObjectResponse):void} cb
     * @public
     */
    ImageToObject(req, cb) {
        let resp = new ImageToObjectResponse();
        this.request("ImageToObject", req, resp, cb);
    }

    /**
     * 文本分类
     * @param {TextToClassRequest} req
     * @param {function(string, TextToClassResponse):void} cb
     * @public
     */
    TextToClass(req, cb) {
        let resp = new TextToClassResponse();
        this.request("TextToClass", req, resp, cb);
    }

    /**
     * 文本转结构化对象
     * @param {TextToObjectRequest} req
     * @param {function(string, TextToObjectResponse):void} cb
     * @public
     */
    TextToObject(req, cb) {
        let resp = new TextToObjectResponse();
        this.request("TextToObject", req, resp, cb);
    }


}
module.exports = MrsClient;
