import { AutomationDuoToneWhite } from "@/icons/automation-duotone-white";
import { HomeDuoToneWhite } from "@/icons/home-duo-tone-white";
import { RocketDuoToneWhite } from "@/icons/rocket-duotone-white";
import { SettingsDuoToneWhite } from "@/icons/settings-duotone-white";

import { v4 as uuid } from "uuid";

type FieldProps = {
  label: string;
  id: string;
};

type SidebarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU: SidebarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeDuoToneWhite></HomeDuoToneWhite>,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <AutomationDuoToneWhite></AutomationDuoToneWhite>,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <RocketDuoToneWhite></RocketDuoToneWhite>,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <SettingsDuoToneWhite></SettingsDuoToneWhite>,
  },
];
