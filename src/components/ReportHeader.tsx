import { FileText } from "lucide-react";

export const ReportHeader = () => {
  return (
    <div className="text-center border-b-2 border-primary/20 pb-6 mb-6">
      <div className="flex items-center justify-center gap-3 mb-2">
        <FileText className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold text-primary">CKS Hospital, Jaipur</h1>
      </div>
      <p className="text-sm text-muted-foreground">Department of Cardiology</p>
      <h2 className="text-lg font-semibold text-foreground mt-3 tracking-wide uppercase">
        Coronary Angiography Report
      </h2>
    </div>
  );
};
