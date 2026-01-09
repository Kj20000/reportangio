import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="Age"
              value={formData.age || ""}
              onChange={(e) => updateFormData("age", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select value={formData.gender || ""} onValueChange={(value) => updateFormData("gender", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
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
            <Label htmlFor="referredBy">Referred By</Label>
            <Input
              id="referredBy"
              placeholder="Doctor name"
              value={formData.referredBy || ""}
              onChange={(e) => updateFormData("referredBy", e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
