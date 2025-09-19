import { StepIconProps } from '@mui/material/StepIcon';

interface SectionStepIconProps extends StepIconProps {
    name: string;
    iconUrl: string;
}

export const SectionStepIcon = ({ name, iconUrl, active, completed }: SectionStepIconProps) => {
    return (
        <img
            src={iconUrl}
            alt={name}
            style={{
                width: 96,
                height: 96,
                opacity: active || completed ? 1 : 0.4,
                transition: 'opacity 0.3s ease',
                cursor: 'pointer',
                borderRadius: '50%',
            }}
        />
    );
};
