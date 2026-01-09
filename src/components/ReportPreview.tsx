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
              Coronary Angiography Report
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

          {/* Coronary Findings */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2">
              Coronary Anatomy / Findings
            </h3>
            <div className="space-y-2 text-sm">
              <div><strong>Origin:</strong> {formData.origin || "N/A"}</div>
              <div><strong>Dominance:</strong> {formData.dominance || "N/A"}</div>
              <div className="pt-2">
                <strong className="text-primary">Left Main:</strong> {getVesselText("leftMain", "leftMainCustom")}
              </div>
              <div>
                <strong className="text-primary">LAD:</strong> {getVesselText("lad", "ladCustom")}
              </div>
              <div>
                <strong className="text-primary">LCx:</strong> {getVesselText("lcx", "lcxCustom")}
              </div>
              <div>
                <strong className="text-primary">RCA:</strong> {getVesselText("rca", "rcaCustom")}
              </div>
            </div>
          </div>

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
