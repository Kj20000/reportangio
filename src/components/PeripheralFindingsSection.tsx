import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CustomSelect } from "@/components/CustomSelect";
import { Activity } from "lucide-react";

interface PeripheralFindingsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const PeripheralFindingsSection = ({ formData, updateFormData }: PeripheralFindingsProps) => {
  return (
    <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-accent/50">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Activity className="h-5 w-5" />
          Peripheral Anatomy / Findings
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Abdominal Aorta - Midline */}
        <div className="space-y-2 mb-6">
          <Label htmlFor="aorta">Abdominal Aorta</Label>
          <CustomSelect
            value={formData.aorta || ""}
            onValueChange={(value) => updateFormData("aorta", value)}
            options={[
              "Normal",
              "Mild atherosclerotic change",
              "Significant stenosis >70%",
              "Severe narrowing >90%"
            ]}
            fieldName="aorta"
            placeholder="Select finding"
            label="Abdominal Aorta finding"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Right Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary border-b border-primary/10 pb-1">Right Side</h3>
            
            <div className="space-y-2">
              <Label htmlFor="rightIliac">Common Iliac Artery</Label>
              <CustomSelect
                value={formData.rightIliac || ""}
                onValueChange={(value) => updateFormData("rightIliac", value)}
                options={[
                  "Normal",
                  "Proximal 90% stenosis",
                  "Mid 70% stenosis",
                  "Diffuse 50% disease"
                ]}
                fieldName="rightIliac"
                placeholder="Select finding"
                label="Right Common Iliac Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rightFemoral">Femoral Artery</Label>
              <CustomSelect
                value={formData.rightFemoral || ""}
                onValueChange={(value) => updateFormData("rightFemoral", value)}
                options={[
                  "Normal",
                  "Proximal 80% stenosis",
                  "Diffuse disease"
                ]}
                fieldName="rightFemoral"
                placeholder="Select finding"
                label="Right Femoral Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rightPopliteal">Popliteal Artery</Label>
              <CustomSelect
                value={formData.rightPopliteal || ""}
                onValueChange={(value) => updateFormData("rightPopliteal", value)}
                options={[
                  "Normal",
                  "Proximal 70% stenosis",
                  "Mid 90% stenosis",
                  "Diffuse atherosclerotic disease"
                ]}
                fieldName="rightPopliteal"
                placeholder="Select finding"
                label="Right Popliteal Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rightATA">Anterior Tibial Artery (ATA)</Label>
              <CustomSelect
                value={formData.rightATA || ""}
                onValueChange={(value) => updateFormData("rightATA", value)}
                options={[
                  "Normal",
                  "Proximal 70% stenosis",
                  "Mid 90% stenosis",
                  "Diffuse atherosclerotic disease"
                ]}
                fieldName="rightATA"
                placeholder="Select finding"
                label="Right ATA finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rightPTA">Posterior Tibial Artery (PTA)</Label>
              <CustomSelect
                value={formData.rightPTA || ""}
                onValueChange={(value) => updateFormData("rightPTA", value)}
                options={[
                  "Normal",
                  "Proximal 70% stenosis",
                  "Mid 90% stenosis",
                  "Diffuse atherosclerotic disease"
                ]}
                fieldName="rightPTA"
                placeholder="Select finding"
                label="Right PTA finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rightPeroneal">Peroneal Artery</Label>
              <CustomSelect
                value={formData.rightPeroneal || ""}
                onValueChange={(value) => updateFormData("rightPeroneal", value)}
                options={[
                  "Normal",
                  "Proximal 70% stenosis",
                  "Mid 90% stenosis",
                  "Diffuse atherosclerotic disease"
                ]}
                fieldName="rightPeroneal"
                placeholder="Select finding"
                label="Right Peroneal Artery finding"
              />
            </div>
          </div>

          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary border-b border-primary/10 pb-1">Left Side</h3>

            <div className="space-y-2">
              <Label htmlFor="leftIliac">Common Iliac Artery</Label>
              <CustomSelect
                value={formData.leftIliac || ""}
                onValueChange={(value) => updateFormData("leftIliac", value)}
                options={[
                  "Normal",
                  "Proximal 90% stenosis",
                  "Mid 70% stenosis",
                  "Diffuse 50% disease"
                ]}
                fieldName="leftIliac"
                placeholder="Select finding"
                label="Left Common Iliac Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leftFemoral">Femoral Artery</Label>
              <CustomSelect
                value={formData.leftFemoral || ""}
                onValueChange={(value) => updateFormData("leftFemoral", value)}
                options={[
                  "Normal",
                  "Proximal 80% stenosis",
                  "Diffuse disease"
                ]}
                fieldName="leftFemoral"
                placeholder="Select finding"
                label="Left Femoral Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leftPopliteal">Popliteal Artery</Label>
              <CustomSelect
                value={formData.leftPopliteal || ""}
                onValueChange={(value) => updateFormData("leftPopliteal", value)}
                options={[
                  "Normal",
                  "Proximal 70% stenosis",
                  "Mid 90% stenosis",
                  "Diffuse atherosclerotic disease"
                ]}
                fieldName="leftPopliteal"
                placeholder="Select finding"
                label="Left Popliteal Artery finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leftATA">Anterior Tibial Artery (ATA)</Label>
              <CustomSelect
                value={formData.leftATA || ""}
                onValueChange={(value) => updateFormData("leftATA", value)}
                options={[
                  "Normal",
                  "Proximal 70% stenosis",
                  "Mid 90% stenosis",
                  "Diffuse atherosclerotic disease"
                ]}
                fieldName="leftATA"
                placeholder="Select finding"
                label="Left ATA finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leftPTA">Posterior Tibial Artery (PTA)</Label>
              <CustomSelect
                value={formData.leftPTA || ""}
                onValueChange={(value) => updateFormData("leftPTA", value)}
                options={[
                  "Normal",
                  "Proximal 70% stenosis",
                  "Mid 90% stenosis",
                  "Diffuse atherosclerotic disease"
                ]}
                fieldName="leftPTA"
                placeholder="Select finding"
                label="Left PTA finding"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leftPeroneal">Peroneal Artery</Label>
              <CustomSelect
                value={formData.leftPeroneal || ""}
                onValueChange={(value) => updateFormData("leftPeroneal", value)}
                options={[
                  "Normal",
                  "Proximal 70% stenosis",
                  "Mid 90% stenosis",
                  "Diffuse atherosclerotic disease"
                ]}
                fieldName="leftPeroneal"
                placeholder="Select finding"
                label="Left Peroneal Artery finding"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};