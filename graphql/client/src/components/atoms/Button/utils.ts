import { ButtonProps } from './Button';

export const handlerBackgroundColor = (alert: any, mode: ButtonProps['mode'] = 'primary', hover?: boolean) => {
    switch (mode) {
        case 'primary':
            return hover ? alert.primary2 : alert.primary;
        case 'warning':
            return hover ? alert.warning2 : alert.warning;
        case 'success':
            return hover ? alert.success2 : alert.success;
        case 'danger':
            return hover ? alert.danger2 : alert.danger;
        case 'transparent':
            return hover ? alert.transparent2 : alert.transparent;
        default:
            return null;
    }
};

export const handlerFontSize = (size: ButtonProps['size']) => {
    switch (size) {
        case 'small':
            return '1rem';
        case 'medium':
            return '1.4rem';
        case 'large':
            return '2rem';
    }
};
