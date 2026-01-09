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
    ladLesion1: false,
    ladLesion2: false,
    diagonal: false,
    lcxLesion1: false,
    lcxLesion2: false,
    om1: false,
    om2: false,
    rcaLesion1: false,
    rcaLesion2: false,
    pda: false,
    plv: false,
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="ladLesion1">Lesion 1</Label>
                <Select value={formData.ladLesion1 || ""} onValueChange={(value) => handleSelectChange("ladLesion1", value)}>
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
                {customFields.ladLesion1 && (
                  <Input
                    placeholder="Enter custom LAD lesion 1 finding"
                    value={formData.ladLesion1Custom || ""}
                    onChange={(e) => updateFormData("ladLesion1Custom", e.target.value)}
                    className="mt-2"
                  />
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="ladLesion2">Lesion 2</Label>
                <Select value={formData.ladLesion2 || ""} onValueChange={(value) => handleSelectChange("ladLesion2", value)}>
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
                {customFields.ladLesion2 && (
                  <Input
                    placeholder="Enter custom LAD lesion 2 finding"
                    value={formData.ladLesion2Custom || ""}
                    onChange={(e) => updateFormData("ladLesion2Custom", e.target.value)}
                    className="mt-2"
                  />
                )}
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="diagonal">Diagonal Branch</Label>
              <Select value={formData.diagonal || ""} onValueChange={(value) => handleSelectChange("diagonal", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select finding" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Normal">Normal</SelectItem>
                  <SelectItem value="Proximal 80% stenosis">Proximal 80% stenosis</SelectItem>
                  <SelectItem value="Mid 70% stenosis">Mid 70% stenosis</SelectItem>
                  <SelectItem value="Diffuse disease">Diffuse disease</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
              {customFields.diagonal && (
                <Input
                  placeholder="Enter custom diagonal finding"
                  value={formData.diagonalCustom || ""}
                  onChange={(e) => updateFormData("diagonalCustom", e.target.value)}
                  className="mt-2"
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lcx">LCx (Left Circumflex)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="lcxLesion1">Lesion 1</Label>
                <Select value={formData.lcxLesion1 || ""} onValueChange={(value) => handleSelectChange("lcxLesion1", value)}>
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
                {customFields.lcxLesion1 && (
                  <Input
                    placeholder="Enter custom LCx lesion 1 finding"
                    value={formData.lcxLesion1Custom || ""}
                    onChange={(e) => updateFormData("lcxLesion1Custom", e.target.value)}
                    className="mt-2"
                  />
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lcxLesion2">Lesion 2</Label>
                <Select value={formData.lcxLesion2 || ""} onValueChange={(value) => handleSelectChange("lcxLesion2", value)}>
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
                {customFields.lcxLesion2 && (
                  <Input
                    placeholder="Enter custom LCx lesion 2 finding"
                    value={formData.lcxLesion2Custom || ""}
                    onChange={(e) => updateFormData("lcxLesion2Custom", e.target.value)}
                    className="mt-2"
                  />
                )}
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="om1">OM1 Branch</Label>
              <Select value={formData.om1 || ""} onValueChange={(value) => handleSelectChange("om1", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select finding" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Normal">Normal</SelectItem>
                  <SelectItem value="Proximal 80% stenosis">Proximal 80% stenosis</SelectItem>
                  <SelectItem value="Mid 70% stenosis">Mid 70% stenosis</SelectItem>
                  <SelectItem value="Diffuse disease">Diffuse disease</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
              {customFields.om1 && (
                <Input
                  placeholder="Enter custom OM1 finding"
                  value={formData.om1Custom || ""}
                  onChange={(e) => updateFormData("om1Custom", e.target.value)}
                  className="mt-2"
                />
              )}
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="om2">OM2 Branch</Label>
              <Select value={formData.om2 || ""} onValueChange={(value) => handleSelectChange("om2", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select finding" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Normal">Normal</SelectItem>
                  <SelectItem value="Proximal 80% stenosis">Proximal 80% stenosis</SelectItem>
                  <SelectItem value="Mid 70% stenosis">Mid 70% stenosis</SelectItem>
                  <SelectItem value="Diffuse disease">Diffuse disease</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
              {customFields.om2 && (
                <Input
                  placeholder="Enter custom OM2 finding"
                  value={formData.om2Custom || ""}
                  onChange={(e) => updateFormData("om2Custom", e.target.value)}
                  className="mt-2"
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="rca">RCA (Right Coronary Artery)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="rcaLesion1">Lesion 1</Label>
                <Select value={formData.rcaLesion1 || ""} onValueChange={(value) => handleSelectChange("rcaLesion1", value)}>
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
                {customFields.rcaLesion1 && (
                  <Input
                    placeholder="Enter custom RCA lesion 1 finding"
                    value={formData.rcaLesion1Custom || ""}
                    onChange={(e) => updateFormData("rcaLesion1Custom", e.target.value)}
                    className="mt-2"
                  />
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="rcaLesion2">Lesion 2</Label>
                <Select value={formData.rcaLesion2 || ""} onValueChange={(value) => handleSelectChange("rcaLesion2", value)}>
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
                {customFields.rcaLesion2 && (
                  <Input
                    placeholder="Enter custom RCA lesion 2 finding"
                    value={formData.rcaLesion2Custom || ""}
                    onChange={(e) => updateFormData("rcaLesion2Custom", e.target.value)}
                    className="mt-2"
                  />
                )}
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="pda">PDA Branch</Label>
              <Select value={formData.pda || ""} onValueChange={(value) => handleSelectChange("pda", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select finding" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Normal">Normal</SelectItem>
                  <SelectItem value="Proximal 80% stenosis">Proximal 80% stenosis</SelectItem>
                  <SelectItem value="Mid 70% stenosis">Mid 70% stenosis</SelectItem>
                  <SelectItem value="Diffuse disease">Diffuse disease</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
              {customFields.pda && (
                <Input
                  placeholder="Enter custom PDA finding"
                  value={formData.pdaCustom || ""}
                  onChange={(e) => updateFormData("pdaCustom", e.target.value)}
                  className="mt-2"
                />
              )}
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="plv">PLV Branch</Label>
              <Select value={formData.plv || ""} onValueChange={(value) => handleSelectChange("plv", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select finding" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Normal">Normal</SelectItem>
                  <SelectItem value="Proximal 80% stenosis">Proximal 80% stenosis</SelectItem>
                  <SelectItem value="Mid 70% stenosis">Mid 70% stenosis</SelectItem>
                  <SelectItem value="Diffuse disease">Diffuse disease</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
              {customFields.plv && (
                <Input
                  placeholder="Enter custom PLV finding"
                  value={formData.plvCustom || ""}
                  onChange={(e) => updateFormData("plvCustom", e.target.value)}
                  className="mt-2"
                />
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
