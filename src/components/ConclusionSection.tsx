import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileCheck } from "lucide-react";

interface ConclusionSectionProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const ConclusionSection = ({ formData, updateFormData }: ConclusionSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="bg-accent/50">
          <CardTitle className="flex items-center gap-2 text-primary">
            <FileCheck className="h-5 w-5" />
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <Label htmlFor="conclusion">Summary of findings</Label>
            <Textarea
              id="conclusion"
              placeholder="Enter concise conclusion"
              value={formData.conclusion || ""}
              onChange={(e) => updateFormData("conclusion", e.target.value)}
              className="min-h-[120px]"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="bg-accent/50">
          <CardTitle className="flex items-center gap-2 text-primary">
            <FileCheck className="h-5 w-5" />
            Advice / Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <Label htmlFor="advice">Management recommendations</Label>
            <Textarea
              id="advice"
              placeholder="Enter advice or management plan"
              value={formData.advice || ""}
              onChange={(e) => updateFormData("advice", e.target.value)}
              className="min-h-[120px]"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
