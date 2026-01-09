import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart } from "lucide-react";
import { useState } from "react";

interface CoronaryFindingsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const CoronaryFindingsSection = ({ formData, updateFormData }: CoronaryFindingsProps) => {
  const [customFields, setCustomFields] = useState({
    leftMain: false,
    lad: false,
    lcx: false,
    rca: false,
  });

  const handleSelectChange = (field: string, value: string) => {
    updateFormData(field, value);
    if (value === "Custom") {
      setCustomFields((prev) => ({ ...prev, [field]: true }));
    } else {
      setCustomFields((prev) => ({ ...prev, [field]: false }));
    }
  };

  return (
    <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-accent/50">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Heart className="h-5 w-5" />
          Coronary Anatomy / Findings
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <Label htmlFor="origin">Origin</Label>
            <Select value={formData.origin || ""} onValueChange={(value) => updateFormData("origin", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select origin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Anomalous">Anomalous</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dominance">Dominance</Label>
            <Select value={formData.dominance || ""} onValueChange={(value) => updateFormData("dominance", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select dominance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Right dominant">Right dominant</SelectItem>
                <SelectItem value="Left dominant">Left dominant</SelectItem>
                <SelectItem value="Co-dominant">Co-dominant</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="leftMain">Left Main</Label>
            <Select value={formData.leftMain || ""} onValueChange={(value) => handleSelectChange("leftMain", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select finding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Mild diffuse atherosclerotic change">Mild diffuse atherosclerotic change</SelectItem>
                <SelectItem value="Significant ostial disease >70%">Significant ostial disease &gt;70%</SelectItem>
                <SelectItem value="Severe narrowing >90%">Severe narrowing &gt;90%</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {customFields.leftMain && (
              <Input
                placeholder="Enter custom left main finding"
                value={formData.leftMainCustom || ""}
                onChange={(e) => updateFormData("leftMainCustom", e.target.value)}
                className="mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lad">LAD (Left Anterior Descending)</Label>
            <Select value={formData.lad || ""} onValueChange={(value) => handleSelectChange("lad", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select finding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Proximal 90% stenosis, TIMI 3">Proximal 90% stenosis, TIMI 3</SelectItem>
                <SelectItem value="Mid 70% stenosis">Mid 70% stenosis</SelectItem>
                <SelectItem value="Diffuse 50% disease">Diffuse 50% disease</SelectItem>
                <SelectItem value="Ostial 80% stenosis">Ostial 80% stenosis</SelectItem>
                <SelectItem value="Acute thrombus in LAD">Acute thrombus in LAD</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {customFields.lad && (
              <Input
                placeholder="Enter custom LAD finding"
                value={formData.ladCustom || ""}
                onChange={(e) => updateFormData("ladCustom", e.target.value)}
                className="mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lcx">LCx (Left Circumflex)</Label>
            <Select value={formData.lcx || ""} onValueChange={(value) => handleSelectChange("lcx", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select finding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Proximal 80% stenosis">Proximal 80% stenosis</SelectItem>
                <SelectItem value="OM branch 70%">OM branch 70%</SelectItem>
                <SelectItem value="Diffuse disease">Diffuse disease</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {customFields.lcx && (
              <Input
                placeholder="Enter custom LCx finding"
                value={formData.lcxCustom || ""}
                onChange={(e) => updateFormData("lcxCustom", e.target.value)}
                className="mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="rca">RCA (Right Coronary Artery)</Label>
            <Select value={formData.rca || ""} onValueChange={(value) => handleSelectChange("rca", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select finding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Proximal 70% stenosis">Proximal 70% stenosis</SelectItem>
                <SelectItem value="Mid 90% stenosis">Mid 90% stenosis</SelectItem>
                <SelectItem value="Diffuse atherosclerotic disease">Diffuse atherosclerotic disease</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {customFields.rca && (
              <Input
                placeholder="Enter custom RCA finding"
                value={formData.rcaCustom || ""}
                onChange={(e) => updateFormData("rcaCustom", e.target.value)}
                className="mt-2"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
