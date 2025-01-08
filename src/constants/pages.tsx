import { AutomationDuoToneBlue } from "@/icons/automation-duotone-blue";

import { ContactsDuoToneBlue } from "@/icons/contacts-duotone-blue";
import { HomeDuoToneBlue } from "@/icons/home-duotone-blue";
import { RocketDuoToneBlue } from "@/icons/rocket-duotone-blue";
import { SettingsDuoToneWhite } from "@/icons/settings-duotone-white";

export const PAGE_BREAD_CRUMBS = [
  "contacts",
  "automation",
  "integrations",
  "settings",
];

type Props = {
  [page in string]: React.ReactNode;
};
export const PAGE_ICONS: Props = {
  AUTOMATIONS: <AutomationDuoToneBlue></AutomationDuoToneBlue>,
  CONTACTS: <ContactsDuoToneBlue></ContactsDuoToneBlue>,
  SETTINGS: <SettingsDuoToneWhite></SettingsDuoToneWhite>,
  INTEGRATIONS: <RocketDuoToneBlue></RocketDuoToneBlue>,
  HOME: <HomeDuoToneBlue></HomeDuoToneBlue>,
};

export const PLANS = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "$0",
    features: [
      "Boost engagement with target responses",
      "Automate comment replies to enhance audience interaction",
      "Turn followers into customers with targeted messaging",
    ],
    cta: "Get Started",
  },
  {
    name: "Smart AI Plan",
    description: "Advanced features for power users",
    price: "$99",
    features: [
      "All features from Free Plan",
      "AI-powered response generation",
      "Advanced analytics and insights",
      "Priority customer support",
      "Custom branding options",
    ],
    cta: "Upgrade Now",
  },
];
