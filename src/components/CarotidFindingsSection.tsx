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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Right Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary border-b border-primary/10 pb-1">Right Side</h3>

            <div className="space-y-2">
              <Label htmlFor="rightCommonCarotid">Common Carotid Artery</Label>
              <CustomSelect
                value={formData.rightCommonCarotid || ""}
                onValueChange={(value) => updateFormData("rightCommonCarotid", value)}
                options={[
                  "Normal",
                  "Mild atherosclerotic change",
                  "Significant stenosis >70%",
                  "Severe narrowing >90%"
                ]}
                fieldName="rightCommonCarotid"
                placeholder="Select finding"
                label="Right Common Carotid Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rightInternalCarotid">Internal Carotid Artery</Label>
              <CustomSelect
                value={formData.rightInternalCarotid || ""}
                onValueChange={(value) => updateFormData("rightInternalCarotid", value)}
                options={[
                  "Normal",
                  "Proximal 90% stenosis",
                  "Mid 70% stenosis",
                  "Diffuse 50% disease"
                ]}
                fieldName="rightInternalCarotid"
                placeholder="Select finding"
                label="Right Internal Carotid Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rightExternalCarotid">External Carotid Artery</Label>
              <CustomSelect
                value={formData.rightExternalCarotid || ""}
                onValueChange={(value) => updateFormData("rightExternalCarotid", value)}
                options={[
                  "Normal",
                  "Proximal 80% stenosis",
                  "Diffuse disease"
                ]}
                fieldName="rightExternalCarotid"
                placeholder="Select finding"
                label="Right External Carotid Artery finding"
              />
            </div>
          </div>

          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary border-b border-primary/10 pb-1">Left Side</h3>

            <div className="space-y-2">
              <Label htmlFor="leftCommonCarotid">Common Carotid Artery</Label>
              <CustomSelect
                value={formData.leftCommonCarotid || ""}
                onValueChange={(value) => updateFormData("leftCommonCarotid", value)}
                options={[
                  "Normal",
                  "Mild atherosclerotic change",
                  "Significant stenosis >70%",
                  "Severe narrowing >90%"
                ]}
                fieldName="leftCommonCarotid"
                placeholder="Select finding"
                label="Left Common Carotid Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leftInternalCarotid">Internal Carotid Artery</Label>
              <CustomSelect
                value={formData.leftInternalCarotid || ""}
                onValueChange={(value) => updateFormData("leftInternalCarotid", value)}
                options={[
                  "Normal",
                  "Proximal 90% stenosis",
                  "Mid 70% stenosis",
                  "Diffuse 50% disease"
                ]}
                fieldName="leftInternalCarotid"
                placeholder="Select finding"
                label="Left Internal Carotid Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leftExternalCarotid">External Carotid Artery</Label>
              <CustomSelect
                value={formData.leftExternalCarotid || ""}
                onValueChange={(value) => updateFormData("leftExternalCarotid", value)}
                options={[
                  "Normal",
                  "Proximal 80% stenosis",
                  "Diffuse disease"
                ]}
                fieldName="leftExternalCarotid"
                placeholder="Select finding"
                label="Left External Carotid Artery finding"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};