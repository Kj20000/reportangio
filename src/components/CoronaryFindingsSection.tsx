import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CustomSelect } from "@/components/CustomSelect";
import { Heart } from "lucide-react";

interface CoronaryFindingsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const CoronaryFindingsSection = ({ formData, updateFormData }: CoronaryFindingsProps) => {
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
            <Label htmlFor="dominance">Dominance</Label>
            <CustomSelect
              value={formData.dominance || ""}
              onValueChange={(value) => updateFormData("dominance", value)}
              options={["Right dominant", "Left dominant", "Co-dominant"]}
              fieldName="dominance"
              placeholder="Select dominance"
              label="dominance"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="leftMain">Left Main</Label>
            <CustomSelect
              value={formData.leftMain || ""}
              onValueChange={(value) => updateFormData("leftMain", value)}
              options={[
                "Normal",
                "Mild diffuse atherosclerotic change",
                "Significant ostial disease >70%",
                "Severe narrowing >90%"
              ]}
              fieldName="leftMain"
              placeholder="Select finding"
              label="Left Main finding"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lad">LAD (Left Anterior Descending)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="ladLesion1">Lesion 1</Label>
                <CustomSelect
                  value={formData.ladLesion1 || ""}
                  onValueChange={(value) => updateFormData("ladLesion1", value)}
                  options={[
                    "Normal",
                    "Proximal 90% stenosis, TIMI 3",
                    "Mid 70% stenosis",
                    "Diffuse 50% disease",
                    "Ostial 80% stenosis",
                    "Acute thrombus in LAD"
                  ]}
                  fieldName="ladLesion1"
                  placeholder="Select finding"
                  label="LAD lesion 1 finding"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ladLesion2">Lesion 2</Label>
                <CustomSelect
                  value={formData.ladLesion2 || ""}
                  onValueChange={(value) => updateFormData("ladLesion2", value)}
                  options={[
                    "Normal",
                    "Proximal 90% stenosis, TIMI 3",
                    "Mid 70% stenosis",
                    "Diffuse 50% disease",
                    "Ostial 80% stenosis",
                    "Acute thrombus in LAD"
                  ]}
                  fieldName="ladLesion2"
                  placeholder="Select finding"
                  label="LAD lesion 2 finding"
                />
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="diagonal">Diagonal Branch</Label>
              <CustomSelect
                value={formData.diagonal || ""}
                onValueChange={(value) => updateFormData("diagonal", value)}
                options={[
                  "Normal",
                  "Proximal 80% stenosis",
                  "Mid 70% stenosis",
                  "Diffuse disease"
                ]}
                fieldName="diagonal"
                placeholder="Select finding"
                label="diagonal finding"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lcx">LCx (Left Circumflex)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="lcxLesion1">Lesion 1</Label>
                <CustomSelect
                  value={formData.lcxLesion1 || ""}
                  onValueChange={(value) => updateFormData("lcxLesion1", value)}
                  options={[
                    "Normal",
                    "Proximal 80% stenosis",
                    "OM branch 70%",
                    "Diffuse disease"
                  ]}
                  fieldName="lcxLesion1"
                  placeholder="Select finding"
                  label="LCx lesion 1 finding"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lcxLesion2">Lesion 2</Label>
                <CustomSelect
                  value={formData.lcxLesion2 || ""}
                  onValueChange={(value) => updateFormData("lcxLesion2", value)}
                  options={[
                    "Normal",
                    "Proximal 80% stenosis",
                    "OM branch 70%",
                    "Diffuse disease"
                  ]}
                  fieldName="lcxLesion2"
                  placeholder="Select finding"
                  label="LCx lesion 2 finding"
                />
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="om1">OM1 Branch</Label>
              <CustomSelect
                value={formData.om1 || ""}
                onValueChange={(value) => updateFormData("om1", value)}
                options={[
                  "Normal",
                  "Proximal 80% stenosis",
                  "Mid 70% stenosis",
                  "Diffuse disease"
                ]}
                fieldName="om1"
                placeholder="Select finding"
                label="OM1 finding"
              />
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="om2">OM2 Branch</Label>
              <CustomSelect
                value={formData.om2 || ""}
                onValueChange={(value) => updateFormData("om2", value)}
                options={[
                  "Normal",
                  "Proximal 80% stenosis",
                  "Mid 70% stenosis",
                  "Diffuse disease"
                ]}
                fieldName="om2"
                placeholder="Select finding"
                label="OM2 finding"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="rca">RCA (Right Coronary Artery)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="rcaLesion1">Lesion 1</Label>
                <CustomSelect
                  value={formData.rcaLesion1 || ""}
                  onValueChange={(value) => updateFormData("rcaLesion1", value)}
                  options={[
                    "Normal",
                    "Proximal 70% stenosis",
                    "Mid 90% stenosis",
                    "Diffuse atherosclerotic disease"
                  ]}
                  fieldName="rcaLesion1"
                  placeholder="Select finding"
                  label="RCA lesion 1 finding"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rcaLesion2">Lesion 2</Label>
                <CustomSelect
                  value={formData.rcaLesion2 || ""}
                  onValueChange={(value) => updateFormData("rcaLesion2", value)}
                  options={[
                    "Normal",
                    "Proximal 70% stenosis",
                    "Mid 90% stenosis",
                    "Diffuse atherosclerotic disease"
                  ]}
                  fieldName="rcaLesion2"
                  placeholder="Select finding"
                  label="RCA lesion 2 finding"
                />
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="pda">PDA Branch</Label>
              <CustomSelect
                value={formData.pda || ""}
                onValueChange={(value) => updateFormData("pda", value)}
                options={[
                  "Normal",
                  "Proximal 80% stenosis",
                  "Mid 70% stenosis",
                  "Diffuse disease"
                ]}
                fieldName="pda"
                placeholder="Select finding"
                label="PDA finding"
              />
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="plv">PLV Branch</Label>
              <CustomSelect
                value={formData.plv || ""}
                onValueChange={(value) => updateFormData("plv", value)}
                options={[
                  "Normal",
                  "Proximal 80% stenosis",
                  "Mid 70% stenosis",
                  "Diffuse disease"
                ]}
                fieldName="plv"
                placeholder="Select finding"
                label="PLV finding"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
