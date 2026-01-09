import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity } from "lucide-react";
import { useState } from "react";

interface AortagramFindingsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const AortagramFindingsSection = ({ formData, updateFormData }: AortagramFindingsProps) => {
  const [customFields, setCustomFields] = useState({
    thoracicAorta: false,
    abdominalAorta: false,
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
          Aorta Anatomy / Findings
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
            <Label htmlFor="aortaType">Aorta Type</Label>
            <Select value={formData.aortaType || ""} onValueChange={(value) => updateFormData("aortaType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select aorta type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Thoracic">Thoracic</SelectItem>
                <SelectItem value="Abdominal">Abdominal</SelectItem>
                <SelectItem value="Thoracoabdominal">Thoracoabdominal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="thoracicAorta">Thoracic Aorta</Label>
            <Select value={formData.thoracicAorta || ""} onValueChange={(value) => handleSelectChange("thoracicAorta", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select finding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Mild atherosclerotic change">Mild atherosclerotic change</SelectItem>
                <SelectItem value="Aneurysm">Aneurysm</SelectItem>
                <SelectItem value="Dissection">Dissection</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {customFields.thoracicAorta && (
              <Input
                placeholder="Enter custom thoracic aorta finding"
                value={formData.thoracicAortaCustom || ""}
                onChange={(e) => updateFormData("thoracicAortaCustom", e.target.value)}
                className="mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="abdominalAorta">Abdominal Aorta</Label>
            <Select value={formData.abdominalAorta || ""} onValueChange={(value) => handleSelectChange("abdominalAorta", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select finding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Mild atherosclerotic change">Mild atherosclerotic change</SelectItem>
                <SelectItem value="Significant stenosis >70%">Significant stenosis &gt;70%</SelectItem>
                <SelectItem value="Aneurysm">Aneurysm</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {customFields.abdominalAorta && (
              <Input
                placeholder="Enter custom abdominal aorta finding"
                value={formData.abdominalAortaCustom || ""}
                onChange={(e) => updateFormData("abdominalAortaCustom", e.target.value)}
                className="mt-2"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};