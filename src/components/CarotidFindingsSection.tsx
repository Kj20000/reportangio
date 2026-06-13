import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CustomSelect } from "@/components/CustomSelect";
import { Activity } from "lucide-react";

interface CarotidFindingsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const CarotidFindingsSection = ({ formData, updateFormData }: CarotidFindingsProps) => {
  return (
    <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-accent/50">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Activity className="h-5 w-5" />
          Carotid Anatomy / Findings
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
            <Label htmlFor="laterality">Laterality</Label>
            <CustomSelect
              value={formData.laterality || ""}
              onValueChange={(value) => updateFormData("laterality", value)}
              options={["Bilateral", "Left", "Right"]}
              fieldName="laterality"
              placeholder="Select laterality"
              label="laterality"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="commonCarotid">Common Carotid Artery</Label>
            <CustomSelect
              value={formData.commonCarotid || ""}
              onValueChange={(value) => updateFormData("commonCarotid", value)}
              options={[
                "Normal",
                "Mild atherosclerotic change",
                "Significant stenosis >70%",
                "Severe narrowing >90%"
              ]}
              fieldName="commonCarotid"
              placeholder="Select finding"
              label="Common Carotid Artery finding"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="internalCarotid">Internal Carotid Artery</Label>
            <CustomSelect
              value={formData.internalCarotid || ""}
              onValueChange={(value) => updateFormData("internalCarotid", value)}
              options={[
                "Normal",
                "Proximal 90% stenosis",
                "Mid 70% stenosis",
                "Diffuse 50% disease"
              ]}
              fieldName="internalCarotid"
              placeholder="Select finding"
              label="Internal Carotid Artery finding"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="externalCarotid">External Carotid Artery</Label>
            <CustomSelect
              value={formData.externalCarotid || ""}
              onValueChange={(value) => updateFormData("externalCarotid", value)}
              options={[
                "Normal",
                "Proximal 80% stenosis",
                "Diffuse disease"
              ]}
              fieldName="externalCarotid"
              placeholder="Select finding"
              label="External Carotid Artery finding"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};