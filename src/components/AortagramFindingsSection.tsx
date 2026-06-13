import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CustomSelect } from "@/components/CustomSelect";
import { Activity } from "lucide-react";

interface AortagramFindingsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const AortagramFindingsSection = ({ formData, updateFormData }: AortagramFindingsProps) => {
  return (
    <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-accent/50">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Activity className="h-5 w-5" />
          Aorta Anatomy / Findings
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <Label htmlFor="origin">Origin</Label>
            <CustomSelect
              value={formData.origin || ""}
              onValueChange={(value) => updateFormData("origin", value)}
              options={["Normal", "Anomalous"]}
              fieldName="origin"
              placeholder="Select origin"
              label="origin"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="aortaType">Aorta Type</Label>
            <CustomSelect
              value={formData.aortaType || ""}
              onValueChange={(value) => updateFormData("aortaType", value)}
              options={["Thoracic", "Abdominal", "Thoracoabdominal"]}
              fieldName="aortaType"
              placeholder="Select aorta type"
              label="aorta type"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="thoracicAorta">Thoracic Aorta</Label>
            <CustomSelect
              value={formData.thoracicAorta || ""}
              onValueChange={(value) => updateFormData("thoracicAorta", value)}
              options={[
                "Normal",
                "Mild atherosclerotic change",
                "Aneurysm",
                "Dissection"
              ]}
              fieldName="thoracicAorta"
              placeholder="Select finding"
              label="Thoracic Aorta finding"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="abdominalAorta">Abdominal Aorta</Label>
            <CustomSelect
              value={formData.abdominalAorta || ""}
              onValueChange={(value) => updateFormData("abdominalAorta", value)}
              options={[
                "Normal",
                "Mild atherosclerotic change",
                "Significant stenosis >70%",
                "Aneurysm"
              ]}
              fieldName="abdominalAorta"
              placeholder="Select finding"
              label="Abdominal Aorta finding"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};