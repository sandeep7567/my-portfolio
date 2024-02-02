import { FC } from 'react'
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

interface SwitchInputProps {
  setIsMode: (value:boolean) => void;
  className?: string;
}

export const SwitchInput: FC<SwitchInputProps> = ({
  setIsMode,
  className
}) => {
  const onChange  = (value: boolean) => {
    console.log(value);
    setIsMode(value);
  };

  return (
      <Switch
        onCheckedChange={(value:boolean) => onChange(value)}
        id="airplane-mode"
        className={cn(className)}
      />
  )
};