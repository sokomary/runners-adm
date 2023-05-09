import { Courier } from "./Courier";
import { Campaign } from "./Campaign";
import { Source } from "./Source";

interface CampaignAsk {
  id: number;
  courier: Courier;
  campaign: Campaign;
  source: Source;
}

export type { CampaignAsk };
