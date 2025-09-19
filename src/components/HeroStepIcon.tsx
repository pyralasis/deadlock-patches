import { StepIconProps } from '@mui/material/StepIcon';

interface HeroStepIconProps extends StepIconProps {
    name: string;
    iconUrl: string;
}

export const HeroStepIcon = ({ name, iconUrl, active, completed }: HeroStepIconProps) => {
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
