import { Box } from '@mui/material';
import { StepIconProps } from '@mui/material/StepIcon';

interface SectionStepIconProps extends StepIconProps {
    name: string;
    iconUrl: string;
}

export const SectionStepIcon = ({ name, iconUrl, active, completed }: SectionStepIconProps) => {
    return (
        <Box
            component="picture"
            sx={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                cursor: 'pointer',
            }}
        >
            <source srcSet={`${iconUrl}.webp`} type="image/webp" />
            <source srcSet={`${iconUrl}.png`} type="image/png" />
            <Box
                component="img"
                src={`${iconUrl}.png`}
                alt={name}

                sx={{
                    width: '100%',
                    height: '100%',
                    opacity: active || completed ? 1 : 0.4,
                    transition: 'opacity 0.3s ease',
                    borderRadius: '50%',
                }}
            />
        </Box>


    );
};
