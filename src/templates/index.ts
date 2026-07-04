import { PlainTemplate } from './PlainTemplate';
import { Template2 } from './Template2';


export interface TemplateConfig {
    name: string;
    component: React.ComponentType<any>;
    requiresPhoto: boolean;
}

export const TEMPLATES: Record<string, TemplateConfig> = {
    plain: {
        name: 'Plain Template',
        component: PlainTemplate,
        requiresPhoto: false
    },
    template2: {
        name: 'Bold Contrast',
        component: Template2,
        requiresPhoto: true
    }
};