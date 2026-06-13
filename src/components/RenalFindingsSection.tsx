import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CustomSelect } from "@/components/CustomSelect";
import { Activity } from "lucide-react";

interface RenalFindingsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const RenalFindingsSection = ({ formData, updateFormData }: RenalFindingsProps) => {
  return (
    <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-accent/50">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Activity className="h-5 w-5" />
          Renal Anatomy / Findings
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Right Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary border-b border-primary/10 pb-1">Right Side</h3>
            
            <div className="space-y-2">
              <Label htmlFor="rightRenalArtery">Renal Artery</Label>
              <CustomSelect
                value={formData.rightRenalArtery || ""}
                onValueChange={(value) => updateFormData("rightRenalArtery", value)}
                options={[
                  "Normal",
                  "Mild atherosclerotic change",
                  "Significant ostial stenosis >70%",
                  "Severe narrowing >90%"
                ]}
                fieldName="rightRenalArtery"
                placeholder="Select finding"
                label="Right Renal Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rightRenalBranches">Renal Artery Branches</Label>
              <CustomSelect
                value={formData.rightRenalBranches || ""}
                onValueChange={(value) => updateFormData("rightRenalBranches", value)}
                options={[
                  "Normal",
                  "Branch stenosis 70%",
                  "Diffuse disease"
                ]}
                fieldName="rightRenalBranches"
                placeholder="Select finding"
                label="Right Renal Artery Branches finding"
              />
            </div>
          </div>

          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary border-b border-primary/10 pb-1">Left Side</h3>

            <div className="space-y-2">
              <Label htmlFor="leftRenalArtery">Renal Artery</Label>
              <CustomSelect
                value={formData.leftRenalArtery || ""}
                onValueChange={(value) => updateFormData("leftRenalArtery", value)}
                options={[
                  "Normal",
                  "Mild atherosclerotic change",
                  "Significant ostial stenosis >70%",
                  "Severe narrowing >90%"
                ]}
                fieldName="leftRenalArtery"
                placeholder="Select finding"
                label="Left Renal Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leftRenalBranches">Renal Artery Branches</Label>
              <CustomSelect
                value={formData.leftRenalBranches || ""}
                onValueChange={(value) => updateFormData("leftRenalBranches", value)}
                options={[
                  "Normal",
                  "Branch stenosis 70%",
                  "Diffuse disease"
                ]}
                fieldName="leftRenalBranches"
                placeholder="Select finding"
                label="Left Renal Artery Branches finding"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};