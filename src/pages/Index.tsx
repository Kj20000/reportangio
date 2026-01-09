import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ReportHeader } from "@/components/ReportHeader";
import { PatientInfoSection } from "@/components/PatientInfoSection";
import { ProcedureDetailsSection } from "@/components/ProcedureDetailsSection";
import { CoronaryFindingsSection } from "@/components/CoronaryFindingsSection";
import { ConclusionSection } from "@/components/ConclusionSection";
import { ReportPreview } from "@/components/ReportPreview";
import { toast } from "sonner";
import { Save, Upload, RefreshCw, Eye, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [formData, setFormData] = useState<any>({
    reportDate: new Date().toISOString().split("T")[0],
  });

  const [showPreview, setShowPreview] = useState(false);

  // Load draft from localStorage on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem("coronaryReportDraft");
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setFormData(parsed);
        toast.info("Draft loaded from previous session");
      } catch (error) {
        console.error("Error loading draft:", error);
      }
    }
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("coronaryReportDraft", JSON.stringify(formData));
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData]);

  const updateFormData = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const fillNormalValues = () => {
    setFormData((prev: any) => ({
      ...prev,
      origin: "Normal",
      dominance: "Right dominant",
      leftMain: "Normal",
      lad: "Normal",
      lcx: "Normal",
      rca: "Normal",
      conclusion: "Normal coronary arteries with no significant stenosis.",
      advice: "Continue medical management. Regular follow-up as advised.",
    }));

    toast.success("Form filled with normal values");
  };

  const saveDraft = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `coronary-report-draft-${Date.now()}.json`;
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
      setFormData({ reportDate: new Date().toISOString().split("T")[0] });
      localStorage.removeItem("coronaryReportDraft");
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
              <PatientInfoSection
                formData={formData}
                updateFormData={updateFormData}
              />

              <ProcedureDetailsSection
                formData={formData}
                updateFormData={updateFormData}
              />

              <CoronaryFindingsSection
                formData={formData}
                updateFormData={updateFormData}
              />

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
