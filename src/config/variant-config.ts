import { SITE_VARIANT } from './variant';
import { VARIANT_CONFIG as FULL_CONFIG } from './variants/full';
import { VARIANT_CONFIG as TECH_CONFIG } from './variants/tech';
import { VARIANT_CONFIG as FINANCE_CONFIG } from './variants/finance';
import { VARIANT_CONFIG as HAPPY_CONFIG } from './variants/happy';
import { VARIANT_CONFIG as COMMODITY_CONFIG } from './variants/commodity';
import { malaysia as MALAYSIA_CONFIG } from './variants/malaysia';
import type { VariantConfig } from './variants/base';

export const VARIANT_CONFIG: VariantConfig = (() => {
  switch (SITE_VARIANT) {
    case 'tech': return TECH_CONFIG;
    case 'finance': return FINANCE_CONFIG;
    case 'happy': return HAPPY_CONFIG;
    case 'commodity': return COMMODITY_CONFIG;
    case 'malaysia': return MALAYSIA_CONFIG;
    default: return FULL_CONFIG;
  }
})();
