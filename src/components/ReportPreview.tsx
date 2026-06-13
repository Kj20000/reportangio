import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Printer, Download } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface ReportPreviewProps {
  formData: any;
}

export const ReportPreview = ({ formData }: ReportPreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null);
  const [printOnLetterhead, setPrintOnLetterhead] = useState(() => {
    const saved = localStorage.getItem("angiogramPrintOnLetterhead");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [letterheadHeaderSpace, setLetterheadHeaderSpace] = useState(() => {
    const saved = localStorage.getItem("angiogramLetterheadHeaderSpace");
    return saved !== null ? parseInt(saved, 10) : 60; // Default to 60mm
  });

  useEffect(() => {
    localStorage.setItem("angiogramPrintOnLetterhead", JSON.stringify(printOnLetterhead));
  }, [printOnLetterhead]);

  useEffect(() => {
    localStorage.setItem("angiogramLetterheadHeaderSpace", letterheadHeaderSpace.toString());
  }, [letterheadHeaderSpace]);

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
          <div className="space-y-2 print:space-y-1">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2 print:text-xs print:pb-1">
              Coronary Anatomy / Findings
            </h3>
            <div className="space-y-4 text-sm print:text-xs print:space-y-2">
              <div><strong>Origin:</strong> {formData.origin || "N/A"}</div>
              <div><strong>Dominance:</strong> {formData.dominance || "N/A"}</div>
              <div className="pt-2 print:pt-1">
                <strong className="text-primary">Left Main:</strong> {getVesselText("leftMain", "leftMainCustom")}
              </div>

              <div className="space-y-2 print:space-y-1">
                <div>
                  <strong className="text-primary">LAD:</strong> {getVesselText("ladLesion1", "ladLesion1Custom")}{formData.ladLesion2 && `, ${getVesselText("ladLesion2", "ladLesion2Custom")}`}
                </div>
                <div className="bg-gray-50 p-2 rounded print:p-1">
                  <strong>Diagonal:</strong> {getVesselText("diagonal", "diagonalCustom")}
                </div>
              </div>

              <div className="space-y-2 print:space-y-1">
                <div>
                  <strong className="text-primary">LCx:</strong> {getVesselText("lcxLesion1", "lcxLesion1Custom")}{formData.lcxLesion2 && `, ${getVesselText("lcxLesion2", "lcxLesion2Custom")}`}
                </div>
                <div className="grid grid-cols-2 gap-4 print:gap-2">
                  <div className="bg-gray-50 p-2 rounded print:p-1">
                    <strong>OM1:</strong> {getVesselText("om1", "om1Custom")}
                  </div>
                  <div className="bg-gray-50 p-2 rounded print:p-1">
                    <strong>OM2:</strong> {getVesselText("om2", "om2Custom")}
                  </div>
                </div>
              </div>

              <div className="space-y-2 print:space-y-1">
                <div>
                  <strong className="text-primary">RCA:</strong> {getVesselText("rcaLesion1", "rcaLesion1Custom")}{formData.rcaLesion2 && `, ${getVesselText("rcaLesion2", "rcaLesion2Custom")}`}
                </div>
                <div className="grid grid-cols-2 gap-4 print:gap-2">
                  <div className="bg-gray-50 p-2 rounded print:p-1">
                    <strong>PDA:</strong> {getVesselText("pda", "pdaCustom")}
                  </div>
                  <div className="bg-gray-50 p-2 rounded print:p-1">
                    <strong>PLV:</strong> {getVesselText("plv", "plvCustom")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "PAG":
        return (
          <div className="space-y-2 print:space-y-1">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2 print:text-xs print:pb-1">
              Peripheral Anatomy / Findings
            </h3>
            <div className="space-y-4 text-sm print:text-xs print:space-y-2">
              <div>
                <strong className="text-primary">Abdominal Aorta:</strong> {getVesselText("aorta")}
              </div>
              
              <div className="grid grid-cols-2 gap-4 print:gap-2">
                <div>
                  <h4 className="font-semibold text-primary mb-1 uppercase tracking-wide text-xs print:text-[10px]">Right Side</h4>
                  <div className="space-y-1 bg-gray-50/50 p-2 rounded print:p-1">
                    <div><strong>Common Iliac:</strong> {getVesselText("rightIliac")}</div>
                    <div><strong>Femoral:</strong> {getVesselText("rightFemoral")}</div>
                    <div><strong>Popliteal:</strong> {getVesselText("rightPopliteal")}</div>
                    <div><strong>ATA:</strong> {getVesselText("rightATA")}</div>
                    <div><strong>PTA:</strong> {getVesselText("rightPTA")}</div>
                    <div><strong>Peroneal:</strong> {getVesselText("rightPeroneal")}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1 uppercase tracking-wide text-xs print:text-[10px]">Left Side</h4>
                  <div className="space-y-1 bg-gray-50/50 p-2 rounded print:p-1">
                    <div><strong>Common Iliac:</strong> {getVesselText("leftIliac")}</div>
                    <div><strong>Femoral:</strong> {getVesselText("leftFemoral")}</div>
                    <div><strong>Popliteal:</strong> {getVesselText("leftPopliteal")}</div>
                    <div><strong>ATA:</strong> {getVesselText("leftATA")}</div>
                    <div><strong>PTA:</strong> {getVesselText("leftPTA")}</div>
                    <div><strong>Peroneal:</strong> {getVesselText("leftPeroneal")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "RAG":
        return (
          <div className="space-y-2 print:space-y-1">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2 print:text-xs print:pb-1">
              Renal Anatomy / Findings
            </h3>
            <div className="space-y-4 text-sm print:text-xs print:space-y-2">
              <div className="grid grid-cols-2 gap-4 print:gap-2">
                <div>
                  <h4 className="font-semibold text-primary mb-1 uppercase tracking-wide text-xs print:text-[10px]">Right Side</h4>
                  <div className="space-y-1 bg-gray-50/50 p-2 rounded print:p-1">
                    <div><strong>Renal Artery:</strong> {getVesselText("rightRenalArtery")}</div>
                    <div><strong>Renal Branches:</strong> {getVesselText("rightRenalBranches")}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1 uppercase tracking-wide text-xs print:text-[10px]">Left Side</h4>
                  <div className="space-y-1 bg-gray-50/50 p-2 rounded print:p-1">
                    <div><strong>Renal Artery:</strong> {getVesselText("leftRenalArtery")}</div>
                    <div><strong>Renal Branches:</strong> {getVesselText("leftRenalBranches")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "CAROTID":
        return (
          <div className="space-y-2 print:space-y-1">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2 print:text-xs print:pb-1">
              Carotid Anatomy / Findings
            </h3>
            <div className="space-y-4 text-sm print:text-xs print:space-y-2">

              <div className="grid grid-cols-2 gap-4 print:gap-2">
                <div>
                  <h4 className="font-semibold text-primary mb-1 uppercase tracking-wide text-xs print:text-[10px]">Right Side</h4>
                  <div className="space-y-1 bg-gray-50/50 p-2 rounded print:p-1">
                    <div><strong>Common Carotid:</strong> {getVesselText("rightCommonCarotid")}</div>
                    <div><strong>Internal Carotid:</strong> {getVesselText("rightInternalCarotid")}</div>
                    <div><strong>External Carotid:</strong> {getVesselText("rightExternalCarotid")}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1 uppercase tracking-wide text-xs print:text-[10px]">Left Side</h4>
                  <div className="space-y-1 bg-gray-50/50 p-2 rounded print:p-1">
                    <div><strong>Common Carotid:</strong> {getVesselText("leftCommonCarotid")}</div>
                    <div><strong>Internal Carotid:</strong> {getVesselText("leftInternalCarotid")}</div>
                    <div><strong>External Carotid:</strong> {getVesselText("leftExternalCarotid")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "AORTAGRAM":
        return (
          <div className="space-y-2 print:space-y-1">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2 print:text-xs print:pb-1">
              Aorta Anatomy / Findings
            </h3>
            <div className="space-y-2 text-sm print:text-xs print:space-y-1">
              <div><strong>Origin:</strong> {formData.origin || "N/A"}</div>
              <div><strong>Aorta Type:</strong> {formData.aortaType || "N/A"}</div>
              <div className="pt-2 print:pt-1">
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
      <div className="flex flex-wrap items-center gap-6 print:hidden bg-accent/40 p-3 rounded-lg border border-primary/10">
        <Button onClick={handlePrint} className="gap-2">
          <Printer className="h-4 w-4" />
          Print Report
        </Button>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="print-letterhead" 
            checked={printOnLetterhead} 
            onCheckedChange={(checked) => setPrintOnLetterhead(!!checked)} 
          />
          <Label
            htmlFor="print-letterhead"
            className="text-sm font-medium leading-none cursor-pointer select-none text-muted-foreground hover:text-foreground transition-colors"
          >
            Print on Pre-printed Letterhead (Leaves space for physical header and hides digital footer)
          </Label>
        </div>
        {printOnLetterhead && (
          <div className="flex items-center gap-2 border-l border-primary/20 pl-4 animate-in fade-in duration-200">
            <Label htmlFor="header-space" className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              Header Space:
            </Label>
            <div className="flex items-center gap-1.5">
              <Input
                id="header-space"
                type="number"
                min="0"
                max="150"
                value={letterheadHeaderSpace}
                onChange={(e) => setLetterheadHeaderSpace(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-16 h-8 text-center text-sm"
              />
              <span className="text-sm font-medium text-muted-foreground">mm</span>
            </div>
          </div>
        )}
      </div>

      <Card className="border-primary/20 shadow-lg print:border-none print:shadow-none print:bg-transparent" ref={previewRef}>
        <CardContent className="p-8 space-y-6 print:p-0 print:space-y-3">
          {/* Visual letterhead spacer for screen preview only */}
          {printOnLetterhead && (
            <div 
              style={{ height: `${letterheadHeaderSpace}mm` }}
              className="w-full border-2 border-dashed border-primary/20 rounded-lg flex items-center justify-center text-muted-foreground text-xs select-none bg-accent/5 print:hidden mb-4 transition-all duration-200"
            >
              <div className="text-center p-4">
                <p className="font-semibold text-primary/70">Physical Letterhead Space</p>
                <p className="text-[10px] mt-1 text-muted-foreground/80">Height: {letterheadHeaderSpace}mm (Reserved space on physical page)</p>
              </div>
            </div>
          )}

          {/* Physical letterhead spacer for print output only */}
          {printOnLetterhead && (
            <div 
              style={{ height: `${letterheadHeaderSpace}mm` }}
              className="hidden print:block w-full"
            />
          )}

          {/* Header */}
          <div className="text-center border-b-2 border-primary pb-4 print:pb-2 print:mb-4">
            <h1 className="text-2xl font-bold text-primary print:text-xl">CKS Hospital, Jaipur</h1>
            <p className="text-sm text-muted-foreground print:text-xs">Department of Cardiology</p>
            <h2 className="text-lg font-semibold mt-2 uppercase tracking-wide print:text-sm print:mt-1">
              {getReportTitle()}
            </h2>
          </div>

          {/* Patient Information */}
          <div className="space-y-2 print:space-y-1">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2 print:text-xs print:pb-1">
              Patient Information
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm print:text-xs print:gap-y-1">
              <div><strong>Name:</strong> {formData.patientName || "N/A"}</div>
              <div>
                <strong>Age/Gender:</strong> {(() => {
                  const age = formData.age || "";
                  const gender = formData.gender ? formData.gender.charAt(0).toUpperCase() : "";
                  if (age && gender) return `${age}/${gender}`;
                  return age || gender || "N/A";
                })()}
              </div>
              <div><strong>UHID:</strong> {formData.uhid || "N/A"}</div>
              <div><strong>Cath No:</strong> {formData.cathNo || "N/A"}</div>
              <div><strong>Date:</strong> {formData.reportDate || "N/A"}</div>
              <div><strong>Operator:</strong> {formData.operator || "N/A"}</div>
            </div>
          </div>

          {/* Procedure Details */}
          <div className="space-y-2 print:space-y-1">
            <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2 print:text-xs print:pb-1">
              Procedure Details
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm print:text-xs print:gap-y-1">
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
            <div className="space-y-2 print:space-y-1">
              <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2 print:text-xs print:pb-1">
                Conclusion
              </h3>
              <p className="text-sm whitespace-pre-wrap print:text-xs">{formData.conclusion}</p>
            </div>
          )}

          {/* Advice */}
          {formData.advice && (
            <div className="space-y-2 print:space-y-1">
              <h3 className="text-base font-semibold text-primary uppercase border-b border-primary/20 pb-2 print:text-xs print:pb-1">
                Advice / Management Plan
              </h3>
              <p className="text-sm whitespace-pre-wrap print:text-xs">{formData.advice}</p>
            </div>
          )}

          {/* Signature */}
          <div className="pt-8 border-t border-primary/20 space-y-6 print:pt-4 print:space-y-3 print-signature-section">
            <div className="grid grid-cols-4 gap-4 print:gap-2 text-left pt-16 print:pt-5">
              {/* Dr. Prakash Chandwani */}
              <div className="border-t border-foreground/30 pt-2 flex flex-col justify-between h-full">
                <div>
                  <p className="text-xs font-bold text-foreground uppercase tracking-tight print:text-[9px]">DR. PRAKASH CHANDWANI</p>
                  <p className="text-[10px] text-muted-foreground leading-tight mt-0.5 print:text-[8px]">MD, DM (Cardiology), FACC, FSCAI (USA), FESC</p>
                  <p className="text-[10px] text-muted-foreground leading-tight mt-0.5 print:text-[7.5px]">Chief Consultant Interventional Cardiologist</p>
                </div>
                <p className="text-[10px] font-semibold text-foreground mt-1 print:text-[7.5px]">(Director)</p>
              </div>

              {/* Dr. Kushal Jangid */}
              <div className="border-t border-foreground/30 pt-2 flex flex-col justify-between h-full">
                <div>
                  <p className="text-xs font-bold text-foreground uppercase tracking-tight print:text-[9px]">DR. KUSHAL JANGID</p>
                  <p className="text-[10px] text-muted-foreground leading-tight mt-0.5 print:text-[8px]">MD, DNB (CARDIOLOGY)</p>
                  <p className="text-[10px] text-muted-foreground leading-tight mt-0.5 print:text-[7.5px]">Consultant Interventional Cardiologist</p>
                </div>
              </div>

              {/* Dr. Nitesh Pansari */}
              <div className="border-t border-foreground/30 pt-2 flex flex-col justify-between h-full">
                <div>
                  <p className="text-xs font-bold text-foreground uppercase tracking-tight print:text-[9px]">DR. NITESH PANSARI</p>
                  <p className="text-[10px] text-muted-foreground leading-tight mt-0.5 print:text-[8px]">MD, DNB (CARDIOLOGY)</p>
                  <p className="text-[10px] text-muted-foreground leading-tight mt-0.5 print:text-[7.5px]">Consultant Interventional Cardiologist</p>
                </div>
              </div>

              {/* Dr. Sangeeta Kumari Choudhary */}
              <div className="border-t border-foreground/30 pt-2 flex flex-col justify-between h-full">
                <div>
                  <p className="text-xs font-bold text-foreground uppercase tracking-tight print:text-[9px]">DR. SANGEETA KUMARI CHOUDHARY</p>
                  <p className="text-[10px] text-muted-foreground leading-tight mt-0.5 print:text-[8px]">MBBS, DM (CARDIOLOGY)</p>
                  <p className="text-[10px] text-muted-foreground leading-tight mt-0.5 print:text-[7.5px]">Consultant Interventional Cardiologist</p>
                </div>
              </div>
            </div>

            <div className={`flex justify-between items-center text-xs text-muted-foreground pt-2 border-t border-dotted border-primary/10 print:pt-1 ${printOnLetterhead ? "print:hidden" : ""}`}>
              <div>
                <span className="font-semibold text-foreground">Report Generated:</span> {new Date().toLocaleDateString()}
              </div>
              <div className="text-right font-medium">
                CKS Hospital, Jaipur
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dynamic Print Styles for Letterhead Margins */}
      <style>{`
        @media print {
          body { 
            background: white !important; 
            font-size: 11px !important;
            line-height: 1.25 !important;
          }
          * {
            background-color: transparent !important;
            background-image: none !important;
            box-shadow: none !important;
          }
          .print\\:hidden { display: none !important; }
          @page {
            size: A4;
            margin: ${printOnLetterhead ? "0mm 15mm 20mm 15mm" : "10mm 15mm 15mm 15mm"} !important;
          }
          
          /* Force page-break adjustments for printing on single page */
          .print-signature-section {
            break-inside: avoid;
            page-break-inside: avoid;
            margin-top: 15px !important;
            padding-top: 8px !important;
          }
          
          h1, h2, h3, h4 {
            page-break-after: avoid;
            break-after: avoid;
          }
          
          h3 {
            font-size: 12px !important;
            padding-bottom: 2px !important;
            margin-bottom: 2px !important;
          }
          
          /* Tighten spacing throughout when printing */
          .space-y-6 > * + * {
            margin-top: 0.5rem !important;
          }
          .space-y-4 > * + * {
            margin-top: 0.35rem !important;
          }
          .space-y-2 > * + * {
            margin-top: 0.2rem !important;
          }
          .pt-16 {
            padding-top: 1.25rem !important;
          }
          .pt-8 {
            padding-top: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};
