import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, Download } from "lucide-react";
import { useRef } from "react";

interface ReportPreviewProps {
  formData: any;
}

export const ReportPreview = ({ formData }: ReportPreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const getVesselText = (field: string, customField?: string) => {
    if (formData[field] === "Custom" && formData[customField]) {
      return formData[customField];
    }
    return formData[field] || "Not documented";
  };

  const getReportTitle = () => {
    switch (formData.angiogramType) {
      case "CAG": return "Coronary Angiography Report";
      case "PAG": return "Peripheral Angiography Report";
      case "RAG": return "Renal Angiography Report";
      case "CAROTID": return "Carotid Angiography Report";
      case "AORTAGRAM": return "Aortagram Report";
      default: return "Angiography Report";
    }
  };

  const renderFindings = () => {
    switch (formData.angiogramType) {
      case "CAG":
        return (
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2">
              Coronary Anatomy / Findings
            </h3>
            <div className="space-y-4 text-sm">
              <div><strong>Origin:</strong> {formData.origin || "N/A"}</div>
              <div><strong>Dominance:</strong> {formData.dominance || "N/A"}</div>
              <div className="pt-2">
                <strong className="text-primary">Left Main:</strong> {getVesselText("leftMain", "leftMainCustom")}
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-primary">LAD</div>
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>Lesion 1:</strong> {getVesselText("ladLesion1", "ladLesion1Custom") || "N/A"}</div>
                  <div><strong>Lesion 2:</strong> {getVesselText("ladLesion2", "ladLesion2Custom") || "N/A"}</div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <strong>Diagonal:</strong> {getVesselText("diagonal", "diagonalCustom")}
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-primary">LCx</div>
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>Lesion 1:</strong> {getVesselText("lcxLesion1", "lcxLesion1Custom") || "N/A"}</div>
                  <div><strong>Lesion 2:</strong> {getVesselText("lcxLesion2", "lcxLesion2Custom") || "N/A"}</div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <strong>OM1 / OM2:</strong> {getVesselText("om1", "om1Custom")} / {getVesselText("om2", "om2Custom")}
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-primary">RCA</div>
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>Lesion 1:</strong> {getVesselText("rcaLesion1", "rcaLesion1Custom") || "N/A"}</div>
                  <div><strong>Lesion 2:</strong> {getVesselText("rcaLesion2", "rcaLesion2Custom") || "N/A"}</div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <strong>PDA / PLV:</strong> {getVesselText("pda", "pdaCustom")} / {getVesselText("plv", "plvCustom")}
                </div>
              </div>
            </div>
          </div>
        );
      case "PAG":
        return (
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2">
              Peripheral Anatomy / Findings
            </h3>
            <div className="space-y-2 text-sm">
              <div><strong>Origin:</strong> {formData.origin || "N/A"}</div>
              <div><strong>Laterality:</strong> {formData.laterality || "N/A"}</div>
              <div className="pt-2">
                <strong className="text-primary">Abdominal Aorta:</strong> {getVesselText("aorta", "aortaCustom")}
              </div>
              <div>
                <strong className="text-primary">Common Iliac:</strong> {getVesselText("iliac", "iliacCustom")}
              </div>
              <div>
                <strong className="text-primary">Femoral:</strong> {getVesselText("femoral", "femoralCustom")}
              </div>
              <div>
                <strong className="text-primary">Popliteal:</strong> {getVesselText("popliteal", "poplitealCustom")}
              </div>
            </div>
          </div>
        );
      case "RAG":
        return (
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2">
              Renal Anatomy / Findings
            </h3>
            <div className="space-y-2 text-sm">
              <div><strong>Origin:</strong> {formData.origin || "N/A"}</div>
              <div><strong>Laterality:</strong> {formData.laterality || "N/A"}</div>
              <div className="pt-2">
                <strong className="text-primary">Renal Artery:</strong> {getVesselText("renalArtery", "renalArteryCustom")}
              </div>
              <div>
                <strong className="text-primary">Renal Branches:</strong> {getVesselText("renalBranches", "renalBranchesCustom")}
              </div>
            </div>
          </div>
        );
      case "CAROTID":
        return (
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2">
              Carotid Anatomy / Findings
            </h3>
            <div className="space-y-2 text-sm">
              <div><strong>Origin:</strong> {formData.origin || "N/A"}</div>
              <div><strong>Laterality:</strong> {formData.laterality || "N/A"}</div>
              <div className="pt-2">
                <strong className="text-primary">Common Carotid:</strong> {getVesselText("commonCarotid", "commonCarotidCustom")}
              </div>
              <div>
                <strong className="text-primary">Internal Carotid:</strong> {getVesselText("internalCarotid", "internalCarotidCustom")}
              </div>
              <div>
                <strong className="text-primary">External Carotid:</strong> {getVesselText("externalCarotid", "externalCarotidCustom")}
              </div>
            </div>
          </div>
        );
      case "AORTAGRAM":
        return (
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2">
              Aorta Anatomy / Findings
            </h3>
            <div className="space-y-2 text-sm">
              <div><strong>Origin:</strong> {formData.origin || "N/A"}</div>
              <div><strong>Aorta Type:</strong> {formData.aortaType || "N/A"}</div>
              <div className="pt-2">
                <strong className="text-primary">Thoracic Aorta:</strong> {getVesselText("thoracicAorta", "thoracicAortaCustom")}
              </div>
              <div>
                <strong className="text-primary">Abdominal Aorta:</strong> {getVesselText("abdominalAorta", "abdominalAortaCustom")}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 print:hidden">
        <Button onClick={handlePrint} className="gap-2">
          <Printer className="h-4 w-4" />
          Print Report
        </Button>
      </div>

      <Card className="border-primary/20 shadow-lg" ref={previewRef}>
        <CardContent className="p-8 space-y-6">
          {/* Header */}
          <div className="text-center border-b-2 border-primary pb-4">
            <h1 className="text-2xl font-bold text-primary">CKS Hospital, Jaipur</h1>
            <p className="text-sm text-muted-foreground">Department of Cardiology</p>
            <h2 className="text-lg font-semibold mt-2 uppercase tracking-wide">
              {getReportTitle()}
            </h2>
          </div>

          {/* Patient Information */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2">
              Patient Information
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div><strong>Name:</strong> {formData.patientName || "N/A"}</div>
              <div><strong>Age/Gender:</strong> {formData.age || "N/A"} / {formData.gender || "N/A"}</div>
              <div><strong>UHID:</strong> {formData.uhid || "N/A"}</div>
              <div><strong>Date:</strong> {formData.reportDate || "N/A"}</div>
              <div className="col-span-2"><strong>Referred By:</strong> {formData.referredBy || "N/A"}</div>
            </div>
          </div>

          {/* Procedure Details */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2">
              Procedure Details
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div><strong>Indication:</strong> {formData.indication || "N/A"}</div>
              <div><strong>Approach:</strong> {formData.approach || "N/A"}</div>
              <div><strong>Aortic Pressure:</strong> {formData.aorticPressure ? `${formData.aorticPressure} mmHg` : "N/A"}</div>
              <div><strong>LVEF:</strong> {formData.lvef ? `${formData.lvef}%` : "N/A"}</div>
              <div><strong>Contrast Volume:</strong> {formData.contrastVolume ? `${formData.contrastVolume} ml` : "N/A"}</div>
              <div><strong>Fluoro Time:</strong> {formData.fluoroTime ? `${formData.fluoroTime} min` : "N/A"}</div>
            </div>
          </div>

          {/* Dynamic Findings */}
          {renderFindings()}

          {/* Conclusion */}
          {formData.conclusion && (
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2">
                Conclusion
              </h3>
              <p className="text-sm whitespace-pre-wrap">{formData.conclusion}</p>
            </div>
          )}

          {/* Advice */}
          {formData.advice && (
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2">
                Advice / Management Plan
              </h3>
              <p className="text-sm whitespace-pre-wrap">{formData.advice}</p>
            </div>
          )}

          {/* Signature */}
          <div className="flex justify-between items-end pt-8 border-t border-primary/20">
            <div className="text-sm">
              <p className="font-semibold">Report Generated:</p>
              <p className="text-muted-foreground">{new Date().toLocaleDateString()}</p>
            </div>
            <div className="text-center">
              <div className="border-t border-foreground pt-2 min-w-[200px]">
                <p className="text-sm font-semibold">Consultant Cardiologist</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
