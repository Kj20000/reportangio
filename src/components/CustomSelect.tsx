import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface CustomSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  fieldName: string;
  placeholder?: string;
  label?: string;
}

export const CustomSelect = ({
  value,
  onValueChange,
  options: initialOptions,
  fieldName,
  placeholder = "Select option",
  label = ""
}: CustomSelectProps) => {
  const [customOptions, setCustomOptions] = useState<string[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newOption, setNewOption] = useState("");

  // Load custom options from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`custom_opts_${fieldName}`);
    if (saved) {
      try {
        setCustomOptions(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading custom options for " + fieldName, e);
      }
    }
  }, [fieldName]);

  // Combined list of options (default ones + user added ones)
  const allOptions = Array.from(new Set([...initialOptions, ...customOptions]));

  const handleValueChange = (val: string) => {
    if (val === "ADD_CUSTOM_OPTION") {
      setIsAdding(true);
    } else {
      setIsAdding(false);
      onValueChange(val);
    }
  };

  const handleSaveCustom = () => {
    const trimmed = newOption.trim();
    if (!trimmed) {
      toast.error("Please enter a valid option");
      return;
    }
    if (allOptions.includes(trimmed)) {
      toast.error("This option already exists");
      return;
    }

    const updated = [...customOptions, trimmed];
    setCustomOptions(updated);
    localStorage.setItem(`custom_opts_${fieldName}`, JSON.stringify(updated));
    onValueChange(trimmed);
    setIsAdding(false);
    setNewOption("");
    toast.success("Option added successfully");
  };

  const handleDeleteCustom = (e: React.MouseEvent | React.PointerEvent, optToDelete: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // If we delete the currently selected custom option, reset selection
    if (value === optToDelete) {
      onValueChange("");
    }
    const updated = customOptions.filter(opt => opt !== optToDelete);
    setCustomOptions(updated);
    localStorage.setItem(`custom_opts_${fieldName}`, JSON.stringify(updated));
    toast.success("Option removed");
  };

  return (
    <div className="space-y-2 w-full">
      <div className="flex gap-2">
        <div className="flex-1">
          <Select value={isAdding ? "ADD_CUSTOM_OPTION" : value} onValueChange={handleValueChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {allOptions.map((opt) => (
                <SelectItem key={opt} value={opt} className="group flex justify-between items-center pr-8 relative">
                  <span>{opt}</span>
                  {customOptions.includes(opt) && (
                    <button
                      type="button"
                      onPointerDown={(e) => handleDeleteCustom(e, opt)}
                      onClick={(e) => handleDeleteCustom(e, opt)}
                      className="ml-auto opacity-0 group-hover:opacity-100 hover:text-destructive p-1 rounded transition-opacity cursor-pointer z-50 absolute right-2 top-1/2 -translate-y-1/2"
                      title="Delete this option"
                    >
                      <Trash2 className="h-3.5 w-3.5 text-muted-foreground hover:text-destructive" />
                    </button>
                  )}
                </SelectItem>
              ))}
              <SelectItem value="ADD_CUSTOM_OPTION" className="text-primary font-medium hover:bg-primary/10">
                <span className="flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  Custom...
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isAdding && (
        <div className="flex gap-2 animate-in slide-in-from-top-1 duration-200">
          <Input
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder={`Enter new ${label || 'option'}`}
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSaveCustom();
              }
            }}
            autoFocus
          />
          <Button type="button" onClick={handleSaveCustom} size="sm">
            Save
          </Button>
          <Button type="button" onClick={() => { setIsAdding(false); setNewOption(""); }} variant="outline" size="sm">
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
};
