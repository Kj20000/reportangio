import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
            <Select value={formData.indication || ""} onValueChange={(value) => updateFormData("indication", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select indication" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Chronic stable angina">Chronic stable angina</SelectItem>
                <SelectItem value="Acute coronary syndrome">Acute coronary syndrome</SelectItem>
                <SelectItem value="Unstable angina">Unstable angina</SelectItem>
                <SelectItem value="NSTEMI">NSTEMI</SelectItem>
                <SelectItem value="STEMI">STEMI</SelectItem>
                <SelectItem value="Post MI evaluation">Post MI evaluation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="approach">Approach</Label>
            <Select value={formData.approach || ""} onValueChange={(value) => updateFormData("approach", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select approach" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Right radial">Right radial</SelectItem>
                <SelectItem value="Left radial">Left radial</SelectItem>
                <SelectItem value="Right femoral">Right femoral</SelectItem>
                <SelectItem value="Left femoral">Left femoral</SelectItem>
              </SelectContent>
            </Select>
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
