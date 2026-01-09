import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ReportHeader } from "@/components/ReportHeader";
import { PatientInfoSection } from "@/components/PatientInfoSection";
import { ProcedureDetailsSection } from "@/components/ProcedureDetailsSection";
import { CoronaryFindingsSection } from "@/components/CoronaryFindingsSection";
import { PeripheralFindingsSection } from "@/components/PeripheralFindingsSection";
import { RenalFindingsSection } from "@/components/RenalFindingsSection";
import { CarotidFindingsSection } from "@/components/CarotidFindingsSection";
import { AortagramFindingsSection } from "@/components/AortagramFindingsSection";
import { ConclusionSection } from "@/components/ConclusionSection";
import { ReportPreview } from "@/components/ReportPreview";
import { toast } from "sonner";
import { Save, Upload, RefreshCw, Eye, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Activity } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState<any>({
    reportDate: new Date().toISOString().split("T")[0],
    angiogramType: "CAG",
  });

  const [showPreview, setShowPreview] = useState(false);

  // Load draft from localStorage on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem(`angiogramReportDraft-${formData.angiogramType}`);
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setFormData(parsed);
        toast.info("Draft loaded from previous session");
      } catch (error) {
        console.error("Error loading draft:", error);
      }
    }
  }, [formData.angiogramType]);

  // Auto-save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(`angiogramReportDraft-${formData.angiogramType}`, JSON.stringify(formData));
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData]);

  const updateFormData = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const fillNormalValues = () => {
    const baseNormal = {
      origin: "Normal",
      conclusion: "Normal findings.",
      advice: "Continue medical management. Regular follow-up as advised.",
    };

    if (formData.angiogramType === "CAG") {
      setFormData((prev: any) => ({
        ...prev,
        ...baseNormal,
        dominance: "Right dominant",
        leftMain: "Normal",
        ladLesion1: "Normal",
        ladLesion2: "",
        diagonal: "Normal",
        lcxLesion1: "Normal",
        lcxLesion2: "",
        om1: "Normal",
        om2: "Normal",
        rcaLesion1: "Normal",
        rcaLesion2: "",
        pda: "Normal",
        plv: "Normal",
        conclusion: "Normal coronary arteries with no significant stenosis.",
      }));
    } else if (formData.angiogramType === "PAG") {
      setFormData((prev: any) => ({
        ...prev,
        ...baseNormal,
        laterality: "Bilateral",
        aorta: "Normal",
        iliac: "Normal",
        femoral: "Normal",
        popliteal: "Normal",
        conclusion: "Normal peripheral arteries with no significant stenosis.",
      }));
    } else if (formData.angiogramType === "RAG") {
      setFormData((prev: any) => ({
        ...prev,
        ...baseNormal,
        laterality: "Bilateral",
        renalArtery: "Normal",
        renalBranches: "Normal",
        conclusion: "Normal renal arteries with no significant stenosis.",
      }));
    } else if (formData.angiogramType === "CAROTID") {
      setFormData((prev: any) => ({
        ...prev,
        ...baseNormal,
        laterality: "Bilateral",
        commonCarotid: "Normal",
        internalCarotid: "Normal",
        externalCarotid: "Normal",
        conclusion: "Normal carotid arteries with no significant stenosis.",
      }));
    } else if (formData.angiogramType === "AORTAGRAM") {
      setFormData((prev: any) => ({
        ...prev,
        ...baseNormal,
        aortaType: "Thoracoabdominal",
        thoracicAorta: "Normal",
        abdominalAorta: "Normal",
        conclusion: "Normal aorta with no significant abnormalities.",
      }));
    }

    toast.success("Form filled with normal values");
  };

  const saveDraft = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${formData.angiogramType}-report-draft-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);

    toast.success("Draft saved successfully");
  };

  const loadDraft = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";

    input.onchange = (e: any) => {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = (event: any) => {
          try {
            const loaded = JSON.parse(event.target.result);
            setFormData(loaded);
            toast.success("Draft loaded successfully");
          } catch (error) {
            toast.error("Error loading draft file");
          }
        };

        reader.readAsText(file);
      }
    };

    input.click();
  };

  const clearForm = () => {
    if (confirm("Are you sure you want to clear all data?")) {
      setFormData({ reportDate: new Date().toISOString().split("T")[0], angiogramType: formData.angiogramType });
      localStorage.removeItem(`angiogramReportDraft-${formData.angiogramType}`);
      toast.success("Form cleared");
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 print:py-0 print:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card rounded-xl shadow-lg p-6 mb-6 print:shadow-none print:p-0">
          {/* ✅ HEADER WILL NOT SHOW IN PREVIEW OR PRINT → PREVENTS DUPLICATE HEADER */}
          {!showPreview && <ReportHeader />}

          <Tabs
            defaultValue="form"
            value={showPreview ? "preview" : "form"}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-6 print:hidden">
              <TabsTrigger value="form" onClick={() => setShowPreview(false)}>
                <FileText className="h-4 w-4 mr-2" />
                Form
              </TabsTrigger>

              <TabsTrigger value="preview" onClick={() => setShowPreview(true)}>
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </TabsTrigger>
            </TabsList>

            <TabsContent value="form" className="space-y-6">
              <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="bg-accent/50">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Activity className="h-5 w-5" />
                    Angiogram Type
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="angiogramType">Select Angiogram Type</Label>
                    <Select value={formData.angiogramType || "CAG"} onValueChange={(value) => updateFormData("angiogramType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select angiogram type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CAG">Coronary Angiogram (CAG)</SelectItem>
                        <SelectItem value="PAG">Peripheral Angiogram (PAG)</SelectItem>
                        <SelectItem value="RAG">Renal Angiogram (RAG)</SelectItem>
                        <SelectItem value="CAROTID">Carotid Angiogram</SelectItem>
                        <SelectItem value="AORTAGRAM">Aortagram</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <PatientInfoSection
                formData={formData}
                updateFormData={updateFormData}
              />

              <ProcedureDetailsSection
                formData={formData}
                updateFormData={updateFormData}
              />

              {formData.angiogramType === "CAG" && (
                <CoronaryFindingsSection
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}

              {formData.angiogramType === "PAG" && (
                <PeripheralFindingsSection
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}

              {formData.angiogramType === "RAG" && (
                <RenalFindingsSection
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}

              {formData.angiogramType === "CAROTID" && (
                <CarotidFindingsSection
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}

              {formData.angiogramType === "AORTAGRAM" && (
                <AortagramFindingsSection
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}

              <ConclusionSection
                formData={formData}
                updateFormData={updateFormData}
              />

              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <Button onClick={fillNormalValues} variant="outline" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Fill Normal
                </Button>

                <Button onClick={saveDraft} variant="outline" className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Draft
                </Button>

                <Button onClick={loadDraft} variant="outline" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Load Draft
                </Button>

                <Button onClick={clearForm} variant="destructive" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Clear Form
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="preview">
              <ReportPreview formData={formData} />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <style>{`
        @media print {
          body { background: white; }
          .print\\:hidden { display: none !important; }
          @page { margin: 20mm; }
        }
      `}</style>
    </div>
  );
};

export default Index;
