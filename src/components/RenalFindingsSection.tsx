import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity } from "lucide-react";
import { useState } from "react";

interface RenalFindingsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const RenalFindingsSection = ({ formData, updateFormData }: RenalFindingsProps) => {
  const [customFields, setCustomFields] = useState({
    renalArtery: false,
    renalBranches: false,
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
          Renal Anatomy / Findings
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
            <Label htmlFor="renalArtery">Renal Artery</Label>
            <Select value={formData.renalArtery || ""} onValueChange={(value) => handleSelectChange("renalArtery", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select finding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Mild atherosclerotic change">Mild atherosclerotic change</SelectItem>
                <SelectItem value="Significant ostial stenosis >70%">Significant ostial stenosis &gt;70%</SelectItem>
                <SelectItem value="Severe narrowing >90%">Severe narrowing &gt;90%</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {customFields.renalArtery && (
              <Input
                placeholder="Enter custom renal artery finding"
                value={formData.renalArteryCustom || ""}
                onChange={(e) => updateFormData("renalArteryCustom", e.target.value)}
                className="mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="renalBranches">Renal Artery Branches</Label>
            <Select value={formData.renalBranches || ""} onValueChange={(value) => handleSelectChange("renalBranches", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select finding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Branch stenosis 70%">Branch stenosis 70%</SelectItem>
                <SelectItem value="Diffuse disease">Diffuse disease</SelectItem>
                <SelectItem value="Custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {customFields.renalBranches && (
              <Input
                placeholder="Enter custom renal branches finding"
                value={formData.renalBranchesCustom || ""}
                onChange={(e) => updateFormData("renalBranchesCustom", e.target.value)}
                className="mt-2"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};