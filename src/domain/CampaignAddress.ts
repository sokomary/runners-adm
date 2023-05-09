import { Campaign } from "./Campaign";
import { Address } from "./Adddress";

interface CampaignAddress {
  campaign: Campaign | undefined;
  address: Address;
  done: boolean;
  photos: File[];
}

export type { CampaignAddress };
