import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomSelect } from "@/components/CustomSelect";
import { Activity } from "lucide-react";

interface ProcedureDetailsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const ProcedureDetailsSection = ({ formData, updateFormData }: ProcedureDetailsProps) => {
  return (
    <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-accent/50">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Activity className="h-5 w-5" />
          Procedure Details
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="indication">Indication</Label>
            <CustomSelect
              value={formData.indication || ""}
              onValueChange={(value) => updateFormData("indication", value)}
              options={[
                "Chronic stable angina",
                "Acute coronary syndrome",
                "Unstable angina",
                "NSTEMI",
                "STEMI",
                "Post MI evaluation"
              ]}
              fieldName="indication"
              placeholder="Select indication"
              label="indication"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="approach">Approach</Label>
            <CustomSelect
              value={formData.approach || ""}
              onValueChange={(value) => updateFormData("approach", value)}
              options={[
                "Right radial",
                "Left radial",
                "Right femoral",
                "Left femoral"
              ]}
              fieldName="approach"
              placeholder="Select approach"
              label="approach"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="aorticPressure">Aortic Pressure (mmHg)</Label>
            <Input
              id="aorticPressure"
              placeholder="e.g., 120/80"
              value={formData.aorticPressure || ""}
              onChange={(e) => updateFormData("aorticPressure", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lvef">LVEF (%)</Label>
            <Input
              id="lvef"
              type="number"
              placeholder="e.g., 55"
              value={formData.lvef || ""}
              onChange={(e) => updateFormData("lvef", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contrastVolume">Contrast Volume (ml)</Label>
            <Input
              id="contrastVolume"
              type="number"
              placeholder="e.g., 100"
              value={formData.contrastVolume || ""}
              onChange={(e) => updateFormData("contrastVolume", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fluoroTime">Fluoro Time (min)</Label>
            <Input
              id="fluoroTime"
              placeholder="e.g., 5.2"
              value={formData.fluoroTime || ""}
              onChange={(e) => updateFormData("fluoroTime", e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
