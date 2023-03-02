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
const LastMenstrualPeriodBlock = models.LastMenstrualPeriodBlock;
const Vaccination = models.Vaccination;
const TimelineEvent = models.TimelineEvent;
const IHCBlock = models.IHCBlock;
const BodyTemperatureBlock = models.BodyTemperatureBlock;
const PathologicalDiagnosisDetailBlock = models.PathologicalDiagnosisDetailBlock;
const ImageToObjectRequest = models.ImageToObjectRequest;
const Molecular = models.Molecular;
const TuberInfo = models.TuberInfo;
const SurgeryListBlock = models.SurgeryListBlock;
const Multiple = models.Multiple;
const Hospitalization = models.Hospitalization;
const BodyExaminationBlock = models.BodyExaminationBlock;
const Advice = models.Advice;
const Report = models.Report;
const BirthPlaceBlock = models.BirthPlaceBlock;
const PTNM = models.PTNM;
const TableIndicators = models.TableIndicators;
const HistologyClass = models.HistologyClass;
const BlockInfoV2 = models.BlockInfoV2;
const NormPart = models.NormPart;
const Lymph = models.Lymph;
const BaseItem = models.BaseItem;
const Fp2NdItem = models.Fp2NdItem;
const Organ = models.Organ;
const DiseasePresentBlock = models.DiseasePresentBlock;
const MenstrualPeriodBlock = models.MenstrualPeriodBlock;
const VaccineCertificate = models.VaccineCertificate;
const Value = models.Value;
const MainDiseaseHistoryBlock = models.MainDiseaseHistoryBlock;
const DiseaseMedicalHistory = models.DiseaseMedicalHistory;
const GeneticHistoryBlock = models.GeneticHistoryBlock;
const MenstrualHistoryDetailBlock = models.MenstrualHistoryDetailBlock;
const CovidItemsInfo = models.CovidItemsInfo;
const BloodPressureBlock = models.BloodPressureBlock;
const HistologyLevel = models.HistologyLevel;
const EcgDescription = models.EcgDescription;
const MedicalRecordInfo = models.MedicalRecordInfo;
const EyeItemsInfo = models.EyeItemsInfo;
const IndicatorItemV2 = models.IndicatorItemV2;
const NormSize = models.NormSize;
const FirstPage = models.FirstPage;
const TextToObjectResponse = models.TextToObjectResponse;
const SurgeryConditionBlock = models.SurgeryConditionBlock;
const FieldInfo = models.FieldInfo;
const DetailInformation = models.DetailInformation;
const MaternitySummary = models.MaternitySummary;
const DischargeDiagnosis = models.DischargeDiagnosis;
const TransfusionHistoryBlock = models.TransfusionHistoryBlock;
const MolecularValue = models.MolecularValue;
const ChiefComplaintDetailBlock = models.ChiefComplaintDetailBlock;
const ReportInfo = models.ReportInfo;
const Endoscopy = models.Endoscopy;
const RelativeHistoryBlock = models.RelativeHistoryBlock;
const Exame = models.Exame;
const PathologyV2 = models.PathologyV2;
const TextToObjectRequest = models.TextToObjectRequest;
const AspectRatio = models.AspectRatio;
const NeonatalInfo = models.NeonatalInfo;
const EyeItem = models.EyeItem;
const FamilyMedicalHistory = models.FamilyMedicalHistory;
const Part = models.Part;
const ImageToClassResponse = models.ImageToClassResponse;
const Invas = models.Invas;
const Template = models.Template;
const MaternityDesc = models.MaternityDesc;
const EndoscopyOrgan = models.EndoscopyOrgan;
const ClinicalStaging = models.ClinicalStaging;
const PersonalMedicalHistory = models.PersonalMedicalHistory;
const DiagCert = models.DiagCert;
const PTNMBlock = models.PTNMBlock;
const SmokeHistoryBlock = models.SmokeHistoryBlock;
const AdmissionConditionBlock = models.AdmissionConditionBlock;
const TextToClassResponse = models.TextToClassResponse;
const TreatmentRecordBlock = models.TreatmentRecordBlock;
const HistologyType = models.HistologyType;
const BlockInfo = models.BlockInfo;
const Surgery = models.Surgery;
const TextType = models.TextType;
const EcgItem = models.EcgItem;
const Fetus = models.Fetus;
const ImageInfo = models.ImageInfo;
const Point = models.Point;
const MenstrualMedicalHistory = models.MenstrualMedicalHistory;
const Check = models.Check;
const EcgDiagnosis = models.EcgDiagnosis;
const ImmunohistochemistryBlock = models.ImmunohistochemistryBlock;
const SummaryInfo = models.SummaryInfo;
const DescInfo = models.DescInfo;
const ImageToObjectResponse = models.ImageToObjectResponse;
const FamilyHistoryBlock = models.FamilyHistoryBlock;
const AdmissionDiagnosisBlock = models.AdmissionDiagnosisBlock;
const Elastic = models.Elastic;
const IHCInfo = models.IHCInfo;
const HandleParam = models.HandleParam;
const NeglistBlock = models.NeglistBlock;
const Medicine = models.Medicine;
const ReportTypeVersion = models.ReportTypeVersion;
const Rectangle = models.Rectangle;
const IHCV2 = models.IHCV2;
const ObstericalMedicalHistory = models.ObstericalMedicalHistory;
const BaseItem3 = models.BaseItem3;
const BaseItem2 = models.BaseItem2;
const RelativeCancerHistoryBlock = models.RelativeCancerHistoryBlock;
const ParagraphBlock = models.ParagraphBlock;
const RelativeHistoryDetailBlock = models.RelativeHistoryDetailBlock;
const PoslistBlock = models.PoslistBlock;
const Prescription = models.Prescription;
const Coord = models.Coord;
const Summary = models.Summary;
const ResultInfo = models.ResultInfo;
const PathologyReport = models.PathologyReport;
const MenstrualHistoryBlock = models.MenstrualHistoryBlock;
const Time = models.Time;
const Coordinate = models.Coordinate;
const DosageBlock = models.DosageBlock;
const BiopsyPart = models.BiopsyPart;
const InvasiveV2 = models.InvasiveV2;
const ImageToClassRequest = models.ImageToClassRequest;
const BaseInfo = models.BaseInfo;
const TextToClassRequest = models.TextToClassRequest;
const ObstetricalHistoryBlock = models.ObstetricalHistoryBlock;
const Size = models.Size;
const DischargeConditionBlock = models.DischargeConditionBlock;
const LymphTotal = models.LymphTotal;
const OtherInfo = models.OtherInfo;
const MenstrualFlowBlock = models.MenstrualFlowBlock;
const TimelineInformation = models.TimelineInformation;
const SurgeryHistory = models.SurgeryHistory;
const SymptomInfo = models.SymptomInfo;
const LymphNode = models.LymphNode;
const BirthCert = models.BirthCert;
const PathologicalDiagnosisBlock = models.PathologicalDiagnosisBlock;
const ChiefComplaintBlock = models.ChiefComplaintBlock;
const CovidItem = models.CovidItem;
const ValueBlock = models.ValueBlock;
const ParentInfo = models.ParentInfo;
const DischargeInfoBlock = models.DischargeInfoBlock;
const DeathDateBlock = models.DeathDateBlock;
const IssueInfo = models.IssueInfo;
const MedDoc = models.MedDoc;
const Desc = models.Desc;
const PatientInfo = models.PatientInfo;
const HistologyTypeV2 = models.HistologyTypeV2;
const PartDesc = models.PartDesc;
const DischargeDiagnosisBlock = models.DischargeDiagnosisBlock;
const FertilityHistoryBlock = models.FertilityHistoryBlock;
const DiseaseHistoryBlock = models.DiseaseHistoryBlock;
const NumValue = models.NumValue;
const EyeChildItem = models.EyeChildItem;
const SurgeryAttr = models.SurgeryAttr;
const IndicatorV3 = models.IndicatorV3;
const DrugListBlock = models.DrugListBlock;
const EndoscopyDesc = models.EndoscopyDesc;
const IndicatorItem = models.IndicatorItem;
const DiagCertItem = models.DiagCertItem;
const DrugHistoryBlock = models.DrugHistoryBlock;
const SurgeryHistoryBlock = models.SurgeryHistoryBlock;
const PersonalHistoryBlock = models.PersonalHistoryBlock;
const RelapseDateBlock = models.RelapseDateBlock;
const Maternity = models.Maternity;
const MenstruationOrNotBlock = models.MenstruationOrNotBlock;
const Electrocardiogram = models.Electrocardiogram;
const TreatmentRecord = models.TreatmentRecord;


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
     * 文本转结构化对象。

适用场景：经过腾讯医疗专用 OCR 从图片识别之后的文本，可以调用此接口。通过其它 OCR 识别的文本可能不适配。医院的 XML 格式文本也不适配，XML 文件需要经过特殊转换才能直接调用此接口。单次调用传入的文本不宜超过 2000 字。
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
