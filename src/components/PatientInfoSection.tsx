import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomSelect } from "@/components/CustomSelect";
import { User } from "lucide-react";

interface PatientInfoProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const PatientInfoSection = ({ formData, updateFormData }: PatientInfoProps) => {
  return (
    <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-accent/50">
        <CardTitle className="flex items-center gap-2 text-primary">
          <User className="h-5 w-5" />
          Patient Information
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="patientName">Patient Name</Label>
            <Input
              id="patientName"
              placeholder="Enter full name"
              value={formData.patientName || ""}
              onChange={(e) => updateFormData("patientName", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Age / Gender</Label>
            <div className="flex gap-2">
              <Input
                id="age"
                type="number"
                placeholder="Age"
                value={formData.age || ""}
                onChange={(e) => updateFormData("age", e.target.value)}
                className="w-24"
              />
              <div className="flex-1">
                <CustomSelect
                  value={formData.gender || ""}
                  onValueChange={(value) => updateFormData("gender", value)}
                  options={["Male", "Female", "Other"]}
                  fieldName="gender"
                  placeholder="Gender"
                  label="gender"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cathNo">Cath No</Label>
            <Input
              id="cathNo"
              placeholder="Cath Lab Number"
              value={formData.cathNo || ""}
              onChange={(e) => updateFormData("cathNo", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="uhid">UHID</Label>
            <Input
              id="uhid"
              placeholder="Hospital ID"
              value={formData.uhid || ""}
              onChange={(e) => updateFormData("uhid", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reportDate">Report Date</Label>
            <Input
              id="reportDate"
              type="date"
              value={formData.reportDate || ""}
              onChange={(e) => updateFormData("reportDate", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="operator">Operator</Label>
            <CustomSelect
              value={formData.operator || ""}
              onValueChange={(value) => updateFormData("operator", value)}
              options={[
                "Dr. Prakash Chandwani",
                "Dr. Kushal Jangid",
                "Dr. Nitesh Pansari",
                "Dr. Sangeeta Kumari Choudhary"
              ]}
              fieldName="operator"
              placeholder="Select operator"
              label="operator"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
