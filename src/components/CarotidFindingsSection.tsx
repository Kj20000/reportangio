import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity } from "lucide-react";
import { useState } from "react";

interface CarotidFindingsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const CarotidFindingsSection = ({ formData, updateFormData }: CarotidFindingsProps) => {
  const [customFields, setCustomFields] = useState({
    commonCarotid: false,
    internalCarotid: false,
    externalCarotid: false,
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
          <Activity className="h-5 w-5" />
          Carotid Anatomy / Findings
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
            <Label htmlFor="laterality">Laterality</Label>
            <Select value={formData.laterality || ""} onValueChange={(value) => updateFormData("laterality", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select laterality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bilateral">Bilateral</SelectItem>
                <SelectItem value="Left">Left</SelectItem>
                <SelectItem value="Right">Right</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="commonCarotid">Common Carotid Artery</Label>
            <Select value={formData.commonCarotid || ""} onValueChange={(value) => handleSelectChange("commonCarotid", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select finding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Mild atherosclerotic change">Mild atherosclerotic change</SelectItem>
                <SelectItem value="Significant stenosis >70%">Significant stenosis &gt;70%</SelectItem>
                <SelectItem value="Severe narrowing >90%">Severe narrowing &gt;90%</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {customFields.commonCarotid && (
              <Input
                placeholder="Enter custom common carotid finding"
                value={formData.commonCarotidCustom || ""}
                onChange={(e) => updateFormData("commonCarotidCustom", e.target.value)}
                className="mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="internalCarotid">Internal Carotid Artery</Label>
            <Select value={formData.internalCarotid || ""} onValueChange={(value) => handleSelectChange("internalCarotid", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select finding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Proximal 90% stenosis">Proximal 90% stenosis</SelectItem>
                <SelectItem value="Mid 70% stenosis">Mid 70% stenosis</SelectItem>
                <SelectItem value="Diffuse 50% disease">Diffuse 50% disease</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {customFields.internalCarotid && (
              <Input
                placeholder="Enter custom internal carotid finding"
                value={formData.internalCarotidCustom || ""}
                onChange={(e) => updateFormData("internalCarotidCustom", e.target.value)}
                className="mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="externalCarotid">External Carotid Artery</Label>
            <Select value={formData.externalCarotid || ""} onValueChange={(value) => handleSelectChange("externalCarotid", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select finding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Proximal 80% stenosis">Proximal 80% stenosis</SelectItem>
                <SelectItem value="Diffuse disease">Diffuse disease</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {customFields.externalCarotid && (
              <Input
                placeholder="Enter custom external carotid finding"
                value={formData.externalCarotidCustom || ""}
                onChange={(e) => updateFormData("externalCarotidCustom", e.target.value)}
                className="mt-2"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};