import legacyKo from "../ko";
import common from "./common";
import home from "./home";
import technology from "./technology";
import company from "./company";
import soundpen from "./soundpen";
import partnership from "./partnership";
import pokoro from "./pokoro";
import aigle from "./aigle";

const ko = {
  ...legacyKo,
  common,
  home,
  technology,
  company,
  soundpen,
  partnership,
  pokoro,
  aigle,
} as const;

export default ko;
